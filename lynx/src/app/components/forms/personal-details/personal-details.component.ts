import {Component, OnInit} from '@angular/core';
import {PersonalDetails} from '../../../models/personal-details';
import {FormDataService} from '../../../services/form-data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  // Public var for personal Details.
  personalDetails: PersonalDetails;

  /**
   * Populate personalDetails Reference with data from Singleton Service
   * @param formDataService
   */
  constructor(private formDataService: FormDataService) {
    this.personalDetails = formDataService.personalDetails;
  }

  ngOnInit(): void {
  }
}

