import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { HolidayService } from '../holiday.service';

@Component({
  selector: 'app-sick-leave',
  standalone: true,
  templateUrl: './sick-leave.component.html',
  imports: [FormsModule, NgFor, NgIf],
  styleUrls: ['./sick-leave.component.scss'],
})
export class SickLeaveComponent {
  maxSickLeave: number = 3;
  maxPlannedIllness: number = 10;
  selectedDate: string | undefined;
  holidayDates: Date[] = []; // Array to store selected holidays
  vacationOptions: any[] = []; // Array to store vacation options

  // Default holidays for the year
  defaultHolidays: Date[] = [
    new Date('2024-01-26'),
    new Date('2024-03-25'),
    new Date('2024-03-29'),
    new Date('2024-04-09'),
    new Date('2024-04-11'),
    new Date('2024-05-01'),
    new Date('2024-06-17'),
    new Date('2024-08-15'),
    new Date('2024-10-02'),
    new Date('2024-10-31'),
    new Date('2024-11-01'),
    new Date('2024-12-25'),
  ];

  constructor(private holidayService: HolidayService) {}

  ngOnInit(): void {
    // Set default holiday dates initially
    this.holidayDates = [...this.defaultHolidays];
  }

  calculateVacationOptions() {
    this.vacationOptions = this.holidayService.calculateVacationOptions(
      this.maxSickLeave,
      this.holidayDates
    );
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }

  addDate() {
    if (this.selectedDate) {
      this.holidayDates.push(new Date(this.selectedDate));
      this.selectedDate = '';
      this.calculateVacationOptions();
    }
  }

  removeDate(date: Date) {
    this.holidayDates = this.holidayDates.filter((d) => d !== date);
    this.calculateVacationOptions();
  }

  onSubmit() {
    // Recalculate vacation options based on current inputs
    this.calculateVacationOptions();
  }
}
