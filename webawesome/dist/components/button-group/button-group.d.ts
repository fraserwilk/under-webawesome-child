import type { PropertyValues } from 'lit';
import WebAwesomeElement from '../../internal/webawesome-element.js';
/**
 * @summary Button groups can be used to group related buttons into sections.
 * @documentation https://webawesome.com/docs/components/button-group
 * @status stable
 * @since 2.0
 *
 * @slot - One or more `<wa-button>` elements to display in the button group.
 *
 * @csspart base - The component's base wrapper.
 */
export default class WaButtonGroup extends WebAwesomeElement {
    static css: string[];
    defaultSlot: HTMLSlotElement;
    disableRole: boolean;
    hasOutlined: boolean;
    /**
     * A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
     * devices when interacting with the control and is strongly recommended.
     */
    label: string;
    /** The button group's orientation. */
    orientation: 'horizontal' | 'vertical';
    /** The component's size. */
    size: 'small' | 'medium' | 'large';
    /** The button group's theme variant. Defaults to `neutral` if not within another element with a variant. */
    variant: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
    updated(changedProperties: PropertyValues<this>): void;
    private handleFocus;
    private handleBlur;
    private handleMouseOver;
    private handleMouseOut;
    private handleSlotChange;
    private updateClassNames;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wa-button-group': WaButtonGroup;
    }
}
