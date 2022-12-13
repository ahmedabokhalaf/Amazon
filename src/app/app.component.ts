import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazon';
  constructor(public translate:TranslateService) {
    translate.addLangs(['en','ar']);
     translate.setDefaultLang('en');
  }
  switchLanguage(lang:string){
    let htmlTag = document.getElementsByTagName('html')[0] 
htmlTag.dir = lang === "ar"? "rtl":"ltr";
  htmlTag.lang = lang === "ar"? "ar":"en";
 this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    
  }
}
