function daysUntil(inputDateString) {
    // Parse the input date string in MM/DD/YYYY format
    console.log(inputDateString)
    dateString = stringify(inputDateString);
    const [month, day, year] = dateString.split('/');
    const inputDate = new Date(year, month - 1, day);
    console.log(inputDate)
  
    // Get the current date and set the time to midnight to ignore the time difference
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
  
    // Calculate the difference between the two dates in milliseconds
    const differenceInMilliseconds = inputDate - currentDate;
  
    // Convert the difference to days and return it
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays;
  }

export {daysUntil};