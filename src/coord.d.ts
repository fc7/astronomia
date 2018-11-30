/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module coord
 */
export = coord;
export as namespace coord;
import * as globe from './globe'

declare module coord { 
    /**
     * Ecliptic coordinates are referenced to the plane of the ecliptic.
     */
    class Ecliptic {
        constructor(lon: number, lat: number);
        lon: number;
        lat: number;

        /**
         * converts ecliptic coordinates to equatorial coordinates.
         * @param {Number} ε - Obliquity
         * @returns {Equatorial}
         */
        toEquatorial(ε: number): Equatorial;

    }

    /**
     * Equatorial coordinates are referenced to the Earth's rotational axis.
     */
    class Equatorial {
        constructor(ra?: number, dec?: number);

        /**
         * EqToEcl converts equatorial coordinates to ecliptic coordinates.
         * @param {Number} ε - Obliquity
         * @returns {Ecliptic}
         */
        toEcliptic(ε: number): Ecliptic;

        /**
         * EqToHz computes Horizontal coordinates from equatorial coordinates.
         * Argument g is the location of the observer on the Earth.  Argument st
         * is the sidereal time at Greenwich.
         * Sidereal time must be consistent with the equatorial coordinates.
         * If coordinates are apparent, sidereal time must be apparent as well.
         * @param {globe.Coord} g - coordinates of observer on Earth
         * @param {Number} st - sidereal time at Greenwich at time of observation
         * @returns {Horizontal}
         */
        toHorizontal(g: globe.Coord, st: number): Horizontal;

        /**
         * EqToGal converts equatorial coordinates to galactic coordinates.
         * Equatorial coordinates must be referred to the standard equinox of B1950.0.
         * For conversion to B1950, see package precess and utility functions in
         * package "common".
         * @returns {Galactic}
         */
        toGalactic(): Galactic;

    }

    /**
     * Horizontal coordinates are referenced to the local horizon of an observer
     * on the surface of the Earth.
     * @param {Number} az - Azimuth (A) in radians
     * @param {Number} alt - Altitude (h) in radians
     */
    class Horizontal {
        constructor(az: number, alt: number);
        az: number;
        alt: number;

        /**
         * transforms horizontal coordinates to equatorial coordinates.
         * Sidereal time must be consistent with the equatorial coordinates.
         * If coordinates are apparent, sidereal time must be apparent as well.
         * @param {globe.Coord} g - coordinates of observer on Earth (lat, lon)
         * @param {Number} st - sidereal time at Greenwich at time of observation.
         * @returns {Equatorial} (right ascension, declination)
         */
        toEquatorial(g: globe.Coord, st: number): Equatorial;

    }

    /**
     * Galactic coordinates are referenced to the plane of the Milky Way.
     * @param {Number} lon - Longitude (l) in radians
     * @param {Number} lat - Latitude (b) in radians
     */
    class Galactic {
        constructor(lon: number, lat: number);
        lon: number;
        lat: number;

        /**
         * GalToEq converts galactic coordinates to equatorial coordinates.
         * Resulting equatorial coordinates will be referred to the standard equinox of
         * B1950.0.  For subsequent conversion to other epochs, see package precess and
         * utility functions in package meeus.
         * @returns {Equatorial} (right ascension, declination)
         */
        toEquatorial(): Equatorial;

    }

    /**
     * equatorial coords for galactic north
     * IAU B1950.0 coordinates of galactic North Pole
     */
    const galacticNorth: coord.Equatorial;
    const galacticNorth1950: coord.Equatorial;

    /**
     * Galactic Longitude 0°
     * Meeus gives 33 as the origin of galactic longitudes relative to the
     * ascending node of of the galactic equator.  33 + 90 = 123, the IAU
     * value for origin relative to the equatorial pole.
     */
    const galacticLon0: coord.Galactic;
    const galactic0Lon1950: coord.Galactic;

}

