import fs from 'fs/promises';

// console.log(fs);
const template = await fs.readFile(new URL('template.html', import.meta.url));

console.log(template.toString());
