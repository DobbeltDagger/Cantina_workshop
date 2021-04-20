const postcss = require("postcss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


// export all this
module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("assets");

  // https://github.com/11ty/eleventy/issues/508
  eleventyConfig.addFilter("postCSS", function(code) {
    return postcss([autoprefixer]).process(code).css;
  });

  // making my own nunjucks filter:
  // https://eszter.space/11ty-njk-filters/
  eleventyConfig.addNunjucksFilter('removeExhibitionFromString', require('./src/filters/removeExhibitionFromString'))

  // Make a collection from three diff tags:
  eleventyConfig.addCollection("allExhibitions", function(collection) {
    const curr = collection.getFilteredByTag("currentExhibition").reverse();
    const upcom = collection.getFilteredByTag("upcomingExhibition").reverse();
    const prev = collection.getFilteredByTag("previousExhibition").reverse();
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    const arr = curr.concat(upcom, prev);
    return arr;
  });
  
  /*
  // cant get this to work?
  // I DONT think this is or - but and.. So post has to have both tags to appear??
  eleventyConfig.addCollection('ResourcePosts', function(collection) {
    console.log("ResourcePosts was hit");
    return collection
      .getAll()
      .filter(item => ['resource', 'post'].includes(item.tag))
  });
  */

  // Get only content that matches a tag
  // from here: https://www.11ty.dev/docs/collections/ (bottom half of page)
  eleventyConfig.addCollection("previousProgram", (collection) => collection.getFilteredByTag("previousProgram") );
  eleventyConfig.addCollection("currentProgram", (collection) => collection.getFilteredByTag("currentProgram") );

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site",
      includes: "includes"
    }
  }
}
