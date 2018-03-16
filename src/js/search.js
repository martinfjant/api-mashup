import {urlEncodeData, getPromiseData} from './functions'
export class Search {
    constructor(string) {
        this.query = string
        this.page = 0
    }

    fetchFlickr(query, fetchNew = true) {
        const flickrUrl = "https://api.flickr.com/services/rest/?"
        const flickrAPIkey = 'c5cb5dcad28714877784a3fc8ba63043'
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
        let query = this.query
        let promises = [
            this.fetchFlickr(this.query),
            //this.fetchword(query)
        ]
        return promises }



        
    
}

/*
Promise.all(promises)
        .then(value => value[photo][photos]
        .map(x => {
            let obj = {}
            images[x.key] = new Image (x[url_m], x[title])
            return images
        } ) )
        .catch(reason => { 
            console.log(reason)
          })*/