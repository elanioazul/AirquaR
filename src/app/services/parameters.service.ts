import { Injectable } from '@angular/core';
import { Parameter } from '../classes/parameter';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {


  public airParamSelected = 0;
  public meteoParamSelected = 0;

  public airParameters = [
    {Name: "select parameter", Id: 0},
    {Name: "dioxido de azufre", Id: 1},
    {Name: "monoxido de carbono", Id: 6},
    {Name: "monoxido de nitrogeno", Id: 7},
    {Name: "dioxido de nitrogeno", Id: 8},
    {Name: "particulas2.5", Id: 9},
    {Name: "particulas10", Id: 10},
    {Name: "oxidos de nitrogeno", Id: 12},
    {Name: "ozono", Id: 14},
    {Name: "tolueno", Id: 30},
    {Name: "etilbenceno", Id: 35},
    {Name: "hidrocarburos totales", Id: 42},
    {Name: "metano", Id: 43},
    {Name: "hidrocarburos no metalicos", Id: 44}
  ];

  public meteoParameters = [
    {Name: "select parameter", Id: 0},
    {Name: "radiacion ultrav.", Id: 80},
    {Name: "veloc.viento", Id: 81},
    {Name: "dir.viento", Id: 82},
    {Name: "Tª", Id: 83},
    {Name: "hum rel", Id: 86},
    {Name: "presion", Id: 87},
    {Name: "rad solar", Id: 88},
    {Name: "precipitacion", Id: 89}
  ];

  public meteoUnits: {
    "radiacion ultrav.": "Mw/m2",
    "veloc.viento": "m/s",
    "dir.viento": "-",
    "Tª": "ºC",
    "hum rel": "%",
    "presion": "mb",
    "rad solar": "Kw/m2",
    "precipitacion": "l/m2"
  };

  public airUnits: {
    "dioxido de azufre": "ug/m3",
    "monoxido de carbono": "mg/m3",
    "monoxido de nitrogeno": "ug/m3",
    "dioxido de nitrogeno": "ug/m3",
    "particulas2.5": "ug/m3",
    "particulas10": "ug/m3",
    "oxidos de nitrogeno": "ug/m3",
    "ozono": "ug/m3",
    "tolueno": "ug/m3",
    "etilbenceno": "ug/m3",
    "hidrocarburos totales": "mg/m3",
    "metano": "mg/m3",
    "hidrocarburos no metalicos": "mg/m3"
  };

  constructor() { }
}
