/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module stellar
 */
export = stellar;
export as namespace stellar;
declare module stellar {
    /**
     * Sum returns the combined apparent magnitude of two stars.
     */
    function sum(): void;

    /**
     * SumN returns the combined apparent magnitude of a number of stars.
     */
    function sumN(): void;

    /**
     * Ratio returns the brightness ratio of two stars.
     * Arguments m1, m2 are apparent magnitudes.
     */
    function ratio(): void;

    /**
     * Difference returns the difference in apparent magnitude of two stars
     * given their brightness ratio.
     */
    function difference(): void;

    /**
     * AbsoluteByParallax returns absolute magnitude given annual parallax.
     * Argument m is apparent magnitude, π is annual parallax in arc seconds.
     */
    function absoluteByParallax(): void;

    /**
     * AbsoluteByDistance returns absolute magnitude given distance.
     * Argument m is apparent magnitude, d is distance in parsecs.
     */
    function absoluteByDistance(): void;

}

