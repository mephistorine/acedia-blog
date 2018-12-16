import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { HomeModule } from './home/home.module'
import { ArticlesModule } from './articles/articles.module'
import { DownloadsModule } from './downloads/downloads.module'
import { UiModule } from './ui/ui.module'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'


const mainModules = [
  HomeModule,
  ArticlesModule,
  DownloadsModule,
  UiModule,
  SharedModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ...mainModules,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
