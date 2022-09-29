import { color, Color, Font, SpriteFrame, _decorator } from "cc";
const { ccclass, property } = _decorator;

enum Alignment {
  /**
   * Let the layout engine decide.
   */
  AUTO,
  /**
   * Start margin of the item is placed at the start of the axis.
   */
  START,
  /**
   * Items are centered on the axis.
   */
  CENTER,
  /**
   * End margin of the item is placed at the end of the axis.
   */
  END,
  /**
   * Default. stretch to fill the axis while respecting min/max values.
   */
  STRETCH,
  BASELINE,
  SPACE_BETWEEN,
  SPACE_AROUND,
}

enum Display {
  FLEX,
  NONE,
}

enum FlexDirection {
  /**
   * Top to Bottom.
   */
  COLUMN,
  /**
   * Bottom to Top.
   */
  COLUMN_REVERSE,
  /**
   * Left to Right.
   */
  ROW,
  /**
   * Right to Left.
   */
  ROW_REVERSE,
}

/**
 * Defines the alignment along the main axis, how is extra space distributed.
 */
enum Justify {
  /**
   * Items are packed toward the start line. Default Value.
   */
  START,
  /**
   * Items are centered along the line.
   */
  CENTER,
  /**
   * Items are packed toward the end line.
   */
  END,
  /**
   * Items are evenly distributed in the line; first item is on the start line, last item on the end line.
   */
  SPACE_BETWEEN,
  /**
   * Items are evenly distributed in the line with equal space around them.
   */
  SPACE_AROUND,
}

/**
 * Defines what should happend if content overflows an element bounds.
 */
enum Overflow {
  /**
   * The overflow is not clipped. It renders outside the element's box. Default Value.
   */
  VISIBLE,
  /**
   * The overflow is clipped, and the rest of the content will be invisible.
   */
  HIDDEN,
}

/**
 * Boxes against which the VisualElement content is clipped.
 */
enum OverflowClipBox {
  /**
   * Clip the content against the box outside the padding areas but inside the borders.
   */
  PADDING_BOX,
  /**
   * Clip the content against the box inside the padding areas.
   */
  CONTENT_BOX,
}

/**
 * Defines how the position values are interpreted by the layout engine.
 */
enum Position {
  /**
   * The element is positioned in relation to its default box as calculated by layout.
   */
  RELATIVE,
  /**
   * The element is positioned in relation to its parent box and does not contribute to the layout anymore.
   */
  ABSOLUTE,
}

/**
 * Scaling mode to draw textures with.
 */
enum ScaleMode {
  /**
   * Stretches the texture to fill the complete rectangle.
   */
  STRETCH_TO_FILL,
  /**
   * Scales the texture, maintaining aspect ratio, so it completely covers the position rectangle.
   * If the texture is being draw to a rectangle with a different aspect ratio than the original, the image is cropped.
   */
  SCALE_AND_CROP,
  /**
   * Scales the texture, maintaining aspect ratio, so it completely fits withing the position rectangle.
   */
  SCALE_TO_FIT,
}

/**
 * Specifies how the text Element treats hidden overflow content.
 */
enum TextOverflow {
  /**
   * The Element clips overflow content and hides it. This is the default value.
   */
  CLIP,
  /**
   * The Element clips overflow content and hides it, but displays an ellipsis ("...") to indicate that clipped content exists.
   */
  Ellipsis,
}

/**
 * Specifies which part of the text the Element replaces with an ellipsis when textOverflow is set to TextOverflow.Ellipsis.
 */
enum TextOverflowPosition {
  /**
   * The ellipsis replaces content at the end of the text. This is the default value.
   */
  END,
  /**
   * The ellipsis replaces content at the beginning of the text.
   */
  START,
  /**
   * The ellipsis replaces content in the middle of the text.
   */
  MIDDLE,
}

/**
 * Where the anchor of the text is placed.
 */
enum TextAnchor {
  /**
   * Text is anchored in upper left corner.
   */
  UPPER_LEFT,
  /**
   * Text is anchored in upper side, centered horizontally.
   */
  UPPER_CENTER,
  /**
   * Text is anchored in upper right corner.
   */
  UPPER_RIGHT,
  /**
   * Text is anchored in left side, centered vertically.
   */
  MIDDLE_LEFT,
  /**
   * Text is centered both horizontally and vertically.
   */
  MIDDLE_CENTER,
  /**
   * Text is anchored in right side, centered vertically.
   */
  MIDDLE_RIGHT,
  /**
   * Text is anchored in lower left corner.
   */
  LOWER_LEFT,
  /**
   * Text is anchored in lower side, centered horizontally.
   */
  LOWER_CENTER,
  /**
   * Text is anchored in lower right corner.
   */
  LOWER_RIGHT,
}

/**
 * Specifies whether or not a VisualElement is visible.
 */
