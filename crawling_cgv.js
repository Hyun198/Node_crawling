const puppeteer = require('puppeteer')
const fs = require('fs/promises')
const path = require('path')
require('dotenv').config()

async function start() {
    const browser = await puppeteer.launch({headless:true})
    const page = await browser.newPage()
    await page.goto(process.env.cgv)

    const times = await page.evaluate(() =>{
        return Array.from(document.querySelectorAll(".movie_content._wrap_time_table  span.time_info a")).map(x => x.textContent)
    })
    await fs.writeFile(path.join('name','times.txt'),times.join("\r\n"))

    const movies = await page.evaluate(()=>{
        return  Array.from(document.querySelectorAll(".movie_content._wrap_time_table th a")).map(x => x.textContent)
    })
    
    await fs.writeFile(path.join('name','movies.txt'),movies.join("\r\n"))

    const total = movies.map((movie, index) => `${movie}: ${times[index]}`);
    await fs.writeFile(path.join('name', 'total.txt'), total.join("\r\n"));


/* 
    const photos = await page.$$eval(".goods-content1 img:not(.hot img)", (imgs)=> {
        return imgs.map(x => x.src)
    })
    
    for (const photo of photos) {
        const imagePage = await page.goto(photo)
        const imageName = path.basename(photo);
        
        await fs.writeFile(path.join('img',imageName), await imagePage.buffer())
    } 
    */
    await browser.close() 

}

start()