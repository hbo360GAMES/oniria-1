Reveal.initialize({
  width: 1024,
  heigth: 576,
  minScale: 0,
  maxScale: 1.0,
  dependencies: [
    { src: '../plugin/markdown/marked.js' },
    { src: '../plugin/markdown/markdown.js' },
    { src: '../plugin/notes/notes.js', async: true },
    { src: '../plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  ],
});