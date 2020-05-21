import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FunctionhallComponent } from './functionhall/functionhall.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchbarService } from './searchbar.service';
import { FunctionhallpageComponent } from './functionhall/functionhallpage/functionhallpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FunctionhallComponent,
    SearchbarComponent,
    HelpComponent,
    LoginComponent,
    FunctionhallpageComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
  ],
  providers: [SearchbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
