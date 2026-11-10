# MyMood - Mood Tracker App

**Nama:** Cecilia  
**NIM:** 253303620009  
**Mata Kuliah:** Pemrograman Mobile

## 1. Tentang Aplikasi

MyMood adalah aplikasi mobile sederhana yang dibuat menggunakan React Native dan Expo. Aplikasi ini dibuat untuk membantu pengguna mencatat suasana hati atau mood mereka setiap hari.

Di dalam aplikasi ini, pengguna bisa memilih suasana hati yang sedang dirasakan, menambahkan catatan singkat, dan melihat kembali mood yang sudah disimpan sebelumnya. Setiap pilihan mood akan menampilkan pesan yang berbeda sesuai dengan pilihan pengguna.

Aplikasi ini juga memiliki beberapa fitur tambahan seperti jumlah catatan mood, riwayat mood, dan Dark Mode. Dengan adanya fitur tersebut, pengguna bisa menggunakan aplikasi dengan lebih mudah dan melihat perubahan data secara langsung pada tampilan aplikasi.

## 2. Tujuan Pembuatan

Tujuan pembuatan aplikasi MyMood adalah untuk menerapkan materi React Native yang sudah dipelajari selama perkuliahan, terutama penggunaan State, Event Handler, Conditional Rendering, dan komponen antarmuka.

Melalui tugas ini, saya belajar bagaimana aplikasi dapat merespons tindakan pengguna. Contohnya, ketika pengguna memilih mood, tampilan aplikasi akan berubah sesuai pilihan tersebut. Begitu juga ketika pengguna menyimpan catatan, data yang dimasukkan akan muncul pada bagian Mood History.

## 3. Fitur Aplikasi

### A. Pilihan Mood

Pengguna dapat memilih salah satu dari lima pilihan mood yang tersedia, yaitu Happy, Neutral, Sad, Angry, dan Tired. Setiap mood memiliki emoji yang berbeda agar pengguna lebih mudah mengenali suasana hati yang ingin dipilih.

Ketika salah satu mood ditekan, pilihan tersebut akan terlihat lebih menonjol dibandingkan pilihan lainnya. Hal ini membantu pengguna mengetahui mood mana yang sedang dipilih.

### B. Pesan Berdasarkan Mood

Setelah pengguna memilih mood, aplikasi akan menampilkan pesan yang sesuai dengan pilihan tersebut. Pesan akan berubah ketika pengguna memilih mood yang berbeda.

Fitur ini menggunakan kondisi tertentu untuk menentukan teks yang akan ditampilkan pada layar.

### C. Mood Note

Pengguna dapat menambahkan catatan singkat untuk menjelaskan suasana hati yang sedang dirasakan. Kolom catatan memiliki batas maksimal 100 karakter.

Jumlah karakter yang masih tersedia juga ditampilkan secara langsung ketika pengguna mengetik. Dengan begitu, pengguna bisa mengetahui berapa banyak karakter yang masih dapat digunakan.

### D. Mood Counter

Setiap kali pengguna menyimpan mood, jumlah catatan yang sudah dibuat akan bertambah satu. Dengan begitu, pengguna dapat melihat berapa kali mereka sudah mencatat suasana hati melalui aplikasi.

### E. Mood History

Fitur Mood History digunakan untuk menampilkan daftar mood yang sudah disimpan sebelumnya. Informasi yang ditampilkan mencakup mood dan catatan yang ditulis oleh pengguna.

Riwayat ini membantu pengguna melihat kembali catatan mood yang sudah dimasukkan.

### F. Reset

Tombol Reset digunakan untuk menghapus data mood dan mengembalikan aplikasi ke kondisi awal. Tombol ini hanya muncul ketika pengguna sudah memiliki catatan mood.

### G. Dark Mode

Aplikasi juga menyediakan fitur Dark Mode untuk mengubah tampilan dari tema terang menjadi tema gelap. Pengguna dapat menekan tombol yang tersedia untuk mengganti tampilan sesuai keinginan.

## 4. Teknologi dan Materi yang Digunakan

Dalam pembuatan aplikasi ini, saya menggunakan beberapa teknologi dan materi berikut:

- React Native: Digunakan untuk membuat tampilan dan fitur aplikasi mobile.
- Expo: Digunakan untuk menjalankan dan menguji aplikasi melalui Expo Go.
- JavaScript: Digunakan untuk mengatur logika dan fungsi aplikasi.
- useState: Digunakan untuk menyimpan dan mengubah data, seperti mood yang dipilih, catatan, jumlah mood, riwayat, dan tema aplikasi.
- Event Handler: Digunakan untuk menangani tindakan pengguna, seperti memilih mood, menyimpan catatan, dan melakukan reset.
- Conditional Rendering: Digunakan untuk menampilkan tampilan tertentu berdasarkan kondisi, misalnya pesan mood dan tombol Reset.
- StyleSheet: Digunakan untuk mengatur tampilan aplikasi agar lebih rapi dan konsisten.

## 5. Cara Menjalankan Aplikasi

Untuk menjalankan aplikasi MyMood di komputer, ikuti langkah-langkah berikut:

1. Clone repository ini dari GitHub.
2. Buka folder project menggunakan Visual Studio Code.
3. Buka terminal pada folder project.
4. Jalankan perintah berikut untuk menginstal semua dependencies:

```bash
npm install
```

5. Setelah proses instalasi selesai, jalankan aplikasi menggunakan perintah:

```bash
npx expo start
```

6. Tunggu sampai QR Code muncul pada terminal atau browser.
7. Scan QR Code menggunakan aplikasi Expo Go di smartphone.
8. Aplikasi MyMood akan terbuka dan bisa digunakan.

## 6. Screenshot Aplikasi

### A. Tampilan Awal

Screenshot yang menunjukkan tampilan aplikasi sebelum pengguna memilih mood.

### B. Mood Dipilih

Screenshot yang menunjukkan salah satu mood setelah dipilih, termasuk perubahan tampilan dan pesan yang muncul.

### C. Mood History

Screenshot yang menunjukkan riwayat mood setelah pengguna menyimpan beberapa catatan.

## 7. Kesimpulan

Melalui pembuatan aplikasi MyMood, saya dapat memahami bagaimana penggunaan State dan Event Handler bekerja dalam React Native. Saya juga belajar bahwa perubahan State dapat memengaruhi tampilan aplikasi secara langsung.

Selain itu, tugas ini membantu saya memahami penggunaan Conditional Rendering untuk menampilkan komponen berdasarkan kondisi tertentu. Secara keseluruhan, aplikasi MyMood menjadi latihan untuk menerapkan materi yang sudah dipelajari ke dalam sebuah aplikasi mobile sederhana.

link google doc https://docs.google.com/document/d/1R1U8TRGO70XyE95QgjVQZUsKId9AVbBDfTteFMw9iGY/edit?usp=sharing
link expo snack https://snack.expo.dev/@cecilia186/p04-mymood-253303620009
