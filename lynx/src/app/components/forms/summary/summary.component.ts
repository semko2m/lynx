import {Component, OnInit} from '@angular/core';
import {FormDataService} from '../../../services/form-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public formDataService: FormDataService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.formDataService.createUser().subscribe(user => {
      console.log(user);
      alert('User width id is created : ' +  user.id);
    });
  }

}
