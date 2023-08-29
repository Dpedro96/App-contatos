import { Component, OnInit } from '@angular/core';;
import Contato from 'src/app/model/entities/Contato';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  contato: Contato;
  indice: number;
  nome:string;
  telefone:number;
  email:string;
  edicao: boolean = true;
  listaContatos : Contato[] = [];

  constructor(private alertController: AlertController, private router:Router,private firebase : FirebaseService) { 

  }

  ngOnInit() {
    this.contato = history.state.contato;
    this.nome = this.contato.nome;
    this.telefone = this.contato.telefone;
    this.email = this.contato.email;
  }

  habilitar(){
    if(this.edicao){
      this.edicao = false
    }else{
      this.edicao = true;
    }
  }

  salvar(){
    if(this.nome && this.telefone){
    let novo: Contato = new Contato(this.nome, this.telefone, this.email)
    this.firebase.update(novo,this.contato.id);
    this.router.navigate(['/home']);
    }
    else{

    }
  }

  excluir(){
    this.firebase.delete(this.contato);
    this.router.navigate(['/home']);
  }

  async showConfirm() {
    const confirm = this.alertController.create({
        message: 'Você será redirecionado para a PáginaPrincipal',
        buttons: [
            {
                text: 'Cancelar',
                handler: () => {
                    console.log('Disagree clicked');
                }
            },
            {
               text: 'OK',
               handler: () => {
                  this.excluir()
               }
           }
       ]
  });
   (await confirm).present();
}

}
