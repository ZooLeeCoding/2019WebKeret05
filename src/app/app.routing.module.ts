import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MySecondComponent } from './my-second/my-second.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'second', component: MySecondComponent},
    {path: '**', component: MainComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}