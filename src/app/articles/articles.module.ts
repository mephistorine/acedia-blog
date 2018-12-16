import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ArticlesComponent } from './components/articles/articles.component'
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ArticlesModule { }
