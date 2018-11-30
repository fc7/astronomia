/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module conjunction 
 */
export = conjunction;
export as namespace conjunction;
import * as base from './base'

declare module conjunction {
    /**
     * Planetary computes a conjunction between two moving objects, such as planets.
     * Conjunction is found with interpolation against length 5 ephemerides.
     * t1, t5 are times of first and last rows of ephemerides.  The scale is
     * arbitrary.
     * cs1 is the ephemeris of the first object. The columns may be celestial
     * coordinates in right ascension and declination or ecliptic coordinates in
     * longitude and latitude.
     * cs2 is the ephemeris of the second object, in the same frame as the first.
     * Return value t is time of conjunction in the scale of t1, t5.
     * @param {Number} t1 - julian ephemeris day of first row
     * @param {Number} t5 - julian ephemeris day of fifth row
     * @param {base.Coord[]} cs1 - ephemeris of first moving object
     * @param {base.Coord[]} cs2 - ephemeris of second moving object
     * @return {Array}
     *    {Number} t - time of conjunction in JDE
     *    {Number} Δd - is the amount that object 2 was "above" object 1 at the time of conjunction.
     */
    function planetary(
        t1: number, 
        t5: number, 
        cs1: [base.Coord,base.Coord,base.Coord,base.Coord,base.Coord], 
        cs2: [base.Coord,base.Coord,base.Coord,base.Coord,base.Coord]
        ): [number, number];

    /**
     * Stellar computes a conjunction between a moving and non-moving object.
     * Arguments and return values same as with Planetary, except the non-moving
     * object is c1.  The ephemeris of the moving object is cs2.
     * @param {Number} t1 - julian ephemeris day of first row
     * @param {Number} t5 - julian ephemeris day of fifth row
     * @param {base.Coord} c1 - ephemeris of non-moving object
     * @param {base.Coord[]} cs2 - ephemeris of moving object
     * @return {Array}
     *    {Number} t - time of conjunction in JDE
     *    {Number} Δd - is the amount that object 2 was "above" object 1 at the time of conjunction.
     */
    function stellar(
        t1: number, 
        t5: number, 
        c1: base.Coord, 
        cs2: [base.Coord,base.Coord,base.Coord,base.Coord,base.Coord]
        ): [number, number];

}

