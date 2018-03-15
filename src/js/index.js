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

    update () {

    }
}


let app =  new App // Instance page
app.init(app.searchbutton, 'click', search) // Adds event listeners on el with ev that run fn


function search() {
if (app.searchbar.checkValidity() == true) {
    search = new Search (app.searchbar.value)
    search.do()
    event.preventDefault()
}
else {
alert('You forgot to enter a search string!')
}
event.preventDefault()
}

function checkInput (input) {


}

class Image {
    constructor(url, alt) {
        this.url = url
        this.alt = alt
        this.html = `
        <img src="${this.url}" 
             alt="${this.alt}">`
    }

}

