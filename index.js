import format from './format';
import { trigger } from './utilities';

/**
 * Event handler
 *
 * @param {HTMLInputElement} el
 * @param {?String}          pattern
 * @param {Boolean}          force
 */
function updateValue(el, pattern, force = false) {
  const { value, previousValue = '' } = el;

  if (value && value !== previousValue) {
    el.value = format(value, pattern);
    trigger(el, 'input');
  }

  el.previousValue = value;
}

export default {
  /**
   * Called only once, when the directive is first bound to the element.
   * This is where you can do one-time setup work.
   *
   * @param {HTMLInputElement} el
   * @param {?String}          value
   */
  bind(el, { value }) {
    updateValue(el, value);
  },

   /**
   * Called after the containing component has updated,
   * but possibly before its children have updated.s.
   *
   * @param {HTMLInputElement} el
   * @param {?String}          value
   */
  componentUpdated(el, { value }) {
    updateValue(el, value);
  },
};
