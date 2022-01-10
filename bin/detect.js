#!/usr/bin/env node

const Table = require('cli-table');
const objectDetection = require('..');

const table = new Table({
  head: ['Class', 'Score'],
});

const filenames = process.argv.slice(2);

(async () => {
  const detect = await objectDetection();
  for (const filename of filenames) {
    const predictions = await detect(filename);
    for (const prediction of predictions) {
      table.push([prediction.class, prediction.score, filename]);
    }
  }
  console.log(table.toString());
})();