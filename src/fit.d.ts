/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module fit
 */
export = fit;
export as namespace fit;
declare module fit {
    /**
     * Linear fits a line to sample data.
     * Argument p is a list of data points.  Results a and b are coefficients
     * of the best fit line y = ax + b.
     */
    type Point = {x: number, y: number};

    function linear(points: Array<Point>): [number, number];

    /**
     * CorrelationCoefficient returns a correlation coefficient for sample data.
     */
    function correlationCoefficient(points: Array<Point>): number;

    /**
     * Quadratic fits y = ax² + bx + c to sample data.
     * Argument p is a list of data points.  Results a, b, and c are coefficients
     * of the best fit quadratic y = ax² + bx + c.
     */
    function quadratic(points: Array<Point>): [number, number, number];

    /**
     * Func3 implements multiple linear regression for a linear combination
     * of three functions.
     * Given sample data and three functions in x, Func3 returns coefficients
     * a, b, and c fitting y = aƒ₀(x) + bƒ₁(x) + cƒ₂(x) to sample data.
     */
    function func3(points: Array<Point>, f1: (x:number)=>number, f2: (x:number)=>number, f3: (x:number)=>number): [number, number, number];

    /**
     * Func1 fits a linear multiple of a function to sample data.
     * Given sample data and a function in x, Func1 returns coefficient
     * a fitting y = aƒ(x).
     */
    function func1(points: Array<Point>, f1: (x:number)=>number): number;

}

