import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  constructor() {}

  // Calculate vacation options based on current year and input parameters
  calculateVacationOptions(maxLeave: number, defaultHolidays: Date[]) {
    const currentYear = new Date().getFullYear();
    const startDate = new Date(`${currentYear}-01-01`);
    const endDate = new Date(`${currentYear}-12-31`);

    // Function to generate weekends between start and end dates
    const generateWeekends = (start: Date, end: Date): Date[] => {
      const weekends: Date[] = [];
      for (
        let date = new Date(start);
        date <= end;
        date.setDate(date.getDate() + 1)
      ) {
        if (date.getDay() === 6 || date.getDay() === 0) {
          weekends.push(new Date(date));
        }
      }
      return weekends;
    };

    // Function to generate set of off days including holidays and weekends
    const generateOffDaysSet = (
      holidays: Date[],
      weekends: Date[]
    ): Set<string> =>
      new Set([...holidays, ...weekends].map((date) => date.toDateString()));

    // Function to adjust start date to ensure it starts on a working day
    const adjustStartDate = (date: Date): Date => {
      let adjustedDate = new Date(date);
      if (adjustedDate.getDay() === 1) {
        // If the adjusted date is a Monday
        adjustedDate.setDate(adjustedDate.getDate() - 2); // Move to the previous Saturday
      }
      return adjustedDate;
    };

    // Function to find vacation period details
    const findVacationPeriod = (
      startDate: Date,
      offDays: Set<string>,
      maxLeave: number
    ) => {
      let leaveDates: Date[] = [];
      let leaveUsed = 0;
      let currentDate = new Date(startDate);

      // Loop to determine the leave dates and count used leaves
      for (
        ;
        leaveUsed < maxLeave || offDays.has(currentDate.toDateString());
        currentDate.setDate(currentDate.getDate() + 1)
      ) {
        if (!offDays.has(currentDate.toDateString())) {
          leaveUsed++;
          leaveDates.push(new Date(currentDate));
        }
      }

      // Adjust back to the last leave date
      currentDate.setDate(currentDate.getDate() - 1);

      let vacationEnd = new Date(currentDate);

      // Skip Saturdays to find the actual end date of the vacation period
      while (vacationEnd.getDay() === 6) {
        vacationEnd.setDate(vacationEnd.getDate() + 1);
      }

      // Calculate the total vacation days
      const vacationTotal =
        (vacationEnd.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) +
        1;

      return {
        leaveUsed,
        leaveDates,
        vacationStart: startDate,
        vacationEnd,
        vacationTotal,
      };
    };

    // Generate weekends and set of off days
    const weekends = generateWeekends(startDate, endDate);
    const offDays = generateOffDaysSet(defaultHolidays, weekends);

    // Array to store all vacation options
    const vacationOptions = [];

    // Loop through each date in the year to find vacation options
    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      if (offDays.has(date.toDateString())) continue;

      // Adjust start date to ensure it starts on a working day (Monday to Friday)
      let adjustedStartDate = adjustStartDate(date);

      // Find vacation period details for the adjusted start date
      const vacationPeriod = findVacationPeriod(
        adjustedStartDate,
        offDays,
        maxLeave
      );

      // Store vacation period details in the options array
      vacationOptions.push(vacationPeriod);
    }

    // Sort vacation options by total vacation days in descending order
    vacationOptions.sort((a, b) => b.vacationTotal - a.vacationTotal);

    return vacationOptions;
  }
}
