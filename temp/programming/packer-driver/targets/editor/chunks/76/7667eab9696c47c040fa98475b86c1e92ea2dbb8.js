System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Bounds, Margin, VirtualCanvasNode, _crd;

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", ".", _context.meta, extras);
  }

  _export({
    Bounds: void 0,
    VirtualCanvasNode: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "690f0SbzQtHaICqzRb6I0Az", "VirtualCanvasNode", undefined);

      _export("Bounds", Bounds = class Bounds {
        constructor(x = 0, y = 0, width = 0, height = 0) {
          this.x = void 0;
          this.y = void 0;
          this.width = void 0;
          this.height = void 0;
          this.x = x != null ? x : 0;
          this.y = y != null ? y : 0;
          this.width = width != null ? width : 0;
          this.height = height != null ? height : 0;
        }

        clone() {
          return new Bounds(this.x, this.y, this.width, this.height);
        }
        /**
         * Extends the current bounds to account for the passed in Rect or Point.
         * @param  {Object} bounds - Object with x and y, with optional width/height
         */


        extend(bounds) {
          const {
            x,
            y,
            width = 0,
            height = 0
          } = bounds;

          if (x < this.x) {
            this.width += this.x - x;
            this.x = x;
          }

          if (y < this.y) {
            this.height += this.y - y;
            this.y = y;
          }

          if (x + width > this.x + this.width) {
            this.width = x + width - this.x;
          }

          if (y + height > this.y + this.height) {
            this.height = y + height - this.y;
          }
        }

        set(other) {
          var _other$x, _other$y, _other$width, _other$height;

          this.x = (_other$x = other.x) != null ? _other$x : this.x;
          this.y = (_other$y = other.y) != null ? _other$y : this.y;
          this.width = (_other$width = other.width) != null ? _other$width : this.width;
          this.height = (_other$height = other.height) != null ? _other$height : this.height;
        }

      });

      Margin = class Margin {
        constructor() {
          this.left = void 0;
          this.right = void 0;
          this.left = 0;
          this.right = 0;
        }

        set(other) {
          var _other$left, _other$right;

          this.left = (_other$left = other.left) != null ? _other$left : this.left;
          this.right = (_other$right = other.right) != null ? _other$right : this.right;
        }

      };
      /**
       * A Virtual Node represents the interface for a all sub Nodes.
       * They are simple models, which allow the data to be translated to most
       * rendering platforms.
       *
       * @abstract
       */

      _export("VirtualCanvasNode", VirtualCanvasNode = class VirtualCanvasNode {
        constructor(classes) {
          this.margin = void 0;
          this.bounds = void 0;
          this.classes = void 0;
          this.margin = new Margin();
          this.bounds = new Bounds();
          this.classes = classes != null ? classes : [];
        }
        /**
         * Returns the type of the VirtualCanvasNode
         *
         * @abstract
         * @return {string}
         */


        /**
         * Sets the node's x/y position
         */
        setPosition(x, y) {
          this.bounds.x = x;
          this.bounds.y = y;
        }
        /**
         * Sets the node's size.
         * @param w Width
         * @param h Height
         */


        setSize(w, h) {
          this.bounds.width = w;
          this.bounds.height = h;
        }
        /**
         * Gets the abolsute bounds of this node relative to (0, 0)
         * @return {Bounds}
         */


        getBounds() {
          return this.bounds;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7667eab9696c47c040fa98475b86c1e92ea2dbb8.js.map