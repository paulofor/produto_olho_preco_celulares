
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { User } from '../../models/User';
import { Evento } from '../../models/Evento';
import { Foto } from '../../models/Foto';
import { Produto } from '../../models/Produto';
import { EventoFoto } from '../../models/EventoFoto';
import { EventoProduto } from '../../models/EventoProduto';
export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
	Evento: Evento,
	Foto: Foto,
	Produto: Produto,
	EventoFoto: EventoFoto,
	EventoProduto: EventoProduto,
	User: User,
    Container: Container
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
