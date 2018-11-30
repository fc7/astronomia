/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module parabolic
 */
export = parabolic;
export as namespace parabolic;
declare module parabolic {
    /**
     * Elements holds parabolic elements needed for computing true anomaly and distance.
     */
    class Elements {
        constructor(timeP: number, pDis: number);

        /**
         * AnomalyDistance returns true anomaly and distance of a body in a parabolic orbit of the Sun.
         * @param {Number} jde - Julian ephemeris day
         * @returns {Object} {ano, dist}
         *   {Number} ano - True anomaly ν in radians.
         *   {Number} dist - Distance r returned in AU.
         */
        anomalyDistance(jde: number): {
            ano: number,
            dist: number
          };

    }

}

