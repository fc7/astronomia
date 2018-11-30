/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module apsis
 */
export = apsis;
export as namespace apsis;
declare module apsis {
    
    const EARTH_RADIUS: number;
    const MOON_RADIUS: number;

    /**
     * meanPerigee returns the jde of the mean perigee of the Moon nearest the given date.
     * @param {Number} year - is a decimal year specifying a date.
     * @return {Number} jde - Julian ephemeris day
     */
    function meanPerigee(year: number): number;

    /**
     * perigee returns the jde of perigee of the Moon nearest the given date.
     * @param {Number} year - is a decimal year specifying a date.
     * @return {Number} jde - Julian ephemeris day
     */
    function perigee(year: number): number;

    /**
     * meanApogee returns the jde of the mean apogee of the Moon nearest the given date.
     * @param {Number} year - is a decimal year specifying a date.
     * @return {Number} jde - Julian ephemeris day
     */
    function meanApogee(year: number): number;

    /**
     * apogee returns the jde of apogee of the Moon nearest the given date.
     * @param {Number} year - is a decimal year specifying a date.
     * @return {Number} jde - Julian ephemeris day
     */
    function apogee(year: number): number;

    /**
     * apogeeParallax returns equatorial horizontal parallax of the Moon at the Apogee nearest the given date.
     * @param {Number} year - is a decimal year specifying a date.
     * @return {Number} equatorial horizontal parallax in radians
     */
    function apogeeParallax(year: number): number;

    /**
     * perigeeParallax returns equatorial horizontal parallax of the Moon at the Apogee nearest the given date.
     * @param {Number} year - is a decimal year specifying a date.
     * @return {Number} equatorial horizontal parallax in radians
     */
    function perigeeParallax(year: number): number;

    /**
     * Calculate the distance earth - moon (center to center) using the parallax angle in radians
     * @param {Number} parallax - parallax angle in radians
     * @return {Number} distance in `km`
     */
    function distance(parallax: number): number;

}

