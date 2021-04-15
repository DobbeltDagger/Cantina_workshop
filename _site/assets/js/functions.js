///////////////////////////////////////////////////////////////
// making external links:
// https://stackoverflow.com/questions/55891160/how-to-add-an-icon-automatically-to-every-blank-link
function linkopener(a) {
  const hostName = window.location.hostname; // window.location.href;
  var b = a ? "_blank" : "_self";
  var c = document.links;
  for (var i = 0; i < c.length; i++) {
    if (c[i].href.search(hostName) == -1) {
      // console.log("external");
      c[i].addEventListener("click", function () {
        this.target = b;
      });
      c[i].target = b;
      // c[i].className += ' external-link';
      c[i].classList.add('external-link');
    }
  }
};


////////////////////////////////////////////////////////////////
// resize function
// especially for svg burger icon
function resize() {
  
  console.log("resize was called");

  // get size
  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
  
  // do something!

}


////////////////////////////////////////////////////////////////
// get height of document
const getDocHeight = () => {

  var body = document.body;
  var html = document.documentElement;

  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  return height;
};



////////////////////////////////////////////////////////////////
const getScrollPosition = (elm) => {
  const el = document.body; // window;
  return (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop;
};


////////////////////////////////////////////////////////////////
// scroll to X position
const scrollToX = (xpos) => {
  console.log("scrolltoX:", xpos);
  // window.scrollTo({ top: xpos, left: 0, behavior: 'auto' }); // NO IE
  window.scrollTo({ top: xpos, left: 0, behavior: 'smooth' }); // NO IE
  // document.getElementById('pageWrapper').scrollTop = xpos;
};



