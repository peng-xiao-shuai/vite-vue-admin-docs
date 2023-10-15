import prism from 'prismjs';
import loadLanguages from 'prismjs/components/index';

// 加载默认语言
loadLanguages(['markup', 'css', 'javascript']);

export const highlight = (str: string, lang: string) => {
  if (!lang) {
    return `<pre v-pre><code>${str}</code></pre>`;
  }
  // // 转小写
  lang = lang.toLowerCase();
  switch (lang) {
    case 'text':
      lang = 'textile';
      break;
    case 'vue':
    case 'html':
      lang = 'markup';
      break;
    case 'md':
      lang = 'markdown';
      break;
    case 'ts':
      lang = 'typescript';
      break;
  }
  // 匹配到没有默认加载的语言，在进行加载
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang]);
    } catch {
      console.log(
        `[vitepress] Syntax highlight for language "${lang}" is not supported.`
      );
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang);

    return `<pre v-pre><code>${code}</code></pre>`;
  }
  return `<pre v-pre><code>${str}</code></pre>`;
};
