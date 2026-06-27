# Troubleshooting

Here you can find solutions to common issues you might encounter while using Yomic.

## Broken or Stuck App Icons

If you have updated Yomic (for example, via the installer) but the Desktop or Taskbar shortcut still shows the old icon (e.g., an orange icon instead of the blue one), this is usually caused by the Windows Icon Cache retaining the old image.

You can force Windows to rebuild the icon cache by running the following command in **PowerShell**:

```powershell
taskkill /f /im explorer.exe; Remove-Item -Path "$env:localappdata\IconCache.db" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "$env:localappdata\Microsoft\Windows\Explorer\iconcache*" -Force -ErrorAction SilentlyContinue; start explorer.exe
```

After running this command, your screen might flash briefly as Windows Explorer restarts, and all your shortcuts will immediately display the correct, updated icons.
