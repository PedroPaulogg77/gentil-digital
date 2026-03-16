import fs from 'fs';
fetch('http://localhost:3000').then(r=>r.text()).then(t=>{
  const scripts = t.match(/<script.*?>.*?<\/script>|<script.*?\/>/g) || [];
  fs.writeFileSync('scripts.txt', scripts.join('\n'));
});
