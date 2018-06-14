import { Search } from '../search';

//Create default page
class App {
  constructor() {
    this.searchbutton = document.getElementById("searchButton")
    this.searchbar = document.getElementById("searchString")
    this.main = document.querySelector(".container")
    this.wordlist = document.querySelector(".wordList")

    this.listen = this.listen.bind(this)
    this.initfFetch = this.initfFetch.bind(this)
    this.doSearch = this.doSearch.bind(this)

    this.search = new Search()

    this.init()
  }

  init() {
    this.listen(this.searchbutton, "click", this.doSearch)
  }

  // Adds event listeners on el with ev that run fn
  listen(el, ev, fn) {
    el.addEventListener(ev, fn, {capture: true})
  }

  initfFetch(event, query) {
    if (this.searchbar.checkValidity() === true) {
      this.search.do(event, query)
    } else {
      alert("You forgot to enter a search string!")
    }
  }

  doSearch(event) {
    event.preventDefault()
    let query = this.searchbar.value //Gets search query
    this.initfFetch(event, query) //Runs query trhough searches and stuff
  }

} // Model for pictures to be displayed

export default App
