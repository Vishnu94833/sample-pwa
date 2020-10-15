import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  //   @Emoji()
  //   title = 'sample-pwa';
  //   arr = [
  //     {id:1,cdn:"abcd_source__v.docx"},
  //     {id:2,cdn:"abcd_source__v.ppt"},
  //     {id:3,cdn:"abcd_source__v.mp4"},
  //     {id:4,cdn:"abcd_source__v.xlsx"},
  //     {id:5,cdn:"abcd_source__v.docx"},
  //     {id:6,cdn:"abcd_source__v.mp4"},
  //     {id:7,cdn:"abcd_source__v.docx"}
  //   ];

  //   constructor(
  //     private productService:ProductService,
  //     private router:Router,
  //     private activatedRoute:ActivatedRoute
  //     ){}
  //     @Console('Hey!')
  //   ngOnInit(){
  //     // let array=[];
  //     // this.arr.forEach(e=>{
  //     //     if (!e.cdn.includes('.pdf') && !e.cdn.includes('.mp4')) {
  //     //       // e.cdn = e.cdn.replace('source__v.docx',"viewable_rendition__v.pdf")
  //     //       e.cdn = e.cdn
  //     //         .replace(e.cdn
  //     //         .slice(e.cdn.lastIndexOf('.')+1),'pdf')
  //     //         .replace('_source__v','_viewable_rendition__v');
  //     //     } else {
  //     //       e.cdn = e.cdn;
  //     //     }
  //     //     array.push(e)
  //     // })
  //     // console.log(array);

  //     console.table(this.activatedRoute)

  //     // this.arr = array;
  //     this.productService.getProducts().subscribe(res=>{
  //       console.log(res);
  //     })
  //   }

  //   toppings = [];

  //   @Confirmable('Are you sure?')
  //   @Confirmable('Are you super, super sure? There is no going back!')
  //   addTopping(topping) {
  //     this.toppings.push(topping);
  //   }

  //   convertType(e: any){
  //     let array=[];
  //     this.arr.forEach(e=>{
  //         if (!e.cdn.includes('.pdf')) {
  //           e.cdn = e.cdn.replace('source__v.docx',"viewable_rendition__v.pdf")
  //         } else {
  //           e.cdn = e.cdn;
  //         }
  //         array.push(e)
  //     })
  //     this.arr = array;
  //   }
  // }

  // // Property Decorator
  // function Emoji() {
  //   return function(target: Object, key: string | symbol) {

  //     let val = target[key];

  //     const getter = () =>  {
  //         return val;
  //     };
  //     const setter = (next: any) => {
  //         console.log('updating flavor...');
  //         val = `🍦 ${next} 🍦`;
  //     };

  //     Object.defineProperty(target, key, {
  //       get: getter,
  //       set: setter,
  //       enumerable: true,
  //       configurable: true,
  //     });

  //   };
  // }

  // // Method Decorator
  // function Confirmable(message: string) {
  //   return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
  //     const original = descriptor.value;
  //       descriptor.value = function( ... args: any[]) {
  //           const allow = confirm(message);

  //           if (allow) {
  //             const result = original.apply(this, args);
  //             return result;
  //           } else {
  //             return null;
  //           }
  //     };

  //     return descriptor;
  //   };
  // }

  // function Console(message) {
  //   // access the "metadata" message
  //   console.log(message);
  //   // return a function closure, which
  //   // is passed the class as `target`
  //   return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
  //     console.log('Our decorated class', target);
  //   };


  title = 'angular-9-i18n';
  langs = ['en', 'fr'];

  constructor(private translateService: TranslateService) { }

  public ngOnInit(): void {
    let browserlang = this.translateService.getBrowserLang();
    if (this.langs.indexOf(browserlang) > -1) {
      this.translateService.setDefaultLang(browserlang);
    } else {
      this.translateService.setDefaultLang('en');
    }
  }


  public useLanguage(lang: string): void {
    this.translateService.setDefaultLang(lang);
  }


}