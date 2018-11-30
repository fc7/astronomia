/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module sundial
 */
export = sundial;
export as namespace sundial;
declare module sundial {
    /**
     * Point return type represents a point to be used in constructing the sundial.
     */
    function Point(): void;

    /**
     * Line holds data to draw an hour line on the sundial.
     */
    function Line(): void;

    /**
     * General computes data for the general case of a planar sundial.
     * Argument φ is geographic latitude at which the sundial will be located.
     * D is gnomonic declination, the azimuth of the perpendicular to the plane
     * of the sundial, measured from the southern meridian towards the west.
     * Argument a is the length of a straight stylus perpendicular to the plane
     * of the sundial, z is zenithal distance of the direction defined by the
     * stylus.  Angles φ, D, and z are in radians.  Units of stylus length a
     * are arbitrary.
     * Results consist of a set of lines, a center point, u, the length of a
     * polar stylus, and ψ, the angle which the polar stylus makes with the plane
     * of the sundial.  The center point, the points defining the hour lines, and
     * u are in units of a, the stylus length.  ψ is in radians.
     */
    function general(): void;

    /**
     * Equatorial computes data for a sundial level with the equator.
     * Argument φ is geographic latitude at which the sundial will be located;
     * a is the length of a straight stylus perpendicular to the plane of the
     * sundial.
     * The sundial will have two sides, north and south.  Results n and s define
     * lines on the north and south sides of the sundial.  Result coordinates
     * are in units of a, the stylus length.
     */
    function equatorial(): void;

    /**
     * Horizontal computes data for a horizontal sundial.
     * Argument φ is geographic latitude at which the sundial will be located,
     * a is the length of a straight stylus perpendicular to the plane of the
     * sundial.
     * Results consist of a set of lines, a center point, and u, the length of a
     * polar stylus.  They are in units of a, the stylus length.
     */
    function horizontal(): void;

    /**
     * Vertical computes data for a vertical sundial.
     * Argument φ is geographic latitude at which the sundial will be located.
     * D is gnomonic declination, the azimuth of the perpendicular to the plane
     * of the sundial, measured from the southern meridian towards the west.
     * Argument a is the length of a straight stylus perpendicular to the plane
     * of the sundial.
     * Results consist of a set of lines, a center point, and u, the length of a
     * polar stylus.  They are in units of a, the stylus length.
     */
    function vertical(): void;

}

