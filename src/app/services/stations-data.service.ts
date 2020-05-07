import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoJSON } from '../classes/map';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationsDataService {

  //mierda mockAPI que solo acepta JSON no geoJSON
  private _mokapiAir = 'https://5e8afb4dbe5500001689e45f.mockapi.io/api/v1/airStations';
  private _mokapiMeteo = 'https://5e8afb4dbe5500001689e45f.mockapi.io/api/v1/meteoStations';

  public airStationsGeoJSON: any = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.712257, 40.423882]
        },
        "properties": {
            "cartodb_id": 1,
            "codigo": 28079004,
            "codigo_corto": 4,
            "estacion": "Pza. de España",
            "direccion": "Plaza de España",
            "longitud_etrs89": "3°42'43.91\"O",
            "latitud_etrs89": "40°25'25.98\"N",
            "altitud": 637,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "X",
            "co": "X",
            "pm10": "",
            "pm2_5": "",
            "o3": "",
            "btx": "",
            "hc": "",
            "cod_via": 273600,
            "via_clase": "PLAZA",
            "via_par": "DE",
            "via_nombre": "ESPAÑA",
            "fecha_alta": "01/12/1998",
            "coordenada_x_etrs89": "439579,3291",
            "coordenada_y_etrs89": "4475049,263",
            "longitud": -3.7122567,
            "latitud": 40.4238823
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.682316, 40.421553]
        },
        "properties": {
            "cartodb_id": 2,
            "codigo": 28079008,
            "codigo_corto": 8,
            "estacion": "Escuelas Aguirre",
            "direccion": "Entre C/ Alcalá y C/ O’ Donell ",
            "longitud_etrs89": "3°40'56.22\"O",
            "latitud_etrs89": "40°25'17.63\"N",
            "altitud": 672,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "X",
            "co": "X",
            "pm10": "X",
            "pm2_5": "X",
            "o3": "X",
            "btx": "X",
            "hc": "X",
            "cod_via": 18900,
            "via_clase": "CALLE",
            "via_par": "DE",
            "via_nombre": "ALCALA",
            "fecha_alta": "01/12/1998",
            "coordenada_x_etrs89": "442117,2366",
            "coordenada_y_etrs89": "4474770,696",
            "longitud": -3.6823158,
            "latitud": 40.4215533
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.677349, 40.451473]
        },
        "properties": {
            "cartodb_id": 3,
            "codigo": 28079011,
            "codigo_corto": 11,
            "estacion": "Avda. Ramón y Cajal",
            "direccion": "Avda. Ramón y Cajal  esq. C/ Príncipe de Vergara",
            "longitud_etrs89": "3°40'38.50\"O",
            "latitud_etrs89": "40°27'5.29\"N",
            "altitud": 708,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "",
            "pm2_5": "",
            "o3": "",
            "btx": "X",
            "hc": "",
            "cod_via": 610450,
            "via_clase": "CALLE",
            "via_par": "DEL",
            "via_nombre": "PRINCIPE DE VERGARA",
            "fecha_alta": "01/12/1998",
            "coordenada_x_etrs89": "442564,0457",
            "coordenada_y_etrs89": "4478088,595",
            "longitud": -3.6773491,
            "latitud": 40.4514734
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.639242, 40.440046]
        },
        "properties": {
            "cartodb_id": 4,
            "codigo": 28079016,
            "codigo_corto": 16,
            "estacion": "Arturo Soria",
            "direccion": "C/ Arturo Soria  esq. C/  Vizconde de los Asilos ",
            "longitud_etrs89": "3°38'21.17\"O",
            "latitud_etrs89": "40°26'24.20\"N",
            "altitud": 695,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "",
            "co": "X",
            "pm10": "",
            "pm2_5": "",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 798700,
            "via_clase": "CALLE",
            "via_par": "DEL",
            "via_nombre": "VIZCONDE DE LOS ASILOS",
            "fecha_alta": "01/12/1998",
            "coordenada_x_etrs89": "445786,1729",
            "coordenada_y_etrs89": "4476796,019",
            "longitud": -3.6392422,
            "latitud": 40.4400457
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.713317, 40.347147]
        },
        "properties": {
            "cartodb_id": 5,
            "codigo": 28079017,
            "codigo_corto": 17,
            "estacion": "Villaverde",
            "direccion": "C/. Juan Peñalver",
            "longitud_etrs89": "3°42'47.89\"O",
            "latitud_etrs89": "40°20'49.74\"N",
            "altitud": 601,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "X",
            "co": "",
            "pm10": "",
            "pm2_5": "",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 417200,
            "via_clase": "CALLE",
            "via_par": "DE",
            "via_nombre": "JUAN PEÑALVER",
            "fecha_alta": "01/12/1998",
            "coordenada_x_etrs89": "439420,7015",
            "coordenada_y_etrs89": "4466532,455",
            "longitud": -3.7133167,
            "latitud": 40.347147
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.731836, 40.394782]
        },
        "properties": {
            "cartodb_id": 6,
            "codigo": 28079018,
            "codigo_corto": 18,
            "estacion": "Farolillo",
            "direccion": "Calle Farolillo - C/Ervigio",
            "longitud_etrs89": "3°43'54.61\"O",
            "latitud_etrs89": "40°23'41.22\"N",
            "altitud": 632,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "X",
            "co": "X",
            "pm10": "X",
            "pm2_5": "",
            "o3": "X",
            "btx": "X",
            "hc": "",
            "cod_via": 1903,
            "via_clase": "CALLE",
            "via_par": "DEL",
            "via_nombre": "FAROLILLO",
            "fecha_alta": "31/03/2001",
            "coordenada_x_etrs89": "437891,6961",
            "coordenada_y_etrs89": "4471832,769",
            "longitud": -3.7318356,
            "latitud": 40.3947825
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.580026, 40.476918]
        },
        "properties": {
            "cartodb_id": 8,
            "codigo": 28079027,
            "codigo_corto": 27,
            "estacion": "Barajas Pueblo",
            "direccion": "C/. Júpiter, 21 (Barajas) ",
            "longitud_etrs89": "3°34'48.10\"O",
            "latitud_etrs89": "40°28'36.93\"N",
            "altitud": 620,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "",
            "pm2_5": "",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 425700,
            "via_clase": "CALLE",
            "via_par": "DE",
            "via_nombre": "JUPITER",
            "fecha_alta": "31/12/2002",
            "coordenada_x_etrs89": "450835,2026",
            "coordenada_y_etrs89": "4480854,172",
            "longitud": -3.5800258,
            "latitud": 40.4769179
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.747345, 40.419358]
        },
        "properties": {
            "cartodb_id": 7,
            "codigo": 28079024,
            "codigo_corto": 24,
            "estacion": "Casa de Campo",
            "direccion": "Casa de Campo  (Terminal del Teleférico)",
            "longitud_etrs89": "3°44'50.44\"O",
            "latitud_etrs89": "40°25'9.69\"N",
            "altitud": 646,
            "cod_tipo": "S",
            "nom_tipo": "Suburbana",
            "no2": "X",
            "so2": "X",
            "co": "X",
            "pm10": "X",
            "pm2_5": "X",
            "o3": "X",
            "btx": "X",
            "hc": "X",
            "cod_via": 905219,
            "via_clase": "CARRETERA",
            "via_par": "DEL",
            "via_nombre": "TELEFERICO",
            "fecha_alta": "01/12/1998",
            "coordenada_x_etrs89": "436598,5637",
            "coordenada_y_etrs89": "4474571,618",
            "longitud": -3.7473445,
            "latitud": 40.4193577
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.703166, 40.419209]
        },
        "properties": {
            "cartodb_id": 9,
            "codigo": 28079035,
            "codigo_corto": 35,
            "estacion": "Pza. del Carmen",
            "direccion": "Plaza del Carmen esq. Tres Cruces. ",
            "longitud_etrs89": "3°42'11.40\"O",
            "latitud_etrs89": "40°25'9.15\"N",
            "altitud": 660,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "X",
            "co": "X",
            "pm10": "",
            "pm2_5": "",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 145800,
            "via_clase": "PLAZA",
            "via_par": "DEL",
            "via_nombre": "CARMEN",
            "fecha_alta": "01/11/1999",
            "coordenada_x_etrs89": "440346,3619",
            "coordenada_y_etrs89": "4474524,357",
            "longitud": -3.7031662,
            "latitud": 40.4192091
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.64531, 40.407952]
        },
        "properties": {
            "cartodb_id": 10,
            "codigo": 28079036,
            "codigo_corto": 36,
            "estacion": "Moratalaz",
            "direccion": "Avd. Moratalaz  esq. Camino de los Vinateros",
            "longitud_etrs89": "3°38'43.02\"O",
            "latitud_etrs89": "40°24'28.64\"N",
            "altitud": 671,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "X",
            "co": "X",
            "pm10": "X",
            "pm2_5": "",
            "o3": "",
            "btx": "",
            "hc": "",
            "cod_via": 522000,
            "via_clase": "AVENIDA",
            "via_par": "DE",
            "via_nombre": "MORATALAZ",
            "fecha_alta": "01/12/1998",
            "coordenada_x_etrs89": "445245,513",
            "coordenada_y_etrs89": "4473237,349",
            "longitud": -3.6453104,
            "latitud": 40.4079517
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.70713, 40.445544]
        },
        "properties": {
            "cartodb_id": 11,
            "codigo": 28079038,
            "codigo_corto": 38,
            "estacion": "Cuatro Caminos",
            "direccion": "Avda. Pablo Iglesias esq. C/ Marqués de Lema",
            "longitud_etrs89": "3°42'25.64\"O",
            "latitud_etrs89": "40°26'43.97\"N",
            "altitud": 699,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "X",
            "co": "",
            "pm10": "X",
            "pm2_5": "X",
            "o3": "",
            "btx": "X",
            "hc": "",
            "cod_via": 554550,
            "via_clase": "AVENIDA",
            "via_par": "DE",
            "via_nombre": "PABLO IGLESIAS",
            "fecha_alta": "01/11/1998",
            "coordenada_x_etrs89": "440033,4632",
            "coordenada_y_etrs89": "4477450,211",
            "longitud": -3.7071303,
            "latitud": 40.4455439
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.711536, 40.478232]
        },
        "properties": {
            "cartodb_id": 12,
            "codigo": 28079039,
            "codigo_corto": 39,
            "estacion": "Barrio del Pilar",
            "direccion": "Avd. Betanzos esq. C/  Monforte de Lemos ",
            "longitud_etrs89": "3°42'41.53\"O",
            "latitud_etrs89": "40°28'41.64\"N",
            "altitud": 676,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "",
            "co": "X",
            "pm10": "",
            "pm2_5": "",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 514425,
            "via_clase": "AVENIDA",
            "via_par": "DE",
            "via_nombre": "MONFORTE DE LEMOS",
            "fecha_alta": "01/05/1998",
            "coordenada_x_etrs89": "439689,0496",
            "coordenada_y_etrs89": "4481081,619",
            "longitud": -3.7115364,
            "latitud": 40.4782322
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.651529, 40.388148]
        },
        "properties": {
            "cartodb_id": 13,
            "codigo": 28079040,
            "codigo_corto": 40,
            "estacion": "Vallecas",
            "direccion": "C/ Arroyo del Olivar  esq. C/  Río Grande. ",
            "longitud_etrs89": "3°39'5.50\"O",
            "latitud_etrs89": "40°23'17.33\"N",
            "altitud": 677,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "X",
            "co": "",
            "pm10": "X",
            "pm2_5": "",
            "o3": "",
            "btx": "",
            "hc": "",
            "cod_via": 75500,
            "via_clase": "CALLE",
            "via_par": "DEL",
            "via_nombre": "ARROYO DEL OLIVAR",
            "fecha_alta": "30/09/1999",
            "coordenada_x_etrs89": "444701,6871",
            "coordenada_y_etrs89": "4471043,01",
            "longitud": -3.6515286,
            "latitud": 40.3881478
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.686814, 40.398099]
        },
        "properties": {
            "cartodb_id": 14,
            "codigo": 28079047,
            "codigo_corto": 47,
            "estacion": "Mendez Alvaro",
            "direccion": "C/ Juan de Mariana / Pza. Amanecer Mendez Alvaro",
            "longitud_etrs89": "3°41'12.57\"O",
            "latitud_etrs89": "40°23'53.17\"N",
            "altitud": 600,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "X",
            "pm2_5": "X",
            "o3": "",
            "btx": "",
            "hc": "",
            "cod_via": 414800,
            "via_clase": "CALLE",
            "via_par": "DE",
            "via_nombre": "JUAN DE MARIANA",
            "fecha_alta": "21/12/2009",
            "coordenada_x_etrs89": "441715,4303",
            "coordenada_y_etrs89": "4472170,249",
            "longitud": -3.6868138,
            "latitud": 40.3980991
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.690373, 40.43989]
        },
        "properties": {
            "cartodb_id": 15,
            "codigo": 28079048,
            "codigo_corto": 48,
            "estacion": "Castellana",
            "direccion": "C/ Jose Gutierrez Abascal",
            "longitud_etrs89": "3°41'25.34\"O",
            "latitud_etrs89": "40°26'23.61\"N",
            "altitud": 680,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "X",
            "pm2_5": "X",
            "o3": "",
            "btx": "",
            "hc": "",
            "cod_via": 401400,
            "via_clase": "CALLE",
            "via_par": "DE",
            "via_nombre": "JOSE GUTIERREZ ABASCAL",
            "fecha_alta": "01/02/2010",
            "coordenada_x_etrs89": "441449,6341",
            "coordenada_y_etrs89": "4476811,42",
            "longitud": -3.6903729,
            "latitud": 40.4398904
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.6825, 40.414444]
        },
        "properties": {
            "cartodb_id": 16,
            "codigo": 28079049,
            "codigo_corto": 49,
            "estacion": "Parque del Retiro",
            "direccion": "Paseo Venezuela- Casa de Vacas",
            "longitud_etrs89": "3º 40' 57''O",
            "latitud_etrs89": "40º 24' 52''N",
            "altitud": 662,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "",
            "pm2_5": "",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 905011,
            "via_clase": "PASEO",
            "via_par": "DE",
            "via_nombre": "VENEZUELA",
            "fecha_alta": "01/01/2010",
            "coordenada_x_etrs89": "442095,52",
            "coordenada_y_etrs89": "4473981,74",
            "longitud": -3.68249999999999,
            "latitud": 40.4144444444444
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.688745, 40.465584]
        },
        "properties": {
            "cartodb_id": 17,
            "codigo": 28079050,
            "codigo_corto": 50,
            "estacion": "Plaza Castilla",
            "direccion": "Plaza Castilla (Canal)",
            "longitud_etrs89": "3°41'19.48\"O",
            "latitud_etrs89": "40°27'56.10\"N",
            "altitud": 728,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "X",
            "pm2_5": "X",
            "o3": "",
            "btx": "",
            "hc": "",
            "cod_via": 154500,
            "via_clase": "PLAZA",
            "via_par": "DE",
            "via_nombre": "CASTILLA",
            "fecha_alta": "01/02/2010",
            "coordenada_x_etrs89": "441609,9474",
            "coordenada_y_etrs89": "4479662,346",
            "longitud": -3.6887449,
            "latitud": 40.4655841
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.612139, 40.373012]
        },
        "properties": {
            "cartodb_id": 18,
            "codigo": 28079054,
            "codigo_corto": 54,
            "estacion": "Ensanche de Vallecas",
            "direccion": "Avda La Gavia / Avda. Las Suertes",
            "longitud_etrs89": "3°36'43.70\"O",
            "latitud_etrs89": "40°22'22.84\"N",
            "altitud": 629,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "",
            "pm2_5": "",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 31000516,
            "via_clase": "AVENIDA",
            "via_par": "DE",
            "via_nombre": "LA GAVIA",
            "fecha_alta": "11/12/2009",
            "coordenada_x_etrs89": "448033,2263",
            "coordenada_y_etrs89": "4469339,044",
            "longitud": -3.6121394,
            "latitud": 40.3730118
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.580565, 40.462363]
        },
        "properties": {
            "cartodb_id": 19,
            "codigo": 28079055,
            "codigo_corto": 55,
            "estacion": "Urb. Embajada",
            "direccion": "C/ Riaño (Barajas) ",
            "longitud_etrs89": "3°34'50.03\"O",
            "latitud_etrs89": "40°27'44.51\"N",
            "altitud": 619,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "X",
            "pm2_5": "",
            "o3": "",
            "btx": "X",
            "hc": "X",
            "cod_via": 639250,
            "via_clase": "CALLE",
            "via_par": "DE",
            "via_nombre": "RIAÑO",
            "fecha_alta": "20/01/2010",
            "coordenada_x_etrs89": "450778,8839",
            "coordenada_y_etrs89": "4479238,863",
            "longitud": -3.5805649,
            "latitud": 40.4623628
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.718768, 40.385034]
        },
        "properties": {
            "cartodb_id": 20,
            "codigo": 28079056,
            "codigo_corto": 56,
            "estacion": "Pza. Elíptica",
            "direccion": " Pza. Elíptica - Avda. Oporto",
            "longitud_etrs89": "3°43'7.54\"O",
            "latitud_etrs89": "40°23'6.10\"N",
            "altitud": 605,
            "cod_tipo": "UT",
            "nom_tipo": "Urbana tráfico",
            "no2": "X",
            "so2": "",
            "co": "X",
            "pm10": "X",
            "pm2_5": "X",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 293200,
            "via_clase": "PLAZA",
            "via_par": "",
            "via_nombre": "ELIPTICA",
            "fecha_alta": "18/01/2010",
            "coordenada_x_etrs89": "438991,9161",
            "coordenada_y_etrs89": "4470741,548",
            "longitud": -3.7187679,
            "latitud": 40.3850336
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.660517, 40.494201]
        },
        "properties": {
            "cartodb_id": 21,
            "codigo": 28079057,
            "codigo_corto": 57,
            "estacion": "Sanchinarro",
            "direccion": "C/ Princesa de Eboli esq C/ Maria Tudor",
            "longitud_etrs89": "3°39'37.86\"O",
            "latitud_etrs89": "40°29'39.12\"N",
            "altitud": 700,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "X",
            "co": "X",
            "pm10": "X",
            "pm2_5": "",
            "o3": "",
            "btx": "",
            "hc": "",
            "cod_via": 31000002,
            "via_clase": "CALLE",
            "via_par": "DE LA",
            "via_nombre": "PRINCESA DE EBOLI",
            "fecha_alta": "23/11/2009",
            "coordenada_x_etrs89": "444026,808",
            "coordenada_y_etrs89": "4482820,581",
            "longitud": -3.6605173,
            "latitud": 40.4942012
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.77461, 40.51807]
        },
        "properties": {
            "cartodb_id": 22,
            "codigo": 28079058,
            "codigo_corto": 58,
            "estacion": "El Pardo",
            "direccion": "Avda. La Guardia",
            "longitud_etrs89": "3°46'28.62\"O",
            "latitud_etrs89": "40°31'4.97\"N",
            "altitud": 612,
            "cod_tipo": "S",
            "nom_tipo": "Suburbana",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "",
            "pm2_5": "",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 348500,
            "via_clase": "AVENIDA",
            "via_par": "DE LA",
            "via_nombre": "GUARDIA",
            "fecha_alta": "01/12/2009",
            "coordenada_x_etrs89": "434381,6",
            "coordenada_y_etrs89": "4485548,7",
            "longitud": -3.7746101,
            "latitud": 40.5180701
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.616341, 40.460726]
        },
        "properties": {
            "cartodb_id": 23,
            "codigo": 28079059,
            "codigo_corto": 59,
            "estacion": "Juan Carlos I",
            "direccion": "Parque Juan Carlos I (frente oficinas mantenimiento)",
            "longitud_etrs89": "3º 36' 33\"O",
            "latitud_etrs89": "40º 27' 55''N",
            "altitud": 660,
            "cod_tipo": "S",
            "nom_tipo": "Suburbana",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "",
            "pm2_5": "",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 1111,
            "via_clase": "",
            "via_par": "",
            "via_nombre": "",
            "fecha_alta": "14/12/2009",
            "coordenada_x_etrs89": "447744,4666",
            "coordenada_y_etrs89": "4479077,678",
            "longitud": -3.6163407,
            "latitud": 40.4607255
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.689731, 40.500548]
        },
        "properties": {
            "cartodb_id": 24,
            "codigo": 28079060,
            "codigo_corto": 60,
            "estacion": "Tres Olivos",
            "direccion": "Plaza Tres Olivos ",
            "longitud_etrs89": "3°41'23.03\"O",
            "latitud_etrs89": "40°30'1.97\"N",
            "altitud": 715,
            "cod_tipo": "UF",
            "nom_tipo": "Urbana fondo",
            "no2": "X",
            "so2": "",
            "co": "",
            "pm10": "X",
            "pm2_5": "",
            "o3": "X",
            "btx": "",
            "hc": "",
            "cod_via": 1427,
            "via_clase": "PLAZA",
            "via_par": "DE LOS",
            "via_nombre": "TRES OLIVOS",
            "fecha_alta": "08/02/2010",
            "coordenada_x_etrs89": "441556,7005",
            "coordenada_y_etrs89": "4483543,994",
            "longitud": -3.6897308,
            "latitud": 40.5005477
        }
    }]
  };

  public meteoStationsGeoJSON: any = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.712257, 40.423882]
        },
        "properties": {
            "cartodb_id": 1,
            "codigo": 28079004,
            "codigo_corto": 4,
            "estacion": "Plaza España",
            "direccion": "Plaza de España",
            "longitud_etrs89": "3°42'43.91\"O",
            "latitud_etrs89": "40°25'25.98\"N",
            "altitud": 637,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 273600,
            "via_clase": "PLAZA",
            "via_par": "DE",
            "via_nombre": "ESPAÑA",
            "num_via": null,
            "coordenada_x_etrs89": 439579.329073,
            "coordenada_y_etrs89": "4475049.26296",
            "longitud": -3.7122567,
            "latitud": 40.4238823
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.682316, 40.421553]
        },
        "properties": {
            "cartodb_id": 2,
            "codigo": 28079008,
            "codigo_corto": 8,
            "estacion": "Escuelas Aguirre",
            "direccion": "Entre C/ Alcalá y C/ O’ Donell ",
            "longitud_etrs89": "3°40'56.22\"O",
            "latitud_etrs89": "40°25'17.63\"N",
            "altitud": 672,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 18900,
            "via_clase": "CALLE",
            "via_par": "DE",
            "via_nombre": "ALCALA",
            "num_via": null,
            "coordenada_x_etrs89": 442117.236578,
            "coordenada_y_etrs89": "4474770.69592",
            "longitud": -3.6823158,
            "latitud": 40.4215533
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.639242, 40.440046]
        },
        "properties": {
            "cartodb_id": 3,
            "codigo": 28079016,
            "codigo_corto": 16,
            "estacion": "Arturo Soria",
            "direccion": "C/ Arturo Soria  esq. C/  Vizconde de los Asilos ",
            "longitud_etrs89": "3°38'21.17\"O",
            "latitud_etrs89": "40°26'24.20\"N",
            "altitud": 695,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 798700,
            "via_clase": "CALLE",
            "via_par": "DEL",
            "via_nombre": "VIZCONDE DE LOS ASILOS",
            "num_via": null,
            "coordenada_x_etrs89": 445786.172865,
            "coordenada_y_etrs89": "4476796.019",
            "longitud": -3.6392422,
            "latitud": 40.4400457
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.731836, 40.394782]
        },
        "properties": {
            "cartodb_id": 4,
            "codigo": 28079018,
            "codigo_corto": 18,
            "estacion": "Farolillo",
            "direccion": "Calle Farolillo - C/Ervigio",
            "longitud_etrs89": "3°43'54.61\"O",
            "latitud_etrs89": "40°23'41.22\"N",
            "altitud": 632,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 1903,
            "via_clase": "CALLE",
            "via_par": "DEL",
            "via_nombre": "FAROLILLO",
            "num_via": null,
            "coordenada_x_etrs89": 437891.69612,
            "coordenada_y_etrs89": "4471832.76923",
            "longitud": -3.7318356,
            "latitud": 40.3947825
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.747345, 40.419358]
        },
        "properties": {
            "cartodb_id": 5,
            "codigo": 28079024,
            "codigo_corto": 24,
            "estacion": "Casa de Campo",
            "direccion": "Casa de Campo  (Terminal del Teleférico)",
            "longitud_etrs89": "3°44'50.44\"O",
            "latitud_etrs89": "40°25'9.69\"N",
            "altitud": 646,
            "vv_81": "X",
            "dv_82": "X",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "X",
            "rs_88": "X",
            "p_89": "X",
            "cod_via": 905219,
            "via_clase": "CARRETERA",
            "via_par": "DEL",
            "via_nombre": "TELEFERICO",
            "num_via": null,
            "coordenada_x_etrs89": 436598.563744,
            "coordenada_y_etrs89": "4474571.61811",
            "longitud": -3.7473445,
            "latitud": 40.4193577
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.703166, 40.419209]
        },
        "properties": {
            "cartodb_id": 6,
            "codigo": 28079035,
            "codigo_corto": 35,
            "estacion": "Plaza del Carmen",
            "direccion": "Plaza del Carmen esq. Tres Cruces. ",
            "longitud_etrs89": "3°42'11.40\"O",
            "latitud_etrs89": "40°25'9.15\"N",
            "altitud": 660,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 145800,
            "via_clase": "PLAZA",
            "via_par": "DEL",
            "via_nombre": "CARMEN",
            "num_via": null,
            "coordenada_x_etrs89": 440346.361892,
            "coordenada_y_etrs89": "4474524.35713",
            "longitud": -3.7031662,
            "latitud": 40.4192091
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.64531, 40.407952]
        },
        "properties": {
            "cartodb_id": 7,
            "codigo": 28079036,
            "codigo_corto": 36,
            "estacion": "Moratalaz",
            "direccion": "Avd. Moratalaz  esq. Camino de los Vinateros",
            "longitud_etrs89": "3°38'43.02\"O",
            "latitud_etrs89": "40°24'28.64\"N",
            "altitud": 671,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 522000,
            "via_clase": "AVENIDA",
            "via_par": "DE",
            "via_nombre": "MORATALAZ",
            "num_via": null,
            "coordenada_x_etrs89": 445245.513003,
            "coordenada_y_etrs89": "4473237.34859",
            "longitud": -3.6453104,
            "latitud": 40.4079517
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.70713, 40.445544]
        },
        "properties": {
            "cartodb_id": 8,
            "codigo": 28079038,
            "codigo_corto": 38,
            "estacion": "Cuatro Caminos",
            "direccion": "Avd. Pablo Iglesias esq. C/ Marqués de Lema",
            "longitud_etrs89": "3°42'25.64\"O",
            "latitud_etrs89": "40°26'43.97\"N",
            "altitud": 699,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 554550,
            "via_clase": "AVENIDA",
            "via_par": "DE",
            "via_nombre": "PABLO IGLESIAS",
            "num_via": null,
            "coordenada_x_etrs89": 440033.463233,
            "coordenada_y_etrs89": "4477450.21112",
            "longitud": -3.7071303,
            "latitud": 40.4455439
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.711536, 40.478232]
        },
        "properties": {
            "cartodb_id": 9,
            "codigo": 28079039,
            "codigo_corto": 39,
            "estacion": "Barrio del Pilar",
            "direccion": "Avd. Betanzos esq. C/  Monforte de Lemos ",
            "longitud_etrs89": "3°42'41.53\"O",
            "latitud_etrs89": "40°28'41.64\"N",
            "altitud": 676,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "X",
            "cod_via": 514425,
            "via_clase": "AVENIDA",
            "via_par": "DE",
            "via_nombre": "MONFORTE DE LEMOS",
            "num_via": null,
            "coordenada_x_etrs89": 439689.049649,
            "coordenada_y_etrs89": "4481081.61885",
            "longitud": -3.7115364,
            "latitud": 40.4782322
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.612139, 40.373012]
        },
        "properties": {
            "cartodb_id": 10,
            "codigo": 28079054,
            "codigo_corto": 54,
            "estacion": "Ensanche de Vallecas",
            "direccion": "Avda La Gavia / Avda. Las Suertes",
            "longitud_etrs89": "3°36'43.70\"O",
            "latitud_etrs89": "40°22'22.84\"N",
            "altitud": 629,
            "vv_81": "X",
            "dv_82": "X",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "X",
            "p_89": "X",
            "cod_via": 31000516,
            "via_clase": "AVENIDA",
            "via_par": "DE",
            "via_nombre": "LA GAVIA",
            "num_via": null,
            "coordenada_x_etrs89": 448033.226311,
            "coordenada_y_etrs89": "4469339.04423",
            "longitud": -3.6121394,
            "latitud": 40.3730118
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.718768, 40.385034]
        },
        "properties": {
            "cartodb_id": 11,
            "codigo": 28079056,
            "codigo_corto": 56,
            "estacion": "Plaza Elíptica",
            "direccion": "Pza. Elíptica - Avda. Oporto",
            "longitud_etrs89": "3°43'7.54\"O",
            "latitud_etrs89": "40°23'6.10\"N",
            "altitud": 605,
            "vv_81": "X",
            "dv_82": "X",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "X",
            "rs_88": "",
            "p_89": "X",
            "cod_via": 293200,
            "via_clase": "PLAZA",
            "via_par": "",
            "via_nombre": "ELIPTICA",
            "num_via": null,
            "coordenada_x_etrs89": 438991.916057,
            "coordenada_y_etrs89": "4470741.5478",
            "longitud": -3.7187679,
            "latitud": 40.3850336
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.77461, 40.51807]
        },
        "properties": {
            "cartodb_id": 12,
            "codigo": 28079058,
            "codigo_corto": 58,
            "estacion": "El Pardo",
            "direccion": "Avda. La Guardia",
            "longitud_etrs89": "3°46'28.62\"O",
            "latitud_etrs89": "40°31'4.97\"N",
            "altitud": 612,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 348500,
            "via_clase": "AVENIDA",
            "via_par": "DE LA",
            "via_nombre": "GUARDIA",
            "num_via": null,
            "coordenada_x_etrs89": 434381.6,
            "coordenada_y_etrs89": "4485548.7",
            "longitud": -3.7746101,
            "latitud": 40.5180701
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.616341, 40.460726]
        },
        "properties": {
            "cartodb_id": 13,
            "codigo": 28079059,
            "codigo_corto": 59,
            "estacion": "Juan Carlos I",
            "direccion": "Parque Juan Carlos I (frente oficinas mantenimiento)",
            "longitud_etrs89": "3º 36' 33\"O",
            "latitud_etrs89": "40º 27' 55''N",
            "altitud": 660,
            "vv_81": "X",
            "dv_82": "X",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "X",
            "rs_88": "X",
            "p_89": "X",
            "cod_via": null,
            "via_clase": "PARQUE",
            "via_par": "",
            "via_nombre": "JUAN CARLOS I",
            "num_via": null,
            "coordenada_x_etrs89": 447744.466585,
            "coordenada_y_etrs89": "4479077.67818",
            "longitud": -3.6163407,
            "latitud": 40.4607255
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.635637, 40.399793]
        },
        "properties": {
            "cartodb_id": 14,
            "codigo": 28079102,
            "codigo_corto": 102,
            "estacion": "J.M.D. Moratalaz",
            "direccion": "C/ Fuente Carantona, 8",
            "longitud_etrs89": "3º 38' 13'' O",
            "latitud_etrs89": "40º 23' 55'' N",
            "altitud": 687,
            "vv_81": "X",
            "dv_82": "X",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "X",
            "rs_88": "X",
            "p_89": "X",
            "cod_via": 315060,
            "via_clase": "CALLE",
            "via_par": "DE LA",
            "via_nombre": "FUENTE CARRANTONA",
            "num_via": 8,
            "coordenada_x_etrs89": 445947.89,
            "coordenada_y_etrs89": "4472195.4",
            "longitud": -3.63563705,
            "latitud": 40.39979278
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.709525, 40.350628]
        },
        "properties": {
            "cartodb_id": 15,
            "codigo": 28079103,
            "codigo_corto": 103,
            "estacion": "J.M.D. Villaverde",
            "direccion": "C/ Arroyo Bueno, 53",
            "longitud_etrs89": "3º 42' 39'' O",
            "latitud_etrs89": "40º 20' 58'' N",
            "altitud": 594,
            "vv_81": "X",
            "dv_82": "X",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "X",
            "rs_88": "X",
            "p_89": "X",
            "cod_via": 74200,
            "via_clase": "CALLE",
            "via_par": "DEL",
            "via_nombre": "ARROYO BUENO",
            "num_via": 53,
            "coordenada_x_etrs89": 439633.65,
            "coordenada_y_etrs89": "4466785.76",
            "longitud": -3.70952476,
            "latitud": 40.3506278
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.679722, 40.365833]
        },
        "properties": {
            "cartodb_id": 16,
            "codigo": 28079104,
            "codigo_corto": 104,
            "estacion": "E.D.A.R. La China",
            "direccion": "Embajadores",
            "longitud_etrs89": "3º 40' 47'' O",
            "latitud_etrs89": "40º 21' 57'' N",
            "altitud": 566,
            "vv_81": "X",
            "dv_82": "X",
            "t_83": "",
            "hr_86": "",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 262000,
            "via_clase": "CALLE",
            "via_par": "DE",
            "via_nombre": "EMBAJADORES",
            "num_via": null,
            "coordenada_x_etrs89": 442177.66,
            "coordenada_y_etrs89": "4468453,71",
            "longitud": -3.679722,
            "latitud": 40.3658333
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.74, 40.442222]
        },
        "properties": {
            "cartodb_id": 17,
            "codigo": 28079106,
            "codigo_corto": 106,
            "estacion": "Centro Mpal. De Acústica",
            "direccion": "Autovía M-30 Km. 21.700",
            "longitud_etrs89": "3º 44' 24'' O",
            "latitud_etrs89": "40º 26' 32'' N",
            "altitud": 587,
            "vv_81": "X",
            "dv_82": "X",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "X",
            "rs_88": "X",
            "p_89": "X",
            "cod_via": 31001349,
            "via_clase": "AUTOVÍA",
            "via_par": "",
            "via_nombre": "M-30",
            "num_via": 21.7,
            "coordenada_x_etrs89": 437130.68,
            "coordenada_y_etrs89": "4476974.19",
            "longitud": -3.74,
            "latitud": 40.442222
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.656667, 40.462778]
        },
        "properties": {
            "cartodb_id": 18,
            "codigo": 28079107,
            "codigo_corto": 107,
            "estacion": "J.M.D. Hortaleza",
            "direccion": "Ctra. de Canillas, 2",
            "longitud_etrs89": "3º 39' 24'' O",
            "latitud_etrs89": "40º 27' 46'' N",
            "altitud": 715,
            "vv_81": "X",
            "dv_82": "X",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "X",
            "rs_88": "X",
            "p_89": "X",
            "cod_via": 133455,
            "via_clase": "CARRETERA",
            "via_par": "DE",
            "via_nombre": "CANILLAS",
            "num_via": 2,
            "coordenada_x_etrs89": 444215.2,
            "coordenada_y_etrs89": "4479200.02",
            "longitud": -3.656667,
            "latitud": 40.462778
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.717881, 40.476633]
        },
        "properties": {
            "cartodb_id": 19,
            "codigo": 28079108,
            "codigo_corto": 108,
            "estacion": "Peñagrande",
            "direccion": "C.D.M. Peñagrande",
            "longitud_etrs89": "  3°43'4.37\"O",
            "latitud_etrs89": " 40°28'35.88\"N",
            "altitud": 660,
            "vv_81": "X",
            "dv_82": "X",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "X",
            "rs_88": "X",
            "p_89": "X",
            "cod_via": 514425,
            "via_clase": "AVENIDA",
            "via_par": "DE",
            "via_nombre": "MONFORTE DE LEMOS",
            "num_via": 184,
            "coordenada_x_etrs89": 439037.69,
            "coordenada_y_etrs89": "4480778.49",
            "longitud": -3.717881,
            "latitud": 40.4766333
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.69695, 40.431911]
        },
        "properties": {
            "cartodb_id": 20,
            "codigo": 28079109,
            "codigo_corto": 109,
            "estacion": "J.M.D.Chamberí",
            "direccion": "Plaza de Chamberí, 4",
            "longitud_etrs89": "  3°41'49.02\"O",
            "latitud_etrs89": " 40°25'54.88\"N",
            "altitud": 678,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 227900,
            "via_clase": "PLAZA",
            "via_par": "DE",
            "via_nombre": "CHAMBERI",
            "num_via": 4,
            "coordenada_x_etrs89": 440772.75,
            "coordenada_y_etrs89": "4475799.91",
            "longitud": -3.69695,
            "latitud": 40.4319111
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.710792, 40.4156]
        },
        "properties": {
            "cartodb_id": 21,
            "codigo": 28079110,
            "codigo_corto": 110,
            "estacion": "J.M.D.Centro",
            "direccion": "C/ Mayor, 72",
            "longitud_etrs89": "  3°42'38.85\"O",
            "latitud_etrs89": " 40°24'56.16\"N",
            "altitud": 647,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 497800,
            "via_clase": "CALLE",
            "via_par": "",
            "via_nombre": "MAYOR",
            "num_via": 72,
            "coordenada_x_etrs89": 439584.05,
            "coordenada_y_etrs89": "4473998.69",
            "longitud": -3.710792,
            "latitud": 40.4156
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.680369, 40.422649]
        },
        "properties": {
            "cartodb_id": 22,
            "codigo": 28079111,
            "codigo_corto": 111,
            "estacion": "J.M.D.Chamartin",
            "direccion": "C/ Principe de Vergara, 142",
            "longitud_etrs89": "  3°40'40.64\"O",
            "latitud_etrs89": " 40°26'41.61\"N",
            "altitud": 704,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 610450,
            "via_clase": "CALLE",
            "via_par": "DEL",
            "via_nombre": "PRINCIPE DE VERGARA",
            "num_via": 42,
            "coordenada_x_etrs89": 442171.33,
            "coordenada_y_etrs89": "4474760.82",
            "longitud": -3.6803686,
            "latitud": 40.4226491
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.666456, 40.396472]
        },
        "properties": {
            "cartodb_id": 23,
            "codigo": 28079112,
            "codigo_corto": 112,
            "estacion": "J.M.D.Vallecas 1",
            "direccion": "Avda. Albufera, 42",
            "longitud_etrs89": "  3°39'59.24\"O",
            "latitud_etrs89": " 40°23'47.30\"N",
            "altitud": 607,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 18600,
            "via_clase": "AVENIDA",
            "via_par": "DE LA",
            "via_nombre": "ALBUFERA",
            "num_via": 42,
            "coordenada_x_etrs89": 443329.69,
            "coordenada_y_etrs89": "4471846.08",
            "longitud": -3.666456,
            "latitud": 40.396472
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.666456, 40.396472]
        },
        "properties": {
            "cartodb_id": 24,
            "codigo": 28079113,
            "codigo_corto": 113,
            "estacion": "J.M.D.Vallecas 2",
            "direccion": "Avda. Albufera, 42",
            "longitud_etrs89": "  3°39'59.24\"O",
            "latitud_etrs89": " 40°23'47.30\"N",
            "altitud": 607,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 18600,
            "via_clase": "AVENIDA",
            "via_par": "DE LA",
            "via_nombre": "ALBUFERA",
            "num_via": null,
            "coordenada_x_etrs89": 443329.69,
            "coordenada_y_etrs89": "4471846.08",
            "longitud": -3.666456,
            "latitud": 40.396472
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.697631, 40.392544]
        },
        "properties": {
            "cartodb_id": 25,
            "codigo": 28079114,
            "codigo_corto": 114,
            "estacion": "Matadero 01",
            "direccion": "Paseo de la Chopera, 10",
            "longitud_etrs89": "  3°41'51.47\"O",
            "latitud_etrs89": " 40°23'33.16\"N",
            "altitud": 570,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 230600,
            "via_clase": "PASEO",
            "via_par": "DE LA",
            "via_nombre": "CHOPERA",
            "num_via": 10,
            "coordenada_x_etrs89": 440680.48,
            "coordenada_y_etrs89": "4471430.55",
            "longitud": -3.697631,
            "latitud": 40.3925444
        }
    }, {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-3.697631, 40.392544]
        },
        "properties": {
            "cartodb_id": 26,
            "codigo": 28079115,
            "codigo_corto": 115,
            "estacion": "Matadero 02",
            "direccion": "Paseo de la Chopera, 10",
            "longitud_etrs89": "  3°41'51.47\"O",
            "latitud_etrs89": " 40°23'33.16\"N",
            "altitud": 570,
            "vv_81": "",
            "dv_82": "",
            "t_83": "X",
            "hr_86": "X",
            "pb_87": "",
            "rs_88": "",
            "p_89": "",
            "cod_via": 230600,
            "via_clase": "PASEO",
            "via_par": "DE LA",
            "via_nombre": "CHOPERA",
            "num_via": 10,
            "coordenada_x_etrs89": 440680.48,
            "coordenada_y_etrs89": "4471430.55",
            "longitud": -3.697631,
            "latitud": 40.3925444
        }
    }]
  };

  public airStationPostgis: any = 'http://localhost:5000/api/v1/airstations';
  public meteoStationsPostgis: any = 'http://localhost:5000/api/v1/meteostations';



  constructor(private http: HttpClient) { }




  //metodos air/meteo

  // getMarkers():

  //mockAPI
  // getAirStations(): Observable<GeoJSON[]> {
  //   return this.http.get<GeoJSON[]>(this._mokapiAir)
  // }
  // getMeteoStations(): Observable<GeoJSON[]> {
  //   return this.http.get<GeoJSON[]>(this._mokapiMeteo)
  // }

  // //geoJSON a pelo
  // getairStationGeoJSON(): Observable<GeoJSON[]> {
  //   return this.airStationsGeoJSON;
  // }

  // getmeteoStationGeoJSON(): Observable<GeoJSON[]> {
  //   return this.meteoStationsGeoJSON;
  // }

  //lo que viene de postgis
  getairStationsPostgis(): Observable<GeoJSON[]> {
    return this.airStationPostgis
  }
  getmeteoStationsPostgis(): Observable<GeoJSON[]> {
    return this.meteoStationsPostgis
  }




  // //métodos collector

  // createMarker():

  // removeMarker():
}
