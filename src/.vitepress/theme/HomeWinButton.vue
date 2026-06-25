<script setup>
// Handled via Vercel serverless redirect endpoint to bypass client rate limits
</script>

<template>
  <div class="win-download-btn-wrapper">
    <a
      href="/api/download"
      target="_self"
      class="win-download-btn"
      title="Download for Windows"
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

.win-download-btn:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

.win-download-btn:active {
  opacity: 0.7;
  transform: translateY(0);
}

.win-download-btn img {
  height: 48px;
  width: auto;
  display: block;
}
</style>

