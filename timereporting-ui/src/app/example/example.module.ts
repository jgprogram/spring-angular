import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './pages/example/example.component';

@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    FormsModule,
  ]
})
export class ExampleModule { }
