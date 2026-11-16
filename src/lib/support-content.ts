export type SupportSection = { title: string; paragraphs?: string[]; items?: string[] };
export type SupportPage = {
  id: string; to: string; title: string; shortTitle: string; description: string;
  icon: "truck" | "refresh" | "calendar" | "flower" | "wallet" | "shield" | "message" | "file" | "bag" | "leaf";
  proposed: boolean; highlight: string; sections: SupportSection[];
};

export const supportPages = [
  {
    id: "giao-nhan", to: "/chinh-sach/giao-nhan", title: "Chính sách giao nhận", shortTitle: "Giao nhận hoa", icon: "truck", proposed: true,
    description: "Phạm vi giao hoa, cách xác nhận địa chỉ, khung giờ và kiểm tra hoa khi nhận tại Hương Ly.",
    highlight: "Hoa tươi mỗi sáng. Đặt trước 15 giờ để tiệm sắp xếp giao trong ngày nội thành Hà Nội, sau khi xác nhận đơn.",
    sections: [
      { title: "Phạm vi và thời gian giao hoa", items: ["Tiệm giới thiệu dịch vụ giao trong ngày nội thành Hà Nội. Địa chỉ ngoài khu vực này cần trao đổi trước để kiểm tra khả năng giao.", "Khung giờ giao cần được tiệm xác nhận theo địa chỉ, mẫu hoa và lịch làm hoa; lựa chọn trên website chưa phải lịch giao được chốt.", "Vào ngày lễ, thời tiết xấu hoặc khi giao thông thay đổi, nên đặt sớm và trao đổi một khoảng thời gian nhận phù hợp."] },
      { title: "Thông tin cần cung cấp", items: ["Tên và số điện thoại người đặt, người nhận; địa chỉ đầy đủ gồm số nhà, ngõ, tầng hoặc tên tòa nhà.", "Ngày giao, khung giờ mong muốn, nội dung thiệp và yêu cầu giữ kín tên người tặng nếu có.", "Với bệnh viện, văn phòng hoặc địa điểm tổ chức sự kiện, bổ sung vị trí nhận hoa và quy định ra vào."] },
      { title: "Phí giao và xác nhận đơn", paragraphs: ["Đề xuất: tiệm báo phí giao theo địa chỉ và thời điểm trước khi khách xác nhận. Trang thanh toán hiện là bản thử nghiệm; phí hiển thị ở đó không phải bảng giá giao nhận chính thức."], items: ["Đối chiếu giá hoa, phụ kiện, phí giao và tổng tiền trước khi chốt.", "Không mặc định giao miễn phí hoặc giao toàn quốc khi chưa có xác nhận của tiệm."] },
      { title: "Nếu người nhận chưa có mặt", items: ["Đề xuất: liên hệ người đặt hoặc người nhận để thống nhất nơi nhận thay, đổi giờ hoặc phương án giao lại.", "Không tự để hoa ngoài trời hay giao cho người khác nếu chưa được đồng ý.", "Chi phí phát sinh, nếu có, cần được thông báo và thống nhất trước khi tiếp tục."] },
      { title: "Kiểm tra khi nhận hoa", items: ["Kiểm tra mẫu hoa, tình trạng cành và giấy gói, thiệp cùng phụ kiện ngay khi nhận.", "Nếu có vấn đề, chụp ảnh tổng thể và cận cảnh, giữ thông tin đặt hàng rồi trao đổi với tiệm.", "Đưa hoa vào nơi mát và làm theo hướng dẫn chăm hoa, tránh để lâu trong xe hoặc dưới nắng."] },
    ],
  },
  {
    id: "doi-hoa", to: "/chinh-sach/doi-hoa", title: "Đổi hoa nếu héo trong 24 giờ", shortTitle: "Đổi hoa trong 24 giờ", icon: "refresh", proposed: true,
    description: "Hướng dẫn thông báo hoa héo, chuẩn bị ảnh và trao đổi phương án đổi hoa trong 24 giờ.",
    highlight: "Website đang giới thiệu hỗ trợ đổi hoa nếu héo trong 24 giờ. Các điều kiện dưới đây là đề xuất, cần tiệm duyệt trước khi áp dụng.",
    sections: [
      { title: "Khi nào nên liên hệ tiệm?", items: ["Hoa héo bất thường trong 24 giờ kể từ lúc nhận: hãy báo sớm để tiệm xem tình trạng thực tế.", "Hoa bị gãy, dập hoặc giao sai mẫu: ghi nhận ngay khi nhận và gửi hình ảnh cho tiệm.", "Một vài cánh ngoài của hoa hồng hoặc độ nở khác nhau chưa đủ để kết luận hoa hỏng; tiệm cần xem ảnh để tư vấn."] },
      { title: "Thông tin hỗ trợ kiểm tra", items: ["Tên hoặc số điện thoại dùng khi đặt, mã đơn nếu có, giờ nhận và giờ phát hiện vấn đề.", "Ảnh toàn bộ bó hoặc giỏ hoa, ảnh cận cảnh phần héo và bao gói khi nhận.", "Mô tả cách bảo quản: đã cắm nước chưa, vị trí đặt hoa và có tiếp xúc nắng, nóng hoặc gió mạnh không."] },
      { title: "Quy trình đổi hoa đề xuất", items: ["Tiệm tiếp nhận thông tin và kiểm tra ảnh; có thể cần xem hoa trực tiếp.", "Hai bên thống nhất thay cành bị ảnh hưởng, làm lại phần hoa hoặc đổi sản phẩm phù hợp với nguồn hoa có sẵn.", "Mẫu thay thế, lịch nhận và phí vận chuyển nếu có phải được trao đổi trước; không tự động tính thêm chi phí."] },
      { title: "Những trường hợp cần xem xét riêng", items: ["Hoa để lâu thiếu nước, dưới nắng, gần nguồn nhiệt hoặc trong xe nóng.", "Hoa bị tác động sau khi giao, đã thay đổi cách cắm hoặc tháo kết cấu giỏ hoa.", "Yêu cầu đổi vì sở thích màu sắc hoặc mẫu mới khác với mẫu đã chốt. Tiệm và khách cần trao đổi riêng, không mặc định thuộc hỗ trợ hoa héo."] },
      { title: "Đổi hoa không đồng nghĩa hoàn tiền tự động", paragraphs: ["Phương án hoàn tiền, hủy đơn hoặc thay thế khác là nội dung cần thỏa thuận từng trường hợp. Bản đề xuất này không đặt mức hoàn tiền, hạn xử lý hay điều kiện từ chối mới."] },
    ],
  },
  {
    id: "dat-truoc", to: "/ho-tro/dat-truoc", title: "Đặt hoa trước theo dịp", shortTitle: "Đặt hoa trước", icon: "calendar", proposed: true,
    description: "Chuẩn bị hoa cho sinh nhật, ngày lễ, khai trương và cưới hỏi; thống nhất mẫu, thiệp và lịch giao.",
    highlight: "Một ngày đáng nhớ bắt đầu từ những điều nhỏ: mẫu hoa hợp người nhận, lời thiệp đúng ý và thời gian được xác nhận.",
    sections: [
      { title: "Chuẩn bị trước khi đặt", items: ["Chọn dịp tặng, ngân sách dự kiến, loài hoa hoặc màu sắc yêu thích của người nhận.", "Gửi ảnh tham khảo nếu có và cho biết ưu tiên của bạn: đúng màu, đúng loài hay cảm giác tổng thể của bó hoa.", "Chuẩn bị ngày giao, địa chỉ, thông tin người nhận và nội dung thiệp."] },
      { title: "Sinh nhật và những ngày lễ", items: ["Đề xuất: liên hệ sớm khi cần hoa vào Valentine, 8/3, 20/10 hoặc 20/11 để kiểm tra nguồn hoa và lịch giao.", "Không đặt thời hạn đặt trước cố định khi tiệm chưa công bố; thời gian chuẩn bị phụ thuộc mẫu và lượng đơn.", "Nếu muốn tạo bất ngờ, trao đổi trước cách liên hệ người nhận và thông tin được phép tiết lộ."] },
      { title: "Hoa cưới, xe hoa và hoa sự kiện", items: ["Cần trao đổi kiểu dáng, kích thước, địa điểm, thời gian hoàn thành và yêu cầu lắp đặt.", "Với xe hoa, cung cấp loại xe, màu xe và vị trí trang trí để tiệm kiểm tra phương án phù hợp.", "Mức đặt cọc, chi phí lắp đặt và thay đổi lịch chỉ có hiệu lực sau khi hai bên thống nhất; website chưa công bố mức cố định."] },
      { title: "Thay đổi mẫu hoặc lịch", items: ["Báo sớm khi cần sửa thiệp, địa chỉ, ngày giao hoặc mẫu hoa.", "Nếu hoa đã được đặt riêng hoặc bắt đầu làm, tiệm cần kiểm tra khả năng thay đổi và báo chi phí trước.", "Thay thế loài hoa do mùa vụ chỉ nên thực hiện sau khi khách đồng ý về màu sắc và giá trị của phương án mới."] },
      { title: "Lời nhắc dịp trên website", paragraphs: ["Bạn có thể lưu email, dịp và ngày mong muốn tại trang chủ mà không cần tài khoản. Hiện email nhắc dịp chưa được kích hoạt: việc lưu ngày không tạo đơn đặt hoa và chưa bảo đảm sẽ có email gửi đến."] },
    ],
  },
  {
    id: "chon-hoa", to: "/ho-tro/chon-hoa", title: "Hướng dẫn chọn hoa", shortTitle: "Chọn hoa đúng dịp", icon: "flower", proposed: false,
    description: "Chọn hoa theo dịp tặng, người nhận, màu sắc, hương thơm và ngân sách cùng Hương Ly.",
    highlight: "Không cần một bó hoa thật lớn. Một loài hoa người nhận yêu thích, đi cùng lời nhắn chân thành, đã đủ đẹp.",
    sections: [
      { title: "Chọn theo người nhận", items: ["Người thích sự dịu dàng: cân nhắc hồng màu nhạt, cát tường hoặc hoa phối tông mềm.", "Người thích sắc màu tươi sáng: hướng dương, đồng tiền hoặc hoa phối nhiều sắc có thể là lựa chọn phù hợp.", "Hỏi trước về dị ứng và mức độ nhạy cảm với hương hoa; ý nghĩa loài hoa chỉ là gợi ý, sở thích người nhận vẫn quan trọng nhất."] },
      { title: "Chọn theo dịp", items: ["Sinh nhật: hoa bó dễ trao tay, chọn màu theo sở thích và thêm một lời chúc riêng.", "Chúc mừng hoặc khai trương: giỏ, lẵng hoa thuận tiện trưng bày; kiểm tra không gian đặt và nội dung bảng chúc.", "Cưới hỏi: thống nhất bảng màu với trang phục và không gian; hoa cầm tay, hoa bàn và xe hoa cần được tính cùng nhau.", "Ghé thăm người đang nghỉ dưỡng: hỏi quy định địa điểm, ưu tiên bó gọn và tránh hương quá nồng khi người nhận nhạy cảm."] },
      { title: "Bó hoa, giỏ hoa hay cành lẻ?", items: ["Hoa bó phù hợp trao tặng; người nhận cần bình và nước sạch nếu muốn cắm lại.", "Giỏ hoặc lẵng hoa thuận tiện trưng bày; cần kiểm tra và bổ sung nước cho xốp cắm.", "Hoa cành lẻ phù hợp tự cắm, phối với bình sẵn có hoặc trang trí một góc nhỏ."] },
      { title: "Ngân sách và hình ảnh mẫu", items: ["Cho tiệm biết tổng ngân sách dự kiến, gồm hoa, thiệp, phụ kiện và giao nhận.", "Ảnh mẫu giúp trao đổi phong cách; hoa tự nhiên thay đổi độ nở, kích thước và màu theo mùa.", "Nếu một loài không có sẵn, yêu cầu tiệm gửi phương án thay thế trước khi đồng ý."] },
      { title: "Một lời thiệp vừa đủ", paragraphs: ["Viết rõ tên người nhận, lời chúc và chữ ký mong muốn; đọc lại dấu tiếng Việt, tên riêng và ngày tháng. Nếu gửi ẩn danh, trao đổi với tiệm trước thay vì chỉ bỏ trống tên người đặt."] },
    ],
  },
  {
    id: "thanh-toan", to: "/chinh-sach/thanh-toan", title: "Chính sách thanh toán", shortTitle: "Thanh toán", icon: "wallet", proposed: true,
    description: "Đối chiếu tổng tiền, xác nhận phương thức thanh toán và lưu chứng từ khi đặt hoa tại Hương Ly.",
    highlight: "Trang thanh toán hiện là bản thử nghiệm, chưa thu tiền và chưa lưu đơn thật. Chỉ thanh toán khi tiệm xác nhận trực tiếp thông tin nhận tiền.",
    sections: [
      { title: "Trước khi thanh toán", items: ["Kiểm tra tên mẫu, kích thước, số lượng, phụ kiện, nội dung thiệp và địa chỉ giao.", "Yêu cầu tổng tiền rõ ràng, gồm giá hoa và những khoản đã thống nhất.", "Thông báo xác nhận trên bản thử nghiệm không phải chứng từ thu tiền hay bằng chứng tiệm đã tiếp nhận đơn thật."] },
      { title: "Phương thức cần được xác nhận", items: ["Tiền mặt, chuyển khoản và MoMo đang là lựa chọn minh họa trên website; tiệm cần xác nhận phương thức thực tế cho từng đơn.", "Các logo thanh toán trong chân trang không chứng minh mọi dịch vụ đã được tích hợp hoặc chấp nhận.", "Website chưa công bố số tài khoản hay mã QR chính thức; không chuyển tiền theo thông tin chưa được tiệm xác nhận."] },
      { title: "Nếu thanh toán bằng chuyển khoản", items: ["Đối chiếu ngân hàng, tên người thụ hưởng, số tài khoản và số tiền với thông tin tiệm gửi qua kênh đã xác minh.", "Ghi nội dung chuyển khoản theo hướng dẫn của tiệm và lưu chứng từ giao dịch.", "Không cung cấp mật khẩu, mã OTP, mã PIN hoặc toàn bộ thông tin thẻ cho người tự xưng là nhân viên."] },
      { title: "Đặt cọc và chi phí phát sinh", paragraphs: ["Đề xuất: với mẫu đặt riêng hoặc hoa sự kiện, mức đặt cọc, thời điểm thanh toán phần còn lại và điều kiện thay đổi phải được hai bên chốt trước. Chưa có tỷ lệ đặt cọc hoặc khoản phụ thu chính thức trong bản đề xuất này."] },
      { title: "Giao dịch lỗi hoặc yêu cầu hoàn tiền", items: ["Nếu đã trừ tiền nhưng tiệm chưa xác nhận, kiểm tra với ngân hàng hoặc ví và gửi chứng từ cho tiệm; tránh thanh toán lại ngay.", "Hoàn tiền cần đối chiếu giao dịch và phương án xử lý đơn. Phương thức và thời gian cụ thể phải được tiệm xác nhận.", "Không có cam kết tự động hoàn tiền hoặc hạn hoàn tiền cố định trong bản đề xuất này."] },
    ],
  },
  {
    id: "bao-mat", to: "/chinh-sach/bao-mat", title: "Chính sách bảo mật", shortTitle: "Thông tin & bảo mật", icon: "shield", proposed: true,
    description: "Thông tin về lời nhắc dịp, các biểu mẫu thử nghiệm, dịch vụ bên ngoài và thống kê lượt truy cập của website Hương Ly.",
    highlight: "Bản đề xuất do Hương Ly rà soát trước khi áp dụng. Phần dưới mô tả website hiện tại; mục đích xử lý, quyền truy cập và thời hạn lưu của tiệm cần được xác nhận thêm.",
    sections: [
      { title: "Thông tin bạn nhập trên website", items: ["Lời nhắc dịp: email, loại dịp và ngày bạn chọn được gửi đến Lovable Cloud để lưu. Chức năng này không cần tài khoản và hiện chưa gửi email.", "Giỏ hoa hiện giữ lựa chọn tạm thời trong phiên mở trang. Biểu mẫu thanh toán là bản thử nghiệm, chưa gửi đơn thật hay thực hiện giao dịch.", "Biểu mẫu liên hệ và đăng ký nhận tin ở chân trang hiện chưa gửi nội dung đến tiệm. Thông báo minh họa không có nghĩa lời nhắn đã được tiếp nhận.", "Nếu bạn tự liên hệ tiệm qua một dịch vụ khác, thông tin đó được xử lý qua dịch vụ bạn chọn, không phải qua các biểu mẫu thử nghiệm này."] },
      { title: "Mục đích và người tiếp nhận — đề xuất", paragraphs: ["Đề xuất để tiệm duyệt: dùng thông tin khách cung cấp để tư vấn, xác nhận mẫu, giao hoa và xử lý yêu cầu hỗ trợ. Khi có dịch vụ giao nhận thật, cần xác định đơn vị nhận thông tin và những trường dữ liệu cần chia sẻ trước khi công bố."], items: ["Dữ liệu lời nhắc hiện được lưu trên Lovable Cloud. Danh sách người tại tiệm được quyền xem và thời hạn lưu chưa được tiệm xác nhận.", "Việc gửi email quảng bá, chia sẻ dữ liệu cho đối tác hoặc xử lý đơn thật không được coi là đã có sự đồng ý chỉ từ bản đề xuất này."] },
      { title: "Thống kê lượt truy cập khi xuất bản", paragraphs: ["Website được cấu hình dùng thống kê của Lovable, gồm ghi nhận lượt nhấp. Bản xem trước trong trình chỉnh sửa không được tính. Khi website được xuất bản, lượt nhấp vào nút và liên kết được ghi nhận cho mọi khách truy cập; lượt xem trang, thời gian trên trang, tốc độ tải và lỗi cũng được ghi nhận cho mọi khách truy cập, không dùng cookie và không nhận diện cá nhân.", "Dữ liệu gồm trang đã xem, nguồn truy cập, quốc gia, trình duyệt, hệ điều hành, loại thiết bị, thời gian ở lại, tốc độ tải, lỗi và vị trí nút hoặc liên kết được nhấp. Website hiện không gửi sự kiện riêng ngoài báo cáo lỗi.", "Thống kê của Lovable không dùng cookie, không lưu gì trên thiết bị người truy cập, không lưu địa chỉ IP và không nhận diện người truy cập. Dữ liệu chi tiết được giữ trong 90 ngày; tổng hợp theo ngày được giữ trong một năm.", "Lovable thu thập dữ liệu này cho chúng tôi. Chính sách quyền riêng tư của Lovable giải thích cách dịch vụ xử lý dữ liệu."] },
      { title: "Bản đồ, phông chữ và hình ảnh", items: ["Bản đồ Google Maps được nhúng ở chân trang. Khi tải bản đồ, trình duyệt liên hệ Google và có thể gửi địa chỉ IP cùng thông tin trình duyệt; cookie và cách xử lý phụ thuộc Google và lựa chọn của bạn.", "Phông chữ được tải qua Google Fonts; yêu cầu tải gửi thông tin kết nối, gồm địa chỉ IP, đến Google.", "Một số ảnh được tải từ dịch vụ phân phối nội dung của Lovable; máy chủ nhận yêu cầu tải và thông tin kết nối cần thiết. Đây không phải cam kết rằng toàn bộ website không lưu hoặc xử lý dữ liệu."] },
      { title: "Yêu cầu liên quan đến dữ liệu", paragraphs: ["Đề xuất: khách có thể trao đổi với tiệm để hỏi về, sửa hoặc đề nghị xóa thông tin đã cung cấp. Website hiện chưa có công cụ tự phục vụ để xem hoặc xóa lời nhắc; kênh liên hệ chính thức, quy trình xác minh và thời hạn phản hồi cần tiệm bổ sung.", "Tiệm cần duyệt thời hạn lưu dữ liệu đặt hàng, người nhận, hỗ trợ và lời nhắc trước khi áp dụng chính sách. Không mặc định các thời hạn này giống thời hạn thống kê của Lovable."] },
    ],
  },
  {
    id: "khieu-nai", to: "/ho-tro/khieu-nai", title: "Giải quyết khiếu nại", shortTitle: "Góp ý & khiếu nại", icon: "message", proposed: true,
    description: "Chuẩn bị thông tin, ghi nhận vấn đề và thống nhất hướng xử lý khi đơn hoa chưa đúng mong muốn.",
    highlight: "Đề xuất: lắng nghe từng vấn đề, kiểm tra thông tin rõ ràng và thống nhất phương án với khách trước khi thực hiện.",
    sections: [
      { title: "Những vấn đề có thể phản ánh", items: ["Tình trạng hoa khi nhận, mẫu hoặc màu khác với thỏa thuận, sai thiệp hay thiếu phụ kiện.", "Địa chỉ, người nhận, thời gian giao hoặc khoản thanh toán không đúng nội dung đã chốt.", "Góp ý về tư vấn, giao nhận và hướng dẫn chăm hoa."] },
      { title: "Chuẩn bị thông tin", items: ["Tên và thông tin đặt hàng, mã đơn nếu có, ngày giao và nội dung đã được tiệm xác nhận.", "Ảnh hoặc video tình trạng hoa, thiệp, phụ kiện và chứng từ thanh toán nếu liên quan.", "Mô tả ngắn vấn đề và phương án bạn mong muốn. Không gửi OTP, mật khẩu hoặc thông tin thẻ đầy đủ."] },
      { title: "Quy trình tiếp nhận đề xuất", items: ["Tiệm ghi nhận phản ánh và kiểm tra với thông tin đặt hàng, người làm hoa hoặc giao hoa.", "Nếu còn thiếu dữ liệu, tiệm trao đổi để làm rõ thay vì kết luận từ một ảnh riêng lẻ.", "Hai bên thống nhất hướng xử lý, thời gian thực hiện và cách cập nhật kết quả."] },
      { title: "Phương án cần thỏa thuận", items: ["Tùy trường hợp, có thể trao đổi sửa thiệp, bổ sung phụ kiện, thay hoa hoặc điều chỉnh giao nhận.", "Việc đổi sản phẩm hay hoàn tiền cần được tiệm xác nhận; không tự động áp dụng mọi phương án cùng lúc.", "Chưa có thời hạn phản hồi hoặc mức bồi thường được tiệm công bố trong bản đề xuất này."] },
      { title: "Liên hệ đúng kênh", paragraphs: ["Bạn có thể xem địa chỉ tiệm tại trang Liên hệ. Số điện thoại hiện còn là thông tin mẫu; biểu mẫu lời nhắn chưa gửi thật. Tiệm cần bổ sung kênh liên hệ chính thức trước khi tiếp nhận phản ánh trực tuyến."] },
    ],
  },
  {
    id: "dieu-khoan", to: "/chinh-sach/dieu-khoan", title: "Điều khoản sử dụng", shortTitle: "Điều khoản sử dụng", icon: "file", proposed: true,
    description: "Bản đề xuất điều khoản cho nội dung website, trải nghiệm thử nghiệm và việc xác nhận đặt hoa tại Hương Ly.",
    highlight: "Đây là nội dung đề xuất chờ Hương Ly duyệt, không phải điều khoản pháp lý đã có hiệu lực hay cam kết thay thế thỏa thuận đặt hoa.",
    sections: [
      { title: "Phạm vi website", paragraphs: ["Website giới thiệu hoa, câu chuyện tiệm và hướng dẫn lựa chọn. Hiện nhiều thông tin sản phẩm và trải nghiệm đặt hàng là minh họa; cần xác nhận với tiệm trước khi đặt mua thực tế."] },
      { title: "Nội dung và hình ảnh", items: ["Ảnh mẫu mô tả phong cách; hoa tự nhiên có thể khác độ nở, dáng cành và sắc độ.", "Thông tin giá và nguồn hoa cần đối chiếu tại thời điểm tiệm xác nhận đơn.", "Đề xuất: khi muốn sử dụng lại ảnh hoặc nội dung của tiệm, liên hệ để hỏi quyền sử dụng; quyền sở hữu từng tư liệu cần được tiệm kiểm tra."] },
      { title: "Trải nghiệm đặt hoa hiện tại", items: ["Giỏ hoa và trang thanh toán phục vụ thử trải nghiệm; chưa tạo giao dịch thu tiền hay đơn thật được lưu tại tiệm.", "Mã đơn minh họa không phải hợp đồng mua bán, xác nhận giao hoa hoặc chứng từ thanh toán.", "Lưu lời nhắc dịp không phải đặt trước mẫu hoa và hiện chưa kích hoạt email."] },
      { title: "Thông tin và cách sử dụng — đề xuất", items: ["Cung cấp thông tin chính xác khi trao đổi đặt hoa thật, đặc biệt là địa chỉ và số điện thoại người nhận.", "Không gửi nội dung giả mạo, quấy rối hay dữ liệu của người khác khi không có cơ sở phù hợp để cung cấp.", "Không gửi thông tin đăng nhập ngân hàng, mã OTP hoặc dữ liệu thanh toán nhạy cảm qua lời nhắn."] },
      { title: "Cập nhật và nội dung cần duyệt", paragraphs: ["Tiệm cần bổ sung thông tin chủ thể kinh doanh, kênh liên hệ, thời điểm áp dụng và quy trình xử lý tranh chấp trước khi công bố điều khoản chính thức. Bản đề xuất không đặt quy định miễn trách nhiệm, luật áp dụng hoặc hạn chế quyền của khách."] },
    ],
  },
  {
    id: "ban-hoa", to: "/chinh-sach/ban-hoa", title: "Chính sách bán hoa", shortTitle: "Đặt mua & bán hoa", icon: "bag", proposed: true,
    description: "Cách trao đổi mẫu hoa, xác nhận giá, nguồn hoa, thay đổi và hủy đơn theo bản đề xuất của Hương Ly.",
    highlight: "Đề xuất: chỉ chốt đơn sau khi khách và tiệm cùng thống nhất mẫu, tổng tiền, lịch giao và những yêu cầu riêng.",
    sections: [
      { title: "Mẫu hoa và nguồn hoa", items: ["Hoa bó, giỏ, lẵng, hoa cưới, xe hoa và cành lẻ cần được kiểm tra nguồn hoa trước khi chốt.", "Hoa theo mùa thay đổi về kích thước, độ nở và sắc độ; ảnh mẫu là điểm bắt đầu để trao đổi.", "Nếu cần thay loài hoặc phụ liệu, đề xuất tiệm gửi phương án và chỉ thực hiện khi khách đồng ý."] },
      { title: "Giá và tổng tiền", items: ["Giá sản phẩm hiện có thể là dữ liệu minh họa; giá bán thực tế cần tiệm xác nhận.", "Nêu rõ giá hoa, phụ kiện, thiệp, lắp đặt và giao nhận nếu phát sinh.", "Khuyến mãi chỉ áp dụng khi tiệm công bố điều kiện cụ thể, không suy ra từ hình ảnh hoặc logo dịch vụ."] },
      { title: "Xác nhận đơn thực tế", items: ["Chốt mẫu, màu, kích thước hoặc số lượng theo cách tiệm và khách cùng hiểu.", "Đối chiếu thông tin người nhận, lịch giao, nội dung thiệp và phương thức thanh toán.", "Trang thanh toán hiện chưa lưu đơn thật; cần liên hệ trực tiếp qua kênh được tiệm xác nhận."] },
      { title: "Sửa hoặc hủy đơn — đề xuất", items: ["Liên hệ sớm trước khi tiệm chuẩn bị hoa nếu muốn đổi mẫu, chuyển ngày hoặc hủy.", "Với hoa đã đặt riêng, đã làm hoặc đã giao, tiệm cần kiểm tra chi phí thực tế và trao đổi phương án.", "Chưa có mức phí hủy, tỷ lệ hoàn cọc hoặc hạn thay đổi được công bố trong bản đề xuất này."] },
      { title: "Sau khi nhận hoa", paragraphs: ["Kiểm tra hoa và làm theo hướng dẫn chăm. Nếu hoa héo trong 24 giờ, xem mục hỗ trợ đổi hoa; với vấn đề khác, chuẩn bị thông tin để trao đổi theo hướng dẫn góp ý và khiếu nại."] },
    ],
  },
  {
    id: "cham-hoa", to: "/ho-tro/cham-hoa", title: "Hướng dẫn chăm hoa", shortTitle: "Giữ hoa tươi lâu", icon: "leaf", proposed: false,
    description: "Cắt gốc, thay nước, chăm xốp cắm và chọn vị trí đặt hoa để giữ bó hoa đẹp hơn.",
    highlight: "Nước sạch, bình sạch và một góc mát là khởi đầu tốt cho những cành hoa vừa về nhà.",
    sections: [
      { title: "Với hoa bó cắm bình", items: ["Rửa sạch bình, bỏ lá nằm dưới mực nước và dùng dụng cụ sạch cắt lại một đoạn gốc trước khi cắm.", "Cắm vào nước sạch sớm; nếu bó có túi nước ở gốc, tháo cẩn thận trước khi cắm bình.", "Nếu có gói dưỡng hoa, pha theo hướng dẫn trên gói; không tự tăng nồng độ hoặc pha nhiều chất tẩy rửa."] },
      { title: "Chăm mỗi ngày", items: ["Kiểm tra nước hằng ngày, thay khi đục hoặc có mùi và vệ sinh bình.", "Loại bỏ lá, cánh hỏng; cắt lại phần gốc khi cần bằng kéo hoặc dao sạch.", "Theo dõi riêng từng loài: lượng nước và độ nở khác nhau, không có số ngày tươi cố định cho mọi bó."] },
      { title: "Với giỏ hoặc lẵng cắm xốp", items: ["Kiểm tra độ ẩm của xốp và bổ sung nước từ từ vào vị trí phù hợp, tránh làm ướt thiệp và bao gói.", "Đặt khay hoặc tấm lót nếu cần để tránh nước ảnh hưởng mặt bàn.", "Hạn chế rút cành ra cắm lại nhiều lần vì có thể làm lỏng vị trí và giảm tiếp xúc nước."] },
      { title: "Chọn vị trí đặt", items: ["Ưu tiên nơi mát, tránh ánh nắng trực tiếp, nguồn nhiệt và luồng gió điều hòa thổi mạnh.", "Không để hoa lâu trong xe nóng. Hạn chế đặt gần trái cây chín.", "Một số hoa, đặc biệt hoa ly, có thể gây nguy hiểm cho thú cưng; để ngoài tầm với và hỏi bác sĩ thú y nếu thú cưng đã tiếp xúc hoặc ăn hoa."] },
      { title: "Khi hoa có dấu hiệu bất thường", paragraphs: ["Chụp ảnh, ghi lại thời gian nhận và cách chăm để tiệm dễ tư vấn. Hoa héo nhanh không phải lúc nào cũng do một nguyên nhân; không dùng mẹo nước nóng hoặc hóa chất mạnh cho cả bó khi chưa biết yêu cầu của từng loài."] },
    ],
  },
] as const satisfies readonly SupportPage[];

export type SupportId = typeof supportPages[number]["id"];
export function supportHead(id: SupportId) {
  const page = supportPages.find(page => page.id === id);
  if (!page) return {};
  return { meta: [
    { title: `${page.title} — Hương Ly` },
    { name: "description", content: page.description },
    { property: "og:title", content: `${page.title} — Hương Ly` },
    { property: "og:description", content: page.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}