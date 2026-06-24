<script setup>
import { ref } from 'vue'

const isDownloading = ref(false)

async function downloadLatestWin() {
  if (isDownloading.value) return
  isDownloading.value = true

  const repo = 'ArisaAkiyama/yomic'
  const fallbackUrl = `https://github.com/${repo}/releases`

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`)
    if (!response.ok) throw new Error('Failed to fetch release')
    
    const data = await response.json()
    const exeAsset = data.assets.find(asset => asset.name.toLowerCase().endsWith('.exe'))
    
    if (exeAsset && exeAsset.browser_download_url) {
      window.location.href = exeAsset.browser_download_url
    } else {
      window.location.href = fallbackUrl
    }
  } catch (error) {
    console.error('Error fetching latest release:', error)
    window.location.href = fallbackUrl
  } finally {
    setTimeout(() => {
      isDownloading.value = false
    }, 2000)
  }
}
</script>

<template>
  <div class="win-download-btn-wrapper">
    <a
      href="https://github.com/ArisaAkiyama/yomic/releases"
      class="win-download-btn"
      :class="{ loading: isDownloading }"
      title="Download for Windows"
      @click.prevent="downloadLatestWin"
    >
      <img src="/img/win-download.png" alt="Download for Windows" />
    </a>
  </div>
</template>

<style scoped>
.win-download-btn-wrapper {
  /* Layout is mostly handled in custom.css to align with VitePress hero actions */
}

.win-download-btn {
  display: inline-block;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.win-download-btn.loading {
  cursor: wait;
  opacity: 0.6;
}

.win-download-btn:hover:not(.loading) {
  opacity: 0.85;
  transform: translateY(-2px);
}

.win-download-btn:active:not(.loading) {
  opacity: 0.7;
  transform: translateY(0);
}

.win-download-btn img {
  height: 48px;
  width: auto;
  display: block;
}
</style>

