const { readFile } = require('fs').promises;
const tf = require('@tensorflow/tfjs-node');
const cocoSsd = require('@tensorflow-models/coco-ssd');

module.exports = async config => {
  // Load the model.
  const model = await cocoSsd.load(config);
  return async (filename) => {
    const data = await readFile(filename);
    const img = tf.node.decodeImage(new Uint8Array(data), 3);
    // Classify the image.
    return model.detect(img);
  };
};