// Min pix width of the single cell!!
var minColWidth = 300; // 128;
var roots;


///////////////////////////////////////////////////////////////////
function onLoad() {
  var rootElements = document.getElementsByClassName('masonry-root');
  roots = Array.prototype.map.call(rootElements, function(rootElement) {
    var cellElements = rootElement.getElementsByClassName('masonry-cell');
    var cells = Array.prototype.map.call(cellElements, function(cellElement) {
      var style = getComputedStyle(cellElement);
      return {
        'element': cellElement,
        'outerHeight': parseInt(style.marginTop) + cellElement.offsetHeight + parseInt(style.marginBottom)
      };
    });
    return {
      'element': rootElement,
      'noOfColumns': 0,
      'cells': cells
    };
  });
  
  // do the first layout
  onResize();
}


///////////////////////////////////////////////////////////////////
function onResize() {

  console.log("masonry -> onResize was called")
  for (let root of roots) {
    
    // only layout when the number of columns has changed
    var newNoOfColumns = Math.floor(root.element.offsetWidth / minColWidth);
    if (newNoOfColumns != root.noOfColumns) {

      // initialize
      root.noOfColumns = newNoOfColumns;
      var columns = Array.from(new Array(root.noOfColumns)).map( function(column) {
        return {
          'cells': new Array(),
          'outerHeight': 0
        };
      });
      
      // divide...
      for (let cell of root.cells) {
        var minOuterHeight = Math.min(...columns.map( function(column) {
          return column.outerHeight;
        }));
        var column = columns.find( function(column) {
          return column.outerHeight == minOuterHeight;
        });
        column.cells.push(cell);
        column.outerHeight += cell.outerHeight;
      }
      
      // calculate masonry height
      var masonryHeight = Math.max(...columns.map( function(column) {
        return column.outerHeight;
      }));
      
      console.log("columns:", columns);

      // ...and conquer
      var order = 0;
      for (let column of columns) {
        for (let cell of column.cells) {
          cell.element.style.order = order++;
          // set the cell's flex-basis to 0
          cell.element.style.flexBasis = 0;
        }
        // set flex-basis of the last cell to fill the leftover space at the bottom of the column
        // to prevent the first cell of the next column to be rendered at the bottom of this column

        // VISTI: check if column.cells.length - 1 >= 0
        if (column.cells.length - 1 >= 0) {
          column.cells[column.cells.length - 1].element.style.flexBasis = column.cells[column.cells.length - 1].element.offsetHeight + masonryHeight - column.outerHeight - 1 + 'px';
        }

      }

      // set the masonry height to trigger
      // re-rendering of all cells over columns
      // one pixel more than the tallest column
      root.element.style.maxHeight = masonryHeight + 1 + 'px';

      console.log(columns.map( function(column) {
        return column.outerHeight;
      }));
      console.log(root.element.style.maxHeight);
    }
  }
}