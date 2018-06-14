import {App, Picture, Word} from './models'
import {app} from './index'
import {
    urlEncodeData,
    getPromiseData
} from './functions'

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
    fetchWordlabWords(query) {
        let wordLabAPIkey = '214ed8bf50ece2cb01eb884dc0810706'
        let wordLabUrl = `http://words.bighugelabs.com/api/2/${wordLabAPIkey}/${query}/json`;
    
        return fetch(wordLabUrl);
      }
    do() {
        let query = this.query
        const flickrPromise = this.fetchFlickr(this.query)
        const wordPromise = this.fetchWordlabWords(this.query)
        
        let promises = [
            flickrPromise,
            wordPromise
        ]
        let data =
        getPromiseData(promises)
            //.then ( res => console.log(res[1]))
            // .then(res => res[0])
            // .then(value => value)
           .then((array) => {
               picFlatten(array[0]["photos"]["photo"])
               wordFlatten(array[1]["noun"]["syn"])
                })

            .catch(err => console.log(err))

           // returnObject = { flickr: data[0][photos][photo]}
           // return returnObject
    }
}

export function picFlatten (input) {
input.map((index) => {const picture = new Picture(index["url_m"], index["title"]); picture.render()})
}
export function wordFlatten (input) {
input.map ((index) => {const words = new Word(index); words.render()})
}