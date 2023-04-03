import { daysUntil } from '../src/client/js/app';

describe('daysUntil', () => {
  it('calculates the correct number of days until the input date', () => {
    const inputDate = new Date();
    inputDate.setDate(inputDate.getDate() + 10); // Add 10 days to the current date
    const inputDateString = inputDate.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD

    const result = daysUntil(inputDateString);
    expect(result).toBe(10);
  });
});
