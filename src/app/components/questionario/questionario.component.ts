import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service'
import { QuestionarioModel } from '../../model/questionarioModel'
import { MatFormFieldModule} from '@angular/material/form-field';
import { IQuestionario } from '../../interfaces/IQuestionario'
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {
 
  
  columns: string[] = ['id', 'sabor', 'liquido', 'quantidade', 'tamanho', 'gelo', 'acucar', 'hortela'];
  // origem dos dados
  dataSource!: MatTableDataSource<IQuestionario>;
  

  constructor(private questSrv: QuestionarioService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  ngOnInit() {
    this.bind();
  }

  async bind() {
    console.log("inicio")
    const questionario = await this.questSrv.GetAll();
    console.log ("----");
    console.log(questionario);
    console.log ("----");
    this.dataSource = new MatTableDataSource(questionario.data);    
  }
  

  async delete(questionario: QuestionarioModel): Promise<void> {
      const result = await this.questSrv.delete(questionario.id);
      this.bind();     
      this.router.navigateByUrl('/questoes');      
  }
}
