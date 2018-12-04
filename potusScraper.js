const rp = require('request-promise');
const cheerio = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
    .then(function(html){
        //success!
        // console.log(cheerio('big > a', html).length);
        const wikiUrls = [];
        for (let i = 0; i < 45; i++) {
            wikiUrls.push(cheerio('big > a', html)[i].attribs.href)
        }
        return Promise.all(
            wikiUrls.map( url => {
                return potusParse('https://en.wikipedia.org' + url);
            })
        );
    })
    .then( presidents => {
        console.log(presidents)
    })
    .catch(function(err){
        console.log("Error fetching: ", err)
    })