import { Movie } from "../movie/movie";

export class Imdb {
  constructor(movies) {
    this.movies = movies;
  }
  writeInJsonFile(fileName) {
    let currentObject = new Imdb(this.movies);
    let stringifiedCurrentObject = JSON.stringify(currentObject, null, 2);
    fs.writeFileSync(`./Json/${fileName}.json`, stringifiedCurrentObject);
  }
  getImdbInstance(fileName) {
    let imdbData = fs.readFileSync(`./Json/${fileName}.json`, {
      encoding: "utf8",
    });
    let newImdb = new Imdb([...JSON.parse(imdbData).movies]);
    return newImdb;
  }
}
