import { NgModule } from '@angular/core';
import{ RouterModule, Routes} from '@angular/router'
import { AboutComponent } from './modules/about/about.component';
import { CateringComponent } from './modules/catering/catering.component';
import { MainComponent } from './modules/main/main.component';




const routes:Routes=[
    {
        path:"",
        component: MainComponent,
    },
    {
        path:"about/:id",
        component: AboutComponent,
    },
    {
        path:"catering",
        component: CateringComponent,
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}