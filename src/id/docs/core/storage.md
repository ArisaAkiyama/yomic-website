---
title: Penyimpanan
---

# Penyimpanan & Data (Storage)

Saat Anda menelusuri sumber dan membaca manga, Yomic menyimpan (*cache*) gambar dan metadata untuk meningkatkan kecepatan memuat dan mengurangi penggunaan jaringan internet. Namun, seiring berjalannya waktu, ini bisa menghabiskan ruang penyimpanan Anda.

Anda dapat mengelola data lokal Anda dengan menavigasi ke **Pengaturan > Data & Penyimpanan**.

## Manajemen Tembolok (Cache)

### Bersihkan Tembolok Gambar (Clear Image Cache)
Gambar yang diambil selama penelusuran (seperti sampul manga atau halaman pembaca) disimpan untuk sementara waktu. Jika Anda mendapati sebuah chapter gagal dimuat (misalnya pesan kesalahan `503 Service Unavailable` yang seharusnya sudah diperbaiki oleh sumbernya), membersihkan tembolok gambar akan memaksa Yomic untuk mengunduh ulang file-file terbaru.
- *Catatan: Yomic secara otomatis membersihkan tembolok gambar sementara ketika Anda bernavigasi mundur dari *feed* tertentu demi mengatur penggunaan memori secara agresif!*

### Segarkan Sampul Perpustakaan (Refresh Library Covers)
*(Diperkenalkan di v1.5.0)*
Jika sebuah manga memperbarui gambar sampulnya, sampul lama mungkin masih ditampilkan di Perpustakaan Anda akibat tembolok (*cache*). Anda dapat menggunakan tombol **Segarkan Sampul Perpustakaan** untuk secara eksplisit membersihkan tembolok sampul dan memaksa Yomic untuk mengunduh ulang seluruh gambar *thumbnail* dari manga yang telah Anda simpan.

### Bersihkan Riwayat Bacaan (Clear Read History)
Opsi ini akan menghapus riwayat dari semua chapter yang baru-baru ini Anda buka, membersihkan pelacakan fitur "Lanjutkan Membaca" Anda.

### Hapus Semua Data (Clear All Data)
Ini adalah tindakan destruktif yang akan mereset basis data internal Yomic (`yomic.db`) secara keseluruhan. 
**Peringatan:** Ini akan menghapus seluruh Perpustakaan, kategori khusus, riwayat, dan pengaturan Anda! Hanya gunakan fitur ini jika Anda mengalami korupsi basis data yang fatal atau jika Anda ingin memulai dari awal kembali. Kami sangat menyarankan untuk membuat [Pencadangan (Backup)](../guides/backups.md) sebelum melakukan tindakan ini.
