import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { PortafolisComponent } from './pages/portafolis/portafolis.component';
import { QuisomComponent } from './pages/quisom/quisom.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const app_routes: Routes = [
    { path: 'home', component: PortafolisComponent },
    { path: 'quisom', component: QuisomComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:terme', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    
]

@NgModule({

    imports: [
    
    RouterModule.forRoot( app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule { }

