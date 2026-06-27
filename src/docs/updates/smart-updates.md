---
title: Smart Updates
---

# Smart Updates

When you have a massive library with hundreds of manga, updating every single title simultaneously can cause enormous strain on your device, consume excessive bandwidth, and potentially lead to IP bans from sources due to rate-limiting.

To solve this, Yomic uses a **Smart Updates** algorithm.

## How It Works

Instead of blindly checking every manga in your library, Yomic intelligently schedules background checks based on the manga's **historical release frequency**. 

### 1. The Prediction Engine
Whenever a new chapter is detected, Yomic records the timestamp. After a few chapters, Yomic calculates the average time between releases (e.g., weekly, monthly, or irregular).
Using this data, Yomic predicts when the next chapter is likely to drop.

### 2. Active vs Inactive Titles
- **Active titles** (manga that release regularly) will be checked exactly around their predicted release window.
- **Inactive titles** (manga on hiatus or completed) are deprioritized. Instead of checking them daily, Yomic might only check them once a month, significantly reducing unnecessary network requests.

### 3. Category Exclusions
As of v1.5.0, you can further optimize this by manually excluding certain Library Categories from the global update cycle. For example, if you create a "Completed" category and check the *Exclude from global updates* option, Yomic will never waste resources checking those titles.

## Forcing an Update
If you believe the prediction engine missed a release, you can always manually update a manga by navigating to its detail page and swiping down (or clicking the Refresh button).
