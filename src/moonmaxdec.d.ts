/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module moonmaxdec
 */
export = moonmaxdec;
export as namespace moonmaxdec;
declare module moonmaxdec {
    /**
     * North computes the maximum northern declination of the Moon near a given date.
     * Argument year is a decimal year specifying a date near the event.
     * Returned is the jde of the event nearest the given date and the declination
     * of the Moon at that time.
     */
    function north(y: number): number;

    /**
     * South computes the maximum southern declination of the Moon near a given date.
     * Argument year is a decimal year specifying a date near the event.
     * Returned is the jde of the event nearest the given date and the declination
     * of the Moon at that time.
     */
    function south(y: number): number;

}

