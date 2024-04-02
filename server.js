// const cheerio = require('cheerio');
// const fs = require('fs');
// const request = require('request-promise');

// request('https://www.24h.com.vn/tin-tuc-trong-ngay-c46.html', (error, response, html) => {
//   if(!error && response.statusCode == 200) {
//     const $ = cheerio.load(html);
//     let data = []
//     console.log('starting...');
//     // $('.cate-24h-foot-home-latest-list__box').each((index, el) => {
//     //     const title = $(el).find('.cate-24h-foot-home-latest-list__info .cate-24h-foot-home-latest-list__name a').text();
//     // //   const company = $(el).find('.job__list-item-company span').text();
//     // //   const address = $(el).find('.job__list-item-info').find('.address').text();
//     // //   const salary = $(el).find('.job__list-item-info').find('.salary').text();
//     //   console.log('title: ' + title);
//     // //   data.push({
//     // //     job
//     //     // job, company, address, salary
//     //   //}); // đẩy dữ liệu vào biến data
//     // });

//     // fs.writeFileSync('data01.json', JSON.stringify(data)); // lưu dữ liệu vào file data.json
//   }
//   else {
//     console.log(error);
//   }
// });



const fs = require('fs');
const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  exportExcel()
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  let data = []
  try {

    await driver.get('https://123job.vn/viec-lam/general-accountant-must-know-sap-a1-0q77d3Blq8?codePosition=C1')

    let box = await driver.findElement(By.className('box-info-job'))
    var contentE = await driver.findElement(By.className('content-group__content'))
    var content = await contentE.getText()

    data.push({content}); 

    console.log(data)


    exportExcel(data)
    // fs.writeFileSync('data01.json', JSON.stringify(data));
    await driver.quit()

    // await driver.get('https://123job.vn/tuyen-dung?sort=new&page=2')
    // let lst = await driver.findElements(By.className('job__list-item'))
    // for (const e of lst) {
    //     let a = e.findElement(By.css('a')).click();
    //     // console.log(await a.getText())
    //     // driver.navigate().back()
    // }


    // for (let i = 1; i <= 2; i++) {
    //     let stringUrl = `https://123job.vn/tuyen-dung`
    //     await driver.get(stringUrl)
    //     let lst = await driver.findElements(By.className('job__list-item'))
    //     for (const e of lst) {
    //         let a = e.findElement(By.css('a'));
    //         console.log(await a.getText())
    //         await a.click();
    //     }
    //     // await driver.get('https://123job.vn/viec-lam/general-accountant-must-know-sap-a1-0q77d3Blq8?codePosition=C1')
    //     // driver.navigate().back()
    //     // console.log('--------------------------------------------------------------------------------------------------------------------------------')
    //     // console.log(i)
    // }
  } finally {
    // await driver.quit()
  }
})()


function exportExcel(data = []) {
    const fs = require('fs');
    fs.writeFileSync('data01.json', JSON.stringify(data));
}