import { Injectable } from '@angular/core';

import { Element } from './element';
import { ElementPhase } from './element-phase.enum';
import { ElementType } from './element-type.enum';


@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  public elements: Element[] = [

      // Period 1
      new Element(1,1.0079,'H','Hydrogen',0, 1, 1, ElementPhase.Gas, ElementType.OtherNonMetallic),
      new Element(2,4.0026,'He','Helium',0, 1, 18, ElementPhase.Gas, ElementType.Noblegas),

      // Period 2
      new Element(3,6.941,'Li','Lithium',0, 2, 1, ElementPhase.Solid, ElementType.AlkaliMetal),
      new Element(4,9.0122,'Be','Beryllium',0, 2, 2, ElementPhase.Solid, ElementType.EarthAlkaliMetal),
      new Element(5,10.811,'B','Boron',0, 2, 13, ElementPhase.Solid, ElementType.HalfMetal),
      new Element(6,12.0107,'C','Carbon',0, 2, 14, ElementPhase.Solid, ElementType.OtherNonMetallic),
      new Element(7,14.0067,'N','Nitrogen',0, 2, 15, ElementPhase.Gas, ElementType.OtherNonMetallic),
      new Element(8,15.9994,'O','Oxygen',0, 2, 16, ElementPhase.Gas, ElementType.OtherNonMetallic),
      new Element(9,18.9984,'F','Fluorine',0, 2, 17, ElementPhase.Gas, ElementType.Halogen),
      new Element(10,20.1797,'Ne','Neon',0, 2, 18, ElementPhase.Gas, ElementType.Noblegas),

      // Period 3
      new Element(11,22.9897,'Na','Sodium',0, 3, 1, ElementPhase.Solid, ElementType.AlkaliMetal),
      new Element(12,24.305,'Mg','Magnesium',0, 3, 2, ElementPhase.Solid, ElementType.EarthAlkaliMetal),
      new Element(13,26.9815,'Al','Aluminum',0, 3, 13, ElementPhase.Solid, ElementType.PostTransitionMetal),
      new Element(14,28.0855,'Si','Silicon',0, 3, 14, ElementPhase.Solid, ElementType.HalfMetal),
      new Element(15,30.9738,'P','Phosphorus',0, 3, 15, ElementPhase.Solid, ElementType.OtherNonMetallic),
      new Element(16,32.065,'S','Sulfur',0, 3, 16, ElementPhase.Solid, ElementType.OtherNonMetallic),
      new Element(17,35.453,'Cl','Chlorine',0, 3, 17, ElementPhase.Solid, ElementType.Halogen),
      new Element(18,39.948,'Ar','Argon',0, 3, 18, ElementPhase.Gas, ElementType.Noblegas),

      // Period 4
      new Element(19,39.0983,'K','Potassium',0, 4, 1, ElementPhase.Solid, ElementType.AlkaliMetal),
      new Element(20,40.078,'Ca','Calcium',0, 4, 2, ElementPhase.Solid, ElementType.EarthAlkaliMetal),
      new Element(21,44.9559,'Sc','Scandium',0, 4, 3, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(22,47.867,'Ti','Titanium',0, 4, 4, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(23,50.9415,'V','Vanadium',0, 4, 5, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(24,51.9961,'Cr','Chromium',0, 4, 6, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(25,54.938,'Mn','Manganese',0, 4, 7, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(26,55.845,'Fe','Iron',0, 4, 8, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(27,58.9332,'Co','Cobalt',0, 4, 9, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(28,58.6934,'Ni','Nickel',0, 4, 10, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(29,63.546,'Cu','Copper',0, 4, 11, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(30,65.39,'Zn','Zinc',0, 4, 12, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(31,69.723,'Ga','Gallium',0, 4, 13, ElementPhase.Solid, ElementType.PostTransitionMetal),
      new Element(32,72.64,'Ge','Germanium',0, 4, 14, ElementPhase.Solid, ElementType.HalfMetal),
      new Element(33,74.9216,'As','Arsenic',0, 4, 15, ElementPhase.Solid, ElementType.HalfMetal),
      new Element(34,78.96,'Se','Selenium',0, 4, 16, ElementPhase.Solid, ElementType.OtherNonMetallic),
      new Element(35,79.904,'Br','Bromine',0, 4, 17, ElementPhase.Liquid, ElementType.Halogen),
      new Element(36,83.8,'Kr','Krypton',0, 4, 18, ElementPhase.Gas, ElementType.Noblegas),

      // Period 5
      new Element(37,85.4678,'Rb','Rubidium',0, 5, 1, ElementPhase.Solid, ElementType.AlkaliMetal),
      new Element(38,87.62,'Sr','Strontium',0, 5, 2, ElementPhase.Solid, ElementType.EarthAlkaliMetal),
      new Element(39,88.9059,'Y','Yttrium',0, 5, 3, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(40,91.224,'Zr','Zirconium',0, 5, 4, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(41,92.9064,'Nb','Niobium',0, 5, 5, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(42,95.94,'Mo','Molybdenum',0, 5, 6, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(43,98.0,'Tc','Technetium',0, 5, 7, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(44,101.07,'Ru','Ruthenium',0, 5, 8, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(45,102.9055,'Rh','Rhodium',0, 5, 9, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(46,106.42,'Pd','Palladium',0, 5, 10, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(47,107.8682,'Ag','Silver',0, 5, 11, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(48,112.411,'Cd','Cadmium',0, 5, 12, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(49,114.818,'In','Indium',0, 5, 13, ElementPhase.Solid, ElementType.PostTransitionMetal),
      new Element(50,118.71,'Sn','Tin',0, 5, 14, ElementPhase.Solid, ElementType.PostTransitionMetal),
      new Element(51,121.76,'Sb','Antimony',0, 5, 15, ElementPhase.Solid, ElementType.HalfMetal),
      new Element(52,127.6,'Te','Tellurium',0, 5, 16, ElementPhase.Solid, ElementType.HalfMetal),
      new Element(53,126.9045,'I','Iodine',0, 5, 17, ElementPhase.Solid, ElementType.Halogen),
      new Element(54,131.293,'Xe','Xenon',0, 5, 18, ElementPhase.Gas, ElementType.Noblegas),

      // Period 6
      new Element(55,132.9055,'Cs','Cesium',0, 6, 1, ElementPhase.Solid, ElementType.AlkaliMetal),
      new Element(56,137.327,'Ba','Barium',0, 6, 2, ElementPhase.Solid, ElementType.EarthAlkaliMetal),
      new Element(72,178.49,'Hf','Hafnium',0, 6, 4, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(73,180.9479,'Ta','Tantalum',0, 6, 5, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(74,183.64,'W','Tungsten',0, 6, 6, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(75,186.207,'Re','Rhenium',0, 6, 7, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(76,190.23,'Os','Osmium',0, 6, 8, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(77,192.217,'Ir','Iridium',0, 6, 9, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(78,195.078,'Pt','Platinum',0, 6, 10, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(79,196.9665,'Au','Gold',0, 6, 11, ElementPhase.Solid, ElementType.TransitionMetal),
      new Element(80,200.59,'Hg','Mercury',0, 6, 12, ElementPhase.Liquid, ElementType.TransitionMetal),
      new Element(81,204.3833,'Tl','Thallium',0, 6, 13, ElementPhase.Solid, ElementType.PostTransitionMetal),
      new Element(82,207.2,'Pb','Lead',0, 6, 14, ElementPhase.Solid, ElementType.PostTransitionMetal),
      new Element(83,208.9804,'Bi','Bismuth',0, 6, 15, ElementPhase.Solid, ElementType.PostTransitionMetal),
      new Element(84,209.0,'Po','Polonium',0, 6, 16, ElementPhase.Solid, ElementType.HalfMetal),
      new Element(85,210.0,'At','Astatine',0, 6, 17, ElementPhase.Solid, ElementType.Halogen),
      new Element(86,222.0,'Rn','Radon',0, 6, 18, ElementPhase.Gas, ElementType.Noblegas),

      // Period 7
      new Element(87,223.0,'Fr','Francium',0, 7, 1, ElementPhase.Solid, ElementType.AlkaliMetal),
      new Element(88,226.0,'Ra','Radium',0, 7, 2, ElementPhase.Solid, ElementType.EarthAlkaliMetal),
      new Element(104,261.0,'Rf','Rutherfordium',0, 7, 4, ElementPhase.Unknown, ElementType.TransitionMetal),
      new Element(105,262.0,'Db','Dubnium',0, 7, 5, ElementPhase.Unknown, ElementType.TransitionMetal),
      new Element(106,266.0,'Sg','Seaborgium',0, 7, 6, ElementPhase.Unknown, ElementType.TransitionMetal),
      new Element(107,264.0,'Bh','Bohrium',0, 7, 7, ElementPhase.Unknown, ElementType.TransitionMetal),
      new Element(108,277.0,'Hs','Hassium',0, 7, 8, ElementPhase.Unknown, ElementType.TransitionMetal),
      new Element(109,268.0,'Mt','Meitnerium',0, 7, 9, ElementPhase.Unknown, ElementType.TransitionMetal),
      new Element(110,null,'Ds','Darmstadtium',0, 7, 10, ElementPhase.Unknown, ElementType.TransitionMetal),
      new Element(111,272.0,'Rg','Roentgenium',0, 7, 11, ElementPhase.Unknown, ElementType.TransitionMetal),

      new Element(112,null,'Uub','Ununbium',0, 7, 12, ElementPhase.Unknown, ElementType.TransitionMetal), // Cn?
      new Element(113,null,'Uut','Ununtium',0, 7, 13, ElementPhase.Unknown, ElementType.PostTransitionMetal), // Nh ?
      new Element(114,null,'Uuq','Ununquadrium',0, 7, 14, ElementPhase.Unknown, ElementType.PostTransitionMetal), // Fl?
      new Element(115,null,'Uup','Ununpentium',0, 7, 15, ElementPhase.Unknown, ElementType.PostTransitionMetal), // Mc ??
      new Element(116,null,'Uuh','Ununhexium',0, 7, 16, ElementPhase.Unknown, ElementType.PostTransitionMetal), // Lv ??
      new Element(117,null,'Uus','Ununseptium',0, 7, 17, ElementPhase.Unknown, ElementType.Halogen), // Ts ??
      new Element(118,null,'Uuo','Ununoctium',0, 7, 18, ElementPhase.Unknown, ElementType.Noblegas), // Og ??



      // Radioactive row 1
      new Element(57,138.9055,'La','Lanthanum',0, 8, 3, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(58,140.116,'Ce','Cerium',0, 8, 4, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(59,140.9077,'Pr','Praseodymium',0, 8, 5, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(60,144.24,'Nd','Neodymium',0, 8, 6, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(61,145,'Pm','Promethium',0, 8, 7, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(62,150.36,'Sm','Samarium',0, 8, 8, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(63,151.964,'Eu','Europium',0, 8, 9, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(64,157.25,'Gd','Gadolinium',0, 8, 10, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(65,158.9253,'Tb','Terbium',0, 8, 11, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(66,162.5,'Dy','Dysprosium',0, 8, 12, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(67,164.9303,'Ho','Holmium',0, 8, 13, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(68,167.259,'Er','Erbium',0, 8, 14, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(69,168.9342,'Tm','Thulium',0, 8, 15, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(70,173.04,'Yb','Ytterbium',0, 8, 16, ElementPhase.Solid, ElementType.Lanthanide),
      new Element(71,174.967,'Lu','Lutetium',0, 8, 17, ElementPhase.Solid, ElementType.Lanthanide),
      
      // Radioactive row 2
      new Element(89,227.0,'Ac','Actinium',0, 9, 3, ElementPhase.Solid, ElementType.Actinide),
      new Element(90,232.0381,'Th','Thorium',0, 9, 4, ElementPhase.Solid, ElementType.Actinide),
      new Element(91,231.0359,'Pa','Protactinium',0, 9, 5, ElementPhase.Solid, ElementType.Actinide),
      new Element(92,238.0289,'U','Uranium',0, 9, 6, ElementPhase.Solid, ElementType.Actinide),
      new Element(93,237.0,'Np','Neptunium',0, 9, 7, ElementPhase.Solid, ElementType.Actinide),
      new Element(94,244.0,'Pu','Plutonium',0, 9, 8, ElementPhase.Solid, ElementType.Actinide),
      new Element(95,243.0,'Am','Americium',0, 9, 9, ElementPhase.Solid, ElementType.Actinide),
      new Element(96,247.0,'Cm','Curium',0, 9, 10, ElementPhase.Solid, ElementType.Actinide),
      new Element(97,247.0,'Bk','Berkelium',0, 9, 11, ElementPhase.Solid, ElementType.Actinide),
      new Element(98,251.0,'Cf','Californium',0, 9, 12, ElementPhase.Solid, ElementType.Actinide),
      new Element(99,252.0,'Es','Einsteinium',0, 9, 13, ElementPhase.Solid, ElementType.Actinide),
      new Element(100,257.0,'Fm','Fermium',0, 9, 14, ElementPhase.Solid, ElementType.Actinide),
      new Element(101,258.0,'Md','Mendelevium',0, 9, 15, ElementPhase.Solid, ElementType.Actinide),
      new Element(102,259.0,'No','Nobelium',0, 9, 16, ElementPhase.Solid, ElementType.Actinide),
      new Element(103,262.0,'Lr','Lawrencium',0, 9, 17, ElementPhase.Solid, ElementType.Actinide),
      
    ];

  

  constructor() { }
}
