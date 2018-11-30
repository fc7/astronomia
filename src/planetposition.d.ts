/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module planetposition
 */
export = planetposition;
export as namespace planetposition;
import * as base from './base'
declare module planetposition { 
  /**
   * ToFK5 converts ecliptic longitude and latitude from dynamical frame to FK5.
   * @param {Number} lon - ecliptic longitude in radians
   * @param {Number} lat - ecliptic latitude in radians
   * @param {Number} jde - Julian ephemeris day
   * @return {base.Coord}
   *    {Number} lon - FK5 longitude
   *    {Number} lat - FK5 latitude
   */
  function toFK5(lon: number, lat: number, jde: number): base.Coord;

  /**
   * VSOP87 representation of a Planet
   * @constructs Planet
   * @param {object} planet - planet data series
   * @example
   * ```js
   * // for use in browser
   * import {data} from 'astronomia'
   * const earth = new planetposition.Planet(data.vsop87Bearth)
   * ```
   */
  export class Planet {
    constructor(planet: object);
  }
}
