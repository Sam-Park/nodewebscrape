const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
    .then(function(html){
        //success!
        console.log(cheerio('big > a', html).length);
        const wikiUrls = [];
        for (let i = 0; i < 45; i++) {
            wikiUrls.push(cheerio('big > a', html)[i].attribs.href)
        }
        console.log(wikiUrls);
    })
    .catch(function(err){
        console.log("Error fetching: ", err)
    })