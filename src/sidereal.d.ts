/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module sidereal
 */
export = sidereal;
export as namespace sidereal;
declare module sidereal {
    /**
     * JDToCFrac returns values for use in computing sidereal time at Greenwich.
     * Cen is centuries from J2000 of the JD at 0h UT of argument jd.  This is
     * the value to use for evaluating the IAU sidereal time polynomial.
     * DayFrac is the fraction of jd after 0h UT.  It is used to compute the
     * final value of sidereal time.
     * @param {number} jd - Julian Days
     * @return {number[]} [century, fraction] century and fraction of jd after 0h UT
     */
    function JDToCFrac(jd: number): [number, number];

    /**
     * iau82 is a polynomial giving mean sidereal time at Greenwich at 0h UT.
     * The polynomial is in centuries from J2000.0, as given by JDToCFrac.
     * Coefficients are those adopted in 1982 by the International Astronomical
     * Union and are given in (12.2) p. 87.
     */
    // const iau82: ;

    /**
     * Mean returns mean sidereal time at Greenwich for a given JD.
     * Computation is by IAU 1982 coefficients.  The result is in seconds of
     * time and is in the range [0,86400).
     * @param {number} jd - Julian Days
     * @return {number}
     */
    function mean(jd: number): number;

    /**
     * Mean0UT returns mean sidereal time at Greenwich at 0h UT on the given JD.
     * The result is in seconds of time and is in the range [0,86400).
     * @param {number} jd - Julian Days
     * @return {number}
     */
    function mean0UT(jd: number): number;

    /**
     * Apparent returns apparent sidereal time at Greenwich for the given JD.
     * Apparent is mean plus the nutation in right ascension.
     * The result is in seconds of time and is in the range [0,86400).
     * @param {number} jd - Julian Days
     * @return {number}
     */
    function apparent(jd: number): number;

    /**
     * Apparent0UT returns apparent sidereal time at Greenwich at 0h UT
     * on the given JD.
     * The result is in seconds of time and is in the range [0,86400).
     * @param {number} jd - Julian Days
     * @return {number}
     */
    function apparent0UT(jd: number): number;

}

