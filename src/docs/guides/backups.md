---
title: Backups
---

# Backups

Your library, history, categories, and settings represent hours of curation. It's highly recommended to back up your data regularly so you don't lose it in the event of a system crash or when moving to a new computer.

## Creating a Backup

1. Navigate to **Settings > Data & Storage**.
2. Click on **Create Backup**.
3. Choose a destination folder on your computer.
4. Yomic will generate a `.yomic` backup file. This file contains an encrypted snapshot of your entire local database.

## Restoring a Backup

To restore data from a `.yomic` file:
1. Navigate to **Settings > Data & Storage**.
2. Click on **Restore Backup**.
3. Select the `.yomic` file from your file explorer.

**Warning:** Restoring a backup will overwrite your current library and settings. Any manga added *after* the backup was created will be lost during the restoration process.

## What is included in a `.yomic` backup?
- Library manga list and source URLs
- Read History (which chapters you've read)
- Categories (and category assignments)
- Application Settings

## What is NOT included?
- **Downloaded Chapters**: The `.yomic` file is a lightweight database backup, not a massive archive of downloaded images. You must manually move your `Yomic/Downloads` folder if you are migrating to a new PC.
- **Extensions**: You will need to re-install your extensions from the Browse tab after restoring a backup.
