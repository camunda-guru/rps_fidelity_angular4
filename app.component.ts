import { Component } from "@angular/core";



@Component(
    {
        selector:'finance-app',
        templateUrl:'./app/app.component.html',
        styleUrls:['./app/app.component.css']
    }
)
export class AppComponent
{

    private plogo:string;
    private pbanner:string;
    panelOpenState: boolean = false;
    constructor()
    {
        this.plogo="./app/images/fidelitylogo.png";
        this.pbanner="./app/images/banner.png";
    }
}