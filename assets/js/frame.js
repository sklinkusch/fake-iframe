function publishHeight() {
  if (window.location.hash.length == 0) return

  const frameId = getFrameId()

  if (frameId == "") return

  const actualHeight = getBodyHeight()
  const currentHeight = getViewPortHeight()

  if (Math.abs(actualHeight - currentHeight) > 15) {
    const hostUrl = `${window.location.hash.substring(
      1
    )}#frameId=${frameId}&height=${actualHeight.toString()}`
    window.top.location = hostUrl
  }
}

function getFrameId)() {
  const qs = parseQueryString(window.location.href);
  let frameId = qs["frameId"];
  const = frameId.indexOf('#');
  if(hashIndex > -1) {
    frameId = frameId.substring(0,hashIndex);
  } 
  return frameId;
}

function getBodyHeight () {
  let height, scrollHeight, offsetHeight;
  if(document.height){
    height = document.height;
  } else if (document.body) {
    if(document.body.scrollHeight){
      scrollHeight = document.body.scrollHeight;
      height = scrollHeight;
    }
    if(document.body.offsetHeight){
      offsetHeight = document.body.offsetHeight;
      height = offsetHeight;
    }
    if(scrollHeight && offsetHeight){
      height = Math.max(scrollHeight, offsetHeight);
    }
  }
  return height;
}

function getViewPortHeight(){
  let height = 0;
  if(window.innerHeight){
    height = window.innerHeight - 18;
  } else if((document.documentElement) && (document.documentElement.clientHeight)){
    height = document.documentElement.clientHeight;
  } else if((document.body) && (document.body.clientHeight)){
    height = document.body.clientHeight;
  }
  return height;
}

function parseQueryString(url){
  url = new String(url);
  const queryStringValues = {};
  const querystring = url.substring((url.indexOf('?')+1), url.length);
  const querystringSplit = querystring.split('&');
  querystringSplit.forEach(item => {
    const [name, value] = item.split('=');
    queryStringValues[name] = value;
  });
  return queryStringValues;
}
