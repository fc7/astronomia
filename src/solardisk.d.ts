/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module solardisk
 */
export = solardisk;
export as namespace solardisk;
declare module solardisk {
    type Ephemeris = {P: number, B0: number, L0: number}
    /**
     * Ephemeris returns the apparent orientation of the sun at the given jd.
     * Results:
     *  P:  Position angle of the solar north pole.
     *  B0: Heliographic latitude of the center of the solar disk.
     *  L0: Heliographic longitude of the center of the solar disk.
     * All results in radians.
     */
    function ephemeris(): Ephemeris;

    /**
     * Cycle returns the jd of the start of the given synodic rotation.
     * Argument c is the "Carrington" cycle number.
     * Result is a dynamical time (not UT).
     */
    function cycle(c:number): number;

}

