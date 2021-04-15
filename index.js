const express = require('express')
const path = require('path')
const app = express()
const pagespeedInsights = require('pagespeed-insights')

const psi = require('psi');

(async () => {
  // Get the PageSpeed Insights report
  const { data } = await psi('https://github.com/Holy-Feast');
  console.log('Speed score:', data.lighthouseResult.categories.performance.score);

  // Output a formatted report to the terminal
  // await psi.output('https://theverge.com');
  // console.log('Done');

  // Supply options to PSI and get back speed
  const data2 = await psi('https://github.com/Holy-Feast', {
    nokey: 'true',
    strategy: 'desktop'
  });
  console.log('Speed score:', data2.data.lighthouseResult.categories.performance.score);
})();
// AIzaSyD-XpydFJt_eMqtWLF7aEsCoDcVBfTdGjA
app.use(express.static(path.resolve(__dirname, 'client')));


app.get('*', (req, res) => {
  res.sendfile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => console.log('Server has been started...'))