enum Visibility {
  /**
   * The VisualElement is visible. Default Value.
   */
  VISIBLE,
  /**
   * The VisualElement is hidden. Hidden VisualElements will take up space in their parent layout
   * if their positionType is set to PositionType.Relative. Use the display property to both hide
   * and remove a VisualElement from the parent VisualElement layout.
   */
  HIDDEN,
}

/**
 * Word wrapping over multiple lines if not enough space is available to draw the text of an element.
 */
enum WhiteSpace {
  /**
   * Text will wrap when necessary.
   */
  NORMAL,
  /**
   * Text will never wrap to the next line.
   */
  NO_WRAP,
}

enum Wrap {
  /**
   * All items will be on one line. Default Value.
   */
  NO_WRAP,
  /**
   * Items will wrap onto multiple lines, from top to bottom.
   */
  WRAP,
  WRAP_REVERSE,
}

export interface IUITheme {
  /**
   * Alignment of the whole area of children on the cross axis if they span over multiple lines in this container.
   */
  alignContent: Alignment;
  /**
   * Alignment of children on the cross axis of this container.
   */
  alignItems: Alignment;
  /**
   * Similar to align-items, but only for this specific element.
   */
  alignSelf: Alignment;
  /**
   * Background color to paint in the element's box.
   */
  backgroundColor: Color;
  /**
   * Background image to paint in the element's box.
   */
  backgroundImage: SpriteFrame | null;
  /**
   * Tinting color for the element's backgroundImage.
   */
  backgroundImageTintColor: Color;
  /**
   * Background image scaling in the element's box.
   */
  backgroundImageScaleMode: ScaleMode;
  /**
   * Size of the 9-slice's bottom edge when painting an element's background image.
   */
  backgroundImageSliceBottom: number;
  /**
   * Size of the 9-slice's left edge when painting an element's background image.
   */
  backgroundImageSliceLeft: number;
  /**
   * Size of the 9-slice's right edge when painting an element's background image.
   */
  backgroundImageSliceRight: number;
  /**
   * Size of the 9-slice's top edge when painting an element's background image.
   */
  backgroundImageSliceTop: number;
  /**
   * Color of the element's bottom border.
   */
  borderBottomColor: Color;
  /**
   * The radius of the bottom-left corner when a rounded rectangle is drawn in the element's box.
   */
  borderBottomLeftRadius: number;
  /**
   * The radius of the bottom-right corner when a rounded rectangle is drawn in the element's box.
   */
  borderBottomRightRadius: number;
  /**
   * Space reserved for the bottom edge of the border during the layout phase.
   */
  borderBottomWidth: number;
  /**
   * Color of the element's left border.
   */
  borderLeftColor: Color;
  /**
   * Space reserved for the left edge of the border during the layout phase.
   */
  borderLeftWidth: number;
  /**
   * Color of the element's right border.
   */
  borderRightColor: Color;
  /**
   * Space reserved for the right edge of the border during the layout phase.
   */
  borderRightWidth: number;
  /**
   * Color of the element's top border.
   */
  borderTopColor: Color;
  /**
   * The radius of the top-left corner when a rounded rectangle is drawn in the element's box.
   */
  borderTopLeftRadius: number;
  /**
   * The radius of the top-right corner when a rounded rectangle is drawn in the element's box.
   */
  borderTopRightRadius: number;
  /**
   * Space reserved for the top edge of the border during the layout phase.
   */
  borderTopWidth: number;
  /**
   * Bottom distance from the element's box during layout.
   */
  bottom: number;
  /**
   * Color to use when drawing the text of an element.
   */
  color: Color;
  /**
   * Mouse cursor to display when the mouse pointer is over an element.
   */
  cursor: string;
  /**
   * Defines how an element is displayed in the layout.
   */
  display: Display;
  /**
   * Initial main size of a flex item, on the main flex axis. The final layout mught be smaller or
   * larger, according to the flex shrinking and growing determined by the flex property.
   */
  flexBasis: number;
  /**
   * Direction of the main axis to layout children in a container.
   */
  flexDirection: FlexDirection;
  /**
   * Specifies how much the item will grow relative to the rest of the flexible items inside the same container.
   */
  flexGrow: number;
  /**
   * Specifies how the item will shrink relative to the rest of the flexible items inside the same container.
   */
  flexShrink: number;
  /**
   * Placement of children over multiple lines if not enough space is available in this container.
   */
  flexWrap: Wrap;
  /**
   * Font to draw the element's text.
   */
  font: Font | null;
  /**
   * Font size to draw the element's text.
   */
  fontSize: number;
  /**
   * Fixed height of an element for the layout.
   */
  height: number;
  /**
   * Justification of children on the main axis of this container.
   */
  justifyContent: Justify;
  /**
   * Left distance from the element's box during layout.
   */
  left: number;
  /**
   * Space reserved for the bottom edge of the margin during the layout phase.
   */
  marginBottom: number;
  /**
   * Space reserved for the left edge of the margin during the layout phase.
   */
  marginLeft: number;
  /**
   * Space reserved for the right edge of the margin during the layout phase.
   */
  marginRight: number;
  /**
   * Space reserved for the top edge of the margin during the layout phase.
   */
  marginTop: number;
  /**
   * Maximum height for an element, when it is flexible or measures its own size.
   */
  maxHeight: number;
  /**
   * Maximum width for an element, when it is flexible or measures its own size.
   */
  maxWidth: number;
  /**
   * Minimum height for an element, when it is flexible or measures its own size.
   */
  minHeight: number;
  /**
   * Minimum width for an element, when it is flexible or measures its own size.
   */
  minWidth: number;
  /**
   * Specifies the transparency of an element.
   */
  opacity: number;
  /**
   * How a container behaves if its content overflows its own box.
   */
  overflow: Overflow;
  /**
   * Specifies which box the element content is clipped against.
   */
  overflowClipBox: OverflowClipBox;
  /**
   * Space reserved for the bottom edge of the padding during the layout phase.
   */
  paddingBottom: number;
  /**
   * Space reserved for the left edge of the padding during the layout phase.
   */
  paddingLeft: number;
  /**
   * Space reserved for the right edge of the padding during the layout phase.
   */
  paddingRight: number;
  /**
   * Space reserved for the top edge of the padding during the layout phase.
   */
  paddingTop: number;
  /**
   * Element's positioning in its parent container.
   */
  position: Position;
  /**
   * Right distance from the element's box during layout.
   */
  right: number;
  /**
   * The element's text overflow mode.
   */
  textOverflow: TextOverflow;
  /**
   * Top distance from the element's box during layout.
   */
  top: number;
  /**
   * Horizontal and vertical text alignment in the element's box.
   */
  textAlign: TextAnchor;
  /**
   * The element's text overflow position.
   */
  textOverflowPosition: TextOverflowPosition;
  /**
   * Specifies whether or not an element is visible.
   */
  visibility: Visibility;
  /**
   * Word wrapping over multiple lines if not enough space is available to draw the text of an element.
   */
  whiteSpace: WhiteSpace;
  /**
   * Fixed width of an element for the layout.
   */
  width: number;
}

