/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module nutation
 */
export = nutation;
export as namespace nutation;
declare module nutation {
    /**
     * Nutation returns nutation in longitude (Δψ) and nutation in obliquity (Δε)
     * for a given JDE.
     * JDE = UT + ΔT, see package.
     * Computation is by 1980 IAU theory, with terms < .0003″ neglected.
     * Result units are radians.
     * @param {number} jde - Julian ephemeris day
     * @return {number[]} [Δψ, Δε] - [longitude, obliquity] in radians
     */
    function nutation(jde: number): [number,number];

    /**
     * ApproxNutation returns a fast approximation of nutation in longitude (Δψ)
     * and nutation in obliquity (Δε) for a given JDE.
     * Accuracy is 0.5″ in Δψ, 0.1″ in Δε.
     * Result units are radians.
     * @param {number} jde - Julian ephemeris day
     * @return {number[]} [Δψ, Δε] - [longitude, obliquity] in radians
     */
    function approxNutation(jde: number): [number,number];

    /**
     * MeanObliquity returns mean obliquity (ε₀) following the IAU 1980
     * polynomial.
     * Accuracy is 1″ over the range 1000 to 3000 years and 10″ over the range
     * 0 to 4000 years.
     * Result unit is radians.
     * @param {number} jde - Julian ephemeris day
     * @return {number} mean obliquity (ε₀)
     */
    function meanObliquity(jde: number): number;

    /**
     * MeanObliquityLaskar returns mean obliquity (ε₀) following the Laskar
     * 1986 polynomial.
     * Accuracy over the range 1000 to 3000 years is .01″.
     * Accuracy over the valid date range of -8000 to +12000 years is
     * "a few seconds."
     * Result unit is radians.
     * @param {number} jde - Julian ephemeris day
     * @return {number} mean obliquity (ε₀)
     */
    function meanObliquityLaskar(jde: number): number;

    /**
     * NutationInRA returns "nutation in right ascension" or "equation of the
     * equinoxes."
     * Result is an angle in radians.
     * @param {number} jde - Julian ephemeris day
     * @return {number} nutation in right ascension
     */
    function nutationInRA(jde: number): number;

}

