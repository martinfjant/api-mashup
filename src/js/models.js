import {app} from './index'
import { ENGINE_METHOD_DIGESTS } from 'constants';
//Create default page
export class App {
    constructor() {

        this.searchbutton = document.getElementById('searchButton')
        this.searchbar = document.getElementById('searchString')
        this.main = document.querySelector('.container')
        this.sidebar = document.querySelector('.sidebar')
        this.wordlist = document.querySelector('.wordlist')
    }
    // Adds event listeners on el with ev that run fn
    init(el, ev, fn) {
        el.addEventListener(ev, fn)
    }
    update(data) {
        //append new data to the DOM
    }
}// Model for pictures to be displayed
export class Picture {
    constructor(url, alt) {
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
    render (){
        app.main.insertAdjacentHTML('beforeend', this.html)
        
    }
}
export class Word {
    constructor(word){
    this.word = word
}
    list(item) {
        return `<li>${item}</li>`
    }
    render() {
        console.log(app.main)
    }

}