import { Injectable } from '@angular/core';

import { Element } from './element';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  public elements: Element[] = [
      new Element( 1,   1.0079,    'H',   'Hydrogen',    0),
      new Element( 2,   4.0026,    'He',   'Helium',    0),
      new Element( 3,   6.941,    'Li',   'Lithium',    0),
      new Element( 4,   9.0122,    'Be',   'Beryllium',    0),
      new Element( 5,   10.811,    'B',   'Boron',    0),
      new Element( 6,   12.0107,    'C',   'Carbon',    0),
      new Element( 7,   14.0067,    'N',   'Nitrogen',    0),
      new Element( 8,   15.9994,    'O',   'Oxygen',    0),
      new Element( 9,   18.9984,    'F',   'Fluorine',    0),
      new Element( 10,   20.1797,    'Ne',   'Neon',    0),
      new Element( 11,   22.9897,    'Na',   'Sodium',    0),
      new Element( 12,   24.305,    'Mg',   'Magnesium',    0),
      new Element( 13,   26.9815,    'Al',   'Aluminum',    0),
      new Element( 14,   28.0855,    'Si',   'Silicon',    0),
      new Element( 15,   30.9738,    'P',   'Phosphorus',    0),
      new Element( 16,   32.065,    'S',   'Sulfur',    0),


      new Element( 17,   35.453,    'Cl',   'Chlorine',    0),
      new Element( 18,   39.948,    'Ar',   'Argon',    0),
      new Element( 19,   39.0983,    'K',   'Potassium',    0),
      new Element( 20,   40.078,    'Ca',   'Calcium',    0),
      new Element( 21,   44.9559,    'Sc',   'Scandium',    0),
      new Element( 22,   47.867,    'Ti',   'Titanium',    0),
      new Element( 23,   50.9415,    'V',   'Vanadium',    0),
      new Element( 24,   51.9961,    'Cr',   'Chromium',    0),
      new Element( 25,   54.938,    'Mn',   'Manganese',    0),
      new Element( 26,   55.845,    'Fe',   'Iron',    0),
      new Element( 27,   58.9332,    'Co',   'Cobalt',    0),
      new Element( 28,   58.6934,    'Ni',   'Nickel',    0),
      new Element( 29,   63.546,    'Cu',   'Copper',    0),


      new Element( 30,   65.39,    'Zn',   'Zinc',    0),
      new Element( 31,   69.723,    'Ga',   'Gallium',    0),
      new Element( 32,   72.64,    'Ge',   'Germanium',    0),
      new Element( 33,   74.9216,    'As',   'Arsenic',    0),
      new Element( 34,   78.96,    'Se',   'Selenium',    0),
      new Element( 35,   79.904,    'Br',   'Bromine',    0),
      new Element( 36,   83.8,    'Kr',   'Krypton',    0),
      new Element( 37,   85.4678,    'Rb',   'Rubidium',    0),
      new Element( 38,   87.62,    'Sr',   'Strontium',    0),
      new Element( 39,   88.9059,    'Y',   'Yttrium',    0),
      new Element( 40,   91.224,    'Zr',   'Zirconium',    0),
      new Element( 41,   92.9064,    'Nb',   'Niobium',    0),
      new Element( 42,   95.94,    'Mo',   'Molybdenum',    0),
      new Element( 43,   98.0,    'Tc',   'Technetium',    0),
      new Element( 44,   101.07,    'Ru',   'Ruthenium',    0),
      new Element( 45,   102.9055,    'Rh',   'Rhodium',    0),
      new Element( 46,   106.42,    'Pd',   'Palladium',    0),
      new Element( 47,   107.8682,    'Ag',   'Silver',    0),
      new Element( 48,   112.411,    'Cd',   'Cadmium',    0),
      new Element( 49,   114.818,    'In',   'Indium',    0),
      new Element( 50,   118.71,    'Sn',   'Tin',    0),
      new Element( 51,   121.76,    'Sb',   'Antimony',    0),
      new Element( 52,   127.6,    'Te',   'Tellurium',    0),
      new Element( 53,   126.9045,    'I',   'Iodine',    0),
      new Element( 54,   131.293,    'Xe',   'Xenon',    0),
      new Element( 55,   132.9055,    'Cs',   'Cesium',    0),
      new Element( 56,   137.327,    'Ba',   'Barium',    0),
      new Element( 57,   138.9055,    'La',   'Lanthanum',    0),
      new Element( 58,   140.116,    'Ce',   'Cerium',    0),
      new Element( 59,   140.9077,    'Pr',   'Praseodymium',    0),
      new Element( 60,   144.24,    'Nd',   'Neodymium',    0),
      new Element( 61,   145,    'Pm',   'Promethium',    0),
      new Element( 62,   150.36,    'Sm',   'Samarium',    0),
      new Element( 63,   151.964,    'Eu',   'Europium',    0),
      new Element( 64,   157.25,    'Gd',   'Gadolinium',    0),
      new Element( 65,   158.9253,    'Tb',   'Terbium',    0),
      new Element( 66,   162.5,    'Dy',   'Dysprosium',    0),
      new Element( 67,   164.9303,    'Ho',   'Holmium',    0),
      new Element( 68,   167.259,    'Er',   'Erbium',    0),
      new Element( 69,   168.9342,    'Tm',   'Thulium',    0),
      new Element( 70,   173.04,    'Yb',   'Ytterbium',    0),
      new Element( 71,   174.967,    'Lu',   'Lutetium',    0),
      new Element( 72,   178.49,    'Hf',   'Hafnium',    0),
      new Element( 73,   180.9479,    'Ta',   'Tantalum',    0),
      new Element( 74,   183.64,    'W',   'Tungsten',    0),
      new Element( 75,   186.207,    'Re',   'Rhenium',    0),
      new Element( 76,   190.23,    'Os',   'Osmium',    0),
      new Element( 77,   192.217,    'Ir',   'Iridium',    0),
      new Element( 78,   195.078,    'Pt',   'Platinum',    0),
      new Element( 79,   196.9665,    'Au',   'Gold',    0),
      new Element( 80,   200.59,    'Hg',   'Mercury',    0),
      new Element( 81,   204.3833,    'Tl',   'Thallium',    0),
      new Element( 82,   207.2,    'Pb',   'Lead',    0),
      new Element( 83,   208.9804,    'Bi',   'Bismuth',    0),
      new Element( 84,   209.0,    'Po',   'Polonium',    0),
      new Element( 85,   210.0,    'At',   'Astatine',    0),
      new Element( 86,   222.0,    'Rn',   'Radon',    0),
      new Element( 87,   223.0,    'Fr',   'Francium',    0),
      new Element( 88,   226.0,    'Ra',   'Radium',    0),
      new Element( 89,   227.0,    'Ac',   'Actinium',    0),
      new Element( 90,   232.0381,    'Th',   'Thorium',    0),
      new Element( 91,   231.0359,    'Pa',   'Protactinium',    0),
      new Element( 92,   238.0289,    'U',   'Uranium',    0),
      new Element( 93,   237.0,    'Np',   'Neptunium',    0),
      new Element( 94,   244.0,    'Pu',   'Plutonium',    0),
      new Element( 95,   243.0,    'Am',   'Americium',    0),
      new Element( 96,   247.0,    'Cm',   'Curium',    0),
      new Element( 97,   247.0,    'Bk',   'Berkelium',    0),
      new Element( 98,   251.0,    'Cf',   'Californium',    0),
      new Element( 99,   252.0,    'Es',   'Einsteinium',    0),
      new Element( 100,   257.0,    'Fm',   'Fermium',    0),
      new Element( 101,   258.0,    'Md',   'Mendelevium',    0),
      new Element( 102,   259.0,    'No',   'Nobelium',    0),
      new Element( 103,   262.0,    'Lr',   'Lawrencium',    0),
      new Element( 104,   261.0,    'Rf',   'Rutherfordium',    0),
      new Element( 105,   262.0,    'Db',   'Dubnium',    0),
      new Element( 106,   266.0,    'Sg',   'Seaborgium',    0),
      new Element( 107,   264.0,    'Bh',   'Bohrium',    0),
      new Element( 108,   277.0,    'Hs',   'Hassium',    0),
      new Element( 109,   268.0,    'Mt',   'Meitnerium',    0),
      new Element( 110,   null,    'Ds',   'Darmstadtium',    0),
      new Element( 111,   272.0,    'Rg',   'Roentgenium',    0),
      new Element( 112,   null,    'Uub',   'Ununbium',    0),
      new Element( 113,   null,    'Uut',   'Ununtium',    0),
      new Element( 114,   null,    'Uuq',   'Ununquadrium',    0),
      new Element( 115,   null,    'Uup',   'Ununpentium',    0),
      new Element( 116,   null,    'Uuh',   'Ununhexium',    0),
      new Element( 117,   null,    'Uus',   'Ununseptium',    0),
      new Element( 118,   null,    'Uuo',   'Ununoctium',   0)
    ];

  

  constructor() { }
}
