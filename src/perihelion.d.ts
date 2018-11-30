/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module perihelion
 */
export = perihelion;
export as namespace perihelion;
import * as planetposition from './planetposition'

declare module perihelion {
    /**
     * Planet constants for first argument of Perihelion and Aphelion functions.
     */
    enum PLANET {
        mercury,
        venus,
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
        embary,
    }

    /**
     * Perihelion returns an approximate jde of the perihelion event nearest the given time.
     * @param {perihelion.NAME} p - planet constant from above
     * @param {Number} y - year number indicating a time near the perihelion event.
     * @returns {Number} jde - time of the event
     */
    function perihelion(p: PLANET, y: number): number;

    /**
     * Aphelion returns an approximate jde of the aphelion event nearest the given time.
     * @param {perihelion.NAME} p - planet constant from above
     * @param {Number} y - year number indicating a time near the aphelion event.
     * @returns {Number} jde - time of the event
     */
    function aphelion(p: PLANET, y: number): number;

    /**
     * Perihelion2 returns the perihelion event nearest the given time.
     * @param {planetposition.Planet} planet - VSOP87 planet (EMBary is not allowed)
     * @param {Number} year - (float) decimal year number near the perihelion event
     * @param {Number} precision - desired precision of the time result, in days
     * @param {Function} [cb] - callback function for asynchronous processing `cb([jde, r])`
     * @returns {Array} [jde, r]
     *   {Number} jde - time of the event
     *   {Number} r - the distance of the planet from the Sun in AU.
     */
    function perihelion2(planet: planetposition.Planet, year: number, precision: number, cb?: (jde:number, r:number)=>void): [number, number];

    /**
     * Aphelion2 returns the aphelion event nearest the given time.
     * @param {planetposition.Planet} planet - VSOP87 planet (EMBary is not allowed)
     * @param {Number} year - (float) decimal year number near the perihelion event
     * @param {Number} precision - desired precision of the time result, in days
     * @param {Function} [cb] - callback function for asynchronous processing `cb([jde, r])`
     * @returns {Array} [jde, r]
     *   {Number} jde - time of the event
     *   {Number} r - the distance of the planet from the Sun in AU.
     */
    function aphelion2(planet: any, year: number, precision: number, cb?: (jde:number, r:number)=>void): [number, number];

}

