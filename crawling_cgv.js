const puppeteer = require('puppeteer')
const fs = require('fs/promises')
const path = require('path')
require('dotenv').config()

async function start() {
    const browser = await puppeteer.launch({headless:true})
    const page = await browser.newPage()
    await page.goto(process.env.cgv)

    const names = await page.evaluate(() =>{
        return Array.from(document.querySelectorAll(".time_info a")).map(x => x.textContent)
    })
    await fs.writeFile(path.join('name','names.txt'),names.join("\r\n"))


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