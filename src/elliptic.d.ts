/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module elliptic
 */
export = elliptic;
export as namespace elliptic; 
import * as coord from "./coord";
import * as planetposition from "./planetposition";
declare module elliptic { 
    /**
     * Position returns observed equatorial coordinates of a planet at a given time.
     * Argument p must be a valid V87Planet object for the observed planet.
     * Argument earth must be a valid V87Planet object for Earth.
     * Results are right ascension and declination, α and δ in radians.
     */
    function position(planet: planetposition.Planet, earth: planetposition.Planet, jde: number): coord.Equatorial;

    /**
     * Elements holds keplerian elements.
     */
    class Elements {
        constructor(axis: number, ecc: number, inc: number, argP: number, node: number, timeP: number);

        /**
         * Position returns observed equatorial coordinates of a body with Keplerian elements.
         * Argument earth must be a valid V87Planet object for Earth.
         * Results are right ascension and declination α and δ, and elongation ψ,
         * all in radians.
         */
        position(jde: number, earth: planetposition.Planet): base.Coord;

    }

    /**
     * AstrometricJ2000 is a utility function for computing astrometric coordinates.
     * It is used internally and only exported so that it can be used from
     * multiple packages.  It is not otherwise expected to be used.
     * Argument f is a function that returns J2000 equatorial rectangular
     * coodinates of a body.
     * Results are J2000 right ascention, declination, and elongation.
     */
    function astrometricJ2000(f: (jde) => {x: number, y: number, z: number}, jde: number, earth: planetposition.Planet): base.Coord;

    /**
     * Velocity returns instantaneous velocity of a body in elliptical orbit around the Sun.
     * Argument a is the semimajor axis of the body, r is the instaneous distance
     * to the Sun, both in AU.
     * Result is in Km/sec.
     */
    function velocity(a: number, r: number): number;

    /**
     * Velocity returns the velocity of a body at aphelion.
     * Argument a is the semimajor axis of the body in AU, e is eccentricity.
     * Result is in Km/sec.
     */
    function vAphelion(a: number, e: number): number;

    /**
     * Velocity returns the velocity of a body at perihelion.
     * Argument a is the semimajor axis of the body in AU, e is eccentricity.
     * Result is in Km/sec.
     */
    function vPerihelion(a: number, e: number): number;

    /**
     * Length1 returns Ramanujan's approximation for the length of an elliptical
     * orbit.
     * Argument a is semimajor axis, e is eccentricity.
     * Result is in units used for semimajor axis, typically AU.
     */
    function length1(a: number, e: number): number;

    /**
     * Length2 returns an alternate approximation for the length of an elliptical
     * orbit.
     * Argument a is semimajor axis, e is eccentricity.
     * Result is in units used for semimajor axis, typically AU.
     */
    function length2(a: number, e: number): number;

    /**
     * Length4 returns the length of an elliptical orbit.
     * Argument a is semimajor axis, e is eccentricity.
     * Result is exact, and in units used for semimajor axis, typically AU.
     */
    function length4(a: number, e: number): number;

}

