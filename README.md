# 🌸 Study with Lâm - Hệ Thống Luyện Thi Tiếng Anh (Phenikaa A2 - B1)

Ứng dụng web tĩnh (Single Page Application) tổng hợp toàn bộ **3 bộ đề thi Tiếng Anh (3 đề Nghe + 3 đề Đọc - 165 câu hỏi)** chuẩn cấu trúc KET / VSTEP Phenikaa University.

Trang web được thiết kế theo phong cách **Liquid Glass (Kính mờ) với tông màu hồng nhạt (Blush Pink)** tinh tế, tối ưu trải nghiệm mượt mà trên điện thoại và có **lời giải thích chi tiết 5 tầng** giúp người học tiếp thu nhanh nhất.

---

## ✨ Tính Năng Nổi Bật

1. **Giao diện Liquid Glass & Tông Hồng Nhạt Tinh Tế:**
   - Hiệu ứng kính mờ acrylic (`backdrop-filter: blur(20px)`), viền phản chiếu ánh sáng dịu mắt.
   - Thẻ bo tròn mềm mại (`border-radius: 20px`), nút bấm dạng viên thuốc.
   - Không chứa icon rườm rà, tối giản và hiện đại.

2. **Tối Ưu 100% Cho Thiết Bị Di Động:**
   - **Thanh nộp bài Floating Dock:** Nổi ở đáy màn hình với tiến độ làm bài trực quan.
   - **Thanh nghe nhạc Sticky Audio:** Gắn cố định trên đầu trang với các tab chuyển nhanh từng Part (`[🎧 Part 1] [🎧 Part 2]...`), tua lùi 5s (`⏪ -5s`), tua tiến 5s (`+5s ⏩`) và nút chỉnh tốc độ (`0.8x`, `1.0x`, `1.25x`).
   - **Chạm chọn nhanh A - K:** Ô chọn chữ cái cho bài nối biển báo, không cần mở bàn phím ảo.
   - **Phóng to tài liệu (Lightbox):** Nhấp vào bất kỳ biển báo hay biểu mẫu nào để phóng to xem rõ nét trên màn hình điện thoại.

3. **Hai Chế Độ Học Linh Hoạt:**
   - **⏱️ Thi Thử (Bấm giờ):** Có đồng hồ đếm ngược (25 - 30 phút). Nộp bài tính điểm thang 10, hiển thị bảng điểm và bộ lọc **"Chỉ xem câu chưa đúng"** để ôn tập tập trung.
   - **💡 Ôn Luyện (Xem giải thích ngay):** Vừa làm vừa xem đáp án và phân tích chi tiết của từng câu mà không cần chờ nộp bài.

4. **Hệ Thống Lời Giải 5 Tầng Cực Dễ Hiểu:**
   - 💡 **Mẹo nhỏ / Điểm lưu ý:** Chỉ ra mấu chốt ngữ pháp hoặc mẹo nghe của câu.
   - 🌐 **Dịch nghĩa tiếng Việt 100%:** Dịch toàn bộ câu hỏi và các phương án A, B, C, D.
   - 🔍 **Vị trí manh mối (Clue):** Trích đúng câu thoại trong file nghe hoặc đoạn văn trong bài đọc.
   - 💡 **Tại sao đúng:** Phân tích logic tự nhiên, không dùng thuật ngữ rườm rà.
   - ⚠️ **Điểm dễ nhầm lẫn (Trap Alert):** Nhận diện bẫy đề thi hay gài.
   - 📚 **Sổ tay từ vựng:** Danh sách từ mới kèm phiên âm quốc tế và nghĩa tiếng Việt.

---

## 🚀 Hướng Dẫn Triển Khai Lên GitHub Pages (Dùng Online Miễn Phí)

Chỉ cần tải toàn bộ nội dung trong thư mục này lên GitHub và bật GitHub Pages, bạn gái bạn có thể mở web bằng điện thoại ở bất kỳ đâu mà không cần máy tính:

1. **Khởi tạo và đẩy lên GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Study with Lam English App"
   git branch -M main
   git remote add origin https://github.com/<tên-username>/<tên-repo>.git
   git push -u origin main
   ```
2. **Kích hoạt GitHub Pages:**
   - Vào repository trên GitHub -> Chọn tab **Settings** (Cài đặt).
   - Chọn mục **Pages** ở thanh menu bên trái.
   - Ở mục **Branch**, chọn `main` và thư mục `/ (root)`, sau đó bấm **Save**.
   - Chờ khoảng 1 phút, GitHub sẽ tạo đường link có dạng:
     `https://<tên-username>.github.io/<tên-repo>/`
3. **Gửi link này cho bạn gái:** Mở trên Safari hoặc Chrome điện thoại là làm bài mượt mà ngay lập tức!

---

## 💻 Chạy Trực Tiếp Offline (Không Cần Mạng)

- Nhấp đúp chuột trực tiếp vào file `index.html` trên máy tính.
- Hoặc mở terminal chạy: `python -m http.server 8080` và mở `http://localhost:8080`.
