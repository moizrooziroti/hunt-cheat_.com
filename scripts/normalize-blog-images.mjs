import fs from 'node:fs';

const p = 'src/data/blog/posts.ts';
let s = fs.readFileSync(p, 'utf8');
s = s.replace(/image: "\/images\/blog\/[^"]+"/g, 'image: "/images/blog/hunt-showdown-buying-guide.png"');
fs.writeFileSync(p, s);
console.log('Blog images normalized');