@ccclass("UITheme")
export class UITheme implements IUITheme {
  @property alignContent = Alignment.STRETCH;

  @property alignItems = Alignment.STRETCH;

  @property alignSelf = Alignment.STRETCH;

  @property backgroundColor = color();

  @property backgroundImage: SpriteFrame | null = null;

  @property backgroundImageTintColor = color();

  @property backgroundImageScaleMode = ScaleMode.SCALE_AND_CROP;

  @property backgroundImageSliceBottom: number = 0;

  @property backgroundImageSliceLeft: number = 0;

  @property backgroundImageSliceRight: number = 0;

  @property backgroundImageSliceTop: number = 0;

  @property borderBottomColor = color();

  @property borderBottomLeftRadius: number = 0;

  @property borderBottomRightRadius: number = 0;

  @property borderBottomWidth: number = 0;

  @property borderLeftColor = color();

  @property borderLeftWidth: number = 0;

  @property borderRightColor = color();

  @property borderRightWidth: number = 0;

  @property borderTopColor = color();

  @property borderTopLeftRadius: number = 0;

  @property borderTopRightRadius: number = 0;

  @property borderTopWidth: number = 0;

  @property bottom: number = 0;

  @property color = color();

  @property cursor = "pointer";

  @property display = Display.FLEX;

  @property flexBasis: number = 0;

  @property flexDirection = FlexDirection.COLUMN;

  @property flexGrow: number = 0;

  @property flexShrink: number = 0;

  @property flexWrap = Wrap.NO_WRAP;

  @property font: Font | null = null;

  @property fontSize: number = 20;

  @property height: number = 100;

  @property justifyContent = Justify.START;

  @property left: number = 0;

  @property marginBottom: number = 0;

  @property marginLeft: number = 0;

  @property marginRight: number = 0;

  @property marginTop: number = 0;

  @property maxHeight: number = 0;

  @property maxWidth: number = 0;

  @property minHeight: number = 0;

  @property minWidth: number = 0;

  @property opacity: number = 0;

  @property overflow = Overflow.VISIBLE;

  @property overflowClipBox = OverflowClipBox.PADDING_BOX;

  @property paddingBottom: number = 0;

  @property paddingLeft: number = 0;

  @property paddingRight: number = 0;

  @property paddingTop: number = 0;

  @property position = Position.RELATIVE;

  @property right: number = 0;

  @property textOverflow = TextOverflow.CLIP;

  @property top: number = 0;

  @property textAlign = TextAnchor.MIDDLE_CENTER;

  @property textOverflowPosition = TextOverflowPosition.END;

  @property visibility = Visibility.VISIBLE;

  @property whiteSpace = WhiteSpace.NORMAL;

  @property width: number = 0;
}
