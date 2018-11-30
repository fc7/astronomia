/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module solstice
 */
export = solstice;
export as namespace solstice;
import * as planetposition from './planetposition'
declare module solstice {
    /**
     * March returns the JDE of the March equinox for the given year.
     * Results are valid for the years -1000 to +3000.
     * Accuracy is within one minute of time for the years 1951-2050.
     * @param {Number} y - (int) year
     * @returns {Number} JDE
     */
    function march(y: number): number;

    /**
     * June returns the JDE of the June solstice for the given year.
     * Results are valid for the years -1000 to +3000.
     * Accuracy is within one minute of time for the years 1951-2050.
     * @param {Number} y - (int) year
     * @returns {Number} JDE
     */
    function june(y: number): number;

    /**
     * September returns the JDE of the September equinox for the given year.
     * Results are valid for the years -1000 to +3000.
     * Accuracy is within one minute of time for the years 1951-2050.
     * @param {Number} y - (int) year
     * @returns {Number} JDE
     */
    function september(y: number): number;

    /**
     * December returns the JDE of the December solstice for a given year.
     * Results are valid for the years -1000 to +3000.
     * Accuracy is within one minute of time for the years 1951-2050.
     * @param {Number} y - (int) year
     * @returns {Number} JDE
     */
    function december(y: number): number;

    /**
     * Fast calculation of solstices/ equinoxes
     * Accuracy is within one minute of time for the years 1951-2050.
     * @param {Number} y - (int) year
     * @param {Array} c - term from table 27.a / 27.b
     * @returns {Number} JDE
     */
    function eq(y: number, c: number[]): number;

    /**
     * March2 returns a more accurate JDE of the March equinox.
     * Result is accurate to one second of time.
     * @param {Number} year - (int) year
     * @param {planetposition.Planet} planet - must be a V87Planet object representing Earth, obtained with
     * the package planetposition
     * @returns {Number} JDE
     */
    function march2(year: number, planet: planetposition.Planet): number;

    /**
     * June2 returns a more accurate JDE of the June solstice.
     * Result is accurate to one second of time.
     * @param {Number} year - (int) year
     * @param {planetposition.Planet} planet - must be a V87Planet object representing Earth, obtained with
     * the package planetposition
     * @returns {Number} JDE
     */
    function june2(year: number, planet: planetposition.Planet): number;

    /**
     * September2 returns a more accurate JDE of the September equinox.
     * Result is accurate to one second of time.
     * @param {Number} year - (int) year
     * @param {planetposition.Planet} planet - must be a V87Planet object representing Earth, obtained with
     * the package planetposition
     * @returns {Number} JDE
     */
    function september2(year: number, planet: planetposition.Planet): number;

    /**
     * December2 returns a more accurate JDE of the December solstice.
     * Result is accurate to one second of time.
     * @param {Number} year - (int) year
     * @param {planetposition.Planet} planet - must be a V87Planet object representing Earth, obtained with
     * the package planetposition
     * @returns {Number} JDE
     */
    function december2(year: number, planet: planetposition.Planet): number;

    /**
     * Longitude returns the JDE for a given `year`, VSOP87 Planet `planet` at a
     * given geocentric solar longitude `lon`
     * @param {Number} year - (int)
     * @param {planetposition.Planet} planet
     * @param {Number} lon - geocentric solar longitude in radians
     * @returns {Number} JDE
     */
    function longitude(year: number, planet: planetposition.Planet, lon: number): number;

    /**
     * Accurate calculation of solstices/ equinoxes
     * Result is accurate to one second of time.
     * @param {Number} year - (int) year
     * @param {planetposition.Planet} planet - vsop87 planet
     * @param {Number} lon - longitude in radians
     * @param {Array} c - term from table 27.a / 27.b
     * @returns {Number} JDE
     */
    function eq2(year: number, planet: any, lon: number, c: number[]): number;

}

