// ===================================================================
// APP.JS - Study with Lâm ✨ (Liquid Glass & Gentle Encouragement)
// ===================================================================

const AppState = {
  currentExam: null,
  currentMode: 'exam', // 'exam' or 'practice'
  userAnswers: {},     // { [qId]: answer }
  graded: false,
  score: 0,
  timerInterval: null,
  timeRemaining: 0,
  reviewFilter: 'all', // 'all', 'wrong', 'correct'
  audioPlayer: null,
  currentAudioSrc: '',
  currentAudioPart: ''
};

const STORAGE_PREFIX = 'study_lam_exam_';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  AppState.audioPlayer = document.getElementById('main-audio');
  renderExamCards();

  const savedExamId = localStorage.getItem(STORAGE_PREFIX + 'last_exam') || EXAM_DATABASE[0].id;
  selectExam(savedExamId);

  setupEventListeners();
  updateHighScores();
}

function setupEventListeners() {
  const modeBtn = document.getElementById('btn-mode-toggle');
  if (modeBtn) {
    modeBtn.addEventListener('click', toggleMode);
  }

  const openPaletteBtn = document.getElementById('btn-open-palette');
  const closePaletteBtn = document.getElementById('btn-close-palette');
  const drawer = document.getElementById('palette-drawer');
  
  if (openPaletteBtn && drawer) {
    openPaletteBtn.addEventListener('click', () => drawer.classList.add('open'));
  }
  if (closePaletteBtn && drawer) {
    closePaletteBtn.addEventListener('click', () => drawer.classList.remove('open'));
  }

  const submitBtn = document.getElementById('btn-submit-exam');
  if (submitBtn) {
    submitBtn.addEventListener('click', confirmSubmitExam);
  }

  const resetBtn = document.getElementById('btn-reset-exam');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetCurrentExam);
  }

  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      AppState.reviewFilter = chip.dataset.filter;
      applyReviewFilter();
    });
  });

  const btnCloseModal = document.getElementById('btn-close-modal');
  const modal = document.getElementById('score-modal');
  if (btnCloseModal && modal) {
    btnCloseModal.addEventListener('click', () => modal.classList.remove('show'));
  }
  const btnReviewMistakes = document.getElementById('btn-modal-review-mistakes');
  if (btnReviewMistakes) {
    btnReviewMistakes.addEventListener('click', () => {
      modal.classList.remove('show');
      const wrongChip = document.querySelector('.filter-chip[data-filter="wrong"]');
      if (wrongChip) wrongChip.click();
      window.scrollTo({ top: 350, behavior: 'smooth' });
    });
  }

  setupAudioControls();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      if (drawer) drawer.classList.remove('open');
      if (modal) modal.classList.remove('show');
    }
  });
}

function setupAudioControls() {
  const audio = AppState.audioPlayer;
  if (!audio) return;

  const btnMinus5 = document.getElementById('audio-back-5');
  const btnPlus5 = document.getElementById('audio-fwd-5');
  if (btnMinus5) {
    btnMinus5.addEventListener('click', () => {
      audio.currentTime = Math.max(0, audio.currentTime - 5);
    });
  }
  if (btnPlus5) {
    btnPlus5.addEventListener('click', () => {
      audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
    });
  }

  const speedChips = document.querySelectorAll('.speed-chip');
  speedChips.forEach(chip => {
    chip.addEventListener('click', () => {
      speedChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      audio.playbackRate = parseFloat(chip.dataset.speed);
    });
  });
}

