/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module eclipse
 */
declare module eclipse { 
    /**
     * Eclipse type identifiers returned from Solar and Lunar.
     */
    enum TYPE {
        "None",
        "Partial", // for solar eclipses
        "Annular", // solar
        "AnnularTotal", // solar
        "Penumbral", // for lunar eclipses
        "Umbral", // lunar
        "Total" // solar or lunar
    }

    /**
     * Solar computes quantities related to solar eclipses.
     * Argument year is a decimal year specifying a date.
     * eclipseType will be None, Partial, Annular, AnnularTotal, or Total.
     * If None, none of the other return values may be meaningful.
     * central is true if the center of the eclipse shadow touches the Earth.
     * jdeMax is the jde when the center of the eclipse shadow is closest to the
     * Earth center, in a plane through the center of the Earth.
     * γ is the distance from the eclipse shadow center to the Earth center
     * at time jdeMax.
     * u is the radius of the Moon's umbral cone in the plane of the Earth.
     * p is the radius of the penumbral cone.
     * mag is eclipse magnitude for partial eclipses.  It is not valid for other
     * eclipse types.
     * γ, u, and p are in units of equatorial Earth radii.
     * @param year
     * @returns object
     */
    function solar(year: number): {
        type: TYPE,
        central: boolean,
        jdeMax: number,
        magnitude: number,
        distance: number,
        umbral: number,
        penumbral: number
      };

    /**
     * Lunar computes quantities related to lunar eclipses.
     * Argument year is a decimal year specifying a date.
     * eclipseType will be None, Penumbral, Umbral, or Total.
     * If None, none of the other return values may be meaningful.
     * jdeMax is the jde when the center of the eclipse shadow is closest to the
     * Moon center, in a plane through the center of the Moon.
     * γ is the distance from the eclipse shadow center to the moon center
     * at time jdeMax.
     * σ is the radius of the umbral cone in the plane of the Moon.
     * ρ is the radius of the penumbral cone.
     * mag is eclipse magnitude.
     * sd- return values are semidurations of the phases of the eclipse, in days.
     * γ, σ, and ρ are in units of equatorial Earth radii.
     */
    function lunar(year: number): {
        type: TYPE,
        jdeMax: number,
        magnitude: number,
        distance: number,
        umbral: number,
        penumbral: number,
        sdTotal: number,
        sdPartial: number,
        sdPenumbral: number
      };

}

