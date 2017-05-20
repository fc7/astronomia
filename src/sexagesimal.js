/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module sexagesimal
 */
/**
 * Sexagesimal functions
 */

const M = exports

/**
 * Angle represents a general purpose angle.
 * Unit is radians.
 */
class Angle {
  /**
  * constructs a new Angle value from sign, degree, minute, and second
  * components.
  * __One argument__
  * @param {Number} angle - (float) angle in radians
  * __Four arguments__
  * @param {Boolean} neg - sign, true if negative
  * @param {Number} d - (int) degree
  * @param {Number} m - (int) minute
  * @param {Number} s - (float) second
  */
  constructor (neg, d, m, s) {
    if (arguments.length === 1) {
      this.angle = neg
    } else {
      this.setDMS(neg, d, m, s)
    }
  }

  /**
   * SetDMS sets the value of an FAngle from sign, degree, minute, and second
   * components.
   * The receiver is returned as a convenience.
   * @param {Boolean} neg - sign, true if negative
   * @param {Number} d - (int) degree
   * @param {Number} m - (int) minute
   * @param {Number} s - (float) second
   * @returns {Angle}
   */
  setDMS (neg = 0, d = 0, m = 0, s = 0.0) {
    this.angle = (M.DMSToDeg(neg, d, m, s) * Math.PI / 180)
    return this
  }

  /**
   * sets angle
   * @param {Number} angle - (float) angle in radians
   * @returns {Angle}
   */
  setAngle (rad) {
    this.angle = rad
    return this
  }

  /**
   * Rad returns the angle in radians.
   * @returns {Number} angle in radians
   */
  rad () {
    return this.angle
  }

  /**
   * Deg returns the angle in degrees.
   * @returns {Number} angle in degree
   */
  deg () {
    return this.angle * 180 / Math.PI
  }

  /**
  * toDMS converts to parsed sexagesimal angle component.
  */
  toDMS () {
    return M.degToDMS(this.deg())
  }

  /**
   * Print angle in degree using `d°m´s.ss″`
   * @param {Number} precision - precision of `s.ss`
   * @returns {String}
   */
  toString (precision) {
    var [neg, d, m, s] = this.toDMS()
    s = round(s, precision).toString().replace(/^0\./, '.')
    var str = (neg ? '-' : '') +
      (d + '°') +
      (m + '′') +
      (s + '″')
    return str
  }

  /**
   * Print angle in degree using `d°.ff`
   * @param {Number} precision - precision of `.ff`
   * @returns {String}
   */
  toDegString (precision) {
    var [i, s] = modf(this.deg())
    s = round(s, precision).toString().replace(/^0\./, '.')
    var str = (i + '°') + s
    return str
  }
}
M.Angle = Angle

/**
 * HourAngle represents an angle corresponding to angular rotation of
 * the Earth in a specified time.
 *
 * Unit is radians.
 */
class HourAngle extends Angle {
  /**
  * NewHourAngle constructs a new HourAngle value from sign, hour, minute,
  * and second components.
  * @param {Boolean} neg
  * @param {Number} h - (int)
  * @param {Number} m - (int)
  * @param {Number} s - (float)
  */
  // constructor (neg, h, m, s) {
    // super(neg, h, m, s)
  // }

  /**
   * SetDMS sets the value of an FAngle from sign, degree, minute, and second
   * components.
   * The receiver is returned as a convenience.
   * @param {Boolean} neg - sign, true if negative
   * @param {Number} h - (int) hour
   * @param {Number} m - (int) minute
   * @param {Number} s - (float) second
   * @returns {Angle}
   */
  setDMS (neg = 0, h = 0, m = 0, s = 0.0) {
    this.angle = (M.DMSToDeg(neg, h, m, s) * 15 * Math.PI / 180)
    return this
  }

  /**
   * Hour returns the hour angle as hours of time.
   * @returns hour angle
   */
  hour () {
    return this.angle * 12 / Math.PI // 12 = 180 / 15
  }

  deg () {
    return this.hour()
  }

  /**
   * Print angle in `HʰMᵐs.ssˢ`
   * @param {Number} precision - precision of `s.ss`
   * @returns {String}
   */
  toString (precision) {
    var [neg, h, m, s] = this.toDMS()
    s = round(s, precision).toString().replace(/^0\./, '.')
    var str = (neg ? '-' : '') +
      (h + 'ʰ') +
      (m + 'ᵐ') +
      (s + 'ˢ')
    return str
  }
}
M.HourAngle = HourAngle

/**
 * DMSToDeg converts from parsed sexagesimal angle components to decimal
 * degrees.
 * @param {Boolean} neg - sign, true if negative
 * @param {Number} d - (int) degree
 * @param {Number} m - (int) minute
 * @param {Number} s - (float) second
 * @returns {Number} angle in degree
 */
