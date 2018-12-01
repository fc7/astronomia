/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module julian
 */
export = julian;
export as namespace julian;
import * as CalendarGregorian from "./julian";
declare module julian { 
    /**
     * 1582-10-05 Julian Date is 1st Gregorian Date (1582-10-15)
     */
    const GREGORIAN0JD: number;

    /**
     * Base class for CalendarJulian and CalendarGregorian
     * Respects the start of the Gregorian Calendar at `GREGORIAN0JD`
     */
    class Calendar {
        constructor(year: number, month?: number, day?: number);
        constructor(date: Date);

        /**
         * Note: Take care for dates < GREGORIAN0JD as `date` is always within the
         * proleptic Gregorian Calender
         * @param {Date} date - proleptic Gregorian date
         */
        fromDate(date: Date): Calendar;

        /**
         * Note: Take care for dates < GREGORIAN0JD as `date` is always within the
         * proleptic Gregorian Calender
         * @returns {Date} proleptic Gregorian date
         */
        toDate(): Date;

        /**
         * converts a calendar date to decimal year
         * @returns {number} decimal year
         */
        toYear(): number;

        /**
         * converts a decimal year to a calendar date
         * @param {number} decimal year
         */
        fromYear(decimal: number): Calendar;

        isLeapYear(): boolean;

        toJD(): number;

        fromJD(jd: number): Calendar;

        toJDE(): number;

        fromJDE(jde: number): Calendar;

        /**
         * set date to midnight UTC
         */
        midnight(): Calendar;

        /**
         * set date to noon UTC
         */
        noon(): Calendar;

        /**
         * @param {Boolean} td - if `true` calendar instance is in TD; date gets converted to UT
         *   true  - `UT = TD - ΔT`
         *   false - `TD = UT + ΔT`
         */
        deltaT(td: boolean): Calendar;

        dayOfWeek(): number;

        dayOfYear(): number;

    }

    class CalendarJulian extends Calendar {
        toGregorian(): CalendarGregorian;
    }

    class CalendarGregorian extends Calendar {
        toJulian(): CalendarJulian;
    }

    /**
     * base conversion from calendar date to julian day
     */
    function CalendarToJD(y:number, m:number, d:number, isJulian:boolean): number;

    /**
     * CalendarGregorianToJD converts a Gregorian year, month, and day of month
     * to Julian day.
     * Negative years are valid, back to JD 0.  The result is not valid for
     * dates before JD 0.
     * @param {number} y - year (int)
     * @param {number} m - month (int)
     * @param {number} d - day (float)
     * @returns {number} jd - Julian day (float)
     */
    function CalendarGregorianToJD(y: number, m: number, d: number): number;

    /**
     * CalendarJulianToJD converts a Julian year, month, and day of month to Julian day.
     * Negative years are valid, back to JD 0.  The result is not valid for
     * dates before JD 0.
     * @param {number} y - year (int)
     * @param {number} m - month (int)
     * @param {number} d - day (float)
     * @returns {number} jd - Julian day (float)
     */
    function CalendarJulianToJD(y: number, m: number, d: number): number;

    /**
     * LeapYearJulian returns true if year y in the Julian calendar is a leap year.
     * @param {number} y - year (int)
     * @returns {boolean} true if leap year in Julian Calendar
     */
    function LeapYearJulian(y: number): boolean;

    /**
     * LeapYearGregorian returns true if year y in the Gregorian calendar is a leap year.
     * @param {number} y - year (int)
     * @returns {boolean} true if leap year in Gregorian Calendar
     */
    function LeapYearGregorian(y: number): boolean;

    type YMD = {year:number, month: number, day: number}

    /**
     * JDToCalendar returns the calendar date for the given jd.
     * Note that this function returns a date in either the Julian or Gregorian
     * Calendar, as appropriate.
     * @param {number} jd - Julian day (float)
     * @param {boolean} isJulian - set true for Julian Calendar, otherwise Gregorian is used
     * @returns {object} `{ (int) year, (int) month, (float) day }`
     */
    function JDToCalendar(jd: number, isJulian: boolean): YMD;

    /**
     * JDToCalendarGregorian returns the calendar date for the given jd in the Gregorian Calendar.
     * @param {number} jd - Julian day (float)
     * @returns {object} `{ (int) year, (int) month, (float) day }`
     */
    function JDToCalendarGregorian(jd: number): YMD;

    /**
     * JDToCalendarJulian returns the calendar date for the given jd in the Julian Calendar.
     * @param {number} jd - Julian day (float)
     * @returns {object} { (int) year, (int) month, (float) day }
     */
    function JDToCalendarJulian(jd: number): YMD;

    /**
     * isJDCalendarGregorian tests if Julian day `jd` falls into the Gregorian calendar
     * @param {number} jd - Julian day (float)
     * @returns {boolean} true for Gregorian, false for Julian calendar
     */
    function isJDCalendarGregorian(jd: number): boolean;

    /**
     * isCalendarGregorian tests if date falls into the Gregorian calendar
     * @param {number} year - julian/gregorian year
     * @param {number} [month] - month of julian/gregorian year
     * @param {number} [day] - day of julian/gregorian year
     * @returns {boolean} true for Gregorian, false for Julian calendar
     */
    function isCalendarGregorian(year: number, month?: number, day?: number): boolean;

