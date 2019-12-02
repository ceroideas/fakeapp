import { Component, OnInit } from '@angular/core';

import { AlertController, NavController, Events } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Instagram } from '@ionic-native/instagram/ngx';

import { AuthService } from '../../../services/auth/auth.service';

declare let cordova: any;

@Component({
  selector: 'app-photo-book',
  templateUrl: './photo-book.page.html',
  styleUrls: ['./photo-book.page.scss'],
})
export class PhotoBookPage implements OnInit {

  selectedPicture = null;

  constructor( public alertController: AlertController,
               private nav: NavController,
               private events: Events,
               private camera: Camera,
               private instagram: Instagram,
               public auth: AuthService ) {

    auth.handleAuthentication();

  }

  ngOnInit() {
    this.events.subscribe('loggedIn',()=>{
      this.nav.navigateForward('profile');
    })
  }

  instagramLogin(){

    this.auth.login();

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
