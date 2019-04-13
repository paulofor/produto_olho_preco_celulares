import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'filme2', loadChildren: './filme-detail2/filme-detail2.module#FilmeDetail2PageModule' },
  { path: 'detalhe-filme2', loadChildren: './pages/detalhe-filme2/detalhe-filme2.module#DetalheFilme2PageModule' },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
