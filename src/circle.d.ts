/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module circle
 */
export = circle;
export as namespace circle;
import * as base from './base' 

declare module circle {
    /**
     * Smallest finds the smallest circle containing three points.
     * Arguments should represent coordinates in right ascension and declination
     * or longitude and latitude.  Result Δ is the diameter of the circle, typeI
     * is true if solution is of type I.
     * @param {base.Coords} c1 - ra, dec point 1
     * @param {base.Coords} c2 - ra, dec point 2
     * @param {base.Coords} c3 - ra, dec point 3
     * @returns {Array} [Δ, typeI]
     *  {Number} Δ - diameter of the circle
     *  {Boolean} typeI - true - Two points on circle, one interior.
     *                   false - All three points on circle.
     */
    function smallest(c1: base.Coord, c2: base.Coord, c3: base.Coord): [number, boolean];

}

