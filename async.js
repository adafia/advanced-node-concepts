const https = require('https');

const start = Date.now();

function doRequest() {
  https.request('https://www.google.com', res => {
    res.on('data', () => { });
    res.on('end', () => {
      console.log(Date.now() - start)
    })
  }).end()
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

// However, there are certain functions that the UV library of node can't handle
// this is because it requires certain low level code/syntax that operating systems understand/ or are build on
// so tasks/functions like http/https request are delegated to the operating system to handle
// the results of all the above a six request are avaialable more or less at the same time because operating systems are not limitted the 4 thread of the UV library
// these functions are the run entirely outside the event loop
