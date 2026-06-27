---
title: Settings
---

# Settings

Yomic provides a unified Settings interface where you can customize the application's core behaviors.

## Appearance
- **Theme**: Toggle between Light and Dark mode to suit your environment. Yomic features a consistent Orange/Dark Gray premium aesthetic across all modes.

## Network & Connectivity
- **DNS-over-HTTPS (DoH)**: Some internet service providers (ISPs) block access to manga sources at the DNS level. Enabling this feature routes your DNS requests securely through Cloudflare or Google, bypassing standard blocks.
- **Native DPI Bypass**: To handle advanced regional blocks (like MangaDex's Cloudflare protections in certain regions), Yomic natively implements TLS packet fragmentation and User-Agent spoofing (`Yomic/1.0.x`). This completely replaces the need for bundled VPNs (like Sing-box), providing a faster and more stable connection!

## Library Management
- **Library Auto-Sync**: Enabling this allows Yomic to automatically run the [Smart Updates](../updates/smart-updates.md) algorithm in the background to fetch new chapters without manual intervention.

## Updates
- **In-App Updater**: Yomic features a built-in update downloader. You will be prompted with a modal dialog when a new version is available, allowing you to download and install updates silently without leaving the application.
