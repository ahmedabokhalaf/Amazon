import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
