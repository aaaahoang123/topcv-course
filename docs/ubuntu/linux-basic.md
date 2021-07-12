---
sidebar_position: 3
---

# Lệnh căn bản trong linux

Là một developer bạn không thể không biết đến linux. Nghĩ đến việc sử dụng linux mọi người hay nghĩ đến việc sử dụng các command trên cửa sổ console là rất nhiều. Vậy nên dưới đây là 1 số command cơ bản giúp mọi người có thể thuận tiện thao tác trên command line.

## Mục tiêu sau bài học

Bạn sẽ biết đến các câu lệnh cơ bản như:

`man, pwd, cd, ls, cat, cp, history, mkdir, mv, rm, touch, chmod, chown`

1. ### Lệnh `man`

Lệnh `man ${tên command}` sẽ trả về hướng dẫn sử dụng command bất kỳ mà bạn muốn

**Ví dụ:**

```bash
$~: man ls
```

2. ### Lệnh `pwd`

Lệnh `pwd` sẽ giúp bạn biết chi tiết của đường dẫn thư mục bạn đang đứng là ở đâu. Đường dẫn bắt đầu bằng `/`

**Ví dụ:**

```bash
$~: pwd
/Users/username
```

3. ### Lệnh `cd`

Bạn đắn đo suy nghĩ ko biết đi đến 1 thư mục trên command sẽ như thế nào? Đừng lo, bạn đã có command `ls` sẽ giúp bạn làm điều đó

**Ví dụ:**

```bash
$~: cd ..						  #(2 dấu hai chấm) để di chuyển một cấp lên thư mục bên trên thư mục hiện tại
$~: cd {tên_thư_mục}	#để chuyển thẳng đến thư mục chính
$~: cd -							# (có dấu gạch ngang) để chuyển đến thư mục trước của bạn
$~: cd ~							# để di chuyển đến thư mục của user hiện tại của bạn
$~: cd /							# để chuyển đến thư mục gốc
```

4. ### Lệnh `ls`

Lệnh `ls` sẽ cho bạn biết trong 1 thư mục có những file hay thư mục nào

**Các tham số có thể đi kèm:**

1. `-l` sẽ hiển thị quyền, kích thước file và ngày/giờ cập nhật mới nhất.
2. `-a` sẽ hiển thị các file hoặc folders ẩn 
3. `-R` sẽ hiển thị chi tiết trong thư mục con có những tệp tin gì

Tham khảo thêm: [Wiki](https://en.wikipedia.org/wiki/Ls#Behavior)

**Ví dụ:**

```bash
$~: ls /
$~: ls ~ -a -l # hoặc (ls -al)
```

5. ### Lệnh `cat`

`cat` (viết tắt của concatenate) là một trong những lệnh được sử dụng thường xuyên nhất trong Linux. Nó được sử dụng để liệt kê nội dung của một tệp trên đầu ra chuẩn (stdout).

**Note:**
[What is stdout?](https://en.wikipedia.org/wiki/Standard_streams)

**Ví dụ:** `cat {file_name}`

```bash
$~: cat /etc/os-release

```

6. ### Lệnh `mkdir`

Để có thể tạo 1 folder trên command bạn có thể sử dụng lệnh `mkdir {tên_folder}`

**Ví dụ:**

```bash
$~: mkdir topcv # để khởi tạo 1 folder topcv tại folder hiện tại
$~: mkdir -p topcv/project # để có thể khởi tạo 1 folder topcv và trong đó có thêm folder project
```

**Note:**
`-p` là (viết tắt của từ parents) để tạo một thư mục ở giữa hai thư mục hiện có.

7. ### Lệnh `touch`

Lệnh `touch` cho phép bạn có thể tạo một tệp mới trống thông qua command.

**Ví dụ:**

```bash
$~: touch info.txt
```

8. ### Lệnh `cp`

Bạn đắn đo làm thế nào có thể copy 1 file nào đó trên command? Bạn đừng lo, đã có có câu lệnh `cp`

**Ví dụ:** `cp {tên file} {tên file mới hoặc thư mục muốn copy vào}`

Bạn cũng có thể copy folder bằng cách thêm tham số `-r`. Ví dụ: `cp -r <tên_folder> <folder_mới>`

```bash
$~: cp info.txt info_new.txt
$~: cp info.txt topcv/info.txt
```

