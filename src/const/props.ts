import { Numeric } from './defaultOptions'

type CSSGlobalValues = 'inherit' | 'initial' | 'unset'

type FlexboxBasicAlignment =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'

type FlexboxBaselineAlignment = 'baseline' | 'fist baseline' | 'last baseline'

type FlexboxDistributedAlignment =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'

type FlexboxSelfAlignment = 'self-start' | 'self-end'
type FlexboxOverflowAlignment = 'safe center' | 'unsafe center'

export interface GenericProps {
  /**
   * Aligns flex items of the current flex.
   * @css `align-self`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  align?:
    | 'auto'
    | 'normal'
    | 'stretch'
    | FlexboxBasicAlignment
    | FlexboxBaselineAlignment
    | FlexboxSelfAlignment
    | FlexboxOverflowAlignment
    | CSSGlobalValues
  /**
   * Aligns direct children as a group.
   * @css `align-items`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  alignItems?:
    | 'normal'
    | 'stretch'
    | FlexboxBasicAlignment
    | FlexboxBaselineAlignment
    | FlexboxSelfAlignment
    | FlexboxOverflowAlignment
    | CSSGlobalValues
  /**
   * Distributes space around and between content items.
   * @css `align-content`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   */
  alignContent?:
    | 'stretch'
    | FlexboxBasicAlignment
    | FlexboxBaselineAlignment
    | FlexboxDistributedAlignment
    | FlexboxOverflowAlignment
    | CSSGlobalValues
  /**
   * Justifies a box inside its alignment container.
   * @css `justify-self`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
   */
  justify?:
    | 'stretch'
    | FlexboxBasicAlignment
    | FlexboxBaselineAlignment
    | FlexboxSelfAlignment
    | FlexboxOverflowAlignment
    | CSSGlobalValues
  /**
   * Justifies direct children.
   * @css `justify-items`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
   */
  justifyItems?:
    | 'auto'
    | 'stretch'
    | FlexboxBasicAlignment
    | FlexboxSelfAlignment
    | FlexboxBaselineAlignment
    | FlexboxOverflowAlignment
    | CSSGlobalValues
  /**
   * Justifies space between and around content items along the main axis.
   * @css `justify-content`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justifyContent?:
    | 'normal'
    | 'stretch'
    | FlexboxSelfAlignment
    | FlexboxDistributedAlignment
    | FlexboxOverflowAlignment

  place?: '...'

  /**
   * Shorthand for `align-items` and `justify-items`.
   * @css `place-items`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/place-items
   */
  placeItems?:
    | 'auto'
    | 'normal'
    | FlexboxBasicAlignment
    | FlexboxSelfAlignment
    | FlexboxBaselineAlignment
    | CSSGlobalValues
  /**
   * Shorthand for `align-content` and `justify-content`.
   * @css `place-content`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/place-content
   */
  placeContent?:
    | 'stretch'
    | FlexboxBasicAlignment
    | FlexboxBaselineAlignment
    | FlexboxDistributedAlignment
    | CSSGlobalValues

  height?: Numeric
  minHeight?: Numeric
  maxHeight?: Numeric
  width?: Numeric
  minWidth?: Numeric
  maxWidth?: Numeric

  margin?: Numeric
  marginTop?: Numeric
  marginRight?: Numeric
  marginBottom?: Numeric
  marginLeft?: Numeric
  /**
   * Shorthand for `margin-top` and `margin-bottom`.
   */
  marginVertical?: Numeric
  /**
   * Shorthand for `margin-right` and `margin-left`.
   */
  marginHorizontal?: Numeric

  padding?: Numeric
  paddingTop?: Numeric
  paddingRight?: Numeric
  paddingBottom?: Numeric
  paddingLeft?: Numeric
  /**
   * Shorthand for `padding-top` and `padding-bottom`.
   */
  paddingVertical?: Numeric
  /**
   * Shorthand for `padding-right` and `padding-left`.
   */
  paddingHorizontal?: Numeric
}

export interface GridProps extends GenericProps {
  /**
   * Grid areas.
   * @css `grid-template-areas`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
   */
  template?: string
  /**
   * @css `grid-template-columns`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
   */
  templateCols?: string
  /**
   * @css `grid-template-rows`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
   */
  templateRows?: string
  /**
   * Shorthand for `grid-column-start` and `grid-column-end` specifying a grid item's
   * size and location within the grid column.
   * @css `grid-column`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   */
  col?: 'auto' | string
  /**
   * Grid item's start position within the grid column.
   * @css `grid-column-start`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
   */
  colStart?: string
  /**
   * Grid item's end position within the grid column.
   * @css `grid-column-end`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
   */
  colEnd?: string
  /**
   * Shorthand for `grid-row-start` and `grid-row-end` specifying a grid item's
   * size and location within the grid row.
   * @css `grid-row`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
   */
  row?: 'auto' | string
  /**
   * Grid item's start position within the grid row.
   * @css `grid-row-start`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
   */
  rowStart?: string
  /**
   * Grid item's end position within the grid row.
   * @css `grid-row-end`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
   */
  rowEnd?: string
  /**
   * Spacing between rows and columns.
   * @css `grid-gap`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
   */
  gutter?: Numeric
  /**
   * Spacing between the grid columns.
   * @css `grid-column-gap`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
   */
  gutterCol?: Numeric
  /**
   * Spacing between the grid rows.
   * @css `grid-row-gap`
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
   */
  gutterRow?: Numeric
}
