const fs = require("fs");
const path = require("path");

const ROOT_DIR = process.cwd();

// folders to ignore
const IGNORE = [
  "node_modules",
  ".next",
  ".git",
  "dist",
  "build"
];

function generateTree(dir, prefix = "") {
  const items = fs.readdirSync(dir);

  items.forEach((item, index) => {
    const fullPath = path.join(dir, item);
    const isLast = index === items.length - 1;
    const connector = isLast ? "└── " : "├── ";

    if (IGNORE.includes(item)) return;

    console.log(prefix + connector + item);

    if (fs.statSync(fullPath).isDirectory()) {
      generateTree(
        fullPath,
        prefix + (isLast ? "    " : "│   ")
      );
    }
  });
}

console.log("\nProject Structure:\n");
generateTree(ROOT_DIR);
