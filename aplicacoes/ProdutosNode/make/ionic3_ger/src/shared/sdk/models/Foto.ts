
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface FotoInterface {
}

export class Foto implements FotoInterface {
  constructor(data?: FotoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Foto";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Foto for dynamic purposes.
  **/
  public static factory(data: FotoInterface): Foto{
    return new Foto(data);
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
      name: 'Foto',
      plural: 'Fotos',
      path: 'Fotos',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}