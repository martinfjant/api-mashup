//Import dependencies
import { App } from "./components"
import { Theme } from "./theme"

import "../css/app.scss" //Get's mah sass

// Creates a static page
const theme = new Theme()
theme.render()

export const app = new App() // Instance page