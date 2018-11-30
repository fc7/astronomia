/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module base
 */
export = base;
export as namespace base;

declare module base {
    /**
     * K is the Gaussian gravitational constant.
     */
    const K: number; 

    /**
     * AU is one astronomical unit in km.
     */
    const AU: number;

    /**
     * SOblJ2000 sine obliquity at J2000.
     */
    const SOblJ2000: number;

    /**
     * COblJ2000 cosine obliquity at J2000.
     */
    const COblJ2000: number;

    /**
     * lightTime returns time for light to travel a given distance.
     * `dist` is distance in to earth in AU. √(x² + y² + z²)
     * Result in seconds of time.
     * @param {Number} dist - distance in to earth in AU
     * @returns {Number} time for light to travel a given distance in seconds
     */
    function lightTime(dist: number): number;

    /**
     * JMod is the Julian date of the modified Julian date epoch.
     */
    const JMod: number;

    /**
     * J2000 is the Julian date corresponding to January 1.5, year 2000.
     */
    const J2000: number;

    /**
     * Julian days of Julian epoch 1900
     */
    const J1900: number;

    /**
     * Julian days of Besselian epoch 1900
     */
    const B1900: number;

    /**
     * Julian days of Besselian epoch 1950
     */
    const B1950: number;

    /**
     * JulianYear in days
     */
    const JulianYear: number;

    /**
     * JulianCentury in days
     */
    const JulianCentury: number;

    /**
     * BesselianYear in days; equals mean tropical year
     */
    const BesselianYear: number;

    /**
     * Mean sidereal year
     */
    const meanSiderealYear: number;

    /**
     * JulianYearToJDE returns the Julian ephemeris day for a Julian year.
     * @param {Number} jy - Julian year
     * @returns {Number} jde - Julian ephemeris day
     */
    function JulianYearToJDE(jy: number): number;

    /**
     * JDEToJulianYear returns a Julian year for a Julian ephemeris day.
     * @param {Number} jde - Julian ephemeris day
     * @returns {Number} jy - Julian year
     */
    function JDEToJulianYear(jde: number): number;

    /**
     * BesselianYearToJDE returns the Julian ephemeris day for a Besselian year.
     * @param {Number} by - Besselian year
     * @returns {Number} jde - Julian ephemeris day
     */
    function BesselianYearToJDE(by: number): number;

    /**
     * JDEToBesselianYear returns the Besselian year for a Julian ephemeris day.
     * @param {Number} jde - Julian ephemeris day
     * @returns {Number} by - Besselian year
     */
    function JDEToBesselianYear(jde: number): number;

    /**
     * J2000Century returns the number of Julian centuries since J2000.
     * The quantity appears as T in a number of time series.
     * @param {Number} jde - Julian ephemeris day
     * @returns {Number} number of Julian centuries since J2000
     */
    function J2000Century(jde: number): number;

    /**
     * illuminated returns the illuminated fraction of a body's disk.
     * The illuminated body can be the Moon or a planet.
     * @param {Number} i - phase angle in radians.
     * @returns {Number} illuminated fraction of a body's disk.
     */
    function illuminated(i: number): number;

    /**
     * celestial coordinates in right ascension and declination
     * or ecliptic coordinates in longitude and latitude
     * @param {number} ra - right ascension (or longitude)
     * @param {number} dec - declination (or latitude)
     * @param {number} [range] - distance
     * @param {number} [elongation] - elongation
     */
    class Coord {
        constructor(ra: number, dec: number, range?: number, elongation?: number)
        ra: number
        dec: number
        range: number
        elongation: number
        lon: number
        lat: number
    }

    /**
     * Limb returns the position angle of the midpoint of an illuminated limb.
     * The illuminated body can be the Moon or a planet.
     * @param {base.Coord} equ - equatorial coordinates of the body `{ra, dec}` (in radians)
     * @param {base.Coord} appSun - apparent coordinates of the Sun `{ra, dec}` (In radians).
     * @returns {Number} position angle of the midpoint (in radians).
     */
    function limb(equ: any, appSun: any): number;

    /**
     * SmallAngle is threshold used by various routines for switching between
     * trigonometric functions and Pythagorean approximations.
     */
    const SmallAngle: number;

    /**
     * cosine of SmallAngle
     */
    const CosSmallAngle: number;

    /**
     * pmod returns a positive floating-point x mod y.
     * For a positive argument y, it returns a value in the range [0,y).
     * @param {Number} x
     * @param {Number} y
     * @returns {Number} x % y - The result may not be useful if y is negative.
     */
    function pmod(x: number, y: number): number;

    /**
     * horner evaluates a polynomal with coefficients c at x.  The constant
     * term is c[0].
     * @param {Number} x
     * @param {Number|Number[]} c - coefficients
     * @returns {Number}
     */
    function horner(x: number, ...c: number[]): number;

    /**
     * FloorDiv returns the integer floor of the fractional value (x / y).
     * @param {Number} x
     * @param {Number} y
     * @returns {Number} (int)
     */
    function floorDiv(x: number, y: number): number;

    /**
     * Cmp compares two float64s and returns -1, 0, or 1 if a is <, ==, or > b,
     * respectively.
     * .
     * @param {Number} a
     * @param {Number} b
     * @returns {Number} comparison result
     */
    function cmp(a: number, b: number): number;

    /**
     * shorthand function for Math.sin, Math.cos
     * @param {Number} ε
     * @returns {Number[]} [sin(ε), cos(ε)]
     */
    function sincos(ε: number): [number, number];

    /**
     * Convert degrees to radians
     * @param  {Number} deg - Angle in degrees
     * @return {Number} Angle in radians
     */
    function toRad(deg: number): number;

    /**
     * Convert radians to degrees
     * @param  {Number} rad - Angle in radians
     * @return {Number} Angle in degrees
     */
    function toDeg(rad: number): number;

    /**
     * separate fix `i` from fraction `f`
     * @param {Number} float
     * @returns {Array} [i, f]
     *  {Number} i - (int) fix value
     *  {Number} f - (float) fractional portion; always > 1
     */
    function modf(float: number): [number, number];

    /**
     * Rounds `float` value by precision
     * @param {Number} float - value to round
     * @param {Number} precision - (int) number of post decimal positions
     * @return {Number} rounded `float`
     */
    function round(float: number, precision: number): number;

    /**
     * Util function for returning an `Error` with message and code
     * @param {string} msg - `Error` message
     * @param {number} code - `Error` code
     * @return {Error}
     */
    function errorCode(msg: string, code: number): Error;

}

