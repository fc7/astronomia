/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module mars
 */
export = mars;
export as namespace mars;
import * as planetposition from './planetposition'

declare module mars {
    type EightNumbers = [number,number,number,number,number,number,number,number]
    /**
     * Physical computes quantities for physical observations of Mars.
     * Results:
     *  DE  planetocentric declination of the Earth.
     *  DS  planetocentric declination of the Sun.
     *  ω   Areographic longitude of the central meridian, as seen from Earth.
     *  P   Geocentric position angle of Mars' northern rotation pole.
     *  Q   Position angle of greatest defect of illumination.
     *  d   Apparent diameter of Mars.
     *  k   Illuminated fraction of the disk.
     *  q   Greatest defect of illumination.
     * All angular results (all results except k) are in radians.
     * @param {number} jde - Julian ephemeris day
     * @param {planetposition.Planet} earth
     * @param {planetposition.Planet} mars
     */
    function physical(jde: number, earth: planetposition.Planet, mars: planetposition.Planet): EightNumbers;

}

