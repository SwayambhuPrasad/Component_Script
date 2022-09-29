System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _parseGIF, _decompressFrames, _decompressFrame, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        //#region Binary Schema Parser for GIF
        var parse = function parse(stream, schema, result, parent) {
          if (result === void 0) {
            result = {};
          }

          if (parent === void 0) {
            parent = result;
          }

          if (Array.isArray(schema)) {
            schema.forEach(partSchema => parse(stream, partSchema, result, parent));
          } else if (typeof schema === "function") {
            schema(stream, result, parent, parse);
          } else {
            var key = Object.keys(schema)[0];

            if (Array.isArray(schema[key])) {
              parent[key] = {};
              parse(stream, schema[key], result, parent[key]);
            } else {
              parent[key] = schema[key](stream, result, parent, parse);
            }
          }

          return result;
        };

        var conditional = (schema, conditionFunc) => (stream, result, parent, parse) => {
          if (conditionFunc(stream, result, parent)) {
            parse(stream, schema, result, parent);
          }
        };

        var loop = (schema, continueFunc) => (stream, result, parent, parse) => {
          var arr = [];
          var lastStreamPos = stream.pos;

          while (continueFunc(stream, result, parent)) {
            var newParent = {};
            parse(stream, schema, result, newParent); // cases when whole file is parsed but no termination is there and stream position is not getting updated as well
            // it falls into infinite recursion, null check to avoid the same

            if (stream.pos === lastStreamPos) {
              break;
            }

            lastStreamPos = stream.pos;
            arr.push(newParent);
          }

          return arr;
        }; // Default stream and parsers for Uint8TypedArray data type


        var buildStream = uint8Data => ({
          data: uint8Data,
          pos: 0
        });

        var readByte = () => stream => {
          return stream.data[stream.pos++];
        };

        var peekByte = function peekByte(offset) {
          if (offset === void 0) {
            offset = 0;
          }

          return stream => {
            return stream.data[stream.pos + offset];
          };
        };

        var readBytes = length => stream => {
          return stream.data.subarray(stream.pos, stream.pos += length);
        };

        var peekBytes = length => stream => {
          return stream.data.subarray(stream.pos, stream.pos + length);
        };

        var readString = length => stream => {
          return Array.from(readBytes(length)(stream)).map(value => String.fromCharCode(value)).join("");
        };

        var readUnsigned = littleEndian => stream => {
          var bytes = readBytes(2)(stream);
          return littleEndian ? (bytes[1] << 8) + bytes[0] : (bytes[0] << 8) + bytes[1];
        };

        var readArray = (byteSize, totalOrFunc) => (stream, result, parent) => {
          var total = typeof totalOrFunc === "function" ? totalOrFunc(stream, result, parent) : totalOrFunc;
          var parser = readBytes(byteSize);
          var arr = new Array(total);

          for (var i = 0; i < total; i++) {
            arr[i] = parser(stream);
          }

          return arr;
        };

        var subBitsTotal = (bits, startIndex, length) => {
          var result = 0;

          for (var i = 0; i < length; i++) {
            result += bits[startIndex + i] && 2 ** (length - i - 1);
          }

          return result;
        };

        var readBits = schema => stream => {
          var byte = readByte()(stream); // convert the byte to bit array

          var bits = new Array(8);

          for (var i = 0; i < 8; i++) {
            bits[7 - i] = !!(byte & 1 << i);
          } // convert the bit array to values based on the schema


          return Object.keys(schema).reduce((res, key) => {
            var def = schema[key];

            if (def.length) {
              res[key] = subBitsTotal(bits, def.index, def.length);
            } else {
              res[key] = bits[def.index];
            }

            return res;
          }, {});
        }; // a set of 0x00 terminated subblocks


        var subBlocksSchema = {
          blocks: stream => {
            var terminator = 0x00;
            var chunks = [];
            var streamSize = stream.data.length;
            var total = 0;

            for (var size = readByte()(stream); size !== terminator; size = readByte()(stream)) {
              // size becomes undefined for some case when file is corrupted and  terminator is not proper
              // null check to avoid recursion
              if (!size) break; // catch corrupted files with no terminator

              if (stream.pos + size >= streamSize) {
                var availableSize = streamSize - stream.pos;
                chunks.push(readBytes(availableSize)(stream));
                total += availableSize;
                break;
              }

              chunks.push(readBytes(size)(stream));
              total += size;
            }

            var result = new Uint8Array(total);
            var offset = 0;

            for (var i = 0; i < chunks.length; i++) {
              result.set(chunks[i], offset);
              offset += chunks[i].length;
            }

            return result;
          }
        }; // global control extension

        var gceSchema = conditional({
          gce: [{
            codes: readBytes(2)
          }, {
            byteSize: readByte()
          }, {
            extras: readBits({
              future: {
                index: 0,
                length: 3
              },
              disposal: {
                index: 3,
                length: 3
              },
              userInput: {
                index: 6
              },
              transparentColorGiven: {
                index: 7
              }
            })
          }, {
            delay: readUnsigned(true)
          }, {
            transparentColorIndex: readByte()
          }, {
            terminator: readByte()
          }]
        }, stream => {
          var codes = peekBytes(2)(stream);
          return codes[0] === 0x21 && codes[1] === 0xf9;
        }); // image pipeline block

        var imageSchema = conditional({
          image: [{
            code: readByte()
          }, {
            descriptor: [{
              left: readUnsigned(true)
            }, {
              top: readUnsigned(true)
            }, {
              width: readUnsigned(true)
            }, {
              height: readUnsigned(true)
            }, {
              lct: readBits({
                exists: {
                  index: 0
                },
                interlaced: {
                  index: 1
                },
                sort: {
                  index: 2
                },
                future: {
                  index: 3,
                  length: 2
                },
                size: {
                  index: 5,
                  length: 3
                }
              })
            }]
          }, conditional({
            lct: readArray(3, (stream, result, parent) => {
              return Math.pow(2, parent.descriptor.lct.size + 1);
            })
          }, (stream, result, parent) => {
            return parent.descriptor.lct.exists;
          }), {
            data: [{
              minCodeSize: readByte()
            }, subBlocksSchema]
          }]
        }, stream => {
          return peekByte()(stream) === 0x2c;
        }); // plain text block

        var textSchema = conditional({
          text: [{
            codes: readBytes(2)
          }, {
            blockSize: readByte()
          }, {
            preData: (stream, result, parent) => readBytes(parent.text.blockSize)(stream)
          }, subBlocksSchema]
        }, stream => {
          var codes = peekBytes(2)(stream);
          return codes[0] === 0x21 && codes[1] === 0x01;
        }); // application block

        var applicationSchema = conditional({
          application: [{
            codes: readBytes(2)
          }, {
            blockSize: readByte()
          }, {
            id: (stream, result, parent) => readString(parent.blockSize)(stream)
          }, subBlocksSchema]
        }, stream => {
          var codes = peekBytes(2)(stream);
          return codes[0] === 0x21 && codes[1] === 0xff;
        }); // comment block

        var commentSchema = conditional({
          comment: [{
            codes: readBytes(2)
          }, subBlocksSchema]
        }, stream => {
          var codes = peekBytes(2)(stream);
          return codes[0] === 0x21 && codes[1] === 0xfe;
        });
        var schema = [{
          header: [{
            signature: readString(3)
          }, {
            version: readString(3)
          }]
        }, {
          lsd: [{
            width: readUnsigned(true)
          }, {
            height: readUnsigned(true)
          }, {
            gct: readBits({
              exists: {
                index: 0
              },
              resolution: {
                index: 1,
                length: 3
              },
              sort: {
                index: 4
              },
              size: {
                index: 5,
                length: 3
              }
            })
          }, {
            backgroundColorIndex: readByte()
          }, {
            pixelAspectRatio: readByte()
          }]
        }, conditional({
          gct: readArray(3, (stream, result) => Math.pow(2, result.lsd.gct.size + 1))
        }, (stream, result) => result.lsd.gct.exists), // content frames
        {
          frames: loop([gceSchema, applicationSchema, commentSchema, imageSchema, textSchema], stream => {
            var nextCode = peekByte()(stream); // rather than check for a terminator, we should check for the existence
            // of an ext or image block to avoid infinite loops
            //var terminator = 0x3B;
            //return nextCode !== terminator;

            return nextCode === 0x21 || nextCode === 0x2c;
          })
        }];
        var GIF = schema; //#endregion

        /**
         * Deinterlace function from https://github.com/shachaf/jsgif
         */

        var deinterlace = (pixels, width) => {
          var newPixels = new Array(pixels.length);
          var rows = pixels.length / width;

          var cpRow = function cpRow(toRow, fromRow) {
            var fromPixels = pixels.slice(fromRow * width, (fromRow + 1) * width);
            newPixels.splice.apply(newPixels, [toRow * width, width].concat(fromPixels));
          }; // See appendix E.


          var offsets = [0, 4, 2, 1];
          var steps = [8, 8, 4, 2];
          var fromRow = 0;

          for (var pass = 0; pass < 4; pass++) {
            for (var toRow = offsets[pass]; toRow < rows; toRow += steps[pass]) {
              cpRow(toRow, fromRow);
              fromRow++;
            }
          }

          return newPixels;
        }; //#region LZW decompression

        /**
         * javascript port of java LZW decompression
         * Original java author url: https://gist.github.com/devunwired/4479231
         */


        var lzw = (minCodeSize, data, pixelCount) => {
          var MAX_STACK_SIZE = 4096;
          var nullCode = -1;
          var npix = pixelCount;
          var available, clear, code_mask, code_size, end_of_information, in_code, old_code, bits, code, i, datum, data_size, first, top, bi, pi;
          var dstPixels = new Array(pixelCount);
          var prefix = new Array(MAX_STACK_SIZE);
          var suffix = new Array(MAX_STACK_SIZE);
          var pixelStack = new Array(MAX_STACK_SIZE + 1); // Initialize GIF data stream decoder.

          data_size = minCodeSize;
          clear = 1 << data_size;
          end_of_information = clear + 1;
          available = clear + 2;
          old_code = nullCode;
          code_size = data_size + 1;
          code_mask = (1 << code_size) - 1;

          for (code = 0; code < clear; code++) {
            prefix[code] = 0;
            suffix[code] = code;
          } // Decode GIF pixel stream.


          var datum, bits, count, first, top, pi, bi;
          datum = bits = count = first = top = pi = bi = 0;

          for (i = 0; i < npix;) {
            if (top === 0) {
              if (bits < code_size) {
                // get the next byte
                datum += data[bi] << bits;
                bits += 8;
                bi++;
                continue;
              } // Get the next code.


              code = datum & code_mask;
              datum >>= code_size;
              bits -= code_size; // Interpret the code

              if (code > available || code == end_of_information) {
                break;
              }

              if (code == clear) {
                // Reset decoder.
                code_size = data_size + 1;
                code_mask = (1 << code_size) - 1;
                available = clear + 2;
                old_code = nullCode;
                continue;
              }

              if (old_code == nullCode) {
                pixelStack[top++] = suffix[code];
                old_code = code;
                first = code;
                continue;
              }

              in_code = code;

              if (code == available) {
                pixelStack[top++] = first;
                code = old_code;
              }

              while (code > clear) {
                pixelStack[top++] = suffix[code];
                code = prefix[code];
              }

              first = suffix[code] & 0xff;
              pixelStack[top++] = first; // add a new string to the table, but only if space is available
              // if not, just continue with current table until a clear code is found
              // (deferred clear code implementation as per GIF spec)

              if (available < MAX_STACK_SIZE) {
                prefix[available] = old_code;
                suffix[available] = first;
                available++;

                if ((available & code_mask) === 0 && available < MAX_STACK_SIZE) {
                  code_size++;
                  code_mask += available;
                }
              }

              old_code = in_code;
            } // Pop a pixel off the pixel stack.


            top--;
            dstPixels[pi++] = pixelStack[top];
            i++;
          }

          for (i = pi; i < npix; i++) {
            dstPixels[i] = 0; // clear missing pixels
          }

          return dstPixels;
        }; //#endregion


        var parseGIF = arrayBuffer => {
          var byteData = new Uint8Array(arrayBuffer);
          return parse(buildStream(byteData), GIF);
        };

        var generatePatch = image => {
          var totalPixels = image.pixels.length;
          var patchData = new Uint8ClampedArray(totalPixels * 4);

          for (var i = 0; i < totalPixels; i++) {
            var pos = i * 4;
            var colorIndex = image.pixels[i];
            var color = image.colorTable[colorIndex] || [0, 0, 0];
            patchData[pos] = color[0];
            patchData[pos + 1] = color[1];
            patchData[pos + 2] = color[2];
            patchData[pos + 3] = colorIndex !== image.transparentIndex ? 255 : 0;
          }

          return patchData;
        };

        var decompressFrame = (frame, gct, buildImagePatch) => {
          if (!frame.image) {
            console.warn("gif frame does not have associated image.");
            return;
          }

          var {
            image
          } = frame; // get the number of pixels

          var totalPixels = image.descriptor.width * image.descriptor.height; // do lzw decompression

          var pixels = lzw(image.data.minCodeSize, image.data.blocks, totalPixels); // deal with interlacing if necessary

          if (image.descriptor.lct.interlaced) {
            pixels = deinterlace(pixels, image.descriptor.width);
          }

          var resultImage = {
            pixels: pixels,
            dims: {
              top: frame.image.descriptor.top,
              left: frame.image.descriptor.left,
              width: frame.image.descriptor.width,
              height: frame.image.descriptor.height
            }
          }; // color table

          if (image.descriptor.lct && image.descriptor.lct.exists) {
            resultImage.colorTable = image.lct;
          } else {
            resultImage.colorTable = gct;
          } // add per frame relevant gce information


          if (frame.gce) {
            resultImage.delay = (frame.gce.delay || 10) * 10; // convert to ms

            resultImage.disposalType = frame.gce.extras.disposal; // transparency

            if (frame.gce.extras.transparentColorGiven) {
              resultImage.transparentIndex = frame.gce.transparentColorIndex;
            }
          } // create canvas usable imagedata if desired


          if (buildImagePatch) {
            resultImage.patch = generatePatch(resultImage);
          }

          return resultImage;
        };

        var decompressFrames = (parsedGif, buildImagePatches) => {
          return parsedGif.frames.filter(f => f.image).map(f => decompressFrame(f, parsedGif.gct, buildImagePatches));
        };

        module.exports = {
          parseGIF,
          decompressFrames,
          decompressFrame
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _parseGIF = module.exports.parseGIF;
        _decompressFrames = module.exports.decompressFrames;
        _decompressFrame = module.exports.decompressFrame;
      }, {});
    }
  };
});
//# sourceMappingURL=b8dbf3b4f0a95d4419b830d66fd044262e11c33f.js.map