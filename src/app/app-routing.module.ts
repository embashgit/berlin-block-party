import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventContainerComponent, EventDetailsComponent } from './pages';


const routes: Routes = [
  {
    path: '',
    component: EventContainerComponent
  },
  {
    path: 'event:id',
    component: EventDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
