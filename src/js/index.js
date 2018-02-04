//My Awesome API-Mashup
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
import '../css/app.scss'; //Get's mah sass


//Create default page
class Page {
    constructor() {
        this.page =
            `<header class="header">
            <h1>API Mashup!</h1>
            <h2>stuff will go here</h2>
            <form>
                <input type="search"
                       placeholder="Search"
                       id="searchString">
                <button id="searchButton">
                Go!
                </button>
                </form>
            </header>
            <main class="main">
            <p>Hello world</p>
            </main>
            <aside class="sidebar">
                <ul class="wordlist">
                <li><a href="#">2</a></li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                </ul>
            </aside>
            <footer>
            <p>
            With the help of Big Huge Thesaurus and Flickr
            </p>
            </footer>`;
        this.searchbutton = document.getElementById('searchButton');
        this.searchbar = document.getElementById('searchString');
        this.main = document.querySelector('main');
        this.sidebar = document.querySelector('sidebar');
        this.wordlist = document.querySelector('wordlist');
    }


        render() {
        document.open();
        document.write(this.page);
        document.close();
        }
        init(fn) {
        this.searchbutton.addEventListener('click', fn);
        event.preventDefault();

        }
}

let page = new Page; // Instance page
page.render(); //  Render page


document.getElementById('searchButton').addEventListener('click', search);

function search () {

    }

class Image {
        constructor(url, alt) {
            this.url = url;
            this.alt = alt;
            this.html = `
        <img src="${this.url}" 
             alt="${this.alt}">`;
        }

}

class Search {
    constructor (string) {
        this.string = string;
        this.wordParams = {
            url: "http://words.bighugelabs.com/api/2/"
            };
        this.flickr_url = ""
        this.flickr_params = {
            method: "flickr.photos.search",
            api_key: "",
            tags: "this.string",
            sort: "relevance",
            content_type: 1,
            media: "photos",
            is_commons: true
        };

    }

    do () {
        let pokenumber = getSearchString();
        let apiSource = `http://pokeapi.co/api/v2/type/${pokenumber}`;
        const myRequest = new Request(apiSource);

        const myURL = myRequest.url;
        const myMethod = myRequest.method;
        const myCred = myRequest.credentials;

        fetch(myRequest)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                    debugger
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(response => {
                renderResult(response);
                debugger
                // ...
            }).catch(error => {
            console.error(error);
        });


        function getSearchString() {
            event.preventDefault();
            return document.getElementById('searchString').value;
        }

        function parse(blob) {
            debugger
            console.log(pokeOb);
            debugger

            return pokeList
        }
        function renderResult(blob) {
            let pokeOb = blob['pokemon'];
            let parsedBlob = parse(pokeOb);
            let pokemon = document.createTextNode(parsedBlob);
            document.querySelector('main').appendChild(pokemon);
        }
    }

}
