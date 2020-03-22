process.env.UV_THREADPOOL_SIZE = 5
const crypto = require('crypto')

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start);
});

// Node Event loop is single threaded
// However, it has access to the UV libreary that handles concurrencies
// so CPU intensive tasks / expensive operations are delegated to other threads made available by the UV library
// The UV library makes 4 threads available by default
// All fs functions are deligated to the external thread(s) made available by the UV library.
  