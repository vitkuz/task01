/* eslint-disable no-underscore-dangle */
const requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};

global.requestAnimationFrame = requestAnimationFrame;

export default requestAnimationFrame;
/* eslint-enable */

