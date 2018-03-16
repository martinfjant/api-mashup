export class Theme {
    constructor() {
        this.page =
            `<header class="header level">
            <div class="">
                <h1 class="title is-1">API Mashup!</h1>
                <h2 class="subtitle is-3">stuff will go here</h2>
            </div>
            <form class="level-right">
                <input type="search"
                       class="input"
                       placeholder="Search"
                       id="searchString"
                       min="2"
                       max"25"
                       required>
                <button id="searchButton"
                        class="button">
                Go!
                </button>
                </form>
            </header>
            <div class=columns>
            <main class="column content">
            <div class="container">
            <p>result</p>
            </div>
            </main>
            <aside class="column is-one-quarter menu">
                <p class="menu-label">Related words!</p>
                <ul class="menu-list">
                    <li><a href="#">2</a></li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </aside>
            </div>
            <footer class="footer">
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