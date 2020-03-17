import { SafeHtml } from './safehtml.pipe';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations:[SafeHtml], // <---
  imports:[CommonModule],
  exports:[SafeHtml] // <---
})

export class MainPipe{}