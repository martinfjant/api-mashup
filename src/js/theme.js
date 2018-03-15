export class Theme {
    constructor() {
        this.page =
            `<header class="header">
            <h1>API Mashup!</h1>
            <h2>stuff will go here</h2>
            <form>
                <input type="search"
                       placeholder="Search"
                       id="searchString"
                       min="2"
                       max"25"
                       required>
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
            </footer>`
    }
    render() {
        document.open()
        document.write(this.page)
        document.close()
    }
}