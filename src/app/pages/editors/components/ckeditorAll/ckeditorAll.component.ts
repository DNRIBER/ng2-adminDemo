import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ckeditorAll-component',
  templateUrl: './ckeditorAll.html',
  styleUrls: ['./ckeditorAll.scss']
})

export class CkeditorAll {
  public ckeditorContent:string = '<p>Hello CKEditor</p>';
  public config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
