import { Injectable } from '@angular/core';

import { Element } from './element';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  public loadElements(): Element[]
  {
    let elements = [
      { atomicNumber: 1, atomicWeight: 1.0079, symbol: 'H', name: 'Hydrogen', electronsPerShell: 0},
      { atomicNumber: 2, atomicWeight: 4.0026, symbol: 'He', name: 'Helium', electronsPerShell: 0},
      { atomicNumber: 3, atomicWeight: 6.941, symbol: 'Li', name: 'Lithium', electronsPerShell: 0},
      { atomicNumber: 4, atomicWeight: 9.0122, symbol: 'Be', name: 'Beryllium', electronsPerShell: 0},
      { atomicNumber: 5, atomicWeight: 10.811, symbol: 'B', name: 'Boron', electronsPerShell: 0},
      { atomicNumber: 6, atomicWeight: 12.0107, symbol: 'C', name: 'Carbon', electronsPerShell: 0},
      { atomicNumber: 7, atomicWeight: 14.0067, symbol: 'N', name: 'Nitrogen', electronsPerShell: 0},
      { atomicNumber: 8, atomicWeight: 15.9994, symbol: 'O', name: 'Oxygen', electronsPerShell: 0},
      { atomicNumber: 9, atomicWeight: 18.9984, symbol: 'F', name: 'Fluorine', electronsPerShell: 0},
      { atomicNumber: 10, atomicWeight: 20.1797, symbol: 'Ne', name: 'Neon', electronsPerShell: 0},
      { atomicNumber: 11, atomicWeight: 22.9897, symbol: 'Na', name: 'Sodium', electronsPerShell: 0},
      { atomicNumber: 12, atomicWeight: 24.305, symbol: 'Mg', name: 'Magnesium', electronsPerShell: 0},
      { atomicNumber: 13, atomicWeight: 26.9815, symbol: 'Al', name: 'Aluminum', electronsPerShell: 0},
      { atomicNumber: 14, atomicWeight: 28.0855, symbol: 'Si', name: 'Silicon', electronsPerShell: 0},
      { atomicNumber: 15, atomicWeight: 30.9738, symbol: 'P', name: 'Phosphorus', electronsPerShell: 0},
      { atomicNumber: 16, atomicWeight: 32.065, symbol: 'S', name: 'Sulfur', electronsPerShell: 0},


      { atomicNumber: 17, atomicWeight: 35.453, symbol: 'Cl', name: 'Chlorine', electronsPerShell: 0},
      { atomicNumber: 18, atomicWeight: 39.948, symbol: 'Ar', name: 'Argon', electronsPerShell: 0},
      { atomicNumber: 19, atomicWeight: 39.0983, symbol: 'K', name: 'Potassium', electronsPerShell: 0},
      { atomicNumber: 20, atomicWeight: 40.078, symbol: 'Ca', name: 'Calcium', electronsPerShell: 0},
      { atomicNumber: 21, atomicWeight: 44.9559, symbol: 'Sc', name: 'Scandium', electronsPerShell: 0},
      { atomicNumber: 22, atomicWeight: 47.867, symbol: 'Ti', name: 'Titanium', electronsPerShell: 0},
      { atomicNumber: 23, atomicWeight: 50.9415, symbol: 'V', name: 'Vanadium', electronsPerShell: 0},
      { atomicNumber: 24, atomicWeight: 51.9961, symbol: 'Cr', name: 'Chromium', electronsPerShell: 0},
      { atomicNumber: 25, atomicWeight: 54.938, symbol: 'Mn', name: 'Manganese', electronsPerShell: 0},
      { atomicNumber: 26, atomicWeight: 55.845, symbol: 'Fe', name: 'Iron', electronsPerShell: 0},
      { atomicNumber: 27, atomicWeight: 58.9332, symbol: 'Co', name: 'Cobalt', electronsPerShell: 0},
      { atomicNumber: 28, atomicWeight: 58.6934, symbol: 'Ni', name: 'Nickel', electronsPerShell: 0},
      { atomicNumber: 29, atomicWeight: 63.546, symbol: 'Cu', name: 'Copper', electronsPerShell: 0},


      { atomicNumber: 30, atomicWeight: 65.39, symbol: 'Zn', name: 'Zinc', electronsPerShell: 0},
      { atomicNumber: 31, atomicWeight: 69.723, symbol: 'Ga', name: 'Gallium', electronsPerShell: 0},
      { atomicNumber: 32, atomicWeight: 72.64, symbol: 'Ge', name: 'Germanium', electronsPerShell: 0},
      { atomicNumber: 33, atomicWeight: 74.9216, symbol: 'As', name: 'Arsenic', electronsPerShell: 0},
      { atomicNumber: 34, atomicWeight: 78.96, symbol: 'Se', name: 'Selenium', electronsPerShell: 0},
      { atomicNumber: 35, atomicWeight: 79.904, symbol: 'Br', name: 'Bromine', electronsPerShell: 0},
      { atomicNumber: 36, atomicWeight: 83.8, symbol: 'Kr', name: 'Krypton', electronsPerShell: 0},
      { atomicNumber: 37, atomicWeight: 85.4678, symbol: 'Rb', name: 'Rubidium', electronsPerShell: 0},
      { atomicNumber: 38, atomicWeight: 87.62, symbol: 'Sr', name: 'Strontium', electronsPerShell: 0},
      { atomicNumber: 39, atomicWeight: 88.9059, symbol: 'Y', name: 'Yttrium', electronsPerShell: 0},
      { atomicNumber: 40, atomicWeight: 91.224, symbol: 'Zr', name: 'Zirconium', electronsPerShell: 0},
      { atomicNumber: 41, atomicWeight: 92.9064, symbol: 'Nb', name: 'Niobium', electronsPerShell: 0},
      { atomicNumber: 42, atomicWeight: 95.94, symbol: 'Mo', name: 'Molybdenum', electronsPerShell: 0},
      { atomicNumber: 43, atomicWeight: 98.0, symbol: 'Tc', name: 'Technetium', electronsPerShell: 0},
      { atomicNumber: 44, atomicWeight: 101.07, symbol: 'Ru', name: 'Ruthenium', electronsPerShell: 0},
      { atomicNumber: 45, atomicWeight: 102.9055, symbol: 'Rh', name: 'Rhodium', electronsPerShell: 0},
      { atomicNumber: 46, atomicWeight: 106.42, symbol: 'Pd', name: 'Palladium', electronsPerShell: 0},
      { atomicNumber: 47, atomicWeight: 107.8682, symbol: 'Ag', name: 'Silver', electronsPerShell: 0},
      { atomicNumber: 48, atomicWeight: 112.411, symbol: 'Cd', name: 'Cadmium', electronsPerShell: 0},
      { atomicNumber: 49, atomicWeight: 114.818, symbol: 'In', name: 'Indium', electronsPerShell: 0},
      { atomicNumber: 50, atomicWeight: 118.71, symbol: 'Sn', name: 'Tin', electronsPerShell: 0},
      { atomicNumber: 51, atomicWeight: 121.76, symbol: 'Sb', name: 'Antimony', electronsPerShell: 0},
      { atomicNumber: 52, atomicWeight: 127.6, symbol: 'Te', name: 'Tellurium', electronsPerShell: 0},
      { atomicNumber: 53, atomicWeight: 126.9045, symbol: 'I', name: 'Iodine', electronsPerShell: 0},
      { atomicNumber: 54, atomicWeight: 131.293, symbol: 'Xe', name: 'Xenon', electronsPerShell: 0},
      { atomicNumber: 55, atomicWeight: 132.9055, symbol: 'Cs', name: 'Cesium', electronsPerShell: 0},
      { atomicNumber: 56, atomicWeight: 137.327, symbol: 'Ba', name: 'Barium', electronsPerShell: 0},
      { atomicNumber: 57, atomicWeight: 138.9055, symbol: 'La', name: 'Lanthanum', electronsPerShell: 0},
      { atomicNumber: 58, atomicWeight: 140.116, symbol: 'Ce', name: 'Cerium', electronsPerShell: 0},
      { atomicNumber: 59, atomicWeight: 140.9077, symbol: 'Pr', name: 'Praseodymium', electronsPerShell: 0},
      { atomicNumber: 60, atomicWeight: 144.24, symbol: 'Nd', name: 'Neodymium', electronsPerShell: 0},
      { atomicNumber: 61, atomicWeight: 145, symbol: 'Pm', name: 'Promethium', electronsPerShell: 0},
      { atomicNumber: 62, atomicWeight: 150.36, symbol: 'Sm', name: 'Samarium', electronsPerShell: 0},
      { atomicNumber: 63, atomicWeight: 151.964, symbol: 'Eu', name: 'Europium', electronsPerShell: 0},
      { atomicNumber: 64, atomicWeight: 157.25, symbol: 'Gd', name: 'Gadolinium', electronsPerShell: 0},
      { atomicNumber: 65, atomicWeight: 158.9253, symbol: 'Tb', name: 'Terbium', electronsPerShell: 0},
      { atomicNumber: 66, atomicWeight: 162.5, symbol: 'Dy', name: 'Dysprosium', electronsPerShell: 0},
      { atomicNumber: 67, atomicWeight: 164.9303, symbol: 'Ho', name: 'Holmium', electronsPerShell: 0},
      { atomicNumber: 68, atomicWeight: 167.259, symbol: 'Er', name: 'Erbium', electronsPerShell: 0},
      { atomicNumber: 69, atomicWeight: 168.9342, symbol: 'Tm', name: 'Thulium', electronsPerShell: 0},
      { atomicNumber: 70, atomicWeight: 173.04, symbol: 'Yb', name: 'Ytterbium', electronsPerShell: 0},
      { atomicNumber: 71, atomicWeight: 174.967, symbol: 'Lu', name: 'Lutetium', electronsPerShell: 0},
      { atomicNumber: 72, atomicWeight: 178.49, symbol: 'Hf', name: 'Hafnium', electronsPerShell: 0},
      { atomicNumber: 73, atomicWeight: 180.9479, symbol: 'Ta', name: 'Tantalum', electronsPerShell: 0},
      { atomicNumber: 74, atomicWeight: 183.64, symbol: 'W', name: 'Tungsten', electronsPerShell: 0},
      { atomicNumber: 75, atomicWeight: 186.207, symbol: 'Re', name: 'Rhenium', electronsPerShell: 0},
      { atomicNumber: 76, atomicWeight: 190.23, symbol: 'Os', name: 'Osmium', electronsPerShell: 0},
      { atomicNumber: 77, atomicWeight: 192.217, symbol: 'Ir', name: 'Iridium', electronsPerShell: 0},
      { atomicNumber: 78, atomicWeight: 195.078, symbol: 'Pt', name: 'Platinum', electronsPerShell: 0},
      { atomicNumber: 79, atomicWeight: 196.9665, symbol: 'Au', name: 'Gold', electronsPerShell: 0},
      { atomicNumber: 80, atomicWeight: 200.59, symbol: 'Hg', name: 'Mercury', electronsPerShell: 0},
      { atomicNumber: 81, atomicWeight: 204.3833, symbol: 'Tl', name: 'Thallium', electronsPerShell: 0},
      { atomicNumber: 82, atomicWeight: 207.2, symbol: 'Pb', name: 'Lead', electronsPerShell: 0},
      { atomicNumber: 83, atomicWeight: 208.9804, symbol: 'Bi', name: 'Bismuth', electronsPerShell: 0},
      { atomicNumber: 84, atomicWeight: 209.0, symbol: 'Po', name: 'Polonium', electronsPerShell: 0},
      { atomicNumber: 85, atomicWeight: 210.0, symbol: 'At', name: 'Astatine', electronsPerShell: 0},
      { atomicNumber: 86, atomicWeight: 222.0, symbol: 'Rn', name: 'Radon', electronsPerShell: 0},
      { atomicNumber: 87, atomicWeight: 223.0, symbol: 'Fr', name: 'Francium', electronsPerShell: 0},
      { atomicNumber: 88, atomicWeight: 226.0, symbol: 'Ra', name: 'Radium', electronsPerShell: 0},
      { atomicNumber: 89, atomicWeight: 227.0, symbol: 'Ac', name: 'Actinium', electronsPerShell: 0},
      { atomicNumber: 90, atomicWeight: 232.0381, symbol: 'Th', name: 'Thorium', electronsPerShell: 0},
      { atomicNumber: 91, atomicWeight: 231.0359, symbol: 'Pa', name: 'Protactinium', electronsPerShell: 0},
      { atomicNumber: 92, atomicWeight: 238.0289, symbol: 'U', name: 'Uranium', electronsPerShell: 0},
      { atomicNumber: 93, atomicWeight: 237.0, symbol: 'Np', name: 'Neptunium', electronsPerShell: 0},
      { atomicNumber: 94, atomicWeight: 244.0, symbol: 'Pu', name: 'Plutonium', electronsPerShell: 0},
      { atomicNumber: 95, atomicWeight: 243.0, symbol: 'Am', name: 'Americium', electronsPerShell: 0},
      { atomicNumber: 96, atomicWeight: 247.0, symbol: 'Cm', name: 'Curium', electronsPerShell: 0},
      { atomicNumber: 97, atomicWeight: 247.0, symbol: 'Bk', name: 'Berkelium', electronsPerShell: 0},
      { atomicNumber: 98, atomicWeight: 251.0, symbol: 'Cf', name: 'Californium', electronsPerShell: 0},
      { atomicNumber: 99, atomicWeight: 252.0, symbol: 'Es', name: 'Einsteinium', electronsPerShell: 0},
      { atomicNumber: 100, atomicWeight: 257.0, symbol: 'Fm', name: 'Fermium', electronsPerShell: 0},
      { atomicNumber: 101, atomicWeight: 258.0, symbol: 'Md', name: 'Mendelevium', electronsPerShell: 0},
      { atomicNumber: 102, atomicWeight: 259.0, symbol: 'No', name: 'Nobelium', electronsPerShell: 0},
      { atomicNumber: 103, atomicWeight: 262.0, symbol: 'Lr', name: 'Lawrencium', electronsPerShell: 0},
      { atomicNumber: 104, atomicWeight: 261.0, symbol: 'Rf', name: 'Rutherfordium', electronsPerShell: 0},
      { atomicNumber: 105, atomicWeight: 262.0, symbol: 'Db', name: 'Dubnium', electronsPerShell: 0},
      { atomicNumber: 106, atomicWeight: 266.0, symbol: 'Sg', name: 'Seaborgium', electronsPerShell: 0},
      { atomicNumber: 107, atomicWeight: 264.0, symbol: 'Bh', name: 'Bohrium', electronsPerShell: 0},
      { atomicNumber: 108, atomicWeight: 277.0, symbol: 'Hs', name: 'Hassium', electronsPerShell: 0},
      { atomicNumber: 109, atomicWeight: 268.0, symbol: 'Mt', name: 'Meitnerium', electronsPerShell: 0},
      { atomicNumber: 110, atomicWeight: null, symbol: 'Ds', name: 'Darmstadtium', electronsPerShell: 0},
      { atomicNumber: 111, atomicWeight: 272.0, symbol: 'Rg', name: 'Roentgenium', electronsPerShell: 0},
      { atomicNumber: 112, atomicWeight: null, symbol: 'Uub', name: 'Ununbium', electronsPerShell: 0},
      { atomicNumber: 113, atomicWeight: null, symbol: 'Uut', name: 'Ununtium', electronsPerShell: 0},
      { atomicNumber: 114, atomicWeight: null, symbol: 'Uuq', name: 'Ununquadrium', electronsPerShell: 0},
      { atomicNumber: 115, atomicWeight: null, symbol: 'Uup', name: 'Ununpentium', electronsPerShell: 0},
      { atomicNumber: 116, atomicWeight: null, symbol: 'Uuh', name: 'Ununhexium', electronsPerShell: 0},
      { atomicNumber: 117, atomicWeight: null, symbol: 'Uus', name: 'Ununseptium', electronsPerShell: 0},
      { atomicNumber: 118, atomicWeight: null, symbol: 'Uuo', name: 'Ununoctium', electronsPerShell: 0}
    ];


    return elements;
  }

  constructor() { }
}
