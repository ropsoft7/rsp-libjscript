const fs = require('fs');
const path = require('path');

/**
 * Recursively searches and replaces a term in directory names, file names, and file contents.
 * 
 * @param {string} dir - The starting directory to search.
 * @param {string} searchTerm - The term to search for.
 * @param {string} replacement - The term to replace with.
 */
module.exports = function replaceRecursively(dir, searchTerm, replacement) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const currentPath = path.join(dir, item);
        const newItemName = item.replace(new RegExp(searchTerm, 'g'), replacement);
        const newPath = path.join(dir, newItemName);

        if (currentPath !== newPath) {
            fs.renameSync(currentPath, newPath); // Rename directory or file
        }

        if (fs.statSync(newPath).isDirectory()) {
            replaceRecursively(newPath, searchTerm, replacement); // Recurse into subdirectories
        } else if (fs.statSync(newPath).isFile()) {
            const fileContent = fs.readFileSync(newPath, 'utf8');
            const updatedContent = fileContent.replace(new RegExp(searchTerm, 'g'), replacement);
            fs.writeFileSync(newPath, updatedContent, 'utf8'); // Update file content
        }
    }
}

