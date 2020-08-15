
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface EventoFotoInterface {
}

export class EventoFoto implements EventoFotoInterface {
  constructor(data?: EventoFotoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "EventoFoto";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of EventoFoto for dynamic purposes.
  **/
  public static factory(data: EventoFotoInterface): EventoFoto{
    return new EventoFoto(data);
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
      name: 'EventoFoto',
      plural: 'EventoFotos',
      path: 'EventoFotos',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}