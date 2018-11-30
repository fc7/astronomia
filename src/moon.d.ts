/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module moon
 */
export = moon;
export as namespace moon;
import * as base from './base'
import * as planetposition from './planetposition'
 
declare module moon {
    /**
     * Physical returns quantities useful for physical observation of the Moon.
     * Returned l, b are librations in selenographic longitude and latitude.
     * They represent combined optical and physical librations.  Topocentric
     * librations are not considered.
     * Returned P is the the position angle of the Moon's axis of rotation.
     * Returned l0, b0 are the selenographic coordinates of the Sun.
     * Returned values all in radians.
     * @param {number} jde - Julian ephemeris day
     * @param {planetposition.Planet} earth - VSOP87 Planet Earth
     * @return {Array}
     *    {base.Coord} cMoon - selenographic longitude, latitude of the Moon
     *    {number} P - position angle of the Moon's axis of rotation
     *    {base.Coord} cSun - selenographic longitude, latitude of the Sun.
     */
    function physical(jde: number, earth: planetposition.Planet): any[];

    /**
     * Quantities computed for a jde and used in computing return values of
     * physical().  Computations are broken into several methods to organize
     * the code.
     */
    class Moon {
        constructor(jde: number);

        /**
         * lib() curiously serves for computing both librations and solar coordinates,
         * depending on the coordinates λ, β passed in.  Quantity A not described in
         * the book, but clearly depends on the λ, β of the current context and so
         * does not belong in the moon struct.  Instead just return it from optical
         * and pass it along to physical.
         * @param λ longitude
         * @param β latitude
         */
        lib(λ:number, β:number): [number, number];

    }

    /**
     * SunAltitude returns altitude of the Sun above the lunar horizon.
     * @param {base.Coord} cOnMoon - selenographic longitude and latitude of a site on the Moon
     * @param {base.Coord} cSun - selenographic coordinates of the Sun (as returned by physical(), for example.)
     * @return altitude in radians.
     */
    function sunAltitude(cOnMoon: base.Coord, cSun: base.Coord): number;

    /**
     * Sunrise returns time of sunrise for a point on the Moon near the given date.
     * @param {base.Coord} cOnMoon - selenographic longitude and latitude of a site on the Moon
     * @param {Number} jde - Julian ephemeris day
     * @param {planetposition.Planet} earth - VSOP87 Planet Earth
     * @return time of sunrise as a jde nearest the given jde.
     */
    function sunrise(cOnMoon: base.Coord, jde: number, earth: planetposition.Planet): number;

    /**
     * Sunset returns time of sunset for a point on the Moon near the given date.
     * @param {base.Coords} cOnMoon - selenographic longitude and latitude of a site on the Moon
     * @param {Number} jde - Julian ephemeris day
     * @param {planetposition.Planet} earth - VSOP87 Planet Earth
     * @return time of sunset as a jde nearest the given jde.
     */
    function sunset(cOnMoon: base.Coord, jde: number, earth: planetposition.Planet): number;

    /**
     * selenographic coordinates of some lunar features
     * Table 53.A
     */
    const selenographic: Map<string, base.Coord>;

}