function renderExamCards() {
  const container = document.getElementById('exam-cards-container');
  if (!container) return;

  container.innerHTML = EXAM_DATABASE.map(exam => {
    const isListening = exam.skill === 'listening';
    const iconClass = isListening ? 'listening' : 'reading';
    const iconEmoji = isListening ? '🎧' : '📖';
    const savedScore = localStorage.getItem(STORAGE_PREFIX + 'score_' + exam.id);
    const scoreText = savedScore ? `Điểm cao: ${savedScore}/${exam.total_pts}` : 'Chưa thi';
    const hasScoreClass = savedScore ? 'has-score' : '';

    return `
      <div class="exam-card" data-exam-id="${exam.id}" onclick="selectExam('${exam.id}')">
        <div class="exam-info">
          <div class="exam-icon ${iconClass}">
            ${iconEmoji}
          </div>
          <div>
            <div class="exam-name">${exam.title}</div>
            <div class="exam-meta">${exam.skill_vn} • ${exam.total_questions} câu • ${exam.duration_minutes} phút</div>
          </div>
        </div>
        <div class="exam-badge-score ${hasScoreClass}" id="score-badge-${exam.id}">
          ${scoreText}
        </div>
      </div>
    `;
  }).join('');
}

function selectExam(examId) {
  const exam = EXAM_DATABASE.find(e => e.id === examId);
  if (!exam) return;

  AppState.currentExam = exam;
  localStorage.setItem(STORAGE_PREFIX + 'last_exam', examId);

  document.querySelectorAll('.exam-card').forEach(card => {
    if (card.dataset.examId === examId) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  AppState.userAnswers = {};
  AppState.graded = false;
  AppState.score = 0;
  AppState.reviewFilter = 'all';

  loadSavedProgress(examId);
  updateExamHeaderUI();
  renderExamContent();

  if (AppState.currentMode === 'exam') {
    startTimer(exam.duration_minutes * 60);
  } else {
    stopTimer();
    const tb = document.getElementById('timer-badge');
    if (tb) tb.style.display = 'none';
  }

  setupExamAudio();
  renderPalette();

  const filterBar = document.getElementById('review-filter-bar');
  if (filterBar) filterBar.classList.remove('show');

  document.querySelectorAll('.filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.filter === 'all');
  });

  updateProgress();
}

function updateExamHeaderUI() {
  const exam = AppState.currentExam;
  document.getElementById('active-exam-title').innerText = exam.title;
  document.getElementById('active-exam-skill').innerText = exam.skill_vn;
  document.getElementById('active-exam-count').innerText = `${exam.total_questions} câu hỏi`;
  document.getElementById('active-exam-time').innerText = `${exam.duration_minutes} phút`;
}

function toggleMode() {
  const btn = document.getElementById('btn-mode-toggle');
  const timerBadge = document.getElementById('timer-badge');

  if (AppState.currentMode === 'exam') {
    AppState.currentMode = 'practice';
    btn.innerHTML = '<span>💡</span> <strong>Ôn Luyện (Xem giải thích ngay)</strong>';
    btn.classList.add('active');
    stopTimer();
    if (timerBadge) timerBadge.style.display = 'none';
  } else {
    AppState.currentMode = 'exam';
    btn.innerHTML = '<span>⏱️</span> <strong>Thi Thử (Bấm giờ)</strong>';
    btn.classList.remove('active');
    if (AppState.currentExam) {
      startTimer(AppState.currentExam.duration_minutes * 60);
    }
  }

  renderExamContent();
}

function setupExamAudio() {
  const audioBox = document.getElementById('sticky-audio-box');
  const audioElem = AppState.audioPlayer;
  const exam = AppState.currentExam;

  if (exam.skill === 'listening') {
    audioBox.classList.add('show');
    renderAudioPartsNav(exam);

    const firstAudioQ = exam.questions.find(q => q.audio);
    if (firstAudioQ && firstAudioQ.audio) {
      setAudioSource(firstAudioQ.audio, firstAudioQ.part);
    }
  } else {
    audioBox.classList.remove('show');
    if (audioElem) {
      audioElem.pause();
    }
  }
}

function renderAudioPartsNav(exam) {
  const nav = document.getElementById('audio-parts-nav');
  if (!nav) return;

  const partMap = new Map();
  exam.questions.forEach(q => {
    if (!partMap.has(q.part)) {
      partMap.set(q.part, {
        part: q.part,
        part_title: q.part_title || q.part,
        audio: q.audio || '',
        qNums: [q.number]
      });
    } else {
      partMap.get(q.part).qNums.push(q.number);
    }
  });

  const parts = Array.from(partMap.values()).filter(p => p.audio);
  nav.innerHTML = parts.map((p, idx) => {
    const minQ = Math.min(...p.qNums);
    const maxQ = Math.max(...p.qNums);
    const isFirst = idx === 0;
    return `
      <button class="audio-part-tab ${isFirst ? 'active' : ''}" 
              id="part-tab-${p.part.replace(/\s+/g, '-')}"
              onclick="switchAudioPart('${p.part}', '${p.audio}', true)">
        🎧 ${p.part} (Câu ${minQ}-${maxQ})
      </button>
    `;
  }).join('');
}

function switchAudioPart(part, audioSrc, andScroll = false) {
  setAudioSource(audioSrc, part);
  
  if (AppState.audioPlayer) {
    AppState.audioPlayer.play().catch(() => {});
  }

  document.querySelectorAll('.audio-part-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const targetTab = document.getElementById(`part-tab-${part.replace(/\s+/g, '-')}`);
  if (targetTab) targetTab.classList.add('active');

  if (andScroll) {
    const anchor = document.getElementById(`part-anchor-${part.replace(/\s+/g, '-')}`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function setAudioSource(src, partTitle) {
  const audioElem = AppState.audioPlayer;
  const titleSpan = document.getElementById('current-audio-title');
  if (!audioElem || !src) return;

  if (AppState.currentAudioSrc !== src) {
    AppState.currentAudioSrc = src;
    AppState.currentAudioPart = partTitle;
    audioElem.src = src;
    audioElem.load();
    if (titleSpan) {
      titleSpan.innerText = `🎧 Đang phát bài nghe: ${partTitle || 'Listening'}`;
    }

    document.querySelectorAll('.audio-part-tab').forEach(tab => {
      tab.classList.remove('active');
    });
    if (partTitle) {
      const targetTab = document.getElementById(`part-tab-${partTitle.replace(/\s+/g, '-')}`);
      if (targetTab) targetTab.classList.add('active');
    }
  }
}

function renderExamContent() {
  const exam = AppState.currentExam;
  const layout = document.getElementById('exam-layout');
  const sidebar = document.getElementById('passage-sidebar');
  const questionsCol = document.getElementById('questions-container');

  if (!exam || !questionsCol) return;

  let currentPart = '';
  let html = '';

  const isReading = exam.skill === 'reading';
  const hasReadingPassages = isReading && exam.questions.some(q => q.passage || q.image);

  if (hasReadingPassages) {
    layout.classList.add('with-passage');
    sidebar.style.display = 'block';
    renderPassageSidebar(exam);
  } else {
    layout.classList.remove('with-passage');
    sidebar.style.display = 'none';
  }

  exam.questions.forEach((q, idx) => {
    if (q.part !== currentPart) {
      currentPart = q.part;
      
      let partAudioBtn = '';
      if (q.audio) {
        partAudioBtn = `
          <button class="btn btn-primary" 
                  style="padding: 6px 14px; font-size: 0.82rem;"
                  onclick="switchAudioPart('${q.part}', '${q.audio}', false)">
            ▶️ Phát bài nghe ${q.part}
          </button>
        `;
      }

      let partImageCard = '';
      if (q.image) {
        partImageCard = `
          <div class="part-image-card">
            <img src="${q.image}" alt="Tài liệu tham khảo ${q.part}" onclick="openLightbox('${q.image}')" loading="lazy" />
            <div class="image-zoom-hint">🔍 Chạm vào ảnh để phóng to toàn màn hình nha</div>
          </div>
        `;
      }

      let listenNoteCard = '';
      if (exam.skill === 'listening' && q.passage) {
        listenNoteCard = `
          <div class="listen-note-card">
            <div class="note-card-header">📋 Biểu mẫu thông tin (Nghe audio để điền vào các câu bên dưới):</div>
            <div class="note-card-body">
              ${q.passage}
            </div>
          </div>
        `;
      }

      html += `
        <div class="part-banner" id="part-anchor-${q.part.replace(/\s+/g, '-')}">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div>
              <h3>${q.part_title || q.part}</h3>
              <p>${q.part_instruction || ''}</p>
            </div>
            ${partAudioBtn}
          </div>
        </div>
        ${partImageCard}
        ${listenNoteCard}
      `;
    }

    html += renderQuestionCard(q, idx + 1);
  });

  questionsCol.innerHTML = html;
  restoreInputs();
}

function renderPassageSidebar(exam) {
  const sidebar = document.getElementById('passage-sidebar');
  if (!sidebar) return;

  let contentHtml = '';
  const seenPassages = new Set();
  const seenImages = new Set();

  exam.questions.forEach(q => {
    if (q.passage && !seenPassages.has(q.passage)) {
      seenPassages.add(q.passage);
      contentHtml += `
        <div class="passage-block" id="passage-for-${q.id}">
          <div class="passage-title">📖 ${q.part_title || q.part} - Tài liệu đọc</div>
          <div class="passage-body">${q.passage}</div>
        </div>
      `;
    }
    if (q.image && !seenImages.has(q.image)) {
      seenImages.add(q.image);
      contentHtml += `
        <div class="passage-block" id="image-for-${q.id}">
          <div class="passage-title">🖼️ ${q.part_title || q.part} - Biển báo / Ảnh đính kèm</div>
          <div class="passage-image-wrap">
            <img src="${q.image}" alt="Document" onclick="openLightbox('${q.image}')" style="cursor: zoom-in;" loading="lazy" />
            <div class="image-zoom-hint">🔍 Chạm vào ảnh để phóng to toàn màn hình</div>
          </div>
        </div>
      `;
    }
  });

  sidebar.innerHTML = contentHtml || '<p class="text-muted">Không có bài đọc cho phần này.</p>';
}

function renderQuestionCard(q, displayNum) {
  const userAnswer = AppState.userAnswers[q.id] || '';
  const isPractice = AppState.currentMode === 'practice';
  const showExpl = (isPractice && userAnswer !== '') || AppState.graded;
  const isGraded = AppState.graded;

  let cardStatusClass = '';
  let statusBadgeHtml = '';

  if (isGraded || (isPractice && userAnswer !== '')) {
    const isCorrect = checkAnswer(q, userAnswer);
    if (isCorrect) {
      cardStatusClass = 'graded-correct';
      statusBadgeHtml = '<span class="q-status-badge correct">✨ Chuẩn rồi nè!</span>';
    } else {
      cardStatusClass = 'graded-wrong';
      statusBadgeHtml = '<span class="q-status-badge wrong">💭 Xem gợi ý nhé</span>';
    }
  } else if (userAnswer !== '') {
    cardStatusClass = 'answered';
  }

  let bodyHtml = '';

  if (q.type === 'mcq') {
    bodyHtml = `
      <div class="options-list">
        ${q.options.map((opt, oIdx) => {
          const letter = String.fromCharCode(65 + oIdx);
          const isSelected = userAnswer === opt;
          let optClass = 'option-item';
          if (isSelected) optClass += ' selected';

          if (isGraded || (isPractice && userAnswer !== '')) {
            if (opt === q.correct_answer) {
              optClass += ' is-correct-key';
            } else if (isSelected && opt !== q.correct_answer) {
              optClass += ' is-user-wrong';
            }
          }

          return `
            <div class="${optClass}" onclick="selectOption('${q.id}', '${escapeAttr(opt)}')">
              <div class="option-letter">${letter}</div>
              <div class="option-label">${opt}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else if (q.type === 'matching') {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K'];
    bodyHtml = `
      <div class="matching-wrapper">
        <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 6px;">
          👉 Chạm nhanh chữ cái tương ứng với biển báo (A - K):
        </div>
        <div class="matching-chips-row">
          ${letters.map(l => {
            const isSel = userAnswer.toUpperCase() === l;
            let chipClass = 'match-chip';
            if (isSel) chipClass += ' selected';
            return `
              <div class="${chipClass}" onclick="selectMatchingChip('${q.id}', '${l}')">${l}</div>
            `;
          }).join('')}
        </div>
        <div style="margin-top: 10px;">
          <input type="text" class="fill-input" style="max-width: 140px; text-transform: uppercase;"
                 placeholder="Hoặc gõ chữ..." value="${escapeAttr(userAnswer)}"
                 oninput="handleTextInput('${q.id}', this.value)" />
        </div>
      </div>
    `;
  } else {
    bodyHtml = `
      <div class="fill-input-wrapper">
        <input type="text" class="fill-input" 
               placeholder="Nhập câu trả lời của bạn..." 
               value="${escapeAttr(userAnswer)}"
               oninput="handleTextInput('${q.id}', this.value)" />
      </div>
    `;
  }

  const explHtml = renderExplanationBox(q, userAnswer);

  return `
    <div class="question-card ${cardStatusClass}" id="card-${q.id}" data-qid="${q.id}">
      <div class="q-header">
        <span class="q-badge">Câu ${q.number}</span>
        ${statusBadgeHtml}
      </div>
      <div class="q-text">${q.question}</div>
      ${bodyHtml}
      <div class="explanation-box ${showExpl ? 'show' : ''}" id="expl-${q.id}">
        ${explHtml}
      </div>
    </div>
  `;
}

function renderExplanationBox(q, userAnswer) {
  const e = q.explanation || {};
  const isCorrect = checkAnswer(q, userAnswer);

  let vocabHtml = '';
  if (e.vocab && e.vocab.length > 0) {
    vocabHtml = `
      <div class="vocab-box">
        <div class="vocab-title">📚 Sổ tay từ vựng trọng tâm:</div>
        ${e.vocab.map(v => `
          <div class="vocab-item">
            <span class="vocab-word">${v.word}</span>
            <span class="vocab-phonetic">${v.phonetic || ''}</span>:
            <span class="vocab-meaning">${v.meaning || ''}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  return `
    <div class="expl-header">
      <span class="expl-mascot">${isCorrect ? '🌸' : '💡'}</span>
      <span class="expl-title">${isCorrect ? 'Chính xác rồi nè! Cùng xem lại kiến thức nha' : 'Đừng lo nè, xem mẹo làm câu này nhé:'}</span>
    </div>

    ${e.msg ? `<div class="expl-gentle-tip">💡 <strong>Mẹo nhỏ:</strong> ${e.msg}</div>` : ''}

    <div class="expl-section">
      <div class="expl-label">🌐 Dịch nghĩa tiếng Việt:</div>
      <div class="expl-text">${e.trans_q || ''}</div>
      ${e.trans_opts && e.trans_opts.length > 0 ? `
        <ul style="padding-left: 18px; margin-top: 4px; font-size: 0.88rem; color: #475569;">
          ${e.trans_opts.map(to => `<li>${to}</li>`).join('')}
        </ul>
      ` : ''}
    </div>

    ${e.clue ? `
      <div class="expl-section">
        <div class="expl-label">🔍 Vị trí manh mối (Clue):</div>
        <div class="expl-clue">${e.clue}</div>
      </div>
    ` : ''}

    <div class="expl-section">
      <div class="expl-label">💡 Tại sao đáp án này đúng?</div>
      <div class="expl-text" style="color: #059669; font-weight: 700;">
        Đáp án đúng: <strong>${q.correct_answer}</strong>
      </div>
      <div class="expl-text" style="margin-top: 2px;">${e.why_right || ''}</div>
    </div>

    ${e.trap ? `
      <div class="expl-section">
        <div class="expl-label">⚠️ Điểm dễ nhầm lẫn (Trap Alert):</div>
        <div class="expl-trap">${e.trap}</div>
      </div>
    ` : ''}

    ${vocabHtml}
  `;
}

function selectOption(qId, val) {
  AppState.userAnswers[qId] = val;
  saveProgress();
  updateProgress();

  const q = AppState.currentExam.questions.find(item => item.id === qId);
  const card = document.getElementById(`card-${qId}`);

  if (AppState.currentMode === 'practice') {
    if (card && q) {
      card.outerHTML = renderQuestionCard(q, q.number);
    }
  } else {
    if (card) {
      card.classList.add('answered');
      card.querySelectorAll('.option-item').forEach(opt => {
        const label = opt.querySelector('.option-label').innerText;
        opt.classList.toggle('selected', label === val);
      });
    }
  }

  updatePaletteItem(qId);
}

function selectMatchingChip(qId, letter) {
  selectOption(qId, letter);
}

function handleTextInput(qId, val) {
  AppState.userAnswers[qId] = val;
  saveProgress();
  updateProgress();

  const card = document.getElementById(`card-${qId}`);
  if (card) {
    if (val.trim() !== '') {
      card.classList.add('answered');
    } else {
      card.classList.remove('answered');
    }
  }
  updatePaletteItem(qId);
}

function restoreInputs() {
  Object.keys(AppState.userAnswers).forEach(qId => {
    const val = AppState.userAnswers[qId];
    const card = document.getElementById(`card-${qId}`);
    if (!card) return;

    const fillInput = card.querySelector('.fill-input');
    if (fillInput) fillInput.value = val;

    card.querySelectorAll('.match-chip').forEach(chip => {
      chip.classList.toggle('selected', chip.innerText === val.toUpperCase());
    });
  });
}

function checkAnswer(q, userAns) {
  if (!userAns) return false;
  const cleanUser = userAns.toString().trim().toLowerCase();
  const cleanCorrect = q.correct_answer.toString().trim().toLowerCase();

  if (cleanUser === cleanCorrect) return true;

  const uNorm = cleanUser.replace(/[:.]/g, '.').replace(/\s+/g, ' ');
  const cNorm = cleanCorrect.replace(/[:.]/g, '.').replace(/\s+/g, ' ');
  if (uNorm === cNorm) return true;

  if (cNorm.includes(uNorm) && uNorm.length >= 3) return true;
  if (uNorm.includes(cNorm)) return true;

  return false;
}

function updateProgress() {
  const exam = AppState.currentExam;
  if (!exam) return;

  const total = exam.questions.length;
  const answeredCount = Object.keys(AppState.userAnswers).filter(k => AppState.userAnswers[k] && AppState.userAnswers[k].trim() !== '').length;

  const countElem = document.getElementById('progress-count');
  if (countElem) {
    countElem.innerText = `${answeredCount}/${total}`;
  }
}

function renderPalette() {
  const grid = document.getElementById('palette-grid');
  const exam = AppState.currentExam;
  if (!grid || !exam) return;

  grid.innerHTML = exam.questions.map(q => {
    return `<div class="palette-item" id="palette-item-${q.id}" onclick="jumpToQuestion('${q.id}')">${q.number}</div>`;
  }).join('');

  exam.questions.forEach(q => updatePaletteItem(q.id));
}

function updatePaletteItem(qId) {
  const item = document.getElementById(`palette-item-${qId}`);
  if (!item) return;

  const ans = AppState.userAnswers[qId];
  const q = AppState.currentExam.questions.find(i => i.id === qId);

  item.className = 'palette-item';

  if (AppState.graded && q) {
    if (checkAnswer(q, ans)) {
      item.classList.add('correct');
    } else {
      item.classList.add('wrong');
    }
  } else if (ans && ans.trim() !== '') {
    item.classList.add('answered');
  }
}

function jumpToQuestion(qId) {
  const exam = AppState.currentExam;
  const q = exam ? exam.questions.find(i => i.id === qId) : null;

  if (q && q.audio && exam.skill === 'listening') {
    switchAudioPart(q.part, q.audio, false);
  }

  const card = document.getElementById(`card-${qId}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.transform = 'scale(1.02)';
    setTimeout(() => card.style.transform = '', 350);
  }
  const drawer = document.getElementById('palette-drawer');
  if (drawer) drawer.classList.remove('open');
}

function confirmSubmitExam() {
  const exam = AppState.currentExam;
  if (!exam) return;

  const total = exam.questions.length;
  const answered = Object.keys(AppState.userAnswers).filter(k => AppState.userAnswers[k] && AppState.userAnswers[k].trim() !== '').length;

  if (answered < total) {
    const confirmMsg = `Bạn mới làm được ${answered}/${total} câu thôi nè, có muốn nộp luôn để xem giải thích chi tiết không? 🌸`;
    if (!confirm(confirmMsg)) return;
  }

  gradeExam();
}

function gradeExam() {
  stopTimer();
  AppState.graded = true;

  const exam = AppState.currentExam;
  let correctCount = 0;

  exam.questions.forEach(q => {
    const uAns = AppState.userAnswers[q.id];
    if (checkAnswer(q, uAns)) {
      correctCount++;
    }
  });

  AppState.score = correctCount;
  const total = exam.total_questions;
  const pts = exam.total_pts;
  const finalScore = Math.round((correctCount / total) * pts * 10) / 10;

  const prevScore = parseFloat(localStorage.getItem(STORAGE_PREFIX + 'score_' + exam.id) || '0');
  if (finalScore > prevScore) {
    localStorage.setItem(STORAGE_PREFIX + 'score_' + exam.id, finalScore);
  }

  updateHighScores();
  renderExamContent();
  renderPalette();

  const filterBar = document.getElementById('review-filter-bar');
  if (filterBar) filterBar.classList.add('show');

  showScoreModal(correctCount, total, finalScore, pts);
}

function showScoreModal(correct, total, score, maxPts) {
  const modal = document.getElementById('score-modal');
  const scoreNum = document.getElementById('modal-score-num');
  const scoreTotal = document.getElementById('modal-score-total');
  const modalMsg = document.getElementById('modal-message');
  const modalTitle = document.getElementById('modal-title');
  const mascot = document.getElementById('modal-mascot');

  scoreNum.innerText = `${score}`;
  scoreTotal.innerText = `/ ${maxPts} pts (${correct}/${total} câu)`;

  const percentage = (correct / total) * 100;

  if (percentage >= 80) {
    modalTitle.innerText = "XUẤT SẮC LẮM NÈ! ✨";
    mascot.innerText = "🌸";
    modalMsg.innerHTML = "Bạn làm bài rất tốt luôn á! Nắm kiến thức cực kỳ chắc chắn, hầu như không bị bẫy câu nào luôn nè 🎉";
    launchConfetti();
  } else if (percentage >= 50) {
    modalTitle.innerText = "LÀM TỐT LẮM NÈ! 🌿";
    mascot.innerText = "✨";
    modalMsg.innerHTML = "Bạn đã đúng được phần lớn câu hỏi rồi đó! Hãy bấm nút <strong>'Câu chưa đúng'</strong> bên dưới để xem lại vài chỗ cần lưu ý là lần sau đạt điểm tuyệt đối nha!";
  } else {
    modalTitle.innerText = "CỐ GẮNG LÊN NÈ! 🌱";
    mascot.innerText = "💡";
    modalMsg.innerHTML = "Không sao đâu nè, đề này có vài chỗ bẫy từ vựng xíu thôi. Bạn bấm <strong>'Câu chưa đúng'</strong> để xem giải thích chi tiết và ghi lại từ vựng nhé!";
  }

  modal.classList.add('show');
}

function applyReviewFilter() {
  const filter = AppState.reviewFilter;
  const exam = AppState.currentExam;
  if (!exam) return;

  exam.questions.forEach(q => {
    const card = document.getElementById(`card-${q.id}`);
    if (!card) return;

    const uAns = AppState.userAnswers[q.id];
    const isCorrect = checkAnswer(q, uAns);

    if (filter === 'all') {
      card.style.display = 'block';
    } else if (filter === 'wrong') {
      card.style.display = !isCorrect ? 'block' : 'none';
    } else if (filter === 'correct') {
      card.style.display = isCorrect ? 'block' : 'none';
    }
  });
}

function resetCurrentExam() {
  if (!confirm("Bạn có muốn làm lại bài thi này từ đầu không nè? 🌸")) return;

  AppState.userAnswers = {};
  AppState.graded = false;
  AppState.score = 0;
  saveProgress();

  selectExam(AppState.currentExam.id);
}

function updateHighScores() {
  EXAM_DATABASE.forEach(exam => {
    const badge = document.getElementById(`score-badge-${exam.id}`);
    const saved = localStorage.getItem(STORAGE_PREFIX + 'score_' + exam.id);
    if (badge) {
      if (saved) {
        badge.innerText = `Điểm cao: ${saved}/${exam.total_pts}`;
        badge.classList.add('has-score');
      } else {
        badge.innerText = 'Chưa thi';
        badge.classList.remove('has-score');
      }
    }
  });
}

function startTimer(seconds) {
  stopTimer();
  AppState.timeRemaining = seconds;

  const timerBadge = document.getElementById('timer-badge');
  if (timerBadge) timerBadge.style.display = 'flex';

  updateTimerDisplay();

  AppState.timerInterval = setInterval(() => {
    AppState.timeRemaining--;
    updateTimerDisplay();

    if (AppState.timeRemaining <= 0) {
      stopTimer();
      alert("Hết giờ làm bài rồi nè! Cùng xem kết quả và lời giải chi tiết nha 🌸");
      gradeExam();
    }
  }, 1000);
}

function stopTimer() {
  if (AppState.timerInterval) {
    clearInterval(AppState.timerInterval);
    AppState.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const timerText = document.getElementById('timer-text');
  if (!timerText) return;

  const mins = Math.floor(AppState.timeRemaining / 60);
  const secs = AppState.timeRemaining % 60;
  timerText.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function saveProgress() {
  if (!AppState.currentExam) return;
  localStorage.setItem(STORAGE_PREFIX + 'answers_' + AppState.currentExam.id, JSON.stringify(AppState.userAnswers));
}

function loadSavedProgress(examId) {
  const raw = localStorage.getItem(STORAGE_PREFIX + 'answers_' + examId);
  if (raw) {
    try {
      AppState.userAnswers = JSON.parse(raw);
    } catch (e) {
      AppState.userAnswers = {};
    }
  }
}

function escapeAttr(str) {
  if (!str) return '';
  return str.toString().replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function openLightbox(src) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  if (modal && img) {
    img.src = src;
    modal.classList.add('show');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.remove('show');
}

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#fb7185', '#f43f5e', '#a855f7', '#38bdf8', '#34d399', '#fbbf24'];

  for (let i = 0; i < 90; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 9 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: Math.random() * 3 + 2,
      vx: Math.random() * 2 - 1,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 4 - 2
    });
  }

  let animationFrame;
  let startTime = Date.now();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const elapsed = Date.now() - startTime;

    pieces.forEach(p => {
      p.y += p.vy;
      p.x += p.vx;
      p.rotation += p.rotSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (elapsed < 3200) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  animate();
}
