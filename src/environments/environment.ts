// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseURL = 'https://gist.githubusercontent.com/k-garces/d2ea7b6ba0a5502a7856f10b1cd1e032/raw/47bcf9b71199defa5539bb8122ae2da01e721afe/conferences.json';

export const environment = {
  production: false,
  baseURL
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
