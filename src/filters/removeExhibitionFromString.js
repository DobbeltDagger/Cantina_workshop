function removeExhibitionFromString(stringArray) {
  const arr = stringArray.map( s => s.replace("Exhibition", ""));
  // console.log("arr:", arr);
  return arr;
}

module.exports = removeExhibitionFromString