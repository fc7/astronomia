/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module moonphase
 */
export = moonphase;
export as namespace moonphase;
declare module moonphase { 
    /**
     * mean synodial lunar month
     */
    const meanLunarMonth: number;

    /**
     * MeanNew returns the jde of the mean New Moon nearest the given date.
     * The mean date is within 0.5 day of the true date of New Moon.
     * @param {Number} year - decimal year
     * @returns {Number} jde
     */
    function meanNew(year: number): number;

    /**
     * MeanFirst returns the jde of the mean First Quarter Moon nearest the given date.
     * The mean date is within 0.5 day of the true date of First Quarter Moon.
     * @param {Number} year - decimal year
     * @returns {Number} jde
     */
    function meanFirst(year: number): number;

    /**
     * MeanFull returns the jde of the mean Full Moon nearest the given date.
     * The mean date is within 0.5 day of the true date of Full Moon.
     * @param {Number} year - decimal year
     * @returns {Number} jde
     */
    function meanFull(year: number): number;

    /**
     * MeanLast returns the jde of the mean Last Quarter Moon nearest the given date.
     * The mean date is within 0.5 day of the true date of Last Quarter Moon.
     * @param {Number} year - decimal year
     * @returns {Number} jde
     */
    function meanLast(year: number): number;

    /**
     * New returns the jde of New Moon nearest the given date.
     * @param {Number} year - decimal year
     * @returns {Number} jde
     */
    function newMoon(year: number): number;

    /**
     * First returns the jde of First Quarter Moon nearest the given date.
     * @param {Number} year - decimal year
     * @returns {Number} jde
     */
    function first(year: number): number;

    /**
     * Full returns the jde of Full Moon nearest the given date.
     * @param {Number} year - decimal year
     * @returns {Number} jde
     */
    function full(year: number): number;

    /**
     * Last returns the jde of Last Quarter Moon nearest the given date.
     * @param {Number} year - decimal year
     * @returns {Number} jde
     */
    function last(year: number): number;

}

