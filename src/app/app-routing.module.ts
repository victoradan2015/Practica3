import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EdadGuard } from './edad.guard'


const routes: Routes = [
  { path: 'FirstComponent', component: FirstComponent, canActivate:[EdadGuard] },
  { path: 'SecondComponent', component: SecondComponent, canActivate:[EdadGuard] },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
