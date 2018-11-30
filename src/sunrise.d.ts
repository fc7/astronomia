/**
 * @copyright 2016 commenthol
 * @license MIT
 * @module sunrise
 */
export = sunrise;
export as namespace sunrise;
declare module sunrise {
    /**
     * Computes time of sunrise, sunset for a given day `date` of an observer on earth given by latitude and longitude.
     * Methods may return `undefined` instead of `julian.Calendar` for latitudes very near the poles.
     * @param {julian.Calendar} date - calendar date
     * @param {number} lat - latitude of observer in the range of (-89.6, 89.6)
     * @param {number} lon - longitude of observer (measured positively westwards, New York = 40.7° lat, 74° lon)
     * @param {number} [refraction] - optional refraction
     */
    class Sunrise {
        constructor(date: any, lat: number, lon: number, refraction?: number);

        /**
         * time of solar transit
         * @return {julian.Calendar} time of noon
         */
        noon(): any;

        /**
         * Solar limb appears over the easter horizon in the morning
         * @return {julian.Calendar} time of sunrise
         */
        rise(): any;

        /**
         * @return {julian.Calendar} time of sunset
         * Solar limb disappears on the western horizon in the evening
         */
        set(): any;

        /**
         * Solar limb is fully visible at the easter horizon
         * @return {julian.Calendar} time of sunrise end
         */
        riseEnd(): any;

        /**
         * Solar limb starts disappearing on the western horizon in the evening
         * @return {julian.Calendar} time of sunset start
         */
        setStart(): any;

        /**
         * Dawn, there is still enough light for objects to be distinguishable,
         * @return {julian.Calendar} time of dawn
         */
        dawn(): any;

        /**
         * Dusk, there is still enough light for objects to be distinguishable
         * Bright stars and planets are visible by naked eye
         * @return {julian.Calendar} time of dusk
         */
        dusk(): any;

        /**
         * nautical dawn - Horizon gets visible by naked eye
         * @return {julian.Calendar} time of nautical dawn
         */
        nauticalDawn(): any;

        /**
         * nautical dusk - Horizon is no longer visible by naked eye
         * @return {julian.Calendar} time of nautical dusk
         */
        nauticalDusk(): any;

        /**
         * night starts - No sunlight illumination of the sky, such no intereferance
         * with astronomical observations.
         * @return {julian.Calendar} time of start of night
         */
        nightStart(): any;

        /**
         * night end - Sunlight starts illumination of the sky and interferes
         * with astronomical observations.
         * @return {julian.Calendar} time of end of night
         */
        nightEnd(): any;

        /**
         * Start of "golden hour" before sunset
         * @return {julian.Calendar} time of start of golden hour
         */
        goldenHourStart(): any;

        /**
         * End of "golden hour" after sunrise
         * @return {julian.Calendar} time of end of golden hour
         */
        goldenHourEnd(): any;

    }

}

