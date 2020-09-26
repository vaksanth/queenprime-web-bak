import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() src: string;
  @Output() cancelFunction: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.cancelFunction.emit('false');
  }

}
