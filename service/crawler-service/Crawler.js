let Spider = require('./Spider');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
function getBrower() {
    return new Promise((resolve,reject)=>{
        puppeteer.launch().then((browser)=>{
            resolve(browser);
        });
    });

}
class Crawler {
    constructor(spiders=[],options={maxPage:10}){
        this.spiders=spiders;
        this.pages=[];
        this.options = options;
        this._init()
    }
    async _init(){
        let brower = await getBrower();
        for(let i=0;i<this.options.maxPage;i++){
            this.pages.push({
                isInUse:false,
                page:await brower.newPage()
            });
        }
    }
    //开启爬虫
    start(){

    }

    //停止爬虫
    stop(){

    }
}
Crawler.Spider = Spider;

new Crawler(new Spider());
module.exports = Crawler;
