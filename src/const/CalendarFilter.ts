export class CalendarFilter {
  isActive: boolean;
  value: string;

  constructor(isActive: boolean, value: string) {
    (this.isActive = isActive), (this.value = value);
  }
}
