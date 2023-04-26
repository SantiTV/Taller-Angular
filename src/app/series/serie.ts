export class Serie {
  id: number;
  name: string;
  channel: string;
  season: number;
  description: string;
  webpage: string;
  poster: string;

  constructor(
    id: number,
    name: string,
    channel: string,
    season: number,
    description: string,
    webpage: string,
    poster: string
    ){
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.season = season;
    this.description = description;
    this.webpage = webpage ;
    this.poster = poster;
  }
}
