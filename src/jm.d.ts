/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module jm
 */
export = jm;
export as namespace jm;
declare module jm {
    /**
     * JewishCalendar returns interesting dates and facts about a given year.
     * Input is a Julian or Gregorian year.
     * Outputs:
     *  A:      (int) Year number in the Jewish Calendar
     *  mP:     (int) Month number of Pesach.
     *  dP:     (int) Day number of Pesach.
     *  mNY:    (int) Month number of the Jewish new year.
     *  dNY:    (int) Day number of the Jewish new year.
     *  months: (int) Number of months in this year.
     *  days:   (int) Number of days in this year.
     */
    function JewishCalendar(year: number): [number,number,number,number,number,number,number];

    /**
     * MoslemToJD converts a Moslem calendar date to a Julian Day.
     * @param {Number} y - year in moslem calendar
     * @param {Number} m - month
     * @param {Number} d - day
     * @returns {Number} jd - Julian day
     */
    function MoslemToJD(y: number, m: number, d: number): number;

    /**
     * MoslemLeapYear returns true if year y of the Moslem calendar is a leap year.
     * @param {Number} year
     * @returns {Boolean} true if leap year
     */
    function MoslemLeapYear(year: number): boolean;

    /**
     * JulianToMoslem takes a year, month, and day of the Julian calendar and returns the equivalent year, month, and day of the Moslem calendar.
     * @param {Number} y - julian year
     * @param {Number} m - julian month
     * @param {Number} d - julian day
     * @returns {Array} [my, mm, md]
     */
    function JulianToMoslem(y: number, m: number, d: number): [number, number, number];

    /**
     * An MMonth specifies a month of the Islamic Calendar (Muharram = 1, ...).
     * Upgraded to Unicode from the spellings given by Meeus.
     * Source: http://en.wikipedia.org/wiki/Islamic_calendar.
     */
    const mmonths: string[];

    /**
     * String returns the Romanization of the month ("Muḥarram", "Ṣafar", ...).
     */
    function moslemMonth(m:number): string;

}

