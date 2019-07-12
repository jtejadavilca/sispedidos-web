// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_base : 'http://localhost:8081/syspedidos',
  cod_catalogos: [
    {cod_catalogo: '001', desc: 'cargos'},
    {cod_catalogo: '002', desc: 'areas'},
    {cod_catalogo: '003', desc: 'zonas'},
    {cod_catalogo: '004', desc: 'tipos_doc'},
    {cod_catalogo: '005', desc: 'marcas_productos'},
    {cod_catalogo: '006', desc: 'modelos_productos'},
    {cod_catalogo: '007', desc: 'cod_estados_pedido'},
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
