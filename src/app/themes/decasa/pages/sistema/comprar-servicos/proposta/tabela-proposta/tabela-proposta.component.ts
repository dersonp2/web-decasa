import {MatSnackBar} from '@angular/material/snack-bar';
import {CarrinhoEvent} from '../../../../../../../events/carrinho-event';
import {ServicoOrcamentoService} from '../../../../../../../services/servico-orcamento.service';
import {ServicosOrcamento} from '../../../../../../../model/servico-orcamento.module';

import {Component, OnInit} from '@angular/core';
import {Orcamento} from '../../../../../../../model/orcamento.module';
import {PrestadorOrcamento} from '../../../../../../../model/prestador-orcamento.module';

@Component({
  selector: 'app-tabela-proposta',
  templateUrl: './tabela-proposta.component.html',
  styleUrls: ['./tabela-proposta.component.css']
})
export class TabelaPropostaComponent implements OnInit {

  total: number;
  displayedColumns: string[] = ['descricao', 'qntd', 'unidade'];
  dataSource: ServicosOrcamento[];
  visitaTecnica = false;
  municipioId: number;

  // tslint:disable-next-line:variable-name
  constructor(private servicoOrcamentoService: ServicoOrcamentoService, private carrinhoService: CarrinhoEvent, private _snackBar: MatSnackBar) {
    this.municipioId = Number(localStorage.getItem('municipioId'));
  }

  ngOnInit(): void {
    this.getServicosElement();
  }

  getServicosElement() {
    if (localStorage.hasOwnProperty('servicosSelecionados')) {
      this.dataSource = JSON.parse(localStorage.getItem('servicosSelecionados'));
      this.servicoOrcamentoService.getTotaldeServicos(this.dataSource, this.municipioId).subscribe(
        (data) => {
          // Veio a visita técnica | Atualiza os dados
          if (data.length !== this.dataSource.length) {
            console.log('veio visista tecnica');
            this.dataSource = data;
            localStorage.setItem('servicosSelecionados', JSON.stringify(this.dataSource));
            this.visitaTecnica = true;
            this.carrinhoService.alteracao();
            this.setTotal();
            this.showSnackBar('Um serviço de visita técnica foi adicionado, pois o(s) valor(es) do(s) serviço(s) não atingiu o valor mínimo.', 'orange-snackbar');
          } else {
            console.log('Não visista tecnica');
          }
        },
      );
      this.setTotal();
    }
  }

  setTotal() {
    this.total = 0;
    this.dataSource.forEach(e => {
      this.total += e.valor * e.quantidade;
    });
    this.setOrcamento();
  }

  showSnackBar(mensagem, cor) {
    this._snackBar.open(mensagem, 'Ok', {
        duration: 8000,
        panelClass: [cor]
      }
    );
  }

  // Inserir servicos orcamento no prestador orcamento
  // Inserir  prestador orcamento no orcamento
  setOrcamento() {
    let orcamento: Orcamento = new Orcamento();
    // TODO: criptografar
    if (localStorage.getItem('orcamento')) {
      orcamento = JSON.parse(atob(localStorage.getItem('orcamento')));
    }
    // Prestador
    const prestadorOrcamento = new PrestadorOrcamento();
    prestadorOrcamento.servicosOrcamentos = this.dataSource;
    const prestadorOrcamentos: PrestadorOrcamento[] = [];
    prestadorOrcamentos.push(prestadorOrcamento);
    orcamento.prestadorOrcamentos = prestadorOrcamentos;
    orcamento.valor = this.total;
    // tslint:disable-next-line:no-console
    console.info(orcamento);
    localStorage.setItem('orcamento', btoa(JSON.stringify(orcamento)));
  }
}
