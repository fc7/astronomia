/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module illum
 */
export = illum;
export as namespace illum;
declare module illum {
    /**
     * PhaseAngle computes the phase angle of a planet.
     * Argument r is planet's distance to Sun, Δ its distance to Earth, and R
     * the distance from Sun to Earth.  All distances in AU.
     * Result in radians.
     */
    function phaseAngle(r: number, Δ: number, R: number): number;

    /**
     * Fraction computes the illuminated fraction of the disk of a planet.
     * Argument r is planet's distance to Sun, Δ its distance to Earth, and R
     * the distance from Sun to Earth.  All distances in AU.
     */
    function fraction(r: number, Δ: number, R: number): number;

    /**
     * PhaseAngle2 computes the phase angle of a planet.
     * Arguments L, B, R are heliocentric ecliptical coordinates of the planet.
     * L0, R0 are longitude and radius for Earth, Δ is distance from Earth to
     * the planet.  All distances in AU, angles in radians.
     * The phase angle result is in radians.
     */
    function phaseAngle2(L: number, B: number, R: number, L0: number, R0: number, Δ: number): number;

    /**
     * PhaseAngle3 computes the phase angle of a planet.
     * Arguments L, B are heliocentric ecliptical longitude and latitude of the
     * planet.  x, y, z are cartesian coordinates of the planet, Δ is distance
     * from Earth to the planet.  All distances in AU, angles in radians.
     * The phase angle result is in radians.
     */
    function phaseAngle3(L: number, B: number, x: number, y: number, z: number, Δ: number): number;

    /**
     * FractionVenus computes an approximation of the illumanted fraction of Venus.
     */
    function fractionVenus(jde: number): number;

    /**
     * Mercury computes the visual magnitude of Mercury.
     * Formula by G. Müller
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth,
     * and i the phase angle in radians.
     */
    function mercury(r: number, Δ: number, i: number): number;

    /**
     * Venus computes the visual magnitude of Venus.
     * Formula by G. Müller
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth,
     * and i the phase angle in radians.
     */
    function venus(r: number, Δ: number, i: number): number;

    /**
     * Mars computes the visual magnitude of Mars.
     * Formula by G. Müller
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth,
     * and i the phase angle in radians.
     */
    function mars(r: number, Δ: number, i: number): number;

    /**
     * Jupiter computes the visual magnitude of Jupiter.
     * Formula by G. Müller
     * Effect of phase not considered
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth.
     */
    function jupiter(r: number, Δ: number): number;

    /**
     * Saturn computes the visual magnitude of Saturn.
     * Formula by G. Müller
     * Sun's altitude above the plane of the ring is not considered.
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth.
     * B is the Saturnicentric latitude of the Earth referred to the plane of
     * Saturn's ring.
     * ΔU (in radians) is the difference between the Saturnicentric longitudes
     * of the Sun and the Earth, measured in the plane of the ring.
     * You can use saturndisk.Disk() to obtain B and ΔU.
     */
    function saturn(r: number, Δ: number, B: number, ΔU: number): number;

    /**
     * Uranus computes the visual magnitude of Uranus.
     * Formula by G. Müller
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth.
     */
    function uranus(r: number, Δ: number): number;

    /**
     * Neptune computes the visual magnitude of Neptune.
     * Formulae by G. Müller
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth.
     */
    function neptune(r: number, Δ: number): number;

    /**
     * Mercury84 computes the visual magnitude of Mercury.
     * The formula is that adopted in "Astronomical Almanac" in 1984.0
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth,
     * and i the phase angle in radians.
     */
    function mercury84(r: number, Δ: number, i: number): number;

    /**
     * Venus84 computes the visual magnitude of Venus.
     * The formula is that adopted in "Astronomical Almanac" in 1984.0
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth,
     * and i the phase angle in radians.
     */
    function venus84(r: number, Δ: number, i: number): number;

    /**
     * Mars84 computes the visual magnitude of Mars.
     * The formula is that adopted in "Astronomical Almanac" in 1984.0
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth,
     * and i the phase angle in radians.
     */
    function mars84(r: number, Δ: number, i: number): number;

    /**
     * Jupiter84 computes the visual magnitude of Jupiter.
     * The formula is that adopted in "Astronomical Almanac" in 1984.0
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth,
     * and i the phase angle in radians.
     */
    function jupiter84(r: number, Δ: number, i: number): number;

    /**
     * Saturn84 computes the visual magnitude of Saturn.
     * The formula is that adopted in "Astronomical Almanac" in 1984.0
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth.
     * B is the Saturnicentric latitude of the Earth referred to the plane of
     * Saturn's ring.
     * ΔU (in radians) is the difference between the Saturnicentric longitudes
     * of the Sun and the Earth, measured in the plane of the ring.
     */
    function saturn84(r: number, Δ: number, B: number, ΔU: number): number;

    /**
     * Uranus84 computes the visual magnitude of Uranus.
     * The formula is that adopted in "Astronomical Almanac" in 1984.0
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth.
     */
    function uranus84(r: number, Δ: number): number;

    /**
     * Neptune84 computes the visual magnitude of Neptune.
     * The formula is that adopted in "Astronomical Almanac" in 1984.0
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth.
     */
    function neptune84(r: number, Δ: number): number;

    /**
     * Pluto84 computes the visual magnitude of Pluto.
     * The formula is that adopted in "Astronomical Almanac" in 1984.0
     * Argument r is the planet's distance from the Sun, Δ the distance from Earth.
     */
    function pluto84(r: number, Δ: number): number;

}

