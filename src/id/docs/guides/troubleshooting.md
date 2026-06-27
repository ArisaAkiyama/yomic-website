# Penyelesaian Masalah (Troubleshooting)

Di sini Anda dapat menemukan solusi untuk masalah umum yang mungkin Anda temui saat menggunakan Yomic.

## Ikon Aplikasi Lama atau Tersangkut

Jika Anda telah memperbarui Yomic (misalnya, melalui installer) tetapi jalan pintas (shortcut) di Desktop atau Taskbar masih menampilkan ikon yang lama (misalnya, ikon oranye alih-alih biru), hal ini biasanya disebabkan oleh Windows Icon Cache yang masih menyimpan gambar lama.

Anda dapat memaksa Windows untuk membangun ulang cache ikon dengan menjalankan perintah berikut di **PowerShell**:

```powershell
taskkill /f /im explorer.exe; Remove-Item -Path "$env:localappdata\IconCache.db" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "$env:localappdata\Microsoft\Windows\Explorer\iconcache*" -Force -ErrorAction SilentlyContinue; start explorer.exe
```

Setelah menjalankan perintah ini, layar Anda mungkin berkedip sejenak saat Windows Explorer dimuat ulang, dan semua jalan pintas Anda akan langsung menampilkan ikon yang benar dan diperbarui.
