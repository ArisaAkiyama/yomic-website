---
title: Changelogs
---

<script setup>
import { data as releases } from './changelogs.data.js'

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)
}
</script>

# Changelogs

The full history of releases and changes can be found in our main repository.

<div v-for="release in releases" :key="release.tag" class="release-item" style="margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid var(--vp-c-divider);">
  <h2 :id="release.tag" style="margin-top: 1rem; border-top: none; padding-top: 0;">
    <a :href="release.url" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">{{ release.name }}</a>
    <span style="font-size: 0.7em; font-weight: normal; color: var(--vp-c-text-2); margin-left: 1rem; display: inline-block;">{{ formatDate(release.date) }}</span>
  </h2>
  <div class="release-body custom-block" v-html="release.html"></div>
</div>

## View on GitHub

For the most up-to-date changelog, please visit our GitHub repository:

[Yomic CHANGELOG.md](https://github.com/ArisaAkiyama/yomic/blob/main/CHANGELOG.md)

You can also view release notes for specific versions on our [Releases page](https://github.com/ArisaAkiyama/yomic/releases).
