import WebAwesomeElement from '../../internal/webawesome-element.js';
/**
 * @summary Skeletons are used to provide a visual representation of where content will eventually be drawn.
 * @documentation https://webawesome.com/docs/components/skeleton
 * @status stable
 * @since 2.0
 *
 * @csspart indicator - The skeleton's indicator which is responsible for its color and animation.
 *
 * @cssproperty --color - The color of the skeleton.
 * @cssproperty --sheen-color - The sheen color when the skeleton is in its loading state.
 */
export default class WaSkeleton extends WebAwesomeElement {
    static css: string;
    /** Determines which effect the skeleton will use. */
    effect: 'pulse' | 'sheen' | 'none';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wa-skeleton': WaSkeleton;
    }
}
