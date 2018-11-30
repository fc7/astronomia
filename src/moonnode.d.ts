/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module moonnode
 */
export = moonnode;
export as namespace moonnode;
declare module moonnode {
    /**
     * Ascending returns the date of passage of the Moon through an ascending node.
     * @param {Number} year - decimal year specifying a date near the event.
     * @returns {Number} jde of the event nearest the given date.
     */
    function ascending(year: number): number;

    /**
     * Descending returns the date of passage of the Moon through a descending node.
     * @param {Number} year - decimal year specifying a date near the event.
     * @returns {Number} jde of the event nearest the given date.
     */
    function descending(year: number): number;

}

