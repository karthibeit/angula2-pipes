import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
     
    template: `<h1>Angular Pipes</h1>
    Actual value : {{stringname}} <br/>
    After pipe value : {{stringname | removeSpaces}}
    `
})
export class AppComponent { 
    stringname: string;
    constructor(){
        this.stringname = "First pipes";
    }
}
