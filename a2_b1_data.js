// ===================================================================
// A2_B1_DATA.JS - Cẩm Nang & Trọng Tâm Ôn Luyện A2 - B1 (Phenikaa)
// ===================================================================

const A2_B1_KNOWLEDGE = {
  // 1. TIÊU CHUẨN ĐÁNH GIÁ & QUY ĐỔI ĐIỂM
  standards: {
    title: "Khung Năng Lực Ngoại Ngữ & Tiêu Chuẩn Điểm Phenikaa",
    description: "Kỳ thi tiếng Anh Phenikaa đánh giá năng lực theo khung 6 bậc (VSTEP/KET). Dưới đây là mốc điểm chuẩn để bạn xác định mục tiêu của mình:",
    levels: [
      {
        level: "Bậc 2 (Level A2)",
        sub: "Chuẩn Qua Môn / Chuẩn Đầu Vào",
        badge: "🌸 Mục Tiêu Cơ Bản",
        colorClass: "level-a2",
        targetScore: "5.0 - 6.9 / 10 điểm",
        listeningReq: "Đúng từ 13 / 25 câu",
        readingReq: "Đúng từ 15 / 30 câu",
        desc: "Hiểu được các câu giao tiếp đơn giản, thông tin cá nhân, mua sắm, phương tiện, biển báo chỉ đường và những nhu cầu thiết yếu hàng ngày.",
        tips: "Tập trung chắc chắn ăn trọn điểm Part 1, Part 2 (Nghe) và Part 2 (Nối biển báo A-K). Chú ý không để bị lừa các câu số điện thoại, giờ giấc."
      },
      {
        level: "Bậc 3 (Level B1)",
        sub: "Chuẩn Đầu Ra Tốt Nghiệp Đại Học",
        badge: "🏆 Mục Tiêu Nâng Cao",
        colorClass: "level-b1",
        targetScore: "7.0 - 10 / 10 điểm",
        listeningReq: "Đúng từ 18 / 25 câu",
        readingReq: "Đúng từ 21 / 30 câu",
        desc: "Hiểu được các đoạn hội thoại dài, nắm bắt ý chính các bài đọc thực tế, phân biệt được thông tin gây nhiễu và từ đồng nghĩa (paraphrasing).",
        tips: "Cần làm chủ Part 3, Part 4 (Bài đọc dài) và Part 3, Part 5 (Điền từ vào phiếu nghe). Phải nắm chắc các cặp từ đồng nghĩa phổ biến."
      }
    ]
  },

  // 2. 10 CHUYÊN ĐỀ NGỮ PHÁP TRỌNG TÂM A2 - B1
  grammar: [
    {
      id: "gr_1",
      title: "1. Hiện Tại Hoàn Thành vs Quá Khứ Đơn",
      level: "A2 - B1",
      badge: "Hay ra nhất ⭐⭐⭐",
      formula: "HTHT: S + have/has + V3/ed | QKĐ: S + V2/ed",
      rule: "Quá khứ đơn dùng cho hành động ĐÃ CHẤM DỨT trong quá khứ (có thời gian rõ ràng: yesterday, last year, in 2020, ago). Hiện tại hoàn thành dùng cho hành động kéo dài từ quá khứ đến hiện tại hoặc không rõ thời gian.",
      clues: "Dấu hiệu HTHT: since, for, already, yet, just, ever, never, recently.",
      example: "• I have lived here for 3 years. (Tôi đã sống ở đây 3 năm và hiện tại vẫn đang sống ở đây).\n• I bought this car yesterday. (Tôi mua xe hôm qua - hành động đã xong hoàn toàn).",
      trap: "Đề bài hay gài chữ 'ago' hoặc năm quá khứ 'in 2019' mà lại dùng HTHT là sai! Cứ thấy mốc thời gian đã qua thì chọn Quá khứ đơn."
    },
    {
      id: "gr_2",
      title: "2. Câu Điều Kiện Loại 1 & Loại 2 (If Conditionals)",
      level: "A2 - B1",
      badge: "Xuất hiện ở Part 1 & 4 Đọc",
      formula: "Loại 1: If + S + V(hiện tại đơn), S + will / can + V-nguyên thể\nLoại 2: If + S + V2/ed (were), S + would / could + V-nguyên thể",
      rule: "Loại 1 diễn tả sự việc CÓ THỂ xảy ra ở hiện tại hoặc tương lai. Loại 2 diễn tả giả định KHÔNG CÓ THẬT ở hiện tại (lưu ý: to be dùng 'were' cho mọi ngôi).",
      clues: "Nhìn vế có sẵn: Nếu vế sau có 'will + V' thì vế If chia hiện tại đơn. Nếu vế sau có 'would + V' thì vế If lùi về quá khứ đơn.",
      example: "• If it rains tomorrow, we will stay at home.\n• If I had a lot of money, I would travel around the world.",
      trap: "Sau 'If' KHÔNG BAO GIỜ dùng 'will' (Không nói: If it will rain... mà phải là If it rains...)."
    },
    {
      id: "gr_3",
      title: "3. Câu Bị Động Cơ Bản (Passive Voice)",
      level: "A2 - B1",
      badge: "Rất phổ biến trong biển báo & thông báo",
      formula: "S + be + V3/ed (+ by O)",
      rule: "Dùng khi chủ ngữ là vật hoặc bị tác động bởi hành động khác (không tự làm được).",
      clues: "Chủ ngữ là đồ vật/sự việc (tickets, rooms, cars, emails) + có từ 'by' chỉ đối tượng thực hiện.",
      example: "• English is spoken all over the world.\n• All mobile phones must be turned off during the exam.",
      trap: "Biển báo thường ghi tắt: 'Tickets sold here' thực chất là câu bị động 'Tickets are sold here' (Vé được bán tại đây)."
    },
    {
      id: "gr_4",
      title: "4. Mệnh Đề Quan Hệ (Who, Which, That, Where, Whose)",
      level: "A2 - B1",
      badge: "Part 1 & Part 4 Đọc",
      formula: "• Who: thay thế cho Người (làm chủ ngữ/tân ngữ)\n• Which: thay thế cho Vật\n• That: thay thế cho cả Người và Vật\n• Where: thay thế cho Nơi chốn\n• Whose: chỉ Sự sở hữu (whose + danh từ)",
      rule: "Nhìn ngay từ đứng trước chỗ trống là danh từ chỉ Người hay chỉ Vật để chọn từ nối phù hợp.",
      clues: "Nếu trước là người (the girl, the doctor) -> Who. Nếu là vật (the book, the car) -> Which. Nếu là địa điểm (the town, the school) -> Where.",
      example: "• The girl who is talking to Peter is my sister.\n• The hotel where we stayed was very comfortable.",
      trap: "Nếu trước chỗ trống có dấu phẩy (,) hoặc giới từ thì KHÔNG ĐƯỢC dùng 'that'!"
    },
    {
      id: "gr_5",
      title: "5. Cấu Trúc So Sánh (Comparisons)",
      level: "A2",
      badge: "Cơ bản cần nắm chắc",
      formula: "• So sánh hơn: S1 + be + adj-er / more adj + THAN + S2\n• So sánh nhất: S1 + be + THE + adj-est / THE MOST adj\n• So sánh bằng: AS + adj + AS",
      rule: "Tính từ ngắn (1 âm tiết) thêm đuôi -er/-est. Tính từ dài (2 âm tiết trở lên) dùng more/the most.",
      clues: "Cứ thấy chữ 'than' là phải tìm dạng so sánh hơn. Thấy chữ 'the' phía trước là tìm dạng so sánh nhất.",
      example: "• Tom is taller than Jack.\n• This is the most expensive hotel in the city.",
      trap: "Các trường hợp bất quy tắc: good -> better -> best; bad -> worse -> worst; far -> farther/further -> furthest."
    },
    {
      id: "gr_6",
      title: "6. Động Từ Đi Kèm To V vs V-ing (Gerund & Infinitive)",
      level: "A2 - B1",
      badge: "Hay gài bẫy nhất Part 1 Đọc",
      formula: "• Theo sau bởi To V: want, decide, hope, plan, promise, offer, choose, afford, learn...\n• Theo sau bởi V-ing: enjoy, avoid, finish, suggest, consider, mind, practice, look forward to...",
      rule: "Cần nhớ thuộc lòng nhóm động từ đi với To V và nhóm đi với V-ing.",
      clues: "Sau giới từ (in, on, at, about, without, for...) luôn luôn là V-ing!",
      example: "• She decided to study English. (Decide + to V)\n• I really enjoy listening to music. (Enjoy + V-ing)",
      trap: "'Look forward to' có chữ 'to' nhưng phía sau PHẢI là V-ing (I look forward to hearing from you)."
    },
    {
      id: "gr_7",
      title: "7. Giới Từ Thời Gian & Nơi Chốn (In - On - At)",
      level: "A2",
      badge: "Bắt buộc phải thuộc",
      formula: "Quy tắc kim tự tháp (Rộng -> Vừa -> Cụ thể):\n• IN: Năm, tháng, mùa, thế kỷ, buổi trong ngày (in 2026, in May, in summer, in the morning)\n• ON: Thứ trong tuần, ngày cụ thể, ngày lễ (on Monday, on 15th May, on Christmas Day)\n• AT: Giờ chính xác, ban đêm, thời điểm cụ thể (at 7:30 p.m., at night, at the weekend, at noon)",
      rule: "Nơi chốn: IN (quốc gia, thành phố, không gian kín); ON (bề mặt, đường phố, tầng lầu); AT (địa chỉ chính xác, địa điểm cụ thể: at school, at the station, at 123 Main St).",
      clues: "Nhìn từ đứng ngay sau chỗ trống để xác định loại thời gian hay địa điểm.",
      example: "• The party starts at 8.30 p.m. on Sunday.\n• She was born in October, in Hanoi.",
      trap: "Cứ có 'Day' (ngày) là dùng ON, ví dụ: 'on my birthday', 'on Friday morning'."
    },
    {
      id: "gr_8",
      title: "8. Động Từ Khuyết Thiếu (Modal Verbs: Can, Must, Should...)",
      level: "A2 - B1",
      badge: "Trọng tâm bài biển báo A-K",
      formula: "S + Modal Verb + V-nguyên thể (không 'to', không chia ngôi)",
      rule: "• Must: Bắt buộc (bị phạt nếu không làm)\n• Mustn't: CẤM (nghiêm cấm tuyệt đối)\n• Don't have to: Không cần phải (làm cũng được, không làm cũng được)\n• Should: Khuyên nên làm\n• Can / Could: Có thể (khả năng hoặc xin phép)",
      clues: "Biển báo cấm (No parking, Do not touch...) = You mustn't...",
      example: "• You must wear a helmet. (Bạn bắt buộc phải đội mũ bảo hiểm).\n• You don't have to pay. It's free. (Bạn không cần trả tiền, nó miễn phí).",
      trap: "Phân biệt cực kỹ giữa 'Mustn't' (CẤM!) và 'Don't have to' (KHÔNG CẦN, TÙY BẠN). Biển báo 'Free entry' có nghĩa là bạn 'don't have to pay', chứ không phải 'mustn't pay'!"
    },
    {
      id: "gr_9",
      title: "9. Liên Từ & Từ Nối Câu (Conjunctions)",
      level: "A2 - B1",
      badge: "Xuất hiện trong bài đọc hiểu",
      formula: "• Chỉ nguyên nhân: Because, Since, As (+ Mệnh đề) | Because of (+ Cụm danh từ/V-ing)\n• Chỉ sự nhượng bộ: Although, Even though, Though (+ Mệnh đề) | In spite of, Despite (+ Cụm danh từ/V-ing)\n• Chỉ kết quả / đối lập: However (tuy nhiên), Therefore (vì vậy), But (nhưng), So (cho nên)",
      rule: "Xác định mối quan hệ giữa 2 vế câu (nguyên nhân - kết quả hay tương phản, đối lập).",
      clues: "Nếu 2 vế ngược nghĩa nhau (mặc dù trời mưa nhưng vẫn đi chơi) -> dùng Although / But / However.",
      example: "• Although it was raining heavily, we went for a walk.\n• He was tired, so he went to bed early.",
      trap: "Trong tiếng Anh: Đã dùng 'Although' thì KHÔNG dùng 'but'. Đã dùng 'Because' thì KHÔNG dùng 'so'!"
    },
    {
      id: "gr_10",
      title: "10. Lượng Từ (Quantifiers: Many, Much, A few, A little...)",
      level: "A2",
      badge: "Hay hỏi trong phần trắc nghiệm",
      formula: "• Đi với Danh từ đếm được số nhiều: Many, A few (một vài, đủ dùng), Few (rất ít, gần như không có)\n• Đi với Danh từ không đếm được: Much, A little (một ít, đủ dùng), Little (rất ít, không đủ)\n• Đi với cả hai: A lot of, Lots of, Some, Any",
      rule: "Danh từ không đếm được (nước, tiền, thời gian, lời khuyên: water, money, time, information, advice) -> Dùng MUCH / A LITTLE.",
      clues: "'Some' dùng trong câu khẳng định và lời mời. 'Any' dùng trong câu phủ định và nghi vấn (hỏi).",
      example: "• How much money do you need?\n• She has a few close friends at university.",
      trap: "'Information' và 'Advice' trong tiếng Anh là danh từ KHÔNG ĐẾM ĐƯỢC (không có 'informations' hay 'an advice')."
    }
  ],

  // 3. BỘ TỪ VỰNG VÀNG A2 - B1 THEO CHỦ ĐỀ
  vocabularyTopics: [
    {
      id: "voc_travel",
      name: "✈️ Du Lịch & Phương Tiện",
      desc: "Xuất hiện nhiều nhất trong bài nghe Part 1 & 2 và bài đọc KET",
      words: [
        { word: "delay", type: "v, n", phonetic: "/dɪˈleɪ/", meaning: "trì hoãn, bị muộn", example: "The train was delayed due to bad weather." },
        { word: "platform", type: "n", phonetic: "/ˈplæt.fɔːm/", meaning: "sân ga, ga đón tàu", example: "The train for London departs from platform 3." },
        { word: "passenger", type: "n", phonetic: "/ˈpæs.ən.dʒər/", meaning: "hành khách", example: "All passengers must show their tickets." },
        { word: "fare", type: "n", phonetic: "/feər/", meaning: "giá vé tàu xe", example: "Bus fares have increased this month." },
        { word: "single ticket", type: "n", phonetic: "/ˈsɪŋ.ɡəl ˈtɪk.ɪt/", meaning: "vé một chiều", example: "A single ticket to Oxford costs £15." },
        { word: "return ticket", type: "n", phonetic: "/rɪˈtɜːn ˈtɪk.ɪt/", meaning: "vé khứ hồi (2 chiều)", example: "It is cheaper to buy a return ticket." },
        { word: "luggage / baggage", type: "n", phonetic: "/ˈlʌɡ.ɪdʒ/", meaning: "hành lý", example: "You can carry two pieces of luggage." },
        { word: "journey", type: "n", phonetic: "/ˈdʒɜː.ni/", meaning: "chuyến đi, hành trình", example: "Have a safe journey home!" },
        { word: "coach", type: "n", phonetic: "/kəʊtʃ/", meaning: "xe khách đường dài", example: "We traveled from Hanoi to Danang by coach." },
        { word: "flight", type: "n", phonetic: "/flaɪt/", meaning: "chuyến bay", example: "Our flight departs at 9.00 a.m." }
      ]
    },
    {
      id: "voc_shopping",
      name: "🛒 Mua Sắm & Giá Cả",
      desc: "Cốt lõi của bài đọc biển báo Part 2 và nghe Part 3",
      words: [
        { word: "discount", type: "n", phonetic: "/ˈdɪs.kaʊnt/", meaning: "giảm giá", example: "Students get a 10% discount on books." },
        { word: "receipt", type: "n", phonetic: "/rɪˈsiːt/", meaning: "hóa đơn mua hàng (chữ p câm)", example: "Keep your receipt in case you want to return it." },
        { word: "refund", type: "n, v", phonetic: "/ˈriː.fʌnd/", meaning: "hoàn tiền", example: "They refused to give me a refund." },
        { word: "in cash", type: "prep", phonetic: "/ɪn kæʃ/", meaning: "bằng tiền mặt", example: "Would you like to pay in cash or by credit card?" },
        { word: "free of charge", type: "adj", phonetic: "/friː əv tʃɑːdʒ/", meaning: "miễn phí hoàn toàn", example: "Delivery is free of charge for orders over £50." },
        { word: "special offer", type: "n", phonetic: "/ˈspeʃ.əl ˈɒf.ər/", meaning: "ưu đãi đặc biệt", example: "Buy one, get one free is our special offer today." },
        { word: "affordable", type: "adj", phonetic: "/əˈfɔː.də.bəl/", meaning: "giá cả phải chăng, hợp túi tiền", example: "The shop sells stylish clothes at affordable prices." },
        { word: "customer", type: "n", phonetic: "/ˈkʌs.tə.mər/", meaning: "khách hàng", example: "The shop assistant was very polite to customers." }
      ]
    },
    {
      id: "voc_daily",
      name: "🏠 Sinh Hoạt Hàng Ngày & Nhà Cửa",
      desc: "Xuất hiện trong các bài miêu tả cuộc sống sinh viên",
      words: [
        { word: "flatmate / roommate", type: "n", phonetic: "/ˈflæt.meɪt/", meaning: "bạn cùng phòng / cùng nhà", example: "My flatmate is very tidy and friendly." },
        { word: "accommodation", type: "n", phonetic: "/əˌkɒm.əˈdeɪ.ʃən/", meaning: "chỗ ở, nơi lưu trú", example: "Student accommodation is available on campus." },
        { word: "furniture", type: "n", phonetic: "/ˈfɜː.nɪ.tʃər/", meaning: "đồ đạc nội thất (không đếm được)", example: "The apartment is rented with modern furniture." },
        { word: "appliance", type: "n", phonetic: "/əˈplaɪ.əns/", meaning: "thiết bị gia dụng", example: "Kitchen appliances include a fridge and microwave." },
        { word: "rent", type: "v, n", phonetic: "/rent/", meaning: "thuê nhà / tiền thuê", example: "The rent is £400 per month including bills." },
        { word: "neighborhood", type: "n", phonetic: "/ˈneɪ.bə.hʊd/", meaning: "khu vực lân cận, khu xóm", example: "It is a quiet and safe neighborhood." }
      ]
    },
    {
      id: "voc_work",
      name: "💼 Công Việc & Nghề Nghiệp",
      desc: "Chủ đề đọc hiểu KET/VSTEP về các nhân vật truyền cảm hứng",
      words: [
        { word: "receptionist", type: "n", phonetic: "/rɪˈsep.ʃən.ɪst/", meaning: "nhân viên lễ tân", example: "The receptionist handed me the room key." },
        { word: "firefighter", type: "n", phonetic: "/ˈfaɪəˌfaɪ.tər/", meaning: "lính cứu hỏa", example: "Dany has been a firefighter for over 20 years." },
        { word: "salary", type: "n", phonetic: "/ˈsæl.ər.i/", meaning: "tiền lương tháng", example: "She is looking for a job with a higher salary." },
        { word: "colleague", type: "n", phonetic: "/ˈkɒl.iːɡ/", meaning: "đồng nghiệp", example: "I get along very well with my colleagues." },
        { word: "apply for", type: "v", phonetic: "/əˈplaɪ fɔːr/", meaning: "nộp đơn ứng tuyển", example: "He applied for the receptionist position." },
        { word: "experience", type: "n", phonetic: "/ɪkˈspɪə.ri.əns/", meaning: "kinh nghiệm làm việc", example: "Applicants must have 2 years of relevant experience." }
      ]
    },
    {
      id: "voc_education",
      name: "🎓 Học Tập & Giáo Dục",
      desc: "Trọng tâm bài nghe thông báo lớp học và ghi chú Sally",
      words: [
        { word: "course", type: "n", phonetic: "/kɔːs/", meaning: "khóa học", example: "She enrolled in a 3-month English course." },
        { word: "assignment", type: "n", phonetic: "/əˈsaɪn.mənt/", meaning: "bài tập được giao", example: "We have to finish our biology assignment by Friday." },
        { word: "beginner", type: "n", phonetic: "/bɪˈɡɪn.ər/", meaning: "người mới bắt đầu học", example: "This taekwondo class is designed for beginners." },
        { word: "intermediate", type: "adj", phonetic: "/ˌɪn.təˈmiː.di.ət/", meaning: "trình độ trung cấp (B1)", example: "She is studying at an intermediate level." },
        { word: "advanced", type: "adj", phonetic: "/ədˈvɑːnst/", meaning: "trình độ nâng cao (B2-C1)", example: "Advanced learners can take the exam next week." },
        { word: "subject", type: "n", phonetic: "/ˈsʌb.dʒɪkt/", meaning: "môn học, chủ đề", example: "What is your favorite subject at university?" }
      ]
    }
  ],

  // 4. MẸO & CHIẾN THUẬT VƯỢT BẪY ĐỀ THI
  tactics: {
    listening: [
      {
        part: "Part 1 (5 đoạn thông báo ngắn)",
        tip: "Người nói hay nhắc cả 2 hoặc 3 phương án A, B, C trong bài nghe. Tuy nhiên sẽ có từ đổi ý như: 'Actually, I prefer...', 'No, that was yesterday, today we...'. Đừng khoanh vội từ đầu tiên bạn nghe thấy!"
      },
      {
        part: "Part 2 (Hội thoại dài hơn)",
        tip: "Hãy đọc trước các câu hỏi và gạch chân từ khóa trong 30 giây chuẩn bị. Chú ý các từ chỉ thời gian, địa điểm và sở thích cá nhân."
      },
      {
        part: "Part 3 & 5 (Điền từ vào phiếu)",
        tip: "100% các từ cần điền đều xuất hiện trực tiếp trong bài nghe. Nếu là số điện thoại hoặc tên riêng, hãy viết ngay ra nháp khi người nói đánh vần (Spell). Chú ý đuôi -teen (13-19) nhấn trọng âm, đuôi -ty (30-90) không nhấn."
      }
    ],
    reading: [
      {
        part: "Part 1 (Điền từ vào đoạn văn)",
        tip: "Nhìn từ đứng ngay trước và ngay sau chỗ trống để xác định từ loại (danh từ, động từ, giới từ). Chú ý các cụm từ đi cùng nhau (Collocations) như 'take photos', 'get along with', 'have in common'."
      },
      {
        part: "Part 2 (Nối biển báo A - K)",
        tip: "Gạch chân từ khóa của câu đề bài, sau đó tìm biển báo có TỪ ĐỒNG NGHĨA (Paraphrasing). Ví dụ: 'not expensive' = 'cheap/affordable', 'do not pay' = 'free', 'shut' = 'closed'."
      },
      {
        part: "Part 3 (Điền thông tin vào phiếu)",
        tip: "So sánh chéo giữa bài đọc (email / poster) với các ô trống trong phiếu. Nhớ kiểm tra kỹ tên riêng viết hoa chữ cái đầu và số tiền đã có sẵn ký hiệu £ hay chưa."
      },
      {
        part: "Part 4 (Đọc hiểu chọn A, B, C)",
        tip: "Đọc câu hỏi trước để biết cần tìm thông tin gì, sau đó đọc lướt (scan) bài đọc để tìm đoạn văn liên quan. Cẩn thận với các câu hỏi có từ phủ định 'NOT', 'NEVER'."
      }
    ]
  }
};
