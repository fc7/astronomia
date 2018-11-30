/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module node
 */
export = node;
export as namespace node;
declare module node {
    /**
     * EllipticAscending computes time and distance of passage through the ascending node of a body in an elliptical orbit.
     * Argument axis is semimajor axis in AU, ecc is eccentricity, argP is argument
     * of perihelion in radians, timeP is time of perihelion as a jd.
     * Result is jde of the event and distance from the sun in AU.
     */
    function ellipticAscending(axis: number, ecc: number, argP: number, timeP: number): [number, number];

    /**
     * EllipticAscending computes time and distance of passage through the descending node of a body in an elliptical orbit.
     * Argument axis is semimajor axis in AU, ecc is eccentricity, argP is argument
     * of perihelion in radians, timeP is time of perihelion as a jd.
     * Result is jde of the event and distance from the sun in AU.
     */
    function ellipticDescending(axis: number, ecc: number, argP: number, timeP: number): [number, number];

    /**
     * ParabolicAscending computes time and distance of passage through the ascending node of a body in a parabolic orbit.
     * Argument q is perihelion distance in AU, argP is argument of perihelion
     * in radians, timeP is time of perihelion as a jd.
     * Result is jde of the event and distance from the sun in AU.
     */
    function parabolicAscending(q: number, argP: number, timeP: number): [number, number];

    /**
     * ParabolicDescending computes time and distance of passage through the descending node of a body in a parabolic orbit.
     * Argument q is perihelion distance in AU, argP is argument of perihelion
     * in radians, timeP is time of perihelion as a jd.
     * Result is jde of the event and distance from the sun in AU.
     */
    function parabolicDescending(q: number, argP: number, timeP: number): [number, number];

}

