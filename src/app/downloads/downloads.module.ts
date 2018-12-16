import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DownloadsComponent } from './components/downloads/downloads.component'
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [DownloadsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DownloadsModule { }
