// My Awesome API-Mashup
// Imports
// Drawing the page
//
// Search function
// drawing defaults  = extend search function? or opposite?
//// Api Calls
// imageClass -> must be named pcitur eimage is a reserved word..
// wordListClass
//


//Import dependencies
import {App} from './models'
import {
    Theme
} from './theme'
import {
    Search
} from './search'
import {
    urlEncodeData,
    getPromiseData
} from './functions'
import '../css/app.scss' //Get's mah sass


// Creates a static page
const theme = new Theme
theme.render()
export const app = new App // Instance page
import {Picture} from './models'

function do_search() {
    event.preventDefault()
    let query = app.searchbar.value //Gets search query
    let data = initfFetch(query) //Runs query trhough searches and stuff

}

function initfFetch(query) {
    if (app.searchbar.checkValidity() == true) {
        let search = new Search(query)
        search.do()
    } else {
        alert('You forgot to enter a search string!')
    }
}
app.init(app.searchbutton, 'click', do_search) // Adds event listeners on el with ev that run fn