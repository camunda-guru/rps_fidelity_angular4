import { Component } from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {Observable} from 'rxjs';
import { CountryService } from "../services/countryService";


@Component({
    selector:"new-account",
    templateUrl:"./app/newaccount/newaccount.component.html",
    styleUrls:["./app/newaccount/newaccount.component.css"]
})
export class NewAccountComponent
{

    //private items: Observable<Array<string>>;
    private newaccountForm:FormGroup;
    private firstName:FormControl;
    private lastName:FormControl;
    private mobileNo:FormControl;
    private accountType:FormControl;
    private familyMember:FormControl;
    private countryName:FormControl;
    private husband:string;
    private husbandVisibility:boolean;
    private wife:string;
    private wifeVisibility:boolean;
    private selectedAccountType:string;
    private selectedCountryName:string;
    errorMessage: String;
    private countryList:any=[];
    constructor(private formBuilder:FormBuilder,private router:Router,public countryServiceObj:CountryService)
    {
       this.husbandVisibility=false;
       this.wifeVisibility=false;
       this.firstName=new FormControl('',[Validators.required,
           Validators.pattern('[A-Za-z]{3,25}')
       ]);
       this.lastName=new FormControl('',[Validators.required,
       Validators.pattern('[A-Za-z]{3,25}')]);
       this.mobileNo=new FormControl('',[Validators.required,
       Validators.pattern('[0-9]{10}')]
    );
       this.accountType=new FormControl('',
           [Validators.required,Validators.pattern('[A-Za-z]{5,25}')]);
        this.familyMember=new FormControl('',
            [Validators.required,Validators.pattern('[A-Za-z]{3,25}')]);
       this.countryName=new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z]{5,25}')])

        this.newaccountForm=formBuilder.group({
            firstName:this.firstName,
            lastName:this.lastName,
            mobileNo:this.mobileNo,
            accountType:this.accountType,
            familyMember:this.familyMember,
            countryName:this.countryName
            
        })

    }

    ngOnInit() {
        
      this.countryServiceObj.getCountryData().subscribe(response=>{
        this.countryList.push(response);
        console.log(this.countryList);
    })

    }
    onmemberChange(value)
    {
       console.log(value);
      if(value=="Husband")
        this.husbandVisibility=true;
      if (value=="Wife")
        this.wifeVisibility=true;

    }
    onSelect(value) {
       
    }

    onCountrySelect(value)
    {
        
    }
    save()
    {
        console.log(this.newaccountForm.value);
    }

}