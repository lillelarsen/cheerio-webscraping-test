const request = require('request');
const cheerio = require('cheerio');

request('https://pwa-test-2-27554.firebaseapp.com/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const siteHeading = $('.main-header');

        // // Get the HTML
        // console.log(siteHeading.html());

        // // Get the text
        // console.log(siteHeading.text());

        // // Function find + children + next
        // const output = siteHeading.find('h1').text();
        // const output = siteHeading.children('h1').text();
        // const output = siteHeading.children('h1').next().text();
        // const output = siteHeading.children('h1').parent().text();
        // console.log(output);

        $('li').each((i, el) => {
            const item = $(el).text();
            // const link = $(el).attr('href');

            console.log(item)
        })
    }
});