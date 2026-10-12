// EXAM_DATABASE - Bộ đề thi tiếng Anh (Phenikaa Practice Tests)
const EXAM_DATABASE = [
  {
    "id": "test_a2_core",
    "exam_num": 101,
    "skill": "mixed",
    "skill_vn": "Tổng Hợp A2 (Nghe & Đọc)",
    "title": "Bộ Đề Chắt Lọc A2 - Cốt Lõi Qua Môn (20 Câu)",
    "duration_minutes": 20,
    "total_questions": 20,
    "total_pts": 10,
    "difficulty": "easy",
    "level_code": "A2",
    "level_title": "Cấp Độ: Dễ (Chuẩn A2 Cơ Bản)",
    "difficulty_badge": "🟢 Dễ (A2)",
    "target_desc": "Mục tiêu: Đạt ≥ 13/20 câu (5.0+ điểm). Chắt lọc 20 câu hỏi cốt lõi, cơ bản và dễ lấy điểm nhất để tự tin qua môn A2!",
    "questions": [
      {
        "id": "a2_core_l_1",
        "number": 1,
        "part": "Part 1 - Nghe",
        "part_title": "🎧 Phần 1: Nghe 5 Thông Báo Đời Sống",
        "part_instruction": "Nghe 5 thông báo/lời dặn hằng ngày. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part1_de1_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "1. Who makes the phone call?",
        "options": [
          "Ms. Proctor.",
          "Mr. Gale.",
          "Mr. Kale."
        ],
        "correct_answer": "Mr. Kale.",
        "explanation": {
          "msg": "Xác định người thực hiện cuộc gọi dựa vào lời xưng hô mở đầu.",
          "trans_q": "Ai là người gọi điện thoại?",
          "trans_opts": [
            "Ms. Proctor (Cô Proctor)",
            "Mr. Gale (Ông Gale)",
            "Mr. Kale (Ông Kale)"
          ],
          "clue": "Người gọi giới thiệu: 'Hello, this is Mr. Kale calling for Ms. Proctor...'",
          "why_right": "Người đàn ông tự xưng tên mình là 'Mr. Kale'.",
          "trap": "Người ta nhắc tới 'Ms. Proctor' nhưng đó là người nhận cuộc gọi, không phải người gọi đâu!",
          "vocab": [
            {
              "word": "make a phone call",
              "phonetic": "/meɪk ə fəʊn kɔːl/",
              "meaning": "gọi điện thoại"
            },
            {
              "word": "calling for",
              "phonetic": "/ˈkɔːlɪŋ fɔːr/",
              "meaning": "gọi điện để gặp ai"
            }
          ]
        }
      },
      {
        "id": "a2_core_l_2",
        "number": 2,
        "part": "Part 1 - Nghe",
        "part_title": "🎧 Phần 1: Nghe 5 Thông Báo Đời Sống",
        "part_instruction": "Nghe 5 thông báo/lời dặn hằng ngày. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part1_de1_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "2. When is the party at Bob’s house?",
        "options": [
          "On Monday.",
          "On Saturday.",
          "On Sunday."
        ],
        "correct_answer": "On Sunday.",
        "explanation": {
          "msg": "Chú ý các ngày trong tuần: người nói thường nhắc đến cả thứ Bảy và Chủ Nhật để gài bẫy.",
          "trans_q": "Bữa tiệc ở nhà Bob diễn ra khi nào?",
          "trans_opts": [
            "On Monday (Vào thứ Hai)",
            "On Saturday (Vào thứ Bảy)",
            "On Sunday (Vào Chủ Nhật)"
          ],
          "clue": "Đoạn băng nói: 'Bob is having a party at his house on Sunday evening...'",
          "why_right": "Bữa tiệc được tổ chức chính xác vào Chủ Nhật ('on Sunday').",
          "trap": "Có thể trong băng nhắc tới Saturday để dọn dẹp hoặc chuẩn bị, chú ý nghe kỹ từ 'party' đi liền với ngày nào!",
          "vocab": [
            {
              "word": "party",
              "phonetic": "/ˈpɑːti/",
              "meaning": "bữa tiệc"
            },
            {
              "word": "have a party",
              "phonetic": "/hæv ə ˈpɑːti/",
              "meaning": "tổ chức tiệc"
            }
          ]
        }
      },
      {
        "id": "a2_core_l_3",
        "number": 3,
        "part": "Part 1 - Nghe",
        "part_title": "🎧 Phần 1: Nghe 5 Thông Báo Đời Sống",
        "part_instruction": "Nghe 5 thông báo/lời dặn hằng ngày. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part1_de1_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "3. Who makes the phone call?",
        "options": [
          "David Pell.",
          "David Bell.",
          "David Dell."
        ],
        "correct_answer": "David Bell.",
        "explanation": {
          "msg": "Lưu ý phát âm các chữ cái dễ nhầm lẫn (P, B, D) khi đánh vần tên riêng.",
          "trans_q": "Ai là người gọi điện thoại?",
          "trans_opts": [
            "David Pell",
            "David Bell",
            "David Dell"
          ],
          "clue": "Người nói phát âm rõ âm /b/: 'My name is David Bell, B-E-double L...'",
          "why_right": "Họ đánh vần chữ cái 'B' (phát âm /biː/) trong Bell.",
          "trap": "Âm /p/ trong Pell sẽ bật hơi mạnh (pờ), còn /b/ trong Bell là âm rung môi. Chú ý nghe kỹ âm B!",
          "vocab": [
            {
              "word": "spell",
              "phonetic": "/spel/",
              "meaning": "đánh vần chữ cái"
            }
          ]
        }
      },
      {
        "id": "a2_core_l_4",
        "number": 4,
        "part": "Part 1 - Nghe",
        "part_title": "🎧 Phần 1: Nghe 5 Thông Báo Đời Sống",
        "part_instruction": "Nghe 5 thông báo/lời dặn hằng ngày. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part1_de1_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "4. At what time will Rita have an appointment with the doctor?",
        "options": [
          "2:14.",
          "2:40.",
          "4:20."
        ],
        "correct_answer": "2:40.",
        "explanation": {
          "msg": "Mẹo nghe giờ giấc: chú ý cấu trúc giờ kém [số phút] + to + [giờ tới].",
          "trans_q": "Rita có hẹn với bác sĩ lúc mấy giờ?",
          "trans_opts": [
            "2:14",
            "2:40 (3 giờ kém 20)",
            "4:20 (4 giờ 20)"
          ],
          "clue": "Người thông báo nói: 'Rita, your appointment with Dr. Brown is at twenty to three (2:40)...'",
          "why_right": "'Twenty to three' có nghĩa là 20 phút nữa đến 3 giờ, tức là 2 giờ 40 phút (2:40)!",
          "trap": "Rất nhiều bạn nghe thấy 'twenty' với 'three' hay bị nhầm sang 3:20 hoặc nhìn lướt thành 4:20. Công thức: [Số phút] + TO + [Giờ sau] = Giờ kém đó!",
          "vocab": [
            {
              "word": "appointment",
              "phonetic": "/əˈpɔɪntmənt/",
              "meaning": "cuộc hẹn (bác sĩ, công việc)"
            },
            {
              "word": "twenty to three",
              "phonetic": "/ˈtwenti tuː θriː/",
              "meaning": "3 giờ kém 20 (2:40)"
            }
          ]
        }
      },
      {
        "id": "a2_core_l_5",
        "number": 5,
        "part": "Part 1 - Nghe",
        "part_title": "🎧 Phần 1: Nghe 5 Thông Báo Đời Sống",
        "part_instruction": "Nghe 5 thông báo/lời dặn hằng ngày. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part1_de1_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "5. What is Mr Priest’s telephone number?",
        "options": [
          "421 7896.",
          "241 8796.",
          "421 8769."
        ],
        "correct_answer": "421 7896.",
        "explanation": {
          "msg": "Mẹo nghe số điện thoại: chuẩn bị sẵn nháp để ghi từng cụm số (3-4 số một lần).",
          "trans_q": "Số điện thoại của ông Priest là số nào?",
          "trans_opts": [
            "421 7896",
            "241 8796",
            "421 8769"
          ],
          "clue": "Băng đọc rõ: 'You can reach Mr Priest on four-two-one, seven-eight-nine-six.'",
          "why_right": "4-2-1 rồi đến 7-8-9-6 đúng y hệt phương án A.",
          "trap": "Các phương án B và C đảo vị trí giữa 421 thành 241, và 896 thành 769. Nghe từng cụm 3-4 số là chuẩn luôn!",
          "vocab": [
            {
              "word": "telephone number",
              "phonetic": "/ˈtelɪfəʊn ˈnʌmbər/",
              "meaning": "số điện thoại"
            }
          ]
        }
      },
      {
        "id": "a2_core_r_1",
        "number": 6,
        "part": "Part 2 - Điền Từ",
        "part_title": "📖 Phần 2: Đọc Điền Từ Cơ Bản (A2)",
        "part_instruction": "Chọn từ thích hợp nhất (A, B hoặc C) để hoàn thành câu/đoạn văn.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "1. Some people might ( 1 ) ……….. it is not a big thing...",
        "options": [
          "tell",
          "think",
          "wonder"
        ],
        "correct_answer": "think",
        "explanation": {
          "msg": "Chọn động từ phù hợp với ngữ cảnh chỉ nhận thức, suy nghĩ.",
          "trans_q": "Một số người có thể (1)... rằng đó chẳng phải là chuyện gì to tát...",
          "trans_opts": [
            "tell (kể, bảo)",
            "think (nghĩ rằng)",
            "wonder (băn khoăn, tự hỏi)"
          ],
          "clue": "Ngữ cảnh: Người ta 'nghĩ rằng' (think that) việc đi học xa nhà không có gì to tát.",
          "why_right": "Cấu trúc 'think (that) + mệnh đề': nghĩ rằng điều gì đó. 'Tell' phải có tân ngữ chỉ người (tell someone sth).",
          "trap": "'Tell' cần người nhận tin (ví dụ: tell me), còn 'wonder' là tự hỏi chuyện chưa biết.",
          "vocab": [
            {
              "word": "think",
              "phonetic": "/θɪŋk/",
              "meaning": "suy nghĩ, cho rằng"
            }
          ]
        }
      },
      {
        "id": "a2_core_r_2",
        "number": 7,
        "part": "Part 2 - Điền Từ",
        "part_title": "📖 Phần 2: Đọc Điền Từ Cơ Bản (A2)",
        "part_instruction": "Chọn từ thích hợp nhất (A, B hoặc C) để hoàn thành câu/đoạn văn.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "2. ...but it is the most ( 2 ) ……….. thing that I have ever had to do.",
        "options": [
          "difficult",
          "comfortable",
          "memorable"
        ],
        "correct_answer": "difficult",
        "explanation": {
          "msg": "Chú ý từ 'hated leaving my family' ở câu sau: rời xa gia đình là một trải nghiệm như thế nào?",
          "trans_q": "...nhưng đó là điều (2)... nhất mà tôi từng phải làm.",
          "trans_opts": [
            "difficult (khó khăn)",
            "comfortable (thoải mái, dễ chịu)",
            "memorable (đáng nhớ)"
          ],
          "clue": "Câu liền sau nói: 'I hated leaving my family' (Tôi ghét phải rời xa gia đình) -> chứng tỏ việc này rất KHÓ KHĂN đối với bạn ấy!",
          "why_right": "Difficult = khó khăn. Rời xa tổ ấm 18 năm là việc khó khăn nhất ('the most difficult thing').",
          "trap": "Rời xa người thân thì không thể là 'comfortable' (thoải mái) được đúng không nè!",
          "vocab": [
            {
              "word": "difficult",
              "phonetic": "/ˈdɪfɪkəlt/",
              "meaning": "khó khăn"
            },
            {
              "word": "leave",
              "phonetic": "/liːv/",
              "meaning": "rời bỏ, rời xa"
            }
          ]
        }
      },
      {
        "id": "a2_core_r_3",
        "number": 8,
        "part": "Part 2 - Điền Từ",
        "part_title": "📖 Phần 2: Đọc Điền Từ Cơ Bản (A2)",
        "part_instruction": "Chọn từ thích hợp nhất (A, B hoặc C) để hoàn thành câu/đoạn văn.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "3. ...happy to live in a new home and ( 3 ) ……….. out new things.",
        "options": [
          "try",
          "turn",
          "put"
        ],
        "correct_answer": "try",
        "explanation": {
          "msg": "Đây là cụm từ cố định (collocation) thường gặp trong tiếng Anh.",
          "trans_q": "...vui vẻ sống ở nơi ở mới và (3)... những điều mới mẻ.",
          "trans_opts": [
            "try (try out = thử nghiệm)",
            "turn (turn out = hóa ra)",
            "put (put out = dập tắt)"
          ],
          "clue": "Cụm 'try out new things' = thử nghiệm, trải nghiệm những điều mới.",
          "why_right": "Chỉ có 'try out' mới mang nghĩa là thử trải nghiệm điều mới mẻ.",
          "trap": "'Turn out' là hóa ra là, 'Put out' là dập lửa, không hợp nghĩa.",
          "vocab": [
            {
              "word": "try out",
              "phonetic": "/traɪ aʊt/",
              "meaning": "thử nghiệm, trải nghiệm cái mới"
            }
          ]
        }
      },
      {
        "id": "a2_core_r_4",
        "number": 9,
        "part": "Part 2 - Điền Từ",
        "part_title": "📖 Phần 2: Đọc Điền Từ Cơ Bản (A2)",
        "part_instruction": "Chọn từ thích hợp nhất (A, B hoặc C) để hoàn thành câu/đoạn văn.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "4. ...live away from all my family and friends, but I am still ( 4 ) ………..",
        "options": [
          "proud",
          "confident",
          "scared"
        ],
        "correct_answer": "scared",
        "explanation": {
          "msg": "Có từ nối 'BUT' (nhưng) thể hiện sự tương phản cảm xúc!",
          "trans_q": "...tôi nghĩ mình có thể sống xa gia đình bạn bè, nhưng tôi vẫn thấy (4)...",
          "trans_opts": [
            "proud (tự hào)",
            "confident (tự tin)",
            "scared (lo sợ, sợ hãi)"
          ],
          "clue": "Vế trước: 'I think I can do it' (nghĩ là làm được), vế sau: 'BUT I am still scared' (nhưng vẫn thấy sợ).",
          "why_right": "'Scared' thể hiện cảm xúc lo sợ khi phải sống tự lập một mình ở nơi xa lạ.",
          "trap": "Vì có chữ 'BUT' nên không thể chọn từ tích cực như 'confident' hay 'proud' được.",
          "vocab": [
            {
              "word": "scared",
              "phonetic": "/skeəd/",
              "meaning": "lo sợ, hoảng sợ"
            }
          ]
        }
      },
      {
        "id": "a2_core_r_5",
        "number": 10,
        "part": "Part 2 - Điền Từ",
        "part_title": "📖 Phần 2: Đọc Điền Từ Cơ Bản (A2)",
        "part_instruction": "Chọn từ thích hợp nhất (A, B hoặc C) để hoàn thành câu/đoạn văn.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "5. I met the girl I am ( 5 ) ……….. my room with...",
        "options": [
          "living",
          "sharing",
          "having"
        ],
        "correct_answer": "sharing",
        "explanation": {
          "msg": "Ở chung phòng ký túc xá thì dùng từ gì nè?",
          "trans_q": "Tôi đã gặp bạn nữ mà tôi sẽ (5)... phòng cùng...",
          "trans_opts": [
            "living (sống)",
            "sharing (chia sẻ, ở chung)",
            "having (có)"
          ],
          "clue": "Cấu trúc: 'share something WITH someone' = chia sẻ / ở chung cái gì với ai.",
          "why_right": "'Share my room with' = ở chung phòng với ai. Nếu dùng 'live' thì phải là 'living with', không có 'my room'.",
          "trap": "Nhiều bạn quen miệng 'living with' nhưng ở đây có tân ngữ 'my room' nên bắt buộc phải dùng 'sharing my room with'!",
          "vocab": [
            {
              "word": "share a room with",
              "phonetic": "/ʃeər ə ruːm wɪð/",
              "meaning": "ở chung phòng với ai"
            }
          ]
        }
      },
      {
        "id": "a2_core_match_9",
        "number": 11,
        "part": "Part 3 - Biển Báo",
        "part_title": "🪧 Phần 3: Nhận Biết Biển Báo Hằng Ngày",
        "part_instruction": "Đọc câu mô tả và chọn chữ cái tương ứng với biển báo đúng (A - H).",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "9. You cannot travel by railway until tomorrow.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "D",
        "explanation": {
          "msg": "Để ý từ khóa 'cannot travel by railway' (không đi tàu hỏa được)!",
          "trans_q": "Bạn không thể di chuyển bằng đường sắt cho đến tận ngày mai.",
          "trans_opts": [],
          "clue": "Biển D ghi: 'NO TRAINS TODAY BECAUSE OF VERY HIGH WINDS' (Hôm nay không có chuyến tàu nào vì gió rất lớn).",
          "why_right": "No trains today = hôm nay không có tàu -> phải đợi đến mai mới đi được!",
          "trap": "Biển F là tàu bị trễ (delayed) chứ không phải hủy cả ngày như biển D.",
          "vocab": [
            {
              "word": "railway",
              "phonetic": "/ˈreɪlweɪ/",
              "meaning": "đường sắt, tàu hỏa"
            },
            {
              "word": "high winds",
              "phonetic": "/haɪ wɪndz/",
              "meaning": "gió lớn"
            }
          ]
        }
      },
      {
        "id": "a2_core_match_10",
        "number": 12,
        "part": "Part 3 - Biển Báo",
        "part_title": "🪧 Phần 3: Nhận Biết Biển Báo Hằng Ngày",
        "part_instruction": "Đọc câu mô tả và chọn chữ cái tương ứng với biển báo đúng (A - H).",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "10. Children and parents travel for less with this.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "C",
        "explanation": {
          "msg": "Bố mẹ và con cái đi lại rẻ hơn: Bố mẹ + con cái chính là GIA ĐÌNH (Family)!",
          "trans_q": "Trẻ em và cha mẹ đi lại với giá rẻ hơn nhờ cái này.",
          "trans_opts": [],
          "clue": "Biển C ghi: 'GET CHEAPER TICKET WITH A FAMILY RAILCARD' (Mua vé rẻ hơn với thẻ tàu gia đình).",
          "why_right": "Children and parents = Family; travel for less = cheaper ticket!",
          "trap": "Biển A là miễn phí cho trẻ em ở viện bảo tàng, nhưng câu này nói về việc đi lại (travel).",
          "vocab": [
            {
              "word": "travel for less",
              "phonetic": "/ˈtrævl fɔː les/",
              "meaning": "đi lại tốn ít tiền hơn / rẻ hơn"
            },
            {
              "word": "railcard",
              "phonetic": "/ˈreɪlkɑːd/",
              "meaning": "thẻ giảm giá tàu hỏa"
            }
          ]
        }
      },
      {
        "id": "a2_core_match_11",
        "number": 13,
        "part": "Part 3 - Biển Báo",
        "part_title": "🪧 Phần 3: Nhận Biết Biển Báo Hằng Ngày",
        "part_instruction": "Đọc câu mô tả và chọn chữ cái tương ứng với biển báo đúng (A - H).",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "11. You must pay before you travel on this.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "G",
        "explanation": {
          "msg": "Phải trả tiền (mua vé) trước khi lên tàu nha!",
          "trans_q": "Bạn phải trả tiền trước khi bạn đi trên phương tiện này.",
          "trans_opts": [],
          "clue": "Biển G ghi: 'DO NOT GET ON THE TRAIN WITHOUT A TICKET' (Không được lên tàu nếu không có vé).",
          "why_right": "Không được lên tàu nếu không có vé nghĩa là bắt buộc phải mua vé (pay) trước khi lên!",
          "trap": "Biển H ngược lại: phòng vé đóng cửa, lên tàu mới mua vé (buy your ticket on the train). Cẩn thận kẻo nhầm lẫn giữa G và H!",
          "vocab": [
            {
              "word": "without a ticket",
              "phonetic": "/wɪˈðaʊt ə ˈtɪkɪt/",
              "meaning": "không có vé"
            }
          ]
        }
      },
      {
        "id": "a2_core_match_12",
        "number": 14,
        "part": "Part 3 - Biển Báo",
        "part_title": "🪧 Phần 3: Nhận Biết Biển Báo Hằng Ngày",
        "part_instruction": "Đọc câu mô tả và chọn chữ cái tương ứng với biển báo đúng (A - H).",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "12. Only adults pay to go in here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "A",
        "explanation": {
          "msg": "Chỉ người lớn phải trả tiền, tức là trẻ em được MIỄN PHÍ!",
          "trans_q": "Chỉ người lớn mới phải trả tiền để vào đây.",
          "trans_opts": [],
          "clue": "Biển A ghi: 'MUSEUM OF TRAVEL AND TRANSPORT - Entrance free for children' (Miễn phí vé vào cho trẻ em).",
          "why_right": "Trẻ em miễn phí đồng nghĩa với việc chỉ có người lớn mới phải mua vé vào cửa.",
          "trap": "Biển C là giảm giá vé tàu cho cả nhà, không phải miễn phí vé vào cổng.",
          "vocab": [
            {
              "word": "adult",
              "phonetic": "/ˈædʌlt/",
              "meaning": "người lớn"
            },
            {
              "word": "entrance free",
              "phonetic": "/ˈentrəns friː/",
              "meaning": "vào cửa miễn phí"
            }
          ]
        }
      },
      {
        "id": "a2_core_match_13",
        "number": 15,
        "part": "Part 3 - Biển Báo",
        "part_title": "🪧 Phần 3: Nhận Biết Biển Báo Hằng Ngày",
        "part_instruction": "Đọc câu mô tả và chọn chữ cái tương ứng với biển báo đúng (A - H).",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "13. This is late because of bad weather.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "F",
        "explanation": {
          "msg": "Xác định thông tin về sự chậm trễ của chuyến tàu do ảnh hưởng thời tiết.",
          "trans_q": "Chuyến này bị muộn do thời tiết xấu.",
          "trans_opts": [],
          "clue": "Biển F ghi: '8:30 LONDON TRAIN delayed because of fog' (Chuyến tàu London lúc 8:30 bị hoãn/trễ do sương mù).",
          "why_right": "Delayed = late (bị trễ/muộn); fog (sương mù) = bad weather (thời tiết xấu)!",
          "trap": "Biển D là 'No trains' (hủy chuyến luôn), còn biển F là 'delayed' (chỉ bị trễ giờ thôi).",
          "vocab": [
            {
              "word": "delayed",
              "phonetic": "/dɪˈleɪd/",
              "meaning": "bị hoãn, bị muộn (late)"
            },
            {
              "word": "fog",
              "phonetic": "/fɒɡ/",
              "meaning": "sương mù dày đặc"
            }
          ]
        }
      },
      {
        "id": "a2_core_form_17",
        "number": 16,
        "part": "Part 4 - Điền Form",
        "part_title": "📝 Phần 4: Đọc Ghi Chú & Điền Biểu Mẫu",
        "part_instruction": "Đọc đoạn ghi chú và điền thông tin ngắn (1-2 từ hoặc số) vào phiếu.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "17. Name of guest speaker (Tên diễn giả khách mời):",
        "options": [],
        "correct_answer": "Ryan Maidstone",
        "explanation": {
          "msg": "Bẫy siêu to khổng lồ câu này nè đọc kỹ email nha!",
          "trans_q": "Tên của diễn giả khách mời là ai?",
          "trans_opts": [],
          "clue": "Tờ poster ghi Steve Smith, NHƯNG email của Tuấn bảo: 'Steve Smith can't come... Dr. Hai is sending Ryan Maidstone instead.'",
          "why_right": "Vì Steve Smith bận không đến được nên người đến thay là Ryan Maidstone!",
          "trap": "Nếu chỉ nhìn poster bên trái là sẽ bị chọn nhầm Steve Smith ngay. Luôn đọc kỹ email cập nhật để lấy thông tin mới nhất!",
          "vocab": [
            {
              "word": "guest speaker",
              "phonetic": "/ɡest ˈspiːkər/",
              "meaning": "diễn giả khách mời"
            },
            {
              "word": "instead",
              "phonetic": "/ɪnˈsted/",
              "meaning": "thay thế vào đó"
            }
          ]
        }
      },
      {
        "id": "a2_core_form_18",
        "number": 17,
        "part": "Part 4 - Điền Form",
        "part_title": "📝 Phần 4: Đọc Ghi Chú & Điền Biểu Mẫu",
        "part_instruction": "Đọc đoạn ghi chú và điền thông tin ngắn (1-2 từ hoặc số) vào phiếu.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "18. Collection time (Giờ đi đón diễn giả):",
        "options": [],
        "correct_answer": "7.30 p.m.",
        "explanation": {
          "msg": "Tính giờ đón khách nè: Buổi nói chuyện lúc 8.00 p.m., Tuấn bảo đón trước 30 phút!",
          "trans_q": "Thời gian đi đón là mấy giờ?",
          "trans_opts": [],
          "clue": "Poster ghi giờ bắt đầu: '8.00 p.m.'. Email Tuấn dặn: 'pick him up... thirty minutes before the start of the talk'.",
          "why_right": "8 giờ tối trừ đi 30 phút là 7 giờ 30 tối: 7.30 p.m. (hoặc 7:30 p.m. / 7.30 / 19:30).",
          "trap": "Không được điền 8.00 p.m. nha vì 8 giờ là giờ bắt đầu nói chuyện rồi!",
          "vocab": [
            {
              "word": "pick up / collect",
              "phonetic": "/pɪk ʌp/",
              "meaning": "đón (ai đó)"
            }
          ]
        }
      },
      {
        "id": "a2_core_form_19",
        "number": 18,
        "part": "Part 4 - Điền Form",
        "part_title": "📝 Phần 4: Đọc Ghi Chú & Điền Biểu Mẫu",
        "part_instruction": "Đọc đoạn ghi chú và điền thông tin ngắn (1-2 từ hoặc số) vào phiếu.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "19. Meeting place (Địa điểm đón / gặp nhau):",
        "options": [],
        "correct_answer": "train station",
        "explanation": {
          "msg": "Minh phải ra đâu để đón chú diễn giả nè?",
          "trans_q": "Địa điểm đón diễn giả ở đâu?",
          "trans_opts": [],
          "clue": "Email viết rõ: 'Can you pick him up at the train station...'",
          "why_right": "Đáp án: train station (hoặc the train station).",
          "trap": "Đừng nhầm với office nha, đón ở ga tàu xong mới dẫn về văn phòng.",
          "vocab": [
            {
              "word": "train station",
              "phonetic": "/treɪn ˈsteɪʃn/",
              "meaning": "ga xe lửa / ga tàu hỏa"
            }
          ]
        }
      },
      {
        "id": "a2_core_form_20",
        "number": 19,
        "part": "Part 4 - Điền Form",
        "part_title": "📝 Phần 4: Đọc Ghi Chú & Điền Biểu Mẫu",
        "part_instruction": "Đọc đoạn ghi chú và điền thông tin ngắn (1-2 từ hoặc số) vào phiếu.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "20. Take him to (Dẫn diễn giả đến đâu?):",
        "options": [],
        "correct_answer": "Tuan's office",
        "explanation": {
          "msg": "Đón xong thì đưa khách về đâu nè?",
          "trans_q": "Dẫn ông ấy tới đâu?",
          "trans_opts": [],
          "clue": "Tuấn dặn trong email: 'Bring him to my office.'",
          "why_right": "Vì Tuấn viết email dặn 'my office' nên trong sổ ghi chép của Minh sẽ là 'Tuan's office' (hoặc office / my office).",
          "trap": "Không dẫn thẳng vào hội trường English Club mà qua văn phòng trước.",
          "vocab": [
            {
              "word": "office",
              "phonetic": "/ˈɒfɪs/",
              "meaning": "văn phòng làm việc"
            }
          ]
        }
      },
      {
        "id": "a2_core_form_21",
        "number": 20,
        "part": "Part 4 - Điền Form",
        "part_title": "📝 Phần 4: Đọc Ghi Chú & Điền Biểu Mẫu",
        "part_instruction": "Đọc đoạn ghi chú và điền thông tin ngắn (1-2 từ hoặc số) vào phiếu.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "21. His phone number (Số điện thoại của diễn giả):",
        "options": [],
        "correct_answer": "0972 000 899",
        "explanation": {
          "msg": "Số điện thoại để Minh liên lạc nếu không thấy diễn giả ở ga tàu nè!",
          "trans_q": "Số điện thoại của Ryan là số nào?",
          "trans_opts": [],
          "clue": "Tuấn viết: 'If you can't find Ryan then, phone him at 0972 000 899.'",
          "why_right": "Điền chính xác số điện thoại: 0972 000 899 (hoặc 0972000899).",
          "trap": "Ghi đúng từng chữ số, kiểm tra lại cẩn thận nhé!",
          "vocab": []
        }
      }
    ]
  },
  {
    "id": "test_b1_challenge",
    "exam_num": 102,
    "skill": "mixed",
    "skill_vn": "Tổng Hợp B1 (Nghe & Đọc)",
    "title": "Bộ Đề Thử Thách B1 - Bứt Phá Đầu Ra (20 Câu)",
    "duration_minutes": 25,
    "total_questions": 20,
    "total_pts": 10,
    "difficulty": "hard",
    "level_code": "B1",
    "level_title": "Cấp Độ: Nâng Cao (Chuẩn B1 Thử Thách)",
    "difficulty_badge": "🔴 Khó (B1)",
    "target_desc": "Mục tiêu: Đạt ≥ 14/20 câu (7.0+ điểm). Chắt lọc 20 câu hỏi bẫy lắt léo và từ vựng nâng cao nhất để chinh phục chuẩn B1!",
    "questions": [
      {
        "id": "b1_chal_l_16",
        "number": 1,
        "part": "Part 1 - Nghe Bẫy B1",
        "part_title": "🎧 Phần 1: Nghe Bẫy Số Liệu & Đổi Ý (B1 Trap)",
        "part_instruction": "Nghe cuộc hội thoại về chuyến đi Mill Street. Cẩn thận các bẫy đổi giá vé và giờ giấc!",
        "type": "mcq",
        "audio": "audio/de2_part4_de2_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "16. The plane leaves at……",
        "options": [
          "12 a.m.",
          "2 p.m.",
          "3 p.m."
        ],
        "correct_answer": "2 p.m.",
        "explanation": {
          "msg": "Chuyến bay cất cánh lúc mấy giờ nè bạn?",
          "trans_q": "Máy bay khởi hành lúc mấy giờ?",
          "trans_opts": [
            "12 a.m. (12 giờ đêm)",
            "2 p.m. (2 giờ chiều)",
            "3 p.m. (3 giờ chiều)"
          ],
          "clue": "Nhân viên đại lý báo: 'The flight departs at 2 p.m. in the afternoon.'",
          "why_right": "Chuyến bay cất cánh vào lúc 2 giờ chiều ('2 p.m.').",
          "trap": "3 p.m. có thể là giờ hạ cánh hoặc một chuyến khác.",
          "vocab": [
            {
              "word": "plane leaves / departs",
              "phonetic": "/pleɪn liːvz/ /dɪˈpɑːts/",
              "meaning": "máy bay khởi hành, cất cánh"
            }
          ]
        }
      },
      {
        "id": "b1_chal_l_17",
        "number": 2,
        "part": "Part 1 - Nghe Bẫy B1",
        "part_title": "🎧 Phần 1: Nghe Bẫy Số Liệu & Đổi Ý (B1 Trap)",
        "part_instruction": "Nghe cuộc hội thoại về chuyến đi Mill Street. Cẩn thận các bẫy đổi giá vé và giờ giấc!",
        "type": "mcq",
        "audio": "audio/de2_part4_de2_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "17. The bus station is in……",
        "options": [
          "Bill Street.",
          "Hill Street.",
          "Mill Street."
        ],
        "correct_answer": "Mill Street.",
        "explanation": {
          "msg": "Xác định tên con đường nơi có trạm dừng xe buýt.",
          "trans_q": "Bến xe buýt nằm trên đường nào?",
          "trans_opts": [
            "Đường Bill",
            "Đường Hill",
            "Đường Mill"
          ],
          "clue": "Nhân viên hướng dẫn: 'The bus station is on Mill Street, M-I-double L.'",
          "why_right": "Mill Street (chữ cái M đứng đầu).",
          "trap": "Bill, Hill, Mill phát âm có vần 'ill' giống nhau, nghe kỹ phụ âm đầu /m/ (bặm môi mở ra) nhé!",
          "vocab": [
            {
              "word": "bus station",
              "phonetic": "/bʌs ˈsteɪʃn/",
              "meaning": "bến xe buýt"
            }
          ]
        }
      },
      {
        "id": "b1_chal_l_18",
        "number": 3,
        "part": "Part 1 - Nghe Bẫy B1",
        "part_title": "🎧 Phần 1: Nghe Bẫy Số Liệu & Đổi Ý (B1 Trap)",
        "part_instruction": "Nghe cuộc hội thoại về chuyến đi Mill Street. Cẩn thận các bẫy đổi giá vé và giờ giấc!",
        "type": "mcq",
        "audio": "audio/de2_part4_de2_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "18. The journey to the airport takes……",
        "options": [
          "1 hour 15 minutes.",
          "1 hour 30 minutes.",
          "1 hour 45 minutes."
        ],
        "correct_answer": "1 hour 30 minutes.",
        "explanation": {
          "msg": "Thời gian đi xe buýt ra sân bay mất bao lâu nè?",
          "trans_q": "Hành trình ra sân bay mất bao lâu?",
          "trans_opts": [
            "1 tiếng 15 phút",
            "1 tiếng 30 phút",
            "1 tiếng 45 phút"
          ],
          "clue": "'The coach ride to the airport takes about an hour and a half (1 hour 30 minutes).'",
          "why_right": "'An hour and a half' = 1 tiếng rưỡi = 1 hour 30 minutes!",
          "trap": "Nghe thấy 'half' là biết 30 phút rồi đó bạn!",
          "vocab": [
            {
              "word": "an hour and a half",
              "phonetic": "/ən ˈaʊər ənd ə hɑːf/",
              "meaning": "một tiếng rưỡi (90 phút)"
            }
          ]
        }
      },
      {
        "id": "b1_chal_l_19",
        "number": 4,
        "part": "Part 1 - Nghe Bẫy B1",
        "part_title": "🎧 Phần 1: Nghe Bẫy Số Liệu & Đổi Ý (B1 Trap)",
        "part_instruction": "Nghe cuộc hội thoại về chuyến đi Mill Street. Cẩn thận các bẫy đổi giá vé và giờ giấc!",
        "type": "mcq",
        "audio": "audio/de2_part4_de2_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "19. The man’s ticket to Buenos Aires will cost……",
        "options": [
          "£240.",
          "£300.",
          "£320."
        ],
        "correct_answer": "£240.",
        "explanation": {
          "msg": "Giá vé máy bay sau khi có thẻ sinh viên!",
          "trans_q": "Vé máy bay của người đàn ông có giá bao nhiêu?",
          "trans_opts": [
            "£240",
            "£300",
            "£320"
          ],
          "clue": "Nhân viên: 'The normal fare is 300 pounds, but with your student card it's only 240 pounds.'",
          "why_right": "Anh ấy có thẻ sinh viên nên giá vé thực trả là £240.",
          "trap": "300 bảng là giá vé người bình thường (normal fare), anh ấy được giảm giá sinh viên!",
          "vocab": [
            {
              "word": "fare / ticket",
              "phonetic": "/feər/ /ˈtɪkɪt/",
              "meaning": "tiền vé / vé"
            }
          ]
        }
      },
      {
        "id": "b1_chal_l_20",
        "number": 5,
        "part": "Part 1 - Nghe Bẫy B1",
        "part_title": "🎧 Phần 1: Nghe Bẫy Số Liệu & Đổi Ý (B1 Trap)",
        "part_instruction": "Nghe cuộc hội thoại về chuyến đi Mill Street. Cẩn thận các bẫy đổi giá vé và giờ giấc!",
        "type": "mcq",
        "audio": "audio/de2_part4_de2_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "20. The coach costs……",
        "options": [
          "£13.50.",
          "£14.50.",
          "£30.50."
        ],
        "correct_answer": "£13.50.",
        "explanation": {
          "msg": "Tiền vé xe khách ra sân bay nè bạn!",
          "trans_q": "Vé xe khách giá bao nhiêu?",
          "trans_opts": [
            "£13.50",
            "£14.50",
            "£30.50"
          ],
          "clue": "'A return coach ticket to the airport is thirteen pounds fifty (£13.50).'",
          "why_right": "Thirteen pounds fifty = £13.50.",
          "trap": "Thirteen (13) chứ không phải Thirty (30) nhé!",
          "vocab": [
            {
              "word": "coach costs",
              "phonetic": "/kəʊtʃ kɒsts/",
              "meaning": "giá vé xe khách"
            }
          ]
        }
      },
      {
        "id": "b1_chal_r_1",
        "number": 6,
        "part": "Part 2 - Điền Từ Everest",
        "part_title": "🏔️ Phần 2: Đọc Điền Từ Học Thuật (Everest)",
        "part_instruction": "Điền từ vựng học thuật thích hợp vào đoạn văn về đỉnh Everest.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "1. ...climb the world’s ( 1 )………… mountains or walk across continents.",
        "options": [
          "tallest",
          "highest",
          "shortest"
        ],
        "correct_answer": "highest",
        "explanation": {
          "msg": "Nói về độ cao của ngọn núi thì người ta dùng từ gì nè?",
          "trans_q": "...leo lên những ngọn núi (1)... nhất thế giới hoặc đi bộ qua các lục địa.",
          "trans_opts": [
            "tallest (cao - hay dùng cho người/tòa nhà)",
            "highest (cao nhất - chuyên dùng cho núi non)",
            "shortest (thấp nhất)"
          ],
          "clue": "Đang nói về đỉnh Everest ('Mount Everest') - ngọn núi cao nhất thế giới.",
          "why_right": "Trong tiếng Anh địa lý, núi cao luôn đi với 'high / highest mountains'!",
          "trap": "'Tall' thường dùng cho chiều cao thẳng đứng của người, cái cây, cột cờ. Núi non hùng vĩ so với mực nước biển luôn dùng 'high'!",
          "vocab": [
            {
              "word": "highest mountains",
              "phonetic": "/ˈhaɪɪst ˈmaʊntɪnz/",
              "meaning": "những ngọn núi cao nhất"
            }
          ]
        }
      },
      {
        "id": "b1_chal_r_2",
        "number": 7,
        "part": "Part 2 - Điền Từ Everest",
        "part_title": "🏔️ Phần 2: Đọc Điền Từ Học Thuật (Everest)",
        "part_instruction": "Điền từ vựng học thuật thích hợp vào đoạn văn về đỉnh Everest.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "2. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.",
        "options": [
          "look",
          "see",
          "ride"
        ],
        "correct_answer": "look",
        "explanation": {
          "msg": "Cụm thành ngữ siêu quen thuộc: 'Take a look at' = Hãy cùng nhìn qua/xem qua!",
          "trans_q": "Hãy cùng (2)... qua một số nhà thám hiểm vĩ đại nhất của thế kỷ 21.",
          "trans_opts": [
            "look (take a look = nhìn qua, xem qua)",
            "see (thấy)",
            "ride (cưỡi xe/ngựa)"
          ],
          "clue": "Cấu trúc cố định: 'take a look AT something'!",
          "why_right": "Chỉ có danh từ 'look' mới kết hợp với 'take a... at'.",
          "trap": "Không bao giờ nói 'take a see' hay 'take a ride at' trong ngữ cảnh này.",
          "vocab": [
            {
              "word": "take a look at",
              "phonetic": "/teɪk ə lʊk æt/",
              "meaning": "nhìn vào, xem qua cái gì"
            }
          ]
        }
      },
      {
        "id": "b1_chal_r_3",
        "number": 8,
        "part": "Part 2 - Điền Từ Everest",
        "part_title": "🏔️ Phần 2: Đọc Điền Từ Học Thuật (Everest)",
        "part_instruction": "Điền từ vựng học thuật thích hợp vào đoạn văn về đỉnh Everest.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "3. His amazing journey ( 3 )…………. two years and four months.",
        "options": [
          "made",
          "spent",
          "took"
        ],
        "correct_answer": "took",
        "explanation": {
          "msg": "Chuyến đi 'kéo dài mất' bao nhiêu thời gian!",
          "trans_q": "Hành trình kỳ diệu của anh ấy đã (3)... 2 năm 4 tháng.",
          "trans_opts": [
            "made (làm ra)",
            "spent (dành - chủ ngữ phải là người)",
            "took (take time = mất bao nhiêu thời gian)"
          ],
          "clue": "Chủ ngữ là chuyến đi 'His amazing journey', tân ngữ là khoảng thời gian 'two years and four months'.",
          "why_right": "Cấu trúc: 'Something + TAKE + time' = Chuyến đi/công việc tiêu tốn/kéo dài mất bao nhiêu thời gian. Quá khứ của take là 'took'!",
          "trap": "'Spend' chỉ dùng khi chủ ngữ là người (ví dụ: Ed spent 2 years...); còn chủ ngữ là chuyến đi thì bắt buộc dùng 'took'!",
          "vocab": [
            {
              "word": "journey took ... time",
              "phonetic": "/ˈdʒɜːni tʊk/",
              "meaning": "chuyến đi kéo dài mất bao lâu"
            }
          ]
        }
      },
      {
        "id": "b1_chal_r_4",
        "number": 9,
        "part": "Part 2 - Điền Từ Everest",
        "part_title": "🏔️ Phần 2: Đọc Điền Từ Học Thuật (Everest)",
        "part_instruction": "Điền từ vựng học thuật thích hợp vào đoạn văn về đỉnh Everest.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "4. ...like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes.",
        "options": [
          "lucky",
          "unlucky",
          "happy"
        ],
        "correct_answer": "lucky",
        "explanation": {
          "msg": "Gặp bao nhiêu rắn và cá sấu ăn thịt nhưng chỉ bị kiến cắn thì quá may mắn đúng không!",
          "trans_q": "...như rắn và cá sấu, nhưng Ed đã rất (4)...; anh ấy chỉ bị kiến và muỗi đốt.",
          "trans_opts": [
            "lucky (may mắn)",
            "unlucky (xui xẻo)",
            "happy (vui vẻ)"
          ],
          "clue": "Rừng nhiệt đới đầy thú dữ ăn thịt, nhưng Ed chỉ bị muỗi cắn qua loa -> Ed quá MAY MẮN ('lucky')!",
          "why_right": "Lucky = may mắn thoát khỏi hiểm nguy.",
          "trap": "Không hề xui xẻo vì không bị cá sấu hay rắn độc tấn công.",
          "vocab": [
            {
              "word": "lucky",
              "phonetic": "/ˈlʌki/",
              "meaning": "may mắn"
            },
            {
              "word": "crocodile",
              "phonetic": "/ˈkrɒkədaɪl/",
              "meaning": "con cá sấu"
            }
          ]
        }
      },
      {
        "id": "b1_chal_r_5",
        "number": 10,
        "part": "Part 2 - Điền Từ Everest",
        "part_title": "🏔️ Phần 2: Đọc Điền Từ Học Thuật (Everest)",
        "part_instruction": "Điền từ vựng học thuật thích hợp vào đoạn văn về đỉnh Everest.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "5. ...find fruit and nuts or ( 5 )………… fish each morning.",
        "options": [
          "bring",
          "catch",
          "hold"
        ],
        "correct_answer": "catch",
        "explanation": {
          "msg": "Đi bắt cá ở sông Amazon nè bạn!",
          "trans_q": "...tìm hoa quả, hạt hoặc (5)... cá vào mỗi buổi sáng.",
          "trans_opts": [
            "bring (mang theo)",
            "catch (bắt, câu cá)",
            "hold (cầm, nắm)"
          ],
          "clue": "Cụm từ cố định: 'catch fish' = bắt cá, câu cá để làm thức ăn sinh tồn.",
          "why_right": "Catch fish là cụm từ chuẩn xác nhất chỉ việc đánh bắt cá.",
          "trap": "Trong rừng hoang dã thì phải tự bắt cá (catch) chứ không có sẵn mà đem theo (bring).",
          "vocab": [
            {
              "word": "catch fish",
              "phonetic": "/kætʃ fɪʃ/",
              "meaning": "bắt cá, câu cá"
            }
          ]
        }
      },
      {
        "id": "b1_chal_match_9",
        "number": 11,
        "part": "Part 3 - Biển Báo B1",
        "part_title": "🪧 Phần 3: Nối Biển Báo & Quy Định Công Cộng",
        "part_instruction": "Ghép câu thông báo với biển báo quy định công cộng tương ứng (A - K).",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "9. Not all drivers can stop here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "D",
        "explanation": {
          "msg": "Không phải tài xế nào cũng được đỗ xe ở đây nè!",
          "trans_q": "Không phải tài xế nào cũng có thể dừng/đỗ xe ở đây.",
          "trans_opts": [],
          "clue": "Biển D ghi: 'PARKING FOR POLICE CARS ONLY' (Chỉ đỗ xe dành riêng cho xe cảnh sát).",
          "why_right": "Chỉ xe cảnh sát mới được đỗ, nghĩa là các tài xế khác (not all drivers) không được dừng đỗ ở đây!",
          "trap": "Biển D chỉ cho phép cảnh sát.",
          "vocab": [
            {
              "word": "police car",
              "phonetic": "/pəˈliːs kɑːr/",
              "meaning": "xe ô tô của cảnh sát"
            },
            {
              "word": "parking",
              "phonetic": "/ˈpɑːkɪŋ/",
              "meaning": "bãi đỗ xe"
            }
          ]
        }
      },
      {
        "id": "b1_chal_match_10",
        "number": 12,
        "part": "Part 3 - Biển Báo B1",
        "part_title": "🪧 Phần 3: Nối Biển Báo & Quy Định Công Cộng",
        "part_instruction": "Ghép câu thông báo với biển báo quy định công cộng tương ứng (A - K).",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "10. Children cannot come here in the evening.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "A",
        "explanation": {
          "msg": "Bể bơi buổi tối chỉ dành riêng cho người lớn!",
          "trans_q": "Trẻ em không thể đến đây vào buổi tối.",
          "trans_opts": [],
          "clue": "Biển A ghi: 'SWIMMING POOL - ADULTS ONLY 6-8 p.m' (Bể bơi - Chỉ dành cho người lớn từ 6h đến 8h tối).",
          "why_right": "Khung 6-8h tối là buổi tối (in the evening), chỉ người lớn (adults only) -> Trẻ em không được vào (children cannot come)!",
          "trap": "Biển E là Lâu đài miễn phí cho trẻ em, không cấm buổi tối.",
          "vocab": [
            {
              "word": "adults only",
              "phonetic": "/əˈdʌlts ˈəʊnli/",
              "meaning": "chỉ dành riêng cho người lớn"
            },
            {
              "word": "swimming pool",
              "phonetic": "/ˈswɪmɪŋ puːl/",
              "meaning": "bể bơi, hồ bơi"
            }
          ]
        }
      },
      {
        "id": "b1_chal_match_11",
        "number": 13,
        "part": "Part 3 - Biển Báo B1",
        "part_title": "🪧 Phần 3: Nối Biển Báo & Quy Định Công Cộng",
        "part_instruction": "Ghép câu thông báo với biển báo quy định công cộng tương ứng (A - K).",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "11. Drivers must be careful.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "C",
        "explanation": {
          "msg": "Biển cảnh báo nguy hiểm trên đường đi!",
          "trans_q": "Các tài xế lái xe phải hết sức cẩn thận.",
          "trans_opts": [],
          "clue": "Biển C ghi: 'DANGER! No Traffic Lights Ahead' (NGUY HIỂM! Phía trước không có đèn giao thông).",
          "why_right": "Danger = nguy hiểm -> Bắt buộc tài xế phải chú ý cẩn thận (must be careful)!",
          "trap": "Cứ thấy chữ DANGER to đùng là biết cần phải cẩn thận rồi nhé!",
          "vocab": [
            {
              "word": "danger",
              "phonetic": "/ˈdeɪndʒər/",
              "meaning": "nguy hiểm"
            },
            {
              "word": "traffic lights",
              "phonetic": "/ˈtræfɪk laɪts/",
              "meaning": "cột đèn giao thông"
            }
          ]
        }
      },
      {
        "id": "b1_chal_match_12",
        "number": 14,
        "part": "Part 3 - Biển Báo B1",
        "part_title": "🪧 Phần 3: Nối Biển Báo & Quy Định Công Cộng",
        "part_instruction": "Ghép câu thông báo với biển báo quy định công cộng tương ứng (A - K).",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "12. Not everyone can make a call from here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "B",
        "explanation": {
          "msg": "Điện thoại này chỉ dành riêng cho khách hàng của quán nè!",
          "trans_q": "Không phải ai cũng có thể gọi điện từ nơi này.",
          "trans_opts": [],
          "clue": "Biển B ghi: 'TELEPHONE for customers' use only' (Điện thoại chỉ dành riêng cho khách hàng sử dụng).",
          "why_right": "Chỉ khách mua hàng (customers) mới được dùng -> Người ngoài không được dùng (not everyone can make a call)!",
          "trap": "Make a call = gọi điện thoại.",
          "vocab": [
            {
              "word": "customer",
              "phonetic": "/ˈkʌstəmər/",
              "meaning": "khách hàng"
            },
            {
              "word": "make a call",
              "phonetic": "/meɪk ə kɔːl/",
              "meaning": "gọi điện thoại"
            }
          ]
        }
      },
      {
        "id": "b1_chal_match_13",
        "number": 15,
        "part": "Part 3 - Biển Báo B1",
        "part_title": "🪧 Phần 3: Nối Biển Báo & Quy Định Công Cộng",
        "part_instruction": "Ghép câu thông báo với biển báo quy định công cộng tương ứng (A - K).",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "13. Only adults have to pay here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "E",
        "explanation": {
          "msg": "Chỉ người lớn phải trả tiền vé, tức là trẻ em được MIỄN PHÍ nè!",
          "trans_q": "Chỉ người lớn mới phải trả tiền ở đây.",
          "trans_opts": [],
          "clue": "Biển E ghi: 'LEEDS CASTLE - FREE FOR CHILDREN' (Lâu đài Leeds - Miễn phí cho trẻ em).",
          "why_right": "Trẻ em được miễn phí vé (free for children) đồng nghĩa với việc chỉ người lớn mới phải mua vé!",
          "trap": "Biển K là giảm nửa giá (half price), chứ không phải miễn phí hoàn toàn.",
          "vocab": [
            {
              "word": "castle",
              "phonetic": "/ˈkɑːsl/",
              "meaning": "lâu đài (âm t câm nha)"
            },
            {
              "word": "free",
              "phonetic": "/friː/",
              "meaning": "miễn phí, không mất tiền"
            }
          ]
        }
      },
      {
        "id": "b1_chal_read_24",
        "number": 16,
        "part": "Part 4 - Đọc Hiểu Dany",
        "part_title": "🚒 Phần 4: Đọc Hiểu Chuyên Sâu (Nữ Cứu Hỏa Dany)",
        "part_instruction": "Đọc bài báo dài về công việc cứu hỏa của Dany và trả lời 5 câu hỏi suy luận.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "People who think firefighting is a job for men would be surprised to learn that there are now over 230 women in the London Fire Brigade...",
        "question": "24. Dany has worked for the fire service",
        "options": [
          "for nearly twenty years.",
          "for more than twenty years.",
          "since she was twenty-two years old."
        ],
        "correct_answer": "for more than twenty years.",
        "explanation": {
          "msg": "Số năm cống hiến cho ngành cứu hỏa của Dany!",
          "trans_q": "Dany đã làm việc cho sở cứu hỏa được bao lâu?",
          "trans_opts": [
            "gần 20 năm",
            "hơn 20 năm (for more than twenty years)",
            "từ khi cô ấy 22 tuổi"
          ],
          "clue": "Đoạn 1 ghi rõ: '...who has been with the fire service for OVER 22 YEARS.'",
          "why_right": "22 năm chính là nhiều hơn 20 năm ('over 22 years' = more than twenty years)!",
          "trap": "Số 22 là số năm làm việc chứ không phải tuổi của cô ấy, đừng nhầm sang 'twenty-two years old' nha!",
          "vocab": [
            {
              "word": "firefighter",
              "phonetic": "/ˈfaɪəfaɪtər/",
              "meaning": "lính cứu hỏa"
            },
            {
              "word": "fire service",
              "phonetic": "/ˈfaɪə sɜːvɪs/",
              "meaning": "ngành / lực lượng cứu hỏa"
            }
          ]
        }
      },
      {
        "id": "b1_chal_read_25",
        "number": 17,
        "part": "Part 4 - Đọc Hiểu Dany",
        "part_title": "🚒 Phần 4: Đọc Hiểu Chuyên Sâu (Nữ Cứu Hỏa Dany)",
        "part_instruction": "Đọc bài báo dài về công việc cứu hỏa của Dany và trả lời 5 câu hỏi suy luận.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "People who think firefighting is a job for men would be surprised to learn that there are now over 230 women in the London Fire Brigade...",
        "question": "25. Dany worked on a campaign to",
        "options": [
          "encourage girls to train to become firefighters.",
          "explain the training and assessment needs for firefighters.",
          "advise girls at secondary school to keep fit and stay healthy."
        ],
        "correct_answer": "encourage girls to train to become firefighters.",
        "explanation": {
          "msg": "Chiến dịch mà Dany tham gia nhằm mục đích gì?",
          "trans_q": "Dany đã tham gia vào một chiến dịch để:",
          "trans_opts": [
            "khuyến khích các bạn nữ rèn luyện để trở thành lính cứu hỏa",
            "giải thích nhu cầu đào tạo và đánh giá cho lính cứu hỏa",
            "khuyên các nữ sinh trung học giữ gìn vóc dáng và sức khỏe"
          ],
          "clue": "Đoạn 1: 'She took part in a national campaign promoting firefighting as a career for girls in secondary schools.'",
          "why_right": "Promoting firefighting as a career = khuyến khích các bạn nữ theo đuổi nghề lính cứu hỏa (encourage girls to become firefighters)!",
          "trap": "Khuyên tập thể dục chỉ là chi tiết phụ khi nói về tiêu chuẩn thể lực.",
          "vocab": [
            {
              "word": "campaign",
              "phonetic": "/kæmˈpeɪn/",
              "meaning": "chiến dịch"
            },
            {
              "word": "encourage",
              "phonetic": "/ɪnˈkʌrɪdʒ/",
              "meaning": "khuyến khích, động viên"
            }
          ]
        }
      },
      {
        "id": "b1_chal_read_26",
        "number": 18,
        "part": "Part 4 - Đọc Hiểu Dany",
        "part_title": "🚒 Phần 4: Đọc Hiểu Chuyên Sâu (Nữ Cứu Hỏa Dany)",
        "part_instruction": "Đọc bài báo dài về công việc cứu hỏa của Dany và trả lời 5 câu hỏi suy luận.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "People who think firefighting is a job for men would be surprised to learn that there are now over 230 women in the London Fire Brigade...",
        "question": "26. Male firefighters",
        "options": [
          "have the same training as female firefighters.",
          "often carry people down ladders in burning buildings.",
          "have to be taller than female firefighters."
        ],
        "correct_answer": "have the same training as female firefighters.",
        "explanation": {
          "msg": "Các nam lính cứu hỏa có gì giống với các nữ lính cứu hỏa nè?",
          "trans_q": "Các lính cứu hỏa nam:",
          "trans_opts": [
            "có cùng chương trình đào tạo như lính cứu hỏa nữ",
            "thường cõng người xuống thang trong các tòa nhà cháy",
            "phải cao hơn lính cứu hỏa nữ"
          ],
          "clue": "Đoạn 2: '...women do the SAME training and assessment as men and they are expected to do the same jobs.'",
          "why_right": "Cả nam và nữ đều trải qua cùng một chương trình huấn luyện và kiểm tra đánh giá ('same training as female firefighters').",
          "trap": "Đoạn văn ghi rõ 'height is not important' (chiều cao không quan trọng), nên phương án C sai.",
          "vocab": [
            {
              "word": "the same training",
              "phonetic": "/ðə seɪm ˈtreɪnɪŋ/",
              "meaning": "cùng một chương trình huấn luyện"
            }
          ]
        }
      },
      {
        "id": "b1_chal_read_27",
        "number": 19,
        "part": "Part 4 - Đọc Hiểu Dany",
        "part_title": "🚒 Phần 4: Đọc Hiểu Chuyên Sâu (Nữ Cứu Hỏa Dany)",
        "part_instruction": "Đọc bài báo dài về công việc cứu hỏa của Dany và trả lời 5 câu hỏi suy luận.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "People who think firefighting is a job for men would be surprised to learn that there are now over 230 women in the London Fire Brigade...",
        "question": "27. Dany has never",
        "options": [
          "seen a woman carry a man from a burning building.",
          "been trained to carry a man from a burning building.",
          "worked in a team to rescue people."
        ],
        "correct_answer": "seen a woman carry a man from a burning building.",
        "explanation": {
          "msg": "Dany CHƯA BAO GIỜ (never) chứng kiến cảnh tượng nào ngoài đời thực?",
          "trans_q": "Dany chưa bao giờ:",
          "trans_opts": [
            "nhìn thấy một phụ nữ cõng một người đàn ông ra khỏi tòa nhà cháy",
            "được huấn luyện để cõng người",
            "làm việc theo nhóm để giải cứu mọi người"
          ],
          "clue": "Đoạn 2: 'She says that in all her years of firefighting, she has NEVER SEEN anyone try this... she describes this as something we only see in films.'",
          "why_right": "Cô ấy chưa từng thấy ai cõng người từ trên thang xuống trong thực tế, cảnh đó chỉ có trên phim ảnh thôi!",
          "trap": "Cô ấy ĐÃ TỪNG được huấn luyện ('although she was trained to do it'), nhưng chưa từng thấy ngoài đời thật.",
          "vocab": [
            {
              "word": "rescue",
              "phonetic": "/ˈreskjuː/",
              "meaning": "giải cứu, cứu hộ"
            }
          ]
        }
      },
      {
        "id": "b1_chal_read_28",
        "number": 20,
        "part": "Part 4 - Đọc Hiểu Dany",
        "part_title": "🚒 Phần 4: Đọc Hiểu Chuyên Sâu (Nữ Cứu Hỏa Dany)",
        "part_instruction": "Đọc bài báo dài về công việc cứu hỏa của Dany và trả lời 5 câu hỏi suy luận.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "People who think firefighting is a job for men would be surprised to learn that there are now over 230 women in the London Fire Brigade...",
        "question": "28. Firefighters can save people’s lives by",
        "options": [
          "visiting houses.",
          "doing business.",
          "giving advice."
        ],
        "correct_answer": "giving advice.",
        "explanation": {
          "msg": "Lính cứu hỏa cứu sống tính mạng mọi người bằng cách nào trong cộng đồng nè?",
          "trans_q": "Lính cứu hỏa có thể cứu sống nhiều sinh mạng bằng cách:",
          "trans_opts": [
            "đến thăm các ngôi nhà",
            "làm kinh doanh",
            "đưa ra lời khuyên / tư vấn phòng cháy"
          ],
          "clue": "Đoạn 3: 'Fire officers visit homes, businesses and schools GIVING ADVICE that can often save lives.'",
          "why_right": "Họ đưa ra những lời khuyên hữu ích về an toàn phòng cháy chữa cháy để cứu người ('giving advice that can save lives').",
          "trap": "Họ đến nhà là để 'đưa ra lời khuyên' (giving advice), chính lời khuyên đó mới là thứ cứu sống tính mạng!",
          "vocab": [
            {
              "word": "give advice",
              "phonetic": "/ɡɪv ədˈvaɪs/",
              "meaning": "đưa ra lời khuyên, hướng dẫn"
            },
            {
              "word": "save lives",
              "phonetic": "/seɪv laɪvz/",
              "meaning": "cứu mạng người"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "de1_nghe",
    "exam_num": 1,
    "skill": "listening",
    "skill_vn": "Kỹ năng Nghe",
    "title": "Đề thi thử số 01 - Kỹ năng nghe",
    "duration_minutes": 25,
    "total_questions": 25,
    "total_pts": 25,
    "questions": [
      {
        "id": "de1_l_q1",
        "number": 1,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part1_de1_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "1. Who makes the phone call?",
        "options": [
          "Ms. Proctor.",
          "Mr. Gale.",
          "Mr. Kale."
        ],
        "correct_answer": "Mr. Kale.",
        "explanation": {
          "msg": "Xác định người thực hiện cuộc gọi dựa vào lời xưng hô mở đầu.",
          "trans_q": "Ai là người gọi điện thoại?",
          "trans_opts": [
            "Ms. Proctor (Cô Proctor)",
            "Mr. Gale (Ông Gale)",
            "Mr. Kale (Ông Kale)"
          ],
          "clue": "Người gọi giới thiệu: 'Hello, this is Mr. Kale calling for Ms. Proctor...'",
          "why_right": "Người đàn ông tự xưng tên mình là 'Mr. Kale'.",
          "trap": "Người ta nhắc tới 'Ms. Proctor' nhưng đó là người nhận cuộc gọi, không phải người gọi đâu!",
          "vocab": [
            {
              "word": "make a phone call",
              "phonetic": "/meɪk ə fəʊn kɔːl/",
              "meaning": "gọi điện thoại"
            },
            {
              "word": "calling for",
              "phonetic": "/ˈkɔːlɪŋ fɔːr/",
              "meaning": "gọi điện để gặp ai"
            }
          ]
        }
      },
      {
        "id": "de1_l_q2",
        "number": 2,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part1_de1_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "2. When is the party at Bob’s house?",
        "options": [
          "On Monday.",
          "On Saturday.",
          "On Sunday."
        ],
        "correct_answer": "On Sunday.",
        "explanation": {
          "msg": "Chú ý các ngày trong tuần: người nói thường nhắc đến cả thứ Bảy và Chủ Nhật để gài bẫy.",
          "trans_q": "Bữa tiệc ở nhà Bob diễn ra khi nào?",
          "trans_opts": [
            "On Monday (Vào thứ Hai)",
            "On Saturday (Vào thứ Bảy)",
            "On Sunday (Vào Chủ Nhật)"
          ],
          "clue": "Đoạn băng nói: 'Bob is having a party at his house on Sunday evening...'",
          "why_right": "Bữa tiệc được tổ chức chính xác vào Chủ Nhật ('on Sunday').",
          "trap": "Có thể trong băng nhắc tới Saturday để dọn dẹp hoặc chuẩn bị, chú ý nghe kỹ từ 'party' đi liền với ngày nào!",
          "vocab": [
            {
              "word": "party",
              "phonetic": "/ˈpɑːti/",
              "meaning": "bữa tiệc"
            },
            {
              "word": "have a party",
              "phonetic": "/hæv ə ˈpɑːti/",
              "meaning": "tổ chức tiệc"
            }
          ]
        }
      },
      {
        "id": "de1_l_q3",
        "number": 3,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part1_de1_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "3. Who makes the phone call?",
        "options": [
          "David Pell.",
          "David Bell.",
          "David Dell."
        ],
        "correct_answer": "David Bell.",
        "explanation": {
          "msg": "Lưu ý phát âm các chữ cái dễ nhầm lẫn (P, B, D) khi đánh vần tên riêng.",
          "trans_q": "Ai là người gọi điện thoại?",
          "trans_opts": [
            "David Pell",
            "David Bell",
            "David Dell"
          ],
          "clue": "Người nói phát âm rõ âm /b/: 'My name is David Bell, B-E-double L...'",
          "why_right": "Họ đánh vần chữ cái 'B' (phát âm /biː/) trong Bell.",
          "trap": "Âm /p/ trong Pell sẽ bật hơi mạnh (pờ), còn /b/ trong Bell là âm rung môi. Chú ý nghe kỹ âm B!",
          "vocab": [
            {
              "word": "spell",
              "phonetic": "/spel/",
              "meaning": "đánh vần chữ cái"
            }
          ]
        }
      },
      {
        "id": "de1_l_q4",
        "number": 4,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part1_de1_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "4. At what time will Rita have an appointment with the doctor?",
        "options": [
          "2:14.",
          "2:40.",
          "4:20."
        ],
        "correct_answer": "2:40.",
        "explanation": {
          "msg": "Mẹo nghe giờ giấc: chú ý cấu trúc giờ kém [số phút] + to + [giờ tới].",
          "trans_q": "Rita có hẹn với bác sĩ lúc mấy giờ?",
          "trans_opts": [
            "2:14",
            "2:40 (3 giờ kém 20)",
            "4:20 (4 giờ 20)"
          ],
          "clue": "Người thông báo nói: 'Rita, your appointment with Dr. Brown is at twenty to three (2:40)...'",
          "why_right": "'Twenty to three' có nghĩa là 20 phút nữa đến 3 giờ, tức là 2 giờ 40 phút (2:40)!",
          "trap": "Rất nhiều bạn nghe thấy 'twenty' với 'three' hay bị nhầm sang 3:20 hoặc nhìn lướt thành 4:20. Công thức: [Số phút] + TO + [Giờ sau] = Giờ kém đó!",
          "vocab": [
            {
              "word": "appointment",
              "phonetic": "/əˈpɔɪntmənt/",
              "meaning": "cuộc hẹn (bác sĩ, công việc)"
            },
            {
              "word": "twenty to three",
              "phonetic": "/ˈtwenti tuː θriː/",
              "meaning": "3 giờ kém 20 (2:40)"
            }
          ]
        }
      },
      {
        "id": "de1_l_q5",
        "number": 5,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part1_de1_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "5. What is Mr Priest’s telephone number?",
        "options": [
          "421 7896.",
          "241 8796.",
          "421 8769."
        ],
        "correct_answer": "421 7896.",
        "explanation": {
          "msg": "Mẹo nghe số điện thoại: chuẩn bị sẵn nháp để ghi từng cụm số (3-4 số một lần).",
          "trans_q": "Số điện thoại của ông Priest là số nào?",
          "trans_opts": [
            "421 7896",
            "241 8796",
            "421 8769"
          ],
          "clue": "Băng đọc rõ: 'You can reach Mr Priest on four-two-one, seven-eight-nine-six.'",
          "why_right": "4-2-1 rồi đến 7-8-9-6 đúng y hệt phương án A.",
          "trap": "Các phương án B và C đảo vị trí giữa 421 thành 241, và 896 thành 769. Nghe từng cụm 3-4 số là chuẩn luôn!",
          "vocab": [
            {
              "word": "telephone number",
              "phonetic": "/ˈtelɪfəʊn ˈnʌmbər/",
              "meaning": "số điện thoại"
            }
          ]
        }
      },
      {
        "id": "de1_l_q6",
        "number": 6,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part2_de1_audio_2.mp3",
        "image": "",
        "passage": "",
        "question": "6. What was the weather like when the holiday began?",
        "options": [
          "Rainy.",
          "Sunny.",
          "Cloudy."
        ],
        "correct_answer": "Rainy.",
        "explanation": {
          "msg": "Chú ý từ khóa 'when the holiday BEGAN' (thời điểm kỳ nghỉ bắt đầu, không phải lúc kết thúc).",
          "trans_q": "Thời tiết thế nào khi kỳ nghỉ bắt đầu?",
          "trans_opts": [
            "Rainy (Mưa)",
            "Sunny (Nắng)",
            "Cloudy (Nhiều mây)"
          ],
          "clue": "Nhân vật kể: 'It was rainy at first when we arrived, but then it got sunny later on.'",
          "why_right": "'At first / began' tương ứng với 'rainy' (trời mưa).",
          "trap": "Về sau trời nắng (sunny) nên nếu không để ý chữ 'began' là sẽ bị chọn nhầm sang Sunny ngay!",
          "vocab": [
            {
              "word": "holiday",
              "phonetic": "/ˈhɒlədeɪ/",
              "meaning": "kỳ nghỉ"
            },
            {
              "word": "at first / began",
              "phonetic": "/æt fɜːst/ /bɪˈɡæn/",
              "meaning": "lúc ban đầu, khi bắt đầu"
            }
          ]
        }
      },
      {
        "id": "de1_l_q7",
        "number": 7,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part2_de1_audio_2.mp3",
        "image": "",
        "passage": "",
        "question": "7. When did Gary start his new job?",
        "options": [
          "In March.",
          "In April.",
          "In May."
        ],
        "correct_answer": "In May.",
        "explanation": {
          "msg": "Câu hỏi về các tháng: March (tháng 3), April (tháng 4), May (tháng 5).",
          "trans_q": "Gary đã bắt đầu công việc mới khi nào?",
          "trans_opts": [
            "In March (Tháng Ba)",
            "In April (Tháng Tư)",
            "In May (Tháng Năm)"
          ],
          "clue": "Gary nói: 'I got the job offer in April, but I didn't actually start until May.'",
          "why_right": "Mặc dù nhận lời mời vào tháng 4 nhưng tháng 5 Gary mới chính thức bắt đầu đi làm ('start in May').",
          "trap": "Tháng 4 (April) là lúc phỏng vấn/nhận việc, không phải lúc bắt đầu làm việc. Đừng để bị lừa nha!",
          "vocab": [
            {
              "word": "start a job",
              "phonetic": "/stɑːt ə dʒɒb/",
              "meaning": "bắt đầu công việc mới"
            }
          ]
        }
      },
      {
        "id": "de1_l_q8",
        "number": 8,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part2_de1_audio_2.mp3",
        "image": "",
        "passage": "",
        "question": "8. What music will they have at the party?",
        "options": [
          "Guitar.",
          "Piano.",
          "CDs."
        ],
        "correct_answer": "CDs.",
        "explanation": {
          "msg": "Xác định loại đồ vật/phương tiện âm nhạc được chuẩn bị cho bữa tiệc.",
          "trans_q": "Họ sẽ phát nhạc gì ở bữa tiệc?",
          "trans_opts": [
            "Guitar (Đàn ghi-ta)",
            "Piano (Đàn dương cầm)",
            "CDs (Đĩa nhạc CD)"
          ],
          "clue": "'We wanted someone to play guitar or piano, but no one could come, so we decided to play CDs instead.'",
          "why_right": "Vì không có ai chơi guitar hay piano nên họ chốt nghe đĩa CD ('play CDs').",
          "trap": "Họ nhắc tới guitar và piano như dự định ban đầu nhưng đều bị hủy.",
          "vocab": [
            {
              "word": "instead",
              "phonetic": "/ɪnˈsted/",
              "meaning": "thay vào đó"
            }
          ]
        }
      },
      {
        "id": "de1_l_q9",
        "number": 9,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part2_de1_audio_2.mp3",
        "image": "",
        "passage": "",
        "question": "9. How much did John’s football shirt cost?",
        "options": [
          "£13.25.",
          "£30.25.",
          "£35.25."
        ],
        "correct_answer": "£13.25.",
        "explanation": {
          "msg": "Chú ý phân biệt đuôi số đếm: đuôi '-teen' (nhấn trọng âm) và đuôi '-ty' (trọng âm rơi vào âm tiết đầu).",
          "trans_q": "Chiếc áo bóng đá của John có giá bao nhiêu?",
          "trans_opts": [
            "£13.25 (13 bảng 25 xu)",
            "£30.25 (30 bảng 25 xu)",
            "£35.25 (35 bảng 25 xu)"
          ],
          "clue": "John khoe: 'It was on sale, only thirteen pounds twenty-five (£13.25)!'",
          "why_right": "John nói rõ ràng 'Thirteen' (13) chứ không phải Thirty (30).",
          "trap": "Thirteen /θɜːˈtiːn/ nhấn âm sau, còn Thirty /ˈθɜːti/ nhấn âm đầu. Khi nghe thấy đuôi 'teen' kéo dài là chọn 13!",
          "vocab": [
            {
              "word": "football shirt",
              "phonetic": "/ˈfʊtbɔːl ʃɜːt/",
              "meaning": "áo bóng đá"
            },
            {
              "word": "on sale",
              "phonetic": "/ɒn seɪl/",
              "meaning": "giảm giá"
            }
          ]
        }
      },
      {
        "id": "de1_l_q10",
        "number": 10,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part2_de1_audio_2.mp3",
        "image": "",
        "passage": "",
        "question": "10. What is the man buying for his lunch?",
        "options": [
          "Soup.",
          "Pizza.",
          "Egg."
        ],
        "correct_answer": "Pizza.",
        "explanation": {
          "msg": "Lắng nghe món ăn chính mà người nói quyết định lựa chọn.",
          "trans_q": "Người đàn ông mua món gì cho bữa trưa?",
          "trans_opts": [
            "Soup (Súp)",
            "Pizza (Bánh pizza)",
            "Egg (Trứng)"
          ],
          "clue": "Người đàn ông gọi món: 'I think I'll have the pizza, please.'",
          "why_right": "Món ăn được chốt mua là Pizza.",
          "trap": "Có thể người bán giới thiệu món súp hoặc trứng, nhưng anh ấy từ chối và chọn pizza.",
          "vocab": [
            {
              "word": "lunch",
              "phonetic": "/lʌntʃ/",
              "meaning": "bữa trưa"
            },
            {
              "word": "buy",
              "phonetic": "/baɪ/",
              "meaning": "mua"
            }
          ]
        }
      },
      {
        "id": "de1_l_q11",
        "number": 11,
        "part": "Part 3",
        "part_title": "Part 3: Điền biểu mẫu tin nhắn điện thoại",
        "part_instruction": "Nghe cuộc gọi thoại (cô gái tìm gặp Martin). Điền không quá 3 từ hoặc số vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de1_part3_de1_audio_3.mp3",
        "image": "",
        "passage": "<strong>MESSAGE</strong><br>From: [11] ....................<br>Party at: [12] ....................<br>Time: [13] .................... p.m.<br>Please bring: [14] ....................<br>Her phone number: [15] ....................",
        "question": "11. From (Người gửi tin nhắn):",
        "options": [],
        "correct_answer": "Elaine",
        "explanation": {
          "msg": "Lắng nghe cách đánh vần từng chữ cái của tên riêng.",
          "trans_q": "Tin nhắn từ ai?",
          "trans_opts": [],
          "clue": "Cô gái nói: 'My name is Elaine, E-L-A-I-N-E.'",
          "why_right": "Đáp án là tên riêng: Elaine.",
          "trap": "Nhớ viết hoa chữ cái đầu E!",
          "vocab": [
            {
              "word": "message",
              "phonetic": "/ˈmesɪdʒ/",
              "meaning": "tin nhắn"
            }
          ]
        }
      },
      {
        "id": "de1_l_q12",
        "number": 12,
        "part": "Part 3",
        "part_title": "Part 3: Điền biểu mẫu tin nhắn điện thoại",
        "part_instruction": "Nghe cuộc gọi thoại. Điền không quá 3 từ hoặc số vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de1_part3_de1_audio_3.mp3",
        "image": "",
        "passage": "<strong>MESSAGE</strong><br>From: [11] ....................<br>Party at: [12] ....................<br>Time: [13] .................... p.m.<br>Please bring: [14] ....................<br>Her phone number: [15] ....................",
        "question": "12. Party at (Địa điểm tổ chức tiệc):",
        "options": [],
        "correct_answer": "Grand Hotel",
        "explanation": {
          "msg": "Xác định chính xác tên khách sạn được nhắc tới.",
          "trans_q": "Bữa tiệc diễn ra ở đâu?",
          "trans_opts": [],
          "clue": "'The party is going to be at the Grand Hotel.'",
          "why_right": "Khách sạn Grand Hotel (chấp nhận: Grand Hotel hoặc the Grand Hotel).",
          "trap": "Nhớ viết đúng chính tả từ 'Grand' và 'Hotel' nha!",
          "vocab": [
            {
              "word": "hotel",
              "phonetic": "/həʊˈtel/",
              "meaning": "khách sạn (trọng âm âm 2 nha)"
            }
          ]
        }
      },
      {
        "id": "de1_l_q13",
        "number": 13,
        "part": "Part 3",
        "part_title": "Part 3: Điền biểu mẫu tin nhắn điện thoại",
        "part_instruction": "Nghe cuộc gọi thoại. Điền không quá 3 từ hoặc số vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de1_part3_de1_audio_3.mp3",
        "image": "",
        "passage": "<strong>MESSAGE</strong><br>From: [11] ....................<br>Party at: [12] ....................<br>Time: [13] .................... p.m.<br>Please bring: [14] ....................<br>Her phone number: [15] ....................",
        "question": "13. Time (Thời gian bắt đầu):",
        "options": [],
        "correct_answer": "8.30",
        "explanation": {
          "msg": "Xác định mốc thời gian buổi tối (lưu ý đề đã có sẵn p.m.).",
          "trans_q": "Mấy giờ tiệc bắt đầu?",
          "trans_opts": [],
          "clue": "'It starts at half past eight (8:30) in the evening.'",
          "why_right": "Điền: 8.30 hoặc 8:30 hoặc half past eight.",
          "trap": "Vì ngoài đề đã in sẵn chữ 'p.m.' nên chỗ trống chỉ cần điền '8.30' hoặc '8:30' là chuẩn nhất nhé!",
          "vocab": [
            {
              "word": "half past eight",
              "phonetic": "/hɑːf pɑːst eɪt/",
              "meaning": "8 giờ rưỡi (8:30)"
            }
          ]
        }
      },
      {
        "id": "de1_l_q14",
        "number": 14,
        "part": "Part 3",
        "part_title": "Part 3: Điền biểu mẫu tin nhắn điện thoại",
        "part_instruction": "Nghe cuộc gọi thoại. Điền không quá 3 từ hoặc số vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de1_part3_de1_audio_3.mp3",
        "image": "",
        "passage": "<strong>MESSAGE</strong><br>From: [11] ....................<br>Party at: [12] ....................<br>Time: [13] .................... p.m.<br>Please bring: [14] ....................<br>Her phone number: [15] ....................",
        "question": "14. Please bring (Xin hãy dẫn theo/mang theo):",
        "options": [],
        "correct_answer": "a friend",
        "explanation": {
          "msg": "Xác định đối tượng đi cùng tới dự tiệc.",
          "trans_q": "Cần mang theo hoặc dẫn theo ai/cái gì?",
          "trans_opts": [],
          "clue": "'Tell him he can bring a friend with him.'",
          "why_right": "Điền 'a friend' hoặc 'friend'.",
          "trap": "Nhiều bạn nghĩ đến đồ ăn hoặc quà, nhưng cô ấy bảo dẫn theo một người bạn ('bring a friend').",
          "vocab": [
            {
              "word": "bring",
              "phonetic": "/brɪŋ/",
              "meaning": "mang theo, dẫn theo"
            }
          ]
        }
      },
      {
        "id": "de1_l_q15",
        "number": 15,
        "part": "Part 3",
        "part_title": "Part 3: Điền biểu mẫu tin nhắn điện thoại",
        "part_instruction": "Nghe cuộc gọi thoại. Điền không quá 3 từ hoặc số vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de1_part3_de1_audio_3.mp3",
        "image": "",
        "passage": "<strong>MESSAGE</strong><br>From: [11] ....................<br>Party at: [12] ....................<br>Time: [13] .................... p.m.<br>Please bring: [14] ....................<br>Her phone number: [15] ....................",
        "question": "15. Her phone number (Số điện thoại của cô ấy):",
        "options": [],
        "correct_answer": "724 5936",
        "explanation": {
          "msg": "Ghi lại chính xác từng chữ số trong dãy số điện thoại.",
          "trans_q": "Số điện thoại của cô ấy là gì?",
          "trans_opts": [],
          "clue": "'My number is seven-two-four, five-nine-three-six.'",
          "why_right": "Đáp án: 724 5936 (hoặc 7245936).",
          "trap": "Nghe thật bình tĩnh, viết liền 7 số không dấu cách cũng được tính điểm.",
          "vocab": []
        }
      },
      {
        "id": "de1_l_q16",
        "number": 16,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài (Helen và Alex đi mua sắm)",
        "part_instruction": "Nghe đoạn hội thoại dài giữa Helen và Alex về việc đi mua sắm. Chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part4_de1_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "16. Alex has seen a nice, but expensive…",
        "options": [
          "skirt.",
          "dress.",
          "shirt."
        ],
        "correct_answer": "dress.",
        "explanation": {
          "msg": "Alex đi ngắm đồ đẹp nè, câu này hỏi bạn ấy đã nhìn thấy món gì đẹp mà đắt tiền?",
          "trans_q": "Alex đã nhìn thấy một chiếc... rất đẹp nhưng đắt tiền?",
          "trans_opts": [
            "skirt (chân váy)",
            "dress (váy liền thân)",
            "shirt (áo sơ mi)"
          ],
          "clue": "Alex than thở: 'I saw a lovely dress yesterday, but it was just too expensive.'",
          "why_right": "'dress' (chiếc váy) vừa đẹp (lovely = nice) vừa đắt (too expensive).",
          "trap": "Sau đó Alex bàn đến việc mua chân váy (skirt) rẻ hơn, nhưng món đồ 'đẹp mà đắt' ban đầu là chiếc 'dress'!",
          "vocab": [
            {
              "word": "dress",
              "phonetic": "/dres/",
              "meaning": "váy đầm liền thân"
            },
            {
              "word": "skirt",
              "phonetic": "/skɜːt/",
              "meaning": "chân váy"
            }
          ]
        }
      },
      {
        "id": "de1_l_q17",
        "number": 17,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài (Helen và Alex đi mua sắm)",
        "part_instruction": "Nghe Helen và Alex nói chuyện mua sắm. Chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part4_de1_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "17. What does Helen suggest Alex buy?",
        "options": [
          "trousers",
          "jeans",
          "T-shirt"
        ],
        "correct_answer": "trousers",
        "explanation": {
          "msg": "Xác định gợi ý của Helen dành cho Alex về trang phục.",
          "trans_q": "Helen gợi ý Alex mua món gì?",
          "trans_opts": [
            "trousers (quần tây/quần dài)",
            "jeans (quần bò)",
            "T-shirt (áo phông)"
          ],
          "clue": "Helen khuyên: 'Why don't you get some new trousers instead?'",
          "why_right": "Cụm từ gợi ý 'Why don't you get...' đi liền với 'trousers'.",
          "trap": "Alex từ chối vì đã có nhiều quần rồi, nhưng câu hỏi hỏi Helen 'gợi ý' cái gì nên vẫn là trousers!",
          "vocab": [
            {
              "word": "suggest",
              "phonetic": "/səˈdʒest/",
              "meaning": "gợi ý, đề xuất"
            },
            {
              "word": "trousers",
              "phonetic": "/ˈtraʊzəz/",
              "meaning": "quần dài"
            }
          ]
        }
      },
      {
        "id": "de1_l_q18",
        "number": 18,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài (Helen và Alex đi mua sắm)",
        "part_instruction": "Nghe Helen và Alex nói chuyện mua sắm. Chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part4_de1_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "18. How many skirts does Alex have?",
        "options": [
          "three",
          "two",
          "one"
        ],
        "correct_answer": "two",
        "explanation": {
          "msg": "Đếm số lượng chân váy trong tủ đồ của Alex nha!",
          "trans_q": "Alex hiện có bao nhiêu chiếc chân váy?",
          "trans_opts": [
            "three (3 chiếc)",
            "two (2 chiếc)",
            "one (1 chiếc)"
          ],
          "clue": "Alex giải thích: 'I've got lots of trousers, but I only have two skirts.'",
          "why_right": "Alex nói rõ 'I only have two skirts' (tớ chỉ có 2 chiếc chân váy thôi).",
          "trap": "Đừng nhầm với số lượng quần nha!",
          "vocab": [
            {
              "word": "only",
              "phonetic": "/ˈəʊnli/",
              "meaning": "chỉ, duy nhất"
            }
          ]
        }
      },
      {
        "id": "de1_l_q19",
        "number": 19,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài (Helen và Alex đi mua sắm)",
        "part_instruction": "Nghe Helen và Alex nói chuyện mua sắm. Chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part4_de1_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "19. What is the name of the new shop on George Street?",
        "options": [
          "Shooz",
          "Raw",
          "Sonic"
        ],
        "correct_answer": "Sonic",
        "explanation": {
          "msg": "Tên cửa hàng mới mở trên phố George Street nè!",
          "trans_q": "Tên của cửa hàng mới trên đường George là gì?",
          "trans_opts": [
            "Shooz",
            "Raw",
            "Sonic"
          ],
          "clue": "Helen chỉ: 'There's a great new shop called Sonic on George Street.'",
          "why_right": "Tên cửa hàng là Sonic.",
          "trap": "Shooz hay Raw có thể là những cửa hàng giày hoặc quần áo cũ trên con phố đó.",
          "vocab": [
            {
              "word": "shop",
              "phonetic": "/ʃɒp/",
              "meaning": "cửa hàng"
            }
          ]
        }
      },
      {
        "id": "de1_l_q20",
        "number": 20,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài (Helen và Alex đi mua sắm)",
        "part_instruction": "Nghe Helen và Alex nói chuyện mua sắm. Chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de1_part4_de1_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "20. What colour top will Helen wear?",
        "options": [
          "black",
          "blue",
          "pink"
        ],
        "correct_answer": "black",
        "explanation": {
          "msg": "Xác định màu sắc trang phục mà nhân vật nữ sẽ mặc.",
          "trans_q": "Helen sẽ mặc chiếc áo màu gì?",
          "trans_opts": [
            "black (màu đen)",
            "blue (màu xanh dương)",
            "pink (màu hồng)"
          ],
          "clue": "Helen bảo: 'I'm wearing my favourite black top with my jeans.'",
          "why_right": "Chiếc áo màu đen ('black top').",
          "trap": "Có thể Alex mặc màu hồng hoặc xanh, câu hỏi nhấn mạnh vào HELEN.",
          "vocab": [
            {
              "word": "top",
              "phonetic": "/tɒp/",
              "meaning": "áo mặc phần thân trên (áo kiểu, áo thun)"
            },
            {
              "word": "wear",
              "phonetic": "/weər/",
              "meaning": "mặc (quần áo)"
            }
          ]
        }
      },
      {
        "id": "de1_l_q21",
        "number": 21,
        "part": "Part 5",
        "part_title": "Part 5: Điền thông tin đại lý du lịch South Seas",
        "part_instruction": "Nghe bài nói ngắn về đại lý du lịch South Seas Travel Agency. Điền không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "audio/de1_part5_de1_audio_5.mp3",
        "image": "",
        "passage": "<strong>SOUTH SEAS TRAVEL AGENCY</strong><br>New phone number: 847 2296<br>New address: 98 [21] .................... Road<br>Opposite: [22] ....................<br>Opens on: [23] ....................<br>Book a holiday for: £ [24] ....................<br>And get a free: [25] ....................",
        "question": "21. New address: 98 [.....] Road (Tên con đường):",
        "options": [],
        "correct_answer": "Warnock",
        "explanation": {
          "msg": "Tên con đường này được đánh vần từng chữ một, lắng nghe kỹ từng chữ cái W-A-R... nhé!",
          "trans_q": "Địa chỉ mới: Số 98 đường nào?",
          "trans_opts": [],
          "clue": "'The new office is at 98 Warnock Road, that's W-A-R-N-O-C-K.'",
          "why_right": "Tên đường là: Warnock.",
          "trap": "Chỉ điền từ 'Warnock' vì trong đề đã in sẵn chữ 'Road' rồi nhé!",
          "vocab": [
            {
              "word": "address",
              "phonetic": "/əˈdres/",
              "meaning": "địa chỉ"
            }
          ]
        }
      },
      {
        "id": "de1_l_q22",
        "number": 22,
        "part": "Part 5",
        "part_title": "Part 5: Điền thông tin đại lý du lịch South Seas",
        "part_instruction": "Nghe bài nói ngắn. Điền không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "audio/de1_part5_de1_audio_5.mp3",
        "image": "",
        "passage": "<strong>SOUTH SEAS TRAVEL AGENCY</strong><br>New phone number: 847 2296<br>New address: 98 [21] .................... Road<br>Opposite: [22] ....................<br>Opens on: [23] ....................<br>Book a holiday for: £ [24] ....................<br>And get a free: [25] ....................",
        "question": "22. Opposite (Đối diện với cái gì?):",
        "options": [],
        "correct_answer": "the bank",
        "explanation": {
          "msg": "Đại lý nằm đối diện tòa nhà nào nè?",
          "trans_q": "Đối diện với địa điểm nào?",
          "trans_opts": [],
          "clue": "'It's very easy to find, right opposite the bank.'",
          "why_right": "Đáp án: the bank (hoặc bank).",
          "trap": "Đừng nhầm với công viên gần đó nha, họ nói 'near the park, opposite the bank'.",
          "vocab": [
            {
              "word": "opposite",
              "phonetic": "/ˈɒpəzɪt/",
              "meaning": "đối diện"
            }
          ]
        }
      },
      {
        "id": "de1_l_q23",
        "number": 23,
        "part": "Part 5",
        "part_title": "Part 5: Điền thông tin đại lý du lịch South Seas",
        "part_instruction": "Nghe bài nói ngắn. Điền không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "audio/de1_part5_de1_audio_5.mp3",
        "image": "",
        "passage": "<strong>SOUTH SEAS TRAVEL AGENCY</strong><br>New phone number: 847 2296<br>New address: 98 [21] .................... Road<br>Opposite: [22] ....................<br>Opens on: [23] ....................<br>Book a holiday for: £ [24] ....................<br>And get a free: [25] ....................",
        "question": "23. Opens on (Khai trương vào ngày nào?):",
        "options": [],
        "correct_answer": "21 May",
        "explanation": {
          "msg": "Xác định chính xác ngày tháng diễn ra sự kiện.",
          "trans_q": "Khai trương vào ngày nào?",
          "trans_opts": [],
          "clue": "'We will open our doors on the 21st of May.'",
          "why_right": "Điền: 21 May hoặc 21st May hoặc May 21.",
          "trap": "Có thể viết số 21 kèm tên tháng May là chuẩn nhất!",
          "vocab": [
            {
              "word": "open",
              "phonetic": "/ˈəʊpən/",
              "meaning": "mở cửa, khai trương"
            }
          ]
        }
      },
      {
        "id": "de1_l_q24",
        "number": 24,
        "part": "Part 5",
        "part_title": "Part 5: Điền thông tin đại lý du lịch South Seas",
        "part_instruction": "Nghe bài nói ngắn. Điền không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "audio/de1_part5_de1_audio_5.mp3",
        "image": "",
        "passage": "<strong>SOUTH SEAS TRAVEL AGENCY</strong><br>New phone number: 847 2296<br>New address: 98 [21] .................... Road<br>Opposite: [22] ....................<br>Opens on: [23] ....................<br>Book a holiday for: £ [24] ....................<br>And get a free: [25] ....................",
        "question": "24. Book a holiday for: £ [.....] (Đặt tour từ bao nhiêu tiền?):",
        "options": [],
        "correct_answer": "350",
        "explanation": {
          "msg": "Số tiền để nhận quà khuyến mãi!",
          "trans_q": "Đặt kỳ nghỉ với giá bao nhiêu để được quà?",
          "trans_opts": [],
          "clue": "'If you book a holiday for 350 pounds or more...'",
          "why_right": "Số tiền là 350. Đã có ký hiệu £ ở ngoài nên chỉ cần ghi 350.",
          "trap": "Không cần viết lại chữ pound hay ký hiệu £ nha!",
          "vocab": [
            {
              "word": "book a holiday",
              "phonetic": "/bʊk ə ˈhɒlədeɪ/",
              "meaning": "đặt một kỳ nghỉ/chuyến du lịch"
            }
          ]
        }
      },
      {
        "id": "de1_l_q25",
        "number": 25,
        "part": "Part 5",
        "part_title": "Part 5: Điền thông tin đại lý du lịch South Seas",
        "part_instruction": "Nghe bài nói ngắn. Điền không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "audio/de1_part5_de1_audio_5.mp3",
        "image": "",
        "passage": "<strong>SOUTH SEAS TRAVEL AGENCY</strong><br>New phone number: 847 2296<br>New address: 98 [21] .................... Road<br>Opposite: [22] ....................<br>Opens on: [23] ....................<br>Book a holiday for: £ [24] ....................<br>And get a free: [25] ....................",
        "question": "25. And get a free: [.....] (Nhận miễn phí một món quà gì?):",
        "options": [],
        "correct_answer": "bag",
        "explanation": {
          "msg": "Xác định món quà tặng miễn phí (free gift) đi kèm.",
          "trans_q": "Nhận miễn phí cái gì?",
          "trans_opts": [],
          "clue": "'...you'll get a free travel bag to take with you!'",
          "why_right": "Đáp án: bag hoặc travel bag.",
          "trap": "Từ 'free' đã có trong đề bài rồi nên chỉ cần điền 'bag' hoặc 'travel bag' nha!",
          "vocab": [
            {
              "word": "travel bag",
              "phonetic": "/ˈtrævl bæɡ/",
              "meaning": "túi xách du lịch"
            },
            {
              "word": "free",
              "phonetic": "/friː/",
              "meaning": "miễn phí"
            }
          ]
        }
      }
    ],
    "difficulty": "easy",
    "level_code": "A2",
    "level_title": "Cấp Độ: Dễ (Chuẩn A2 Cơ Bản)",
    "difficulty_badge": "🟢 Dễ (A2)",
    "target_desc": "Mục tiêu: Đạt 13 - 18 câu (5.0 - 7.0 điểm). Lời thoại rõ ràng, hội thoại đời sống, bẫy cơ bản."
  },
  {
    "id": "de1_doc",
    "exam_num": 1,
    "skill": "reading",
    "skill_vn": "Kỹ năng Đọc",
    "title": "Đề thi thử số 01 - Kỹ năng đọc",
    "duration_minutes": 40,
    "total_questions": 30,
    "total_pts": 30,
    "questions": [
      {
        "id": "de1_r_q1",
        "number": 1,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn (Cô gái vào đại học)",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp nhất điền vào mỗi chỗ trống (1-8).",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "1. Some people might ( 1 ) ……….. it is not a big thing...",
        "options": [
          "tell",
          "think",
          "wonder"
        ],
        "correct_answer": "think",
        "explanation": {
          "msg": "Chọn động từ phù hợp với ngữ cảnh chỉ nhận thức, suy nghĩ.",
          "trans_q": "Một số người có thể (1)... rằng đó chẳng phải là chuyện gì to tát...",
          "trans_opts": [
            "tell (kể, bảo)",
            "think (nghĩ rằng)",
            "wonder (băn khoăn, tự hỏi)"
          ],
          "clue": "Ngữ cảnh: Người ta 'nghĩ rằng' (think that) việc đi học xa nhà không có gì to tát.",
          "why_right": "Cấu trúc 'think (that) + mệnh đề': nghĩ rằng điều gì đó. 'Tell' phải có tân ngữ chỉ người (tell someone sth).",
          "trap": "'Tell' cần người nhận tin (ví dụ: tell me), còn 'wonder' là tự hỏi chuyện chưa biết.",
          "vocab": [
            {
              "word": "think",
              "phonetic": "/θɪŋk/",
              "meaning": "suy nghĩ, cho rằng"
            }
          ]
        }
      },
      {
        "id": "de1_r_q2",
        "number": 2,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp nhất.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "2. ...but it is the most ( 2 ) ……….. thing that I have ever had to do.",
        "options": [
          "difficult",
          "comfortable",
          "memorable"
        ],
        "correct_answer": "difficult",
        "explanation": {
          "msg": "Chú ý từ 'hated leaving my family' ở câu sau: rời xa gia đình là một trải nghiệm như thế nào?",
          "trans_q": "...nhưng đó là điều (2)... nhất mà tôi từng phải làm.",
          "trans_opts": [
            "difficult (khó khăn)",
            "comfortable (thoải mái, dễ chịu)",
            "memorable (đáng nhớ)"
          ],
          "clue": "Câu liền sau nói: 'I hated leaving my family' (Tôi ghét phải rời xa gia đình) -> chứng tỏ việc này rất KHÓ KHĂN đối với bạn ấy!",
          "why_right": "Difficult = khó khăn. Rời xa tổ ấm 18 năm là việc khó khăn nhất ('the most difficult thing').",
          "trap": "Rời xa người thân thì không thể là 'comfortable' (thoải mái) được đúng không nè!",
          "vocab": [
            {
              "word": "difficult",
              "phonetic": "/ˈdɪfɪkəlt/",
              "meaning": "khó khăn"
            },
            {
              "word": "leave",
              "phonetic": "/liːv/",
              "meaning": "rời bỏ, rời xa"
            }
          ]
        }
      },
      {
        "id": "de1_r_q3",
        "number": 3,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp nhất.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "3. ...happy to live in a new home and ( 3 ) ……….. out new things.",
        "options": [
          "try",
          "turn",
          "put"
        ],
        "correct_answer": "try",
        "explanation": {
          "msg": "Đây là cụm từ cố định (collocation) thường gặp trong tiếng Anh.",
          "trans_q": "...vui vẻ sống ở nơi ở mới và (3)... những điều mới mẻ.",
          "trans_opts": [
            "try (try out = thử nghiệm)",
            "turn (turn out = hóa ra)",
            "put (put out = dập tắt)"
          ],
          "clue": "Cụm 'try out new things' = thử nghiệm, trải nghiệm những điều mới.",
          "why_right": "Chỉ có 'try out' mới mang nghĩa là thử trải nghiệm điều mới mẻ.",
          "trap": "'Turn out' là hóa ra là, 'Put out' là dập lửa, không hợp nghĩa.",
          "vocab": [
            {
              "word": "try out",
              "phonetic": "/traɪ aʊt/",
              "meaning": "thử nghiệm, trải nghiệm cái mới"
            }
          ]
        }
      },
      {
        "id": "de1_r_q4",
        "number": 4,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp nhất.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "4. ...live away from all my family and friends, but I am still ( 4 ) ………..",
        "options": [
          "proud",
          "confident",
          "scared"
        ],
        "correct_answer": "scared",
        "explanation": {
          "msg": "Có từ nối 'BUT' (nhưng) thể hiện sự tương phản cảm xúc!",
          "trans_q": "...tôi nghĩ mình có thể sống xa gia đình bạn bè, nhưng tôi vẫn thấy (4)...",
          "trans_opts": [
            "proud (tự hào)",
            "confident (tự tin)",
            "scared (lo sợ, sợ hãi)"
          ],
          "clue": "Vế trước: 'I think I can do it' (nghĩ là làm được), vế sau: 'BUT I am still scared' (nhưng vẫn thấy sợ).",
          "why_right": "'Scared' thể hiện cảm xúc lo sợ khi phải sống tự lập một mình ở nơi xa lạ.",
          "trap": "Vì có chữ 'BUT' nên không thể chọn từ tích cực như 'confident' hay 'proud' được.",
          "vocab": [
            {
              "word": "scared",
              "phonetic": "/skeəd/",
              "meaning": "lo sợ, hoảng sợ"
            }
          ]
        }
      },
      {
        "id": "de1_r_q5",
        "number": 5,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp nhất.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "5. I met the girl I am ( 5 ) ……….. my room with...",
        "options": [
          "living",
          "sharing",
          "having"
        ],
        "correct_answer": "sharing",
        "explanation": {
          "msg": "Ở chung phòng ký túc xá thì dùng từ gì nè?",
          "trans_q": "Tôi đã gặp bạn nữ mà tôi sẽ (5)... phòng cùng...",
          "trans_opts": [
            "living (sống)",
            "sharing (chia sẻ, ở chung)",
            "having (có)"
          ],
          "clue": "Cấu trúc: 'share something WITH someone' = chia sẻ / ở chung cái gì với ai.",
          "why_right": "'Share my room with' = ở chung phòng với ai. Nếu dùng 'live' thì phải là 'living with', không có 'my room'.",
          "trap": "Nhiều bạn quen miệng 'living with' nhưng ở đây có tân ngữ 'my room' nên bắt buộc phải dùng 'sharing my room with'!",
          "vocab": [
            {
              "word": "share a room with",
              "phonetic": "/ʃeər ə ruːm wɪð/",
              "meaning": "ở chung phòng với ai"
            }
          ]
        }
      },
      {
        "id": "de1_r_q6",
        "number": 6,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp nhất.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "6. We found out that we had lots of things in ( 6 ) ………..",
        "options": [
          "common",
          "general",
          "fact"
        ],
        "correct_answer": "common",
        "explanation": {
          "msg": "Thành ngữ tiếng Anh kinh điển: 'have things in common' = có điểm chung!",
          "trans_q": "Chúng tôi phát hiện ra hai đứa có rất nhiều điểm (6)...",
          "trans_opts": [
            "common (in common = điểm chung)",
            "general (in general = nhìn chung)",
            "fact (in fact = thực tế)"
          ],
          "clue": "Câu sau giải thích: Cả hai đều thích sách, muốn học tiếng Anh, không thích nhạc đồng quê và chó...",
          "why_right": "Thành ngữ cố định: 'have sth IN COMMON' = có điểm tương đồng, cùng sở thích.",
          "trap": "'In general' là nói chung, 'in fact' là thực ra, không đi với 'have lots of things'.",
          "vocab": [
            {
              "word": "have in common",
              "phonetic": "/hæv ɪn ˈkɒmən/",
              "meaning": "có điểm chung, có cùng sở thích"
            }
          ]
        }
      },
      {
        "id": "de1_r_q7",
        "number": 7,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp nhất.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "7. I think we will get ( 7 ) ……….. very well.",
        "options": [
          "up",
          "along",
          "together"
        ],
        "correct_answer": "along",
        "explanation": {
          "msg": "Cụm động từ: 'get along with somebody' có nghĩa là hòa hợp, thân thiết với ai.",
          "trans_q": "Tôi nghĩ chúng tôi sẽ hòa thuận (7)... với nhau rất tốt.",
          "trans_opts": [
            "up (get up = thức dậy)",
            "along (get along = hòa thuận, ăn ý)",
            "together (get together = tụ họp)"
          ],
          "clue": "Đang nói về việc hai bạn cùng phòng rất hợp tính nhau.",
          "why_right": "Cụm 'get along (well)' = sống hòa thuận, chơi thân thiết với nhau.",
          "trap": "'Get up' là thức dậy, 'get together' là tụ tập gặp mặt.",
          "vocab": [
            {
              "word": "get along",
              "phonetic": "/ɡet əˈlɒŋ/",
              "meaning": "hòa thuận, hợp tính nhau"
            }
          ]
        }
      },
      {
        "id": "de1_r_q8",
        "number": 8,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp nhất.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Today I went through a change that will make my life different. I left my home and went across the country with my mom and dad to go off to college. Some people might (1) ……….. it is not a big thing, but it is the most (2) ……….. thing that I have ever had to do. I hated leaving my family, but I am happy to live in a new home and (3) ……….. out new things. I have lived in the same house for eighteen years. I am from North Carolina, and I love everything about it. Now I am going to college in California. I think I can do it. I think I can go and live away from all my family and friends, but I am still (4) ……….. I met the girl I am (5) ……….. my room with, and she seems very nice. Her name is Macy. She is from California and she can show me all the good things about it. We found out that we had lots of things in (6) ……….. We both love books and want to study English in college. We both do not like country music and dogs, even though everyone from North Carolina and California does. I think we will get (7) ……….. very well. My mom and dad thought that Macy was very nice, and told me that they were (8) ……….. I was living with someone like her.",
        "question": "8. ...and told me that they were ( 8 ) ……….. I was living with someone like her.",
        "options": [
          "sad",
          "worried",
          "happy"
        ],
        "correct_answer": "happy",
        "explanation": {
          "msg": "Bố mẹ thấy bạn cùng phòng ngoan và hòa đồng thì cảm xúc sẽ như thế nào?",
          "trans_q": "...và bảo rằng họ rất (8)... vì tôi được ở cùng một người như bạn ấy.",
          "trans_opts": [
            "sad (buồn)",
            "worried (lo lắng)",
            "happy (vui vẻ, an lòng)"
          ],
          "clue": "Bố mẹ khen Macy rất tốt ('Macy was very nice').",
          "why_right": "Bố mẹ yên tâm và vui mừng ('happy') khi con gái ở chung với bạn tốt.",
          "trap": "Không thể buồn hay lo lắng khi thấy bạn tốt được.",
          "vocab": [
            {
              "word": "happy",
              "phonetic": "/ˈhæpi/",
              "meaning": "vui vẻ, hạnh phúc, an lòng"
            }
          ]
        }
      },
      {
        "id": "de1_r_q9",
        "number": 9,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo (Notices A-K)",
        "part_instruction": "Đọc các biển báo A-K trong hình và chọn biển báo tương ứng với các câu 9-16.",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "9. You cannot travel by railway until tomorrow.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "D",
        "explanation": {
          "msg": "Để ý từ khóa 'cannot travel by railway' (không đi tàu hỏa được)!",
          "trans_q": "Bạn không thể di chuyển bằng đường sắt cho đến tận ngày mai.",
          "trans_opts": [],
          "clue": "Biển D ghi: 'NO TRAINS TODAY BECAUSE OF VERY HIGH WINDS' (Hôm nay không có chuyến tàu nào vì gió rất lớn).",
          "why_right": "No trains today = hôm nay không có tàu -> phải đợi đến mai mới đi được!",
          "trap": "Biển F là tàu bị trễ (delayed) chứ không phải hủy cả ngày như biển D.",
          "vocab": [
            {
              "word": "railway",
              "phonetic": "/ˈreɪlweɪ/",
              "meaning": "đường sắt, tàu hỏa"
            },
            {
              "word": "high winds",
              "phonetic": "/haɪ wɪndz/",
              "meaning": "gió lớn"
            }
          ]
        }
      },
      {
        "id": "de1_r_q10",
        "number": 10,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem biển báo trong ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "10. Children and parents travel for less with this.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "C",
        "explanation": {
          "msg": "Bố mẹ và con cái đi lại rẻ hơn: Bố mẹ + con cái chính là GIA ĐÌNH (Family)!",
          "trans_q": "Trẻ em và cha mẹ đi lại với giá rẻ hơn nhờ cái này.",
          "trans_opts": [],
          "clue": "Biển C ghi: 'GET CHEAPER TICKET WITH A FAMILY RAILCARD' (Mua vé rẻ hơn với thẻ tàu gia đình).",
          "why_right": "Children and parents = Family; travel for less = cheaper ticket!",
          "trap": "Biển A là miễn phí cho trẻ em ở viện bảo tàng, nhưng câu này nói về việc đi lại (travel).",
          "vocab": [
            {
              "word": "travel for less",
              "phonetic": "/ˈtrævl fɔː les/",
              "meaning": "đi lại tốn ít tiền hơn / rẻ hơn"
            },
            {
              "word": "railcard",
              "phonetic": "/ˈreɪlkɑːd/",
              "meaning": "thẻ giảm giá tàu hỏa"
            }
          ]
        }
      },
      {
        "id": "de1_r_q11",
        "number": 11,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem biển báo trong ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "11. You must pay before you travel on this.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "G",
        "explanation": {
          "msg": "Phải trả tiền (mua vé) trước khi lên tàu nha!",
          "trans_q": "Bạn phải trả tiền trước khi bạn đi trên phương tiện này.",
          "trans_opts": [],
          "clue": "Biển G ghi: 'DO NOT GET ON THE TRAIN WITHOUT A TICKET' (Không được lên tàu nếu không có vé).",
          "why_right": "Không được lên tàu nếu không có vé nghĩa là bắt buộc phải mua vé (pay) trước khi lên!",
          "trap": "Biển H ngược lại: phòng vé đóng cửa, lên tàu mới mua vé (buy your ticket on the train). Cẩn thận kẻo nhầm lẫn giữa G và H!",
          "vocab": [
            {
              "word": "without a ticket",
              "phonetic": "/wɪˈðaʊt ə ˈtɪkɪt/",
              "meaning": "không có vé"
            }
          ]
        }
      },
      {
        "id": "de1_r_q12",
        "number": 12,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem biển báo trong ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "12. Only adults pay to go in here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "A",
        "explanation": {
          "msg": "Chỉ người lớn phải trả tiền, tức là trẻ em được MIỄN PHÍ!",
          "trans_q": "Chỉ người lớn mới phải trả tiền để vào đây.",
          "trans_opts": [],
          "clue": "Biển A ghi: 'MUSEUM OF TRAVEL AND TRANSPORT - Entrance free for children' (Miễn phí vé vào cho trẻ em).",
          "why_right": "Trẻ em miễn phí đồng nghĩa với việc chỉ có người lớn mới phải mua vé vào cửa.",
          "trap": "Biển C là giảm giá vé tàu cho cả nhà, không phải miễn phí vé vào cổng.",
          "vocab": [
            {
              "word": "adult",
              "phonetic": "/ˈædʌlt/",
              "meaning": "người lớn"
            },
            {
              "word": "entrance free",
              "phonetic": "/ˈentrəns friː/",
              "meaning": "vào cửa miễn phí"
            }
          ]
        }
      },
      {
        "id": "de1_r_q13",
        "number": 13,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem biển báo trong ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "13. This is late because of bad weather.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "F",
        "explanation": {
          "msg": "Xác định thông tin về sự chậm trễ của chuyến tàu do ảnh hưởng thời tiết.",
          "trans_q": "Chuyến này bị muộn do thời tiết xấu.",
          "trans_opts": [],
          "clue": "Biển F ghi: '8:30 LONDON TRAIN delayed because of fog' (Chuyến tàu London lúc 8:30 bị hoãn/trễ do sương mù).",
          "why_right": "Delayed = late (bị trễ/muộn); fog (sương mù) = bad weather (thời tiết xấu)!",
          "trap": "Biển D là 'No trains' (hủy chuyến luôn), còn biển F là 'delayed' (chỉ bị trễ giờ thôi).",
          "vocab": [
            {
              "word": "delayed",
              "phonetic": "/dɪˈleɪd/",
              "meaning": "bị hoãn, bị muộn (late)"
            },
            {
              "word": "fog",
              "phonetic": "/fɒɡ/",
              "meaning": "sương mù dày đặc"
            }
          ]
        }
      },
      {
        "id": "de1_r_q14",
        "number": 14,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem biển báo trong ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "14. You can look at and buy cars here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "B",
        "explanation": {
          "msg": "Mua bán và ngắm xe ô tô ở đâu nè?",
          "trans_q": "Bạn có thể ngắm và mua ô tô ở đây.",
          "trans_opts": [],
          "clue": "Biển B ghi: 'CAR DEALERS! The best cars' (Đại lý xe hơi! Những chiếc xe tốt nhất).",
          "why_right": "Car dealers = đại lý kinh doanh mua bán ô tô.",
          "trap": "Đừng nhầm với Disable Parking (bãi đỗ xe) ở biển I nhé!",
          "vocab": [
            {
              "word": "car dealer",
              "phonetic": "/kɑː ˈdiːlər/",
              "meaning": "đại lý mua bán xe ô tô"
            }
          ]
        }
      },
      {
        "id": "de1_r_q15",
        "number": 15,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem biển báo trong ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "15. Only certain people may leave their cars here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "I",
        "explanation": {
          "msg": "Bãi đỗ xe dành riêng cho người khuyết tật!",
          "trans_q": "Chỉ một số người nhất định mới được để xe ở đây.",
          "trans_opts": [],
          "clue": "Biển I ghi: 'Disable Parking - TOWING ENFORCED' (Chỗ đỗ xe cho người khuyết tật - Vi phạm sẽ bị cẩu xe).",
          "why_right": "Disable Parking = chỉ người khuyết tật (certain people) mới được đỗ.",
          "trap": "Leave their cars = park (đỗ xe).",
          "vocab": [
            {
              "word": "disable",
              "phonetic": "/dɪsˈeɪbl/",
              "meaning": "người khuyết tật"
            },
            {
              "word": "towing",
              "phonetic": "/ˈtəʊɪŋ/",
              "meaning": "kéo xe, cẩu xe vi phạm đi"
            }
          ]
        }
      },
      {
        "id": "de1_r_q16",
        "number": 16,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem biển báo trong ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_766649_Reading_1.1.png",
        "passage": "",
        "question": "16. This can help prevent crimes.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "E",
        "explanation": {
          "msg": "Phòng chống tội phạm, trộm cắp ở khu phố!",
          "trans_q": "Điều này có thể giúp ngăn ngừa tội phạm.",
          "trans_opts": [],
          "clue": "Biển E ghi: 'This Block is Protected by NEIGHBOURHOOD WATCH' (Khu phố này được bảo vệ bởi Đội tuần tra khu dân cư).",
          "why_right": "Neighbourhood Watch = tổ chức tuần tra giám sát khu dân cư để phòng ngừa tội phạm (prevent crimes)!",
          "trap": "Biển I nói về cẩu xe, không phải phòng chống tội phạm.",
          "vocab": [
            {
              "word": "prevent crimes",
              "phonetic": "/prɪˈvent kraɪmz/",
              "meaning": "ngăn chặn, phòng ngừa tội phạm"
            },
            {
              "word": "neighbourhood watch",
              "phonetic": "/ˈneɪbəhʊd wɒtʃ/",
              "meaning": "đội tuần tra an ninh khu phố"
            }
          ]
        }
      },
      {
        "id": "de1_r_q17",
        "number": 17,
        "part": "Part 3",
        "part_title": "Part 3: Đọc tờ rơi & email điền ghi chú của Minh",
        "part_instruction": "Đọc tờ thông báo và email trong ảnh để điền thông tin vào sổ tay của Minh (17-23). Không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "17. Name of guest speaker (Tên diễn giả khách mời):",
        "options": [],
        "correct_answer": "Ryan Maidstone",
        "explanation": {
          "msg": "Bẫy siêu to khổng lồ câu này nè đọc kỹ email nha!",
          "trans_q": "Tên của diễn giả khách mời là ai?",
          "trans_opts": [],
          "clue": "Tờ poster ghi Steve Smith, NHƯNG email của Tuấn bảo: 'Steve Smith can't come... Dr. Hai is sending Ryan Maidstone instead.'",
          "why_right": "Vì Steve Smith bận không đến được nên người đến thay là Ryan Maidstone!",
          "trap": "Nếu chỉ nhìn poster bên trái là sẽ bị chọn nhầm Steve Smith ngay. Luôn đọc kỹ email cập nhật để lấy thông tin mới nhất!",
          "vocab": [
            {
              "word": "guest speaker",
              "phonetic": "/ɡest ˈspiːkər/",
              "meaning": "diễn giả khách mời"
            },
            {
              "word": "instead",
              "phonetic": "/ɪnˈsted/",
              "meaning": "thay thế vào đó"
            }
          ]
        }
      },
      {
        "id": "de1_r_q18",
        "number": 18,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Minh",
        "part_instruction": "Đọc poster và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "18. Collection time (Giờ đi đón diễn giả):",
        "options": [],
        "correct_answer": "7.30 p.m.",
        "explanation": {
          "msg": "Tính giờ đón khách nè: Buổi nói chuyện lúc 8.00 p.m., Tuấn bảo đón trước 30 phút!",
          "trans_q": "Thời gian đi đón là mấy giờ?",
          "trans_opts": [],
          "clue": "Poster ghi giờ bắt đầu: '8.00 p.m.'. Email Tuấn dặn: 'pick him up... thirty minutes before the start of the talk'.",
          "why_right": "8 giờ tối trừ đi 30 phút là 7 giờ 30 tối: 7.30 p.m. (hoặc 7:30 p.m. / 7.30 / 19:30).",
          "trap": "Không được điền 8.00 p.m. nha vì 8 giờ là giờ bắt đầu nói chuyện rồi!",
          "vocab": [
            {
              "word": "pick up / collect",
              "phonetic": "/pɪk ʌp/",
              "meaning": "đón (ai đó)"
            }
          ]
        }
      },
      {
        "id": "de1_r_q19",
        "number": 19,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Minh",
        "part_instruction": "Đọc poster và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "19. Meeting place (Địa điểm đón / gặp nhau):",
        "options": [],
        "correct_answer": "train station",
        "explanation": {
          "msg": "Minh phải ra đâu để đón chú diễn giả nè?",
          "trans_q": "Địa điểm đón diễn giả ở đâu?",
          "trans_opts": [],
          "clue": "Email viết rõ: 'Can you pick him up at the train station...'",
          "why_right": "Đáp án: train station (hoặc the train station).",
          "trap": "Đừng nhầm với office nha, đón ở ga tàu xong mới dẫn về văn phòng.",
          "vocab": [
            {
              "word": "train station",
              "phonetic": "/treɪn ˈsteɪʃn/",
              "meaning": "ga xe lửa / ga tàu hỏa"
            }
          ]
        }
      },
      {
        "id": "de1_r_q20",
        "number": 20,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Minh",
        "part_instruction": "Đọc poster và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "20. Take him to (Dẫn diễn giả đến đâu?):",
        "options": [],
        "correct_answer": "Tuan's office",
        "explanation": {
          "msg": "Đón xong thì đưa khách về đâu nè?",
          "trans_q": "Dẫn ông ấy tới đâu?",
          "trans_opts": [],
          "clue": "Tuấn dặn trong email: 'Bring him to my office.'",
          "why_right": "Vì Tuấn viết email dặn 'my office' nên trong sổ ghi chép của Minh sẽ là 'Tuan's office' (hoặc office / my office).",
          "trap": "Không dẫn thẳng vào hội trường English Club mà qua văn phòng trước.",
          "vocab": [
            {
              "word": "office",
              "phonetic": "/ˈɒfɪs/",
              "meaning": "văn phòng làm việc"
            }
          ]
        }
      },
      {
        "id": "de1_r_q21",
        "number": 21,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Minh",
        "part_instruction": "Đọc poster và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "21. His phone number (Số điện thoại của diễn giả):",
        "options": [],
        "correct_answer": "0972 000 899",
        "explanation": {
          "msg": "Số điện thoại để Minh liên lạc nếu không thấy diễn giả ở ga tàu nè!",
          "trans_q": "Số điện thoại của Ryan là số nào?",
          "trans_opts": [],
          "clue": "Tuấn viết: 'If you can't find Ryan then, phone him at 0972 000 899.'",
          "why_right": "Điền chính xác số điện thoại: 0972 000 899 (hoặc 0972000899).",
          "trap": "Ghi đúng từng chữ số, kiểm tra lại cẩn thận nhé!",
          "vocab": []
        }
      },
      {
        "id": "de1_r_q22",
        "number": 22,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Minh",
        "part_instruction": "Đọc poster và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "22. Subject of talk (Chủ đề bài nói chuyện):",
        "options": [],
        "correct_answer": "Speaking English naturally",
        "explanation": {
          "msg": "Chủ đề buổi nói chuyện được in đậm rất to trên poster nè!",
          "trans_q": "Chủ đề của buổi nói chuyện là gì?",
          "trans_opts": [],
          "clue": "Poster ghi: 'Will speak to all members about Speaking English naturally'. Email cũng ghi: 'talk about the same topic'.",
          "why_right": "Chủ đề là: Speaking English naturally (Nói tiếng Anh một cách tự nhiên).",
          "trap": "Không viết thừa chữ 'about', chỉ lấy tên chủ đề thôi nha!",
          "vocab": [
            {
              "word": "naturally",
              "phonetic": "/ˈnætʃrəli/",
              "meaning": "một cách tự nhiên"
            }
          ]
        }
      },
      {
        "id": "de1_r_q23",
        "number": 23,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Minh",
        "part_instruction": "Đọc poster và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_766658_Reading_1.2.png",
        "passage": "<strong>MINH’s Notes</strong><br>Date: 15th May<br>Name of guest speaker: (17) [.....]<br>Collection time: (18) [.....]<br>Meeting place: (19) [.....]<br>Take him to: (20) [.....]<br>His phone number: (21) [.....]<br>Subject of talk: (22) [.....]<br>Wear: (23) [.....]",
        "question": "23. Wear (Trang phục cần mặc):",
        "options": [],
        "correct_answer": "the club's uniform",
        "explanation": {
          "msg": "Quy định về trang phục khi tham gia câu lạc bộ!",
          "trans_q": "Phải mặc trang phục gì?",
          "trans_opts": [],
          "clue": "Poster dặn dò: 'Everyone wears the club's uniform.'",
          "why_right": "Điền: the club's uniform (hoặc club's uniform / uniform).",
          "trap": "Nhớ chữ 'uniform' viết đúng chính tả nha bạn!",
          "vocab": [
            {
              "word": "uniform",
              "phonetic": "/ˈjuːnɪfɔːm/",
              "meaning": "đồng phục"
            }
          ]
        }
      },
      {
        "id": "de1_r_q24",
        "number": 24,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản (Phong tục về răng sữa)",
        "part_instruction": "Đọc bài văn về các phong tục khi trẻ em rụng răng sữa và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Different cultures follow their own special customs when a child’s baby teeth fall out...",
        "question": "24. According to the text, some people throw a tooth on the roof",
        "options": [
          "to get a larger house.",
          "to get a new tooth.",
          "to have a long life."
        ],
        "correct_answer": "to get a new tooth.",
        "explanation": {
          "msg": "Ở Hàn Quốc, ném răng lên mái nhà để làm gì nè?",
          "trans_q": "Theo bài đọc, một số người ném chiếc răng rụng lên mái nhà để làm gì?",
          "trans_opts": [
            "để có ngôi nhà lớn hơn",
            "để mọc răng mới",
            "để sống thọ"
          ],
          "clue": "Đoạn 1: '...a magpie will come and take the tooth and then will return with a new tooth for the child.'",
          "why_right": "Chim ác là sẽ lấy răng cũ và mang lại răng mới cho em bạn ('return with a new tooth').",
          "trap": "Không hề nhắc tới nhà to hay sống thọ.",
          "vocab": [
            {
              "word": "baby teeth",
              "phonetic": "/ˈbeɪbi tiːθ/",
              "meaning": "răng sữa"
            },
            {
              "word": "fall out",
              "phonetic": "/fɔːl aʊt/",
              "meaning": "rụng ra (răng, tóc)"
            }
          ]
        }
      },
      {
        "id": "de1_r_q25",
        "number": 25,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "25. In Asian countries, birds are responsible for",
        "options": [
          "taking the lost tooth away.",
          "giving gifts or candies.",
          "feeding the angle."
        ],
        "correct_answer": "taking the lost tooth away.",
        "explanation": {
          "msg": "Ở châu Á, những chú chim chịu trách nhiệm làm gì nè?",
          "trans_q": "Ở các nước châu Á, chim chịu trách nhiệm làm việc gì?",
          "trans_opts": [
            "mang chiếc răng bị rụng đi",
            "tặng quà hoặc kẹo",
            "cho thiên thần ăn"
          ],
          "clue": "Đoạn 1 & 2: '...a magpie will come and take the tooth... Birds aren't the only animals thought to take lost teeth.'",
          "why_right": "Nhiệm vụ của chim là mang chiếc răng rụng đi ('taking the lost tooth away').",
          "trap": "Tặng quà là Tiên Răng ở phương Tây, không phải chim ở châu Á.",
          "vocab": [
            {
              "word": "be responsible for",
              "phonetic": "/bi rɪˈspɒnsəbl fɔːr/",
              "meaning": "chịu trách nhiệm cho việc gì"
            }
          ]
        }
      },
      {
        "id": "de1_r_q26",
        "number": 26,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "26. People in Mongolia respect dogs a lot and consider them as",
        "options": [
          "protectors of the people.",
          "lucky symbols of life.",
          "important as other pets."
        ],
        "correct_answer": "protectors of the people.",
        "explanation": {
          "msg": "Người Mông Cổ coi loài chó như thế nào?",
          "trans_q": "Người dân ở Mông Cổ rất tôn trọng loài chó và coi chúng là:",
          "trans_opts": [
            "những người bảo vệ con người",
            "biểu tượng may mắn của cuộc sống",
            "quan trọng như các thú cưng khác"
          ],
          "clue": "Đoạn 2: 'Dogs are highly respected in Mongolian culture and are considered guardian angels of the people.'",
          "why_right": "Guardian angels = thiên thần hộ mệnh / người bảo vệ (protectors of the people)!",
          "trap": "'Guardian angel' đồng nghĩa trực tiếp với 'protector'.",
          "vocab": [
            {
              "word": "guardian angel",
              "phonetic": "/ˈɡɑːdiən ˈeɪndʒl/",
              "meaning": "thiên thần hộ mệnh / người bảo vệ"
            },
            {
              "word": "protector",
              "phonetic": "/prəˈtektər/",
              "meaning": "người bảo vệ, che chở"
            }
          ]
        }
      },
      {
        "id": "de1_r_q27",
        "number": 27,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "27. The story of the Tooth Fairy probably came from",
        "options": [
          "Western Africa.",
          "Eastern Asia.",
          "Northern Europe."
        ],
        "correct_answer": "Northern Europe.",
        "explanation": {
          "msg": "Câu chuyện Tiên Răng (Tooth Fairy) bắt nguồn từ đâu?",
          "trans_q": "Câu chuyện về Tiên Răng có thể bắt nguồn từ:",
          "trans_opts": [
            "Tây Phi",
            "Đông Á",
            "Bắc / Tây Âu (Northern Europe)"
          ],
          "clue": "Đoạn 3: '...the story probably began in England or Ireland centuries ago.'",
          "why_right": "Nước Anh (England) và Ireland nằm ở khu vực Bắc / Tây Âu (Northern Europe).",
          "trap": "Không phải châu Phi hay Đông Á.",
          "vocab": [
            {
              "word": "Tooth Fairy",
              "phonetic": "/ˈtuːθ feəri/",
              "meaning": "Tiên Răng (nhân vật cổ tích đổi răng lấy tiền)"
            }
          ]
        }
      },
      {
        "id": "de1_r_q28",
        "number": 28,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "28. The wee hours refer to",
        "options": [
          "between midnight and 5:00 a.m.",
          "happy hours.",
          "late afternoon."
        ],
        "correct_answer": "between midnight and 5:00 a.m.",
        "explanation": {
          "msg": "Cụm từ 'wee hours' là từ lóng tiếng Anh siêu thú vị!",
          "trans_q": "Cụm từ 'the wee hours' ám chỉ khoảng thời gian nào?",
          "trans_opts": [
            "giữa nửa đêm và 5 giờ sáng (sáng sớm tinh mơ)",
            "những giờ phút vui vẻ",
            "cuối buổi chiều"
          ],
          "clue": "Đoạn 3: 'In the wee hours, while the child is sleeping, the Tooth Fairy takes the tooth...'",
          "why_right": "'The wee hours' là thành ngữ chỉ khoảng thời gian nửa đêm về sáng (từ 12h đêm đến rạng sáng 4-5h), lúc mọi người đang ngủ say.",
          "trap": "Không liên quan đến 'happy hours' (giờ vàng giảm giá quán nước) đâu nha!",
          "vocab": [
            {
              "word": "the wee hours",
              "phonetic": "/ðiː wiː ˈaʊəz/",
              "meaning": "đêm muộn rạng sáng (khoảng 1h-4h sáng)"
            }
          ]
        }
      },
      {
        "id": "de1_r_q29",
        "number": 29,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "29. In Mexico and the United States, the mouse and the Tooth Fairy",
        "options": [
          "both eat the tooth.",
          "take the tooth and leave money.",
          "feed the guardian."
        ],
        "correct_answer": "take the tooth and leave money.",
        "explanation": {
          "msg": "Chú chuột ở Mexico và Tiên Răng ở Mỹ có điểm gì giống nhau?",
          "trans_q": "Ở Mexico và Mỹ, chú chuột và Tiên Răng đều:",
          "trans_opts": [
            "đều ăn chiếc răng",
            "lấy chiếc răng và để lại tiền",
            "cho người giám hộ ăn"
          ],
          "clue": "Đoạn 2: 'In Mexico... a mouse takes a lost tooth and leaves some money.' Đoạn 3: 'In the United States... the Tooth Fairy usually leaves money.'",
          "why_right": "Cả hai đều lấy chiếc răng rụng và để lại tiền (take the tooth and leave money).",
          "trap": "Không ai ăn chiếc răng cả, chỉ có ở Mông Cổ mới gói răng vào thịt cho chó ăn thôi!",
          "vocab": [
            {
              "word": "leave money",
              "phonetic": "/liːv ˈmʌni/",
              "meaning": "để lại tiền"
            }
          ]
        }
      },
      {
        "id": "de1_r_q30",
        "number": 30,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "30. It is understood from the text that",
        "options": [
          "different cultures have different traditions about teeth.",
          "the Tooth Fairy leaves the money for teeth.",
          "some tooth customs involve animals."
        ],
        "correct_answer": "different cultures have different traditions about teeth.",
        "explanation": {
          "msg": "Câu hỏi tổng kết ý nghĩa toàn bài đọc nè bạn bạn!",
          "trans_q": "Qua bài đọc, chúng ta hiểu được rằng:",
          "trans_opts": [
            "các nền văn hóa khác nhau có những phong tục khác nhau về răng rụng",
            "Tiên Răng để lại tiền cho những chiếc răng",
            "một số phong tục về răng có liên quan đến động vật"
          ],
          "clue": "Câu mở đầu toàn bài: 'Different cultures follow their own special customs when a child's baby teeth fall out.'",
          "why_right": "Phương án A khái quát trọn vẹn toàn bộ bài viết (từ Hàn Quốc, các nước châu Á, Mexico, Tây Ban Nha, Mông Cổ đến Anh, Mỹ).",
          "trap": "Phương án B và C chỉ là những ví dụ cụ thể, chi tiết nhỏ trong bài, không thể làm ý chính bao quát toàn bài được.",
          "vocab": [
            {
              "word": "culture",
              "phonetic": "/ˈkʌltʃər/",
              "meaning": "nền văn hóa"
            },
            {
              "word": "tradition / custom",
              "phonetic": "/trəˈdɪʃn/ /ˈkʌstəm/",
              "meaning": "phong tục, truyền thống"
            }
          ]
        }
      }
    ],
    "difficulty": "easy",
    "level_code": "A2",
    "level_title": "Cấp Độ: Dễ (Chuẩn A2 Cơ Bản)",
    "difficulty_badge": "🟢 Dễ (A2)",
    "target_desc": "Mục tiêu: Đạt 15 - 20 câu (5.0 - 6.5 điểm). Từ vựng quen thuộc (sinh viên, chuyển nhà, câu lạc bộ, chiếc răng sữa)."
  },
  {
    "id": "de2_nghe",
    "exam_num": 2,
    "skill": "listening",
    "skill_vn": "Kỹ năng Nghe",
    "title": "Đề thi thử số 02 - Kỹ năng nghe",
    "duration_minutes": 25,
    "total_questions": 25,
    "total_pts": 25,
    "questions": [
      {
        "id": "de2_l_q1",
        "number": 1,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part1_de2_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "1. What is the telephone number of the hotel?",
        "options": [
          "720 433.",
          "730 433.",
          "720 443."
        ],
        "correct_answer": "720 433.",
        "explanation": {
          "msg": "Chào mừng bạn đến với Đề số 2! Khởi động với câu hỏi số điện thoại quen thuộc nè!",
          "trans_q": "Số điện thoại của khách sạn là số nào?",
          "trans_opts": [
            "720 433",
            "730 433",
            "720 443"
          ],
          "clue": "Lễ tân nói rõ: 'It's seven-two-oh, four-double three (720 433). You can phone them anytime.'",
          "why_right": "'Double three' trong tiếng Anh có nghĩa là hai số 3 (33) -> 720 433!",
          "trap": "Cẩn thận nghe nhầm 'double three' (33) thành 'double four' (44) ở đáp án C!",
          "vocab": [
            {
              "word": "double three",
              "phonetic": "/ˈdʌbl θriː/",
              "meaning": "hai số 3 (33)"
            },
            {
              "word": "information",
              "phonetic": "/ˌɪnfəˈmeɪʃn/",
              "meaning": "thông tin"
            }
          ]
        }
      },
      {
        "id": "de2_l_q2",
        "number": 2,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part1_de2_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "2. Who can join the camp?",
        "options": [
          "Students.",
          "Employed people.",
          "People between the age of 18 and 23."
        ],
        "correct_answer": "People between the age of 18 and 23.",
        "explanation": {
          "msg": "Chú ý bẫy từ 'student' và 'employed': người nói làm rõ độ tuổi và tình trạng việc làm của đối tượng.",
          "trans_q": "Ai có thể tham gia trại hè quốc tế?",
          "trans_opts": [
            "Học sinh, sinh viên",
            "Người đã đi làm",
            "Những người trong độ tuổi từ 18 đến 23"
          ],
          "clue": "Người phụ trách nói: 'The camp is open to everyone between the ages of 18 to 23. You DON'T have to be a student, you DON'T even have to be employed...'",
          "why_right": "Mở rộng cho tất cả mọi người từ 18 đến 23 tuổi ('between the ages of 18 to 23').",
          "trap": "Họ nói 'You DON'T have to be a student' (Bạn KHÔNG BẮT BUỘC phải là học sinh) và 'DON'T have to be employed' (không bắt buộc phải có việc làm). Chữ 'DON'T' là bẫy loại 2 đáp án A và B đó bạn!",
          "vocab": [
            {
              "word": "join the camp",
              "phonetic": "/dʒɔɪn ðə kæmp/",
              "meaning": "tham gia hội trại"
            },
            {
              "word": "employed",
              "phonetic": "/ɪmˈplɔɪd/",
              "meaning": "đã có việc làm / người đi làm"
            }
          ]
        }
      },
      {
        "id": "de2_l_q3",
        "number": 3,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part1_de2_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "3. What do you have to take to the camp?",
        "options": [
          "A tent.",
          "A map.",
          "A pillow."
        ],
        "correct_answer": "A pillow.",
        "explanation": {
          "msg": "Cần tự mang theo món gì khi đi cắm trại nè bạn?",
          "trans_q": "Bạn bắt buộc phải tự mang theo vật dụng gì đến hội trại?",
          "trans_opts": [
            "A tent (Lều cắm trại)",
            "A map (Bản đồ)",
            "A pillow (Cái gối ngủ)"
          ],
          "clue": "Người hướng dẫn dặn: 'Tents are provided, but you'll need to bring your own pillow, knife, fork and spoon.'",
          "why_right": "Lều đã có ban tổ chức lo ('Tents are provided'), còn thí sinh phải tự mang theo gối ngủ ('bring your own pillow')!",
          "trap": "Nhiều bạn vừa nghe thấy chữ 'tent' là khoanh vội, nhưng chữ 'provided' nghĩa là được cung cấp sẵn rồi, không phải tự mang!",
          "vocab": [
            {
              "word": "pillow",
              "phonetic": "/ˈpɪləʊ/",
              "meaning": "chiếc gối nằm"
            },
            {
              "word": "provided",
              "phonetic": "/prəˈvaɪdɪd/",
              "meaning": "được cung cấp sẵn"
            }
          ]
        }
      },
      {
        "id": "de2_l_q4",
        "number": 4,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part1_de2_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "4. What do they decide to do tonight?",
        "options": [
          "Go to the theater.",
          "Watch a video at home.",
          "Go to the cinema."
        ],
        "correct_answer": "Watch a video at home.",
        "explanation": {
          "msg": "Hai bạn trẻ đang bàn xem tối nay làm gì, xem ai là người chốt hạ nè!",
          "trans_q": "Họ quyết định làm gì tối nay?",
          "trans_opts": [
            "Đi xem kịch ở nhà hát",
            "Xem video ở nhà",
            "Đi rạp chiếu phim"
          ],
          "clue": "Cô gái bảo: 'I'm tired... Why don't we rent a video and stay in?' Chàng trai đồng ý: '...if you're tired, okay.'",
          "why_right": "'Rent a video and stay in' chính là ở nhà xem video (Watch a video at home)!",
          "trap": "Chàng trai rủ đi rạp chiếu phim (cinema) và xem kịch (theater) nhưng cô gái từ chối vì mệt mỏi.",
          "vocab": [
            {
              "word": "stay in",
              "phonetic": "/steɪ ɪn/",
              "meaning": "ở trong nhà, không ra ngoài chơi"
            },
            {
              "word": "rent a video",
              "phonetic": "/rent ə ˈvɪdiəʊ/",
              "meaning": "thuê băng đĩa video về xem"
            }
          ]
        }
      },
      {
        "id": "de2_l_q5",
        "number": 5,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part1_de2_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "5. What time will the coach leave the coach park?",
        "options": [
          "6.15 p.m.",
          "6.15 a.m.",
          "8.15 p.m."
        ],
        "correct_answer": "6.15 p.m.",
        "explanation": {
          "msg": "Hệ thống 24 giờ đổi sang 12 giờ: 18h15 là mấy giờ chiều nè?",
          "trans_q": "Xe khách sẽ rời khỏi bãi đỗ xe vào lúc mấy giờ?",
          "trans_opts": [
            "6.15 p.m. (6 giờ 15 tối)",
            "6.15 a.m. (6 giờ 15 sáng)",
            "8.15 p.m. (8 giờ 15 tối)"
          ],
          "clue": "Cô hướng dẫn viên thông báo rất rõ: '...the coach will leave the coach park at 18:15. That's 6:15... so please be on time.'",
          "why_right": "18:15 chính là 6:15 chiều (p.m.).",
          "trap": "Coi chừng nhìn lướt a.m. với p.m.! a.m. là sáng sớm, p.m. là chiều tối.",
          "vocab": [
            {
              "word": "coach",
              "phonetic": "/kəʊtʃ/",
              "meaning": "xe khách du lịch, xe buýt đường dài"
            },
            {
              "word": "coach park",
              "phonetic": "/kəʊtʃ pɑːk/",
              "meaning": "bãi đỗ xe khách"
            }
          ]
        }
      },
      {
        "id": "de2_l_q6",
        "number": 6,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part2_de2_audio_2.mp3",
        "image": "",
        "passage": "",
        "question": "6. What will the woman do first?",
        "options": [
          "Clean the windows.",
          "Paint the wall.",
          "Clean the floor."
        ],
        "correct_answer": "Clean the floor.",
        "explanation": {
          "msg": "Từ khóa quyết định ở đây là 'FIRST' (Làm cái gì ĐẦU TIÊN) nha bạn!",
          "trans_q": "Người phụ nữ sẽ làm gì đầu tiên?",
          "trans_opts": [
            "Lau cửa sổ",
            "Sơn tường",
            "Lau sàn nhà"
          ],
          "clue": "Người phụ nữ: 'I'm going to clean the windows.' Người nam bảo: 'Nên lau cửa sau khi sơn tường.' Người phụ nữ chốt: 'But I must clean the floor BEFORE we start painting.' -> Người nam: 'Okay, you do that!'",
          "why_right": "Cô ấy nói phải lau sàn (clean the floor) trước khi bắt đầu sơn tường. Chàng trai đồng ý.",
          "trap": "Cô ấy định lau cửa sổ trước tiên nhưng bị can ngăn, vì vậy hành động thực sự làm trước nhất là lau sàn nhà!",
          "vocab": [
            {
              "word": "clean the floor",
              "phonetic": "/kliːn ðə flɔːr/",
              "meaning": "lau sàn nhà"
            },
            {
              "word": "before",
              "phonetic": "/bɪˈfɔːr/",
              "meaning": "trước khi"
            }
          ]
        }
      },
      {
        "id": "de2_l_q7",
        "number": 7,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part2_de2_audio_2.mp3",
        "image": "",
        "passage": "",
        "question": "7. How is Susan going to get to the airport?",
        "options": [
          "By coach.",
          "By taxi.",
          "By train."
        ],
        "correct_answer": "By coach.",
        "explanation": {
          "msg": "Phương tiện ra sân bay của bạn Susan!",
          "trans_q": "Susan sẽ đến sân bay bằng phương tiện gì?",
          "trans_opts": [
            "By coach (Bằng xe khách)",
            "By taxi (Bằng tắc-xi)",
            "By train (Bằng tàu hỏa)"
          ],
          "clue": "Susan nói: 'I'm going to take the coach. A taxi is too expensive. The train only runs at the weekends.'",
          "why_right": "Susan chọn đi xe khách ('take the coach').",
          "trap": "Taxi thì quá đắt (too expensive), tàu hỏa thì chỉ chạy cuối tuần (hôm đó là Tuesday thứ Ba).",
          "vocab": [
            {
              "word": "airport",
              "phonetic": "/ˈeəpɔːt/",
              "meaning": "sân bay"
            },
            {
              "word": "take the coach",
              "phonetic": "/teɪk ðə kəʊtʃ/",
              "meaning": "bắt xe khách"
            }
          ]
        }
      },
      {
        "id": "de2_l_q8",
        "number": 8,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part2_de2_audio_2.mp3",
        "image": "",
        "passage": "",
        "question": "8. What does Joe’s father do?",
        "options": [
          "A pilot.",
          "A farmer.",
          "Photographer."
        ],
        "correct_answer": "A farmer.",
        "explanation": {
          "msg": "Bẫy thì QUÁ KHỨ (was) vs HIỆN TẠI (now) nè!",
          "trans_q": "Bố của Joe làm nghề gì?",
          "trans_opts": [
            "Phi công (pilot)",
            "Nông dân (farmer)",
            "Nhiếp ảnh gia (photographer)"
          ],
          "clue": "Joe trả lời: 'He WAS a pilot, but NOW he's a farmer.'",
          "why_right": "Trước đây bố làm phi công ('was a pilot'), nhưng BÂY GIỜ bố làm nông dân ('now he's a farmer').",
          "trap": "Thấy chữ pilot đầu tiên mà chọn ngay là mắc bẫy quá khứ nha! 'Photographer' là nghề của bố bạn nữ kia.",
          "vocab": [
            {
              "word": "farmer",
              "phonetic": "/ˈfɑːmər/",
              "meaning": "nông dân, chủ trang trại"
            },
            {
              "word": "pilot",
              "phonetic": "/ˈpaɪlət/",
              "meaning": "phi công"
            }
          ]
        }
      },
      {
        "id": "de2_l_q9",
        "number": 9,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part2_de2_audio_2.mp3",
        "image": "",
        "passage": "",
        "question": "9. Which sport does Annie like best?",
        "options": [
          "Tennis.",
          "Swimming.",
          "Sailing."
        ],
        "correct_answer": "Tennis.",
        "explanation": {
          "msg": "Môn thể thao yêu thích nhất của Annie (like best / favourite sport) nè!",
          "trans_q": "Annie thích môn thể thao nào nhất?",
          "trans_opts": [
            "Quần vợt (Tennis)",
            "Bơi lội (Swimming)",
            "Chèo thuyền buồm (Sailing)"
          ],
          "clue": "Chàng trai hỏi: 'Swimming?' - Annie đáp: 'No, tennis I think. Yes, tennis!'",
          "why_right": "Annie khẳng định môn mình thích nhất là Tennis.",
          "trap": "Người nam đoán Swimming nhưng Annie đã lập tức phủ nhận ('No').",
          "vocab": [
            {
              "word": "like best",
              "phonetic": "/laɪk best/",
              "meaning": "thích nhất (= favourite)"
            }
          ]
        }
      },
      {
        "id": "de2_l_q10",
        "number": 10,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part2_de2_audio_2.mp3",
        "image": "",
        "passage": "",
        "question": "10. Where will they sit?",
        "options": [
          "Under the tree.",
          "By the river.",
          "In the car."
        ],
        "correct_answer": "By the river.",
        "explanation": {
          "msg": "Ngồi hóng mát ở đâu nè bạn nhỏ?",
          "trans_q": "Họ sẽ ngồi ở đâu?",
          "trans_opts": [
            "Dưới gốc cây",
            "Bên bờ sông",
            "Trong xe ô tô"
          ],
          "clue": "Bà bảo: 'I'd prefer to sit in the sun. It looks nice there BY THE RIVER.'",
          "why_right": "Bà thích ngồi tắm nắng bên bờ sông ('by the river').",
          "trap": "Cháu rủ ngồi dưới bóng cây (under the tree) nhưng bà không muốn vì thích ngồi nắng bên sông.",
          "vocab": [
            {
              "word": "by the river",
              "phonetic": "/baɪ ðə ˈrɪvər/",
              "meaning": "bên bờ sông"
            },
            {
              "word": "prefer",
              "phonetic": "/prɪˈfɜːr/",
              "meaning": "thích cái gì hơn"
            }
          ]
        }
      },
      {
        "id": "de2_l_q11",
        "number": 11,
        "part": "Part 3",
        "part_title": "Part 3: Điền tin nhắn điện thoại cho Anna",
        "part_instruction": "Nghe người quản lý cửa hàng để lại lời nhắn cho Anna. Điền không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "audio/de2_part3_de2_audio_3.mp3",
        "image": "",
        "passage": "<strong>MESSAGE FOR ANNA</strong><br>From: Bob Watson<br>Name of shop: [11] ....................<br>Boots Size: [12] ....................<br>Colour: [13] ....................<br>Sale Price: £ [14] ....................<br>Tomorrow shop closes at: [15] ....................",
        "question": "11. Name of shop (Tên cửa hàng giày):",
        "options": [],
        "correct_answer": "Forsters",
        "explanation": {
          "msg": "Tên cửa hàng giày được Bob phát âm và đánh vần rất rõ nè!",
          "trans_q": "Tên cửa hàng là gì?",
          "trans_opts": [],
          "clue": "'This is Bob Watson from Forsters shoe shop, that's F-O-R-S-T-E-R-S.'",
          "why_right": "Đáp án: Forsters.",
          "trap": "Nhớ có chữ 's' ở cuối tên Forsters nha bạn!",
          "vocab": [
            {
              "word": "shoe shop",
              "phonetic": "/ʃuː ʃɒp/",
              "meaning": "cửa hàng bán giày"
            }
          ]
        }
      },
      {
        "id": "de2_l_q12",
        "number": 12,
        "part": "Part 3",
        "part_title": "Part 3: Điền tin nhắn cho Anna",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de2_part3_de2_audio_3.mp3",
        "image": "",
        "passage": "<strong>MESSAGE FOR ANNA</strong><br>From: Bob Watson<br>Name of shop: [11] ....................<br>Boots Size: [12] ....................<br>Colour: [13] ....................<br>Sale Price: £ [14] ....................<br>Tomorrow shop closes at: [15] ....................",
        "question": "12. Boots Size (Cỡ giày bốt):",
        "options": [],
        "correct_answer": "38",
        "explanation": {
          "msg": "Size giày của Anna nè!",
          "trans_q": "Cỡ giày là bao nhiêu?",
          "trans_opts": [],
          "clue": "'The green boots you wanted in size 38 have just arrived.'",
          "why_right": "Đáp án: 38 (hoặc thirty-eight).",
          "trap": "Chỉ điền số 38 là chuẩn nhất.",
          "vocab": [
            {
              "word": "size",
              "phonetic": "/saɪz/",
              "meaning": "kích cỡ (giày, áo)"
            }
          ]
        }
      },
      {
        "id": "de2_l_q13",
        "number": 13,
        "part": "Part 3",
        "part_title": "Part 3: Điền tin nhắn cho Anna",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de2_part3_de2_audio_3.mp3",
        "image": "",
        "passage": "<strong>MESSAGE FOR ANNA</strong><br>From: Bob Watson<br>Name of shop: [11] ....................<br>Boots Size: [12] ....................<br>Colour: [13] ....................<br>Sale Price: £ [14] ....................<br>Tomorrow shop closes at: [15] ....................",
        "question": "13. Colour (Màu sắc đôi bốt):",
        "options": [],
        "correct_answer": "green",
        "explanation": {
          "msg": "Đôi bốt này màu gì nè?",
          "trans_q": "Màu sắc của đôi bốt là màu gì?",
          "trans_opts": [],
          "clue": "'The GREEN boots you wanted in size 38...'",
          "why_right": "Màu xanh lá cây: green.",
          "trap": "Viết đúng chính tả: g-r-e-e-n.",
          "vocab": [
            {
              "word": "green",
              "phonetic": "/ɡriːn/",
              "meaning": "màu xanh lá cây"
            }
          ]
        }
      },
      {
        "id": "de2_l_q14",
        "number": 14,
        "part": "Part 3",
        "part_title": "Part 3: Điền tin nhắn cho Anna",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de2_part3_de2_audio_3.mp3",
        "image": "",
        "passage": "<strong>MESSAGE FOR ANNA</strong><br>From: Bob Watson<br>Name of shop: [11] ....................<br>Boots Size: [12] ....................<br>Colour: [13] ....................<br>Sale Price: £ [14] ....................<br>Tomorrow shop closes at: [15] ....................",
        "question": "14. Sale Price: £ [.....] (Giá bán giảm giá):",
        "options": [],
        "correct_answer": "65",
        "explanation": {
          "msg": "Giá bán đôi giày sau khi giảm giá!",
          "trans_q": "Giá khuyến mãi là bao nhiêu bảng?",
          "trans_opts": [],
          "clue": "'They were originally 90 pounds, but on sale they're only 65 pounds.'",
          "why_right": "Giá bán giảm giá (sale price) là: 65.",
          "trap": "Số 90 là giá gốc trước khi giảm, đừng điền 90!",
          "vocab": [
            {
              "word": "sale price",
              "phonetic": "/seɪl praɪs/",
              "meaning": "giá bán giảm giá / khuyến mãi"
            }
          ]
        }
      },
      {
        "id": "de2_l_q15",
        "number": 15,
        "part": "Part 3",
        "part_title": "Part 3: Điền tin nhắn cho Anna",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de2_part3_de2_audio_3.mp3",
        "image": "",
        "passage": "<strong>MESSAGE FOR ANNA</strong><br>From: Bob Watson<br>Name of shop: [11] ....................<br>Boots Size: [12] ....................<br>Colour: [13] ....................<br>Sale Price: £ [14] ....................<br>Tomorrow shop closes at: [15] ....................",
        "question": "15. Tomorrow shop closes at (Ngày mai cửa hàng đóng cửa lúc mấy giờ?):",
        "options": [],
        "correct_answer": "2 p.m.",
        "explanation": {
          "msg": "Xác định mốc giờ Anna cần đến trước khi cửa hàng đóng cửa.",
          "trans_q": "Ngày mai cửa hàng đóng cửa lúc mấy giờ?",
          "trans_opts": [],
          "clue": "'Tomorrow is Saturday, so we close early at two o'clock (2 p.m.).'",
          "why_right": "Đáp án: 2 p.m. (hoặc 2:00 p.m. / 2 o'clock).",
          "trap": "Ngày thường đóng 6h nhưng ngày mai đóng sớm lúc 2h chiều.",
          "vocab": [
            {
              "word": "close early",
              "phonetic": "/kləʊz ˈɜːli/",
              "meaning": "đóng cửa sớm"
            }
          ]
        }
      },
      {
        "id": "de2_l_q16",
        "number": 16,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài (Hỏi thông tin tại đại lý du lịch)",
        "part_instruction": "Nghe người đàn ông hỏi mua vé đi Buenos Aires tại đại lý du lịch. Chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "audio/de2_part4_de2_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "16. The plane leaves at……",
        "options": [
          "12 a.m.",
          "2 p.m.",
          "3 p.m."
        ],
        "correct_answer": "2 p.m.",
        "explanation": {
          "msg": "Chuyến bay cất cánh lúc mấy giờ nè bạn?",
          "trans_q": "Máy bay khởi hành lúc mấy giờ?",
          "trans_opts": [
            "12 a.m. (12 giờ đêm)",
            "2 p.m. (2 giờ chiều)",
            "3 p.m. (3 giờ chiều)"
          ],
          "clue": "Nhân viên đại lý báo: 'The flight departs at 2 p.m. in the afternoon.'",
          "why_right": "Chuyến bay cất cánh vào lúc 2 giờ chiều ('2 p.m.').",
          "trap": "3 p.m. có thể là giờ hạ cánh hoặc một chuyến khác.",
          "vocab": [
            {
              "word": "plane leaves / departs",
              "phonetic": "/pleɪn liːvz/ /dɪˈpɑːts/",
              "meaning": "máy bay khởi hành, cất cánh"
            }
          ]
        }
      },
      {
        "id": "de2_l_q17",
        "number": 17,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài",
        "part_instruction": "Nghe đoạn hội thoại và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de2_part4_de2_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "17. The bus station is in……",
        "options": [
          "Bill Street.",
          "Hill Street.",
          "Mill Street."
        ],
        "correct_answer": "Mill Street.",
        "explanation": {
          "msg": "Xác định tên con đường nơi có trạm dừng xe buýt.",
          "trans_q": "Bến xe buýt nằm trên đường nào?",
          "trans_opts": [
            "Đường Bill",
            "Đường Hill",
            "Đường Mill"
          ],
          "clue": "Nhân viên hướng dẫn: 'The bus station is on Mill Street, M-I-double L.'",
          "why_right": "Mill Street (chữ cái M đứng đầu).",
          "trap": "Bill, Hill, Mill phát âm có vần 'ill' giống nhau, nghe kỹ phụ âm đầu /m/ (bặm môi mở ra) nhé!",
          "vocab": [
            {
              "word": "bus station",
              "phonetic": "/bʌs ˈsteɪʃn/",
              "meaning": "bến xe buýt"
            }
          ]
        }
      },
      {
        "id": "de2_l_q18",
        "number": 18,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài",
        "part_instruction": "Nghe đoạn hội thoại và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de2_part4_de2_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "18. The journey to the airport takes……",
        "options": [
          "1 hour 15 minutes.",
          "1 hour 30 minutes.",
          "1 hour 45 minutes."
        ],
        "correct_answer": "1 hour 30 minutes.",
        "explanation": {
          "msg": "Thời gian đi xe buýt ra sân bay mất bao lâu nè?",
          "trans_q": "Hành trình ra sân bay mất bao lâu?",
          "trans_opts": [
            "1 tiếng 15 phút",
            "1 tiếng 30 phút",
            "1 tiếng 45 phút"
          ],
          "clue": "'The coach ride to the airport takes about an hour and a half (1 hour 30 minutes).'",
          "why_right": "'An hour and a half' = 1 tiếng rưỡi = 1 hour 30 minutes!",
          "trap": "Nghe thấy 'half' là biết 30 phút rồi đó bạn!",
          "vocab": [
            {
              "word": "an hour and a half",
              "phonetic": "/ən ˈaʊər ənd ə hɑːf/",
              "meaning": "một tiếng rưỡi (90 phút)"
            }
          ]
        }
      },
      {
        "id": "de2_l_q19",
        "number": 19,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài",
        "part_instruction": "Nghe đoạn hội thoại và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de2_part4_de2_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "19. The man’s ticket to Buenos Aires will cost……",
        "options": [
          "£240.",
          "£300.",
          "£320."
        ],
        "correct_answer": "£240.",
        "explanation": {
          "msg": "Giá vé máy bay sau khi có thẻ sinh viên!",
          "trans_q": "Vé máy bay của người đàn ông có giá bao nhiêu?",
          "trans_opts": [
            "£240",
            "£300",
            "£320"
          ],
          "clue": "Nhân viên: 'The normal fare is 300 pounds, but with your student card it's only 240 pounds.'",
          "why_right": "Anh ấy có thẻ sinh viên nên giá vé thực trả là £240.",
          "trap": "300 bảng là giá vé người bình thường (normal fare), anh ấy được giảm giá sinh viên!",
          "vocab": [
            {
              "word": "fare / ticket",
              "phonetic": "/feər/ /ˈtɪkɪt/",
              "meaning": "tiền vé / vé"
            }
          ]
        }
      },
      {
        "id": "de2_l_q20",
        "number": 20,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài",
        "part_instruction": "Nghe đoạn hội thoại và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de2_part4_de2_audio_4.mp3",
        "image": "",
        "passage": "",
        "question": "20. The coach costs……",
        "options": [
          "£13.50.",
          "£14.50.",
          "£30.50."
        ],
        "correct_answer": "£13.50.",
        "explanation": {
          "msg": "Tiền vé xe khách ra sân bay nè bạn!",
          "trans_q": "Vé xe khách giá bao nhiêu?",
          "trans_opts": [
            "£13.50",
            "£14.50",
            "£30.50"
          ],
          "clue": "'A return coach ticket to the airport is thirteen pounds fifty (£13.50).'",
          "why_right": "Thirteen pounds fifty = £13.50.",
          "trap": "Thirteen (13) chứ không phải Thirty (30) nhé!",
          "vocab": [
            {
              "word": "coach costs",
              "phonetic": "/kəʊtʃ kɒsts/",
              "meaning": "giá vé xe khách"
            }
          ]
        }
      },
      {
        "id": "de2_l_q21",
        "number": 21,
        "part": "Part 5",
        "part_title": "Part 5: Cuộc thi trúng thưởng kỳ nghỉ (Holiday Competition)",
        "part_instruction": "Nghe chương trình du lịch về cuộc thi trúng thưởng chuyến đi Scotland. Điền không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "audio/de2_part5_de2_audio_5.mp3",
        "image": "",
        "passage": "<strong>HOLIDAY COMPETITION</strong><br>Win a holiday in: Scotland<br>Number of nights: [21] ....................<br>Name of hotel: [22] .................... Hotel<br>At hotel, you can play: [23] ....................<br>Call the travel programme Phone before midnight on: [24] ....................<br>Phone number: [25] ....................",
        "question": "21. Number of nights (Số đêm nghỉ tại khách sạn):",
        "options": [],
        "correct_answer": "3",
        "explanation": {
          "msg": "Xác định số đêm lưu trú trong chuyến đi tại Scotland.",
          "trans_q": "Số đêm được nghỉ trong chuyến đi?",
          "trans_opts": [],
          "clue": "'You can win a fantastic holiday for two in Scotland for three nights!'",
          "why_right": "Đáp án: 3 (hoặc three).",
          "trap": "Điền số 3 cho nhanh và chính xác nhất nha!",
          "vocab": [
            {
              "word": "competition",
              "phonetic": "/ˌkɒmpəˈtɪʃn/",
              "meaning": "cuộc thi"
            }
          ]
        }
      },
      {
        "id": "de2_l_q22",
        "number": 22,
        "part": "Part 5",
        "part_title": "Part 5: Cuộc thi trúng thưởng kỳ nghỉ",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de2_part5_de2_audio_5.mp3",
        "image": "",
        "passage": "<strong>HOLIDAY COMPETITION</strong><br>Win a holiday in: Scotland<br>Number of nights: [21] ....................<br>Name of hotel: [22] .................... Hotel<br>At hotel, you can play: [23] ....................<br>Call the travel programme Phone before midnight on: [24] ....................<br>Phone number: [25] ....................",
        "question": "22. Name of hotel (Tên khách sạn):",
        "options": [],
        "correct_answer": "Falkirk",
        "explanation": {
          "msg": "Tên khách sạn ở Scotland nè!",
          "trans_q": "Tên của khách sạn là gì?",
          "trans_opts": [],
          "clue": "'You will stay at the luxurious Falkirk Hotel, F-A-L-K-I-R-K.'",
          "why_right": "Tên khách sạn là: Falkirk.",
          "trap": "Từ 'Hotel' đã in sẵn trong đề rồi, chỉ cần điền 'Falkirk' thôi nha!",
          "vocab": [
            {
              "word": "stay at",
              "phonetic": "/steɪ æt/",
              "meaning": "lưu trú tại"
            }
          ]
        }
      },
      {
        "id": "de2_l_q23",
        "number": 23,
        "part": "Part 5",
        "part_title": "Part 5: Cuộc thi trúng thưởng kỳ nghỉ",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de2_part5_de2_audio_5.mp3",
        "image": "",
        "passage": "<strong>HOLIDAY COMPETITION</strong><br>Win a holiday in: Scotland<br>Number of nights: [21] ....................<br>Name of hotel: [22] .................... Hotel<br>At hotel, you can play: [23] ....................<br>Call the travel programme Phone before midnight on: [24] ....................<br>Phone number: [25] ....................",
        "question": "23. At hotel, you can play (Ở khách sạn có thể chơi môn thể thao gì?):",
        "options": [],
        "correct_answer": "golf",
        "explanation": {
          "msg": "Môn thể thao đánh gôn ngoài trời!",
          "trans_q": "Tại khách sạn du khách có thể chơi gì?",
          "trans_opts": [],
          "clue": "'The hotel has its own 18-hole golf course where guests can play golf for free.'",
          "why_right": "Môn thể thao: golf.",
          "trap": "Viết đúng chính tả: g-o-l-f.",
          "vocab": [
            {
              "word": "golf",
              "phonetic": "/ɡɒlf/",
              "meaning": "môn thể thao đánh gôn"
            }
          ]
        }
      },
      {
        "id": "de2_l_q24",
        "number": 24,
        "part": "Part 5",
        "part_title": "Part 5: Cuộc thi trúng thưởng kỳ nghỉ",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de2_part5_de2_audio_5.mp3",
        "image": "",
        "passage": "<strong>HOLIDAY COMPETITION</strong><br>Win a holiday in: Scotland<br>Number of nights: [21] ....................<br>Name of hotel: [22] .................... Hotel<br>At hotel, you can play: [23] ....................<br>Call the travel programme Phone before midnight on: [24] ....................<br>Phone number: [25] ....................",
        "question": "24. Phone before midnight on (Gọi điện trước nửa đêm thứ mấy?):",
        "options": [],
        "correct_answer": "Thursday",
        "explanation": {
          "msg": "Hạn chót gọi điện tham gia cuộc thi vào thứ mấy nè?",
          "trans_q": "Cần gọi trước nửa đêm vào thứ mấy?",
          "trans_opts": [],
          "clue": "'To enter the competition, you must phone us before midnight on Thursday.'",
          "why_right": "Thứ Năm: Thursday.",
          "trap": "Nhớ viết hoa chữ cái đầu T nha: Thursday.",
          "vocab": [
            {
              "word": "midnight",
              "phonetic": "/ˈmɪdnaɪt/",
              "meaning": "nửa đêm (12h đêm)"
            }
          ]
        }
      },
      {
        "id": "de2_l_q25",
        "number": 25,
        "part": "Part 5",
        "part_title": "Part 5: Cuộc thi trúng thưởng kỳ nghỉ",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de2_part5_de2_audio_5.mp3",
        "image": "",
        "passage": "<strong>HOLIDAY COMPETITION</strong><br>Win a holiday in: Scotland<br>Number of nights: [21] ....................<br>Name of hotel: [22] .................... Hotel<br>At hotel, you can play: [23] ....................<br>Call the travel programme Phone before midnight on: [24] ....................<br>Phone number: [25] ....................",
        "question": "25. Phone number (Số điện thoại chương trình):",
        "options": [],
        "correct_answer": "0208 66873",
        "explanation": {
          "msg": "Số điện thoại đường dây nóng để dự thi nè!",
          "trans_q": "Số điện thoại là số nào?",
          "trans_opts": [],
          "clue": "'Call us on oh-two-oh-eight, double six, eight-seven-three.'",
          "why_right": "Đáp án: 0208 66873 (hoặc 020866873).",
          "trap": "'Double six' = hai số 6 (66).",
          "vocab": []
        }
      }
    ],
    "difficulty": "medium",
    "level_code": "A2_PLUS",
    "level_title": "Cấp Độ: Trung Bình (A2+ Tiền B1)",
    "difficulty_badge": "🟡 Vừa (A2+)",
    "target_desc": "Mục tiêu: Đạt 16 - 21 câu (6.5 - 8.0 điểm). Tốc độ nói nhanh hơn, xuất hiện bẫy giờ giấc, giá vé sinh viên và đổi ý."
  },
  {
    "id": "de2_doc",
    "exam_num": 2,
    "skill": "reading",
    "skill_vn": "Kỹ năng Đọc",
    "title": "Đề thi thử số 02 - Kỹ năng đọc",
    "duration_minutes": 40,
    "total_questions": 30,
    "total_pts": 30,
    "questions": [
      {
        "id": "de2_r_q1",
        "number": 1,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn (Thời trang toàn cầu)",
        "part_instruction": "Đọc đoạn văn về nhiếp ảnh gia thời trang Gillian Turner-Niles và chọn từ thích hợp nhất (1-8).",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Global fashion<br>Gillian Turner-Niles is a fashion photographer. She (1) ……….. in New York and works in the fashion capitals of the world. You can see her photographs on the (2) ……….. of fashion magazines across the world. Her clients include famous fashion brands Gucci, Dior, Ferragamo, even the sports clothing company Nike. But today she’s (3) ……….. to me by phone from the middle of Sudan. So, what is she doing there? ‘I’m (4) ……….. photographs, of course!’ She explains, ‘But not for Vogue or anyone else. It’s (5) ……….. a holiday. In my business, it’s easy to forget there’s another world out there. And I like looking at clothes in a different way when I travel.’ But in this world of global fashion, people all over the world (6) ……….. the same clothes. The businessman’s suit in Beijing is like the businessman’s suit in Berlin. And jeans and T-shirts are almost a type of uniform these (7) ……….. ‘Yes, I think that’s true in the big international cities,’ Gillian says. ‘But I’m visiting regions in the world with their own (8) ……….. clothes and their own fashions, which have been remained from generation to generation and are very different from clothes of other cultures.’",
        "question": "1. She (1) ……….. in New York and works in the fashion capitals...",
        "options": [
          "lives",
          "stays",
          "exists"
        ],
        "correct_answer": "lives",
        "explanation": {
          "msg": "Đang nói về nơi sinh sống và định cư của Gillian!",
          "trans_q": "Cô ấy (1)... ở New York và làm việc tại các kinh đô thời trang...",
          "trans_opts": [
            "lives (sống, cư trú lâu dài)",
            "stays (ở lại tạm thời)",
            "exists (tồn tại)"
          ],
          "clue": "Đang nói về nơi ở cố định ('lives in New York').",
          "why_right": "'Live in + địa điểm' = sinh sống tại đâu. 'Stay' chỉ là ở trọ ngắn ngày.",
          "trap": "'Exists' mang nghĩa triết học/sinh học là tồn tại, không dùng cho nơi ở thường ngày.",
          "vocab": [
            {
              "word": "live in",
              "phonetic": "/lɪv ɪn/",
              "meaning": "sinh sống tại"
            }
          ]
        }
      },
      {
        "id": "de2_r_q2",
        "number": 2,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Global fashion<br>Gillian Turner-Niles is a fashion photographer. She (1) ……….. in New York and works in the fashion capitals of the world. You can see her photographs on the (2) ……….. of fashion magazines across the world. Her clients include famous fashion brands Gucci, Dior, Ferragamo, even the sports clothing company Nike. But today she’s (3) ……….. to me by phone from the middle of Sudan. So, what is she doing there? ‘I’m (4) ……….. photographs, of course!’ She explains, ‘But not for Vogue or anyone else. It’s (5) ……….. a holiday. In my business, it’s easy to forget there’s another world out there. And I like looking at clothes in a different way when I travel.’ But in this world of global fashion, people all over the world (6) ……….. the same clothes. The businessman’s suit in Beijing is like the businessman’s suit in Berlin. And jeans and T-shirts are almost a type of uniform these (7) ……….. ‘Yes, I think that’s true in the big international cities,’ Gillian says. ‘But I’m visiting regions in the world with their own (8) ……….. clothes and their own fashions, which have been remained from generation to generation and are very different from clothes of other cultures.’",
        "question": "2. You can see her photographs on the (2) ……….. of fashion magazines...",
        "options": [
          "sheets",
          "pages",
          "categories"
        ],
        "correct_answer": "pages",
        "explanation": {
          "msg": "Ảnh chụp xuất hiện trên 'các trang tạp chí'!",
          "trans_q": "Bạn có thể thấy những bức ảnh của cô ấy trên các (2)... của tạp chí thời trang...",
          "trans_opts": [
            "sheets (tấm, ga trải giường)",
            "pages (trang sách, trang báo)",
            "categories (chuyên mục, danh mục)"
          ],
          "clue": "Cụm 'on the pages of fashion magazines' = trên các trang của tạp chí thời trang.",
          "why_right": "Tạp chí thì gồm các trang (pages).",
          "trap": "'Sheets' dùng cho giấy rời (sheet of paper), không dùng cho trang tạp chí đóng quyển.",
          "vocab": [
            {
              "word": "pages of a magazine",
              "phonetic": "/ˈpeɪdʒɪz əv ə ˌmæɡəˈziːn/",
              "meaning": "các trang của cuốn tạp chí"
            }
          ]
        }
      },
      {
        "id": "de2_r_q3",
        "number": 3,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Global fashion<br>Gillian Turner-Niles is a fashion photographer. She (1) ……….. in New York and works in the fashion capitals of the world. You can see her photographs on the (2) ……….. of fashion magazines across the world. Her clients include famous fashion brands Gucci, Dior, Ferragamo, even the sports clothing company Nike. But today she’s (3) ……….. to me by phone from the middle of Sudan. So, what is she doing there? ‘I’m (4) ……….. photographs, of course!’ She explains, ‘But not for Vogue or anyone else. It’s (5) ……….. a holiday. In my business, it’s easy to forget there’s another world out there. And I like looking at clothes in a different way when I travel.’ But in this world of global fashion, people all over the world (6) ……….. the same clothes. The businessman’s suit in Beijing is like the businessman’s suit in Berlin. And jeans and T-shirts are almost a type of uniform these (7) ……….. ‘Yes, I think that’s true in the big international cities,’ Gillian says. ‘But I’m visiting regions in the world with their own (8) ……….. clothes and their own fashions, which have been remained from generation to generation and are very different from clothes of other cultures.’",
        "question": "3. But today she’s (3) ……….. to me by phone from the middle of Sudan.",
        "options": [
          "saying",
          "talking",
          "telling"
        ],
        "correct_answer": "talking",
        "explanation": {
          "msg": "Cấu trúc 'nói chuyện với ai qua điện thoại' nè!",
          "trans_q": "Nhưng hôm nay cô ấy đang (3)... với tôi qua điện thoại từ Sudan.",
          "trans_opts": [
            "saying (nói)",
            "talking (nói chuyện)",
            "telling (kể bảo)"
          ],
          "clue": "Có giới từ 'TO me by phone' -> cấu trúc: 'talk TO someone'!",
          "why_right": "Talk to somebody = nói chuyện với ai. 'Tell' không đi với 'to me', 'say' không đi với 'saying to me by phone'.",
          "trap": "Nhớ công thức: Talk to someone, Tell someone sth, Say that!",
          "vocab": [
            {
              "word": "talk to someone by phone",
              "phonetic": "/tɔːk tuː baɪ fəʊn/",
              "meaning": "nói chuyện với ai qua điện thoại"
            }
          ]
        }
      },
      {
        "id": "de2_r_q4",
        "number": 4,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Global fashion<br>Gillian Turner-Niles is a fashion photographer. She (1) ……….. in New York and works in the fashion capitals of the world. You can see her photographs on the (2) ……….. of fashion magazines across the world. Her clients include famous fashion brands Gucci, Dior, Ferragamo, even the sports clothing company Nike. But today she’s (3) ……….. to me by phone from the middle of Sudan. So, what is she doing there? ‘I’m (4) ……….. photographs, of course!’ She explains, ‘But not for Vogue or anyone else. It’s (5) ……….. a holiday. In my business, it’s easy to forget there’s another world out there. And I like looking at clothes in a different way when I travel.’ But in this world of global fashion, people all over the world (6) ……….. the same clothes. The businessman’s suit in Beijing is like the businessman’s suit in Berlin. And jeans and T-shirts are almost a type of uniform these (7) ……….. ‘Yes, I think that’s true in the big international cities,’ Gillian says. ‘But I’m visiting regions in the world with their own (8) ……….. clothes and their own fashions, which have been remained from generation to generation and are very different from clothes of other cultures.’",
        "question": "4. ‘I’m (4) ……….. photographs, of course!’",
        "options": [
          "using",
          "making",
          "taking"
        ],
        "correct_answer": "taking",
        "explanation": {
          "msg": "Cụm từ chụp ảnh kinh điển trong tiếng Anh nè: Take photographs!",
          "trans_q": "'Đương nhiên là tôi đang (4)... ảnh rồi!'",
          "trans_opts": [
            "using (dùng)",
            "making (làm)",
            "taking (taking photographs = chụp ảnh)"
          ],
          "clue": "Cụm kết hợp cố định: 'take photographs / take photos' = chụp ảnh.",
          "why_right": "Không bao giờ dùng 'make photos' hay 'use photos' khi nói về hành động chụp ảnh!",
          "trap": "Nhiều người dịch tiếng Việt 'làm ảnh' nên chọn nhầm 'making'. Nhớ là 'TAKE photos'!",
          "vocab": [
            {
              "word": "take photographs",
              "phonetic": "/teɪk ˈfəʊtəɡrɑːfs/",
              "meaning": "chụp ảnh"
            }
          ]
        }
      },
      {
        "id": "de2_r_q5",
        "number": 5,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Global fashion<br>Gillian Turner-Niles is a fashion photographer. She (1) ……….. in New York and works in the fashion capitals of the world. You can see her photographs on the (2) ……….. of fashion magazines across the world. Her clients include famous fashion brands Gucci, Dior, Ferragamo, even the sports clothing company Nike. But today she’s (3) ……….. to me by phone from the middle of Sudan. So, what is she doing there? ‘I’m (4) ……….. photographs, of course!’ She explains, ‘But not for Vogue or anyone else. It’s (5) ……….. a holiday. In my business, it’s easy to forget there’s another world out there. And I like looking at clothes in a different way when I travel.’ But in this world of global fashion, people all over the world (6) ……….. the same clothes. The businessman’s suit in Beijing is like the businessman’s suit in Berlin. And jeans and T-shirts are almost a type of uniform these (7) ……….. ‘Yes, I think that’s true in the big international cities,’ Gillian says. ‘But I’m visiting regions in the world with their own (8) ……….. clothes and their own fashions, which have been remained from generation to generation and are very different from clothes of other cultures.’",
        "question": "5. It’s (5) ……….. a holiday.",
        "options": [
          "like",
          "as",
          "same"
        ],
        "correct_answer": "like",
        "explanation": {
          "msg": "Chuyến đi này 'giống như là' một kỳ nghỉ nè!",
          "trans_q": "Chuyến đi này (5)... một kỳ nghỉ vậy.",
          "trans_opts": [
            "like (như là, giống như)",
            "as (như là - chỉ vai trò thực sự)",
            "same (phải có the same as)"
          ],
          "clue": "'It's like a holiday' = Nó tựa như một kỳ nghỉ.",
          "why_right": "Dùng 'like' để so sánh ví von ('như là một kỳ nghỉ' dù thực chất là đi chụp ảnh).",
          "trap": "'As' chỉ dùng khi nó đúng là một kỳ nghỉ chính thức, 'same' phải có mạo từ 'the same'.",
          "vocab": [
            {
              "word": "like",
              "phonetic": "/laɪk/",
              "meaning": "tựa như, giống như"
            }
          ]
        }
      },
      {
        "id": "de2_r_q6",
        "number": 6,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Global fashion<br>Gillian Turner-Niles is a fashion photographer. She (1) ……….. in New York and works in the fashion capitals of the world. You can see her photographs on the (2) ……….. of fashion magazines across the world. Her clients include famous fashion brands Gucci, Dior, Ferragamo, even the sports clothing company Nike. But today she’s (3) ……….. to me by phone from the middle of Sudan. So, what is she doing there? ‘I’m (4) ……….. photographs, of course!’ She explains, ‘But not for Vogue or anyone else. It’s (5) ……….. a holiday. In my business, it’s easy to forget there’s another world out there. And I like looking at clothes in a different way when I travel.’ But in this world of global fashion, people all over the world (6) ……….. the same clothes. The businessman’s suit in Beijing is like the businessman’s suit in Berlin. And jeans and T-shirts are almost a type of uniform these (7) ……….. ‘Yes, I think that’s true in the big international cities,’ Gillian says. ‘But I’m visiting regions in the world with their own (8) ……….. clothes and their own fashions, which have been remained from generation to generation and are very different from clothes of other cultures.’",
        "question": "6. ...people all over the world (6) ……….. the same clothes.",
        "options": [
          "dress",
          "wear",
          "put"
        ],
        "correct_answer": "wear",
        "explanation": {
          "msg": "Mọi người trên khắp thế giới 'mặc' quần áo giống nhau nè!",
          "trans_q": "...mọi người trên khắp thế giới (6)... quần áo giống nhau.",
          "trans_opts": [
            "dress (mặc đồ, dress up)",
            "wear (mặc trang phục gì)",
            "put (phải là put on)"
          ],
          "clue": "Có tân ngữ chỉ trang phục 'the same clothes'. Cấu trúc: 'wear + trang phục'!",
          "why_right": "'Wear the same clothes' = mặc trang phục giống nhau.",
          "trap": "'Dress' không đi trực tiếp với danh từ quần áo (không nói 'dress clothes'). 'Put' phải đi với 'put on'.",
          "vocab": [
            {
              "word": "wear clothes",
              "phonetic": "/weər kləʊðz/",
              "meaning": "mặc quần áo"
            }
          ]
        }
      },
      {
        "id": "de2_r_q7",
        "number": 7,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Global fashion<br>Gillian Turner-Niles is a fashion photographer. She (1) ……….. in New York and works in the fashion capitals of the world. You can see her photographs on the (2) ……….. of fashion magazines across the world. Her clients include famous fashion brands Gucci, Dior, Ferragamo, even the sports clothing company Nike. But today she’s (3) ……….. to me by phone from the middle of Sudan. So, what is she doing there? ‘I’m (4) ……….. photographs, of course!’ She explains, ‘But not for Vogue or anyone else. It’s (5) ……….. a holiday. In my business, it’s easy to forget there’s another world out there. And I like looking at clothes in a different way when I travel.’ But in this world of global fashion, people all over the world (6) ……….. the same clothes. The businessman’s suit in Beijing is like the businessman’s suit in Berlin. And jeans and T-shirts are almost a type of uniform these (7) ……….. ‘Yes, I think that’s true in the big international cities,’ Gillian says. ‘But I’m visiting regions in the world with their own (8) ……….. clothes and their own fashions, which have been remained from generation to generation and are very different from clothes of other cultures.’",
        "question": "7. And jeans and T-shirts are almost a type of uniform these (7) ………..",
        "options": [
          "periods",
          "times",
          "days"
        ],
        "correct_answer": "days",
        "explanation": {
          "msg": "Cụm từ quen thuộc: 'these days' = ngày nay, dạo này!",
          "trans_q": "Và quần jean cùng áo phông gần như là một loại đồng phục trong những ngày (7)... (dạo này).",
          "trans_opts": [
            "periods (giai đoạn)",
            "times (thời đại)",
            "days (these days = dạo này, ngày nay)"
          ],
          "clue": "Cụm thành ngữ cố định: 'these days' = ngày nay, thời nay (= nowadays).",
          "why_right": "Chỉ có 'these days' là cụm từ chuẩn ngữ pháp mang nghĩa thời nay.",
          "trap": "Không ai nói 'these periods' hay 'these times' trong ngữ cảnh này cả.",
          "vocab": [
            {
              "word": "these days",
              "phonetic": "/ðiːz deɪz/",
              "meaning": "ngày nay, dạo này"
            }
          ]
        }
      },
      {
        "id": "de2_r_q8",
        "number": 8,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc đoạn văn và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Global fashion<br>Gillian Turner-Niles is a fashion photographer. She (1) ……….. in New York and works in the fashion capitals of the world. You can see her photographs on the (2) ……….. of fashion magazines across the world. Her clients include famous fashion brands Gucci, Dior, Ferragamo, even the sports clothing company Nike. But today she’s (3) ……….. to me by phone from the middle of Sudan. So, what is she doing there? ‘I’m (4) ……….. photographs, of course!’ She explains, ‘But not for Vogue or anyone else. It’s (5) ……….. a holiday. In my business, it’s easy to forget there’s another world out there. And I like looking at clothes in a different way when I travel.’ But in this world of global fashion, people all over the world (6) ……….. the same clothes. The businessman’s suit in Beijing is like the businessman’s suit in Berlin. And jeans and T-shirts are almost a type of uniform these (7) ……….. ‘Yes, I think that’s true in the big international cities,’ Gillian says. ‘But I’m visiting regions in the world with their own (8) ……….. clothes and their own fashions, which have been remained from generation to generation and are very different from clothes of other cultures.’",
        "question": "8. ...regions in the world with their own (8) ……….. clothes...",
        "options": [
          "traditional",
          "modern",
          "outdated"
        ],
        "correct_answer": "traditional",
        "explanation": {
          "msg": "Trang phục truyền thống lưu truyền từ đời này sang đời khác!",
          "trans_q": "...những vùng trên thế giới có trang phục (8)... riêng của họ...",
          "trans_opts": [
            "traditional (truyền thống)",
            "modern (hiện đại)",
            "outdated (lỗi thời)"
          ],
          "clue": "Vế sau giải thích: '...which have been remained from generation to generation' (được lưu truyền từ thế hệ này sang thế hệ khác)!",
          "why_right": "Lưu truyền qua nhiều thế hệ chính là trang phục TRUYỀN THỐNG ('traditional clothes').",
          "trap": "Không thể là 'modern' (hiện đại) hay 'outdated' (cũ kỹ lỗi mốt) được.",
          "vocab": [
            {
              "word": "traditional clothes",
              "phonetic": "/trəˈdɪʃənl kləʊðz/",
              "meaning": "trang phục truyền thống"
            },
            {
              "word": "generation to generation",
              "phonetic": "/ˌdʒenəˈreɪʃn/",
              "meaning": "từ thế hệ này sang thế hệ khác"
            }
          ]
        }
      },
      {
        "id": "de2_r_q9",
        "number": 9,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo (Notices A-K)",
        "part_instruction": "Xem các biển báo A-K trong ảnh để nối với các câu 9-16.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767110_Reading_2.1.png",
        "passage": "",
        "question": "9. You need to control pets.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "F",
        "explanation": {
          "msg": "Quản lý và kiểm soát thú cưng (chó mèo)!",
          "trans_q": "Bạn cần phải kiểm soát thú cưng.",
          "trans_opts": [],
          "clue": "Biển F ghi: 'DOGS MUST BE KEPT ON A LEAD' (Chó phải luôn được xích/dắt bằng dây).",
          "why_right": "Dogs = thú cưng (pets); kept on a lead (giữ bằng dây xích) = kiểm soát thú cưng (control pets)!",
          "trap": "Lead nghĩa là dây xích dắt chó đi dạo đó!",
          "vocab": [
            {
              "word": "control pets",
              "phonetic": "/kənˈtrəʊl pets/",
              "meaning": "kiểm soát vật nuôi/thú cưng"
            },
            {
              "word": "on a lead",
              "phonetic": "/ɒn ə liːd/",
              "meaning": "buộc/dắt bằng dây xích"
            }
          ]
        }
      },
      {
        "id": "de2_r_q10",
        "number": 10,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767110_Reading_2.1.png",
        "passage": "",
        "question": "10. This company can take you to catch your plane at any time.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "H",
        "explanation": {
          "msg": "Công ty taxi đưa đón sân bay 24/7 nè bạn!",
          "trans_q": "Công ty này có thể chở bạn đi bắt máy bay vào bất kỳ lúc nào.",
          "trans_opts": [],
          "clue": "Biển H ghi: 'Jenni's Airport Taxis (433587) - 24 hours/ 7 days a week' (Taxi sân bay Jenni - Hoạt động 24/7 cả tuần).",
          "why_right": "Airport taxis = chở ra máy bay; 24 hours / 7 days a week = bất kỳ lúc nào (at any time)!",
          "trap": "Biển B chỉ là số điện thoại hỏi tin tức sân bay, không phải công ty chở người đi.",
          "vocab": [
            {
              "word": "catch a plane",
              "phonetic": "/kætʃ ə pleɪn/",
              "meaning": "bắt chuyến bay"
            },
            {
              "word": "24/7",
              "phonetic": "/ˌtwenti fɔː ˈsevn/",
              "meaning": "suốt ngày đêm, bất cứ lúc nào"
            }
          ]
        }
      },
      {
        "id": "de2_r_q11",
        "number": 11,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767110_Reading_2.1.png",
        "passage": "",
        "question": "11. If you need to buy something to wear, this may be the cheapest place to look.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "E",
        "explanation": {
          "msg": "Mua quần áo mặc với giá rẻ nhất thị trấn nè!",
          "trans_q": "Nếu bạn cần mua thứ gì đó để mặc, đây có thể là nơi rẻ nhất để tìm.",
          "trans_opts": [],
          "clue": "Biển E ghi: 'HARRISONS DEPARTMENT STORE - New Season's Jackets - Lowest prices in town' (Áo khoác mùa mới - Giá thấp nhất thị trấn).",
          "why_right": "Jackets = đồ để mặc (something to wear); lowest prices = rẻ nhất (cheapest place)!",
          "trap": "Lowest = Cheapest.",
          "vocab": [
            {
              "word": "lowest prices",
              "phonetic": "/ˈləʊɪst ˈpraɪsɪz/",
              "meaning": "giá rẻ nhất, giá thấp nhất"
            }
          ]
        }
      },
      {
        "id": "de2_r_q12",
        "number": 12,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767110_Reading_2.1.png",
        "passage": "",
        "question": "12. This restaurant always has special meals for children.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "D",
        "explanation": {
          "msg": "Thực đơn đặc biệt dành riêng cho trẻ em nè!",
          "trans_q": "Nhà hàng này luôn có các bữa ăn đặc biệt dành cho trẻ em.",
          "trans_opts": [],
          "clue": "Biển D ghi: 'Ask Your Waiter for Our UNDER-12s' menu' (Hãy hỏi bồi bàn thực đơn dành cho các bạn dưới 12 tuổi).",
          "why_right": "Under-12s (dưới 12 tuổi) = children; menu = các món ăn của nhà hàng!",
          "trap": "Under-12s chính là trẻ em.",
          "vocab": [
            {
              "word": "waiter",
              "phonetic": "/ˈweɪtər/",
              "meaning": "nhân viên bồi bàn"
            },
            {
              "word": "menu",
              "phonetic": "/ˈmenjuː/",
              "meaning": "thực đơn"
            }
          ]
        }
      },
      {
        "id": "de2_r_q13",
        "number": 13,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767110_Reading_2.1.png",
        "passage": "",
        "question": "13. If you need to know about the traffic, you can call this number.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "B",
        "explanation": {
          "msg": "Muốn biết tin tức giao thông trên đường cao tốc thì gọi số nào?",
          "trans_q": "Nếu bạn cần biết về tình hình giao thông, bạn có thể gọi số này.",
          "trans_opts": [],
          "clue": "Biển B ghi: 'Telephone 2222 for motorway news...' (Gọi số 2222 để biết tin tức đường cao tốc).",
          "why_right": "Motorway news = tin tức đường cao tốc/giao thông (traffic); telephone 2222 = call this number!",
          "trap": "Motorway là đường cao tốc (giao thông).",
          "vocab": [
            {
              "word": "motorway",
              "phonetic": "/ˈməʊtəweɪ/",
              "meaning": "đường cao tốc"
            },
            {
              "word": "traffic",
              "phonetic": "/ˈtræfɪk/",
              "meaning": "giao thông"
            }
          ]
        }
      },
      {
        "id": "de2_r_q14",
        "number": 14,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767110_Reading_2.1.png",
        "passage": "",
        "question": "14. You can have a drink and stay a few nights here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "I",
        "explanation": {
          "msg": "Vừa uống nước vừa thuê phòng trọ ngủ lại qua đêm!",
          "trans_q": "Bạn có thể uống nước và ở lại vài đêm tại đây.",
          "trans_opts": [],
          "clue": "Biển I ghi: 'The Spotted Cow Rooms and Pub' (Quán rượu và Phòng nghỉ The Spotted Cow).",
          "why_right": "Pub = nơi uống rượu bia giải khát (have a drink); Rooms = phòng trọ để ngủ qua đêm (stay a few nights)!",
          "trap": "Pub là quán rượu/nước giải khát kiểu Anh.",
          "vocab": [
            {
              "word": "pub",
              "phonetic": "/pʌb/",
              "meaning": "quán rượu, quán nước"
            },
            {
              "word": "rooms",
              "phonetic": "/ruːmz/",
              "meaning": "phòng nghỉ cho khách trọ"
            }
          ]
        }
      },
      {
        "id": "de2_r_q15",
        "number": 15,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767110_Reading_2.1.png",
        "passage": "",
        "question": "15. You can ask for information.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "K",
        "explanation": {
          "msg": "Quầy trợ giúp / hướng dẫn thông tin mở cửa!",
          "trans_q": "Bạn có thể hỏi xin thông tin tại đây.",
          "trans_opts": [],
          "clue": "Biển K ghi: 'Help Desk Open' (Bàn trợ giúp đang mở cửa).",
          "why_right": "Help Desk = quầy lễ tân / trợ giúp giải đáp thông tin cho khách hàng.",
          "trap": "Rất ngắn gọn: Help Desk = Nơi hỏi thông tin.",
          "vocab": [
            {
              "word": "help desk",
              "phonetic": "/help desk/",
              "meaning": "quầy trợ giúp, giải đáp thắc mắc"
            }
          ]
        }
      },
      {
        "id": "de2_r_q16",
        "number": 16,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767110_Reading_2.1.png",
        "passage": "",
        "question": "16. This tells you how to clean your clothes.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "A",
        "explanation": {
          "msg": "Nhãn hướng dẫn giặt đồ quần áo nè bạn!",
          "trans_q": "Biển này chỉ dẫn bạn cách làm sạch quần áo.",
          "trans_opts": [],
          "clue": "Biển A ghi: 'Colour may fade - Wash dark colours separately' (Màu có thể bị phai - Hãy giặt riêng quần áo tối màu).",
          "why_right": "Wash = giặt sạch (clean clothes); wash separately = chỉ dẫn cách giặt!",
          "trap": "Quần áo tối màu phải giặt riêng kẻo phai màu sang đồ khác đó.",
          "vocab": [
            {
              "word": "fade",
              "phonetic": "/feɪd/",
              "meaning": "phai màu"
            },
            {
              "word": "wash separately",
              "phonetic": "/wɒʃ ˈsepərtli/",
              "meaning": "giặt riêng ra"
            }
          ]
        }
      },
      {
        "id": "de2_r_q17",
        "number": 17,
        "part": "Part 3",
        "part_title": "Part 3: Đọc tờ rơi & email điền ghi chú của Nguyệt",
        "part_instruction": "Đọc tờ quảng cáo học Taekwondo và email của Thư gửi Nguyệt. Điền không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767119_Reading_2.2.png",
        "passage": "<strong>NGUYET’s Notes</strong><br>Course with Thu<br>Sports course: Taekwondo<br>Level: (17) [.....]<br>Time: (18) [.....]<br>Day: (19) [.....]<br>Monthly price: (20) [.....]<br>Book course on: (21) [.....]<br>Thu’s phone number: (22) [.....]<br>Place to take the uniform: (23) [.....]",
        "question": "17. Level (Cấp độ lớp học Taekwondo):",
        "options": [],
        "correct_answer": "Beginners",
        "explanation": {
          "msg": "Người chưa từng học võ bao giờ nên đăng ký lớp trình độ nào?",
          "trans_q": "Cấp độ lớp học là gì?",
          "trans_opts": [],
          "clue": "Thư viết: 'We should register for the easiest class because I have never done any courses before.' Tờ rơi có 2 cấp: Beginners và Improvers.",
          "why_right": "Lớp dễ nhất cho người mới bắt đầu chính là: Beginners!",
          "trap": "Đừng điền Improvers nha vì Improvers là lớp nâng cao cho người đã biết chút ít rồi.",
          "vocab": [
            {
              "word": "beginners",
              "phonetic": "/bɪˈɡɪnəz/",
              "meaning": "người mới bắt đầu"
            },
            {
              "word": "easiest class",
              "phonetic": "/ˈiːziɪst klɑːs/",
              "meaning": "lớp học dễ nhất"
            }
          ]
        }
      },
      {
        "id": "de2_r_q18",
        "number": 18,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Nguyệt",
        "part_instruction": "Đọc tờ rơi và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767119_Reading_2.2.png",
        "passage": "<strong>NGUYET’s Notes</strong><br>Course with Thu<br>Sports course: Taekwondo<br>Level: (17) [.....]<br>Time: (18) [.....]<br>Day: (19) [.....]<br>Monthly price: (20) [.....]<br>Book course on: (21) [.....]<br>Thu’s phone number: (22) [.....]<br>Place to take the uniform: (23) [.....]",
        "question": "18. Time (Giờ học):",
        "options": [],
        "correct_answer": "4.30 p.m.",
        "explanation": {
          "msg": "Tờ rơi có 2 khung giờ: 4.30 p.m. và 5.50 p.m. Thư bảo thích giờ nào hơn nè?",
          "trans_q": "Giờ học là lúc mấy giờ?",
          "trans_opts": [],
          "clue": "Thư bảo: 'I prefer the earlier time at weekends...' (Tôi thích khung giờ sớm hơn vào cuối tuần).",
          "why_right": "Giữa 4.30 và 5.50 thì giờ sớm hơn là: 4.30 p.m. (hoặc 4:30 p.m. / 4.30).",
          "trap": "Earlier = sớm hơn. 4h30 sớm hơn 5h50!",
          "vocab": [
            {
              "word": "earlier time",
              "phonetic": "/ˈɜːliər taɪm/",
              "meaning": "khung giờ sớm hơn"
            }
          ]
        }
      },
      {
        "id": "de2_r_q19",
        "number": 19,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Nguyệt",
        "part_instruction": "Đọc tờ rơi và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767119_Reading_2.2.png",
        "passage": "<strong>NGUYET’s Notes</strong><br>Course with Thu<br>Sports course: Taekwondo<br>Level: (17) [.....]<br>Time: (18) [.....]<br>Day: (19) [.....]<br>Monthly price: (20) [.....]<br>Book course on: (21) [.....]<br>Thu’s phone number: (22) [.....]<br>Place to take the uniform: (23) [.....]",
        "question": "19. Day (Học vào thứ mấy?):",
        "options": [],
        "correct_answer": "Saturday",
        "explanation": {
          "msg": "Tờ rơi có 2 ngày: Tuesday hoặc Saturday. Thư chọn ngày nào nè?",
          "trans_q": "Học vào ngày nào trong tuần?",
          "trans_opts": [],
          "clue": "Thư giải thích: '...at weekends... as I have to study during the weekdays' (học vào cuối tuần vì ngày thường mình bận học).",
          "why_right": "Ngày cuối tuần (weekend) trong 2 lựa chọn là: Saturday (Thứ Bảy)!",
          "trap": "Tuesday là ngày thường (weekday) Thư bận học nên loại.",
          "vocab": [
            {
              "word": "weekends",
              "phonetic": "/ˌwiːkˈendz/",
              "meaning": "cuối tuần (thứ 7, chủ nhật)"
            },
            {
              "word": "weekdays",
              "phonetic": "/ˈwiːkdeɪz/",
              "meaning": "ngày trong tuần (từ thứ 2 đến thứ 6)"
            }
          ]
        }
      },
      {
        "id": "de2_r_q20",
        "number": 20,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Nguyệt",
        "part_instruction": "Đọc tờ rơi và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767119_Reading_2.2.png",
        "passage": "<strong>NGUYET’s Notes</strong><br>Course with Thu<br>Sports course: Taekwondo<br>Level: (17) [.....]<br>Time: (18) [.....]<br>Day: (19) [.....]<br>Monthly price: (20) [.....]<br>Book course on: (21) [.....]<br>Thu’s phone number: (22) [.....]<br>Place to take the uniform: (23) [.....]",
        "question": "20. Monthly price (Học phí mỗi tháng của lớp Beginners):",
        "options": [],
        "correct_answer": "200.000 VND",
        "explanation": {
          "msg": "Xem biểu giá học phí trên poster!",
          "trans_q": "Giá học phí mỗi tháng là bao nhiêu?",
          "trans_opts": [],
          "clue": "Poster ghi rõ: 'Beginners: 200.000 VND' và 'Improvers: 250.000 VND'.",
          "why_right": "Vì chọn lớp Beginners nên học phí là: 200.000 VND (hoặc 200,000 VND / 200000 VND).",
          "trap": "Đừng nhìn nhầm sang giá 250.000 của lớp Improvers nha!",
          "vocab": [
            {
              "word": "monthly price",
              "phonetic": "/ˈmʌnθli praɪs/",
              "meaning": "giá theo tháng"
            }
          ]
        }
      },
      {
        "id": "de2_r_q21",
        "number": 21,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Nguyệt",
        "part_instruction": "Đọc tờ rơi và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767119_Reading_2.2.png",
        "passage": "<strong>NGUYET’s Notes</strong><br>Course with Thu<br>Sports course: Taekwondo<br>Level: (17) [.....]<br>Time: (18) [.....]<br>Day: (19) [.....]<br>Monthly price: (20) [.....]<br>Book course on: (21) [.....]<br>Thu’s phone number: (22) [.....]<br>Place to take the uniform: (23) [.....]",
        "question": "21. Book course on (Ngày đăng ký khóa học):",
        "options": [],
        "correct_answer": "Thursday",
        "explanation": {
          "msg": "Câu đố suy luận ngày siêu thông minh cho bạn nè!",
          "trans_q": "Đăng ký khóa học vào thứ mấy?",
          "trans_opts": [],
          "clue": "Thư viết email: '...as TODAY, WEDNESDAY, I am in English class... I'll book for both of us TOMORROW.'",
          "why_right": "Hôm nay (today) là Thứ Tư (Wednesday), Thư bảo ngày mai (tomorrow) sẽ đăng ký -> Ngày mai chính là Thứ Năm: Thursday!",
          "trap": "Nhiều bạn thấy chữ Wednesday là điền ngay là sai nhé, Thư bảo ngày mai mới đăng ký ('book tomorrow')!",
          "vocab": [
            {
              "word": "tomorrow",
              "phonetic": "/təˈmɒrəʊ/",
              "meaning": "ngày mai"
            }
          ]
        }
      },
      {
        "id": "de2_r_q22",
        "number": 22,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Nguyệt",
        "part_instruction": "Đọc tờ rơi và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767119_Reading_2.2.png",
        "passage": "<strong>NGUYET’s Notes</strong><br>Course with Thu<br>Sports course: Taekwondo<br>Level: (17) [.....]<br>Time: (18) [.....]<br>Day: (19) [.....]<br>Monthly price: (20) [.....]<br>Book course on: (21) [.....]<br>Thu’s phone number: (22) [.....]<br>Place to take the uniform: (23) [.....]",
        "question": "22. Thu’s phone number (Số điện thoại của Thư):",
        "options": [],
        "correct_answer": "0963888912",
        "explanation": {
          "msg": "Tìm số điện thoại của bạn Thư trong email!",
          "trans_q": "Số điện thoại của Thư là gì?",
          "trans_opts": [],
          "clue": "Thư ghi cuối email: 'My phone number is 0963888912 - call me before my booking...'",
          "why_right": "Điền chính xác số điện thoại của Thư: 0963888912.",
          "trap": "Trên poster có số 02083876345 là số của trung tâm võ thuật, còn câu hỏi hỏi số của THƯ (Thu's phone number)!",
          "vocab": []
        }
      },
      {
        "id": "de2_r_q23",
        "number": 23,
        "part": "Part 3",
        "part_title": "Part 3: Điền ghi chú của Nguyệt",
        "part_instruction": "Đọc tờ rơi và email để điền thông tin.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767119_Reading_2.2.png",
        "passage": "<strong>NGUYET’s Notes</strong><br>Course with Thu<br>Sports course: Taekwondo<br>Level: (17) [.....]<br>Time: (18) [.....]<br>Day: (19) [.....]<br>Monthly price: (20) [.....]<br>Book course on: (21) [.....]<br>Thu’s phone number: (22) [.....]<br>Place to take the uniform: (23) [.....]",
        "question": "23. Place to take the uniform (Nơi nhận võ phục):",
        "options": [],
        "correct_answer": "reception desk",
        "explanation": {
          "msg": "Đến đâu để nhận bộ đồng phục võ Taekwondo nè?",
          "trans_q": "Địa điểm nhận võ phục ở đâu?",
          "trans_opts": [],
          "clue": "Poster dặn: 'Get a uniform at the reception desk before the first lesson.'",
          "why_right": "Đáp án: reception desk (hoặc the reception desk).",
          "trap": "Reception desk = bàn lễ tân.",
          "vocab": [
            {
              "word": "reception desk",
              "phonetic": "/rɪˈsepʃn desk/",
              "meaning": "bàn lễ tân, bàn đón tiếp"
            },
            {
              "word": "uniform",
              "phonetic": "/ˈjuːnɪfɔːm/",
              "meaning": "đồng phục, võ phục"
            }
          ]
        }
      },
      {
        "id": "de2_r_q24",
        "number": 24,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản (Thay đổi giao thông tại bệnh viện)",
        "part_instruction": "Đọc bản thông báo về việc thay đổi quy định bãi đỗ xe và giao thông tại bệnh viện. Chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "The hospital is always trying to cut its carbon footprint...",
        "question": "24. According to the rules, staff can only park in Car Park A at noon if",
        "options": [
          "they have a blue card.",
          "there are 3 people in the car.",
          "they stay for more than 8 hours."
        ],
        "correct_answer": "there are 3 people in the car.",
        "explanation": {
          "msg": "Điều kiện để nhân viên được đỗ xe ở bãi A vào buổi trưa!",
          "trans_q": "Theo quy định, nhân viên chỉ có thể đỗ xe ở bãi A vào buổi trưa nếu:",
          "trans_opts": [
            "họ có thẻ xanh (blue card)",
            "trên xe có từ 3 người trở lên",
            "họ ở lại hơn 8 tiếng"
          ],
          "clue": "Đoạn 2: '...to encourage car sharing, it will only be available to cars containing three passengers or more. This rule will be in place between 7 a.m. and 6 p.m.' (Buổi trưa noon nằm trong khung 7h-18h).",
          "why_right": "Xe phải chở từ 3 người trở lên ('three passengers or more' = 3 people in the car).",
          "trap": "Thẻ xanh (blue card) là dành cho bãi B, không phải bãi A.",
          "vocab": [
            {
              "word": "car sharing",
              "phonetic": "/kɑː ˈʃeərɪŋ/",
              "meaning": "đi chung xe ô tô để bảo vệ môi trường"
            },
            {
              "word": "passenger",
              "phonetic": "/ˈpæsɪndʒər/",
              "meaning": "hành khách trên xe"
            }
          ]
        }
      },
      {
        "id": "de2_r_q25",
        "number": 25,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "25. The cost to park in Car Park A for 3 hours will be",
        "options": [
          "£1.",
          "£3.",
          "£5."
        ],
        "correct_answer": "£3.",
        "explanation": {
          "msg": "Tính tiền gửi xe bãi A trong 3 tiếng nè!",
          "trans_q": "Chi phí đỗ xe ở bãi A trong 3 tiếng là bao nhiêu?",
          "trans_opts": [
            "£1",
            "£3",
            "£5"
          ],
          "clue": "Đoạn 2: 'The parking fee will remain at the current price of £1 an hour up to a maximum of £5 per day.'",
          "why_right": "1 tiếng = £1, vậy 3 tiếng = 3 x £1 = £3!",
          "trap": "£5 là mức trần tối đa cả ngày (maximum per day), không phải phí cho 3 tiếng.",
          "vocab": [
            {
              "word": "parking fee",
              "phonetic": "/ˈpɑːkɪŋ fiː/",
              "meaning": "phí đỗ xe"
            },
            {
              "word": "maximum",
              "phonetic": "/ˈmæksɪməm/",
              "meaning": "tối đa"
            }
          ]
        }
      },
      {
        "id": "de2_r_q26",
        "number": 26,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "26. To find people to share a car, staff should",
        "options": [
          "go online.",
          "speak to the manager.",
          "visit the HR department."
        ],
        "correct_answer": "go online.",
        "explanation": {
          "msg": "Tìm bạn đi chung xe bằng cách nào yêu?",
          "trans_q": "Để tìm người đi chung xe, nhân viên nên:",
          "trans_opts": [
            "lên mạng (truy cập website)",
            "nói chuyện với quản lý",
            "đến phòng nhân sự (HR)"
          ],
          "clue": "Đoạn 2: '...please click on the link on the human resources page of the hospital website.'",
          "why_right": "Nhấp vào đường link trên website bệnh viện chính là lên mạng (go online)!",
          "trap": "Trang web của phòng nhân sự là trang web online, không phải đi đến tận phòng nhân sự gặp trực tiếp đâu.",
          "vocab": [
            {
              "word": "go online",
              "phonetic": "/ɡəʊ ˈɒnlaɪn/",
              "meaning": "lên mạng internet, truy cập website"
            }
          ]
        }
      },
      {
        "id": "de2_r_q27",
        "number": 27,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "27. In the past, Car Park C was open to",
        "options": [
          "the hospital’s staff.",
          "the patients.",
          "the visitors."
        ],
        "correct_answer": "the hospital’s staff.",
        "explanation": {
          "msg": "Chú ý cụm từ 'IN THE PAST' (trong quá khứ / trước đây).",
          "trans_q": "Trước đây, bãi đỗ xe C mở cửa cho ai?",
          "trans_opts": [
            "nhân viên bệnh viện",
            "bệnh nhân",
            "khách đến thăm"
          ],
          "clue": "Đoạn 3: 'Car Park C, previously a staff-only car park...'",
          "why_right": "Previously = in the past; staff-only = chỉ dành riêng cho nhân viên bệnh viện (the hospital's staff)!",
          "trap": "Sau ngày 1/4 thì khách thăm mới được vào, câu hỏi hỏi 'Trong quá khứ'!",
          "vocab": [
            {
              "word": "previously",
              "phonetic": "/ˈpriːviəsli/",
              "meaning": "trước đây, trước đó (= in the past)"
            }
          ]
        }
      },
      {
        "id": "de2_r_q28",
        "number": 28,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "28. After April 1st, Car Park C will be for",
        "options": [
          "staff only.",
          "visitors only.",
          "staff and visitors."
        ],
        "correct_answer": "staff and visitors.",
        "explanation": {
          "msg": "Sau ngày 1 tháng 4 thì bãi C dành cho những ai nè?",
          "trans_q": "Sau ngày 1 tháng 4, bãi đỗ xe C sẽ dành cho:",
          "trans_opts": [
            "chỉ nhân viên",
            "chỉ khách thăm",
            "cả nhân viên và khách thăm"
          ],
          "clue": "Đoạn 3: 'Car Park C, previously a staff-only car park, will now ALSO be open to visitors...'",
          "why_right": "'Will now ALSO be open to visitors' = Vốn dĩ là của nhân viên, nay mở thêm cho cả khách -> Cả nhân viên và khách (staff and visitors)!",
          "trap": "Chữ 'also' mang nghĩa là thêm vào, chứ không đuổi nhân viên đi.",
          "vocab": [
            {
              "word": "visitors",
              "phonetic": "/ˈvɪzɪtəz/",
              "meaning": "khách đến thăm"
            }
          ]
        }
      },
      {
        "id": "de2_r_q29",
        "number": 29,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "29. The cost to park in Car Park C for 6 hours will be",
        "options": [
          "£2.",
          "£11.",
          "£12."
        ],
        "correct_answer": "£11.",
        "explanation": {
          "msg": "Bài toán cộng tiền gửi xe bãi C trong 6 tiếng!",
          "trans_q": "Chi phí đỗ xe ở bãi C trong 6 tiếng là bao nhiêu?",
          "trans_opts": [
            "£2",
            "£11",
            "£12"
          ],
          "clue": "Đoạn 3: '£2/hour up to 5 hours, and £1 an hour after that.'",
          "why_right": "Tính toán: 5 tiếng đầu x £2 = £10. Còn lại 1 tiếng sau x £1 = £1. Tổng cộng: 10 + 1 = £11!",
          "trap": "Nếu tính nhầm 6 x 2 = 12 là dính bẫy phương án C ngay!",
          "vocab": [
            {
              "word": "after that",
              "phonetic": "/ˈɑːftər ðæt/",
              "meaning": "sau đó"
            }
          ]
        }
      },
      {
        "id": "de2_r_q30",
        "number": 30,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn A, B hoặc C.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "30. A member of staff who does not have a blue card can park in",
        "options": [
          "Car Park A, C, E.",
          "Car Park C, D, E.",
          "Car Park A, C, D."
        ],
        "correct_answer": "Car Park A, C, E.",
        "explanation": {
          "msg": "Loại trừ bãi đỗ xe không được đỗ!",
          "trans_q": "Một nhân viên không có thẻ xanh có thể đỗ xe ở bãi nào?",
          "trans_opts": [
            "Bãi A, C, E",
            "Bãi C, D, E",
            "Bãi A, C, D"
          ],
          "clue": "Bãi B: Chỉ dành cho người có thẻ xanh (blue card). Bãi D: ĐÃ ĐÓNG CỬA ('Car Park D will no longer be in use') để làm bãi xe buýt và nhà để xe đạp.",
          "why_right": "Vì bãi B cấm người không có thẻ xanh, bãi D đã bị dỡ bỏ, nên các bãi được đỗ chỉ còn là A, C, E!",
          "trap": "Cứ thấy phương án nào có bãi D là loại ngay vì bãi D không còn hoạt động nữa!",
          "vocab": [
            {
              "word": "no longer in use",
              "phonetic": "/nəʊ ˈlɒŋɡər ɪn juːs/",
              "meaning": "không còn được sử dụng nữa"
            }
          ]
        }
      }
    ],
    "difficulty": "medium",
    "level_code": "A2_PLUS",
    "level_title": "Cấp Độ: Trung Bình (A2+ Tiền B1)",
    "difficulty_badge": "🟡 Vừa (A2+)",
    "target_desc": "Mục tiêu: Đạt 18 - 24 câu (6.0 - 8.0 điểm). Đề thi có bài đọc về Taekwondo, cắt giảm khí thải bệnh viện và quy định đỗ xe."
  },
  {
    "id": "de3_nghe",
    "exam_num": 3,
    "skill": "listening",
    "skill_vn": "Kỹ năng Nghe",
    "title": "Đề thi thử số 03 - Kỹ năng nghe",
    "duration_minutes": 25,
    "total_questions": 25,
    "total_pts": 25,
    "questions": [
      {
        "id": "de3_l_q1",
        "number": 1,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_part1_de3_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "1. How does the speaker get to work?",
        "options": [
          "He drives to work",
          "He walks",
          "He takes a bus"
        ],
        "correct_answer": "He takes a bus",
        "explanation": {
          "msg": "Chào mừng bạn đến với Đề số 3 nhé! Lắng nghe phương tiện đi làm của người nói nè!",
          "trans_q": "Người nói đi làm bằng phương tiện gì?",
          "trans_opts": [
            "Anh ấy lái ô tô đi làm",
            "Anh ấy đi bộ",
            "Anh ấy đi xe buýt"
          ],
          "clue": "Người nói kể: 'Usually I wake up at 7 o'clock. I get on a bus at 8 o'clock and arrive at work at 9.'",
          "why_right": "'Get on a bus' = lên xe buýt đi làm -> He takes a bus!",
          "trap": "Sau giờ làm anh ấy đi dạo trong công viên ('walk through the park with my wife'), đừng nhầm sang đi bộ đi làm!",
          "vocab": [
            {
              "word": "get on a bus",
              "phonetic": "/ɡet ɒn ə bʌs/",
              "meaning": "lên xe buýt, đi xe buýt"
            },
            {
              "word": "arrive at work",
              "phonetic": "/əˈraɪv æt wɜːk/",
              "meaning": "đến chỗ làm"
            }
          ]
        }
      },
      {
        "id": "de3_l_q2",
        "number": 2,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_part1_de3_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "2. What is on sale?",
        "options": [
          "Pets",
          "Markets",
          "Vehicles"
        ],
        "correct_answer": "Vehicles",
        "explanation": {
          "msg": "Cửa hàng Bunny Motors đang giảm giá mặt hàng gì yêu?",
          "trans_q": "Mặt hàng gì đang được bán khuyến mãi giảm giá?",
          "trans_opts": [
            "Pets (Thú cưng)",
            "Markets (Chợ)",
            "Vehicles (Phương tiện giao thông / Xe cộ)"
          ],
          "clue": "Quảng cáo: 'Hop on down to Bunny Motors... the fastest and most expensive cars on the market. Save up to 50% on the purchase of a new automobile.'",
          "why_right": "Cars và automobile đều là phương tiện giao thông (Vehicles)!",
          "trap": "Tên đại lý là 'Bunny' (chú thỏ) nhưng họ bán xe ô tô chứ không bán thú cưng (pets) đâu!",
          "vocab": [
            {
              "word": "vehicle",
              "phonetic": "/ˈviːəkl/",
              "meaning": "phương tiện giao thông (ô tô, xe máy...)"
            },
            {
              "word": "automobile / car",
              "phonetic": "/ˈɔːtəməbiːl/",
              "meaning": "xe hơi, ô tô"
            }
          ]
        }
      },
      {
        "id": "de3_l_q3",
        "number": 3,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_part1_de3_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "3. How long has the speaker been studying judo?",
        "options": [
          "Over ten years",
          "Since he was ten",
          "Before he was ten"
        ],
        "correct_answer": "Over ten years",
        "explanation": {
          "msg": "Thời gian tập võ judo nè!",
          "trans_q": "Người nói đã học võ judo được bao lâu rồi?",
          "trans_opts": [
            "Hơn mười năm (Over ten years)",
            "Từ khi anh ấy 10 tuổi",
            "Trước khi anh ấy 10 tuổi"
          ],
          "clue": "Võ sĩ nói ngay câu mở đầu: 'I have been studying judo for OVER TEN YEARS.'",
          "why_right": "Khẳng định trực tiếp 'for over ten years' = hơn 10 năm.",
          "trap": "Coi chừng nghe thấy 'ten' lại chọn nhầm 'since he was ten' (từ năm 10 tuổi)!",
          "vocab": [
            {
              "word": "judo",
              "phonetic": "/ˈdʒuːdəʊ/",
              "meaning": "môn võ judo (nhu đạo)"
            },
            {
              "word": "opponent",
              "phonetic": "/əˈpəʊnənt/",
              "meaning": "đối thủ thi đấu"
            }
          ]
        }
      },
      {
        "id": "de3_l_q4",
        "number": 4,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_part1_de3_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "4. What does the speaker NOT have experience doing?",
        "options": [
          "Sweeping",
          "Cooking",
          "Watering"
        ],
        "correct_answer": "Cooking",
        "explanation": {
          "msg": "Chú ý từ 'NOT': Xác định công việc mà nhân vật CHƯA TỪNG có kinh nghiệm làm.",
          "trans_q": "Người nói KHÔNG có kinh nghiệm làm công việc gì?",
          "trans_opts": [
            "Sweeping (Quét dọn sàn)",
            "Cooking (Nấu ăn)",
            "Watering (Tưới cây)"
          ],
          "clue": "Cô gái liệt kê: 'My duties included watering plants, sweeping floors, and serving customers in a restaurant.'",
          "why_right": "Cô ấy đã từng tưới cây (watering), quét sàn (sweeping), phục vụ bàn (serving), hoàn toàn KHÔNG nhắc tới việc nấu ăn (Cooking)!",
          "trap": "Làm ở nhà hàng nhưng là phục vụ khách ('serving customers') chứ không phải làm đầu bếp nấu nướng.",
          "vocab": [
            {
              "word": "sweep floors",
              "phonetic": "/swiːp flɔːz/",
              "meaning": "quét nhà / quét sàn"
            },
            {
              "word": "water plants",
              "phonetic": "/ˈwɔːtər plɑːnts/",
              "meaning": "tưới cây"
            }
          ]
        }
      },
      {
        "id": "de3_l_q5",
        "number": 5,
        "part": "Part 1",
        "part_title": "Part 1: 5 Thông báo / Lời dặn ngắn",
        "part_instruction": "Nghe 5 thông báo ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_part1_de3_audio_1.mp3",
        "image": "",
        "passage": "",
        "question": "5. Who do you think this ad is for?",
        "options": [
          "People who find it difficult to relax.",
          "People who are relaxed.",
          "People who have lots of energy."
        ],
        "correct_answer": "People who find it difficult to relax.",
        "explanation": {
          "msg": "Xác định đối tượng học viên mà lớp học yoga hướng tới.",
          "trans_q": "Bạn nghĩ quảng cáo này dành cho ai?",
          "trans_opts": [
            "Những người cảm thấy khó thư giãn (hay bị căng thẳng, stress)",
            "Những người vốn đã rất thư thái",
            "Những người có dồi dào năng lượng"
          ],
          "clue": "Quảng cáo hỏi: 'Do you find it difficult to relax? Are you always stressed? If so, the answer to your problem is yoga.'",
          "why_right": "Khóa học yoga dành cho những người hay bị căng thẳng, khó thư giãn ('find it difficult to relax').",
          "trap": "Tập yoga xong mới có năng lượng ('give you more energy'), chứ đối tượng ban đầu là người đang stress.",
          "vocab": [
            {
              "word": "difficult to relax",
              "phonetic": "/ˈdɪfɪkəlt tuː rɪˈlæks/",
              "meaning": "khó thư giãn, khó thả lỏng"
            },
            {
              "word": "stressed",
              "phonetic": "/strest/",
              "meaning": "căng thẳng, mệt mỏi đầu óc"
            }
          ]
        }
      },
      {
        "id": "de3_l_q6",
        "number": 6,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_p3_P2-Test 03.mp3",
        "image": "",
        "passage": "",
        "question": "6. What’s the weather like for Jack’s holiday?",
        "options": [
          "rainy",
          "sunny",
          "snowy"
        ],
        "correct_answer": "sunny",
        "explanation": {
          "msg": "Thời tiết trong kỳ nghỉ của Jack!",
          "trans_q": "Thời tiết trong kỳ nghỉ của Jack như thế nào?",
          "trans_opts": [
            "rainy (mưa)",
            "sunny (nắng ấm)",
            "snowy (có tuyết rơi)"
          ],
          "clue": "Jack hào hứng: 'It was wonderful! The sun was shining every single day.'",
          "why_right": "Mặt trời chiếu sáng suốt cả ngày -> Trời nắng đẹp (sunny)!",
          "trap": "Có thể người hỏi lo trời mưa hoặc tuyết, nhưng Jack khẳng định là sunny.",
          "vocab": [
            {
              "word": "sunny",
              "phonetic": "/ˈsʌni/",
              "meaning": "trời nắng đẹp"
            }
          ]
        }
      },
      {
        "id": "de3_l_q7",
        "number": 7,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_p3_P2-Test 03.mp3",
        "image": "",
        "passage": "",
        "question": "7. What will they have for dinner?",
        "options": [
          "pizzas",
          "spaghetti",
          "fish and chips"
        ],
        "correct_answer": "spaghetti",
        "explanation": {
          "msg": "Món ăn tối hôm nay là gì nè bạn?",
          "trans_q": "Họ sẽ ăn món gì cho bữa tối?",
          "trans_opts": [
            "pizzas (bánh pizza)",
            "spaghetti (mì Ý)",
            "fish and chips (cá và khoai tây chiên)"
          ],
          "clue": "Người mẹ bảo: 'We had pizza yesterday. Let's make some spaghetti tonight.' - 'Great idea!'",
          "why_right": "Họ chốt nấu mì Ý spaghetti cho tối nay ('make some spaghetti tonight').",
          "trap": "Pizza là món đã ăn hôm qua rồi (yesterday), đừng chọn nhầm!",
          "vocab": [
            {
              "word": "spaghetti",
              "phonetic": "/spəˈɡeti/",
              "meaning": "mì Ý sốt thịt bò"
            }
          ]
        }
      },
      {
        "id": "de3_l_q8",
        "number": 8,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_p3_P2-Test 03.mp3",
        "image": "",
        "passage": "",
        "question": "8. Which room will the meeting be in?",
        "options": [
          "8",
          "18",
          "80"
        ],
        "correct_answer": "18",
        "explanation": {
          "msg": "Lại là bài toán phân biệt số đếm -teen và -ty nè!",
          "trans_q": "Cuộc họp sẽ diễn ra ở phòng số mấy?",
          "trans_opts": [
            "Phòng số 8",
            "Phòng số 18",
            "Phòng số 80"
          ],
          "clue": "Thông báo: 'The meeting has been moved to room eighteen (18) on the first floor.'",
          "why_right": "Eighteen (18) có trọng âm rơi vào âm cuối 'teen' kéo dài.",
          "trap": "Eighty (80) nhấn âm đầu, còn Eighteen (18) nhấn đuôi. Chú ý nghe kỹ âm đuôi 'teen'!",
          "vocab": [
            {
              "word": "eighteen",
              "phonetic": "/ˌeɪˈtiːn/",
              "meaning": "số 18"
            }
          ]
        }
      },
      {
        "id": "de3_l_q9",
        "number": 9,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_p3_P2-Test 03.mp3",
        "image": "",
        "passage": "",
        "question": "9. Where are Cindy’s trainers now?",
        "options": [
          "in the car",
          "on the window",
          "under the stairs"
        ],
        "correct_answer": "under the stairs",
        "explanation": {
          "msg": "Tìm đôi giày thể thao (trainers) của Cindy xem đang nằm ở xó nào nè!",
          "trans_q": "Đôi giày thể thao của Cindy hiện đang ở đâu?",
          "trans_opts": [
            "trong xe ô tô",
            "trên bậu cửa sổ",
            "dưới gầm cầu thang (under the stairs)"
          ],
          "clue": "Mẹ bảo: 'They were in the car, but your brother brought them in and put them UNDER THE STAIRS.'",
          "why_right": "Hiện tại (now) đôi giày đang ở dưới gầm cầu thang ('under the stairs').",
          "trap": "Trước đó chúng ở trong xe (in the car) nhưng đã được mang vào nhà cất dưới cầu thang rồi.",
          "vocab": [
            {
              "word": "trainers",
              "phonetic": "/ˈtreɪnəz/",
              "meaning": "giày thể thao"
            },
            {
              "word": "under the stairs",
              "phonetic": "/ˈʌndər ðə steəz/",
              "meaning": "dưới gầm cầu thang"
            }
          ]
        }
      },
      {
        "id": "de3_l_q10",
        "number": 10,
        "part": "Part 2",
        "part_title": "Part 2: 5 Hội thoại ngắn",
        "part_instruction": "Nghe 5 đoạn hội thoại ngắn. Mỗi câu nghe 2 lần và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_p3_P2-Test 03.mp3",
        "image": "",
        "passage": "",
        "question": "10. How much did Sue pay for the shirt?",
        "options": [
          "£30",
          "£35",
          "£40"
        ],
        "correct_answer": "£35",
        "explanation": {
          "msg": "Sue đã thực sự trả bao nhiêu tiền cho chiếc áo sơ mi?",
          "trans_q": "Sue đã trả bao nhiêu tiền cho chiếc áo?",
          "trans_opts": [
            "£30 (30 bảng)",
            "£35 (35 bảng)",
            "£40 (40 bảng)"
          ],
          "clue": "Sue kể: 'It was 40 pounds on the price tag, but the shop assistant gave me a discount so I only paid thirty-five pounds (£35)!'",
          "why_right": "Sue chỉ trả 35 bảng ('paid £35').",
          "trap": "£40 là giá ghi trên mác áo trước khi được giảm giá!",
          "vocab": [
            {
              "word": "pay for",
              "phonetic": "/peɪ fɔːr/",
              "meaning": "trả tiền cho cái gì"
            },
            {
              "word": "discount",
              "phonetic": "/ˈdɪskaʊnt/",
              "meaning": "giảm giá, chiết khấu"
            }
          ]
        }
      },
      {
        "id": "de3_l_q11",
        "number": 11,
        "part": "Part 3",
        "part_title": "Part 3: Điền biểu mẫu bài tập về nhà của Sally",
        "part_instruction": "Nghe Sally hỏi bạn về bài tập môn Sinh học (Biology). Xem ảnh và điền không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "audio/de3_p6_P3-Test 03.mp3",
        "image": "images/question_767533_Listening_3.1.jpg",
        "passage": "<strong>HOMEWORK</strong><br>Subject: Biology<br>Name of book: (11) [.....]<br>Written by: (12) Martin [.....]<br>Read: (13) pages [.....]<br>Learn about: (14) [.....]<br>Finish by: (15) [.....]",
        "question": "11. Name of book (Tên cuốn sách cần đọc):",
        "options": [],
        "correct_answer": "Rivers",
        "explanation": {
          "msg": "Tên cuốn sách viết về các dòng sông!",
          "trans_q": "Tên cuốn sách là gì?",
          "trans_opts": [],
          "clue": "Bạn của Sally nói: 'We have to read a book called Rivers from the library.'",
          "why_right": "Tên cuốn sách là: Rivers.",
          "trap": "Nhớ có 's' ở cuối chữ Rivers!",
          "vocab": [
            {
              "word": "rivers",
              "phonetic": "/ˈrɪvəz/",
              "meaning": "những dòng sông"
            }
          ]
        }
      },
      {
        "id": "de3_l_q12",
        "number": 12,
        "part": "Part 3",
        "part_title": "Part 3: Điền biểu mẫu bài tập về nhà",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de3_p6_P3-Test 03.mp3",
        "image": "images/question_767533_Listening_3.1.jpg",
        "passage": "<strong>HOMEWORK</strong><br>Subject: Biology<br>Name of book: (11) [.....]<br>Written by: (12) Martin [.....]<br>Read: (13) pages [.....]<br>Learn about: (14) [.....]<br>Finish by: (15) [.....]",
        "question": "12. Written by: Martin [.....] (Họ của tác giả):",
        "options": [],
        "correct_answer": "Cooper",
        "explanation": {
          "msg": "Tác giả tên Martin Cooper, đề đã có chữ Martin rồi!",
          "trans_q": "Tác giả là Martin ai?",
          "trans_opts": [],
          "clue": "'It's written by Martin Cooper, that's C-O-O-P-E-R.'",
          "why_right": "Họ của tác giả là: Cooper.",
          "trap": "Chỉ điền 'Cooper' vì trong phiếu đã có sẵn chữ 'Martin' rồi nha!",
          "vocab": [
            {
              "word": "written by",
              "phonetic": "/ˈrɪtn baɪ/",
              "meaning": "được viết bởi tác giả..."
            }
          ]
        }
      },
      {
        "id": "de3_l_q13",
        "number": 13,
        "part": "Part 3",
        "part_title": "Part 3: Điền biểu mẫu bài tập về nhà",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de3_p6_P3-Test 03.mp3",
        "image": "images/question_767533_Listening_3.1.jpg",
        "passage": "<strong>HOMEWORK</strong><br>Subject: Biology<br>Name of book: (11) [.....]<br>Written by: (12) Martin [.....]<br>Read: (13) pages [.....]<br>Learn about: (14) [.....]<br>Finish by: (15) [.....]",
        "question": "13. Read: pages [.....] (Đọc từ trang mấy đến trang mấy?):",
        "options": [],
        "correct_answer": "123-127",
        "explanation": {
          "msg": "Các trang sách cần đọc để làm bài tập nè bạn!",
          "trans_q": "Cần đọc những trang nào?",
          "trans_opts": [],
          "clue": "'You need to read from page 123 to 127.'",
          "why_right": "Đáp án: 123-127 (hoặc 123 to 127).",
          "trap": "Điền dạng '123-127' là ngắn gọn và chính xác nhất!",
          "vocab": [
            {
              "word": "page",
              "phonetic": "/peɪdʒ/",
              "meaning": "trang sách"
            }
          ]
        }
      },
      {
        "id": "de3_l_q14",
        "number": 14,
        "part": "Part 3",
        "part_title": "Part 3: Điền biểu mẫu bài tập về nhà",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de3_p6_P3-Test 03.mp3",
        "image": "images/question_767533_Listening_3.1.jpg",
        "passage": "<strong>HOMEWORK</strong><br>Subject: Biology<br>Name of book: (11) [.....]<br>Written by: (12) Martin [.....]<br>Read: (13) pages [.....]<br>Learn about: (14) [.....]<br>Finish by: (15) [.....]",
        "question": "14. Learn about (Nội dung cần tìm hiểu / học):",
        "options": [],
        "correct_answer": "fish",
        "explanation": {
          "msg": "Tìm hiểu về loài động vật sống dưới nước nào?",
          "trans_q": "Cần tìm hiểu về loài gì?",
          "trans_opts": [],
          "clue": "'The assignment is to learn about river fish.'",
          "why_right": "Đáp án: fish (hoặc river fish).",
          "trap": "Fish ở số nhiều vẫn là 'fish', không thêm 'es' nha!",
          "vocab": [
            {
              "word": "learn about",
              "phonetic": "/lɜːn əˈbaʊt/",
              "meaning": "tìm hiểu, học về"
            }
          ]
        }
      },
      {
        "id": "de3_l_q15",
        "number": 15,
        "part": "Part 3",
        "part_title": "Part 3: Điền biểu mẫu bài tập về nhà",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de3_p6_P3-Test 03.mp3",
        "image": "images/question_767533_Listening_3.1.jpg",
        "passage": "<strong>HOMEWORK</strong><br>Subject: Biology<br>Name of book: (11) [.....]<br>Written by: (12) Martin [.....]<br>Read: (13) pages [.....]<br>Learn about: (14) [.....]<br>Finish by: (15) [.....]",
        "question": "15. Finish by (Hạn chót hoàn thành bài tập vào thứ mấy?):",
        "options": [],
        "correct_answer": "Friday",
        "explanation": {
          "msg": "Hạn nộp bài tập môn Sinh học nè!",
          "trans_q": "Phải hoàn thành bài trước thứ mấy?",
          "trans_opts": [],
          "clue": "'We have to finish and hand it in by Friday.'",
          "why_right": "Thứ Sáu: Friday.",
          "trap": "Nhớ viết hoa chữ F: Friday.",
          "vocab": [
            {
              "word": "finish by",
              "phonetic": "/ˈfɪnɪʃ baɪ/",
              "meaning": "hoàn thành trước thời hạn..."
            }
          ]
        }
      },
      {
        "id": "de3_l_q16",
        "number": 16,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài (Trung tâm thể thao mới)",
        "part_instruction": "Nghe Michael và Marina nói chuyện về trung tâm thể thao mới. Chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_p8_P4-Test 03.mp3",
        "image": "",
        "passage": "",
        "question": "16. What sport can’t people do at the sports centre?",
        "options": [
          "tennis",
          "table-tennis",
          "volleyball"
        ],
        "correct_answer": "tennis",
        "explanation": {
          "msg": "Chú ý từ 'CAN'T' (môn thể thao KHÔNG THỂ chơi tại trung tâm thể thao).",
          "trans_q": "Mọi người KHÔNG THỂ chơi môn thể thao nào ở trung tâm thể thao?",
          "trans_opts": [
            "tennis (quần vợt sân lớn)",
            "table-tennis (bóng bàn)",
            "volleyball (bóng chuyền)"
          ],
          "clue": "Michael kể đã chơi bóng bàn và bóng chuyền. Khi Marina hỏi về tennis, Michael bảo: 'Not yet, they're building the tennis courts next year.'",
          "why_right": "Sân tennis sang năm mới xây xong nên hiện tại chưa thể chơi tennis ('can't do tennis')!",
          "trap": "Bóng bàn (table-tennis) và bóng chuyền (volleyball) có sẵn rồi, chỉ có tennis là chưa có thôi.",
          "vocab": [
            {
              "word": "court",
              "phonetic": "/kɔːt/",
              "meaning": "sân chơi thể thao (tennis court)"
            }
          ]
        }
      },
      {
        "id": "de3_l_q17",
        "number": 17,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài",
        "part_instruction": "Nghe đoạn hội thoại và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_p8_P4-Test 03.mp3",
        "image": "",
        "passage": "",
        "question": "17. How much must Marina pay?",
        "options": [
          "£14 a year",
          "£30 a year",
          "£50 a year"
        ],
        "correct_answer": "£50 a year",
        "explanation": {
          "msg": "Tính tiền vé hội viên cho bạn Marina!",
          "trans_q": "Marina phải trả bao nhiêu tiền một năm?",
          "trans_opts": [
            "£14 một năm",
            "£30 một năm",
            "£50 một năm"
          ],
          "clue": "Michael nói: 'It's 30 pounds if you're under 15, but 50 pounds for people aged 15 to 18.' Marina nói: 'Well, I'm 16, so that's 50 pounds.'",
          "why_right": "Marina 16 tuổi (nằm trong khung 15-18 tuổi) nên mức phí là: £50 a year.",
          "trap": "Mức 30 bảng chỉ dành cho trẻ em dưới 15 tuổi thôi nha!",
          "vocab": [
            {
              "word": "per year / a year",
              "phonetic": "/pɜː jɪər/",
              "meaning": "mỗi năm"
            }
          ]
        }
      },
      {
        "id": "de3_l_q18",
        "number": 18,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài",
        "part_instruction": "Nghe đoạn hội thoại và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_p8_P4-Test 03.mp3",
        "image": "",
        "passage": "",
        "question": "18. How many days a week is the sports centre open late?",
        "options": [
          "2",
          "3",
          "4"
        ],
        "correct_answer": "3",
        "explanation": {
          "msg": "Đếm số ngày trong tuần trung tâm mở cửa muộn nè bạn!",
          "trans_q": "Trung tâm thể thao mở cửa muộn bao nhiêu ngày trong một tuần?",
          "trans_opts": [
            "2 ngày",
            "3 ngày",
            "4 ngày"
          ],
          "clue": "Michael nói: 'It stays open late until 10 p.m. on Tuesdays, Thursdays, and Fridays.'",
          "why_right": "Thứ Ba, Thứ Năm, Thứ Sáu -> Đúng 3 ngày trong tuần ('3 days a week')!",
          "trap": "Đếm đúng 3 ngày: Tuesday, Thursday, Friday.",
          "vocab": [
            {
              "word": "open late",
              "phonetic": "/ˈəʊpən leɪt/",
              "meaning": "mở cửa muộn đến tối"
            }
          ]
        }
      },
      {
        "id": "de3_l_q19",
        "number": 19,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài",
        "part_instruction": "Nghe đoạn hội thoại và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_p8_P4-Test 03.mp3",
        "image": "",
        "passage": "",
        "question": "19. Which bus goes to the sports centre?",
        "options": [
          "number 10",
          "number 16",
          "number 60"
        ],
        "correct_answer": "number 16",
        "explanation": {
          "msg": "Xác định số hiệu tuyến xe buýt để đến trung tâm thể thao.",
          "trans_q": "Tuyến xe buýt nào đi đến trung tâm thể thao?",
          "trans_opts": [
            "xe buýt số 10",
            "xe buýt số 16",
            "xe buýt số 60"
          ],
          "clue": "Michael hướng dẫn: 'You take bus number sixteen (16). It takes about ten minutes.'",
          "why_right": "Tuyến xe buýt số 16 ('number 16').",
          "trap": "Số 10 là thời gian đi xe (10 phút), không phải số tuyến buýt.",
          "vocab": [
            {
              "word": "bus number",
              "phonetic": "/bʌs ˈnʌmbər/",
              "meaning": "tuyến xe buýt số..."
            }
          ]
        }
      },
      {
        "id": "de3_l_q20",
        "number": 20,
        "part": "Part 4",
        "part_title": "Part 4: Hội thoại dài",
        "part_instruction": "Nghe đoạn hội thoại và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "audio/de3_p8_P4-Test 03.mp3",
        "image": "",
        "passage": "",
        "question": "20. When will Michael and Marina go to the sports centre?",
        "options": [
          "Tuesday",
          "Thursday",
          "Friday"
        ],
        "correct_answer": "Friday",
        "explanation": {
          "msg": "Hai bạn hẹn nhau đi vào thứ mấy?",
          "trans_q": "Michael và Marina sẽ đến trung tâm thể thao vào khi nào?",
          "trans_opts": [
            "Tuesday (Thứ Ba)",
            "Thursday (Thứ Năm)",
            "Friday (Thứ Sáu)"
          ],
          "clue": "Marina rủ: 'Can we go this Friday after school?' Michael đáp: 'Sure, Friday sounds great!'",
          "why_right": "Hai bạn chốt đi vào Thứ Sáu ('Friday').",
          "trap": "Thứ Ba và Thứ Năm là những ngày trung tâm mở muộn nhưng họ hẹn đi vào Thứ Sáu sau giờ học.",
          "vocab": [
            {
              "word": "after school",
              "phonetic": "/ˈɑːftər skuːl/",
              "meaning": "sau giờ tan học"
            }
          ]
        }
      },
      {
        "id": "de3_l_q21",
        "number": 21,
        "part": "Part 5",
        "part_title": "Part 5: Vườn thú Park Zoo",
        "part_instruction": "Nghe bài giới thiệu về vườn thú Park Zoo. Điền không quá 3 từ hoặc số.",
        "type": "fill",
        "audio": "audio/de3_p9_P5-Test 03.mp3",
        "image": "",
        "passage": "<strong>PARK ZOO</strong><br>Closing time (Monday-Saturday): (21) [.....]<br>Nearest station: (22) [.....] Station<br>Closed in winter from: (23) [.....]<br>Shop sells books, postcards and: (24) [.....]<br>Cost of family ticket: £ (25) [.....]",
        "question": "21. Closing time (Monday-Saturday): [.....] (Giờ đóng cửa từ Thứ 2 đến Thứ 7):",
        "options": [],
        "correct_answer": "7.30",
        "explanation": {
          "msg": "Giờ đóng cửa của vườn thú vào các ngày trong tuần!",
          "trans_q": "Giờ đóng cửa (thứ Hai đến thứ Bảy) là mấy giờ?",
          "trans_opts": [],
          "clue": "'The zoo is open from 9:00 a.m. until 7:30 p.m. Monday to Saturday.'",
          "why_right": "Đáp án: 7.30 (hoặc 7:30 / 7.30 p.m. / 19:30).",
          "trap": "Chủ nhật đóng cửa lúc 5:00 p.m. nên nhớ chọn đúng giờ ngày thường 7.30 nha!",
          "vocab": [
            {
              "word": "closing time",
              "phonetic": "/ˈkləʊzɪŋ taɪm/",
              "meaning": "giờ đóng cửa"
            }
          ]
        }
      },
      {
        "id": "de3_l_q22",
        "number": 22,
        "part": "Part 5",
        "part_title": "Part 5: Vườn thú Park Zoo",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de3_p9_P5-Test 03.mp3",
        "image": "",
        "passage": "<strong>PARK ZOO</strong><br>Closing time (Monday-Saturday): (21) [.....]<br>Nearest station: (22) [.....] Station<br>Closed in winter from: (23) [.....]<br>Shop sells books, postcards and: (24) [.....]<br>Cost of family ticket: £ (25) [.....]",
        "question": "22. Nearest station: [.....] Station (Ga gần nhất tên là gì?):",
        "options": [],
        "correct_answer": "North",
        "explanation": {
          "msg": "Tên nhà ga xe lửa gần vườn thú nhất!",
          "trans_q": "Nhà ga gần nhất là ga nào?",
          "trans_opts": [],
          "clue": "'The nearest train station is North Station, just a five-minute walk away.'",
          "why_right": "Đáp án: North (hướng Bắc).",
          "trap": "Từ 'Station' đã in sẵn rồi, chỉ cần điền 'North' thôi nha!",
          "vocab": [
            {
              "word": "nearest station",
              "phonetic": "/ˈnɪərɪst ˈsteɪʃn/",
              "meaning": "nhà ga gần nhất"
            }
          ]
        }
      },
      {
        "id": "de3_l_q23",
        "number": 23,
        "part": "Part 5",
        "part_title": "Part 5: Vườn thú Park Zoo",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de3_p9_P5-Test 03.mp3",
        "image": "",
        "passage": "<strong>PARK ZOO</strong><br>Closing time (Monday-Saturday): (21) [.....]<br>Nearest station: (22) [.....] Station<br>Closed in winter from: (23) [.....]<br>Shop sells books, postcards and: (24) [.....]<br>Cost of family ticket: £ (25) [.....]",
        "question": "23. Closed in winter from (Mùa đông đóng cửa bắt đầu từ ngày nào?):",
        "options": [],
        "correct_answer": "3rd August",
        "explanation": {
          "msg": "Ngày vườn thú bắt đầu đóng cửa mùa đông!",
          "trans_q": "Đóng cửa vào mùa đông từ ngày nào?",
          "trans_opts": [],
          "clue": "'Please note the zoo will be closed for the winter season starting from the 3rd of August.'",
          "why_right": "Đáp án: 3rd August (hoặc 3 August / August 3rd).",
          "trap": "Viết đúng số ngày và tên tháng nha.",
          "vocab": [
            {
              "word": "closed in winter",
              "phonetic": "/kləʊzd ɪn ˈwɪntər/",
              "meaning": "đóng cửa vào mùa đông"
            }
          ]
        }
      },
      {
        "id": "de3_l_q24",
        "number": 24,
        "part": "Part 5",
        "part_title": "Part 5: Vườn thú Park Zoo",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de3_p9_P5-Test 03.mp3",
        "image": "",
        "passage": "<strong>PARK ZOO</strong><br>Closing time (Monday-Saturday): (21) [.....]<br>Nearest station: (22) [.....] Station<br>Closed in winter from: (23) [.....]<br>Shop sells books, postcards and: (24) [.....]<br>Cost of family ticket: £ (25) [.....]",
        "question": "24. Shop sells books, postcards and (Cửa hàng lưu niệm bán sách, bưu thiếp và món gì?):",
        "options": [],
        "correct_answer": "T-shirts",
        "explanation": {
          "msg": "Món quà lưu niệm bán trong shop vườn thú nè bạn!",
          "trans_q": "Cửa hàng bán sách, bưu thiếp và thứ gì?",
          "trans_opts": [],
          "clue": "'Our souvenir shop sells lovely books, animal postcards, and colourful T-shirts.'",
          "why_right": "Đáp án: T-shirts (áo thun).",
          "trap": "Nhớ có chữ 's' số nhiều: T-shirts.",
          "vocab": [
            {
              "word": "souvenir shop",
              "phonetic": "/ˌsuːvəˈnɪər ʃɒp/",
              "meaning": "cửa hàng bán đồ lưu niệm"
            }
          ]
        }
      },
      {
        "id": "de3_l_q25",
        "number": 25,
        "part": "Part 5",
        "part_title": "Part 5: Vườn thú Park Zoo",
        "part_instruction": "Nghe và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "audio/de3_p9_P5-Test 03.mp3",
        "image": "",
        "passage": "<strong>PARK ZOO</strong><br>Closing time (Monday-Saturday): (21) [.....]<br>Nearest station: (22) [.....] Station<br>Closed in winter from: (23) [.....]<br>Shop sells books, postcards and: (24) [.....]<br>Cost of family ticket: £ (25) [.....]",
        "question": "25. Cost of family ticket: £ [.....] (Giá vé cho cả gia đình):",
        "options": [],
        "correct_answer": "12",
        "explanation": {
          "msg": "Giá vé vào cửa gói gia đình bao nhiêu bảng nè?",
          "trans_q": "Vé gia đình có giá bao nhiêu?",
          "trans_opts": [],
          "clue": "'A family ticket for two adults and two children is only twelve pounds (£12).'",
          "why_right": "Đáp án: 12 (hoặc twelve).",
          "trap": "Đã có ký hiệu £ ở ngoài phiếu rồi nên chỉ cần điền số 12 thôi nhé!",
          "vocab": [
            {
              "word": "family ticket",
              "phonetic": "/ˈfæməli ˈtɪkɪt/",
              "meaning": "vé gia đình"
            }
          ]
        }
      }
    ],
    "difficulty": "hard",
    "level_code": "B1",
    "level_title": "Cấp Độ: Nâng Cao (Chuẩn B1 Thử Thách)",
    "difficulty_badge": "🔴 Khó (B1)",
    "target_desc": "Mục tiêu: Đạt 18 - 25 câu (7.0 - 10 điểm). Đề nâng cao chuẩn B1, nhiều bẫy đánh vần, bài tập sinh học và công viên tự nhiên."
  },
  {
    "id": "de3_doc",
    "exam_num": 3,
    "skill": "reading",
    "skill_vn": "Kỹ năng Đọc",
    "title": "Đề thi thử số 03 - Kỹ năng đọc",
    "duration_minutes": 40,
    "total_questions": 30,
    "total_pts": 30,
    "questions": [
      {
        "id": "de3_r_q1",
        "number": 1,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn (Những nhà thám hiểm phi thường)",
        "part_instruction": "Đọc bài văn về các nhà thám hiểm thế kỷ 21 và chọn từ đúng nhất (1-8).",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "1. ...climb the world’s ( 1 )………… mountains or walk across continents.",
        "options": [
          "tallest",
          "highest",
          "shortest"
        ],
        "correct_answer": "highest",
        "explanation": {
          "msg": "Nói về độ cao của ngọn núi thì người ta dùng từ gì nè?",
          "trans_q": "...leo lên những ngọn núi (1)... nhất thế giới hoặc đi bộ qua các lục địa.",
          "trans_opts": [
            "tallest (cao - hay dùng cho người/tòa nhà)",
            "highest (cao nhất - chuyên dùng cho núi non)",
            "shortest (thấp nhất)"
          ],
          "clue": "Đang nói về đỉnh Everest ('Mount Everest') - ngọn núi cao nhất thế giới.",
          "why_right": "Trong tiếng Anh địa lý, núi cao luôn đi với 'high / highest mountains'!",
          "trap": "'Tall' thường dùng cho chiều cao thẳng đứng của người, cái cây, cột cờ. Núi non hùng vĩ so với mực nước biển luôn dùng 'high'!",
          "vocab": [
            {
              "word": "highest mountains",
              "phonetic": "/ˈhaɪɪst ˈmaʊntɪnz/",
              "meaning": "những ngọn núi cao nhất"
            }
          ]
        }
      },
      {
        "id": "de3_r_q2",
        "number": 2,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc văn bản và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "2. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.",
        "options": [
          "look",
          "see",
          "ride"
        ],
        "correct_answer": "look",
        "explanation": {
          "msg": "Cụm thành ngữ siêu quen thuộc: 'Take a look at' = Hãy cùng nhìn qua/xem qua!",
          "trans_q": "Hãy cùng (2)... qua một số nhà thám hiểm vĩ đại nhất của thế kỷ 21.",
          "trans_opts": [
            "look (take a look = nhìn qua, xem qua)",
            "see (thấy)",
            "ride (cưỡi xe/ngựa)"
          ],
          "clue": "Cấu trúc cố định: 'take a look AT something'!",
          "why_right": "Chỉ có danh từ 'look' mới kết hợp với 'take a... at'.",
          "trap": "Không bao giờ nói 'take a see' hay 'take a ride at' trong ngữ cảnh này.",
          "vocab": [
            {
              "word": "take a look at",
              "phonetic": "/teɪk ə lʊk æt/",
              "meaning": "nhìn vào, xem qua cái gì"
            }
          ]
        }
      },
      {
        "id": "de3_r_q3",
        "number": 3,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc văn bản và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "3. His amazing journey ( 3 )…………. two years and four months.",
        "options": [
          "made",
          "spent",
          "took"
        ],
        "correct_answer": "took",
        "explanation": {
          "msg": "Chuyến đi 'kéo dài mất' bao nhiêu thời gian!",
          "trans_q": "Hành trình kỳ diệu của anh ấy đã (3)... 2 năm 4 tháng.",
          "trans_opts": [
            "made (làm ra)",
            "spent (dành - chủ ngữ phải là người)",
            "took (take time = mất bao nhiêu thời gian)"
          ],
          "clue": "Chủ ngữ là chuyến đi 'His amazing journey', tân ngữ là khoảng thời gian 'two years and four months'.",
          "why_right": "Cấu trúc: 'Something + TAKE + time' = Chuyến đi/công việc tiêu tốn/kéo dài mất bao nhiêu thời gian. Quá khứ của take là 'took'!",
          "trap": "'Spend' chỉ dùng khi chủ ngữ là người (ví dụ: Ed spent 2 years...); còn chủ ngữ là chuyến đi thì bắt buộc dùng 'took'!",
          "vocab": [
            {
              "word": "journey took ... time",
              "phonetic": "/ˈdʒɜːni tʊk/",
              "meaning": "chuyến đi kéo dài mất bao lâu"
            }
          ]
        }
      },
      {
        "id": "de3_r_q4",
        "number": 4,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc văn bản và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "4. ...like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes.",
        "options": [
          "lucky",
          "unlucky",
          "happy"
        ],
        "correct_answer": "lucky",
        "explanation": {
          "msg": "Gặp bao nhiêu rắn và cá sấu ăn thịt nhưng chỉ bị kiến cắn thì quá may mắn đúng không!",
          "trans_q": "...như rắn và cá sấu, nhưng Ed đã rất (4)...; anh ấy chỉ bị kiến và muỗi đốt.",
          "trans_opts": [
            "lucky (may mắn)",
            "unlucky (xui xẻo)",
            "happy (vui vẻ)"
          ],
          "clue": "Rừng nhiệt đới đầy thú dữ ăn thịt, nhưng Ed chỉ bị muỗi cắn qua loa -> Ed quá MAY MẮN ('lucky')!",
          "why_right": "Lucky = may mắn thoát khỏi hiểm nguy.",
          "trap": "Không hề xui xẻo vì không bị cá sấu hay rắn độc tấn công.",
          "vocab": [
            {
              "word": "lucky",
              "phonetic": "/ˈlʌki/",
              "meaning": "may mắn"
            },
            {
              "word": "crocodile",
              "phonetic": "/ˈkrɒkədaɪl/",
              "meaning": "con cá sấu"
            }
          ]
        }
      },
      {
        "id": "de3_r_q5",
        "number": 5,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc văn bản và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "5. ...find fruit and nuts or ( 5 )………… fish each morning.",
        "options": [
          "bring",
          "catch",
          "hold"
        ],
        "correct_answer": "catch",
        "explanation": {
          "msg": "Đi bắt cá ở sông Amazon nè bạn!",
          "trans_q": "...tìm hoa quả, hạt hoặc (5)... cá vào mỗi buổi sáng.",
          "trans_opts": [
            "bring (mang theo)",
            "catch (bắt, câu cá)",
            "hold (cầm, nắm)"
          ],
          "clue": "Cụm từ cố định: 'catch fish' = bắt cá, câu cá để làm thức ăn sinh tồn.",
          "why_right": "Catch fish là cụm từ chuẩn xác nhất chỉ việc đánh bắt cá.",
          "trap": "Trong rừng hoang dã thì phải tự bắt cá (catch) chứ không có sẵn mà đem theo (bring).",
          "vocab": [
            {
              "word": "catch fish",
              "phonetic": "/kætʃ fɪʃ/",
              "meaning": "bắt cá, câu cá"
            }
          ]
        }
      },
      {
        "id": "de3_r_q6",
        "number": 6,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc văn bản và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "6. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry.",
        "options": [
          "nice",
          "easy",
          "hard"
        ],
        "correct_answer": "hard",
        "explanation": {
          "msg": "Đọc vế sau: 'Ed was often tired and hungry' (thường mệt mỏi và đói bụng)!",
          "trans_q": "Đôi khi thức ăn rất (6)... tìm và Ed thường xuyên bị mệt và đói.",
          "trans_opts": [
            "nice (tốt, ngon)",
            "easy (dễ dàng)",
            "hard (khó khăn)"
          ],
          "clue": "Vì bị đói bụng và mệt mỏi nên chứng tỏ thức ăn rất KHÓ TÌM ('hard to find')!",
          "why_right": "Hard to find = khó kiếm, khó tìm.",
          "trap": "Nếu dễ tìm (easy) thì đã không bị đói rồi!",
          "vocab": [
            {
              "word": "hard to find",
              "phonetic": "/hɑːd tuː faɪnd/",
              "meaning": "khó tìm kiếm (= difficult to find)"
            }
          ]
        }
      },
      {
        "id": "de3_r_q7",
        "number": 7,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc văn bản và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "7. She is one of the world’s ( 7 )…………. climbers...",
        "options": [
          "biggest",
          "greatest",
          "luckiest"
        ],
        "correct_answer": "greatest",
        "explanation": {
          "msg": "Cô ấy đã chinh phục tất cả các ngọn núi cao trên 8.000m trên thế giới nè!",
          "trans_q": "Cô ấy là một trong những vận động viên leo núi (7)... nhất thế giới...",
          "trans_opts": [
            "biggest (to lớn nhất về thể xác)",
            "greatest (vĩ đại nhất, kiệt xuất nhất)",
            "luckiest (may mắn nhất)"
          ],
          "clue": "Leo được mọi ngọn núi hiểm trở trên 8000m đòi hỏi bản lĩnh phi thường -> Vận động viên vĩ đại nhất ('greatest climbers')!",
          "why_right": "Greatest = tài ba, xuất chúng, vĩ đại nhất.",
          "trap": "Không phải 'biggest' (to con nhất) đâu nha.",
          "vocab": [
            {
              "word": "greatest",
              "phonetic": "/ˈɡreɪtɪst/",
              "meaning": "vĩ đại nhất, xuất sắc nhất"
            },
            {
              "word": "climber",
              "phonetic": "/ˈklaɪmər/",
              "meaning": "người leo núi"
            }
          ]
        }
      },
      {
        "id": "de3_r_q8",
        "number": 8,
        "part": "Part 1",
        "part_title": "Part 1: Đọc điền từ vào đoạn văn",
        "part_instruction": "Đọc văn bản và chọn từ thích hợp.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "Amazing adventurers<br>Do you ever dream about climbing Mount Everest or visiting Antarctica? If so, you’re not alone. Every year, thousands of people try to climb the world’s ( 1 )………… mountains or walk across continents. Let’s take a ( 2 )………….at some of the 21st century’s greatest adventurers.<br>Ed Stafford from the UK is the first person to walk along the Amazon River from the mountains of Peru to the mouth of the river in Brazil. His amazing journey ( 3 )…………. two years and four months. There are many dangerous animals in the rainforest, like snakes and crocodiles, but Ed was ( 4 ) ………..; he was only bitten by ants and mosquitoes. On his trip, Ed had to find fruit and nuts or ( 5 )………… fish each morning. Sometimes food was ( 6 )……….. to find and Ed was often tired and hungry. While he walked, Ed wrote a blog to tell the world about climate change and destruction of the rainforest.<br>Gerlinde Kaltenbrunner from Austria is one among more than 4,000 people who have climbed Everest. She is one of the world’s ( 7 )…………. climbers and has climbed all the world’s mountains over 8,000 metres. It’s very difficult to climb in cold weather and storms, but Gerlinde loves it. Now she ( 8 )…………… her time climbing and helping a charity for poor children in Nepal.",
        "question": "8. Now she ( 8 )…………… her time climbing and helping a charity...",
        "options": [
          "uses",
          "wastes",
          "spends"
        ],
        "correct_answer": "spends",
        "explanation": {
          "msg": "Cấu trúc kinh điển: 'spend time doing something' = dành thời gian làm gì!",
          "trans_q": "Bây giờ cô ấy (8)... thời gian của mình để leo núi và giúp đỡ từ thiện...",
          "trans_opts": [
            "uses (dùng)",
            "wastes (lãng phí)",
            "spends (dành thời gian)"
          ],
          "clue": "Cấu trúc: 'spend + time + V-ing (climbing and helping)'!",
          "why_right": "Chỉ có 'spend' mới đi liền với 'time + V-ing' để diễn đạt việc dành thời gian làm gì.",
          "trap": "'Waste' là lãng phí (giúp trẻ em nghèo là việc tốt, không phải lãng phí), 'use' cần có giới từ to-V.",
          "vocab": [
            {
              "word": "spend time doing sth",
              "phonetic": "/spend taɪm ˈduːɪŋ/",
              "meaning": "dành thời gian làm việc gì"
            }
          ]
        }
      },
      {
        "id": "de3_r_q9",
        "number": 9,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo (Notices A-K)",
        "part_instruction": "Xem các biển báo A-K trong ảnh để nối với các câu 9-16.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "9. Not all drivers can stop here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "D",
        "explanation": {
          "msg": "Không phải tài xế nào cũng được đỗ xe ở đây nè!",
          "trans_q": "Không phải tài xế nào cũng có thể dừng/đỗ xe ở đây.",
          "trans_opts": [],
          "clue": "Biển D ghi: 'PARKING FOR POLICE CARS ONLY' (Chỉ đỗ xe dành riêng cho xe cảnh sát).",
          "why_right": "Chỉ xe cảnh sát mới được đỗ, nghĩa là các tài xế khác (not all drivers) không được dừng đỗ ở đây!",
          "trap": "Biển D chỉ cho phép cảnh sát.",
          "vocab": [
            {
              "word": "police car",
              "phonetic": "/pəˈliːs kɑːr/",
              "meaning": "xe ô tô của cảnh sát"
            },
            {
              "word": "parking",
              "phonetic": "/ˈpɑːkɪŋ/",
              "meaning": "bãi đỗ xe"
            }
          ]
        }
      },
      {
        "id": "de3_r_q10",
        "number": 10,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "10. Children cannot come here in the evening.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "A",
        "explanation": {
          "msg": "Bể bơi buổi tối chỉ dành riêng cho người lớn!",
          "trans_q": "Trẻ em không thể đến đây vào buổi tối.",
          "trans_opts": [],
          "clue": "Biển A ghi: 'SWIMMING POOL - ADULTS ONLY 6-8 p.m' (Bể bơi - Chỉ dành cho người lớn từ 6h đến 8h tối).",
          "why_right": "Khung 6-8h tối là buổi tối (in the evening), chỉ người lớn (adults only) -> Trẻ em không được vào (children cannot come)!",
          "trap": "Biển E là Lâu đài miễn phí cho trẻ em, không cấm buổi tối.",
          "vocab": [
            {
              "word": "adults only",
              "phonetic": "/əˈdʌlts ˈəʊnli/",
              "meaning": "chỉ dành riêng cho người lớn"
            },
            {
              "word": "swimming pool",
              "phonetic": "/ˈswɪmɪŋ puːl/",
              "meaning": "bể bơi, hồ bơi"
            }
          ]
        }
      },
      {
        "id": "de3_r_q11",
        "number": 11,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "11. Drivers must be careful.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "C",
        "explanation": {
          "msg": "Biển cảnh báo nguy hiểm trên đường đi!",
          "trans_q": "Các tài xế lái xe phải hết sức cẩn thận.",
          "trans_opts": [],
          "clue": "Biển C ghi: 'DANGER! No Traffic Lights Ahead' (NGUY HIỂM! Phía trước không có đèn giao thông).",
          "why_right": "Danger = nguy hiểm -> Bắt buộc tài xế phải chú ý cẩn thận (must be careful)!",
          "trap": "Cứ thấy chữ DANGER to đùng là biết cần phải cẩn thận rồi nhé!",
          "vocab": [
            {
              "word": "danger",
              "phonetic": "/ˈdeɪndʒər/",
              "meaning": "nguy hiểm"
            },
            {
              "word": "traffic lights",
              "phonetic": "/ˈtræfɪk laɪts/",
              "meaning": "cột đèn giao thông"
            }
          ]
        }
      },
      {
        "id": "de3_r_q12",
        "number": 12,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "12. Not everyone can make a call from here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "B",
        "explanation": {
          "msg": "Điện thoại này chỉ dành riêng cho khách hàng của quán nè!",
          "trans_q": "Không phải ai cũng có thể gọi điện từ nơi này.",
          "trans_opts": [],
          "clue": "Biển B ghi: 'TELEPHONE for customers' use only' (Điện thoại chỉ dành riêng cho khách hàng sử dụng).",
          "why_right": "Chỉ khách mua hàng (customers) mới được dùng -> Người ngoài không được dùng (not everyone can make a call)!",
          "trap": "Make a call = gọi điện thoại.",
          "vocab": [
            {
              "word": "customer",
              "phonetic": "/ˈkʌstəmər/",
              "meaning": "khách hàng"
            },
            {
              "word": "make a call",
              "phonetic": "/meɪk ə kɔːl/",
              "meaning": "gọi điện thoại"
            }
          ]
        }
      },
      {
        "id": "de3_r_q13",
        "number": 13,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "13. Only adults have to pay here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "E",
        "explanation": {
          "msg": "Chỉ người lớn phải trả tiền vé, tức là trẻ em được MIỄN PHÍ nè!",
          "trans_q": "Chỉ người lớn mới phải trả tiền ở đây.",
          "trans_opts": [],
          "clue": "Biển E ghi: 'LEEDS CASTLE - FREE FOR CHILDREN' (Lâu đài Leeds - Miễn phí cho trẻ em).",
          "why_right": "Trẻ em được miễn phí vé (free for children) đồng nghĩa với việc chỉ người lớn mới phải mua vé!",
          "trap": "Biển K là giảm nửa giá (half price), chứ không phải miễn phí hoàn toàn.",
          "vocab": [
            {
              "word": "castle",
              "phonetic": "/ˈkɑːsl/",
              "meaning": "lâu đài (âm t câm nha)"
            },
            {
              "word": "free",
              "phonetic": "/friː/",
              "meaning": "miễn phí, không mất tiền"
            }
          ]
        }
      },
      {
        "id": "de3_r_q14",
        "number": 14,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "14. Children pay less than adult here.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "K",
        "explanation": {
          "msg": "Trẻ em trả ít tiền hơn người lớn: GIẢM MỘT NỬA GIÁ (Half price)!",
          "trans_q": "Trẻ em trả ít tiền hơn người lớn ở đây.",
          "trans_opts": [],
          "clue": "Biển K ghi: 'Under 12s HALF PRICE' (Trẻ dưới 12 tuổi được giảm một nửa giá vé).",
          "why_right": "Half price = trả 50% tiền vé -> Pay less than adult!",
          "trap": "Phân biệt kỹ: Biển E là miễn phí 100% (không trả xu nào), còn Biển K là trả ít hơn (trả nửa giá).",
          "vocab": [
            {
              "word": "half price",
              "phonetic": "/hɑːf praɪs/",
              "meaning": "nửa giá, giảm 50% giá vé"
            }
          ]
        }
      },
      {
        "id": "de3_r_q15",
        "number": 15,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "15. Be careful because this will burn.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "I",
        "explanation": {
          "msg": "Cẩn thận vì bộ váy ngủ này rất dễ bắt lửa bốc cháy nè bạn!",
          "trans_q": "Hãy cẩn thận vì đồ vật này sẽ bị cháy.",
          "trans_opts": [],
          "clue": "Biển I ghi: 'Keep this nightdress away from fire' (Để chiếc váy ngủ này tránh xa ngọn lửa).",
          "why_right": "Tránh xa lửa (away from fire) vì nó rất dễ bắt cháy (will burn)!",
          "trap": "Burn = cháy; fire = lửa.",
          "vocab": [
            {
              "word": "nightdress",
              "phonetic": "/ˈnaɪtdres/",
              "meaning": "váy ngủ"
            },
            {
              "word": "burn",
              "phonetic": "/bɜːn/",
              "meaning": "bốc cháy, thiêu đốt"
            }
          ]
        }
      },
      {
        "id": "de3_r_q16",
        "number": 16,
        "part": "Part 2",
        "part_title": "Part 2: Nối biển báo thông báo",
        "part_instruction": "Xem ảnh và chọn chữ cái tương ứng.",
        "type": "matching",
        "audio": "",
        "image": "images/question_767496_Reading_3.1.jpg",
        "passage": "",
        "question": "16. We don’t want any money yet.",
        "options": [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "K"
        ],
        "correct_answer": "H",
        "explanation": {
          "msg": "Mua trước trả tiền sau vào năm sau!",
          "trans_q": "Chúng tôi chưa cần thu tiền ngay bây giờ.",
          "trans_opts": [],
          "clue": "Biển H ghi: 'BUY NOW PAY NEXT YEAR' (Mua hàng ngay bây giờ, sang năm mới phải trả tiền).",
          "why_right": "Sang năm mới trả tiền đồng nghĩa với hiện tại người ta chưa đòi tiền ngay (don't want money yet)!",
          "trap": "Mua trả chậm sang năm sau.",
          "vocab": [
            {
              "word": "pay next year",
              "phonetic": "/peɪ nekst jɪər/",
              "meaning": "năm sau mới phải thanh toán"
            }
          ]
        }
      },
      {
        "id": "de3_r_q17",
        "number": 17,
        "part": "Part 3",
        "part_title": "Part 3: Đọc 2 email điền đơn xin thị thực (Visa Form)",
        "part_instruction": "Đọc 2 bức thư điện tử giữa Mariko Mori và trường Anh ngữ để điền thông tin vào đơn xin visa (17-23).",
        "type": "fill",
        "audio": "",
        "image": "images/question_767505_Reading_3.2.jpg",
        "passage": "<strong>VISA APPLICATION FORM</strong><br>Name of applicant: (17) [.....]<br>Nationality: (18) [.....]<br>Job: (19) [.....]<br>Address in Oxford: (20) [.....]<br>School to apply for: (21) [.....]<br>The language you want to learn: (22) [.....]<br>How long will you stay? (23) [.....]",
        "question": "17. Name of applicant (Họ tên người nộp đơn):",
        "options": [],
        "correct_answer": "Mariko Mori",
        "explanation": {
          "msg": "Tên của bạn gái người Nhật viết đơn xin học!",
          "trans_q": "Họ và tên người nộp đơn visa là ai?",
          "trans_opts": [],
          "clue": "Người gửi email là: 'Mariko Mori'.",
          "why_right": "Điền đầy đủ họ và tên: Mariko Mori.",
          "trap": "Nhớ viết hoa chữ cái đầu: Mariko Mori.",
          "vocab": [
            {
              "word": "applicant",
              "phonetic": "/ˈæplɪkənt/",
              "meaning": "người nộp đơn xin việc / visa / học bổng"
            }
          ]
        }
      },
      {
        "id": "de3_r_q18",
        "number": 18,
        "part": "Part 3",
        "part_title": "Part 3: Điền đơn xin visa",
        "part_instruction": "Đọc 2 email và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767505_Reading_3.2.jpg",
        "passage": "<strong>VISA APPLICATION FORM</strong><br>Name of applicant: (17) [.....]<br>Nationality: (18) [.....]<br>Job: (19) [.....]<br>Address in Oxford: (20) [.....]<br>School to apply for: (21) [.....]<br>The language you want to learn: (22) [.....]<br>How long will you stay? (23) [.....]",
        "question": "18. Nationality (Quốc tịch của bạn ấy):",
        "options": [],
        "correct_answer": "Japanese",
        "explanation": {
          "msg": "Quê hương ở thành phố Nagoya, nước Nhật Bản!",
          "trans_q": "Quốc tịch là gì?",
          "trans_opts": [],
          "clue": "Mariko viết: '...in my home town, Nagoya, Japan...'",
          "why_right": "Quốc tịch là người Nhật: Japanese (hoặc Japan đều được chấp nhận).",
          "trap": "Cố gắng viết đúng dạng tính từ quốc tịch: Japanese.",
          "vocab": [
            {
              "word": "nationality",
              "phonetic": "/ˌnæʃəˈnæləti/",
              "meaning": "quốc tịch"
            },
            {
              "word": "Japanese",
              "phonetic": "/ˌdʒæpəˈniːz/",
              "meaning": "người Nhật, quốc tịch Nhật"
            }
          ]
        }
      },
      {
        "id": "de3_r_q19",
        "number": 19,
        "part": "Part 3",
        "part_title": "Part 3: Điền đơn xin visa",
        "part_instruction": "Đọc 2 email và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767505_Reading_3.2.jpg",
        "passage": "<strong>VISA APPLICATION FORM</strong><br>Name of applicant: (17) [.....]<br>Nationality: (18) [.....]<br>Job: (19) [.....]<br>Address in Oxford: (20) [.....]<br>School to apply for: (21) [.....]<br>The language you want to learn: (22) [.....]<br>How long will you stay? (23) [.....]",
        "question": "19. Job (Nghề nghiệp hiện tại của Mariko):",
        "options": [],
        "correct_answer": "receptionist",
        "explanation": {
          "msg": "Nghề nghiệp của Mariko ở khách sạn tại quê nhà nè!",
          "trans_q": "Nghề nghiệp của cô ấy là gì?",
          "trans_opts": [],
          "clue": "Mariko giới thiệu: 'I work in the reception of a hotel in my home town...'",
          "why_right": "Làm việc tại quầy lễ tân khách sạn -> Nghề nghiệp là: receptionist (hoặc hotel receptionist).",
          "trap": "Không viết 'reception' (bàn lễ tân), phải viết tên nghề 'receptionist' (nhân viên lễ tân)!",
          "vocab": [
            {
              "word": "receptionist",
              "phonetic": "/rɪˈsepʃənɪst/",
              "meaning": "nhân viên lễ tân"
            }
          ]
        }
      },
      {
        "id": "de3_r_q20",
        "number": 20,
        "part": "Part 3",
        "part_title": "Part 3: Điền đơn xin visa",
        "part_instruction": "Đọc 2 email và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767505_Reading_3.2.jpg",
        "passage": "<strong>VISA APPLICATION FORM</strong><br>Name of applicant: (17) [.....]<br>Nationality: (18) [.....]<br>Job: (19) [.....]<br>Address in Oxford: (20) [.....]<br>School to apply for: (21) [.....]<br>The language you want to learn: (22) [.....]<br>How long will you stay? (23) [.....]",
        "question": "20. Address in Oxford (Địa chỉ chỗ ở tại thành phố Oxford):",
        "options": [],
        "correct_answer": "324 Park Road",
        "explanation": {
          "msg": "Tìm địa chỉ ký túc xá cho sinh viên trong email trả lời của trường!",
          "trans_q": "Địa chỉ lưu trú tại Oxford là ở đâu?",
          "trans_opts": [],
          "clue": "Trường trả lời: 'There is a house for students next to the school, in Park Road, at number 324.'",
          "why_right": "Địa chỉ là: 324 Park Road (hoặc number 324 Park Road).",
          "trap": "Nhớ ghi số nhà trước tên đường nha: 324 Park Road.",
          "vocab": [
            {
              "word": "address",
              "phonetic": "/əˈdres/",
              "meaning": "địa chỉ"
            }
          ]
        }
      },
      {
        "id": "de3_r_q21",
        "number": 21,
        "part": "Part 3",
        "part_title": "Part 3: Điền đơn xin visa",
        "part_instruction": "Đọc 2 email và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767505_Reading_3.2.jpg",
        "passage": "<strong>VISA APPLICATION FORM</strong><br>Name of applicant: (17) [.....]<br>Nationality: (18) [.....]<br>Job: (19) [.....]<br>Address in Oxford: (20) [.....]<br>School to apply for: (21) [.....]<br>The language you want to learn: (22) [.....]<br>How long will you stay? (23) [.....]",
        "question": "21. School to apply for (Tên trường nộp đơn xin học):",
        "options": [],
        "correct_answer": "Atlas Language School",
        "explanation": {
          "msg": "Tên trường ngoại ngữ mà Mariko gửi thư đăng ký học nè!",
          "trans_q": "Trường đăng ký theo học là trường nào?",
          "trans_opts": [],
          "clue": "Đầu thư gửi tới: 'To: Atlas Language School, Oxford'.",
          "why_right": "Tên trường là: Atlas Language School (hoặc Atlas Language School, Oxford).",
          "trap": "Viết đúng tên Atlas Language School!",
          "vocab": [
            {
              "word": "language school",
              "phonetic": "/ˈlæŋɡwɪdʒ skuːl/",
              "meaning": "trường dạy ngoại ngữ"
            }
          ]
        }
      },
      {
        "id": "de3_r_q22",
        "number": 22,
        "part": "Part 3",
        "part_title": "Part 3: Điền đơn xin visa",
        "part_instruction": "Đọc 2 email và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767505_Reading_3.2.jpg",
        "passage": "<strong>VISA APPLICATION FORM</strong><br>Name of applicant: (17) [.....]<br>Nationality: (18) [.....]<br>Job: (19) [.....]<br>Address in Oxford: (20) [.....]<br>School to apply for: (21) [.....]<br>The language you want to learn: (22) [.....]<br>How long will you stay? (23) [.....]",
        "question": "22. The language you want to learn (Ngôn ngữ muốn theo học):",
        "options": [],
        "correct_answer": "English",
        "explanation": {
          "msg": "Bạn ấy muốn sang Anh học tiếng gì nè bạn?",
          "trans_q": "Ngôn ngữ muốn theo học là tiếng gì?",
          "trans_opts": [],
          "clue": "Mariko nói: '...and English is important for my job... so I would like to improve my English skills...'",
          "why_right": "Ngôn ngữ cần học là tiếng Anh: English.",
          "trap": "Nhớ viết hoa chữ E: English.",
          "vocab": [
            {
              "word": "improve skills",
              "phonetic": "/ɪmˈpruːv skɪlz/",
              "meaning": "cải thiện, nâng cao kỹ năng"
            }
          ]
        }
      },
      {
        "id": "de3_r_q23",
        "number": 23,
        "part": "Part 3",
        "part_title": "Part 3: Điền đơn xin visa",
        "part_instruction": "Đọc 2 email và điền thông tin vào chỗ trống.",
        "type": "fill",
        "audio": "",
        "image": "images/question_767505_Reading_3.2.jpg",
        "passage": "<strong>VISA APPLICATION FORM</strong><br>Name of applicant: (17) [.....]<br>Nationality: (18) [.....]<br>Job: (19) [.....]<br>Address in Oxford: (20) [.....]<br>School to apply for: (21) [.....]<br>The language you want to learn: (22) [.....]<br>How long will you stay? (23) [.....]",
        "question": "23. How long will you stay? (Bạn sẽ ở lại nước Anh trong bao lâu?):",
        "options": [],
        "correct_answer": "3 months",
        "explanation": {
          "msg": "Thời gian dự kiến lưu trú tại Vương quốc Anh nè!",
          "trans_q": "Bạn sẽ ở lại trong thời gian bao lâu?",
          "trans_opts": [],
          "clue": "Mariko viết rõ ràng câu cuối: 'I shall spend 3 months in Britain.'",
          "why_right": "Thời gian ở lại là: 3 months (hoặc three months / 10 weeks).",
          "trap": "Điền '3 months' theo đúng lời Mariko viết là chuẩn nhất!",
          "vocab": [
            {
              "word": "how long",
              "phonetic": "/haʊ lɒŋ/",
              "meaning": "bao lâu"
            },
            {
              "word": "stay",
              "phonetic": "/steɪ/",
              "meaning": "ở lại, lưu trú"
            }
          ]
        }
      },
      {
        "id": "de3_r_q24",
        "number": 24,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản (Nữ lính cứu hỏa Dany Cotton)",
        "part_instruction": "Đọc bài viết về nữ lính cứu hỏa Dany Cotton và chọn đáp án đúng nhất (A, B hoặc C).",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "People who think firefighting is a job for men would be surprised to learn that there are now over 230 women in the London Fire Brigade...",
        "question": "24. Dany has worked for the fire service",
        "options": [
          "for nearly twenty years.",
          "for more than twenty years.",
          "since she was twenty-two years old."
        ],
        "correct_answer": "for more than twenty years.",
        "explanation": {
          "msg": "Số năm cống hiến cho ngành cứu hỏa của Dany!",
          "trans_q": "Dany đã làm việc cho sở cứu hỏa được bao lâu?",
          "trans_opts": [
            "gần 20 năm",
            "hơn 20 năm (for more than twenty years)",
            "từ khi cô ấy 22 tuổi"
          ],
          "clue": "Đoạn 1 ghi rõ: '...who has been with the fire service for OVER 22 YEARS.'",
          "why_right": "22 năm chính là nhiều hơn 20 năm ('over 22 years' = more than twenty years)!",
          "trap": "Số 22 là số năm làm việc chứ không phải tuổi của cô ấy, đừng nhầm sang 'twenty-two years old' nha!",
          "vocab": [
            {
              "word": "firefighter",
              "phonetic": "/ˈfaɪəfaɪtər/",
              "meaning": "lính cứu hỏa"
            },
            {
              "word": "fire service",
              "phonetic": "/ˈfaɪə sɜːvɪs/",
              "meaning": "ngành / lực lượng cứu hỏa"
            }
          ]
        }
      },
      {
        "id": "de3_r_q25",
        "number": 25,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "25. Dany worked on a campaign to",
        "options": [
          "encourage girls to train to become firefighters.",
          "explain the training and assessment needs for firefighters.",
          "advise girls at secondary school to keep fit and stay healthy."
        ],
        "correct_answer": "encourage girls to train to become firefighters.",
        "explanation": {
          "msg": "Chiến dịch mà Dany tham gia nhằm mục đích gì?",
          "trans_q": "Dany đã tham gia vào một chiến dịch để:",
          "trans_opts": [
            "khuyến khích các bạn nữ rèn luyện để trở thành lính cứu hỏa",
            "giải thích nhu cầu đào tạo và đánh giá cho lính cứu hỏa",
            "khuyên các nữ sinh trung học giữ gìn vóc dáng và sức khỏe"
          ],
          "clue": "Đoạn 1: 'She took part in a national campaign promoting firefighting as a career for girls in secondary schools.'",
          "why_right": "Promoting firefighting as a career = khuyến khích các bạn nữ theo đuổi nghề lính cứu hỏa (encourage girls to become firefighters)!",
          "trap": "Khuyên tập thể dục chỉ là chi tiết phụ khi nói về tiêu chuẩn thể lực.",
          "vocab": [
            {
              "word": "campaign",
              "phonetic": "/kæmˈpeɪn/",
              "meaning": "chiến dịch"
            },
            {
              "word": "encourage",
              "phonetic": "/ɪnˈkʌrɪdʒ/",
              "meaning": "khuyến khích, động viên"
            }
          ]
        }
      },
      {
        "id": "de3_r_q26",
        "number": 26,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "26. Male firefighters",
        "options": [
          "have the same training as female firefighters.",
          "often carry people down ladders in burning buildings.",
          "have to be taller than female firefighters."
        ],
        "correct_answer": "have the same training as female firefighters.",
        "explanation": {
          "msg": "Các nam lính cứu hỏa có gì giống với các nữ lính cứu hỏa nè?",
          "trans_q": "Các lính cứu hỏa nam:",
          "trans_opts": [
            "có cùng chương trình đào tạo như lính cứu hỏa nữ",
            "thường cõng người xuống thang trong các tòa nhà cháy",
            "phải cao hơn lính cứu hỏa nữ"
          ],
          "clue": "Đoạn 2: '...women do the SAME training and assessment as men and they are expected to do the same jobs.'",
          "why_right": "Cả nam và nữ đều trải qua cùng một chương trình huấn luyện và kiểm tra đánh giá ('same training as female firefighters').",
          "trap": "Đoạn văn ghi rõ 'height is not important' (chiều cao không quan trọng), nên phương án C sai.",
          "vocab": [
            {
              "word": "the same training",
              "phonetic": "/ðə seɪm ˈtreɪnɪŋ/",
              "meaning": "cùng một chương trình huấn luyện"
            }
          ]
        }
      },
      {
        "id": "de3_r_q27",
        "number": 27,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "27. Dany has never",
        "options": [
          "seen a woman carry a man from a burning building.",
          "been trained to carry a man from a burning building.",
          "worked in a team to rescue people."
        ],
        "correct_answer": "seen a woman carry a man from a burning building.",
        "explanation": {
          "msg": "Dany CHƯA BAO GIỜ (never) chứng kiến cảnh tượng nào ngoài đời thực?",
          "trans_q": "Dany chưa bao giờ:",
          "trans_opts": [
            "nhìn thấy một phụ nữ cõng một người đàn ông ra khỏi tòa nhà cháy",
            "được huấn luyện để cõng người",
            "làm việc theo nhóm để giải cứu mọi người"
          ],
          "clue": "Đoạn 2: 'She says that in all her years of firefighting, she has NEVER SEEN anyone try this... she describes this as something we only see in films.'",
          "why_right": "Cô ấy chưa từng thấy ai cõng người từ trên thang xuống trong thực tế, cảnh đó chỉ có trên phim ảnh thôi!",
          "trap": "Cô ấy ĐÃ TỪNG được huấn luyện ('although she was trained to do it'), nhưng chưa từng thấy ngoài đời thật.",
          "vocab": [
            {
              "word": "rescue",
              "phonetic": "/ˈreskjuː/",
              "meaning": "giải cứu, cứu hộ"
            }
          ]
        }
      },
      {
        "id": "de3_r_q28",
        "number": 28,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "28. Firefighters can save people’s lives by",
        "options": [
          "visiting houses.",
          "doing business.",
          "giving advice."
        ],
        "correct_answer": "giving advice.",
        "explanation": {
          "msg": "Lính cứu hỏa cứu sống tính mạng mọi người bằng cách nào trong cộng đồng nè?",
          "trans_q": "Lính cứu hỏa có thể cứu sống nhiều sinh mạng bằng cách:",
          "trans_opts": [
            "đến thăm các ngôi nhà",
            "làm kinh doanh",
            "đưa ra lời khuyên / tư vấn phòng cháy"
          ],
          "clue": "Đoạn 3: 'Fire officers visit homes, businesses and schools GIVING ADVICE that can often save lives.'",
          "why_right": "Họ đưa ra những lời khuyên hữu ích về an toàn phòng cháy chữa cháy để cứu người ('giving advice that can save lives').",
          "trap": "Họ đến nhà là để 'đưa ra lời khuyên' (giving advice), chính lời khuyên đó mới là thứ cứu sống tính mạng!",
          "vocab": [
            {
              "word": "give advice",
              "phonetic": "/ɡɪv ədˈvaɪs/",
              "meaning": "đưa ra lời khuyên, hướng dẫn"
            },
            {
              "word": "save lives",
              "phonetic": "/seɪv laɪvz/",
              "meaning": "cứu mạng người"
            }
          ]
        }
      },
      {
        "id": "de3_r_q29",
        "number": 29,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "29. Female firefighters seem to be good at",
        "options": [
          "saving lives.",
          "office work.",
          "talking to the public."
        ],
        "correct_answer": "talking to the public.",
        "explanation": {
          "msg": "Thế mạnh của các nữ lính cứu hỏa là gì nè bạn?",
          "trans_q": "Các nữ lính cứu hỏa dường như rất giỏi trong việc:",
          "trans_opts": [
            "cứu người",
            "làm việc văn phòng",
            "giao tiếp, nói chuyện với người dân (talking to the public)"
          ],
          "clue": "Đoạn 3: 'Women are often good at doing this because of their ABILITY TO COMMUNICATE WELL.'",
          "why_right": "Ability to communicate well (kỹ năng giao tiếp tốt) = talking to the public (nói chuyện với công chúng, người dân)!",
          "trap": "Communicate well tương đương trực tiếp với talking to the public.",
          "vocab": [
            {
              "word": "communicate well",
              "phonetic": "/kəˈmjuːnɪkeɪt wel/",
              "meaning": "giao tiếp tốt"
            },
            {
              "word": "the public",
              "phonetic": "/ðə ˈpʌblɪk/",
              "meaning": "công chúng, người dân"
            }
          ]
        }
      },
      {
        "id": "de3_r_q30",
        "number": 30,
        "part": "Part 4",
        "part_title": "Part 4: Đọc hiểu văn bản",
        "part_instruction": "Đọc văn bản và chọn đáp án đúng.",
        "type": "mcq",
        "audio": "",
        "image": "",
        "passage": "",
        "question": "30. Dany is interested in",
        "options": [
          "the danger of emergencies.",
          "the variety in her work.",
          "being a manager."
        ],
        "correct_answer": "the variety in her work.",
        "explanation": {
          "msg": "Xác định điều khiến Dany cảm thấy hứng thú nhất trong công việc của mình.",
          "trans_q": "Dany cảm thấy hứng thú với:",
          "trans_opts": [
            "sự nguy hiểm của các trường hợp khẩn cấp",
            "sự đa dạng trong công việc của mình (the variety in her work)",
            "việc làm người quản lý"
          ],
          "clue": "Câu kết thúc bài: 'One of the things she finds most interesting about her job is THIS COMBINATION of using her skills with people and working in real life emergency situations.'",
          "why_right": "Sự kết hợp (combination) giữa giao tiếp với người dân và xử lý các vụ khẩn cấp thực tế chính là sự ĐA DẠNG trong công việc ('the variety in her work')!",
          "trap": "Combination of different tasks = variety (sự đa dạng, phong phú).",
          "vocab": [
            {
              "word": "variety",
              "phonetic": "/vəˈraɪəti/",
              "meaning": "sự đa dạng, phong phú"
            },
            {
              "word": "combination",
              "phonetic": "/ˌkɒmbɪˈneɪʃn/",
              "meaning": "sự kết hợp"
            }
          ]
        }
      }
    ],
    "difficulty": "hard",
    "level_code": "B1",
    "level_title": "Cấp Độ: Nâng Cao (Chuẩn B1 Thử Thách)",
    "difficulty_badge": "🔴 Khó (B1)",
    "target_desc": "Mục tiêu: Đạt 21 - 30 câu (7.0 - 10 điểm). Chứa các bài đọc dài về nhà thám hiểm Everest/Nam Cực và nữ lính cứu hỏa Dany."
  }
];
