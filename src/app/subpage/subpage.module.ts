import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SubpageComponent } from './components/subpage/subpage.component';

@NgModule({
  declarations: [SubpageComponent],
  imports: [CommonModule, IonicModule],
  exports: [SubpageComponent],
})
export class SubpageModule {}
