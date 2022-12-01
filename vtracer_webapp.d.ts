/* tslint:disable */
/* eslint-disable */
/**
*/
export function main(): void;
/**
*/
export class BinaryImageConverter {
  free(): void;
/**
* @param {string} params
* @returns {BinaryImageConverter}
*/
  static new_with_string(params: string): BinaryImageConverter;
/**
*/
  init(): void;
/**
* @returns {boolean}
*/
  tick(): boolean;
/**
* @returns {number}
*/
  progress(): number;
}
/**
*/
export class ColorImageConverter {
  free(): void;
/**
* @param {string} params
* @returns {ColorImageConverter}
*/
  static new_with_string(params: string): ColorImageConverter;
/**
*/
  init(): void;
/**
* @returns {boolean}
*/
  tick(): boolean;
/**
* @returns {number}
*/
  progress(): number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_colorimageconverter_free: (a: number) => void;
  readonly colorimageconverter_new_with_string: (a: number, b: number) => number;
  readonly colorimageconverter_init: (a: number) => void;
  readonly colorimageconverter_tick: (a: number) => number;
  readonly colorimageconverter_progress: (a: number) => number;
  readonly __wbg_binaryimageconverter_free: (a: number) => void;
  readonly binaryimageconverter_new_with_string: (a: number, b: number) => number;
  readonly binaryimageconverter_init: (a: number) => void;
  readonly binaryimageconverter_tick: (a: number) => number;
  readonly binaryimageconverter_progress: (a: number) => number;
  readonly main: () => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
