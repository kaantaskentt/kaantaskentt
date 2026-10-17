const { chromium } = require('/Users/kaantaskent/Dev/active/angry-ceo/node_modules/playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 300 }, deviceScaleFactor: 2 });
  await p.goto('file://' + require('path').resolve(__dirname, 'banner.html')); await p.waitForTimeout(300);
  await p.screenshot({ path: require('path').resolve(__dirname, '..', 'assets', 'banner.png'), type: 'png' });
  await b.close(); console.log('banner.png written');
})();
