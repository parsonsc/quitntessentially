/* Widget to build the blocks */
(function (a, b) {
    var c = function (e, h, g) {
        var f, d;
        h = parseInt(h, 10);
        g = parseInt(g, 10);
        if (h !== g && 0 <= h && h <= e.length && 0 <= g && g <= e.length) {
            d = e[h];
            if (h < g) {
                for (f = h; f < g; f++) {
                    e[f] = e[f + 1]
                }
            } else {
                for (f = h; f > g; f--) {
                    e[f] = e[f - 1]
                }
            }
            e[g] = d
        }
    };
    a.widget("ctg.grid", {
        grid: [],
        colCount: 0,
        options: {
            cellWidth: 500,
            aspect: 1,
            minCols: 2,
            cellPadding: 0,
            debug: false,
            scaleCells: true
        },
        _init: function () {
            var d = this;
            this._objects()
        },
        _objects: function () {
            var d = this.objects = {};
            d.firstCellsCache = this.element.children();
            d.cells = this.element.children();
            d.view = this.options.view;
			this.refresh();
        },
        refresh: function () {
            this._setColCount();
            this._trigger("resize", null, {
                colCount: this.colCount,
                objects: this.objects
            });
            this.positionCells(this.colCount)
        },
        _setColCount: function () {
            var d = this.options.minCols,
                e = this.element.width();
            while (e / d > this.options.cellWidth) {
                d++
            }
            this.colCount = d
        },
        positionCells: function (d) {
            var t = this,
                q = 0,
                h = this.objects.cells.toArray(),
                p = 0,
                e = Math.ceil(this.element.width() / d),
                m = Math.floor(e * this.options.aspect);
            this.grid = [];
            while (q < h.length) {
                this.grid[p] = this.grid[p] || [];
                for (var g = 0; g < d; g++) {
                    var l = a(h[q]),
                        o = l.data("colspan"),
                        y = l.data("rowspan"),
                        r = this._getAvailableWidth(p, g),
                        f = false;
                    if (o > r) {
                        if (r === 0) {
                            continue
                        }
                        var n = r,
                            x = b,
                            u = h.length;
                        do {
                            for (var s = q; s < u; s++) {
                                if (a(h[s]).data("colspan") === n) {
                                    x = s;
                                    break
                                }
                            }
                            n--;
                            if (n < 0) {
                                f = true;
                                if (window.console) {
                                    console.warn("More cells are required")
                                }
                                break
                            }
                        } while (x === b);
                        if (f) {
                            break
                        }
                        c(h, x, q);
                        g--;
                        continue
                    }
                    l.css({
                        top: Math.ceil(m * p),
                        left: Math.ceil(e * g),
                        width: Math.floor(e * o) - t.options.cellPadding * 2,
                        height: Math.floor(m * y) - t.options.cellPadding * 2
                        //fontSize: (Math.floor(e * o) - t.options.cellPadding * o) / ((t.options.cellWidth * o) - t.options.cellPadding * o) * 100 + "px"
                    });
                    if (this.options.debug) {
                        l.find(".debug").html("Width: " + e * o + "<br/> Height: " + m * y)
                    }
                    for (var w = 0; w < y; w++) {
                        this.grid[p + w] = this.grid[p + w] || [];
                        for (var v = 0; v < o; v++) {
                            this.grid[p + w][g + v] = l
                        }
                    }
                    g = g + (o - 1);
                    q++
                }
                p++
            }
            this.element.height(function () {
                var i = [];
                t.objects.cells.filter(":visible").each(function () {
                    var k = a(this),
                        j = k.data("rowspan");
                    i.push(parseInt(k.css("top"), 10) + j * m)
                });
                return Math.max.apply(Math, i)
            });
            return
        },
        _addDebugDiv: function () {
            this.objects.firstCellsCache.each(function () {
                a(this).prepend('<div class="debug"></div>')
            })
        },
        _getAvailableWidth: function (e, g) {
            var f = 0;
            for (var d = g; d < this.colCount; d++) {
                if (this.grid[e][d] === b) {
                    f++
                } else {
                    break
                }
            }
            return f
        }
    })
})(jQuery);