//Create default page
export class App {
    constructor() {

        this.searchbutton = document.getElementById('searchButton')
        this.searchbar = document.getElementById('searchString')
        this.main = document.querySelector('main')
        this.sidebar = document.querySelector('sidebar')
        this.wordlist = document.querySelector('wordlist')
    }
    // Adds event listeners on el with ev that run fn
    init(el, ev, fn) {
        el.addEventListener(ev, fn)
    }
    update(data) {
        //append new data to the DOM
    }
}// Model for pictures to be displayed
export class Picture {
    constructor(url, alt) {
        this.url = url
        this.alt = alt
        this.html = `
        <img src="${this.url}" 
             alt="${this.alt}">`
    }
    render (){
        console.log(app);
        //app.main.appendChild(this.html)
    }
}