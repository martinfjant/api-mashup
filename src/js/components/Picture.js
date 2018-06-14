class Picture {
  constructor(app, url, alt) {
    this.app = app
    this.url = url
    this.alt = alt
    this.html = `
        <figure class=" image is-square">
            <a href="${this.url}">
                <img src="${this.url}"
                    alt="${this.alt}">
            </a>
        </figure>
    `
  }
  render() {
    this.app.main.insertAdjacentHTML("beforeend", this.html)
  }
}

export default Picture