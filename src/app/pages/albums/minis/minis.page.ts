import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Instagram } from '@ionic-native/instagram/ngx';

@Component({
  selector: 'app-minis',
  templateUrl: './minis.page.html',
  styleUrls: ['./minis.page.scss'],
})
export class MinisPage implements OnInit {

  selectedPicture = null;

  constructor( public alertController: AlertController,
              private camera: Camera,
              private instagram: Instagram ) { }

  ngOnInit() {
  }

  getPicture(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }

    this.camera.getPicture(options).then((imageData) => {

      this.selectedPicture = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      console.log(err);
    });

  }

  sharePicture(){

    this.instagram.share(this.selectedPicture, 'Texto de la imágen')
    .then(() => {
      this.selectedPicture = null;
      this.presentAlert();
    })
    .catch((error: any) => console.error(error));

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'La imágen fué compartida con éxito.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
