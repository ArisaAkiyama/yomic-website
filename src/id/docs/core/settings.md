---
title: Pengaturan
---

# Pengaturan (Settings)

Yomic menyediakan antarmuka Pengaturan yang terpusat di mana Anda dapat menyesuaikan perilaku inti dari aplikasi.

## Penampilan (Appearance)
- **Tema (Theme)**: Beralih antara mode Terang (Light) dan Gelap (Dark) sesuai dengan lingkungan Anda. Yomic menampilkan estetika premium dengan kombinasi warna Oranye/Abu-abu Gelap yang konsisten di semua mode.

## Jaringan & Konektivitas
- **DNS-over-HTTPS (DoH)**: Beberapa penyedia layanan internet (ISP) memblokir akses ke sumber manga di tingkat DNS. Mengaktifkan fitur ini akan merutekan permintaan DNS Anda secara aman melalui Cloudflare atau Google, sehingga bisa melewati pemblokiran standar.
- **Native DPI Bypass**: Untuk menangani pemblokiran regional tingkat lanjut (seperti perlindungan Cloudflare milik MangaDex di wilayah tertentu), Yomic secara *native* mengimplementasikan fragmentasi paket TLS dan pemalsuan User-Agent (`Yomic/1.0.x`). Hal ini sepenuhnya menggantikan kebutuhan terhadap aplikasi VPN bawaan (seperti Sing-box), memberikan koneksi yang lebih cepat dan stabil!

## Manajemen Perpustakaan
- **Library Auto-Sync**: Mengaktifkan fitur ini memungkinkan Yomic menjalankan algoritma [Pembaruan Pintar](../updates/smart-updates.md) di latar belakang secara otomatis untuk mengambil chapter baru tanpa perlu intervensi manual.

## Pembaruan (Updates)
- **In-App Updater**: Yomic dilengkapi dengan fitur pengunduh pembaruan bawaan. Anda akan disajikan dengan sebuah dialog modal saat versi baru tersedia, yang memungkinkan Anda untuk mengunduh dan memasang pembaruan secara senyap tanpa harus meninggalkan aplikasi.
