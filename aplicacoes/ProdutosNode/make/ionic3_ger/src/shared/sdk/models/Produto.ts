
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface ProdutoInterface {
}

export class Produto implements ProdutoInterface {
  constructor(data?: ProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Produto";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Produto for dynamic purposes.
  **/
  public static factory(data: ProdutoInterface): Produto{
    return new Produto(data);
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
      name: 'Produto',
      plural: 'Produtos',
      path: 'Produtos',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}