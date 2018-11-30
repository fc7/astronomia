/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module saturnmoons
 */
export = saturnmoons;
export as namespace saturnmoons;
declare module saturnmoons {
    /**
     * XY holds coordinates returned from positions().
     */
    // function XY(): void;

    /**
     * Positions returns positions of the eight major moons of Saturn.
     * Results returned in argument pos, which must not be undefined.
     * Result units are Saturn radii.
     * @param {number} jde - Julian ephemeris day
     * @param {planetposition.Planet} earth - VSOP87 planet Earth
     * @param {planetposition.Planet} saturn - VSOP87 planet Saturn
     * @return {XY[]} Array of Moon Positions in `XY`
     *   Use `M.mimas ... M.iapetus` to resolve to Moon and its position at `jde`
     */
    function positions(jde: number, earth: planetposition.Planet, saturn: planetposition.Planet): Array<{x:number, y:number}>;

}

