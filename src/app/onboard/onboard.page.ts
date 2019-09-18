import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
// import { AES256 } from 'cordova-plugin-aes256-encryption';
@Component({
  selector: 'onboard',
  templateUrl: 'onboard.page.html',
  styleUrls: ['onboard.page.scss']
})
export class OnboardPage implements OnInit {

  constructor() {}

  ionViewDidLoad() {
  }

  ngOnInit() {
    this.performEncryption();
  }

  async performEncryption() {
    const { AES256 } = Plugins;
    console.log('Plugins',Plugins, 'Plugins.AES256Web',AES256);
    const secureKey = await AES256.generateSecureKey({password: 'abc123'});
    console.log('Secure Key====', secureKey.response);
    const secureIv = await AES256.generateSecureIv({password: 'abc123'});
    console.log('secureIv ===', secureIv.response);
    const encryptedValue = await AES256.encrypt({secureKey: secureKey.response, iv: secureIv.response, value: 'abc123'});
    console.log('encryptedValue ===', encryptedValue);
    const originalValue = await AES256.decrypt({secureKey: secureKey.response, iv: secureIv.response, value: encryptedValue.response});
    console.log('decryptedValue ===', originalValue);
  }
}
