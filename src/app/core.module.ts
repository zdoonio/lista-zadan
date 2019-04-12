import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './core/components/app/app.component';
import { TaskListComponent } from './tasks/pages/task-list/task-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ], imports: [BrowserModule, CoreRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
