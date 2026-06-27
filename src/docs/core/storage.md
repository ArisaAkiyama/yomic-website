---
title: Storage
---

# Storage & Data

As you browse sources and read manga, Yomic caches images and metadata to improve loading speeds and reduce network usage. However, over time, this can consume storage space.

You can manage your local data by navigating to **Settings > Data & Storage**.

## Cache Management

### Clear Image Cache
Images fetched during browsing (like manga covers or reader pages) are temporarily stored. If you notice a chapter failing to load (e.g., a `503 Service Unavailable` error that has since been fixed by the source), clearing the image cache forces Yomic to re-download the latest files.
- *Note: Yomic automatically clears temporary image caches when navigating back from certain feeds to aggressively manage memory usage!*

### Refresh Library Covers
*(Introduced in v1.5.0)*
If a manga updates its cover art, the old cover might still display in your Library due to caching. You can use the **Refresh Library Covers** button to explicitly clear the cover cache and force Yomic to re-download all thumbnails for your saved manga.

### Clear Read History
This option wipes the history of all chapters you have recently opened, clearing your "Continue Reading" tracking.

### Clear All Data
This is a destructive action that completely resets Yomic's internal database (`yomic.db`). 
**Warning:** This will delete your entire Library, custom categories, history, and settings! Only use this if you are experiencing critical database corruption or wish to start fresh. We recommend creating a [Backup](../guides/backups.md) before doing this.
