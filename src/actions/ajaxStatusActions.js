import * as types from './actionType';

export function beginAjaxCall() {
  return {type: types.BEGIN_AJAX_CALL};
}

export function savingAjaxError() {
  return {type: types.SAVING_ERROR};
}
