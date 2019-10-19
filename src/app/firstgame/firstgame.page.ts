import { Component } from '@angular/core';
import 'phaser';

import { FirstGameScene } from './firstgame.scene';

@Component({
  selector: 'app-firstgame',
  templateUrl: 'firstgame.page.html',
  styleUrls: ['firstgame.page.scss'],
})
export class FirstGamePage {

  private config: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'firstgame-container',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: [FirstGameScene]
  };

  private game: Phaser.Game;

  constructor() { }

  ionViewDidEnter() {
    this.game = new Phaser.Game(this.config);
  }

  ionViewDidLeave() {
    this.game.destroy(true);
  }

}
