import { app } from "./index"
import { Picture, Word } from "./components"

import { urlEncodeData, getPromiseData } from "./functions"

export class Search {
  constructor() {
    this.page = 0

    this.fetchFlickr = this.fetchFlickr.bind(this)
    this.fetchWordlabWords = this.fetchWordlabWords.bind(this)

    this.do = this.do.bind(this)
  }

  fetchFlickr(query, fetchNew = true) {
    const flickrUrl = "https://api.flickr.com/services/rest/?"
    const flickrAPIkey = "c5cb5dcad28714877784a3fc8ba63043"
    fetchNew ? (this.page = 0) : this.page++
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
    let wordLabAPIkey = "214ed8bf50ece2cb01eb884dc0810706"
    let wordLabUrl = `http://words.bighugelabs.com/api/2/${wordLabAPIkey}/${query}/json`

    return fetch(wordLabUrl)
  }

  do(event, query) {
    query = !query ? event.target.text : query

    const flickrPromise = this.fetchFlickr(query)
    const wordPromise = this.fetchWordlabWords(query)

    let promises = [flickrPromise, wordPromise]

    return getPromiseData(promises)
      .then(array => {
        app.main.innerHTML = ""
        app.wordlist.innerHTML = ""
        picFlatten(array[0]["photos"]["photo"])
        wordFlatten(array[1]["noun"]["syn"])
      })
      .catch(err => console.log(err))
  }
}

export function picFlatten(input) {
  input.map(index => {
    const picture = new Picture(app, index["url_m"], index["title"])
    picture.render()
  })
}

export function wordFlatten(input) {
  input.map(index => {
    const words = new Word(app, index)
    words.render()
  })
}
