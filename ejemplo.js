let solicitudCartaPorte={
    "cantidadSolicitudes": 1,
    "observacionesGenerales": "obs adiciona",
    "empresa": "SM",
    "timbrarCCP": "SI",
    "referencias": {
        "appSolicitudNombre": "CARTAPORTELOGISTICA",
        "appSolicitudVersion": "1.2",
        "usuarioSolicitanteId": "901711",
        "usuarioSolicitanteNombre": "AMADOR CARRERA MARTIN GIL",
        "numCotizacion": "12345",
        "clienteRfc": "CAUG880523HVZ",
        "clienteReferencias": "ref",
        "clienteEmail": "gerardoicu@gmail.com"
    },
    "viaEntradaSalida": {
        "claveTransporte": "01",
        "descripcionTipoTransporte": "Autotransporte Federal"
    },
    "ubicaciones": {
        "ubicacionOrigen": {
            "origen": {
                "fechaHoraRealInicioCarga": "2023-07-08 00:51:49",
                "fechaHoraRealSalida": "2023-07-13 00:52:06",
                "fechaHoraProgramadaCarga": "2023-07-07 00:51:45",
                "fechaHoraRealTerminoCarga": "2023-07-09 00:51:52",
                "idOrigen": "0",
                "rfcRemitente": "CAUG880523HVZ",
                "nombreRemitente": "Nombre origen"
            },
            "domicilio": {
                "codigoPostal": "91809",
                "localidadDescripcion": "Aguascalientes",
                "calle": "calle origen",
                "numeroExterior": "11",
                "numeroInterior": "33",
                "referencia": "ref origen",
                "clave": "0546",
                "coloniaClaveSAT": "0546",
                "coloniaDescripcion": "Las Brisas",
                "municipioClaveSAT": "193",
                "municipioDescripcion": "Veracruz",
                "estadoClaveSAT": "VER",
                "estadoDescripcion": "Veracruz",
                "paisClaveSAT": "MEX",
                "paisDescripcion": "MEX",
                "idDireccion": 131194,
                "idLocalidad": "01",
                "claveEdoLocalidad": "AGU"
            },
            "destino": {
                "fechaHoraRealDescarga": null,
                "fechaHoraProgramadaLlegada": null,
                "fechaHoraRealLlegada": null,
                "idDestino": "0"
            },
            "alias": "alias origen",
            "observaciones": "obs origen"
        },
        "ubicacionDestino": {
            "destino": {
                "fechaHoraRealDescarga": "2023-07-16 00:52:02",
                "fechaHoraProgramadaLlegada": "2023-07-14 00:51:55",
                "fechaHoraRealLlegada": "2023-07-15 00:51:58",
                "idDestino": "0",
                "rfcDestinatario": "CAUG880523HVZ",
                "nombreDestinatario": "No"
            },
            "domicilio": {
                "codigoPostal": "95225",
                "localidadDescripcion": "Acámbaro",
                "calle": "calle destino",
                "numeroExterior": "22",
                "numeroInterior": "44",
                "referencia": "ref destino",
                "clave": "3247",
                "coloniaClaveSAT": "3247",
                "coloniaDescripcion": "La Victoria",
                "municipioClaveSAT": "181",
                "municipioDescripcion": "VER",
                "estadoClaveSAT": "VER",
                "estadoDescripcion": "Veracruz",
                "paisClaveSAT": "MEX",
                "paisDescripcion": "MEX",
                "idDireccion": 135398,
                "idLocalidad": "01",
                "claveEdoLocalidad": "GUA"
            },
            "origen": {
                "fechaHoraRealInicioCarga": null,
                "fechaHoraRealSalida": null,
                "fechaHoraProgramadaCarga": null,
                "fechaHoraRealTerminoCarga": null,
                "idOrigen": "0"
            },
            "alias": "alias destino",
            "kmRecorrer": "1000",
            "observaciones": "obs destino"
        }
    },
    "paisOrigenDestino": {
        "claveiso3": "MEX",
        "nombre": "México"
    },
    "mercancias": {
        "carga": "CONTENEDOR",
        "remolques": [
            {
                "mercancia": [
                    {
                        "bl": "1",
                        "buque": "1",
                        "cantidad": "1",
                        "itemClaveProdServCp": {
                            "claveProducto": "11171603",
                            "materialPeligroso": "0",
                            "descripcion": "Aleación de acero inoxidable 316",
                            "palabrasSimilares": null
                        },
                        "itemUnidadPeso": {
                            "claveUnidad": "XOB",
                            "nombre": "Pallet, Según la clasificación de la compañía (Commonwealth Handling Equipment Pool (CHEP) 80 cm x 120 cm",
                            "descripcion": "Pallet de dimensiones 80 centímetros x 120 centímetros."
                        },
                        "pesoBruto": "1",
                        "pesoNeto": "1",
                        "itemMaterialPeligroso": {
                            "claveMaterialPeligroso": "0341",
                            "descripcion": "NITROCELULOSA sin modificar o plastificada con menos de 18%, en masa, de substancia plastificante",
                            "claseOdiv": "1.1D",
                            "peligroSecundario": null
                        },
                        "itemTipoEmbalaje": {
                            "claveDesignacion": "1A1",
                            "descripcion": "Bidones (Tambores) de Acero 1 de tapa no desmontable"
                        },
                        "contenedor": {
                            "siglas": "HASU4517410",
                            "tipo": "DC",
                            "dimension": "40"
                        }
                    }
                ]
            },
            {
                "mercancia": [
                    {
                        "bl": "1",
                        "buque": "1",
                        "cantidad": "1",
                        "itemClaveProdServCp": {
                            "claveProducto": "11171603",
                            "materialPeligroso": "0",
                            "descripcion": "Aleación de acero inoxidable 316",
                            "palabrasSimilares": null
                        },
                        "itemUnidadPeso": {
                            "claveUnidad": "XOB",
                            "nombre": "Pallet, Según la clasificación de la compañía (Commonwealth Handling Equipment Pool (CHEP) 80 cm x 120 cm",
                            "descripcion": "Pallet de dimensiones 80 centímetros x 120 centímetros."
                        },
                        "pesoBruto": "1",
                        "pesoNeto": "1",
                        "itemMaterialPeligroso": {
                            "claveMaterialPeligroso": "0341",
                            "descripcion": "NITROCELULOSA sin modificar o plastificada con menos de 18%, en masa, de substancia plastificante",
                            "claseOdiv": "1.1D",
                            "peligroSecundario": null
                        },
                        "itemTipoEmbalaje": {
                            "claveDesignacion": "1A1",
                            "descripcion": "Bidones (Tambores) de Acero 1 de tapa no desmontable"
                        },
                        "contenedor": {
                            "siglas": "HASU4517410",
                            "tipo": "FR",
                            "dimension": "40"
                        }
                    }
                ]
            }
        ],
        "equipo": {
            "clave": "CTR001",
            "descripcion": "Caballete"
        },
        "movimiento": "FULL",
        "numTotalMercancias": 2,
        "pesoTotalBruto": 2,
        "pesoTotalNeto": 2
    },
    "claveTransporte": {
        "claveTransporte": "01",
        "descripcionTipoTransporte": "Autotransporte Federal"
    },
    "transpInternac": "SI",
    "entradaSalidaMerc": "ENTRADA",
    "transportista": {
        "idTransportista": "50",
        "razonSocial": "M&T NOUS SC DE RL DE CV",
        "nombreComercial": "1RO DE MAYO",
        "rfc": "MNO1811097X4",
        "estado": "1"
    },
    "agenteAduanal": {
        "clave": "230"
    },
    "agenciaAduanal": {
        "cliSim": "42635",
        "cliEbs": "9610",
        "billTo": "14588",
        "empresa": "84",
        "empresaSim": "1",
        "nombre": "ENCISO VILLARREAL EDMUNDO OSCAR",
        "numero": "96177",
        "direccion": "5 DE MAYO NO.967 % JUAREZ Y EMPARAN, COL. CENTRO",
        "ciudad": "VERACRUZ",
        "pais": "MEXICO",
        "rfc": "EIVE5508261A9"
    },
    "cliente": {
        "claveIntegri": "50129"
    },
    "regimen": "IMPORTACION",
    "facturaProveedor": "12345"
}

console.log(solicitudCartaPorte)

//const codigoPostal = solicitudCartaPorte.ubicaciones.ubicacionOrigen.codigoPostal;
//const localidadDescripcion = solicitudCartaPorte.ubicaciones.ubicacionOrigen.localidadDescripcion;
//const calle = solicitudCartaPorte.ubicaciones.ubicacionOrigen.calle;

//console.log(codigoPostal);
// console.log(localidadDescripcion);
// console.log(calle);

const { ubicaciones: {ubicacionOrigen: { codigoPostal,localidadDescripcion,calle } }} = solicitudCartaPorte;

console.log(codigoPostal);
console.log(localidadDescripcion);
console.log(calle);
