import { ElementPhase } from './element-phase.enum';
import { ElementType } from './element-type.enum';

export class Element {
    public atomicNumber: number = null;
    public atomicWeight: number = null;
    public symbol: string = null;
    public name: string = null;
    public electronsPerShell: number = null;
    public period: number = null;
    public group: number = null;

    public defaultElementPhase: ElementPhase = null;
    public elementType: ElementType = null;

    public symbolColor: string = null;

    public backgroundColor: string = null;

    constructor(atomicNumber: number, atomicWeight: number,
        symbol: string, name: string, electronsPerShell: number,
        period: number, group: number,
        defaultElementPhase: ElementPhase,
        elementType: ElementType)
    {
        this.atomicNumber = atomicNumber;
        this.atomicWeight = atomicWeight;
        this.symbol = symbol;
        this.name = name;
        this.electronsPerShell = electronsPerShell;
        this.period = period;
        this.group = group;
        this.defaultElementPhase = defaultElementPhase;
        this.elementType = elementType;

        switch(this.defaultElementPhase)
        {
            case null:
                this.symbolColor = '#000000'; // Black
                break;
            case ElementPhase.Solid:
                this.symbolColor = '#00000';
                break;
            case ElementPhase.Gas:
                this.symbolColor = '#FF0000'; // Red
                break;
            case ElementPhase.Unknown:
                this.symbolColor = '#87ac46';  // Greenish
                break;
            case ElementPhase.Liquid:
                this.symbolColor = '#d68a3d'; // Brownish/Orange
                break;
        }

        switch(this.elementType)
        {
            case null:
                alert('this :-/');
                this.backgroundColor = '#FFFFFF'; // White
                break;
            case ElementType.OtherNonMetallic:
                this.backgroundColor = '#c8a2cb'; // Purple
                break;
            case ElementType.HalfMetal:
                this.backgroundColor = '#9db2a5'; // Grayish
                break;
            case ElementType.Halogen:
                this.backgroundColor = '#7fa346'; // Greenish
                break;
            case ElementType.Noblegas:
                this.backgroundColor = '#7ca9d9'; // Blueish
                break;
            case ElementType.AlkaliMetal:
                this.backgroundColor = '#d2e28b'; // Greenish
                break;
            case ElementType.EarthAlkaliMetal:
                this.backgroundColor = '#ffb92d'; // Orange
                break;
            case ElementType.Lanthanide:
                this.backgroundColor = '#37b969'; // Greenish
                break;
            case ElementType.Actinide: 
                this.backgroundColor = '#d7d7d7'; // Light-gray
                break;
            case ElementType.TransitionMetal:
                this.backgroundColor = '#f0f019'; // Yelowish
                break;
            case ElementType.PostTransitionMetal:
                this.backgroundColor = '#e1916e'; // Brown/Orangeish
                break;
        }
    }
}
