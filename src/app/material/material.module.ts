import { NgModule } from '@angular/core';
import { AppDateAdapter } from './app-date-adaptor';
import { APP_DATE_FORMATS } from './app-date-formats';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatExpansionModule,
  MatChipsModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class MaterialModule {}
