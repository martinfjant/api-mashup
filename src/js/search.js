export class Search {
    constructor(string) {
        this.query = string
        this.page = 0
    }

    fetchFlickr(query, fetchNew = true) {
        const flickrUrl = "https://api.flickr.com/services/rest/?"
        const flickrAPIkey = process.env.FLICKR_API_KEY
        fetchNew ? this.page = 0 : this.page++
        let params = {
            method: "flickr.photos.search",
            api_key: flickrAPIkey,
            text: query,
            extras: "url_q, url_o, url_m",
            format: "json",
            tags: query,
            page: this.page,
            per_page: 10,
            license: "2,3,4,5,6,9",
            sort: "relevance",
            parse_tags: 1,
            nojsoncallback: 1
        }

        let flickrQueryParams = urlEncodeData(params)
        let queryUrl = `${flickrUrl}${flickrQueryParams}`

        return fetch(queryUrl)
    }

    do() {
        let query = Page.query
        let promises = [
            this.fetchFlickr(this.query),
            //this.fetchword(query)
        ]

        Promise.all(promises)
        resolve(' nåt') //skall köra uppdatera
    }
}