import { Component, OnInit } from '@angular/core';

import {registerWebPlugin, Plugins} from "@capacitor/core";
// import { AES256 } from 'capacitor-plugin-aes256-encryption';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import {OAuth2Client} from '@byteowls/capacitor-oauth2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    console.log("Register custom capacitor plugins", Plugins);
    // registerWebPlugin(AES256);
  }
}
