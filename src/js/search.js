import {
    urlEncodeData,
    getPromiseData
} from './functions'
// Model for pictures to be displayed
class Picture {
    constructor(url, alt) {
        this.url = url
        this.alt = alt
        this.html = `
        <img src="${this.url}" 
             alt="${this.alt}">`
    }
render (){
    app.main.appendChild(this.html)
}
}
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
        const flickrPromise = this.fetchFlickr(this.query)
        
        let promises = [
            flickrPromise
        ]
        let data =
        getPromiseData(promises)
            .then(res => res[0])
            .then(value => value["photos"]["photo"])
           // .then(index => index.map(index => console.log(index)))
           .then(array => array
               // .map((index) => {console.log(index["url_m"], index["title"])}))
               .map((index) => {const picture = new Picture(index["url_m"], index["title"]); picture.render()}))
          //  .then (res => console.log(res))
            .catch(err => console.log(err))

           // returnObject = { flickr: data[0][photos][photo]}
           // return returnObject
    }





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