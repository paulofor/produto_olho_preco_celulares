
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface EventoInterface {
}

export class Evento implements EventoInterface {
  constructor(data?: EventoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Evento";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Evento for dynamic purposes.
  **/
  public static factory(data: EventoInterface): Evento{
    return new Evento(data);
  }
  /**
  * @method getModelDefinition
  * @author Gerador Java
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Evento',
      plural: 'Eventos',
      path: 'Eventos',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}