import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {AppComponent} from "./app.component";
import {MenuComponent} from "./menu/menu.component";
import {MenuService} from "./services/menuservice";
import {AppRoutingModule} from "./app.routing.module";
import {ClaimComponent} from "./claim/claim.component";
import {ClaimApprovalComponent} from "./claim/claim.claimapprovalcomponent";
import {CashDialog, ChequeDialog,  PaymentComponent} from "./payment/payment.component";
import {AssessorComponent} from "./assessor/assessor.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {JsonpModule} from "@angular/http";
import {CityService} from "./services/cityservice";
import {HttpModule} from "@angular/http";
import {DataService} from "./services/dataservice";
import {ClaimService} from "./services/claimservice";
import {PolicyService} from "./services/policyservice";
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrightDirective} from "./directives/brightdirective";

@NgModule({
    imports:[BrowserModule,CommonModule,AppRoutingModule,HttpModule,FormsModule,ReactiveFormsModule,JsonpModule, MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        BrowserAnimationsModule,],
    entryComponents: [PaymentComponent, ChequeDialog,CashDialog],
    declarations:[AppComponent,MenuComponent,ClaimComponent,ClaimApprovalComponent,PaymentComponent,AssessorComponent,ChequeDialog,CashDialog,BrightDirective],
    providers:[MenuService,CityService,DataService,ClaimService,PolicyService],

    bootstrap:[AppComponent]
})

export class AppModule
{

}