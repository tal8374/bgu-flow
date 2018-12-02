import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { MxgraphGuiComponent } from './mxgraph-gui';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mxgraph-gui', component: MxgraphGuiComponent},
  {path: '**', component: NoContentComponent},
];
