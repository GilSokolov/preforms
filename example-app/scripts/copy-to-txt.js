const fs = require('fs');
const path = require('path');

const examplesDir = path.join(__dirname, '../src/app/examples');

function copyFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      copyFiles(fullPath);
    } else if (
      entry.isFile() &&
      entry.name !== 'index.ts' &&
      (entry.name.endsWith('.ts') || entry.name.endsWith('.html') || entry.name.endsWith('.scss'))
    ) {
      const dest = fullPath + '.txt';
      fs.copyFileSync(fullPath, dest);
      console.log(`Copied ${fullPath} -> ${dest}`);
    }
  });
}

copyFiles(examplesDir);
