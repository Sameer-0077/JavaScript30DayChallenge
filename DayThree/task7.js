function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + ' is a leap year.');
    } else {
        console.log(year + ' is not a leap year.');
    }
}

isLeapYear(1984);
isLeapYear(2000);
isLeapYear(2022);
isLeapYear(2023);
isLeapYear(2024);