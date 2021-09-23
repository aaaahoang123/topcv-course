---
sidebar_position: 3
---

# Keycloak

## Keycloak là gì?

### Định nghĩa trên trang chủ:

Add authentication to applications and secure services with minimum fuss. No need to deal with storing users or authenticating users. It's all available out of the box.

You'll even get advanced features such as User Federation, Identity Brokering and Social Login.

### Dịch đại khái:

Authentication apps và bảo mật services nhanh gọn. Không cần lưu, cũng như xác thực users, tất cả đều đã được thực hiện từ bên ngoài (ngoài apps).

Ngoài ra còn có thể dùng nhiều tính năng khác như User Federation, Identity Brokering và Social Login (đăng nhập google, facebook).


## Tại sao lại dùng keycloak?

- Không cần implement authentication cũng như lưu trữ thông tin tài khoản.
- Cơ chế xác thực api ngon ăn qua JWT, support SSO, oauth2,...
- Có support cơ chế phân chia và xác định quyền chi tiết (cơ mà cũng khó hiểu), đồng thời dễ mở rộng và chỉnh sửa.
- Có thể tích hợp với Kong gateway qua `oidc plugin`.
- Hiệu năng cao và có thể làm việc thông qua restful-api.

## Keycloak chiếm vị trí gì trong hệ thống?

Đương nhiên là vị trí của Auth Service. Keycloak sẽ nằm ở một vị trí bên ngoài systems, nắm và cung cấp thông tin xác thực cho toàn bộ các thành phần của hệ thống. Giúp quá trình xác thực được thống nhất và tập trung, không cần phải imlement lại, gây phân tán thông tin tài khoản giữa các hệ thống với nhau, sẽ rất khó đồng bộ và sử dụng chung dữ liệu sau này.
