import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-animation',
  templateUrl: './loader-animation.component.html',
  styleUrls: ['./loader-animation.component.scss']
})
export class LoaderAnimationComponent implements OnInit {
  @Input() bgColor: 'light' | 'dark' = 'light';
  constructor() { }

  ngOnInit(): void {
  }

}
