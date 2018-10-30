import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BnkService } from 'src/app/services/bnk.service';

@Component({
  selector: 'app-bnk-form',
  templateUrl: './bnk-form.component.html',
  styleUrls: ['./bnk-form.component.scss']
})
export class BnkFormComponent implements OnInit {

  public bnkForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private bnk: BnkService) { }

  ngOnInit() {
    this.bnkForm = this.fb.group({
      'name': '',
      'imgUrl': '',
      'instagramId': ''
    });
  }

  save() {
    this.bnk.create(this.bnkForm.value).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

}
