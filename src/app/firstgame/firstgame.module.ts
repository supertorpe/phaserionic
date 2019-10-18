import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FirstGameSceneModule } from './firstgame.scene.module';
import { FirstGamePage } from './firstgame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FirstGamePage
      }
    ]),
    FirstGameSceneModule
  ],
  declarations: [FirstGamePage]
})
export class FirstGamePageModule {}
