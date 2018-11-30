/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module planetelements
 */
export = planetelements;
export as namespace planetelements;
declare module planetelements {
    /**
     * Elements contains orbital elements as returned by functions in this package.
     * Some other elements easily derived from these are
     *  Mean Anomolay, M = Lon - Peri
     *  Argument of Perihelion, ω = Peri - Node
     * @param {Number} lon  - mean longitude, L
     * @param {Number} axis - semimajor axis, a
     * @param {Number} ecc  - eccentricity, e
     * @param {Number} inc  - inclination, i
     * @param {Number} node - longitude of ascending node, Ω
     * @param {Number} peri - longitude of perihelion, ϖ (Meeus likes π better)
     */
    function Elements(lon: number, axis: number, ecc: number, inc: number, node: number, peri: number): void;

    /**
     * Table 31.A, p. 212
     */
    // const cMean: ;

    /**
     * Mean returns mean orbital elements for a planet
     * Argument p must be a planet const as defined above, argument e is
     * a result parameter.  A valid non-undefined pointer to an Elements struct
     * must be passed in.
     * Results are referenced to mean dynamical ecliptic and equinox of date.
     * Semimajor axis is in AU, angular elements are in radians.
     */
    function mean(): void;

    /**
     * Inc returns mean inclination for a planet at a date.
     * Result is the same as the Inc field returned by function Mean.  That is,
     * radians, referenced to mean dynamical ecliptic and equinox of date.
     */
    function inc(): void;

    /**
     * Node returns mean longitude of ascending node for a planet at a date.
     * Result is the same as the Node field returned by function Mean.  That is,
     * radians, referenced to mean dynamical ecliptic and equinox of date.
     */
    function node(): void;

}

