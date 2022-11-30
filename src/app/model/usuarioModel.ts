import { BaseModel } from './baseModel';

export class UsuarioModel extends BaseModel {  
  nome: string | undefined;  
  pedido: string| undefined;
  tamanho: string | undefined;
}