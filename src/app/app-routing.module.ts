import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { FormsComponent } from './forms/forms.component';

export const routes: Routes = [
  {
      path: 'productList',
      component: ProductlistComponent
  },
  {
      path: 'api',
      component: ApiIntegrationComponent
  },
  {
      path: 'forms',
      component: FormsComponent
  },
  {
      path: '',
      redirectTo: '/productList',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/productList',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
