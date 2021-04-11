import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CategoriesComponent} from "./categories/categories.component";
import {SubcategoriesComponent} from "./subcategories/subcategories.component";
import {ItemsComponent} from "./items/items.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        AdminComponent,
        CategoriesComponent,
        SubcategoriesComponent,
        ItemsComponent
    ],
    imports: [
        CommonModule,

        ReactiveFormsModule,
        FormsModule,
        FontAwesomeModule,
        HttpClientModule,
        NgbModule,

        AdminRoutingModule,
    ],
})
export class AdminModule {

}