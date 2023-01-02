import { Component, OnInit } from '@angular/core';
import { CitiesServiceService } from '../services/cities-service.service';
import { Citie } from '../interfaces/citie.interface';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: Citie[];

  constructor(private cities_service:CitiesServiceService,
    public toastController: ToastController,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.list_cities();
  }

  list_cities(){
    this.cities_service.get_cities().subscribe(res=>{
      this.cities = res.data;
      console.log(this.cities);
    });
  }

  async presentToast1(){
    const toast = this.toastController.create({
      message: 'Ciudad seleccionada',
      duration: 2000,
      position: 'bottom'
    });
    (await toast).present();
  }

  async presentAlert1(){
    const alert = this.alertController.create({
      header: 'Borrar ciudad',
      message: 'Se ha borrado la ciudad',
      buttons: ['OK']
    });
    (await alert).present();

    let result = (await alert).onDidDismiss();
    console.log(result);
  }

  async presentAlert2(){
    const alert = this.alertController.create({
      header: 'Borrar ciudad',
      message: '¿Está seguro que desea eliminar la ciudad?',
      buttons: [
        {
          text: 'No',
          handler: ()=>{
            console.log('NO CANCEL');
          }
        },
        {
          text: 'Si',
          handler: ()=>{
            console.log('Ciudad eliminada');
          }
        }
      ]
    });
    (await alert).present();

    let result = (await alert).onDidDismiss();
    console.log(result);
  }

}
