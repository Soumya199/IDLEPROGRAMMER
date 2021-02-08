import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LogInComponent } from './Component/User/log-in/log-in.component';
import { RegisterComponent } from './Component/User/register/register.component';
import { AuthGuard } from './auth.guard';
import { ACRecoveryComponent } from './Component/User/acrecovery/acrecovery.component';
import { HCJBCOMPILERComponent } from './Component/Compilers/hcjbcompiler/hcjbcompiler.component';
import { OnlineCompilersComponent } from './Component/Compilers/online-compilers/online-compilers.component';
import { IntoductionToCComponent } from './Courses/C/intoduction-to-c/intoduction-to-c.component';
import { EnvirnmentsetupComponent } from './Courses/C/envirnmentsetup/envirnmentsetup.component';
import { CSharpIntroductionComponent } from './Courses/CSharp/csharp-introduction/csharp-introduction.component';
import { CSharpDataTypesComponent } from './Courses/CSharp/csharp-data-types/csharp-data-types.component';
import { CSharpEnvirnmentSetUpComponent } from './Courses/CSharp/csharp-envirnment-set-up/csharp-envirnment-set-up.component';
import { ArrayInCSharpComponent } from './Courses/CSharp/array-in-csharp/array-in-csharp.component';
import { OopsComponent } from './Courses/CSharp/oops/oops.component';
import { NullableComponent } from './Courses/CSharp/nullable/nullable.component';
import { ConvertClassComponent } from './Courses/CSharp/convert-class/convert-class.component';
import { VarVsDynamicComponent } from './Courses/CSharp/var-vs-dynamic/var-vs-dynamic.component';
import { AboutUSComponent } from './Component/Webinfo/about-us/about-us.component';
import { AiComponent } from './Component/Articles/ai/ai.component';
import { CreateFileInCSharpComponent } from './Component/Articles/create-file-in-csharp/create-file-in-csharp.component';
import { WhyCSharpComponent } from './Component/Articles/why-csharp/why-csharp.component';
import { TopProgramminglaguageComponent } from './Component/Articles/top-programminglaguage/top-programminglaguage.component';
import { PrivecyPolicyComponent } from './Component/Webinfo/privecy-policy/privecy-policy.component';
import { DisclaimerComponent } from './Component/Webinfo/disclaimer/disclaimer.component';
import { ContactUsComponent } from './Component/User/contact-us/contact-us.component';
import { PageNotFoundComponent } from './Component/Webinfo/page-not-found/page-not-found.component';
import { FirstCProgramComponent } from './Courses/C/first-cprogram/first-cprogram.component';
import { DatatypesAndVariableComponent } from './Courses/C/datatypes-and-variable/datatypes-and-variable.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  { path: '',    redirectTo: '/Home', pathMatch: 'full'  },
  {path:'Login',component:LogInComponent},
  {path:'register',component:RegisterComponent},
  {path:'AccountRecovery',component:ACRecoveryComponent},
  {path:'aboutUs',component:AboutUSComponent},
  {path:'htmlCompiler',component:HCJBCOMPILERComponent},
  {path:'OnlineCompilers',component:OnlineCompilersComponent},
  { path: 'policy', component: PrivecyPolicyComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  {path:'contactUs',component:ContactUsComponent,canActivate: [AuthGuard]},
  {path:'404PageNotFound',component:PageNotFoundComponent},
  // This section will deal with c Course

  {path:'C/intoductionToc',component:IntoductionToCComponent},
  {path:'C/envirnmentSetup',component:EnvirnmentsetupComponent},
  {path:'C/FirstCprogram',component:FirstCProgramComponent},
  {path:'C/DatatypesAndVariable',component:DatatypesAndVariableComponent},

   // This section will deal with c Course

    // This section will deal with C Sharp Course
  {path:'CSharp/introductionCSharp',component:CSharpIntroductionComponent},
  {path:'CSharp/datatypesInCsharp',component:CSharpDataTypesComponent},
  {path:'CSharp/envirnmentsetup',component:CSharpEnvirnmentSetUpComponent},
  {path:'CSharp/array',component:ArrayInCSharpComponent},
  {path:'CSharp/oops',component:OopsComponent},
  {path:'CSharp/nullable',component:NullableComponent},
  {path:'CSharp/convertClass',component:ConvertClassComponent},
  {path:'CSharp/VarVsDynamic',component:VarVsDynamicComponent},
  // This section will deal with C Sharp Course

  // This section will deal with Articles

  { path: 'ai', component: AiComponent },
  { path: 'CreateFileCSharp', component: CreateFileInCSharpComponent },
  { path: 'whycsharp', component: WhyCSharpComponent },
  { path: 'topprogrammingLanguage', component: TopProgramminglaguageComponent },
  {path: '**', redirectTo: '/404PageNotFound'}
   // This section will deal with Articles
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Myrouter=[HomeComponent,ContactUsComponent,LogInComponent,PrivecyPolicyComponent,RegisterComponent,ACRecoveryComponent,AboutUSComponent,
  HCJBCOMPILERComponent,OnlineCompilersComponent,
  // This section will deal with c Course

  IntoductionToCComponent,EnvirnmentsetupComponent,FirstCProgramComponent,

// This section will deal with c Course

 // This section will deal with Articles
 AiComponent,CreateFileInCSharpComponent,WhyCSharpComponent,TopProgramminglaguageComponent,
  // This section will deal with Articles

  // This section will deal with C Sharp Course
  CSharpIntroductionComponent,VarVsDynamicComponent,ConvertClassComponent,NullableComponent,
  CSharpDataTypesComponent,CSharpEnvirnmentSetUpComponent,ArrayInCSharpComponent,OopsComponent];
  // This section will deal with C Sharp Course
