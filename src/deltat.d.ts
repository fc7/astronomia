/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module deltat
 */
export = deltat;
export as namespace deltat;
declare module deltat {
    /**
     * deltaT returns the difference ΔT = TD - UT between Dynamical Time TD and
     * Universal Time (GMT+12) in seconds
     * Polynoms are from <http://eclipse.gsfc.nasa.gov/SEcat5/deltatpoly.html>
     * and <http://www.staff.science.uu.nl/~gent0113/deltat/deltat_old.htm>
     * @param {Number} dyear - decimal year
     * @returns {Number} ΔT in seconds.
     */
    function deltaT(dyear: number): number;

}

