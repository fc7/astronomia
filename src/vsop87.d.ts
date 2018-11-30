/**
 * @copyright 2016 commenthol
 * @license MIT
 * @module vsop87
 */
export = vsop87;
export as namespace vsop87;
declare module vsop87 {
    /**
     * load VSOP87 planet data from VSOP87 files
     * Data can be obtained from ftp://cdsarc.u-strasbg.fr/pub/cats/VI%2F81/
     * @throws {Error}
     * @param {String} planet - MERCURY VENUS EARTH MARS JUPITER SATURN URANUS NEPTUNE
     * @param {String} dirname - folder containing VSOP87 files
     * @param {Object} [opts]
     * @param {String} [opts.type] - file type A, B, C, D - See vsop87.txt
     */
    class VSOP {
        constructor(planet: string, dirname: string, opts?: {
            type?: string;
        });

        /**
         * get file extension for planet
         */
        _getExt(): void;

        /**
         * load data from file
         */
        load(): void;

        /**
         * sync loading
         */
        loadSync(): void;

        /**
         * parse data
         * @param {String} data - content of VSOP file
         */
        parse(data: string): void;

        /**
         * get parsed data
         * @return {Object}
         * ```js
         * { L: { '0': [[<A>, <B>, <C>], ...], '1': [], '2': [], '3': [], '4': [], '5': [] },
         *   B: { '0': [], '1': [], '2': [], '3': [], '4': [], '5': [] },
         *   R: { '0': [], '1': [], '2': [], '3': [], '4': [], '5': [] } }
         * ```
         */
        getData(): any;

    }

}

