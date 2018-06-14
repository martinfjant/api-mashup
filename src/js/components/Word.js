class Word {
  constructor(app, word) {
    this.app = app
    this.word = word

    this.list = this.list.bind(this)
  }

  list(item) {
    return `<li><a href="#">${item}</a></li>`
  }

  render() {
    const wordItem = this.list(this.word)

    this.app.wordlist.insertAdjacentHTML("beforeend", wordItem)

    const wordItemEl = document.querySelector(".wordList")
    this.app.listen(wordItemEl, "click", this.app.search.do)
  }
}

export default Word
