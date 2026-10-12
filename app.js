// ===================================================================
// APP.JS - Study with Lâm ✨ (Liquid Glass & Gentle Encouragement)
// ===================================================================

const AppState = {
  currentExam: null,
  currentMode: 'exam', // 'exam' or 'practice'
  currentView: 'picker', // 'picker', 'active_exam', 'a2b1'
  examStarted: false,
  userAnswers: {},     // { [qId]: answer }
  graded: false,
  score: 0,
  timerInterval: null,
  timeRemaining: 0,
  reviewFilter: 'all', // 'all', 'wrong', 'correct'
  selectedDifficulty: 'all', // 'all', 'easy', 'medium', 'hard'
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

  // Pre-load speech synthesis voices for instant crisp pronunciation
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  // Ensure active exam controls and submit bar are hidden until an exam starts
  const examHeaderControls = document.getElementById('exam-header-controls');
  if (examHeaderControls) examHeaderControls.style.display = 'none';

  const bottomSubmitBar = document.getElementById('bottom-submit-bar');
  if (bottomSubmitBar) bottomSubmitBar.style.display = 'none';

  setupEventListeners();
  updateHighScores();
  updateMistakesBadge();
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

  const diffPills = document.querySelectorAll('.diff-filter-pill');
  diffPills.forEach(pill => {
    pill.addEventListener('click', () => {
      diffPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.selectedDifficulty = pill.dataset.difficulty;
      renderExamCards();
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

  const currentFilter = AppState.selectedDifficulty || 'all';
  const filteredExams = currentFilter === 'all'
    ? EXAM_DATABASE
    : EXAM_DATABASE.filter(e => e.difficulty === currentFilter);

  container.innerHTML = filteredExams.map(exam => {
    const isListening = exam.skill === 'listening';
    const isMixed = exam.skill === 'mixed';
    const iconClass = isListening ? 'listening' : (isMixed ? 'mixed' : 'reading');
    const iconEmoji = isListening ? '🎧' : (isMixed ? '✨' : '📖');
    const savedScore = localStorage.getItem(STORAGE_PREFIX + 'score_' + exam.id);
    const scoreText = savedScore ? `Điểm: ${savedScore}/${exam.total_pts}` : 'Chưa thi';
    const hasScoreClass = savedScore ? 'has-score' : '';
    const diffBadge = exam.difficulty_badge || '🟢 Dễ (A2)';
    const diffClass = exam.difficulty || 'easy';
    const isCurated = exam.id.startsWith('test_');
    const curatedBadge = isCurated ? '<span class="curated-pill">🌟 Đề chắt lọc</span>' : '';

    return `
      <div class="exam-card" data-exam-id="${exam.id}" onclick="startExamSession('${exam.id}')">
        <div class="exam-card-header-bar">
          <div class="diff-and-curated">
            <span class="exam-diff-tag diff-${diffClass}">${diffBadge}</span>
            ${curatedBadge}
          </div>
          <div class="exam-badge-score ${hasScoreClass}" id="score-badge-${exam.id}">
            ${scoreText}
          </div>
        </div>
        <div class="exam-info">
          <div class="exam-icon ${iconClass}">
            ${iconEmoji}
          </div>
          <div class="exam-details">
            <div class="exam-name">${exam.title}</div>
            <div class="exam-meta">${exam.skill_vn} • ${exam.total_questions} câu • ${exam.duration_minutes} phút</div>
            ${exam.target_desc ? `<div class="exam-target-tip">${exam.target_desc}</div>` : ''}
          </div>
        </div>
        <div class="exam-card-cta">
          <button class="btn-start-action" onclick="event.stopPropagation(); startExamSession('${exam.id}')">
            <span>🚀 Bắt đầu làm bài</span>
            <span class="cta-arrow">➔</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function startExamSession(examId) {
  const exam = EXAM_DATABASE.find(e => e.id === examId);
  if (!exam) return;

  AppState.currentExam = exam;
  AppState.examStarted = true;
  AppState.currentView = 'active_exam';
  localStorage.setItem(STORAGE_PREFIX + 'last_exam', examId);

  // Switch views cleanly: hide selector, show full-screen active exam
  const pickerView = document.getElementById('view-exam-picker');
  const activeExamView = document.getElementById('view-active-exam');
  const a2b1View = document.getElementById('view-a2b1');
  const tabsBar = document.getElementById('main-nav-tabs-bar');
  const headerControls = document.getElementById('exam-header-controls');
  const bottomSubmitBar = document.getElementById('bottom-submit-bar');

  if (pickerView) pickerView.style.display = 'none';
  if (a2b1View) a2b1View.style.display = 'none';
  if (tabsBar) tabsBar.style.display = 'none';

  if (activeExamView) {
    activeExamView.style.display = 'block';
  }

  if (headerControls) headerControls.style.display = 'flex';
  if (bottomSubmitBar) bottomSubmitBar.style.display = 'flex';

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
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectExam(examId) {
  startExamSession(examId);
}

function exitExamSession() {
  const answeredCount = Object.keys(AppState.userAnswers).filter(k => AppState.userAnswers[k] && AppState.userAnswers[k].trim() !== '').length;
  if (AppState.examStarted && !AppState.graded && answeredCount > 0) {
    const ok = confirm("Bạn có muốn quay lại danh sách chọn đề không? Bài làm của bạn vẫn được lưu lại tự động nhé 🌸");
    if (!ok) return;
  }

  stopTimer();
  if (AppState.audioPlayer) {
    AppState.audioPlayer.pause();
  }

  AppState.examStarted = false;
  AppState.currentView = 'picker';

  const pickerView = document.getElementById('view-exam-picker');
  const activeExamView = document.getElementById('view-active-exam');
  const tabsBar = document.getElementById('main-nav-tabs-bar');
  const headerControls = document.getElementById('exam-header-controls');
  const bottomSubmitBar = document.getElementById('bottom-submit-bar');

  if (activeExamView) activeExamView.style.display = 'none';
  if (headerControls) headerControls.style.display = 'none';
  if (bottomSubmitBar) bottomSubmitBar.style.display = 'none';

  if (tabsBar) tabsBar.style.display = 'block';
  if (pickerView) pickerView.style.display = 'block';

  renderExamCards();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleBrandClick() {
  if (AppState.currentView === 'active_exam') {
    exitExamSession();
  } else {
    switchMainTab('exams');
  }
}

function updateExamHeaderUI() {
  const exam = AppState.currentExam;
  if (!exam) return;
  document.getElementById('active-exam-title').innerText = exam.title;
  document.getElementById('active-exam-skill').innerText = exam.skill_vn;
  document.getElementById('active-exam-count').innerText = `${exam.total_questions} câu hỏi`;
  document.getElementById('active-exam-time').innerText = `${exam.duration_minutes} phút`;

  const levelTag = document.getElementById('active-exam-level-tag');
  if (levelTag) {
    levelTag.className = `exam-diff-tag diff-${exam.difficulty || 'easy'}`;
    levelTag.innerText = exam.difficulty_badge || '🟢 Dễ (A2)';
  }

  const targetInfoElem = document.getElementById('exam-target-info');
  if (targetInfoElem) {
    if (exam.target_desc) {
      targetInfoElem.innerHTML = `🎯 ${exam.target_desc}`;
    } else {
      targetInfoElem.innerHTML = `🎯 Mục tiêu: Đạt A2 (≥ 13 câu) 🌸 | Đạt B1 (≥ 18 câu) 🏆`;
    }
  }
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
  if (!exam) return;

  const hasAudio = exam.skill === 'listening' || (exam.questions && exam.questions.some(q => !!q.audio));

  if (hasAudio) {
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

  const hasReadingPassages = exam.questions.some(q => (q.passage && !q.audio) || q.image);

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
      if ((exam.skill === 'listening' || q.audio) && q.passage) {
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

  if (!contentHtml) {
    sidebar.innerHTML = '<p class="text-muted">Không có bài đọc cho phần này.</p>';
    return;
  }

  sidebar.innerHTML = `
    <div class="passage-toggle-header" onclick="togglePassageCollapse()">
      <span>📖 Bài đọc &amp; Tài liệu đề thi</span>
      <button class="btn-toggle-passage">
        <span id="passage-toggle-icon">▲</span> <span id="passage-toggle-text">Thu gọn</span>
      </button>
    </div>
    <div id="passage-content-collapsible" class="passage-content-collapsible">
      ${contentHtml}
    </div>
  `;
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
        <div class="vocab-title">📚 Sổ tay từ vựng trọng tâm (Chạm 🔊 để nghe phát âm):</div>
        ${e.vocab.map(v => `
          <div class="vocab-item">
            <div class="vocab-word-row">
              <button class="btn-audio-speak-sm" onclick="speakWord('${escapeAttr(v.word)}', this)" title="Nghe phát âm chuẩn">
                🔊
              </button>
              <span class="vocab-word">${v.word}</span>
              <span class="vocab-phonetic">${v.phonetic || ''}</span>:
            </div>
            <div class="vocab-meaning">${v.meaning || ''}</div>
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

  const paletteSummary = document.getElementById('palette-count-summary');
  if (paletteSummary) {
    paletteSummary.innerText = `Câu ${answeredCount}/${total}`;
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

  if (q && q.audio) {
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
  saveMistakesFromExam(exam);
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
  const levelBadge = document.getElementById('modal-level-badge');

  scoreNum.innerText = `${score}`;
  scoreTotal.innerText = `/ ${maxPts} pts (${correct}/${total} câu)`;

  const percentage = (correct / total) * 100;
  const scaledScore = (correct / total) * 10;

  if (scaledScore >= 7.0) {
    modalTitle.innerText = "XUẤT SẮC LẮM NÈ! ✨";
    mascot.innerText = "🏆";
    if (levelBadge) {
      levelBadge.className = "modal-level-badge b1";
      levelBadge.innerText = "🏆 XẾP LOẠI: ĐẠT CHUẨN B1 (BẬC 3 - ĐỦ ĐẦU RA)";
    }
    modalMsg.innerHTML = "Bạn làm bài rất tốt luôn á! Điểm số đạt <strong>chuẩn B1 (Bậc 3)</strong>, đủ điều kiện đầu ra và nắm bài cực kỳ chắc chắn luôn nè 🎉";
    launchConfetti();
  } else if (scaledScore >= 5.0) {
    modalTitle.innerText = "LÀM TỐT LẮM NÈ! 🌿";
    mascot.innerText = "🌸";
    const neededForB1 = Math.ceil(0.7 * total) - correct;
    if (levelBadge) {
      levelBadge.className = "modal-level-badge a2";
      levelBadge.innerText = "🌸 XẾP LOẠI: ĐẠT CHUẨN A2 (BẬC 2 - ĐÃ QUA MÔN)";
    }
    modalMsg.innerHTML = `Bạn đã <strong>đạt chuẩn A2 (Bậc 2)</strong> qua môn rồi nè! Chỉ cần đúng thêm <strong>${neededForB1} câu nữa</strong> là chạm mốc chuẩn B1 luôn á. Hãy bấm nút <strong>'Câu chưa đúng'</strong> để xem lại vài chỗ cần lưu ý nha!`;
  } else {
    modalTitle.innerText = "CỐ GẮNG LÊN NÈ! 🌱";
    mascot.innerText = "💡";
    const neededForA2 = Math.ceil(0.5 * total) - correct;
    if (levelBadge) {
      levelBadge.className = "modal-level-badge try";
      levelBadge.innerText = `🌱 XẾP LOẠI: CHƯA ĐẠT CHUẨN A2 (Cần thêm ${neededForA2} câu)`;
    }
    modalMsg.innerHTML = `Đừng nản lòng nhé! Bạn chỉ cần đúng thêm <strong>${neededForA2} câu nữa</strong> là đạt chuẩn A2 qua môn rồi. Bấm <strong>'Câu chưa đúng'</strong> bên dưới để xem giải thích chi tiết và nhớ mẹo làm bài nhé!`;
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


// ===================================================================
// A2 - B1 HUB LOGIC & RENDERING
// ===================================================================

let currentVocabTopic = 'all';
let currentVocabSearch = '';

function switchMainTab(tab) {
  const viewPicker = document.getElementById('view-exam-picker');
  const viewActive = document.getElementById('view-active-exam');
  const viewCram = document.getElementById('view-cram');
  const viewA2B1 = document.getElementById('view-a2b1');
  const btnExams = document.getElementById('tab-btn-exams');
  const btnCram = document.getElementById('tab-btn-cram');
  const btnA2B1 = document.getElementById('tab-btn-a2b1');
  const bottomBar = document.getElementById('bottom-submit-bar');
  const headerControls = document.getElementById('exam-header-controls');

  // Deactivate all buttons
  if (btnExams) btnExams.classList.remove('active');
  if (btnCram) btnCram.classList.remove('active');
  if (btnA2B1) btnA2B1.classList.remove('active');

  // Hide cram and a2b1 views by default
  if (viewCram) viewCram.style.display = 'none';
  if (viewA2B1) viewA2B1.style.display = 'none';

  if (tab === 'exams') {
    if (btnExams) btnExams.classList.add('active');

    if (AppState.examStarted && AppState.currentExam) {
      if (viewPicker) viewPicker.style.display = 'none';
      if (viewActive) viewActive.style.display = 'block';
      if (headerControls) headerControls.style.display = 'flex';
      if (bottomBar) bottomBar.style.display = 'flex';
    } else {
      if (viewPicker) viewPicker.style.display = 'block';
      if (viewActive) viewActive.style.display = 'none';
      if (headerControls) headerControls.style.display = 'none';
      if (bottomBar) bottomBar.style.display = 'none';
    }
  } else if (tab === 'cram') {
    if (btnCram) btnCram.classList.add('active');
    if (viewPicker) viewPicker.style.display = 'none';
    if (viewActive) viewActive.style.display = 'none';
    if (viewCram) viewCram.style.display = 'block';
    if (headerControls) headerControls.style.display = 'none';
    if (bottomBar) bottomBar.style.display = 'none';
    initCramView();
  } else {
    if (btnA2B1) btnA2B1.classList.add('active');
    if (viewPicker) viewPicker.style.display = 'none';
    if (viewActive) viewActive.style.display = 'none';
    if (viewA2B1) viewA2B1.style.display = 'block';
    if (headerControls) headerControls.style.display = 'none';
    if (bottomBar) bottomBar.style.display = 'none';
    renderA2B1Hub();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderA2B1Hub() {
  if (typeof A2_B1_KNOWLEDGE === 'undefined') return;

  renderStandards();
  renderGrammarList();
  renderVocabSection();
  renderTacticsSection();
}

function renderStandards() {
  const container = document.getElementById('standards-grid');
  if (!container || !A2_B1_KNOWLEDGE.standards) return;

  container.innerHTML = A2_B1_KNOWLEDGE.standards.levels.map(lvl => `
    <div class="standard-card ${lvl.colorClass}">
      <div class="standard-card-header">
        <div>
          <div class="standard-title">${lvl.level}</div>
          <div class="standard-sub">${lvl.sub}</div>
        </div>
        <span class="standard-badge">${lvl.badge}</span>
      </div>
      <div class="score-req-box">
        <div class="req-item">
          <span class="req-label">Mốc điểm chuẩn:</span>
          <span class="req-val">${lvl.targetScore}</span>
        </div>
        <div class="req-item">
          <span class="req-label">Kỹ năng Nghe (25 câu):</span>
          <span class="req-val">${lvl.listeningReq}</span>
        </div>
        <div class="req-item">
          <span class="req-label">Kỹ năng Đọc (30 câu):</span>
          <span class="req-val">${lvl.readingReq}</span>
        </div>
      </div>
      <div class="standard-desc">${lvl.desc}</div>
      <div class="standard-tips-box">
        💡 <strong>Chiến thuật:</strong> ${lvl.tips}
      </div>
    </div>
  `).join('');
}

function renderGrammarList() {
  const container = document.getElementById('grammar-list');
  if (!container || !A2_B1_KNOWLEDGE.grammar) return;

  container.innerHTML = A2_B1_KNOWLEDGE.grammar.map(gr => `
    <div class="grammar-card" id="grammar-card-${gr.id}">
      <div class="grammar-card-header" onclick="toggleGrammar('${gr.id}')">
        <div class="grammar-card-title-group">
          <span class="grammar-title">${gr.title}</span>
          <span class="grammar-badge">${gr.badge}</span>
        </div>
        <span class="grammar-toggle-icon">▼</span>
      </div>
      <div class="grammar-body">
        <div class="grammar-formula-box">📝 Công thức: ${escapeHtml(gr.formula)}</div>
        <div class="grammar-rule">${escapeHtml(gr.rule)}</div>
        ${gr.clues ? `<div class="grammar-clues">🔍 Dấu hiệu nhận biết: ${escapeHtml(gr.clues)}</div>` : ''}
        <div class="grammar-example">💡 Ví dụ thực tế:\n${escapeHtml(gr.example)}</div>
        ${gr.trap ? `<div class="grammar-trap">⚠️ Bẫy đề thi cần tránh: ${escapeHtml(gr.trap)}</div>` : ''}
      </div>
    </div>
  `).join('');
}

function toggleGrammar(id) {
  const card = document.getElementById(`grammar-card-${id}`);
  if (card) {
    card.classList.toggle('open');
  }
}

function renderVocabSection() {
  const chipsContainer = document.getElementById('vocab-topic-chips');
  if (!chipsContainer || !A2_B1_KNOWLEDGE.vocabularyTopics) return;

  let chipsHtml = `
    <button class="vocab-topic-chip ${currentVocabTopic === 'all' ? 'active' : ''}" onclick="selectVocabTopic('all')">
      ✨ Tất cả chủ đề
    </button>
  `;

  A2_B1_KNOWLEDGE.vocabularyTopics.forEach(t => {
    chipsHtml += `
      <button class="vocab-topic-chip ${currentVocabTopic === t.id ? 'active' : ''}" onclick="selectVocabTopic('${t.id}')">
        ${t.name}
      </button>
    `;
  });

  chipsContainer.innerHTML = chipsHtml;
  filterAndRenderVocab();
}

function selectVocabTopic(topicId) {
  currentVocabTopic = topicId;
  renderVocabSection();
}

function handleVocabSearch(query) {
  currentVocabSearch = query.trim().toLowerCase();
  filterAndRenderVocab();
}

function filterAndRenderVocab() {
  const grid = document.getElementById('vocab-cards-grid');
  if (!grid || !A2_B1_KNOWLEDGE.vocabularyTopics) return;

  let allWords = [];
  A2_B1_KNOWLEDGE.vocabularyTopics.forEach(topic => {
    if (currentVocabTopic === 'all' || currentVocabTopic === topic.id) {
      topic.words.forEach(w => {
        allWords.push({ ...w, topicName: topic.name });
      });
    }
  });

  if (currentVocabSearch) {
    allWords = allWords.filter(w => 
      w.word.toLowerCase().includes(currentVocabSearch) ||
      w.meaning.toLowerCase().includes(currentVocabSearch) ||
      (w.example && w.example.toLowerCase().includes(currentVocabSearch))
    );
  }

  if (allWords.length === 0) {
    grid.innerHTML = '<p class="text-muted" style="padding: 20px; grid-column: 1 / -1; text-align: center;">Không tìm thấy từ vựng nào khớp với từ khóa tìm kiếm.</p>';
    return;
  }

  grid.innerHTML = allWords.map(w => `
    <div class="a2b1-vocab-card">
      <div>
        <div class="a2b1-vocab-top">
          <div class="vocab-word-group">
            <span class="a2b1-vocab-word">${w.word}</span>
            <button class="btn-audio-speak" onclick="speakWord('${escapeAttr(w.word)}', this)" title="Nghe phát âm chuẩn (Google / Native)">
              🔊
            </button>
          </div>
          <span class="a2b1-vocab-phonetic">${w.phonetic || ''}</span>
        </div>
        <div style="font-size: 0.76rem; color: #94a3b8; font-weight: 600; margin-bottom: 4px;">(${w.type})</div>
        <div class="a2b1-vocab-meaning">${w.meaning}</div>
      </div>
      ${w.example ? `<div class="a2b1-vocab-example">"${w.example}"</div>` : ''}
    </div>
  `).join('');
}

function renderTacticsSection() {
  const container = document.getElementById('tactics-grid');
  if (!container || !A2_B1_KNOWLEDGE.tactics) return;

  let html = '';
  A2_B1_KNOWLEDGE.tactics.listening.forEach(t => {
    html += `
      <div class="tactic-card">
        <div class="tactic-part-title">🎧 ${t.part}</div>
        <div class="tactic-tip-text">${escapeHtml(t.tip)}</div>
      </div>
    `;
  });

  A2_B1_KNOWLEDGE.tactics.reading.forEach(t => {
    html += `
      <div class="tactic-card">
        <div class="tactic-part-title">📖 ${t.part}</div>
        <div class="tactic-tip-text">${escapeHtml(t.tip)}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;');
}

// ===================================================================
// AUDIO PRONUNCIATION (Studio Native Human Voice - US English)
// ===================================================================

let currentPronounceAudio = null;

function speakWord(text, btn) {
  if (!text) return;
  // Clean word: remove slashes, parentheses, commas, punctuation
  const cleanWord = text.split('/')[0].split('(')[0].replace(/[.,;:!?]/g, '').trim();
  if (!cleanWord) return;

  if (btn) {
    btn.classList.add('speaking');
    setTimeout(() => {
      if (btn) btn.classList.remove('speaking');
    }, 1500);
  }

  // Stop previous pronunciation immediately if user clicks rapidly
  if (currentPronounceAudio) {
    try {
      currentPronounceAudio.pause();
      currentPronounceAudio.currentTime = 0;
    } catch (e) {}
  }

  // DEFAULT: Studio Native Human Voice Recording (Type 2 = US English standard)
  const studioCdnUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanWord)}&type=2`;
  currentPronounceAudio = new Audio(studioCdnUrl);

  currentPronounceAudio.onended = () => {
    if (btn) btn.classList.remove('speaking');
  };

  currentPronounceAudio.play().catch(err => {
    // Fallback 1: Google Translate TTS official audio
    const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(cleanWord)}`;
    currentPronounceAudio = new Audio(googleTtsUrl);
    currentPronounceAudio.onended = () => {
      if (btn) btn.classList.remove('speaking');
    };
    currentPronounceAudio.play().catch(() => {
      // Fallback 2: Browser SpeechSynthesis
      if ('speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
          const utter = new SpeechSynthesisUtterance(cleanWord);
          utter.lang = 'en-US';
          utter.rate = 0.9;
          utter.onend = () => {
            if (btn) btn.classList.remove('speaking');
          };
          window.speechSynthesis.speak(utter);
        } catch (e) {}
      }
    });
  });
}

// ===================================================================
// MOBILE TOGGLES (COLLAPSIBLE AUDIO & PASSAGE)
// ===================================================================

function toggleAudioCollapse() {
  const box = document.getElementById('sticky-audio-box');
  const icon = document.getElementById('audio-collapse-icon');
  const text = document.getElementById('audio-collapse-text');
  if (!box) return;
  const isCollapsed = box.classList.toggle('collapsed');
  if (icon) icon.textContent = isCollapsed ? '▲' : '🔽';
  if (text) text.textContent = isCollapsed ? 'Mở rộng' : 'Thu gọn';
}

function togglePassageCollapse() {
  const sidebar = document.getElementById('passage-sidebar');
  const icon = document.getElementById('passage-toggle-icon');
  const text = document.getElementById('passage-toggle-text');
  if (!sidebar) return;
  const isCollapsed = sidebar.classList.toggle('collapsed');
  if (icon) icon.textContent = isCollapsed ? '▼' : '▲';
  if (text) text.textContent = isCollapsed ? 'Mở rộng' : 'Thu gọn';
}


// ===================================================================
// CRAM HUB & RAPID MEMORIZATION LOGIC (STUDY WITH LÂM ✨)
// ===================================================================

let currentCramSub = 'rules';
let currentRuleCategory = 'all';

// Flashcard state
let fcDeck = [];
let fcCurIndex = 0;
let fcLearnedSet = new Set();

// Reflex quiz state
let rqQuestions = [];
let rqCurIndex = 0;
let rqStreak = 0;
let rqAnswered = false;

function initCramView() {
  if (typeof CRAM_DATA === 'undefined') return;
  
  // Load learned flashcards from localStorage
  try {
    const savedLearned = JSON.parse(localStorage.getItem('study_lam_learned_cards') || '[]');
    fcLearnedSet = new Set(savedLearned);
  } catch (e) {
    fcLearnedSet = new Set();
  }

  // Init deck if empty
  if (fcDeck.length === 0 && CRAM_DATA.flashcards) {
    fcDeck = [...CRAM_DATA.flashcards];
  }

  // Init quiz if empty
  if (rqQuestions.length === 0 && CRAM_DATA.reflexQuiz) {
    rqQuestions = [...CRAM_DATA.reflexQuiz];
  }

  updateMistakesBadge();
  switchCramSub(currentCramSub);
}

function switchCramSub(sub) {
  currentCramSub = sub;

  // Update nav buttons
  const subBtns = document.querySelectorAll('.cram-subnav-btn');
  subBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sub === sub);
  });

  // Toggle sections
  const sections = ['rules', 'flashcards', 'quiz', 'paraphrase', 'mistakes'];
  sections.forEach(s => {
    const el = document.getElementById(`cram-sub-${s}`);
    if (el) el.style.display = (s === sub) ? 'flex' : 'none';
  });

  // Render content
  if (sub === 'rules') {
    renderCramRules();
  } else if (sub === 'flashcards') {
    renderFlashcardUI();
  } else if (sub === 'quiz') {
    if (rqCurIndex === 0 && !rqAnswered) {
      renderReflexQuestion();
    }
  } else if (sub === 'paraphrase') {
    renderParaphrase();
  } else if (sub === 'mistakes') {
    renderMistakesSection();
  }
}

// -------------------------------------------------------------
// 1. Mẹo Bấm Nhanh 3 Giây
// -------------------------------------------------------------
function renderCramRules() {
  if (typeof CRAM_DATA === 'undefined' || !CRAM_DATA.rules) return;

  const filtersContainer = document.getElementById('cram-rules-filters');
  const grid = document.getElementById('cram-rules-grid');
  if (!grid) return;

  const categories = [
    { id: 'all', label: '✨ Tất cả mẹo (15)' },
    { id: 'tenses', label: '⏱️ Dấu Hiệu Thì' },
    { id: 'conditionals', label: '🔗 Câu Điều Kiện & If' },
    { id: 'verbs', label: '🎯 Động Từ V-ing / To V' },
    { id: 'comparisons', label: '📊 Cấu Trúc So Sánh' },
    { id: 'signs', label: '🪧 Biển Báo Thần Tốc' },
    { id: 'listening', label: '🎧 Bắt Bẫy Bài Nghe' },
    { id: 'grammar', label: '📘 Đại Từ Quan Hệ' }
  ];

  if (filtersContainer) {
    filtersContainer.innerHTML = categories.map(cat => `
      <button class="cram-filter-pill ${currentRuleCategory === cat.id ? 'active' : ''}" 
              onclick="selectRuleCategory('${cat.id}')">
        ${cat.label}
      </button>
    `).join('');
  }

  const filteredRules = CRAM_DATA.rules.filter(r => 
    currentRuleCategory === 'all' || r.category === currentRuleCategory
  );

  grid.innerHTML = filteredRules.map(r => `
    <div class="cram-rule-card">
      <div class="rule-card-top">
        <span class="rule-cat-badge">${r.categoryName}</span>
      </div>
      <div class="rule-title">${r.title}</div>
      <div class="rule-box-trigger">
        🔍 <strong>Dấu hiệu trong đề:</strong><br>${escapeHtml(r.trigger)}
      </div>
      <div class="rule-box-action">
        ⚡ <strong>Phản xạ khoanh đáp án:</strong><br>${escapeHtml(r.action)}
      </div>
      ${r.trap ? `
        <div class="rule-box-trap">
          ⚠️ <strong>Bẫy cần tránh:</strong><br>${escapeHtml(r.trap)}
        </div>
      ` : ''}
      <div class="rule-box-example">
        💡 <strong>Ví dụ đề thi:</strong><br>${escapeHtml(r.example)}
      </div>
    </div>
  `).join('');
}

function selectRuleCategory(catId) {
  currentRuleCategory = catId;
  renderCramRules();
}

// -------------------------------------------------------------
// 2. Interactive 3D Flashcards
// -------------------------------------------------------------
function renderFlashcardUI() {
  if (fcDeck.length === 0) return;

  const card = fcDeck[fcCurIndex];
  if (!card) return;

  // Unflip card when rendering new card
  const cardElem = document.getElementById('flashcard-elem');
  if (cardElem) cardElem.classList.remove('flipped');

  // Update counter
  const curIndexEl = document.getElementById('fc-current-index');
  const totalCountEl = document.getElementById('fc-total-count');
  if (curIndexEl) curIndexEl.textContent = fcCurIndex + 1;
  if (totalCountEl) totalCountEl.textContent = fcDeck.length;

  // Update learned progress
  const progressFill = document.getElementById('fc-progress-bar-fill');
  const progressText = document.getElementById('fc-progress-text');
  const learnedCount = fcLearnedSet.size;
  const pct = Math.round((learnedCount / fcDeck.length) * 100);

  if (progressFill) progressFill.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `Đã thuộc: ${learnedCount}/${fcDeck.length} (${pct}%)`;

  // Update card content (Front)
  const badgeEl = document.getElementById('fc-type-badge');
  const wordEl = document.getElementById('fc-word-text');
  const phoneticEl = document.getElementById('fc-phonetic-text');

  if (badgeEl) {
    const isLearned = fcLearnedSet.has(card.id);
    badgeEl.textContent = isLearned ? '✅ Đã thuộc' : (card.type || 'Từ vựng');
    badgeEl.style.background = isLearned ? '#ecfdf5' : '#ffe4e6';
    badgeEl.style.color = isLearned ? '#065f46' : '#be123c';
  }
  if (wordEl) wordEl.textContent = card.word;
  if (phoneticEl) phoneticEl.textContent = card.phonetic || '';

  // Update card content (Back)
  const meaningEl = document.getElementById('fc-meaning-text');
  const mnemonicEl = document.getElementById('fc-mnemonic-box');
  const exampleEl = document.getElementById('fc-example-box');

  if (meaningEl) meaningEl.textContent = card.meaning;
  if (mnemonicEl) mnemonicEl.textContent = card.mnemonic || '';
  if (exampleEl) exampleEl.textContent = card.example ? `"${card.example}"` : '';
}

function flipFlashcard() {
  const cardElem = document.getElementById('flashcard-elem');
  if (cardElem) cardElem.classList.toggle('flipped');
}

function nextFlashcard() {
  if (fcDeck.length === 0) return;
  fcCurIndex = (fcCurIndex + 1) % fcDeck.length;
  renderFlashcardUI();
}

function prevFlashcard() {
  if (fcDeck.length === 0) return;
  fcCurIndex = (fcCurIndex - 1 + fcDeck.length) % fcDeck.length;
  renderFlashcardUI();
}

function markCardLearned() {
  const card = fcDeck[fcCurIndex];
  if (!card) return;

  fcLearnedSet.add(card.id);
  localStorage.setItem('study_lam_learned_cards', JSON.stringify(Array.from(fcLearnedSet)));

  // If completed 100%, trigger confetti!
  if (fcLearnedSet.size === fcDeck.length) {
    if (typeof triggerConfetti === 'function') triggerConfetti();
  }

  nextFlashcard();
}

function markCardReview() {
  const card = fcDeck[fcCurIndex];
  if (!card) return;

  fcLearnedSet.delete(card.id);
  localStorage.setItem('study_lam_learned_cards', JSON.stringify(Array.from(fcLearnedSet)));

  nextFlashcard();
}

function shuffleFlashcards() {
  for (let i = fcDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcDeck[i], fcDeck[j]] = [fcDeck[j], fcDeck[i]];
  }
  fcCurIndex = 0;
  renderFlashcardUI();
}

function speakCurrentFlashcard(btn) {
  const card = fcDeck[fcCurIndex];
  if (card) {
    speakWord(card.word, btn);
  }
}

// -------------------------------------------------------------
// 3. Phản Xạ 3 Giây Mini Quiz
// -------------------------------------------------------------
function initReflexQuiz() {
  if (rqQuestions.length === 0 && CRAM_DATA && CRAM_DATA.reflexQuiz) {
    rqQuestions = [...CRAM_DATA.reflexQuiz];
  }
  renderReflexQuestion();
}

function renderReflexQuestion() {
  if (rqQuestions.length === 0) return;

  const card = document.querySelector('.reflex-quiz-card');
  if (!card) return;

  if (rqCurIndex >= rqQuestions.length) {
    // Finished Quiz
    card.innerHTML = `
      <div style="text-align: center; padding: 20px 10px;">
        <div style="font-size: 2.8rem; margin-bottom: 10px;">🏆🌸</div>
        <h3 style="font-size: 1.3rem; font-weight: 800; color: #0f172a; margin-bottom: 8px;">
          Xuất Sắc Quá Lâm Ơi!
        </h3>
        <p style="font-size: 0.9rem; color: #475569; margin-bottom: 16px; line-height: 1.6;">
          Bạn đã hoàn thành toàn bộ ${rqQuestions.length} câu phản xạ tốc độ! Chuỗi đúng kỷ lục: <strong>🔥 ${rqStreak} câu liên tiếp</strong>.
        </p>
        <button class="btn btn-primary" onclick="restartReflexQuiz()" style="margin: 0 auto;">
          🔄 Luyện Lại Thử Thách
        </button>
      </div>
    `;
    if (typeof triggerConfetti === 'function') triggerConfetti();
    return;
  }

  const q = rqQuestions[rqCurIndex];
  rqAnswered = false;

  const curQEl = document.getElementById('rq-cur-q');
  const totalQEl = document.getElementById('rq-total-q');
  const streakEl = document.getElementById('rq-streak-badge');
  const promptEl = document.getElementById('rq-prompt-text');
  const optionsContainer = document.getElementById('rq-options-container');
  const feedbackBox = document.getElementById('rq-feedback-box');
  const btnNext = document.getElementById('btn-rq-next');
  const btnRestart = document.getElementById('btn-rq-restart');

  if (curQEl) curQEl.textContent = rqCurIndex + 1;
  if (totalQEl) totalQEl.textContent = rqQuestions.length;
  if (streakEl) streakEl.textContent = `🔥 Chuỗi đúng: ${rqStreak}`;
  if (promptEl) promptEl.textContent = q.prompt;
  if (feedbackBox) {
    feedbackBox.style.display = 'none';
    feedbackBox.className = 'rq-feedback-box';
  }
  if (btnNext) btnNext.style.display = 'none';
  if (btnRestart) btnRestart.style.display = 'none';

  if (optionsContainer) {
    optionsContainer.innerHTML = q.options.map((opt, idx) => `
      <button class="rq-option-btn" id="rq-opt-${idx}" onclick="chooseReflexOption(${idx})">
        <span>${String.fromCharCode(65 + idx)}. ${escapeHtml(opt)}</span>
        <span class="rq-opt-icon">👉</span>
      </button>
    `).join('');
  }
}

function chooseReflexOption(chosenIdx) {
  if (rqAnswered) return;
  rqAnswered = true;

  const q = rqQuestions[rqCurIndex];
  if (!q) return;

  const isCorrect = (chosenIdx === q.correct);
  const chosenBtn = document.getElementById(`rq-opt-${chosenIdx}`);
  const correctBtn = document.getElementById(`rq-opt-${q.correct}`);
  const feedbackBox = document.getElementById(`rq-feedback-box`);
  const streakEl = document.getElementById('rq-streak-badge');
  const btnNext = document.getElementById('btn-rq-next');

  if (isCorrect) {
    rqStreak++;
    if (chosenBtn) chosenBtn.classList.add('correct-choice');
    if (feedbackBox) {
      feedbackBox.className = 'rq-feedback-box correct';
      feedbackBox.innerHTML = `✅ <strong>Chính xác!</strong> ${escapeHtml(q.rule)}`;
      feedbackBox.style.display = 'block';
    }
  } else {
    rqStreak = 0;
    if (chosenBtn) chosenBtn.classList.add('wrong-choice');
    if (correctBtn) correctBtn.classList.add('correct-choice');
    if (feedbackBox) {
      feedbackBox.className = 'rq-feedback-box wrong';
      feedbackBox.innerHTML = `❌ <strong>Chưa đúng rồi!</strong> Đáp án đúng là <strong>${String.fromCharCode(65 + q.correct)}. ${escapeHtml(q.options[q.correct])}</strong>.<br>${escapeHtml(q.rule)}`;
      feedbackBox.style.display = 'block';
    }
  }

  if (streakEl) streakEl.textContent = `🔥 Chuỗi đúng: ${rqStreak}`;
  if (btnNext) btnNext.style.display = 'inline-flex';
}

function nextReflexQuestion() {
  rqCurIndex++;
  renderReflexQuestion();
}

function restartReflexQuiz() {
  rqCurIndex = 0;
  rqStreak = 0;
  rqAnswered = false;

  // Restore container markup if finished
  const card = document.querySelector('.reflex-quiz-card');
  if (card && !document.getElementById('rq-prompt-text')) {
    card.innerHTML = `
      <div class="rq-header">
        <div class="rq-counter">Câu hỏi <span id="rq-cur-q">1</span> / <span id="rq-total-q">15</span></div>
        <div class="rq-streak" id="rq-streak-badge">🔥 Chuỗi đúng: 0</div>
      </div>
      <div class="rq-prompt-box">
        <div class="rq-prompt-label">⚡ Dấu hiệu nhận biết:</div>
        <div id="rq-prompt-text" class="rq-prompt-text">Đang tải câu hỏi...</div>
      </div>
      <div id="rq-options-container" class="rq-options-list"></div>
      <div id="rq-feedback-box" class="rq-feedback-box" style="display: none;"></div>
      <div class="rq-footer-row">
        <button id="btn-rq-next" class="btn btn-primary" onclick="nextReflexQuestion()" style="display: none;">
          Câu tiếp theo ➔
        </button>
        <button id="btn-rq-restart" class="btn btn-secondary" onclick="restartReflexQuiz()" style="display: none;">
          🔄 Làm lại từ đầu
        </button>
      </div>
    `;
  }

  renderReflexQuestion();
}

// -------------------------------------------------------------
// 4. Cặp Từ Đồng Nghĩa Thần Thánh (Paraphrasing)
// -------------------------------------------------------------
let currentParaQuery = '';

function renderParaphrase() {
  if (typeof CRAM_DATA === 'undefined' || !CRAM_DATA.paraphrasePairs) return;

  const grid = document.getElementById('paraphrase-cards-grid');
  if (!grid) return;

  let list = CRAM_DATA.paraphrasePairs;
  if (currentParaQuery) {
    list = list.filter(p => 
      p.word1.toLowerCase().includes(currentParaQuery) ||
      p.word2.toLowerCase().includes(currentParaQuery) ||
      (p.note && p.note.toLowerCase().includes(currentParaQuery))
    );
  }

  if (list.length === 0) {
    grid.innerHTML = '<p class="text-muted" style="padding: 20px; text-align: center; grid-column: 1 / -1;">Không tìm thấy cặp từ đồng nghĩa phù hợp.</p>';
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="paraphrase-card">
      <div class="para-words-row">
        <span class="para-word-1">${escapeHtml(p.word1)}</span>
        <span class="para-arrow">⇄</span>
        <span class="para-word-2">${escapeHtml(p.word2)}</span>
      </div>
      ${p.note ? `<div class="para-note">💡 ${escapeHtml(p.note)}</div>` : ''}
    </div>
  `).join('');
}

function filterParaphrase(query) {
  currentParaQuery = query.trim().toLowerCase();
  renderParaphrase();
}

// -------------------------------------------------------------
// 5. Sổ Câu Sai Tự Động (Mistake Bank)
// -------------------------------------------------------------
function saveMistakesFromExam(exam) {
  if (!exam || !exam.questions) return;
  let mistakes = [];
  try {
    mistakes = JSON.parse(localStorage.getItem('study_lam_mistakes') || '[]');
  } catch (e) {
    mistakes = [];
  }

  const mistakeMap = new Map();
  mistakes.forEach(m => mistakeMap.set(m.id, m));

  exam.questions.forEach(q => {
    const uAns = AppState.userAnswers[q.id];
    if (!checkAnswer(q, uAns)) {
      mistakeMap.set(q.id, {
        id: q.id,
        examId: exam.id,
        examTitle: exam.title,
        number: q.number,
        part: q.part,
        part_title: q.part_title,
        question: q.question,
        type: q.type,
        options: q.options || [],
        userAnswer: uAns || '(Chưa điền)',
        correctAnswer: q.correct_answer,
        explanation: q.explanation || {},
        timestamp: Date.now()
      });
    } else {
      // If user got it right this time, remove it from mistakes!
      mistakeMap.delete(q.id);
    }
  });

  const updated = Array.from(mistakeMap.values());
  localStorage.setItem('study_lam_mistakes', JSON.stringify(updated));
  updateMistakesBadge();
}

function updateMistakesBadge() {
  let count = 0;
  try {
    const mistakes = JSON.parse(localStorage.getItem('study_lam_mistakes') || '[]');
    count = mistakes.length;
  } catch (e) {}

  const badge = document.getElementById('cram-mistakes-badge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

function renderMistakesSection() {
  const countEl = document.getElementById('mistakes-count-info');
  const container = document.getElementById('mistakes-cards-container');
  if (!container) return;

  let mistakes = [];
  try {
    mistakes = JSON.parse(localStorage.getItem('study_lam_mistakes') || '[]');
  } catch (e) {
    mistakes = [];
  }

  if (countEl) {
    countEl.textContent = `❌ Đang có ${mistakes.length} câu cần ôn lại`;
  }

  if (mistakes.length === 0) {
    container.innerHTML = `
      <div style="background: rgba(255,255,255,0.8); border-radius: 16px; padding: 30px 20px; text-align: center; border: 1px solid rgba(255,255,255,0.9);">
        <div style="font-size: 2.4rem; margin-bottom: 8px;">🌸✨</div>
        <div style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin-bottom: 6px;">
          Tuyệt vời quá Lâm ơi!
        </div>
        <div style="font-size: 0.86rem; color: #64748b;">
          Hiện bạn không có câu sai nào cần ôn lại. Khi bạn làm đề thi thử và nộp bài, các câu chưa đúng sẽ tự động được ghi nhớ vào đây nha.
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = mistakes.map(m => `
    <div class="mistake-card" id="mistake-card-${m.id}">
      <div class="mistake-top">
        <span class="mistake-exam-title">📝 ${escapeHtml(m.examTitle)} • ${escapeHtml(m.part || '')} Câu ${m.number}</span>
        <button class="btn-remove-mistake" onclick="removeSingleMistake('${m.id}')" title="Đã hiểu câu này và xóa khỏi sổ">
          ✅ Đã hiểu (Xóa)
        </button>
      </div>
      <div class="mistake-question-text">${escapeHtml(m.question)}</div>
      <div class="mistake-answer-row">
        <span class="mistake-ans-user">Bạn chọn: ${escapeHtml(m.userAnswer)} ❌</span>
        <span class="mistake-ans-correct">Đáp án đúng: ${escapeHtml(m.correctAnswer)} ✅</span>
      </div>
      ${m.explanation && m.explanation.clue ? `
        <div class="mistake-explanation-snippet">
          🔍 <strong>Manh mối vàng:</strong> ${escapeHtml(m.explanation.clue)}
          ${m.explanation.trap ? `<br>⚠️ <strong>Bẫy cần nhớ:</strong> ${escapeHtml(m.explanation.trap)}` : ''}
        </div>
      ` : ''}
    </div>
  `).join('');
}

function removeSingleMistake(qId) {
  try {
    let mistakes = JSON.parse(localStorage.getItem('study_lam_mistakes') || '[]');
    mistakes = mistakes.filter(m => m.id !== qId);
    localStorage.setItem('study_lam_mistakes', JSON.stringify(mistakes));
    updateMistakesBadge();
    renderMistakesSection();
  } catch (e) {}
}

function clearAllMistakes() {
  if (!confirm("Lâm có chắc muốn xóa toàn bộ câu sai trong sổ tay không nè? 🌸")) return;
  localStorage.removeItem('study_lam_mistakes');
  updateMistakesBadge();
  renderMistakesSection();
}
