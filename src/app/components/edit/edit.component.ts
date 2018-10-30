import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public bnkForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private bnk: BnkService,
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bnk.member(id).subscribe((data: Member) => {
      this.bnkForm = this.fb.group(data);
    });
  }

  save() {
    this.bnk.update(this.bnkForm.value).subscribe(data => {
      this.router.navigate(['/dashboard']);
    });
  }
}
