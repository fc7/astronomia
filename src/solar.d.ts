/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module solar
 */
export = solar;
export as namespace solar;
import * as planetposition from './planetposition'
declare module solar {

    type LongAnom = {lon: number, ano: number}
    /**
     * True returns true geometric longitude and anomaly of the sun referenced to the mean equinox of date.
     * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
     * @returns {Object}
     *   {Number} lon = true geometric longitude, ☉, in radians
     *   {Number} ano = true anomaly in radians
     */
    function trueLongitude(T: number): LongAnom;

    /**
     * meanAnomaly returns the mean anomaly of Earth at the given T.
     * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
     * @returns {Number} Result is in radians and is not normalized to the range 0..2π.
     */
    function meanAnomaly(T: number): number;

    /**
     * eccentricity returns eccentricity of the Earth's orbit around the sun.
     * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
     * @returns {Number} eccentricity of the Earth's orbit around the sun.
     */
    function eccentricity(T: number): number;

    /**
     * Radius returns the Sun-Earth distance in AU.
     * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
     * @returns {Number} Sun-Earth distance in AU
     */
    function radius(T: number): number;

    /**
     * ApparentLongitude returns apparent longitude of the Sun referenced to the true equinox of date.
     * Result includes correction for nutation and aberration.  Unit is radians.
     * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
     * @returns {Number} apparent longitude of the Sun referenced to the true equinox of date.
     */
    function apparentLongitude(T: number): number;

    /**
     * true2000 returns true geometric longitude and anomaly of the sun referenced to equinox J2000.
     * Results are accurate to .01 degree for years 1900 to 2100.
     * @param {Number} T - number of Julian centuries since J2000. See base.J2000Century.
     * @returns {Object}
     *   {Number} lon - true geometric longitude, ☉, in radians
     *   {Number} ano - true anomaly in radians
     */
    function true2000(T: number): LongAnom;

    /**
     * trueEquatorial returns the true geometric position of the Sun as equatorial coordinates.
     * @param {Number} jde - Julian ephemeris day
     * @returns {base.Coord}
     *   {Number} ra - right ascension in radians
     *   {Number} dec - declination in radians
     */
    function trueEquatorial(jde: number): base.Coord;

    /**
     * apparentEquatorial returns the apparent position of the Sun as equatorial coordinates.
     * @param {Number} jde - Julian ephemeris day
     * @returns {base.Coord}
     *   {Number} ra - right ascension in radians
     *   {Number} dec - declination in radians
     */
    function apparentEquatorial(jde: number): base.Coord;

    type TruePosition = {lon: number, lat: number, range: number}

    /**
     * trueVSOP87 returns the true geometric position of the sun as ecliptic coordinates.
     * Result computed by full VSOP87 theory.  Result is at equator and equinox
     * of date in the FK5 frame.  It does not include nutation or aberration.
     * @param {planetposition.Planet} planet
     * @param {Number} jde - Julian ephemeris day
     * @returns {Object}
     *   {Number} lon - ecliptic longitude in radians
     *   {Number} lat - ecliptic latitude in radians
     *   {Number} range - range in AU
     */
    function trueVSOP87(planet: planetposition.Planet, jde: number): TruePosition;

    /**
     * apparentVSOP87 returns the apparent position of the sun as ecliptic coordinates.
     * Result computed by VSOP87, at equator and equinox of date in the FK5 frame,
     * and includes effects of nutation and aberration.
     * @param {planetposition.Planet} planet
     * @param {Number} jde - Julian ephemeris day
     * @returns {base.Coord}
     *   {Number} lon - ecliptic longitude in radians
     *   {Number} lat - ecliptic latitude in radians
     *   {Number} range - range in AU
     */
    function apparentVSOP87(planet: planetposition.Planet, jde: number): TruePosition;

    /**
     * apparentEquatorialVSOP87 returns the apparent position of the sun as equatorial coordinates.
     * Result computed by VSOP87, at equator and equinox of date in the FK5 frame,
     * and includes effects of nutation and aberration.
     * @param {planetposition.Planet} planet
     * @param {Number} jde - Julian ephemeris day
     * @returns
     *   {Number} ra - right ascension in radians
     *   {Number} dec - declination in radians
     *   {Number} range - range in AU
     */
    function apparentEquatorialVSOP87(planet: planetposition.Planet, jde: number): TruePosition;

    /**
     * Low precision formula.  The high precision formula is not implemented
     * because the low precision formula already gives position results to the
     * accuracy given on p. 165.  The high precision formula represents lots
     * of typing with associated chance of typos, and no way to test the result.
     * @param {Number} range
     * @returns {Number} aberation
     */
    function aberration(range: number): number;

}

