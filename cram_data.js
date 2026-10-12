// ===================================================================
// CRAM_DATA.JS - Học Cấp Tốc & Học Vẹt Thông Minh (Study with Lâm ✨)
// Mẹo Phản Xạ 3 Giây • Flashcards Lật Thẻ • Cặp Từ Đồng Nghĩa • Mini Quiz
// ===================================================================

const CRAM_DATA = {
  // 1. MẸO PHẢN XẠ BẤM NHANH 3 GIÂY (NHÌN DẤU HIỆU KHOANH LUÔN KHÔNG CẦN DỊCH)
  rules: [
    {
      id: "r_1",
      category: "tenses",
      categoryName: "⏱️ Phản Xạ Thì Thời Gian",
      title: "Mẹo Quá Khứ Đơn (V2 / V-ed)",
      trigger: "ago, yesterday, last night/week/year, in 2020 (năm đã qua), when I was a child",
      action: "Khoanh ngay động từ dạng V2 hoặc V-ed! Bỏ qua ngay các thì hoàn thành hay tương lai.",
      trap: "Đề hay cho 'since 2020' (HTHT) vs 'in 2020' (QKĐ). Cứ thấy 'IN + năm cũ' là bấm Quá khứ đơn!",
      example: "• I (bought / have bought) this phone 2 days ago. ➔ Đáp án: bought"
    },
    {
      id: "r_2",
      category: "tenses",
      categoryName: "⏱️ Phản Xạ Thì Thời Gian",
      title: "Mẹo Hiện Tại Hoàn Thành (have/has + V3/ed)",
      trigger: "since (mốc thời gian), for (khoảng thời gian), already, yet, just, ever, never, recently",
      action: "Tìm ngay đáp án có 'have / has + V3/ed'.",
      trap: "Từ 'YET' luôn đứng cuối câu phủ định (haven't/hasn't + V3 yet) hoặc câu hỏi. Thấy 'yet' là tìm phủ định!",
      example: "• She has lived here (for / since) five years. ➔ Đáp án: for (5 năm là khoảng thời gian)"
    },
    {
      id: "r_3",
      category: "conditionals",
      categoryName: "🔗 Mẹo Câu Điều Kiện & Liên Từ",
      title: "Mẹo Câu Điều Kiện Loại 1 (If loại 1)",
      trigger: "Thấy 'If' ở vế này, vế kia có 'will / can / may + V'",
      action: "Vế có 'If' chia Hiện tại đơn (V / Vs / Ves). TUYỆT ĐỐI KHÔNG CHỌN 'WILL' sau If!",
      trap: "Đề bài hay gài phương án 'If it will rain...' ➔ SAI 100%. Phải là 'If it rains...'",
      example: "• If she (studies / will study) hard, she will pass the exam. ➔ Đáp án: studies"
    },
    {
      id: "r_4",
      category: "conditionals",
      categoryName: "🔗 Mẹo Câu Điều Kiện & Liên Từ",
      title: "Mẹo Câu Điều Kiện Loại 2 (If loại 2 - Giả định)",
      trigger: "Thấy 'If' ở vế này, vế kia có 'would / could + V'",
      action: "Vế có 'If' lùi về Quá khứ đơn (V2/ed). Nếu là to be thì dùng 'WERE' cho mọi ngôi!",
      trap: "Nhìn thấy 'would buy' ở vế chính ➔ vế If chắc chắn là 'had' hoặc 'were', không chọn 'have'/'is'.",
      example: "• If I (were / am) you, I would take that course. ➔ Đáp án: were"
    },
    {
      id: "r_5",
      category: "conditionals",
      categoryName: "🔗 Mẹo Câu Điều Kiện & Liên Từ",
      title: "Mẹo Cặp Liên Từ Cấm Đi Cùng Nhau",
      trigger: "Although / Even though / Because",
      action: "• Đã có Although/Even though thì KHÔNG CÓ 'but'.\n• Đã có Because/Since thì KHÔNG CÓ 'so'.",
      trap: "Đề sửa lỗi sai hay viết: 'Although it rained, but we went out' ➔ Thừa chữ 'but'!",
      example: "• (Although / In spite of) it was cold, we went swimming. ➔ Sau đó là mệnh đề (S + V) nên chọn Although."
    },
    {
      id: "r_6",
      category: "verbs",
      categoryName: "🎯 Mẹo Động Từ Đi Kèm (To V vs V-ing)",
      title: "Mẹo Vàng V-ing (Gerund)",
      trigger: "look forward to, enjoy, practice, mind, suggest, avoid, keep, finish",
      action: "Đằng sau bắt buộc phải là V-ing! Đặc biệt sau 'LOOK FORWARD TO' là V-ing.",
      trap: "Look forward to có chữ 'to' nên 90% bạn bị lừa chọn V-nguyên thể. Hãy nhớ: look forward to + V-ING!",
      example: "• I look forward to (hearing / hear) from you soon. ➔ Đáp án: hearing"
    },
    {
      id: "r_7",
      category: "verbs",
      categoryName: "🎯 Mẹo Động Từ Đi Kèm (To V vs V-ing)",
      title: "Mẹo Vàng To + V (Infinitive)",
      trigger: "decide, hope, want, plan, promise, agree, refuse, afford, learn, choose",
      action: "Đằng sau bắt buộc phải là TO + V-nguyên thể.",
      trap: "Decide + to V (She decided to buy a car, không nói decided buying).",
      example: "• We agreed (to meet / meeting) at 7 p.m. ➔ Đáp án: to meet"
    },
    {
      id: "r_8",
      category: "verbs",
      categoryName: "🎯 Mẹo Động Từ Đi Kèm (To V vs V-ing)",
      title: "Mẹo Sau Giới Từ (Prepositions)",
      trigger: "in, on, at, about, without, before, after, by, of, for, instead of",
      action: "Cứ đứng ngay sau giới từ mà là động từ thì 100% THÊM ĐUÔI -ING (V-ing)!",
      trap: "Không cần dịch câu! Cứ thấy giới từ + chỗ trống động từ = chọn V-ing ngay lập tức.",
      example: "• Thank you for (helping / to help) me. ➔ Đáp án: helping"
    },
    {
      id: "r_9",
      category: "comparisons",
      categoryName: "📊 Mẹo Cấu Trúc So Sánh",
      title: "Mẹo Nhìn Chữ 'THAN' & 'THE'",
      trigger: "Chữ 'than' hoặc chữ 'the' trước chỗ trống",
      action: "• Thấy 'than' ➔ Tìm tính từ đuôi '-er' hoặc 'more + adj'.\n• Thấy 'the' ➔ Tìm tính từ đuôi '-est' hoặc 'the most + adj'.",
      trap: "Bất quy tắc hay thi nhất: good ➔ better ➔ best; bad ➔ worse ➔ worst.",
      example: "• Tom is (taller / tallest) than his brother. ➔ Đáp án: taller (vì có 'than')"
    },
    {
      id: "r_10",
      category: "signs",
      categoryName: "🪧 Mẹo Biển Báo Thần Tốc (Part 2 Đọc)",
      title: "Biển Báo 'FREE' / 'ZERO FEE'",
      trigger: "Free admission, Free entry, No charge, Complimentary",
      action: "Tìm đáp án có chữ: 'don\'t have to pay' hoặc 'costs nothing' (không phải trả tiền).",
      trap: "Đề hay gài phương án 'mustn\'t pay' (CẤM trả tiền) ➔ SAI! Đáp án đúng là 'don\'t have to pay' (không cần trả).",
      example: "• 'Free entry for students' = Students don't have to pay."
    },
    {
      id: "r_11",
      category: "signs",
      categoryName: "🪧 Mẹo Biển Báo Thần Tốc (Part 2 Đọc)",
      title: "Biển Báo CẤM: 'NO ...' / 'DO NOT ...'",
      trigger: "No parking, Do not touch, Keep out, Staff only",
      action: "Tìm đáp án có chữ: 'MUSTN\'T' (nghiêm cấm) hoặc 'CANNOT / NOT ALLOWED'.",
      trap: "Phân biệt: Mustn't = Bị cấm hoàn toàn. Don't have to = Tùy bạn, không bắt buộc.",
      example: "• 'Do not take photos' = You mustn't take photographs here."
    },
    {
      id: "r_12",
      category: "signs",
      categoryName: "🪧 Mẹo Biển Báo Thần Tốc (Part 2 Đọc)",
      title: "Biển Báo Giảm Giá: 'SALE' / 'DISCOUNT'",
      trigger: "20% off, Half price, Special offer, Sale starts today",
      action: "Tìm đáp án có chữ: 'cheaper', 'pay less', 'lower prices', 'reduced'.",
      trap: "Từ 'half price' = giảm 50% = rẻ hơn một nửa (cheaper by 50%).",
      example: "• 'All books half price this week' = Books are cheaper than usual."
    },
    {
      id: "r_13",
      category: "listening",
      categoryName: "🎧 Mẹo Bắt Bẫy Bài Nghe",
      title: "Bẫy Đổi Ý Của Người Nói (The Mind Changer)",
      trigger: "Actually..., Wait, no..., Sorry, let\'s..., I changed my mind, But today we...",
      action: "BỎ PHƯƠNG ÁN ĐẦU TIÊN! Đáp án đúng 95% nằm ngay sau từ đổi ý!",
      trap: "Người nói sẽ nhắc phương án A đầu tiên để lừa bạn khoanh, sau đó liền nói 'Actually, let\'s take the train (B)' ➔ Đáp án là B!",
      example: "• 'Shall we meet at 3? - Actually, I have class, so let\'s make it 4.15.' ➔ Đáp án đúng là 4.15!"
    },
    {
      id: "r_14",
      category: "listening",
      categoryName: "🎧 Mẹo Bắt Bẫy Bài Nghe",
      title: "Bẫy Số Đếm -teen (13-19) vs -ty (30-90)",
      trigger: "Số tiền, số nhà, số xe buýt, giờ giấc",
      action: "• Đuôi '-teen' (thirteen, fifteen, eighteen): Nhấn TRỌNG ÂM mạnh ở âm cuối, kéo dài 'tiiin'.\n• Đuôi '-ty' (thirty, fifty, eighty): Nhấn âm đầu, âm sau đọc nhẹ và nhanh 'ti'.",
      trap: "Khi điền từ Part 3/5: Cứ nghe thấy 'tiiin' kéo dài là có đuôi '-teen' (13-19).",
      example: "• Nghe thấy 'nineTEEN pounds' ➔ Điền: 19 (không phải 90)."
    },
    {
      id: "r_15",
      category: "grammar",
      categoryName: "📘 Mẹo Đại Từ Quan Hệ",
      title: "Mẹo Chọn Who, Which, Where, Whose",
      trigger: "Chỗ trống nối 2 câu",
      action: "• Trước là Người ➔ WHO (hoặc THAT)\n• Trước là Vật ➔ WHICH (hoặc THAT)\n• Trước là Nơi chốn ➔ WHERE\n• Sau có Danh từ sở hữu ➔ WHOSE",
      trap: "Có DẤU PHẨY (,) phía trước thì TUYỆT ĐỐI KHÔNG DÙNG 'THAT'!",
      example: "• The girl (who / which) sits next to me is cute. ➔ Đáp án: who"
    }
  ],

  // 2. FLASHCARDS LẬT THẺ THÔNG MINH (ACTIVE RECALL & CÁCH NHỚ MẸO VẸT)
  flashcards: [
    {
      id: "fc_1",
      word: "look forward to + V-ing",
      type: "phrasal verb",
      phonetic: "/lʊk ˈfɔː.wəd tuː/",
      meaning: "Rất mong chờ / trông đợi điều gì",
      mnemonic: "💡 Mẹo vẹt: Cứ thấy 'forward to' là mắt sáng lên bấm ngay đuôi -ING. Đề thi 10 lần thì 9 lần gài bẫy này!",
      example: "I look forward to seeing you tomorrow. (Mình rất mong được gặp cậu ngày mai 🌸)"
    },
    {
      id: "fc_2",
      word: "delay = put off",
      type: "verb",
      phonetic: "/dɪˈleɪ/",
      meaning: "Trì hoãn, bị muộn giờ",
      mnemonic: "💡 Mẹo vẹt: 'Delay' trên bảng ga tàu = 'late' (đến muộn) = 'leave later than planned' (xuất phát muộn hơn).",
      example: "The train was delayed by 30 minutes due to heavy rain."
    },
    {
      id: "fc_3",
      word: "receipt (chữ p câm!)",
      type: "noun",
      phonetic: "/rɪˈsiːt/",
      meaning: "Hóa đơn mua hàng, biên lai",
      mnemonic: "💡 Mẹo vẹt: Phát âm là 'ri-sít', chữ 'p' câm không đọc. Trong bài đọc, muốn đổi đồ (exchange/refund) phải đem theo 'receipt'.",
      example: "Please keep your receipt to get a refund."
    },
    {
      id: "fc_4",
      word: "free of charge = no fee",
      type: "phrase",
      phonetic: "/friː əv tʃɑːdʒ/",
      meaning: "Miễn phí hoàn toàn (không mất tiền)",
      mnemonic: "💡 Mẹo vẹt: 'Charge' là tính tiền, 'Free of charge' là không tính tiền = 'You don't have to pay' = 'costs £0'.",
      example: "Parking is free of charge on Sundays."
    },
    {
      id: "fc_5",
      word: "fare vs fee vs fine",
      type: "noun comparison",
      phonetic: "/feər/ - /fiː/ - /faɪn/",
      meaning: "Fare: vé tàu xe | Fee: học phí/phí dịch vụ | Fine: tiền phạt",
      mnemonic: "💡 Mẹo vẹt: Xe 'Far' (đi xa) thì trả 'Fare'. Vi phạm thì 'Fine' (phạt). Đề nghe hay hỏi bus fare / train fare.",
      example: "Bus fares in Hanoi are quite cheap for students."
    },
    {
      id: "fc_6",
      word: "single ticket vs return ticket",
      type: "noun phrase",
      phonetic: "/ˈsɪŋ.ɡəl/ - /rɪˈtɜːn/",
      meaning: "Single: vé 1 chiều | Return: vé khứ hồi (2 chiều)",
      mnemonic: "💡 Mẹo vẹt: 'Single' là độc thân đi 1 mình 1 chiều. 'Return' là có đi có về (2 chiều) = 'round trip'.",
      example: "A return ticket to London saves you 20% compared to two singles."
    },
    {
      id: "fc_7",
      word: "mustn't vs don't have to",
      type: "modal verb",
      phonetic: "/ˈmʌs.ənt/ - /dəʊnt hæv tuː/",
      meaning: "Mustn't: CẤM LÀM! | Don't have to: Không cần làm (tùy bạn)",
      mnemonic: "💡 Mẹo vẹt: Thấy biển 'No swimming' ➔ You MUSTN'T swim (cấm). Thấy biển 'Admission free' ➔ You DON'T HAVE TO pay (không cần trả).",
      example: "You mustn't use phones during the test."
    },
    {
      id: "fc_8",
      word: "shut = closed",
      type: "adj / verb",
      phonetic: "/ʃʌt/ - /kləʊzd/",
      meaning: "Đóng cửa (không mở cửa)",
      mnemonic: "💡 Mẹo vẹt: Biển báo cửa tiệm ghi 'SHUT until Monday' = The shop will be CLOSED until Monday.",
      example: "The library is shut on public holidays."
    },
    {
      id: "fc_9",
      word: "accommodation",
      type: "noun",
      phonetic: "/əˌkɒm.əˈdeɪ.ʃən/",
      meaning: "Chỗ ở, phòng trọ, khách sạn lưu trú",
      mnemonic: "💡 Mẹo vẹt: Từ dài có 2 chữ c và 2 chữ m. Xuất hiện trong bài đọc về sinh viên tìm phòng trọ hoặc du lịch.",
      example: "University accommodation is available for first-year students."
    },
    {
      id: "fc_10",
      word: "discount = reduction",
      type: "noun",
      phonetic: "/ˈdɪs.kaʊnt/",
      meaning: "Giảm giá, chiết khấu",
      mnemonic: "💡 Mẹo vẹt: Thấy '10% off' hay 'student discount' ➔ Trong câu hỏi tìm chữ 'cheaper' (rẻ hơn) hoặc 'pay less'.",
      example: "Show your student card to get a 10% discount."
    },
    {
      id: "fc_11",
      word: "coach = long-distance bus",
      type: "noun",
      phonetic: "/kəʊtʃ/",
      meaning: "Xe khách đường dài",
      mnemonic: "💡 Mẹo vẹt: Không phải huấn luyện viên! Trong bài thi du lịch, 'coach' luôn là xe khách liên tỉnh.",
      example: "We traveled from Hanoi to Sapa by sleeper coach."
    },
    {
      id: "fc_12",
      word: "platform",
      type: "noun",
      phonetic: "/ˈplæt.fɔːm/",
      meaning: "Sân ga đón tàu (ga đường sắt)",
      mnemonic: "💡 Mẹo vẹt: Đi tàu hỏa thì chờ ở 'platform'. Đi máy bay thì ra 'gate'. Đề nghe hay hỏi số sân ga: 'Platform 3'.",
      example: "The train to Da Nang will depart from platform 2."
    },
    {
      id: "fc_13",
      word: "colleague = co-worker",
      type: "noun",
      phonetic: "/ˈkɒl.iːɡ/",
      meaning: "Đồng nghiệp làm chung công ty",
      mnemonic: "💡 Mẹo vẹt: 'Colleague' đi làm chung, khác với 'classmate' (bạn cùng lớp) hay 'flatmate' (bạn cùng phòng trọ).",
      example: "She gets along very well with all her colleagues."
    },
    {
      id: "fc_14",
      word: "affordable = reasonable",
      type: "adj",
      phonetic: "/əˈfɔː.də.bəl/",
      meaning: "Giá cả phải chăng, vừa túi tiền",
      mnemonic: "💡 Mẹo vẹt: 'Afford' là đủ tiền chi trả, 'affordable' = 'not expensive' = 'cheap enough'.",
      example: "The cafeteria serves delicious food at affordable prices."
    },
    {
      id: "fc_15",
      word: "receptionist",
      type: "noun",
      phonetic: "/rɪˈsep.ʃən.ɪst/",
      meaning: "Nhân viên lễ tân (khách sạn, phòng khám)",
      mnemonic: "💡 Mẹo vẹt: Đứng ở bàn 'reception' để đón khách, làm thủ tục check-in nhận chìa khóa phòng.",
      example: "The receptionist gave us a map of the city."
    },
    {
      id: "fc_16",
      word: "information & advice (không đếm được!)",
      type: "uncountable noun",
      phonetic: "/ˌɪn.fəˈmeɪ.ʃən/ - /ədˈvaɪs/",
      meaning: "Thông tin & Lời khuyên (KHÔNG CÓ 's')",
      mnemonic: "💡 Mẹo vẹt: Không bao giờ có 'informations' hay 'an advice'! Dùng 'much information' hoặc 'a piece of advice'.",
      example: "Can you give me some advice about the exam?"
    },
    {
      id: "fc_17",
      word: "half past vs quarter to",
      type: "time expression",
      phonetic: "/hɑːf pɑːst/ - /ˈkwɔː.tər tuː/",
      meaning: "Half past = rưỡi (:30) | Quarter to = kém 15 (:45)",
      mnemonic: "💡 Mẹo vẹt: 'Half past 8' = 8h30. 'Quarter to 9' = 9h kém 15 = 8h45. Bài nghe cực kỳ hay hỏi!",
      example: "The flight takes off at quarter to ten (9:45)."
    },
    {
      id: "fc_18",
      word: "cancel = call off",
      type: "verb",
      phonetic: "/ˈkæn.səl/ - /kɔːl ɒf/",
      meaning: "Hủy bỏ hoàn toàn (không diễn ra nữa)",
      mnemonic: "💡 Mẹo vẹt: Khác với 'delay' (hoãn sang lúc khác), 'cancel' là hủy luôn không tổ chức.",
      example: "The match was called off because of heavy storm."
    },
    {
      id: "fc_19",
      word: "luggage = baggage",
      type: "uncountable noun",
      phonetic: "/ˈlʌɡ.ɪdʒ/ - /ˈbæɡ.ɪdʒ/",
      meaning: "Hành lý (vali, túi xách khi đi du lịch)",
      mnemonic: "💡 Mẹo vẹt: Là danh từ không đếm được (không có luggages). Đi kèm với 'hand luggage' (hành lý xách tay).",
      example: "Passengers can carry up to 20kg of checked luggage."
    },
    {
      id: "fc_20",
      word: "apply for (a job/course)",
      type: "phrasal verb",
      phonetic: "/əˈplaɪ fɔːr/",
      meaning: "Nộp đơn ứng tuyển (xin việc / xin học bổng)",
      mnemonic: "💡 Mẹo vẹt: Luôn đi với giới từ 'FOR'. Đi xin việc là 'apply for a job'.",
      example: "More than 100 students applied for the scholarship."
    }
  ],

  // 3. 20 CẶP TỪ ĐỒNG NGHĨA KINH ĐIỂN TRONG ĐỀ THI (PARAPHRASE PAIRS)
  paraphrasePairs: [
    { word1: "free of charge / complimentary", word2: "don't have to pay / costs nothing", note: "Xuất hiện 100% trong bài biển báo A-K" },
    { word1: "discount / special offer / 20% off", word2: "cheaper / reduced price / pay less", note: "Bẫy giá tiền trong bài đọc & nghe" },
    { word1: "shut / closed", word2: "not open / out of service", note: "Biển báo giờ mở cửa" },
    { word1: "delay / late", word2: "leave later / arrive behind schedule", note: "Thông báo ga tàu / chuyến bay" },
    { word1: "return ticket", word2: "round trip (2-way ticket)", note: "Bài mua vé đi lại" },
    { word1: "coach", word2: "long-distance bus", note: "Phương tiện di chuyển đường dài" },
    { word1: "colleague", word2: "co-worker / workmate", note: "Đồng nghiệp trong văn phòng" },
    { word1: "firefighter", word2: "fireman / fire crew", note: "Bài đọc Dany lính cứu hỏa" },
    { word1: "call off", word2: "cancel / will not happen", note: "Hủy bỏ sự kiện" },
    { word1: "put off", word2: "postpone / delay", note: "Hoãn lại sang ngày khác" },
    { word1: "affordable", word2: "reasonable / inexpensive", note: "Giá cả hợp lý" },
    { word1: "luggage", word2: "baggage / suitcases", note: "Hành lý du lịch" },
    { word1: "pupil", word2: "student / schoolchild", note: "Học sinh" },
    { word1: "assist", word2: "help / give a hand", note: "Hỗ trợ, giúp đỡ" },
    { word1: "occupant / tenant", word2: "person who lives there / renter", note: "Người thuê nhà" },
    { word1: "vacant", word2: "empty / available / not occupied", note: "Phòng trống, chỗ trống" },
    { word1: "staff only", word2: "customers cannot enter / private", note: "Chỉ dành cho nhân viên" },
    { word1: "prohibit / forbid", word2: "not allowed / mustn't", note: "Nghiêm cấm làm gì" },
    { word1: "be fond of / keen on", word2: "like / enjoy / love", note: "Thích điều gì" },
    { word1: "look forward to", word2: "wait with excitement", note: "Trông chờ háo hức" }
  ],

  // 4. MINI QUIZ PHẢN XẠ 3 GIÂY (INTERACTIVE SPEED TEST)
  reflexQuiz: [
    {
      id: "sq_1",
      prompt: "I bought this new phone two days ______.",
      options: ["ago", "since", "for"],
      correct: 0,
      rule: "⚡ Thấy thì quá khứ đơn (bought) + khoảng thời gian (two days) ➔ Chọn ngay 'ago'!"
    },
    {
      id: "sq_2",
      prompt: "I really look forward to ______ from you soon.",
      options: ["hearing", "hear", "heard"],
      correct: 0,
      rule: "⚡ Mẹo vẹt: Sau 'look forward to' bắt buộc là V-ING (hearing)!"
    },
    {
      id: "sq_3",
      prompt: "Biển báo ghi: 'FREE ADMISSION FOR STUDENTS'. Nghĩa là gì?",
      options: ["Students don't have to pay", "Students mustn't enter", "Students pay half price"],
      correct: 0,
      rule: "⚡ 'Free admission' = 'Don't have to pay' (Miễn phí = Không phải trả tiền)!"
    },
    {
      id: "sq_4",
      prompt: "If it ______ tomorrow, we will stay at home.",
      options: ["rains", "will rain", "rained"],
      correct: 0,
      rule: "⚡ Vế sau có 'will stay' (If loại 1) ➔ Vế If chia hiện tại đơn (rains). Cấm dùng will sau If!"
    },
    {
      id: "sq_5",
      prompt: "She is much ______ than her older sister.",
      options: ["taller", "tallest", "more tall"],
      correct: 0,
      rule: "⚡ Thấy chữ 'than' ➔ Chọn tính từ ngắn đuôi '-er' (taller)!"
    },
    {
      id: "sq_6",
      prompt: "Biển báo ghi: 'NO PARKING BETWEEN 8 AM AND 6 PM'. Nghĩa là:",
      options: ["You mustn't park here", "You can park for free", "You should park here"],
      correct: 0,
      rule: "⚡ 'NO ...' = Biển báo CẤM ➔ Chọn 'You mustn't'!"
    },
    {
      id: "sq_7",
      prompt: "Thank you so much for ______ me with my homework.",
      options: ["helping", "to help", "help"],
      correct: 0,
      rule: "⚡ Sau giới từ 'for' ➔ Động từ 100% thêm đuôi -ing (helping)!"
    },
    {
      id: "sq_8",
      prompt: "They decided ______ a new apartment near the university.",
      options: ["to rent", "renting", "rent"],
      correct: 0,
      rule: "⚡ Sau động từ 'decide' ➔ Luôn luôn đi với TO + V (to rent)!"
    },
    {
      id: "sq_9",
      prompt: "Người nói trong bài nghe: 'I wanted coffee, but actually, tea sounds nicer.' Họ uống gì?",
      options: ["Tea", "Coffee", "Water"],
      correct: 0,
      rule: "⚡ Bẫy đổi ý: 'Actually...' ➔ Đáp án đúng là thông tin ngay sau từ đổi ý (Tea)!"
    },
    {
      id: "sq_10",
      prompt: "She has studied English ______ 2021.",
      options: ["since", "for", "in"],
      correct: 0,
      rule: "⚡ Thì HTHT (has studied) + mốc thời gian cụ thể (2021) ➔ Dùng 'since'!"
    },
    {
      id: "sq_11",
      prompt: "Biển báo tiệm ghi: 'ALL ITEMS HALF PRICE TODAY'. Nghĩa là:",
      options: ["Things are cheaper than usual", "You pay full price", "Only half the items are sold"],
      correct: 0,
      rule: "⚡ 'Half price' = giảm 50% ➔ Đồ rẻ hơn bình thường (cheaper than usual)!"
    },
    {
      id: "sq_12",
      prompt: "The train departs at 'quarter to eight'. Mấy giờ tàu chạy?",
      options: ["7:45", "8:15", "8:45"],
      correct: 0,
      rule: "⚡ 'Quarter to eight' = 8h kém 15 = 7:45!"
    },
    {
      id: "sq_13",
      prompt: "The girl ______ is talking to the teacher is my best friend.",
      options: ["who", "which", "whose"],
      correct: 0,
      rule: "⚡ Danh từ phía trước là Người ('The girl') ➔ Đại từ quan hệ là 'who'!"
    },
    {
      id: "sq_14",
      prompt: "______ it was raining heavily, they went camping.",
      options: ["Although", "Because", "Despite"],
      correct: 0,
      rule: "⚡ 2 vế tương phản (mưa to nhưng vẫn đi cắm trại) + là mệnh đề (S+V) ➔ Dùng 'Although'!"
    },
    {
      id: "sq_15",
      prompt: "This is ______ hotel in the whole city.",
      options: ["the most expensive", "more expensive", "expensive than"],
      correct: 0,
      rule: "⚡ Đứng trước chỗ trống có 'the' + so sánh cả thành phố ➔ So sánh nhất 'the most expensive'!"
    }
  ]
};