import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service'
import { QuestionarioModel } from '../../model/questionarioModel'
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field';
import { IQuestionario } from '../../interfaces/IQuestionario'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.scss']
})
export class QuestoesComponent  implements OnInit {

  model: QuestionarioModel = new QuestionarioModel();

  constructor(
    private questSrv: QuestionarioService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(p => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.questSrv.GetById(id);
    this.model = result.data as QuestionarioModel;
  }

  async save(): Promise<void> {
    const result = await this.questSrv.post(this.model);
    if (result.success) {
      this.router.navigateByUrl('/questoes');
    }
  }
}

