import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome!: string;
  public telefone!: number;
  listaContatos : Contato[] = [];
  
  constructor(private alertController: AlertController, private router:Router, private contatoService: ContatoService) { }
  ngOnInit() {
  }
  cadastrar(){
    if(this.nome && this.telefone){
    let novo : Contato = new Contato(this.nome, this.telefone);
    this.contatoService.listaContatos.push(novo);
    this.presentAlert("Salvo", "Contato Salvo");
    this.router.navigate(["/home"]);
    }
    else{
      this.presentAlert("Erro", "Campos Obrigatórios!");
    }
  }
  async presentAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      subHeader: 'Agenda de Contatos',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
