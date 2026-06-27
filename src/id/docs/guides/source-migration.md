---
title: Migrasi Sumber
---

# Migrasi Sumber (Source Migration)

Terkadang sebuah ekstensi manga (sumber) mungkin ditutup, mengubah domainnya, atau tiba-tiba berhenti berfungsi. Ketika hal ini terjadi, Anda tentu tidak ingin kehilangan riwayat bacaan Anda atau harus mencari manga Anda secara manual satu per satu di sumber yang baru.

Yomic menyediakan **Layanan Migrasi Sumber** bawaan untuk menangani masalah ini secara mulus.

## Cara Melakukan Migrasi Manga

1. Buka tab **Perpustakaan** Anda.
2. Temukan manga yang ingin Anda pindahkan ke sumber baru.
3. Buka halaman Detail Manga dan pilih opsi **Migrasi**.
4. Yomic akan meminta Anda untuk memilih Ekstensi target (misalnya, bermigrasi dari *Sumber A* ke *Sumber B*).
5. Yomic secara otomatis akan menelusuri ekstensi target untuk mencari manga dengan judul dan pengarang yang cocok.
6. Setelah kecocokan ditemukan dan dikonfirmasi, Yomic akan memperbarui basis data internalnya.

### Apa saja yang ikut bermigrasi?
- Tautan (URL) manga tersebut akan ditautkan kembali ke sumber yang baru secara permanen.
- **Riwayat Bacaan** Anda (chapter mana saja yang telah Anda tandai sebagai sudah dibaca) akan dipertahankan, asalkan sumber yang baru menggunakan skema penomoran chapter yang mirip.
- Kategori dan status perpustakaan akan tetap utuh.

### Apa yang TIDAK ikut bermigrasi?
- Chapter yang telah diunduh. Karena gambar bersumber dari tempat yang berbeda pada setiap situs web, unduhan lama yang terikat ke sumber yang mati tidak akan berfungsi untuk sumber yang baru. Anda harus mengunduh ulang chapter-chapter tersebut.
