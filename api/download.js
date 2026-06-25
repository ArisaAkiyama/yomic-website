export default async function handler(request, response) {
  const repo = 'ArisaAkiyama/yomic';
  const fallbackUrl = `https://github.com/${repo}/releases`;

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: {
        'User-Agent': 'Yomic-Website-Redirector'
      }
    });
    
    if (!res.ok) {
      return response.redirect(307, fallbackUrl);
    }
    
    const data = await res.json();
    const exeAsset = data.assets.find(asset => asset.name.toLowerCase().endsWith('.exe'));
    
    if (exeAsset && exeAsset.browser_download_url) {
      // Cache the redirect on Vercel's CDN edge for 10 minutes (600 seconds)
      response.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
      return response.redirect(307, exeAsset.browser_download_url);
    } else {
      return response.redirect(307, fallbackUrl);
    }
  } catch (error) {
    return response.redirect(307, fallbackUrl);
  }
}
