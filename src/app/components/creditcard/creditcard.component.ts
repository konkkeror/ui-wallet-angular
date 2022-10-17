import { Component, Input, OnInit } from '@angular/core';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faSimCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.scss']
})
export class CreditcardComponent implements OnInit {
  faCcMastercard = faCcMastercard;
  faSimCard = faSimCard;
  @Input() total:string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
