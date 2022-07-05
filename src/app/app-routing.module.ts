import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventContainerComponent} from './pages';


const routes: Routes = [
  {
    path: '',
    component: EventContainerComponent
  },
  {
    path: '**',
    component: EventContainerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
