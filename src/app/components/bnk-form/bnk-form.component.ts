import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { UrlValidator } from '../../validators/url.validator';

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
      'name': ['', Validators.required],
      'imgUrl': ['', [Validators.required, UrlValidator.url]],
      'instagramId': ['', Validators.required]
    });
  }

  save() {
    if (this.bnkForm.valid) {
      this.bnk.create(this.bnkForm.value).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      console.log('error', this.bnkForm.controls['name'].errors);
      console.log('error', this.bnkForm.controls['imgUrl'].errors);
      alert('เฮ้ย');
    }
  }

}
