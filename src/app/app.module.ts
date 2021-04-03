import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, Myrouter } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthGuard } from './auth.guard';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { ContactUsComponent } from './Component/User/contact-us/contact-us.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DatatypesAndVariableComponent } from './Courses/C/datatypes-and-variable/datatypes-and-variable.component';
import { AbstractInterfaceComponent } from './Courses/CSharp/abstract-interface/abstract-interface.component';
import { CollageProjectsComponent } from './Component/CollageProjects/collage-projects/collage-projects.component';
import { OperatorsComponent } from './Courses/CSharp/operators/operators.component';
import { ConditionalStatementsComponent } from './Courses/CSharp/conditional-statements/conditional-statements.component';




@NgModule({
  declarations: [
    AppComponent,
    Myrouter,
    ContactUsComponent,
    NavigationBarComponent,
    DatatypesAndVariableComponent,
    AbstractInterfaceComponent,
    CollageProjectsComponent,
    OperatorsComponent,
    ConditionalStatementsComponent,
   
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    FormsModule,
    MatMenuModule,
    MatGridListModule,
    AngularFireModule.initializeApp(environment.firebaseConfigs),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