    /**
     * JDToDate converts a Julian day `jd` to a Date Object (Gregorian Calendar)
     * Note: Javascript uses the the ISO-8601 calendar, which is a proleptic Gregorian
     * calendar, i.e. it acts as if this calendar was always in effect, even before
     * its year of introduction in 1582. Therefore dates between 1582-10-05 and
     * 1582-10-14 exists.
     * @param {number} jd - Julian day (float)
     * @returns {Date}
     */
    function JDToDate(jd: number): Date;

    /**
     * DateToJD converts a proleptic Gregorian Date into a Julian day `jd`
     * @param {Date} date
     * @returns {number} jd - Julian day (float)
     */
    function DateToJD(date: Date): number;

    /**
     * JDEToDate converts a Julian ephemeris day `jde` to a Date Object (Gregorian Calendar)
     * To obtain "Universal Time" (UT) from "Dynamical Time" (TD) the correction ΔT (in seconds) gets applied
     * ```
     * UT = TD - ΔT
     * ```
     * If your use case does not require such accuracy converting `jde` using `JDToDate` is fine.
     * Note: Javascript uses the the ISO-8601 calendar, which is a proleptic Gregorian
     * calendar, i.e. it acts as if this calendar was always in effect, even before
     * its year of introduction in 1582. Therefore dates between 1582-10-05 and
     * 1582-10-14 exists.
     * @param {number} jde - Julian ephemeris day
     * @returns {Date} Javascript Date Object
     */
    function JDEToDate(jde: number): Date;

    /**
     * DateToJDE converts a Date Object (Gregorian Calendar) to a Julian ephemeris day `jde`
     * To obtain "Dynamical Time" (TD) from "Universal Time" (UT) the correction ΔT (in seconds) gets applied
     * ```
     * TD = UT + ΔT
     * ```
     * If your use case does not require such accuracy converting `Date` using `DateToJD` is fine.
     * @param {Date} date - Javascript Date Object
     * @returns {number} jde - Julian ephemeris day (float)
     */
    function DateToJDE(date: Date): number;

    /**
     * converts Modified Julian Day `mjd` to Julian Day `jd`
     * @param {Number} mjd - Modified Julian Day
     * @returns {Number} jd - Julian Day
     */
    function MJDToJD(mjd: number): number;

    /**
     * converts Julian Day `jd` to Modified Julian Day `mjd`
     * @param {Number} jd - Julian Day
     * @returns {Number} mjd - Modified Julian Day
     */
    function JDToMJD(jd: number): number;

    /**
     * DayOfWeek determines the day of the week for a given JD.
     * The value returned is an integer in the range 0 to 6, where 0 represents
     * Sunday.  This is the same convention followed in the time package of the
     * Javascript standard library.
     * @param {number} jd - Julian day (float)
     * @returns {number} (int) 0 == sunday; ...; 6 == saturday
     */
    function DayOfWeek(jd: number): number;

    /**
     * DayOfYearGregorian computes the day number within the year of the Gregorian
     * calendar.
     * @param {number} y - year (int)
     * @param {number} m - month (int)
     * @param {number} d - day (float)
     * @returns {number} day of year
     */
    function DayOfYearGregorian(y: number, m: number, d: number): number;

    /**
     * DayOfYearJulian computes the day number within the year of the Julian
     * calendar.
     * @param {number} y - year (int)
     * @param {number} m - month (int)
     * @param {number} d - day (float)
     * @returns {number} day of year
     */
    function DayOfYearJulian(y: number, m: number, d: number): number;

    /**
     * DayOfYear computes the day number within the year.
     * This form of the function is not specific to the Julian or Gregorian
     * calendar, but you must tell it whether the year is a leap year.
     * @param {number} y - year (int)
     * @param {number} m - month (int)
     * @param {number} d - day (float)
     * @param {boolean} leap - set `true` if `y` is leap year
     * @returns {number} day of year
     */
    function DayOfYear(y: number, m: number, d: number, leap: boolean): number;

    type MD = {month: number, day: number}

    /**
     * DayOfYearToCalendar returns the calendar month and day for a given
     * day of year and leap year status.
     * @param {number} n - day of year (int)
     * @param {boolean} leap - set `true` if `y` is leap year
     * @returns {object} `{ (int) month, (float) day }`
     */
    function DayOfYearToCalendar(n: number, leap: boolean): MD;

    /**
     * DayOfYearToCalendarGregorian returns the calendar month and day for a given
     * day of year.
     * @param {number} year
     * @param {number} n - day of year (int)
     * @returns {CalendarGregorian} { (int) year, (int) month, (float) day }
     */
    function DayOfYearToCalendarGregorian(year: number, n: number): CalendarGregorian;

    /**
     * DayOfYearToCalendarJulian returns the calendar month and day for a given
     * day of year.
     * @param {number} year
     * @param {number} n - day of year (int)
     * @returns {CalendarJulian} { (int) year, (int) month, (float) day }
     */
    function DayOfYearToCalendarJulian(year: number, n: number): CalendarJulian;

}

