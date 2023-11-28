import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProgramComponent } from './pages/program/program.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';
import { PoliciesComponent } from './pages/policies/policies.component';
import { UsefullinksComponent } from './pages/usefullinks/usefullinks.component';
import { ContactComponent } from './pages/contact/contact.component';
// import { DailyProgramComponent } from './pages/daily-program/daily-program.component';
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
import { CraftsComponent } from './gallery-pages/crafts/crafts.component';
import { FoundersComponent } from './gallery-pages/founders/founders.component';
import { PlayIndoorsComponent } from './gallery-pages/play-indoors/play-indoors.component';
import { PlayOutdoorsComponent } from './gallery-pages/play-outdoors/play-outdoors.component';
import { SeasonalTableauComponent } from './gallery-pages/seasonal-tableau/seasonal-tableau.component';
import { WonderComponent } from './gallery-pages/wonder/wonder.component';
import { PhilosophyComponent } from './pages/philosophy/philosophy.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'program',component:ProgramComponent},
  {path:'enrollment',component:EnrollmentComponent},
  {path:'enrollpage',component:EnrollpageComponent},
  {path:'policies',component:PoliciesComponent},
  {path:'usefullinks',component:UsefullinksComponent},
  {path:'contact',component:ContactComponent},
  // {path:'daily',component:DailyProgramComponent},
  {path:'curricullum',component:CurricullumComponent},
  {path:'tuition',component:TuitionComponent},
  {path:'ourmenu',component:OurMenuComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'celia',component:CeliaComponent},
  {path:'audley',component:AudleyComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'store',component:CottageStoreComponent},
  {path:'classlist',component:ClassListComponent},
  {path:'emergency',component:EmergencyFormComponent},
  {path:'familyinfor',component:FamilyInforFormComponent},
  {path:'medical',component:MedicalFormComponent},
  {path:'ointment',component:OintmentPermissionFormComponent},
  {path:'oralopt',component:OralOptOutFormComponent},
  {path:'photopermission',component:PhotoPermissionFormComponent},
  {path:'tuitionform',component:TuitionFormComponent},
  {path:'philosophy',component:PhilosophyComponent},


  {path:'outdoors',component:PlayOutdoorsComponent},
  {path:'indoors',component:PlayIndoorsComponent},
  {path:'crafts',component:CraftsComponent},
  {path:'wonder',component:WonderComponent},
  {path:'founders',component:FoundersComponent},
  {path:'seasonal',component:SeasonalTableauComponent },


  // {path:'',redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
