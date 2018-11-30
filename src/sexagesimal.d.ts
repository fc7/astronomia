/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module sexagesimal
 */
export = sexagesimal;
export as namespace sexagesimal;
declare module sexagesimal {
    /**
     * Angle represents a general purpose angle.
     * Unit is radians.
     */
    class Angle {
        constructor(angle: number, neg: boolean, d: number, m: number, s: number);

        /**
         * SetDMS sets the value of an FAngle from sign, degree, minute, and second
         * components.
         * The receiver is returned as a convenience.
         * @param {Boolean} neg - sign, true if negative
         * @param {Number} d - (int) degree
         * @param {Number} m - (int) minute
         * @param {Number} s - (float) second
         * @returns {Angle}
         */
        setDMS(neg?: boolean, d?: number, m?: number, s?: number): Angle;

        /**
         * sets angle
         * @param {Number} angle - (float) angle in radians
         * @returns {Angle}
         */
        setAngle(angle: number): Angle;

        /**
         * Rad returns the angle in radians.
         * @returns {Number} angle in radians
         */
        rad(): number;

        /**
         * Deg returns the angle in degrees.
         * @returns {Number} angle in degree
         */
        deg(): number;

        /**
         * toDMS converts to parsed sexagesimal angle component.
         */
        toDMS(): void;

        /**
         * Print angle in degree using `d°m´s.ss″`
         * @param {Number} precision - precision of `s.ss`
         * @returns {String}
         */
        toString(precision: number): string;

        /**
         * Print angle in degree using `d°.ff`
         * @param {Number} precision - precision of `.ff`
         * @returns {String}
         */
        toDegString(precision: number): string;

    }

    /**
     * HourAngle represents an angle corresponding to angular rotation of
     * the Earth in a specified time.
     * Unit is radians.
     */
    class HourAngle {
        /**
         * SetDMS sets the value of an FAngle from sign, degree, minute, and second
         * components.
         * The receiver is returned as a convenience.
         * @param {Boolean} neg - sign, true if negative
         * @param {Number} h - (int) hour
         * @param {Number} m - (int) minute
         * @param {Number} s - (float) second
         * @returns {Angle}
         */
        setDMS(neg?: boolean, h?: number, m?: number, s?: number): Angle;

        /**
         * Hour returns the hour angle as hours of time.
         * @returns hour angle
         */
        hour(): HourAngle;

        /**
         * Print angle in `HʰMᵐs.ssˢ`
         * @param {Number} precision - precision of `s.ss`
         * @returns {String}
         */
        toString(precision: number): string;

    }

    /**
     * DMSToDeg converts from parsed sexagesimal angle components to decimal
     * degrees.
     * @param {Boolean} neg - sign, true if negative
     * @param {Number} d - (int) degree
     * @param {Number} m - (int) minute
     * @param {Number} s - (float) second
     * @returns {Number} angle in degree
     */
    function DMSToDeg(neg: boolean, d: number, m: number, s: number): number;

    /**
     * DegToDMS converts from decimal degrees to parsed sexagesimal angle component.
     * @param {Number} deg - angle in degree
     * @returns {Array} [neg, d, m, s]
     *  {Boolean} neg - sign, true if negative
     *  {Number} d - (int) degree
     *  {Number} m - (int) minute
     *  {Number} s - (float) second
     */
    function degToDMS(deg: number): [number, number, number];

    /**
     * TODO
     */
    class RA {
        constructor(h?: number, m?: number, s?: number);

    }

    /**
     * Time Angle
     * Unit is time in seconds.
     */
    class Time {
        constructor(neg: boolean, h: number, m: number, s: number);

        /**
         * @returns {Number} time in seconds.
         */
        sec(): number;

        /**
         * @returns {Number} time in minutes.
         */
        min(): number;

        /**
         * @returns {Number} time in hours.
         */
        hour(): number;

        /**
         * @returns {Number} time in days.
         */
        day(): number;

        /**
         * @returns {Number} time in radians, where 1 day = 2 Pi radians.
         */
        rad(): number;

        /**
         * convert time to HMS
         * @returns {Array} [neg, h, m, s]
         *  {Boolean} neg - sign, true if negative
         *  {Number} h - (int) hour
         *  {Number} m - (int) minute
         *  {Number} s - (float) second
         */
        toHMS(): [number, number, number];

        /**
         * Print time using `HʰMᵐsˢ.ss`
         * @param {Number} precision - precision of `.ss`
         * @returns {String}
         */
        toString(precision: number): string;

    }

}

