import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  
  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }


}
