# Hương Ly — bản xuất v6

## Công nghệ
- Giao diện: React 19 + TypeScript.
- Điều hướng và xử lý phía máy chủ: TanStack Start / TanStack Router, không phải Next.js.
- Kiểu dáng: Tailwind CSS 4 + shadcn/ui (Radix UI); chuyển động: Motion.
- Công cụ phát triển: Vite; ưu tiên Bun để cài đúng bun.lock.
- Next.js cũng là framework React full-stack: hỗ trợ cả frontend lẫn backend, không chỉ backend.

## Chạy local
1. Cài Bun, mở thư mục này, chạy `bun install` rồi `bun run dev`.
2. ZIP không chứa .env, thư viện đã cài, bản dựng, dữ liệu khách hàng hoặc lịch sử Git.
3. package.json và bun.lock được giữ để cài lại thư viện.
4. Kết nối dịch vụ dữ liệu không tự chuyển sang máy mới. Các chức năng cần kết nối phải được cấu hình hoặc thay thế; bản xuất này chưa được chạy thử trên máy khác.

## Ảnh và video đầy đủ
Toàn bộ 16 tệp media từng dùng liên kết lưu trữ đã được chuyển thành tệp thật trong src/assets và code nhập trực tiếp các tệp đó. Riêng nhật ký Số 09: 6 ảnh + 2 video + 2 ảnh bìa video nằm trong src/assets/delivery/. Ảnh cửa hàng và thư tay nằm trong src/assets/. Không còn .asset.json hoặc thư mục public/__l5e/assets-v1/ trong bản xuất này. Hai ảnh nhật ký vốn là WebP được giữ nguyên dữ liệu và đổi đuôi đúng thành .webp. Không cần CDN Lovable để tải các media này.
Bốn video khu vườn cũ không được dùng đã bỏ khỏi bản xuất; bestseller hiện dùng ảnh cây mỗi mùa. Hai video nhật ký mới và ảnh xem trước đều được kèm.

## Lưu ý cho agent chuyển lời nhắc
Giữ UI và các chức năng không liên quan. Kiểm tra toàn bộ nơi gọi kết nối, hàm máy chủ, schema và migration trước khi thay hoặc bỏ dịch vụ; không chỉ xóa thư mục kết nối rồi để lại các lời gọi.
Giữ đúng các quy tắc ngày không được ở quá khứ, kiểm tra đầu vào và giới hạn gửi trong mã nguồn/migration hiện tại; không tự đổi con số hoặc chỉ kiểm tra ở trình duyệt. Giữ chức năng không cần đăng nhập, chỉ ghi công khai và không cho khách đọc danh sách lời nhắc.
Chỉ báo thành công khi lưu thật thành công. Nếu bỏ lưu, phải vô hiệu hóa nút và thông báo rõ, không giả vờ đã lưu. Email chưa hoạt động cho tới khi xác minh tên miền gửi và triển khai gửi thật.
Cấu hình thông tin riêng tư qua biến môi trường an toàn của môi trường mới. Kiểm tra lưu thật, ngày quá khứ, đầu vào sai, giới hạn gửi và lỗi mạng. ZIP có mã schema/migration, không có dữ liệu đã lưu trên Lovable Cloud.
