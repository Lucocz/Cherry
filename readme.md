<h1 align="center">Cherry Bot</h1>
<h3 align="center">A simple Bot create by Henry (Ry #2052)</h3>

<p align="center">
    <a href="https://github.com/hoahenry/Cherry/issues">I'm have a Bug</a>
    </p>
</p>

<details open="open">
    <summary>Menu</summary>
    <ol>
        <li><a href="https://github.com/hoahenry/Cherry-Data/blob/main/notifications.md">Thông Báo</a></li>
        <li><a href="#Log">Log</a></li>
        <li><a href="#Install">Hướng dẫn cài đặt</a></li>
        <li><a href="#License">Giấy Phép</a></li>
        <li><a href="#Contact">Liên Hệ</a></li>
      <li><a href="#Donate">Donate</a></li>
    </ol>
</details>

<!-- Log -->
## Log

<details>
    <summary>Version 3.0.0</summary>
    - Cherry - Super Ban: Lệnh cấm sử dụng Bot. </br>
    - Testmode: Chể độ này chỉ người quản lí Bot (ADMIN) mới được sử dụng.</br>
    - Fix delay khi sử dụng lệnh lúc mới start Bot.</br>
    - Sửa lệnh offbox thành busy và sửa lỗi xử lí sự kiện.</br>
    - Thay đổi một số biến, function cần thiết.</br>
    - Thêm check update: Bạn không cần phải kiểm tra thủ công về việc có phiên bản mới hay chưa, từ giờ nếu có bản cập nhật, bạn sẽ nhận được thông báo.</br>
    - Bổ sung thêm một số lệnh: load, unload, allin, sinhnhat...</br>
    - Thêm Purchase command: Nếu bạn muốn Bot của mình có thêm lệnh, bạn có thể kiểm tra danh sách lệnh được đăng bán bằng lệnh "buy".</br>
    - More fix...</br>
</details>
<details>
    <summary>Version 2.0.0</summary>
    - Fix database, command</br>
</details>
<details>
    <summary>Version 1.0.0</summary>
    - The beginning of Cherry</br>
</details>
    
<!-- Install -->
## Install

### Yêu cầu: 
- Git
- NodeJS
- Một tài khoản dùng làm Bot (Khuyến khích dùng acc clone)

##### Windows
- Tải về [NodeJS](https://nodejs.org/en/) và [Git](https://git-scm.com/) sau đó cài đặt vào máy.<br/>
- Sau khi cài xong NodeJS và Git, mở cmd ở Thư mục bất kì trong This PC và gõ:
    ```sh
    git clone https://github.com/hoahenry/Cherry.git
    ```
- Chờ Git clone xong thì tải extension [C3C FB State](https://github.com/c3cbot/c3c-fbstate/archive/refs/heads/master.zip) về máy, giải nén ra rồi vào mục [Extension](coccoc://extensions/) của máy, bật chế độ dành cho nhà phát triển. Sau đó chọn "Tải tiện ích đã giải nén", tìm đến thư mục vừa giải nén C3C FB State và chọn mở.
- Tiếp theo là đăng nhập vào facebook bằng tài khoản của Bot, mở extension C3C FB State lên và chọn export FB State.
- Đưa file appstate.json vừa nhận được ở trên vào thư mục chứa bot (hoặc copy và dán vào file sẵn có).
- Gõ:
     ```sh
     npm start
     ```
- Video Hướng Dẫn: [Official Chanel](https://youtu.be/4OzPMrN-qC4)
##### Mobile

###### Android
- Tải và cài đặt [Termux](https://f-droid.org/repo/com.termux_117.apk)
- QuickEdit: [Tại Đây](https://play.google.com/store/apps/details?id=com.rhmsoft.edit&hl=vi&gl=US)
- KiwiBrowser: [Tại Đây](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser&hl=vi&gl=US)
- C3C State: [Tại Đây](https://github.com/c3cbot/c3c-fbstate/releases/download/1.0/c3c-fbstate-extractor.crx)

- Các lệnh cần thiết (Sắp xếp theo thứ tự rồi nhé, cứ copy vậy mà dán, không cần tách ra như video):
    ```sh
    pkg install git && pkg install nodejs
    ```
    ```sh
    termux-setup-storage
    ```
    ```sh
    apt update && apt upgrade
    ```
    ```sh
    cd /sdcard
    ```
    ```sh
    git clone https://github.com/hoahenry/Cherry
    ```
    ```sh
    cd $home
    ```
    ```sh
    mv /sdcard/Cherry ~
    ```
    ```sh
    cd ./Cherry
    ```
    ```sh
    npm i
    ```
    ```sh
    npm start
    ```
- Video Hướng Dẫn: Coming soon...
##### IOS
- Chưa có điều kiện

<!-- License -->
## License

- Sử dụng giấy phép MIT, chi tiết vui lòng xem tại đây: [LICENSE](https://github.com/hoahenry/Cherry#readme)

<!-- Contact -->
## Contact

<a href="mailto:hotro.cherry@gmail.com">Email</a>

<!-- Donate -->
## Donate

<li>Momo: 0364694797</li>
<li>VietinBank: 100873588155 (Chi nhánh Bình Xuyên - PGD Trưng Trắc)</li>
- Total Income: 0
<li>Thank: ...</li>
