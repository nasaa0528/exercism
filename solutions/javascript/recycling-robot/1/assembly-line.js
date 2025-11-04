import { ElectronicDevice } from './lib.js';
export const isBoolean = v => ['boolean'].includes(typeof v);
export const isNumber = v => typeof v === 'bigint' || ['number'].includes(typeof v) && !Number.isNaN(v) && Number.isFinite(v);
export const isObject = v => typeof v === 'object' && v !== null;
export const isNumericString = v => v !== '' && typeof v === 'string' && !Number.isNaN(Number(v)); 
export const isElectronic = o => o instanceof ElectronicDevice; 
export const isNonEmptyArray = v => v instanceof Array && v.length > 0 && v[0] !== undefined;
export const isEmptyArray = v => Array.isArray(v) && v.length === 0 && v[0] === undefined;
export const hasType = o => 'type' in o;
export const assertHasId = o => {
  if (!('id' in o)) 
    throw new Error('Object is missing the \'id\' property');
}
export const hasIdProperty = o => 'id' in o&& Object.prototype.hasOwnProperty.call(o, 'id');
export const hasDefinedType = o => o.hasOwnProperty('type') && o.type !== undefined;
