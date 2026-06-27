---
title: Pencadangan
---

# Pencadangan (Backups)

Perpustakaan, riwayat bacaan, kategori, dan pengaturan Anda merupakan hasil kurasi selama berjam-jam. Sangat disarankan untuk mencadangkan (backup) data Anda secara berkala agar Anda tidak kehilangannya jika terjadi kerusakan sistem atau saat pindah ke komputer baru.

## Membuat Cadangan

1. Navigasi ke **Pengaturan > Data & Penyimpanan**.
2. Klik pada **Buat Cadangan**.
3. Pilih folder tujuan di komputer Anda.
4. Yomic akan menghasilkan sebuah file cadangan berekstensi `.yomic`. File ini berisi potret terenkripsi dari seluruh basis data lokal Anda.

## Memulihkan Cadangan

Untuk memulihkan data dari file `.yomic`:
1. Navigasi ke **Pengaturan > Data & Penyimpanan**.
2. Klik pada **Pulihkan Cadangan**.
3. Pilih file `.yomic` dari penjelajah file (*file explorer*) Anda.

**Peringatan:** Memulihkan cadangan akan menimpa perpustakaan dan pengaturan Anda saat ini. Manga apa pun yang ditambahkan *setelah* cadangan tersebut dibuat akan hilang selama proses pemulihan.

## Apa saja yang termasuk di dalam file cadangan `.yomic`?
- Daftar manga di perpustakaan beserta URL sumbernya
- Riwayat Bacaan (chapter mana saja yang telah Anda baca)
- Kategori (dan penetapan setiap manga ke kategorinya)
- Pengaturan Aplikasi

## Apa yang TIDAK termasuk?
- **Chapter yang Diunduh**: File `.yomic` adalah cadangan basis data yang ringan, bukan arsip raksasa berisi gambar-gambar unduhan. Anda harus memindahkan folder `Yomic/Downloads` secara manual jika Anda bermigrasi ke komputer PC baru.
- **Ekstensi**: Anda harus memasang ulang ekstensi Anda dari tab Jelajah setelah memulihkan cadangan.
