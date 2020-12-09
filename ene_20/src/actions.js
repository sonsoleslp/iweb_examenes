export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export function add(index) {
 return { type: ADD_PRODUCT, payload: { index } };
}
export function remove(index) {
return { type: REMOVE_PRODUCT, payload: { index } };
}