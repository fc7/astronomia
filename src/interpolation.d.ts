/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module interpolation
 */
export = interpolation;
export as namespace interpolation;
declare module interpolation { 

    /**
     * Len3 allows second difference interpolation.
     */
    class Len3 {
        constructor(x1: number, x3: number, y: number[]);

        /**
         * interpolateX interpolates for a given x value.
         */
        interpolateX(x: number): number;

        /**
         * interpolateXStrict interpolates for a given x value,
         * restricting x to the range x1 to x3 given to the constructor NewLen3.
         */
        interpolateXStrict(x: number): number;

        /**
         * interpolateN interpolates for (a given interpolating factor n.
         * This is interpolation formula (3.3)
         * The interpolation factor n is x-x2 in units of the tabular x interval.
         * (See Meeus p. 24.)
         */
        interpolateN(n: number): number;

        /**
         * interpolateNStrict interpolates for (a given interpolating factor n.
         * N is restricted to the range [-1..1] corresponding to the range x1 to x3
         * given to the constructor of Len3.
         */
        interpolateNStrict(n: number): number;

        /**
         * extremum returns the x and y values at the extremum.
         * Results are restricted to the range of the table given to the constructor
         * new Len3.
         */
        extremum(): [number, number];

        /**
         * zero finds a zero of the quadratic function represented by the table.
         * That is, it returns an x value that yields y=0.
         * Argument strong switches between two strategies for the estimation step.
         * when iterating to converge on the zero.
         * Strong=false specifies a quick and dirty estimate that works well
         * for gentle curves, but can work poorly or fail on more dramatic curves.
         * Strong=true specifies a more sophisticated and thus somewhat more
         * expensive estimate.  However, if the curve has quick changes, This estimate
         * will converge more reliably and in fewer steps, making it a better choice.
         * Results are restricted to the range of the table given to the constructor
         * NewLen3.
         */
        zero(strong?: boolean): number;

    }

    /**
     * len3ForInterpolateX is a special purpose Len3 constructor.
     * Like NewLen3, it takes a table of x and y values, but it is not limited
     * to tables of 3 rows.  An X value is also passed that represents the
     * interpolation target x value.  Len3ForInterpolateX will locate the
     * appropriate three rows of the table for interpolating for x, and initialize
     * the Len3 object for those rows.
     * @param {Number} x - is the target for interpolation
     * @param {Number} x1 - is the x value corresponding to the first y value of the table.
     * @param {Number} xn - is the x value corresponding to the last y value of the table.
     * @param {Number[]} y - is all y values in the table.  y.length should be >= 3.0
     * @returns {Number} interpolation value
     */
    function len3ForInterpolateX(x: number, x1: number, xn: number, y: number[]): number;

    /**
     * Len4Half interpolates a center value from a table of four rows.
     * @param {Number[]} y - 4 values
     * @returns {Number} interpolation result
     */
    function len4Half(y: [number,number,number,number]): number;

    /**
     * Len5 allows fourth Difference interpolation.
     */
    class Len5 {
        constructor(x1: number, x5: number, y: [number,number,number,number,number]);

        /**
         * InterpolateX interpolates for (a given x value.
         */
        interpolateX(x: number): number;

        /**
         * InterpolateXStrict interpolates for a given x value,
         * restricting x to the range x1 to x5 given to the the constructor NewLen5.
         */
        interpolateXStrict(x: number): number;

        /**
         * InterpolateN interpolates for (a given interpolating factor n.
         * The interpolation factor n is x-x3 in units of the tabular x interval.
         * (See Meeus p. 28.)
         */
        interpolateN(n: number): number;

        /**
         * InterpolateNStrict interpolates for (a given interpolating factor n.
         * N is restricted to the range [-1..1].  This is only half the range given
         * to the constructor NewLen5, but is the recommendation given on p. 31.0
         */
        interpolateNStrict(n: number): number;

        /**
         * Extremum returns the x and y values at the extremum.
         * Results are restricted to the range of the table given to the constructor
         * NewLen5.  (Meeus actually recommends restricting the range to one unit of
         * the tabular interval, but that seems a little harsh.)
         */
        extremum(): [number, number];

        /**
         * zero finds a zero of the quartic function represented by the table.
         * That is, it returns an x value that yields y=0.
         * Argument strong switches between two strategies for the estimation step.
         * when iterating to converge on the zero.
         * Strong=false specifies a quick and dirty estimate that works well
         * for gentle curves, but can work poorly or fail on more dramatic curves.
         * Strong=true specifies a more sophisticated and thus somewhat more
         * expensive estimate.  However, if the curve has quick changes, This estimate
         * will converge more reliably and in fewer steps, making it a better choice.
         * Results are restricted to the range of the table given to the constructor
         * NewLen5.
         */
        zero(strong?: boolean): number;

    }

    /**
     * Lagrange performs interpolation with unequally-spaced abscissae.
     * Given a table of X and Y values, interpolate a new y value for argument x.
     * X values in the table do not have to be equally spaced; they do not even
     * have to be in order. They must however, be distinct.
     * @param {Number} x - x-value of interpolation
     * @param {Array} table - `[[x0, y0], ... [xN, yN]]` of x, y values
     * @returns {Number} interpolation result `y` of `x`
     */
    function lagrange(x: number, table: Array<[number, number]>): number;

    /**
     * LagrangePoly uses the formula of Lagrange to produce an interpolating
     * polynomial.
     * X values in the table do not have to be equally spaced; they do not even
     * have to be in order.  They must however, be distinct.
     * The returned polynomial will be of degree n-1 where n is the number of rows
     * in the table.  It can be evaluated for x using base.horner.
     * @param {Array} table - `[[x0, y0], ... [xN, yN]]`
     * @returns {Array} - polynomial array
     */
    function lagrangePoly(table: Array<[number, number]>): number[];

    /**
     * Linear Interpolation of x
     */
    function linear(x:number, x1:number, xN:number, y:number): number;

}

