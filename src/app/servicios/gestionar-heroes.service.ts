import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LISTAHEROES } from '../prueba-heroes';
import { Heroe } from '../heroe';
import { MensajesService } from './mensajes.service';

@Injectable({
  providedIn: 'root',
})

export class GestionarHeroesService {
  constructor(private mensajeServicio: MensajesService) { }
  getHeroes(): Observable<Heroe[]> {
    this.mensajeServicio.add('Servicio heores: recuperando heroes');
    return of(LISTAHEROES)
  };

  getHeroe(id: number): Observable<Heroe> {
    this.mensajeServicio.add(`Servicio heores: leyendo heror con id=${id}`);
    return of(LISTAHEROES.find(heroe => heroe.id === id));
  }

}	
