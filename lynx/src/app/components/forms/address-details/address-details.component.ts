import {Component, OnInit} from '@angular/core';
import {AddressDetails} from '../../../models/address-details';
import {FormDataService} from '../../../services/form-data.service';
import {PersonalDetails} from '../../../models/personal-details';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {
  // We need here both models because we have some optional fields
  addressDetails: AddressDetails;
  personalDetails: PersonalDetails;

  /**
   * Populate data from formDataService that is singleton
   * @param formDataService
   */
  constructor(private formDataService: FormDataService) {
    this.addressDetails = formDataService.addressDetails;
    this.personalDetails = formDataService.personalDetails;
  }


  ngOnInit(): void {
  }

}
