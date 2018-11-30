/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module pluto
 */
export = pluto;
export as namespace pluto;
import * as base from './base'

declare module pluto {
    /**
     * Heliocentric returns J2000 heliocentric coordinates of Pluto.
     * @param {number} jde
     * Results l, b are solar longitude and latitude in radians.
     * Result r is distance in AU.
     */
    function heliocentric(jde:number): {lon: number, lat: number, range: number};

    /**
     * Astrometric returns J2000 astrometric coordinates of Pluto.
     * @param {number} jde
     */
    function astrometric(jde:number): base.Coord;

}

