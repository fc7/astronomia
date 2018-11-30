/**
 * @copyright 2013 Sonia Keys
 * @copyright 2016 commenthol
 * @license MIT
 * @module planetary
 */
export = planetary;
export as namespace planetary;
declare module planetary { 
    /**
     * Mean computes some intermediate values for a mean planetary configuration
     * given a year and a row of coefficients from Table 36.A, p. 250.0
     */
    function mean(y: number, a: {A:number, B:number, M0: number, M1: number}): [number, number, number];

    /**
     * Sum computes a sum of periodic terms.
     */
    function sum(T: number, M:number, c: Array<Array<number>>): number;

    /**
     * ms returns a mean time corrected by a sum.
     */
    function ms(y, a, c): number;

    /**
     * MercuryInfConj returns the time of an inferior conjunction of Mercury.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function mercuryInfConj(y): number;

    /**
     * MercurySupConj returns the time of a superior conjunction of Mercury.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function mercurySupConj(y): number;

    /**
     * VenusInfConj returns the time of an inferior conjunction of Venus.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function venusInfConj(y): number;

    /**
     * MarsOpp returns the time of an opposition of Mars.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function marsOpp(y): number;

    type Ca = {A:number, B:number, M0:number, M1:number};
    type Caa = {r:number, f:number};

    /**
     * SumA computes the sum of periodic terms with "additional angles"
     */
    function sumA(T:number, M:number, c:number[][], aa: Array<Caa>): number; // (T, M float64, c [][]float64, aa []caa)  float64

    /**
     * Msa returns a mean time corrected by a sum.
     */
    function msa(y:number, a:Ca, c:number[][], aa: Array<Caa>): number; // (y float64, a *ca, c [][]float64, aa []caa)  float64

    /**
     * JupiterOpp returns the time of an opposition of Jupiter.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function jupiterOpp(y:number): number;

    /**
     * SaturnOpp returns the time of an opposition of Saturn.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function saturnOpp(y:number): number;

    /**
     * SaturnConj returns the time of a conjunction of Saturn.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function saturnConj(y:number): number;

    /**
     * UranusOpp returns the time of an opposition of Uranus.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function uranusOpp(y:number): number;

    /**
     * NeptuneOpp returns the time of an opposition of Neptune.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function neptuneOpp(y:number): number;

    /**
     * El computes time and elongation of a greatest elongation event.
     */
    function el(y:number, a:Ca, t:number, e:number[][]): [number, number]; // (y float64, a *ca, t, e [][]float64)  (jde, elongation float64)

    /**
     * MercuryEastElongation returns the time and elongation of a greatest eastern elongation of Mercury.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function mercuryEastElongation(y:number): [number, number];

    /**
     * MercuryWestElongation returns the time and elongation of a greatest western elongation of Mercury.
     * Result is time (as a jde) of the event nearest the given time (as a
     * decimal year.)
     */
    function mercuryWestElongation(y:number): [number, number];

    /**
     * ca holds coefficients from one line of table 36.A, p. 250
     */
    // function Ca(): void;

    /**
     * Table 36.A, p. 250
     */
    // const micA: ;

    /**
     * caa holds coefficients for "additional angles" for outer planets
     * as given on p. 251
     */
    // function Caa(): void;

    /**
     * Mercury inferior conjunction
     */
    // const micB: ;

    /**
     * Mercury superior conjunction
     */
    // const mscB: ;

    /**
     * Venus inferior conjunction
     */
    // const vicB: ;

    /**
     * Mars opposition
     */
    // const moB: ;

    /**
     * Jupiter opposition
     */
    // const joB: ;

    /**
     * Saturn opposition
     */
    // const soB: ;

    /**
     * Saturn conjunction
     */
    // const scB: ;

    /**
     * Uranus opposition
     */
    // const uoB: ;

    /**
     * Neptune opposition [
     */
    // const noB: ;

    /**
     * Mercury east time correction
     */
    // const met: ;

    /**
     * Mercury east elongation
     */
    // const mee: ;

    /**
     * Mercury west time correction
     */
    // const mwt: ;

    /**
     * Mercury west elongation
     */
    // const mwe: ;

    /**
     * Mars Station 2
     */
    // const ms2: ;

}

