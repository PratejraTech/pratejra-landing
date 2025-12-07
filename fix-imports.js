const fs = require('fs');
const path = require('path');

function fixImports(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove version numbers from imports
      content = content.replace(/from "([^"]+)@\d+\.\d+\.\d+"/g, 'from "$1"');
      content = content.replace(/from '([^']+)@\d+\.\d+\.\d+'/g, "from '$1'");

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
      }
    }
  }
}

fixImports('./src');