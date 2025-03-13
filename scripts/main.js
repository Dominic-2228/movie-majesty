import { renderMoviesToDOM } from "./movie-render.js";
import { generateMoviesHTML } from "./movie-converter.js";

const movieHTML = generateMoviesHTML()
renderMoviesToDOM(movieHTML)