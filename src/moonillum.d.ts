/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module moonillum
 */
export = moonillum;
export as namespace moonillum;
declare module moonillum {
    /**
     * phaseAngleEquatorial computes the phase angle of the Moon given equatorial coordinates.
     * @param {base.Coord} cMoon - geocentric right ascension,  declination and distance to the Moon
     * @param {base.Coord} cSun - coordinates and distance of the Sun
     * @returns {number} phase angle of the Moon in radians
     */
    function phaseAngleEquatorial(cMoon: base.Coord, cSun: base.Coord): number;

    /**
     * phaseAngleEquatorial2 computes the phase angle of the Moon given equatorial coordinates.
     * Less accurate than phaseAngleEquatorial.
     * Arguments α, δ are geocentric right ascension and declination of the Moon;
     * α0, δ0  are coordinates of the Sun.  Angles must be in radians.
     * @param {base.Coord} cMoon - eocentric right ascension and declination of the Moon
     * @param {base.Coord} cSun - coordinates of the Sun
     * @returns {number} phase angle of the Moon in radians
     */
    function phaseAngleEquatorial2(cMoon: base.Coord, cSun: base.Coord): number;

    /**
     * phaseAngleEcliptic computes the phase angle of the Moon given ecliptic coordinates.
     * Distances must be in the same units as each other.
     * @param {base.Coord} cMoon - geocentric longitude, latitude and distance to the Moon
     * @param {base.Coord} cSun -  longitude and distance to the Sun
     * @returns {number} phase angle of the Moon in radians
     */
    function phaseAngleEcliptic(cMoon: base.Coord, cSun: base.Coord): number;

    /**
     * phaseAngleEcliptic2 computes the phase angle of the Moon given ecliptic coordinates.
     * Less accurate than phaseAngleEcliptic.
     * Angles must be in radians.
     * @param {base.Coord} cMoon - geocentric longitude, latitude of the Moon
     * @param {base.Coord} cSun -  longitude of the Sun
     * @returns {number} phase angle of the Moon in radians
     */
    function phaseAngleEcliptic2(cMoon: base.Coord, cSun: base.Coord): number;

    /**
     * phaseAngle3 computes the phase angle of the Moon given a julian day.
     * Less accurate than phaseAngle functions taking coordinates.
     * Result in radians.
     * @param jde
     */
    function phaseAngle3(jde: number): number;

}

