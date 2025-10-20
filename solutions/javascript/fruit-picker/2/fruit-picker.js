import { notify } from './notifier';
import { order } from './grocer';

export const onSuccess = _ => notify({message: 'SUCCESS'});
export const onError = _ => notify({message: 'ERROR'});
export const orderFromGrocer = (q, oS, oE) => order(q, oS, oE);
export const postOrder = (variety, quantity) => orderFromGrocer({variety, quantity}, onSuccess, onError);
