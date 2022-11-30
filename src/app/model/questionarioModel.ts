import { BaseModel } from './baseModel';

export class QuestionarioModel extends BaseModel {  
  sabor: string | undefined;  
  liquido: string| undefined;
  quantidade: string | undefined;
  tamanho: string | undefined;
  gelo: string | undefined;
  acucar: string | undefined;
  hortela: string | undefined;
}
