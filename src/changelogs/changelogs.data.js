export default {
  async load() {
    try {
      const res = await fetch('https://api.github.com/repos/ArisaAkiyama/yomic/releases', {
        headers: {
          'Accept': 'application/vnd.github.v3.html+json',
          'User-Agent': 'VitePress-Changelog-Loader'
        }
      });
      if (!res.ok) {
        console.error('Failed to fetch GitHub releases:', res.statusText);
        return [];
      }
      const releases = await res.json();
      return releases.map(r => ({
        name: r.name || r.tag_name,
        tag: r.tag_name,
        date: r.published_at,
        html: r.body_html,
        url: r.html_url
      }));
    } catch (e) {
      console.error('Error fetching releases:', e);
      return [];
    }
  }
}
