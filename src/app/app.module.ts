import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Material
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
// Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyricsComponent } from './components/lyrics/lyrics.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListCardComponent,
    LyricsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
