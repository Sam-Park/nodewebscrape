const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/George_Washington';
const potusParse = url => {
    return rp(url)
        .then( html => {
            return {
                name: cheerio('.firstHeading', html).text(),
                birthday: cheerio('.bday', html).text(),
            };
        })
}
rp(url)
    .then(html => {
        console.log(cheerio('.firstheading', html).text());
        console.log(cheerio('.bday', html).text());
    })
    .catch(err => {
        console.log('There was and error: ', err);
    });

module.exports = potusParse;
