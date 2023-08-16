const express = require('express')
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0298&date=20230816';

axios(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const $time = $("div.info-timetable > ul > li > a");

    let times = []
    $time.each((idx, node) => {
        const href = $(node).attr('href');
        const playStartTime = $(node).attr('data-playstarttime');
        
        times.push({
            href: href,
            playStartTime: playStartTime
        })
    })
    console.log(times);

  /*   let times = []
    $time.each((idx, node) => {
        times.push({
            screen: $(node).find('a').attr('data-screenkorname').text(),
            time: $(node).find('a').attr('data-playstarttime').text()
           
        })
    });
    console.log(times); */
 
});











/* const c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($('title').text());
            const $bodyList = $('div.sect-showtimes').children('div.info-movie');
            let movieList = [];
            $bodyList.each(function (i, elem) {
                movieList[i] = $(this).find('strong').text();
                console.log(i);
            })
            console.log(movieList);
        }
        done();
    }
});

c.queue('http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0298&date=20230816'); */










/* app.set('view engine', 'ejs'); */

/* 
async function getHtml () {
    try {
        const response = await axios.get('http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0298&date=20230816')
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

(async () => {
    try {
        const html = await getHtml();
        const ulList = [];
        const $ = cheerio.load(html);
        const $bodyList = $("div.info-timetable ul").children("li");
        
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                screen: $(this).find('a').attr('data-screenkorname'),
                time: $(this).find('a').attr('data-playstarttime')
            };
        });
        
        console.log(ulList);
    } catch (error) {
        console.error('에러 발생:', error);
    }
})();
    

    
 */

