---
title: Pembaruan Pintar
---

# Pembaruan Pintar (Smart Updates)

Ketika Anda memiliki perpustakaan besar dengan ratusan judul manga, memperbarui setiap judul secara bersamaan dapat memberikan beban yang sangat besar pada perangkat Anda, menghabiskan banyak kuota internet, dan berpotensi menyebabkan IP Anda diblokir oleh sumber manga karena pembatasan permintaan (*rate-limiting*).

Untuk mengatasi masalah ini, Yomic menggunakan algoritma **Pembaruan Pintar (Smart Updates)**.

## Bagaimana Cara Kerjanya?

Daripada mengecek setiap manga di perpustakaan Anda secara membabi buta, Yomic secara cerdas menjadwalkan pemeriksaan latar belakang berdasarkan **riwayat frekuensi rilis** manga tersebut.

### 1. Mesin Prediksi (Prediction Engine)
Setiap kali ada chapter baru yang terdeteksi, Yomic mencatat waktu rilisnya. Setelah beberapa chapter, Yomic menghitung rata-rata waktu antar rilis (misalnya: mingguan, bulanan, atau tidak beraturan).
Menggunakan data ini, Yomic memprediksi kapan chapter berikutnya kemungkinan besar akan dirilis.

### 2. Judul Aktif vs Nonaktif
- **Judul aktif** (manga yang rilis secara teratur) akan diperiksa tepat di sekitar waktu prediksi rilisnya.
- **Judul nonaktif** (manga yang sedang hiatus atau sudah tamat) akan diturunkan prioritasnya. Daripada memeriksanya setiap hari, Yomic mungkin hanya akan memeriksanya sebulan sekali. Hal ini secara signifikan mengurangi permintaan jaringan yang tidak perlu.

### 3. Pengecualian Kategori
Mulai dari v1.5.0, Anda dapat lebih mengoptimalkan proses ini dengan mengecualikan Kategori Perpustakaan tertentu dari siklus pembaruan global secara manual. Contohnya, jika Anda membuat kategori "Tamat" dan mencentang opsi *Kecualikan dari pembaruan global*, Yomic tidak akan pernah membuang-buang sumber daya untuk memeriksa judul-judul tersebut.

## Memaksa Pembaruan (Force Update)
Jika Anda merasa mesin prediksi melewatkan sebuah rilis, Anda selalu dapat memperbarui manga secara manual dengan membuka halaman detail manga tersebut dan mengusap layar ke bawah (atau mengeklik tombol Segarkan).
