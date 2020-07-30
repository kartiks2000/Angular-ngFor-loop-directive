import { Component } from '@angular/core';

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css'],
    styles: [`
        .online{
            color: orangered;
        } 
    `]
})
export class IntroComponent{

    arr = ['kartik','chirag','yash','aishwary'];
}