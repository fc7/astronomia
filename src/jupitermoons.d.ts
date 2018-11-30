/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module jupitermoons
 */
export = jupitermoons;
export as namespace jupitermoons;
import * as planetposition from './planetposition'

declare module jupitermoons {

    const io = 0
    const europa = 1
    const ganymede = 2
    const callisto = 3

    type Point = [number, number];
    type FourPoints = [Point,Point,Point,Point];
    /**
     * Positions computes positions of moons of Jupiter.
     * Returned coordinates are in units of Jupiter radii.
     * @param {Number} jde - Julian ephemeris day
     * @return {Array} x, y - coordinates of the 4 Satellites of jupiter
     */
    function positions(jde: number): FourPoints;

    /**
     * Positions computes positions of moons of Jupiter.
     * High accuracy method based on theory "E5"  Results returned in
     * argument pos, which must not be undefined.  Returned coordinates in units
     * of Jupiter radii.
     * @param {Number} jde - Julian ephemeris day
     * @param {planetposition.Planet} earth - VSOP87 Planet earth
     * @param {planetposition.Planet} jupiter - VSOP87 Planet jupiter
     * @param {Array} [pos] - reference to array of positions (same as return value)
     * @return {Array} x, y - coordinates of the 4 Satellites of jupiter
     */
    function e5(jde: number, earth: planetposition.Planet, jupiter: planetposition.Planet, pos?: FourPoints): FourPoints;

}

