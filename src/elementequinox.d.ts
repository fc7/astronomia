/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module elementequinox
 */
export = elementequinox;
export as namespace elementequinox;
declare module elementequinox { 
    /**
     * Elements are the orbital elements of a solar system object which change
     * from one equinox to another.
     * @param {Number} inc  - inclination
     * @param {Number} node - longitude of ascending node (Ω)
     * @param {Number} peri - argument of perihelion (ω)
     */
    class Elements {
        constructor(inc: number, node: number, peri: number);
        inc: number;
        node: number;
        peri: number;
    }

    /**
     * ReduceB1950ToJ2000 reduces orbital elements of a solar system body from
     * equinox B1950 to J2000.
     * @param {Elements} eFrom
     * @returns {Elements} eTo
     */
    function reduceB1950ToJ2000(eFrom: Elements): Elements;

    /**
     * ReduceB1950ToJ2000 reduces orbital elements of a solar system body from
     * equinox B1950 in the FK4 system to equinox J2000 in the FK5 system.
     * @param {Elements} eFrom
     * @returns {Elements} eTo
     */
    function reduceB1950FK4ToJ2000FK5(eFrom: Elements): Elements;

}

