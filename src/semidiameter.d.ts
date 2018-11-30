/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module semidiameter
 */
export = semidiameter;
export as namespace semidiameter;
declare module semidiameter {
    /**
     * Standard semidiameters at unit distance of 1 AU.
     * Values are scaled here to radians.
     */
    // const Sun: number;

    /**
     * Semidiameter returns semidiameter at specified distance.
     * When used with S0 values provided, Δ must be observer-body distance in AU.
     * Result will then be in radians.
     */
    function semidiameter(s0, Δ): number;

    /**
     * SaturnApparentPolar returns apparent polar semidiameter of Saturn
     * at specified distance.
     * Argument Δ must be observer-Saturn distance in AU.  Argument B is
     * Saturnicentric latitude of the observer as given by function saturnring.UB()
     * for example.
     * Result is semidiameter in units of package variables SaturnPolar and
     * SaturnEquatorial, nominally radians.
     */
    function aaturnApparentPolar(Δ, B): number;

    /**
     * MoonTopocentric returns observed topocentric semidiameter of the Moon.
     *  Δ is distance to Moon in AU.
     *  δ is declination of Moon in radians.
     *  H is hour angle of Moon in radians.
     *  ρsφʹ, ρcφʹ are parallax constants as returned by
     *      globe.Ellipsoid.ParallaxConstants, for example.
     * Result is semidiameter in radians.
     */
    function moonTopocentric(Δ, δ, h, ρsφʹ, ρcφʹ): number;

    /**
     * MoonTopocentric2 returns observed topocentric semidiameter of the Moon
     * by a less rigorous method.
     * Δ is distance to Moon in AU, h is altitude of the Moon above the observer's
     * horizon in radians.
     * Result is semidiameter in radians.
     */
    function moonTopocentric2(Δ, h): number;

    /**
     * AsteroidDiameter returns approximate diameter given absolute magnitude H
     * and albedo A.
     * Result is in km.
     */
    function asteroidDiameter(H, A): number;

    /**
     * Asteroid returns semidiameter of an asteroid with a given diameter
     * at given distance.
     * Argument d is diameter in km, Δ is distance in AU.
     * Result is semidiameter in radians.
     */
    function asteroid(d, Δ): number;

}

