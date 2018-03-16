// My Awesome API-Mashup
// Imports
// Drawing the page
//
// Search function
// drawing defaults  = extend search function? or opposite?
//// Api Calls
// imageClass
// wordListClass
//


//Import dependencies
import {Theme} from './theme'
import {Search} from './search'
import {urlEncodeData, getPromiseData} from './functions'
import '../css/app.scss' //Get's mah sass


// Creates a static page
const theme = new Theme
theme.render()

//Create default page
class App {
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
    update (data) {
        //append new data to the DOM
    }
}
// Model for pictures to be dosplayed
class Image {
    constructor(url, alt) {
        this.url = url
        this.alt = alt
        this.html = `
        <img src="${this.url}" 
             alt="${this.alt}">`
    }

}

let app =  new App // Instance page
app.init(app.searchbutton, 'click', do_search) // Adds event listeners on el with ev that run fn

function do_search () {
event.preventDefault()
let query = app.searchbar.value
console.log(query)
let data = initfFetch(query)
console.log(data)
let response = getPromiseData(data)
console.log(response)

}
function initfFetch(query) {
if (app.searchbar.checkValidity() == true) {
   let search = new Search (query)
    search.do()
}
else {
alert('You forgot to enter a search string!')
}
}