/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module rise
 */
export = rise;
export as namespace rise;
declare module rise {
    /**
     * mean refraction of the atmosphere
     */
    const meanRefraction: number;

    /**
     * "Standard altitudes" for various bodies already including `meanRefraction` of 0°34'
     * The standard altitude is the geometric altitude of the center of body
     * at the time of apparent rising or seting.
     */
    // const stdh0: ;

    /**
     * Helper function to obtain corrected refraction
     * @param {number} h0 - altitude of the body in radians containing `meanRefraction` of 0°34'
     * @param {number} corr - the calcluated refraction e.g. from package `refraction` in radians
     * @return {number} refraction value in radians
     */
    function refraction(h0: number, corr: number): number;

    /**
     * standard altitude for stars, planets at apparent rising, seting
     */
    // const stdh0Stellar: ;

    /**
     * standard altitude for sun for upper limb of the disk
     */
    // const stdh0Solar: ;

    /**
     * standard altitude for moon (low accuracy)
     */
    // const stdh0LunarMean: ;

    /**
     * Stdh0Lunar is the standard altitude of the Moon considering π, the
     * Moon's horizontal parallax.
     * @param {number} π - the Moon's horizontal parallax
     * @param {number} [refraction] - optional value for refraction in radians if
     *        omitted than meanRefraction is used
     * @return {number} altitude of Moon in radians
     */
    // const stdh0Lunar: ;

    /**
     * @return {number} local angle in radians
     */
    function hourAngle(): number;

    /**
     * @param {number} lon - longitude in radians
     * @param {number} α - right ascension in radians
     * @param {number} th0 - sidereal.apparent0UT in seconds of day `[0...86400[`
     * @return {number} time of transit in seconds of day `[0, 86400[`
     */
    // function _mt(lon: number, α: number, th0: number): number;

    /**
     * @param {number} Th0 - sidereal.apparent0UT in seconds of day `[0...86400[`
     * @param {number} m - motion in seconds of day `[0...86400[`
     * @return {number} new siderial time seconds of day `[0...86400[`
     */
    // function _th0(Th0: number, m: number): number;

    /**
     * ApproxTimes computes approximate UT rise, transit and set times for
     * a celestial object on a day of interest.
     * The function argurments do not actually include the day, but do include
     * values computed from the day.
     * @param {coord.Globe} p - is geographic coordinates of observer.
     * @param {number} h0 - is "standard altitude" of the body in radians
     * @param {number} Th0 - is apparent sidereal time at 0h UT at Greenwich in seconds
     *        (range 0...86400) must be the time on the day of interest, in seconds.
     *        See sidereal.apparent0UT
     * @param {Array<number>} α3 - slices of three right ascensions
     * @param {Array<number>} δ3 - slices of three declinations.
     *        α3, δ3 must be values at 0h dynamical time for the day before, the day of,
     *        and the day after the day of interest.  Units are radians.
     * @return Result units are seconds and are in the range [0,86400)
     * @throws Error
     */
    function approxTimes(p: any, h0: number, Th0: number, α3: [number,number,number], δ3: [number,number,number]): number;

    /**
     * Times computes UT rise, transit and set times for a celestial object on
     * a day of interest.
     * The function argurments do not actually include the day, but do include
     * a number of values computed from the day.
     * @param {coord.Globe} p - is geographic coordinates of observer.
     * @param {number} ΔT - is delta T in seconds
     * @param {number} h0 - is "standard altitude" of the body in radians
     * @param {number} Th0 - is apparent sidereal time at 0h UT at Greenwich in seconds
     *        (range 0...86400) must be the time on the day of interest, in seconds.
     *        See sidereal.apparent0UT
     * @param {Array<number>} α3 - slices of three right ascensions
     * @param {Array<number>} δ3 - slices of three declinations.
     *        α3, δ3 must be values at 0h dynamical time for the day before, the day of,
     *        and the day after the day of interest.  Units are radians.
     * @return Result units are seconds and are in the range [0,86400)
     * @throws Error
     */
    function times(p: any, ΔT: number, h0: number, Th0: number, α3: [number,number,number], δ3: [number,number,number]): any;

    /**
     * RisePlanet computes rise, transit and set times for a planet on a day of interest.
     */
    class PlanetRise {
        constructor(jd: number | Date, lat: number, lon: number, earth: any, planet: any, opts: {
            date: boolean;
            refraction: number;
        });

    }

}

