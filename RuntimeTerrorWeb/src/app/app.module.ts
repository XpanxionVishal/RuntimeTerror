import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { PostAdComponent } from './post-ad/post-ad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindAccomodationComponent } from './find-accomodation/find-accomodation.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { GalleriaModule } from 'primeng/galleria';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EncrDecrService } from '../services/encr-decr.service';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SliderModule } from 'primeng/slider';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PostAdComponent,
    FindAccomodationComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    InputTextareaModule,
    FileUploadModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GalleriaModule,
    FormsModule,
    OverlayPanelModule,
    SliderModule,
    RadioButtonModule,
    DialogModule,
    CardModule,
  ],
  providers: [EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
