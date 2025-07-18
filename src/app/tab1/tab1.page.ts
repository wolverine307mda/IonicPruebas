import { Component } from '@angular/core';

interface CalendarDay {
  day: number;
  date: Date;
  currentMonth: boolean;
  selected: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  currentDate: Date = new Date();
  selectedDate: Date | null = null;
  weekDays: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  calendarDays: CalendarDay[][] = [];

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    // Primer y último día del mes actual
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    // Último día del mes anterior
    const lastDayOfPrevMonth = new Date(year, month, 0);
    
    // Día de la semana en que empieza el mes (0 = domingo, 1 = lunes, etc.)
    // Convertir para que lunes sea 0: (getDay() + 6) % 7
    const startingDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;
    
    // Total de días en el mes actual
    const daysInMonth = lastDayOfMonth.getDate();
    
    this.calendarDays = [];
    let currentDay = 1;
    let nextMonthDay = 1;
    
    // Generar 6 semanas (42 días) para asegurar que el calendario se vea completo
    for (let week = 0; week < 6; week++) {
      const weekDays: CalendarDay[] = [];
      
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        const dayIndex = week * 7 + dayOfWeek;
        
        if (dayIndex < startingDayOfWeek) {
          // Días del mes anterior
          const dayNumber = lastDayOfPrevMonth.getDate() - (startingDayOfWeek - dayIndex - 1);
          const date = new Date(year, month - 1, dayNumber);
          weekDays.push({
            day: dayNumber,
            date: date,
            currentMonth: false,
            selected: this.selectedDate ? this.isSameDate(date, this.selectedDate) : false
          });
        } else if (currentDay <= daysInMonth) {
          // Días del mes actual
          const date = new Date(year, month, currentDay);
          weekDays.push({
            day: currentDay,
            date: date,
            currentMonth: true,
            selected: this.selectedDate ? this.isSameDate(date, this.selectedDate) : false
          });
          currentDay++;
        } else {
          // Días del mes siguiente
          const date = new Date(year, month + 1, nextMonthDay);
          weekDays.push({
            day: nextMonthDay,
            date: date,
            currentMonth: false,
            selected: this.selectedDate ? this.isSameDate(date, this.selectedDate) : false
          });
          nextMonthDay++;
        }
      }
      
      this.calendarDays.push(weekDays);
      
      // Si ya hemos mostrado todos los días del mes y completado la semana,
      // podemos parar si es necesario (opcional para evitar semanas vacías)
      if (currentDay > daysInMonth && week === 5) {
        break;
      }
    }
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  getCurrentMonthYear(): string {
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return `${months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
  }

  selectDate(day: CalendarDay) {
    // Limpiar selección anterior
    this.calendarDays.forEach(week => {
      week.forEach(d => d.selected = false);
    });
    
    // Seleccionar nueva fecha
    day.selected = true;
    this.selectedDate = day.date;
  }

  getFormattedDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('es-ES', options);
  }

  private isSameDate(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }
}
