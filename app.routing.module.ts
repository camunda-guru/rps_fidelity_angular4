import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { BalanceAccountComponent } from "./balancecheck/balancecheck.component";
import { UpdateAccountComponent } from "./updateaccount/updateaccount.component";
import { NewAccountComponent } from "./newaccount/newaccount.component";
import { HomeComponent } from "./home/home.component";


const routes:Routes=[{
    path: 'New_Account',
    component: NewAccountComponent
},
    {
        path: 'Update_Account',
        component: UpdateAccountComponent
    },
    {
        path: 'Balance_Check',
        component: BalanceAccountComponent
    },

    {
        path: 'Home',
        component: HomeComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule
{
}
