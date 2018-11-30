/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module nearparabolic
 */
export = nearparabolic;
export as namespace nearparabolic;
declare module nearparabolic { 
    /**
     * Elements holds orbital elements for near-parabolic orbits.
     */
    class Elements {
        constructor(timeP: number, pDis: number, ecc: number);

        /**
         * AnomalyDistance returns true anomaly and distance for near-parabolic orbits.
         * True anomaly ν returned in radians. Distance r returned in AU.
         * An error is returned if the algorithm fails to converge.
         */
        anomalyDistance(jde: number): {
            ano?: number,
            dist?: number,
            err?: Error
          };

    }

}

