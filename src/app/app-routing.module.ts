import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  RouterModule,
  Routes
} from '@angular/router'

import { HomeComponent } from './home/components/home/home.component'
import { ArticlesComponent } from './articles/components/articles/articles.component'
import { DownloadsComponent } from './downloads/components/downloads/downloads.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'downloads', component: DownloadsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
