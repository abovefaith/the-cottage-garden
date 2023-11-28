import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedfolders/components/navbar/navbar.component';
import { FooterComponent } from './sharedfolders/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgramComponent } from './pages/program/program.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { UsefullinksComponent } from './pages/usefullinks/usefullinks.component';
import { ContactComponent } from './pages/contact/contact.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';






// import {NgIf} from '@angular/common';
import {NgFor, NgIf} from '@angular/common';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailyProgramComponent } from './pages/daily-program/daily-program.component';
import { CurricullumComponent } from './pages/curricullum/curricullum.component';
import { TuitionComponent } from './pages/tuition/tuition.component';
import { OurMenuComponent } from './pages/our-menu/our-menu.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EnrollpageComponent } from './pages/enrollpage/enrollpage.component';
import { CeliaComponent } from './staffbios/celia/celia.component';
import { AudleyComponent } from './staffbios/audley/audley.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ClassListComponent } from './forms and lists/class-list/class-list.component';
import { EmergencyFormComponent } from './forms and lists/emergency-form/emergency-form.component';
import { FamilyInforFormComponent } from './forms and lists/family-infor-form/family-infor-form.component';
import { MedicalFormComponent } from './forms and lists/medical-form/medical-form.component';
import { OintmentPermissionFormComponent } from './forms and lists/ointment-permission-form/ointment-permission-form.component';
import { OralOptOutFormComponent } from './forms and lists/oral-opt-out-form/oral-opt-out-form.component';
import { PhotoPermissionFormComponent } from './forms and lists/photo-permission-form/photo-permission-form.component';
import { TuitionFormComponent } from './forms and lists/tuition-form/tuition-form.component';
import { CottageStoreComponent } from './pages/cottage-store/cottage-store.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PlayOutdoorsComponent } from './gallery-pages/play-outdoors/play-outdoors.component';
import { PlayIndoorsComponent } from './gallery-pages/play-indoors/play-indoors.component';
import { CraftsComponent } from './gallery-pages/crafts/crafts.component';
import { WonderComponent } from './gallery-pages/wonder/wonder.component';
import { FoundersComponent } from './gallery-pages/founders/founders.component';
import { SeasonalTableauComponent } from './gallery-pages/seasonal-tableau/seasonal-tableau.component';
import { PhilosophyComponent } from './pages/philosophy/philosophy.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProgramComponent,
    EnrollmentComponent,
    PoliciesComponent,
    UsefullinksComponent,
    ContactComponent,
    DailyProgramComponent,
    CurricullumComponent,
    TuitionComponent,
    OurMenuComponent,
    CalendarComponent,
    EnrollpageComponent,
    CeliaComponent,
    AudleyComponent,
    GalleryComponent,
    ClassListComponent,
    EmergencyFormComponent,
    FamilyInforFormComponent,
    MedicalFormComponent,
    OintmentPermissionFormComponent,
    OralOptOutFormComponent,
    PhotoPermissionFormComponent,
    TuitionFormComponent,
    CottageStoreComponent,
    AboutUsComponent,
    PlayOutdoorsComponent,
    PlayIndoorsComponent,
    CraftsComponent,
    WonderComponent,
    FoundersComponent,
    SeasonalTableauComponent,
    PhilosophyComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatListModule,
    MatRadioModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
