/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module line
 */
export = line;
export as namespace line;
declare module line {
    type FiveNumbers = [number,number,number,number,number]
    /**
     * Time computes the time at which a moving body is on a straight line (great
     * circle) between two fixed points, such as stars.
     * Coordinates may be right ascensions and declinations or longitudes and
     * latitudes.  Fixed points are r1, d1, r2, d2.  Moving body is an ephemeris
     * of 5 rows, r3, d3, starting at time t1 and ending at time t5.  Time scale
     * is arbitrary.
     * @throws Error
     * @param {Number} r1 - right ascension Coordinate 1
     * @param {Number} d1 - declination Coordinate 1
     * @param {Number} r2 - right ascension Coordinate 2
     * @param {Number} d2 - declination Coordinate 2
     * @param {Array} r3 - right ascensions of 5 coordinates
     * @param {Array} d3 - declinations of 5 coordinates
     * @param {Array} t1 - time in Julian Days
     * @param {Array} t5 - time in Julian Days
     * @returns {Number} time of alignment in Julian Days
     */
    function time(r1: number, d1: number, r2: number, d2: number, r3: FiveNumbers, d3: FiveNumbers, t1: number, t5: number): number;

    /**
     * Angle returns the angle between great circles defined by three points.
     * Coordinates may be right ascensions and declinations or longitudes and
     * latitudes.  If r1, d1, r2, d2 defines one line and r2, d2, r3, d3 defines
     * another, the result is the angle between the two lines.
     * Algorithm by Meeus.
     */
    function angle(r1: number, d1: number, r2: number, d2: number, r3: number, d3: number): number;

    /**
     * Error returns an error angle of three nearly co-linear points.
     * For the line defined by r1, d1, r2, d2, the result is the anglular distance
     * between that line and r0, d0.
     * Algorithm by Meeus.
     */
    function error(r1: number, d1: number, r2: number, d2: number, r0: number, d0: number): number;

    /**
     * AngleError returns both an angle as in the function Angle, and an error
     * as in the function Error.
     * The algorithm is by B. Pessens.
     * @returns {Number[]} [ψ, ω]
     *  {Number} ψ - angle between great circles defined by three points.
     *  {Number} ω - error angle of three nearly co-linear points
     */
    function angleError(r1: number, d1: number, r2: number, d2: number, r3: number, d3: number): [number, number];

}

