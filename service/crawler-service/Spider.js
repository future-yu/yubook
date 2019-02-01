module.exports = class Spider {
    constructor(urls=[],options,middlewares=[]){
        this.urls = urls;
        this.options = options;
        this.middlewares = middlewares;
    }
    addUrl(url){
        this.urls.push(url);
    }

};
