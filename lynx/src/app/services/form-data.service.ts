import {Injectable} from '@angular/core';
import {PersonalDetails} from '../models/personal-details';
import {AddressDetails} from '../models/address-details';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  personalDetails: PersonalDetails;
  addressDetails: AddressDetails;
  private REST_API_SERVER = 'http://localhost:1337/';

  constructor(private httpClient: HttpClient) {
    this.personalDetails = new PersonalDetails();
    this.addressDetails = new AddressDetails();
  }

  createUser(): any {
    const newCombinedObject = {
      firstName: this.personalDetails.firstName,
      lastName: this.personalDetails.lastName,
      haveChildrens : this.personalDetails.haveChildrens,
      fullAddress : this.addressDetails.fullAddress,
      numberOfChildrens : this.addressDetails.numberOfChildrens
    };
    return this.httpClient.post(this.REST_API_SERVER + 'users/', newCombinedObject);
  }


}
