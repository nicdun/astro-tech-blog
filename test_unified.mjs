import { unified } from '@astrojs/markdown-remark';
console.log('unified:', typeof unified);
try {
  const p = unified({ remarkPlugins: [] });
  console.log('processor:', p);
} catch (e) {
  console.log('error calling unified with obj:', e.message);
}
