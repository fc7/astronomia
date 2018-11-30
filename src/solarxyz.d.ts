/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module solarxyz
 */
export = solarxyz;
export as namespace solarxyz;
import './planetposition'
declare module solarxyz {
    
    type Point = {x:number, y: number, z:number}

    /**
     * Position returns rectangular coordinates referenced to the mean equinox of date.
     * @param {planetposition.Planet} earth - VSOP87Planet Earth
     * @param {Number} jde - Julian ephemeris day
     * @return {object} rectangular coordinates
     *   {Number} x
     *   {Number} y
     *   {Number} z
     */
    function position(earth: planetposition.Planet, jde: number): Point;

    /**
     * LongitudeJ2000 returns geometric longitude referenced to equinox J2000.
     * @param {planetposition.Planet} earth - VSOP87Planet Earth
     * @param {Number} jde - Julian ephemeris day
     * @return {Number} geometric longitude referenced to equinox J2000.
     */
    function longitudeJ2000(earth: planetposition.Planet, jde: number): number;

    /**
     * PositionJ2000 returns rectangular coordinates referenced to equinox J2000.
     * @param {planetposition.Planet} earth - VSOP87Planet Earth
     * @param {Number} jde - Julian ephemeris day
     * @return {object} rectangular coordinates
     *   {Number} x
     *   {Number} y
     *   {Number} z
     */
    function positionJ2000(earth: planetposition.Planet, jde: number): Point;

    /**
     * PositionB1950 returns rectangular coordinates referenced to B1950.
     * Results are referenced to the mean equator and equinox of the epoch B1950
     * in the FK5 system, not FK4.
     * @param {planetposition.Planet} earth - VSOP87Planet Earth
     * @param {Number} jde - Julian ephemeris day
     * @return {object} rectangular coordinates
     *   {Number} x
     *   {Number} y
     *   {Number} z
     */
    function positionB1950(earth: planetposition.Planet, jde: number): Point;

    /**
     * PositionEquinox returns rectangular coordinates referenced to an arbitrary epoch.
     * Position will be computed for given Julian day "jde" but referenced to mean
     * equinox "epoch" (year).
     * @param {planetposition.Planet} earth - VSOP87Planet Earth
     * @param {Number} jde - Julian ephemeris day
     * @param {Number} epoch
     * @return {object} rectangular coordinates
     *   {Number} x
     *   {Number} y
     *   {Number} z
     */
    function positionEquinox(earth: planetposition.Planet, jde: number, epoch: number): Point;

}

