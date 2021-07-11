---
sidebar_position: 1
---

# Introduction

## Tổng quan

Trong phần trước, chúng ta đã học cách sử dụng `HTML`, `CSS` để tạo một giao diện chạy được trên trình duyệt.

Trong môi trường thực tế, một website sẽ có vô vàn webpages cần được hiển thị.

VD: [https://vnexpress.net/](https://vnexpress.net/) hàng ngày có đến hàng ngàn bài báo được tạo mới, tương ứng với đó là hàng ngàn webpages mới mỗi ngày.

Vấn đề đặt ra:
- Chẳng lẽ với mỗi bài báo như vậy, chúng ta lại tạo ra một trang html tương ứng? Rõ ràng là người viết báo, đại đa số đều không biết code, càng đừng nói đến deploy, vì họ **không được phép truy cập vào server**.
- Tương tự, việc chỉnh sửa nội dung cũng là bất khả thi, và càng khó khăn hơn khi cần tìm đúng nội dung đã viết trước đó để sửa.
- Mỗi bài viết đều gắn với một ký giả/nhà báo nhất định, và họ cũng chỉ có thể quản lý, chỉnh sửa bài viết do chính mình tạo ra, vậy phải quản lý thế nào nếu tất cả webpage đều được đẩy lên cùng một chỗ.
- Và còn nhiều vấn đề khác,...

Giải pháp:
- Dễ dàng nhận ra, hàng ngàn webpages/bài báo trong VD đều có chung một cấu trúc HTML, chung một CSS, chỉ khác nhau phần nội dung hiển thị.
- Chúng ta có thể tách biệt phần giống nhau và khác nhau đó ra, lưu trữ ở 2 nơi khác nhau.
- Phần giống nhau: chính là code `HTML`, `CSS` sẽ được lập trình viên phát triển, và đẩy lên máy chủ.
- Phần khác nhau: nội dung webpages, hoặc gọi chung là `data` sẽ được lưu trữ và quản lý tập trung.
- Để lưu trữ và quản lý data một cách tối ưu nhất, chúng ta sử dụng `Database` - `Cơ sở dữ liệu`.
- Có rất nhiều loại `Database` trong thế giới lập trình, nhưng trong nội dung phần này, chúng ta sẽ tìm hiểu về `MySQL`, một `Database RDBMS` thông dụng và đơn giản.
- Trước khi server trả về nội dung HTML, CSS về trình duyệt, nó sẽ lấy `data` từ `Database` thông qua những câu lệnh **query** được `Database` cung cấp,  điền chúng vào nội dung HTML mẫu đã được viết trước đó, tạo thành một webpages hoàn chỉnh - Ta gọi đó là `Preprocessor - Tiền xử lý`.
- `PHP` (tên đầy đủ là: `PHP: Hypertext Preprocessor`), và những ngôn ngữ backend khác đều có thể giữ vai trò bộ `Preprocessor` này.