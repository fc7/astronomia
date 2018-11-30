/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module angle
 */
export = angle;
export as namespace angle;
import * as base from './base';

declare module angle {
  /**
   * `sep` returns the angular separation between two celestial bodies.
   * The algorithm is numerically naïve, and while patched up a bit for
   * small separations, remains unstable for separations near π.
   * @param {base.Coord} c1 - coordinate of celestial body 1
   * @param {base.Coord} c2 - coordinate of celestial body 2
   * @return {Number} angular separation between two celestial bodies
   */
  function sep(c1: base.Coord, c2: base.Coord): number;

  /**
   * `minSep` returns the minimum separation between two moving objects.
   * The motion is represented as an ephemeris of three rows, equally spaced
   * in time.  Jd1, jd3 are julian day times of the first and last rows.
   * R1, d1, r2, d2 are coordinates at the three times.  They must each be
   * slices of length 3.0
   * Result is obtained by computing separation at each of the three times
   * and interpolating a minimum.  This may be invalid for sufficiently close
   * approaches.
   * @throws Error
   * @param {Number} jd1 - Julian day - time at cs1[0], cs2[0]
   * @param {Number} jd3 - Julian day - time at cs1[2], cs2[2]
   * @param {base.Coord[]} cs1 - 3 coordinates of moving object 1
   * @param {base.Coord[]} cs2 - 3 coordinates of moving object 2
   * @param {function} [fnSep] - alternative `sep` function e.g. `angle.sepPauwels`, `angle.sepHav`
   * @return {Number} angular separation between two celestial bodies
   */
  function minSep(
    jd1: number,
    jd3: number,
    cs1: [base.Coord, base.Coord, base.Coord],
    cs2: [base.Coord, base.Coord, base.Coord],
    fnSep?: (c1: base.Coord, c2: base.Coord) => number
  ): number;

  /**
   * `minSepRect` returns the minimum separation between two moving objects.
   * Like `minSep`, but using a method of rectangular coordinates that gives
   * accurate results even for close approaches.
   * @throws Error
   * @param {Number} jd1 - Julian day - time at cs1[0], cs2[0]
   * @param {Number} jd3 - Julian day - time at cs1[2], cs2[2]
   * @param {base.Coord[]} cs1 - 3 coordinates of moving object 1
   * @param {base.Coord[]} cs2 - 3 coordinates of moving object 2
   * @return {Number} angular separation between two celestial bodies
   */
  function minSepRect(
    jd1: number,
    jd3: number,
    cs1: [base.Coord, base.Coord, base.Coord],
    cs2: [base.Coord, base.Coord, base.Coord]
  ): number;

  /**
   * haversine function (17.5) p. 115
   * @param {number}
   * @returns {number}
   */
  function hav(a: number): number;

  /**
   * `sepHav` returns the angular separation between two celestial bodies.
   * The algorithm uses the haversine function and is superior to the naïve
   * algorithm of the Sep function.
   * @param {base.Coord} c1 - coordinate of celestial body 1
   * @param {base.Coord} c2 - coordinate of celestial body 2
   * @return {Number} angular separation between two celestial bodies
   */
  function sepHav(c1: base.Coord, c2: base.Coord): number;

  /**
   * Same as `minSep` but uses function `sepHav` to return the minimum separation
   * between two moving objects.
   */
  function minSepHav(
    jd1: number,
    jd3: number,
    cs1: [base.Coord, base.Coord, base.Coord],
    cs2: [base.Coord, base.Coord, base.Coord]
  ): void;

  /**
   * `sepPauwels` returns the angular separation between two celestial bodies.
   * The algorithm is a numerically stable form of that used in `sep`.
   * @param {base.Coord} c1 - coordinate of celestial body 1
   * @param {base.Coord} c2 - coordinate of celestial body 2
   * @return {Number} angular separation between two celestial bodies
   */
  function sepPauwels(c1: base.Coord, c2: base.Coord): number;

  /**
   * Same as `minSep` but uses function `sepPauwels` to return the minimum
   * separation between two moving objects.
   */
  function minSepPauwels(
    jd1: number,
    jd3: number,
    cs1: [base.Coord, base.Coord, base.Coord],
    cs2: [base.Coord, base.Coord, base.Coord]
  ): number;

  /**
   * RelativePosition returns the position angle of one body with respect to
   * another.
   * The position angle result `p` is measured counter-clockwise from North.
   * If negative then `p` is in the range of 90° ... 270°
   * ````
   *                  North
   *                    |
   *             (p)  ..|
   *                 .  |
   *                V   |
   *    c1 x------------x c2
   *                    |
   * ````
   * @param {base.Coord} c1 - coordinate of celestial body 1
   * @param {base.Coord} c2 - coordinate of celestial body 2
   * @return {Number} position angle (p)
   */
  function relativePosition(c1: base.Coord, c2: base.Coord): number;
}
