import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: '',
        data: { animation: 'home' },
        loadChildren: () => import('./templates/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'catalog',
        data: { animation: 'catalog' },
        loadChildren: () => import('./templates/catalog/catalog.module').then(m => m.CatalogModule)
    },
    {
        path: 'about',
        data: { animation: 'about' },
        loadChildren: () => import('./templates/about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'contact',
        data: { animation: 'contact' },
        loadChildren: () => import('./templates/contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: 'admin',
        data: { animation: 'admin' },
        loadChildren: () => import('./templates/admin/admin.module').then(m => m.AdminModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}