/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module precess
 */
export = precess;
export as namespace precess;
import * as coord from './coord'
import sexagesimal from './sexagesimal'
import * as elementequinox from './elementequinox'

declare module precess {
    /**
     * approxAnnualPrecession returns approximate annual precision in right
     * ascension and declination.
     * The two epochs should be within a few hundred years.
     * The declinations should not be too close to the poles.
     * @param {coord.Equatorial} eqFrom
     * @param {Number} epochFrom - use `base.JDEToJulianYear(year)` to get epoch
     * @param {Number} epochTo - use `base.JDEToJulianYear(year)` to get epoch
     * @returns {Array}
     *  {sexa.HourAngle} seconds of right ascension
     *  {sexa.Angle} seconds of Declination
     */
    function approxAnnualPrecession(eqFrom: coord.Equatorial, epochFrom: number, epochTo: number): [sexagesimal.HourAngle, sexagesimal.Angle];

    /**
     * @param {Number} epochFrom - use `base.JDEToJulianYear(year)` to get epoch
     * @param {Number} epochTo - use `base.JDEToJulianYear(year)` to get epoch
     */
    function mn(epochFrom: number, epochTo: number): number[];

    /**
     * ApproxPosition uses ApproxAnnualPrecession to compute a simple and quick
     * precession while still considering proper motion.
     * @param {coord.Equatorial} eqFrom
     * @param {Number} epochFrom
     * @param {Number} epochTo
     * @param {Number} mα - in radians
     * @param {Number} mδ - in radians
     * @returns {coord.Equatorial} eqTo
     */
    function approxPosition(eqFrom: any, epochFrom: number, epochTo: number, mα: number, mδ: number): coord.Equatorial;

    /**
     * Precessor represents precession from one epoch to another.
     * Construct with NewPrecessor, then call method Precess.
     * After construction, Precess may be called multiple times to precess
     * different coordinates with the same initial and final epochs.
     */
    class Precessor {
        constructor(epochFrom: number, epochTo: number);

        /**
         * Precess precesses coordinates eqFrom, leaving result in eqTo.
         * @param {coord.Equatorial} eqFrom
         * @returns {coord.Equatorial} eqTo
         */
        precess(eqFrom: coord.Equatorial): coord.Equatorial;

    }

    /**
     * Position precesses equatorial coordinates from one epoch to another,
     * including proper motions.
     * If proper motions are not to be considered or are not applicable, pass 0, 0
     * for mα, mδ
     * Both eqFrom and eqTo must be non-nil, although they may point to the same
     * struct.  EqTo is returned for convenience.
     * @param {coord.Equatorial} eqFrom
     * @param {coord.Equatorial} eqTo
     * @param {Number} epochFrom
     * @param {Number} epochTo
     * @param {Number} mα - in radians
     * @param {Number} mδ - in radians
     * @returns {coord.Equatorial} [eqTo]
     */
    function position(eqFrom: coord.Equatorial, eqTo: coord.Equatorial, epochFrom: number, epochTo: number, mα: number, mδ: number): coord.Equatorial;

    /**
     * EclipticPrecessor represents precession from one epoch to another.
     * Construct with NewEclipticPrecessor, then call method Precess.
     * After construction, Precess may be called multiple times to precess
     * different coordinates with the same initial and final epochs.
     */
    class EclipticPrecessor {
        constructor(epochFrom: number, epochTo: number);

        /**
         * EclipticPrecess precesses coordinates eclFrom, leaving result in eclTo.
         * The same struct may be used for eclFrom and eclTo.
         * EclTo is returned for convenience.
         * @param {coord.Ecliptic} eclFrom
         * @param {coord.Ecliptic} eclTo
         * @returns {coord.Ecliptic} [eclTo]
         */
        precess(eclFrom: coord.Ecliptic, eclTo: coord.Ecliptic): coord.Ecliptic;

        /**
         * ReduceElements reduces orbital elements of a solar system body from one
         * equinox to another.
         * This function is described in chapter 24, but is located in this
         * package so it can be a method of EclipticPrecessor.
         * @param {elementequinox.Elements} eFrom
         * @returns {elementequinox.Elements} eTo
         */
        reduceElements(eFrom: elementequinox.Elements): elementequinox.Elements;

    }

    /**
     * eclipticPosition precesses ecliptic coordinates from one epoch to another,
     * including proper motions.
     * While eclFrom is given as ecliptic coordinates, proper motions mα, mδ are
     * still expected to be equatorial.  If proper motions are not to be considered
     * or are not applicable, pass 0, 0.
     * Both eclFrom and eclTo must be non-nil, although they may point to the same
     * struct.  EclTo is returned for convenience.
     * @param {coord.Ecliptic} eclFrom,
     * @param {Number} epochFrom
     * @param {Number} epochTo
     * @param {sexa.HourAngle} mα
     * @param {sexa.Angle} mδ
     * @returns {coord.Ecliptic} eclTo
     */
    function eclipticPosition(eclFrom: coord.Ecliptic, epochFrom: number, epochTo: number, mα: sexagesimal.HourAngle, mδ: sexagesimal.Angle): coord.Ecliptic;

    /**
     * @param {Number} mα - anual proper motion (ra)
     * @param {Number} mδ - anual proper motion (dec)
     * @param {Number} epoch
     * @param {coord.Ecliptic} ecl
     * @returns {Number[]} [mλ, mβ]
     */
    function properMotion(mα: number, mδ: number, epoch: number, ecl: coord.Ecliptic): number[];

    /**
     * ProperMotion3D takes the 3D equatorial coordinates of an object
     * at one epoch and computes its coordinates at a new epoch, considering
     * proper motion and radial velocity.
     * Radial distance (r) must be in parsecs, radial velocitiy (mr) in
     * parsecs per year.
     * Both eqFrom and eqTo must be non-nil, although they may point to the same
     * struct.  EqTo is returned for convenience.
     * @param {coord.Equatorial} eqFrom,
     * @param {Number} epochFrom
     * @param {Number} r
     * @param {Number} mr
     * @param {sexa.HourAngle} mα
     * @param {sexa.Angle} mδ
     * @returns {coord.Equatorial} eqTo
     */
    function properMotion3D(eqFrom: coord.Equatorial, epochFrom: number, r: number, mr: number, mα: sexagesimal.HourAngle, mδ: sexagesimal.Angle): coord.Equatorial;

}

