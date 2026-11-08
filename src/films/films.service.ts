import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';

import basisFilms from '../films.json';

import { v4 as uuid } from 'uuid';

let films = [...basisFilms];

@Injectable()
export class FilmsService {
  create(createFilmDto: CreateFilmDto) {
    return { ...createFilmDto, id: uuid() };
  }

  findAll(ditonton?: boolean) {
    if (ditonton != undefined) {
      return films.filter((val) => val.sudahDitonton === ditonton);
    }
    return films;
  }

  findOne(id: string) {
    const film = films.find((val) => val.id === id);
    if (!film) {
      throw new NotFoundException();
    }
    return film;
  }

  update(id: string) {
    const film = films.find((val) => val.id === id);
    if (!film) {
      throw new NotFoundException();
    }
    film.sudahDitonton = !film.sudahDitonton;
    return film;
  }

  remove(id: string) {
    const deleted = films.filter((val) => val.id !== id);
    films = deleted;
  }
}
