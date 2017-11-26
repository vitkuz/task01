/*add a src/tempPolyfills.js file to create the global request animation frame function that React now depends on.*/


/* eslint-disable no-underscore-dangle */
const requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};

global.requestAnimationFrame = requestAnimationFrame;

export default requestAnimationFrame;
/* eslint-enable */
