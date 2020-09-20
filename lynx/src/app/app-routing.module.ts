import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonalDetailsComponent} from './components/forms/personal-details/personal-details.component';
import {AddressDetailsComponent} from './components/forms/address-details/address-details.component';
import {SummaryComponent} from './components/forms/summary/summary.component';

const routes: Routes = [
  {path: '', component: PersonalDetailsComponent},
  {path: 'addressdetails', component: AddressDetailsComponent},
  {path: 'summary', component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
