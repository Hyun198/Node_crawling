const puppeteer = require('puppeteer')
const fs = require('fs/promises')
const path = require('path')
require('dotenv').config()

async function start() {
    const browser = await puppeteer.launch({headless:true})
    const page = await browser.newPage()
    await page.goto(process.env)

    const names = await page.evaluate(() =>{
        return Array.from(document.querySelectorAll(".txt strong")).map(x => x.textContent)
    })
    await fs.writeFile("names.txt", names.join("\r\n"))



    const photos = await page.$$eval(".goods-content1 img", (imgs)=> {
        return imgs.map(x => x.src)
    })
    
    for (const photo of photos) {
        const imagePage = await page.goto(photo)
        
        await fs.writeFile(photo.split("/").pop(), await imagePage.buffer())
    } 
    
    await browser.close()

}

start()