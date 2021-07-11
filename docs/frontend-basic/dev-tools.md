---
sidebar_position: 3
---

# Git - Browser dev tools

## Mục tiêu sau bài học
- Biết cách sử dụng frontend dev tool để hỗ trợ trong quá trình phát triển.
- Biết cách đẩy code lên git và chia sẻ với người khác.
- Deploy dự án frontend của bạn bằng github pages.


## Dev tools
- Dev tools là bộ công cụ được tích hợp sẵn trong trình duyệt, giúp chúng ta dễ dàng kiểm tra, phát hiện lỗi và chỉnh sửa trong quá trình phát triển website.
- Để tìm hiểu chi tiết hơn, hãy xem video được đính kèm bên dưới.
- [Dev tools](https://www.khanacademy.org/computing/computer-programming/html-css/web-development-tools/a/using-the-browser-developer-tools)

## Git
- Git là một phần mềm kiểm soát phiên bản nguồn mở, miễn phí. Nó được tạo bởi Linus Torvalds vào năm 2005. Công cụ trong cộng đồng IT này là một hệ thống kiểm soát phiên bản ban đầu được phát triển để làm việc với một số nhà phát triển trên nhân Linux. (Lượm trên mạng)
- Giải thích đơn giản thì Git giúp bạn lưu trữ, kiểm soát code, theo dõi sự thay đổi của code qua mỗi lần `commit`.
- Trong môi trường thực tế, Git còn giúp bạn kiểm soát sự khác nhau giữa từng lượt `commit` (vì có thể có nhiều người cùng commit code), tách biệt code của mỗi người trong team. Từ đó cô lập và dễ dàng review, tracking code của mỗi thành viên.
- Và nhiều lợi ích khác.

## Github
- Chúng ta đã nghe tới Git và có thể đã dùng GitHub nhưng chúng ta đa phần vẫn nhầm lẫn Git vs GitHub là một bởi vì cứ nói đến Git là nghĩ tới GitHub. Đó là một sự hiểu lầm vì Git là tên gọi của một mô hình hệ thống, các máy tính có thể clone lại mã nguồn từ một repository , còn GitHub là tên của một công ty cũng cấp dịch vụ máy chủ repository công cộng, mỗi người có thể truy cập vào website trang chủ để tạo tài khoản trên đó và tạo ra kho chứa source của riêng mình khi làm việc.
- Trong thực tế, ngoài github, chúng ta còn một số dịch vụ máy chủ repository khác cũng rất lớn như: GitLab, BitBucket.
- Vì mục tiêu trong bài này cần deploy code frontend lên github, nếu bạn chưa có tài khoản github, hãy [tạo tài khoản ngay](https://github.com) nhé

### Học liệu
- Trên mạng hiện tại đã có vô vàn học liệu về Git, cả bằng tiếng Anh và tiếng Việt. Ở đây tôi sẽ tổng hợp lại một số video ngắn gọn và dễ hiểu nhất.
- Tiếng Anh: [Learn Git In 15 Minutes](https://www.youtube.com/watch?v=USjZcfj8yxE)
- Tiếng Việt: [Từ gà tới pro Git và Github trong 20 phút - Tự học Git siêu tốc](https://www.youtube.com/watch?v=1JuYQgpbrW0) (Tôi đi code dạo)

## Deploy code lên github
- Một trang web chỉ sống khi mà người khác, ngoài bạn, cũng sử dụng được nó.
- Để làm được điều đó, chúng ta cần deploy code lên một máy chủ và chia sẻ nó với người khác.
- Thật may, github đã giúp chúng ta làm điều đó một cách dễ dàng.
- Hãy xem [hướng dẫn chi tiết tại đây](https://www.khanacademy.org/computing/computer-programming/html-css/web-development-tools/a/hosting-your-website-on-github).

## Bài tập tổng kết
- Kết hợp những kiến thức bên trên, deploy website todolist đã làm được từ bài trước lên github pages, có được link xem và chia sẻ với người khác.
- Hãy kết hợp việc deploy và việc commit - push code, để khi bạn push code từ local lên, giao diện trang web được deploy cũng được cập nhật ngay sau đó.
