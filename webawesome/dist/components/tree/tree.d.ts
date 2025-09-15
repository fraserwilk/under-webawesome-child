import WebAwesomeElement from '../../internal/webawesome-element.js';
import WaTreeItem from '../tree-item/tree-item.js';
/**
 * @summary Trees allow you to display a hierarchical list of selectable [tree items](/docs/components/tree-item). Items with children can be expanded and collapsed as desired by the user.
 * @documentation https://webawesome.com/docs/components/tree
 * @status stable
 * @since 2.0
 *
 * @dependency wa-tree-item
 *
 * @event {{ selection: WaTreeItem[] }} wa-selection-change - Emitted when a tree item is selected or deselected.
 *
 * @slot - The default slot.
 * @slot expand-icon - The icon to show when the tree item is expanded. Works best with `<wa-icon>`.
 * @slot collapse-icon - The icon to show when the tree item is collapsed. Works best with `<wa-icon>`.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty [--indent-size=var(--wa-spacing-m)] - The size of the indentation for nested items.
 * @cssproperty [--indent-guide-color=var(--wa-color-surface-border)] - The color of the indentation line.
 * @cssproperty [--indent-guide-offset=0] - The amount of vertical spacing to leave between the top and bottom of the
 *  indentation line's starting position.
 * @cssproperty [--indent-guide-style=solid] - The style of the indentation line, e.g. solid, dotted, dashed.
 * @cssproperty [--indent-guide-width=0] - The width of the indentation line.
 */
export default class WaTree extends WebAwesomeElement {
    static css: string;
    defaultSlot: HTMLSlotElement;
    expandedIconSlot: HTMLSlotElement;
    collapsedIconSlot: HTMLSlotElement;
    /**
     * The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
     * displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.
     */
    selection: 'single' | 'multiple' | 'leaf';
    private lastFocusedItem;
    private mutationObserver;
    private clickTarget;
    private readonly localize;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private getExpandButtonIcon;
    private initTreeItem;
    private handleTreeChanged;
    private selectItem;
    private getAllTreeItems;
    private focusItem;
    private handleKeyDown;
    private handleClick;
    handleMouseDown(event: MouseEvent): void;
    private handleFocusOut;
    private handleFocusIn;
    private handleSlotChange;
    handleSelectionChange(): Promise<void>;
    /** @internal Returns the list of tree items that are selected in the tree. */
    get selectedItems(): WaTreeItem[];
    /** @internal Gets focusable tree items in the tree. */
    getFocusableItems(): WaTreeItem[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wa-tree': WaTree;
    }
}
