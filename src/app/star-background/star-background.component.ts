import {Component, Input} from '@angular/core';

interface Star {
  size: number;
  position: [x: number, y: number];
}

@Component({
  selector: 'star-background',
  templateUrl: './star-background.component.html',
  styleUrls: ['./star-background.component.sass']
})
export class StarBackgroundComponent {
  @Input() starCount = 100;
  stars: Star[] = [];

  constructor() {
  }
  ngOnInit(): void {
    for(let i = 0; i < this.starCount; i++) {
      this.stars.push({
        size: Math.random() * 4,
        // Random position within window size plus a little extra on the top
        position: [Math.random() * window.innerWidth, Math.random() * window.innerHeight]
      })
    }
  }
}
