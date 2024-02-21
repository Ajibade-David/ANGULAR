import { Routes } from '@angular/router';
import { ContactappComponent } from './contactapp/contactapp.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServicescomponentComponent } from './servicescomponent/servicescomponent.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { studentGuard } from './guards/student.guard';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { StepperformAssComponent } from './stepperform-ass/stepperform-ass.component';
import { BehaviorsubjectparentComponent } from './behaviorsubjectparent/behaviorsubjectparent.component';
import { PipeComponent } from './pipe/pipe.component';
import { EventchildComponent } from './eventchild/eventchild.component';
import { EventparentComponent } from './eventparent/eventparent.component';

export const routes: Routes = [
    {path:'home', component:ContactappComponent},
    {path:'service', component:ServicescomponentComponent},
    {path:'signup', component:SignupComponent},
    {path:'event', component:EventparentComponent},
    {path:'behavior', component:BehaviorsubjectparentComponent},
    {path:'signin', component:SigninComponent},
    {path:'reactiveform', component:ReactiveformComponent},
    {path:'templateform', component:TemplatedrivenformComponent},
    {path:'stepperform', component:StepperformAssComponent},
    {path:'pipe', component:PipeComponent},
    {path:'', redirectTo:'home ', pathMatch:'full'},
    {path:'display/:index', component:DisplaycontactComponent},
    {path:'dashboard',children:[
        { path:'', component:DashboardComponent},
        { path:'settings', component:SettingsComponent}
    ],canActivate:[studentGuard]},
    {path:'edit/:index', component:ViewcontactComponent},
    {path:'**', component:ErrorPageComponent}
];