M.DMSToDeg = function (neg, d, m, s) {
  s = (((d * 60 + m) * 60) + s) / 3600
  if (neg) {
    return -s
  }
  return s
}

/**
 * DegToDMS converts from decimal degrees to parsed sexagesimal angle component.
 * @param {Number} deg - angle in degree
 * @returns {Array} [neg, d, m, s]
 *  {Boolean} neg - sign, true if negative
 *  {Number} d - (int) degree
 *  {Number} m - (int) minute
 *  {Number} s - (float) second
 */
M.degToDMS = function (deg) {
  var neg = (deg < 0)
  deg = Math.abs(deg)
  var [d, s] = modf(deg % 360)
  var [m, s1] = modf(s * 60)
  s = round(s1 * 60) // may introduce an error < 1e13
  return [neg, d, m, s]
}

/**
 * TODO
 */
class RA extends HourAngle {
  /**
   * constructs a new RA value from hour, minute, and second components.
   * Negative values are not supported, RA wraps values larger than 24
   * to the range [0,24) hours.
   * @param {Number} h - (int) hour
   * @param {Number} m - (int) minute
   * @param {Number} s - (float) second
   */
  constructor (h = 0, m = 0, s = 0) {
    super()
    let args = [].slice.call(arguments)
    if (args.length === 1) {
      this.angle = h
    } else {
      let hr = M.DMSToDeg(false, h, m, s) % 24
      this.angle = hr * 15 * Math.PI / 180
    }
  }

  hour () {
    let h = this.angle * 12 / Math.PI
    return (24 + (h % 24)) % 24
  }
}
M.RA = RA

/**
 * TODO
 */
class Time {
  /**
   * @param {Boolean} neg - set `true` if negative
   * @param {Number} h - (int) hour
   * @param {Number} m - (int) minute
   * @param {Number} s - (float) second
   */
  constructor (neg, h, m, s) {
    if (arguments.length === 1) {
      this.time = neg
    } else {
      this.setHMS(neg, h, m, s)
    }
  }

  setHMS (neg = false, h = 0, m = 0, s = 0) {
    s += ((h * 60 + m) * 60)
    if (neg) {
      s = -s
    }
    this.time = s
  }

  /**
   * @returns {Number} time in seconds.
   */
  sec () {
    return this.time
  }

  /**
   * @returns {Number} time in minutes.
   */
  min () {
    return this.time / 60
  }

  /**
   * @returns {Number} time in hours.
   */
  hour () {
    return this.time / 3600
  }

  /**
   * @returns {Number} time in days.
   */
  day () {
    return this.time / 3600 / 24
  }

  /**
   * @returns {Number} time in radians, where 1 day = 2 Pi radians.
   */
  rad () {
    return this.time * Math.PI / 12 / 3600
  }

  /**
   * convert time to HMS
   * @returns {Array} [neg, h, m, s]
   *  {Boolean} neg - sign, true if negative
   *  {Number} h - (int) hour
   *  {Number} m - (int) minute
   *  {Number} s - (float) second
   */
  toHMS () {
    var t = this.time
    var neg = (t < 0)
    t = (neg ? -t : t)
    var h = Math.trunc(t / 3600)
    t = t - (h * 3600)
    var m = Math.trunc(t / 60)
    var s = t - (m * 60)
    return [neg, h, m, s]
  }

  /**
   * Print time using `HʰMᵐsˢ.ss`
   * @param {Number} precision - precision of `.ss`
   * @returns {String}
   */
  toString (precision) {
    var [neg, h, m, s] = this.toHMS()
    var [si, sf] = modf(s)
    if (precision === 0) {
      si = round(s, 0)
      sf = 0
    } else {
      sf = round(sf, precision).toString().substr(1)
    }
    var str = (neg ? '-' : '') +
      (h + 'ʰ') +
      (m + 'ᵐ') +
      (si + 'ˢ') +
      (sf || '')
    return str
  }
}
M.Time = Time

/**
 * separate fix `i` from fraction `f`
 * @private
 * @param {Number} float
 * @returns {Array} [i, f]
 *  {Number} i - (int) fix value
 *  {Number} f - (float) fractional portion; always > 1
 */
function modf (float) {
  var i = Math.trunc(float)
  var f = Math.abs(float - i)
  return [i, f]
}

/**
 * Rounds `float` value by precision
 * @private
 * @param {Number} float - value to round
 * @param {Number} precision - (int) number of post decimal positions
 * @return {Number} rounded `float`
 */
function round (float, precision) {
  precision = (precision === undefined ? 10 : precision)
  return parseFloat(float.toFixed(precision), 10)
}
