
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface EventoProdutoInterface {
}

export class EventoProduto implements EventoProdutoInterface {
  constructor(data?: EventoProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "EventoProduto";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of EventoProduto for dynamic purposes.
  **/
  public static factory(data: EventoProdutoInterface): EventoProduto{
    return new EventoProduto(data);
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
      name: 'EventoProduto',
      plural: 'EventoProdutos',
      path: 'EventoProdutos',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}