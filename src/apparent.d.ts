/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module apparent
 */
export = apparent;
export as namespace apparent;

import './sexagesimal'
import * as coord from './coord';

declare module apparent {
  /**
   * Nutation returns corrections due to nutation for equatorial coordinates
   * of an object.
   * Results are invalid for objects very near the celestial poles.
   * @param {Number} α - right ascension
   * @param {Number} δ - declination
   * @param {Number} jd - Julian Day
   * @return {Number[]} [Δα1, Δδ1] -
   */
  function nutation(α: number, δ: number, jd: number): [number, number];

  /**
   * κ is the constant of aberration in radians.
   */
  const κ: number;

  /**
   * longitude of perihelion of Earth's orbit.
   */
  function perihelion(T: number): number;

  /**
   * EclipticAberration returns corrections due to aberration for ecliptic
   * coordinates of an object.
   * @param {Number} α - right ascension
   * @param {Number} δ - declination
   * @param {Number} jd - Julian Day
   */
  function eclipticAberration(
    λ: number,
    β: number,
    jd: number
  ): [number, number];

  /**
   * Aberration returns corrections due to aberration for equatorial
   * coordinates of an object.
   * @param {Number} α - right ascension
   * @param {Number} δ - declination
   * @param {Number} jd - Julian Day
   */
  function aberration(α: number, δ: number, jd: number): number;

  /**
   * Position computes the apparent position of an object.
   * Position is computed for equatorial coordinates in eqFrom, considering
   * proper motion, precession, nutation, and aberration.  Result is in
   * eqTo.  EqFrom and eqTo must be non-nil, but may point to the same struct.
   */
  function position(
    eqFrom: coord.Equatorial,
    epochFrom: number,
    epochTo: number,
    mα: sexagesimal.HourAngle,
    mδ: sexagesimal.Angle
  ): coord.Equatorial;

  /**
   * AberrationRonVondrak uses the Ron-Vondrák expression to compute corrections
   * due to aberration for equatorial coordinates of an object.
   * @param {Number} α - right ascension
   * @param {Number} δ - declination
   * @param {Number} jd - Julian Day
   */
  function aberrationRonVondrak(α: number, δ: number, jd: number): number;

  /**
   * PositionRonVondrak computes the apparent position of an object using
   * the Ron-Vondrák expression for aberration.
   * Position is computed for equatorial coordinates in eqFrom, considering
   * proper motion, aberration, precession, and _nutation.  Result is in
   * eqTo.  EqFrom and eqTo must be non-nil, but may point to the same struct.
   * Note the Ron-Vondrák expression is only valid for the epoch J2000.
   * EqFrom must be coordinates at epoch J2000.
   */
  function positionRonVondrak(
    eqFrom: coord.Equatorial,
    epochFrom: number,
    epochTo: number,
    mα: sexagesimal.HourAngle,
    mδ: sexagesimal.Angle
  ): number;
}
