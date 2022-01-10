const objectDetection = require('..');

(async () => {
    const detect = await objectDetection();
    const predictions = await detect('/Users/Lsong/Desktop/a.jpg');
    console.log('Predictions:', predictions);
})();