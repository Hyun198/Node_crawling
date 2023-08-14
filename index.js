const express = require('express')
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');


app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('cgv')
});


app.get('/get-movie-times', async(req, res) => {
    try {
        const response = await axios.get('http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0298&date=20230814');
        const html = response.data;
        const $ = cheerio.load(html);

        const movieTimes = [];
        $('col-times').each((index, element) => {
            const title = $(element).text().trim();
            movieTimes.push(title);
        })

        res.json(movieTimes);
    } catch (error) {
        console.error('영화 시간 크롤링 오류:', error);
        res.status(500).send('영화 시간 크롤링 중 오류가 발생했습니다.');
    }
});


app.listen(3000)