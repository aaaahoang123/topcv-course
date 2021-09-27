---
sidebar_position: 4
---

# Concepts và tài liệu
Các concept này còn cần nghiên cứu thêm và bổ sung sau này. Còn về concept chính, sau khi mọi người setup được Kong Gateway, những concept cơ bản như proxy, gateway, authentication đều đã có thể được nắm vững.

## Authorization
Authorization là một task phức tạp, và có nhiều cách để implement, Keycloak cũng hỗ trợ hầu hết các concept authorization phổ biến hiện nay. Tuy nhiên, để hiểu thấu đáo và áp dụng được nó một cách linh hoạt thì còn cần rất nhiều thời gian.

Tài liệu chính: https://www.keycloak.org/docs/latest/authorization_services/

## Implement Authorization
Keycloak chỉ chịu trách nhiệm define và cung cấp các quyền mà user sở hữu, còn việc từ các quyền đó, phân tích và cho phép request được đi qua resources hay không, còn cần một thành phần nữa đảm nhiệm.

Thành phần này được gọi là PEP (Policy Enforcement Point).

Chúng ta có 2 concept để thực hiện PEP (hoặc nhiều hơn):
 - Dùng gateway làm PEP, những request không đủ role/policies sẽ không truy cập được resources của các service.
    + Ưu điểm: implement một lần, quản lý tập trung, service không cần quan tâm nhiều đến quyền của user.
    + Nhược điểm: cần tìm hiểu và thử nghiệm để implement PEP theo cách của gateway (tại đây là viết plugins cho Kong).
 - Dùng services làm PEP, services sẽ tự quyết định xem user có được truy cập tài nguyên không. Tuy
    + Ưu điểm: dễ implement hơn, khi mà các service đều có thể tự phân tích quyền user (thông qua keycloak hoặc userinfo), theo cách của riêng mình.
    + Nhược điểm: phân tán logic, các services có thể viết bằng nhiều công nghệ khác nhau, dẫn đến mất đồng bộ và kho debug khi có lỗi về policies xảy ra.
## Kong customize plugins
Hiện tại, Plugin `oidc` của Kong chỉ hỗ trợ authentication qua keycloak. Để authorization thì có một plugin khác, đó là [Kong JWT keycloak](https://github.com/gbbirkisson/kong-plugin-jwt-keycloak), concept là phân tích `JWT token` của keycloak để xác định resource và quyền truy cập.

Để sử dụng triệt để được sức mạnh authorization của keycloak, còn cần dựng một customize plugins để kết nối với keycloak, nhằm thực hiện việc này (sau khi đã nghiên cứu xong về keycloak authorization concept và lựa chọn concept thích hợp).

Kong được viết bằng lua, vì vậy chúng ta có thể viết kong plugins bằng ngôn ngữ lua theo [hướng dẫn](https://konghq.com/blog/custom-lua-plugin-kong-gateway/)

Hoặc cũng có thể viết plugin bằng ngôn ngữ khác, như python, nodejs,... Xem thêm tài liệu [tại đây](https://docs.konghq.com/gateway-oss/2.5.x/external-plugins/)

## Cách tương tác giữa các service
- Có 2 loại giao tiếp:
  + Synchronous: Giao tiếp đồng bộ, các service giao tiếp với nhau thông qua http request (restful api), hoặc gRPC, requester phải chờ response trả về mới có thể execute trước. Những request loại này thường sử dụng cho request lấy dữ liệu, hoặc validation.
  + Asynchronous: Bất đồng bộ, requester không cần chờ response trả về (khá giống dùng event/listener hoặc job trong laravel). Thường các service sẽ giao tiếp với nhau thông qua event queue, message broker, hoặc pub/sub. Để phân tích, quyết định sử dụng công nghệ nào thì hãy xem [bài viết này](https://cloudgeeks.net/tim-hieu-ve-cac-loai-message-queue-phan-biet-pub-sub-va-message-base/)

