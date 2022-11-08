export class Movie {
  constructor(
    title,
    releaseYear,
    actors,
    nacionality,
    genre,
    director,
    producer,
    writer,
    language,
    plataforma,
    isMCU,
    distributor,
    mainCharacterName,
    picture
  ) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.nacionality = nacionality;
    this.director = director;
    this.writer = writer;
    this.language = language;
    this.plataforma = plataforma;
    this.isMCU = isMCU;
    this.mainCharacterName = mainCharacterName;
    this.producer = producer;
    this.distributor = distributor;
    this.actors = actors;
    this.picture = picture;
  }

  printAll() {
    console.group(Movie);
    console.log("Title - " + this.title);
    console.log("Release Year - " + this.releaseYear);
    console.log("Nacionality - " + this.nacionality);
    console.log("Genre- " + this.genre);
    console.log("Actors - " + this.actors);
    console.log("Director - " + this.director);
    console.log("Writer - " + this.writer);
    console.log("Language - " + this.language);
    console.log("Plataform - " + this.plataforma);
    console.log("Is MCU? - " + this.isMCU);
    console.log("Main Character Name - " + this.mainCharacterName);
    console.log("Producer - " + this.producer);
    console.log("Distributor - " + this.distributor);
    console.groupEnd();
  }
}
