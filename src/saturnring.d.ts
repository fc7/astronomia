/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module saturnring
 */
export = saturnring;
export as namespace saturnring;
declare module saturnring {
    /**
     * Ring computes quantities of the ring of Saturn.
     *  B  Saturnicentric latitude of the Earth referred to the plane of the ring.
     *  Bʹ  Saturnicentric latitude of the Sun referred to the plane of the ring.
     *  ΔU  Difference between Saturnicentric longitudes of the Sun and the Earth.
     *  P  Geometric position angle of the northern semiminor axis of the ring.
     *  aEdge  Major axis of the out edge of the outer ring.
     *  bEdge  Minor axis of the out edge of the outer ring.
     * All results in radians.
     */
    function ring(jde: number, earth: planetposition.Planet, saturn: planetposition.Planet): number[];

    /**
     * UB computes quantities required by illum.Saturn().
     * Same as ΔU and B returned by Ring().  Results in radians.
     */
    function ub(jde: number, earth: planetposition.Planet, saturn: planetposition.Planet): number[];

}

