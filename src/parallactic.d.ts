/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module parallactic
 */
export = parallactic;
export as namespace parallactic;
declare module parallactic {
    /**
     * ParallacticAngle returns parallactic angle of a celestial object.
     *  φ is geographic latitude of observer.
     *  δ is declination of observed object.
     *  H is hour angle of observed object.
     * All angles including result are in radians.
     */
    function parallacticAngle(φ: number, δ: number, H: number): number;

    /**
     * ParallacticAngleOnHorizon is a special case of ParallacticAngle.
     * The hour angle is not needed as an input and the math inside simplifies.
     */
    function parallacticAngleOnHorizon(φ: number, δ: number): number;

    /**
     * EclipticAtHorizon computes how the plane of the ecliptic intersects
     * the horizon at a given local sidereal time as observed from a given
     * geographic latitude.
     *  ε is obliquity of the ecliptic.
     *  φ is geographic latitude of observer.
     *  θ is local sidereal time expressed as an hour angle.
     *  λ1 and λ2 are ecliptic longitudes where the ecliptic intersects the horizon.
     *  I is the angle at which the ecliptic intersects the horizon.
     * All angles, arguments and results, are in radians.
     */
    function eclipticAtHorizon(ε: number, φ: number, θ: number): [number, number, number];

    /**
     * EclipticAtEquator computes the angle between the ecliptic and the parallels
     * of ecliptic latitude at a given ecliptic longitude.
     * (The function name EclipticAtEquator is for consistency with the Meeus text,
     * and works if you consider the equator a nominal parallel of latitude.)
     *  λ is ecliptic longitude.
     *  ε is obliquity of the ecliptic.
     * All angles in radians.
     */
    function eclipticAtEquator(λ: number, ε: number): number;

    /**
     * DiurnalPathAtHorizon computes the angle of the path a celestial object
     * relative to the horizon at the time of its rising or setting.
     *  δ is declination of the object.
     *  φ is geographic latitude of observer.
     * All angles in radians.
     */
    function diurnalPathAtHorizon(δ: number, φ: number): number;

}

