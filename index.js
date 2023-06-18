const PORT = 8000

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const iconv = require('iconv-lite')

const app = express()


        

app.get('/', (req,res)=>{
    const url = 'https://www.poisonapple.co.kr/'

    axios(url).then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles=[]
        $('#content > div > div:nth-child(4) > div > div > div > div > ul', html)
        .each(function(){
            const title = $('div.txt').text()
            articles.push({
                title,
            })
        })
        res.send(articles)
    
    }).catch(err => {
        console.error(err)
    })
})
    
app.listen(PORT, () => console.log(`server is running on ${PORT}`))