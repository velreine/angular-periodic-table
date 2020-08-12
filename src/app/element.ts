export class Element {
    public atomicNumber: number = null;
    public atomicWeight: number = null;
    public symbol: string = null;
    public name: string = null;
    public electronsPerShell: number = null;

    constructor(atomicNumber: number, atomicWeight: number, symbol: string, name: string, electronsPerShell: number){
        this.atomicNumber = atomicNumber;
        this.atomicWeight = atomicWeight;
        this.symbol = symbol;
        this.name = name;
        this.electronsPerShell = electronsPerShell;
    }
}
