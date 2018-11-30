/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module jupiter
 */ 
export = jupiter;
export as namespace jupiter;
import * as planetposition from './planetposition'

declare module jupiter {
    /**
     * Physical computes quantities for physical observations of Jupiter.
     * All angular results in radians.
     * @param {number} jde - Julian ephemeris day
     * @param {planetposition.Planet} earth
     * @param {planetposition.Planet} jupiter
     * @return {Array}
     *    {number} DS - Planetocentric declination of the Sun.
     *    {number} DE - Planetocentric declination of the Earth.
     *    {number} ω1 - Longitude of the System I central meridian of the illuminated disk,
     *                  as seen from Earth.
     *    {number} ω2 - Longitude of the System II central meridian of the illuminated disk,
     *                  as seen from Earth.
     *    {number} P -  Geocentric position angle of Jupiter's northern rotation pole.
     */
    function physical(jde: number, earth: planetposition.Planet, jupiter: planetposition.Planet): [number,number,number,number,number];

    /**
     * Physical2 computes quantities for physical observations of Jupiter.
     * Results are less accurate than with Physical().
     * All angular results in radians.
     * @param {number} jde - Julian ephemeris day
     * @return {Array}
     *    {number} DS - Planetocentric declination of the Sun.
     *    {number} DE - Planetocentric declination of the Earth.
     *    {number} ω1 - Longitude of the System I central meridian of the illuminated disk,
     *                  as seen from Earth.
     *    {number} ω2 - Longitude of the System II central meridian of the illuminated disk,
     *                  as seen from Earth.
     */
    function physical2(jde: number): [number,number,number,number];

}

