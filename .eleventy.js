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
  
  /*
  // cant get this to work?
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
