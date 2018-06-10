
console.log('host', window.location.host);




Reveal.initialize({
  width: 1024,
  heigth: 576,
  minScale: 0,
  maxScale: 1.0,
  transition: 'slide',
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  ],
});

function onClickItemMenu (slideNumber) {
  window.location.hash = `#/${slideNumber}`;
  location.reload();
}


Reveal.addEventListener( 'fragmentshown', function( event ) {
  switch(event.fragment.id) {
    case 'p02__4-4':
      hideElementbyId('p02__4-1')
    break;
    case 'p02__4-5':
      hideElementbyId('p02__4-3')
    break;
    case 'p04__2-3':
      hideElementbyId('p04__1-1')
    break;
    case 'p04__2-4':
      hideElementbyId('p04__2-2')
    break;
    case 'p04__2-6':
      hideElementbyId('p04__2-5')
    break;
    case 'p04__2-9':
      hideElementbyId('p04__2-6')
    break;
    case 'p04__2-10':
      hideElementbyId('p04__2-3')
    break;
    
    case 'p03__1-7':
      hideElementbyId('p03__1-5')
    break;
    case 'p03__1-8':
      hideElementbyId('p03__1-2')
      hideElementbyId('p03__1-3')
      hideElementbyId('p03__1-4')
    break;
    case 'p06__2-7':
      hideElementbyId('p06__2-5')
      hideElementbyId('p06__2-6')
    break;
    case 'p06__2-8':
      hideElementbyId('p06__2-7')
      hideElementbyId('p06__2-3')
    break;
    case 'p06__2-10':
      hideElementbyId('p06__2-9')
    break;
    case 'p06__2-12':
      hideElementbyId('p06__2-2')
      hideElementbyId('p06__2-10')
      hideElementbyId('p06__2-11')
    break;
    case 'p06__2-15':
      hideElementbyId('p06__2-14')
      hideElementbyId('p06__2-13')
    break;
    case 'p05__1-3':
      hideElementbyId('p05__1-2')
    break;
    case 'p05__1-8':
      hideElementbyId('p05__1-7')
    break;
    case 'p07__1-5':
      hideElementbyId('p07__1-4')
      hideElementbyId('p07__1-3')
      hideElementbyId('p07__1-0')
    break;
    case 'p07__1-6':
      hideElementbyId('p07__1-5')
      hideElementbyId('p07__1-1')
    break;
    case 'p07__1-9':
      hideElementbyId('p07__1-8')
      hideElementbyId('p07__1-7')
      hideElementbyId('p07__1-6')
    break;
    case 'p07__1-10':
      hideElementbyId('p07__1-9')
    break;
    case 'p07__1-13':
      hideElementbyId('p07__1-12')
      hideElementbyId('p07__1-2')
    break;
    case 'p07__1-12':
      hideElementbyId('p07__1-11')
      hideElementbyId('p07__1-10')
      showElementbyId('p07__1-1')
    break;
    case 'p07__1-15':
      hideElementbyId('p07__1-14')
      hideElementbyId('p07__1-13')
    break;
    case 'p08__1-4':
      hideElementbyId('p08__1-3')
    break;
    case 'p08__1-5':
      hideElementbyId('p08__1-4')
    break;
    case 'p08__1-11':
      hideElementbyId('p08__1-9')
      hideElementbyId('p08__1-8')
    break;
    case 'p09__1-5':
      hideElementbyId('p09__1-3')
    break;
    case 'p09__1-6':
      hideElementbyId('p09__1-5')
    break;
    case 'p10__1-2':
      hideElementbyId('p10__1-1')
    break;
    case 'p10__1-4':
      hideElementbyId('p10__1-3')
    break;
    case 'p10__1-7':
      hideElementbyId('p10__1-2')
      hideElementbyId('p10__1-4')
      hideElementbyId('p10__1-5')
      hideElementbyId('p10__1-6')
    break;
    case 'p11__1-4':
      hideElementbyId('p11__1-3')
    break;
    case 'p11__1-6':
      hideElementbyId('p11__1-4')
    break;
    case 'p11__1-7':
      hideElementbyId('p11__1-1')
    break;
    case 'p11__1-8':
      hideElementbyId('p11__1-6')
    break;
    case 'p11__1-9':
      hideElementbyId('p11__1-2')
      hideElementbyId('p11__1-8')
    break;
    case 'p11__1-11':
      hideElementbyId('p11__1-7')
    break;
    case 'p12__1-4':
      hideElementbyId('p12__1-1')
      hideElementbyId('p12__1-2')
      hideElementbyId('p12__1-3')
    break;
    case 'p12__1-6':
      hideElementbyId('p12__1-4')
    break;
    case 'p12__1-8':
      hideElementbyId('p12__1-7')
      hideElementbyId('p12__1-6')
      hideElementbyId('p12__1-5')
    break;
    case 'p12__1-10':
      hideElementbyId('p12__1-9')
    break;
    case 'p13__1-4':
      hideElementbyId('p13__1-3')
    break;
    case 'p13__1-7':
      hideElementbyId('p13__1-2')
      hideElementbyId('p13__1-4')
    break;
    case 'p13__1-9':
      hideElementbyId('p13__1-1')
      hideElementbyId('p13__1-2')
      hideElementbyId('p13__1-4')
      hideElementbyId('p13__1-5')
      hideElementbyId('p13__1-6')
      hideElementbyId('p13__1-7')
      hideElementbyId('p13__1-8')
    break;
    case 'p13__1-12':
      hideElementbyId('p13__1-11')
    break;
    case 'p13__1-13':
      hideElementbyId('p13__1-10')
    break;
    case 'p13__1-14':
      hideElementbyId('p13__1-13')
    break;
    case 'p13__1-18':
      hideElementbyId('p13__1-17')
    break;
    case 'p13__1-19':
      hideElementbyId('p13__1-18')
    break;
    case 'p14__1-2':
      hideElementbyId('p14__1-1')
    break;
    case 'p15__1-3':
      hideElementbyId('p15__1-2')
    break;
    case 'p15__1-5':
      hideElementbyId('p15__1-4')
    break;
    case 'p15__1-8':
      hideElementbyId('p15__1-7')
      hideElementbyId('p15__1-6')
    break;
    case 'p16__1-6':
      hideElementbyId('p16__1-5')
    break;
    case 'p16__1-2':
      hideElementbyId('p16__1-1')
      hideElementbyId('p16__1-6')
      hideElementbyId('p16__1-4')
    break;
    case 'p16__1-8':
      hideElementbyId('p16__1-7')
    break;
    case 'p16__1-12':
      hideElementbyId('p16__1-8')
      hideElementbyId('p16__1-9')
      hideElementbyId('p16__1-10')
      hideElementbyId('p16__1-11')
    break;
    case 'p16__1-15':
      hideElementbyId('p16__1-14')
      hideElementbyId('p16__1-13')
    break;
    case 'p16__1-17':
      hideElementbyId('p16__1-15')
      hideElementbyId('p16__1-16')
      hideElementbyId('p16__1-12')
    break;
    case 'p16__1-19':
      hideElementbyId('p16__1-18')
    break;
    case 'p16__1-21':
      hideElementbyId('p16__1-17')
    break;
    case 'p18__1-3':
      hideElementbyId('p18__1-1')
      hideElementbyId('p18__1-2')
    break;
    case 'p18__1-8':
      hideElementbyId('p18__1-4')
      hideElementbyId('p18__1-5')
      hideElementbyId('p18__1-6')
    break;
    case 'p18__1-9':
      hideElementbyId('p18__1-1')
      hideElementbyId('p18__1-3')
      hideElementbyId('p18__1-7')
    break;
    case 'p19__1-5':
      hideElementbyId('p19__1-4')
    break;
    case 'p19__1-6':
      hideElementbyId('p19__1-5')
    break;
    case 'p19__1-8':
      hideElementbyId('p19__1-2')
      hideElementbyId('p19__1-3')
      hideElementbyId('p19__1-6')
      hideElementbyId('p19__1-5')
    break;
    case 'p19__1-11':
      hideElementbyId('p19__1-8')
    break;
    case 'p19__1-12':
      hideElementbyId('p19__1-1')
      hideElementbyId('p19__1-11')
      hideElementbyId('p19__1-9')
    break;
    case 'p19__1-16':
      hideElementbyId('p19__1-15')
    break;
    case 'p19__1-17':
      hideElementbyId('p19__1-16')
    break;
    case 'p19__1-21':
      hideElementbyId('p19__1-12')
      hideElementbyId('p19__1-13')
      hideElementbyId('p19__1-14')
      hideElementbyId('p19__1-15')
      hideElementbyId('p19__1-16')
      hideElementbyId('p19__1-17')
      hideElementbyId('p19__1-19')
      hideElementbyId('p19__1-20')
    break;
    case 'p19__1-26':
      hideElementbyId('p19__1-25')
    break;
    case 'p19__1-27':
      hideElementbyId('p19__1-26')
      hideElementbyId('p19__1-25')
      hideElementbyId('p19__1-24')
    break;
    case 'p19__1-30':
      hideElementbyId('p19__1-27')
      hideElementbyId('p19__1-28')
      hideElementbyId('p19__1-29')
      hideElementbyId('p19__1-23')
    break;
    case 'p19__1-33':
      hideElementbyId('p19__1-32')
    break;
    case 'p19__1-34':
      hideElementbyId('p19__1-30')
    break;
    case 'p19__1-35':
      hideElementbyId('p19__1-33')
      hideElementbyId('p19__1-34')
    break;
    case 'p19__1-38':
    hideElementbyId('p19__1-36')
    hideElementbyId('p19__1-37')
    hideElementbyId('p19__1-35')
    break;
    case 'p19__1-39':
      hideElementbyId('p19__1-38')
    break;
    case 'p19__1-40':
      hideElementbyId('p19__1-39')
    break;
    case 'p19__1-41':
      hideElementbyId('p19__1-40')
      hideElementbyId('p19__1-39')
      hideElementbyId('p19__1-31')
    break;
    case 'p19__1-43':
      hideElementbyId('p19__1-42')
    break;
    case 'p19__1-46':
      hideElementbyId('p19__1-43')
    break;
    case 'p19__1-47':
      hideElementbyId('p19__1-45')
    break;
    case 'p21__1-5':
      hideElementbyId('p21__1-3')
    break;
    case 'p21__1-6':
      hideElementbyId('p21__1-5')
    break;
    case 'p21__1-7':
      hideElementbyId('p21__1-6')
    break;
    case 'p21__1-9':
      hideElementbyId('p21__1-1')
    break;
    case 'p21__1-10':
    hideElementbyId('p21__1-1')
  break;
    case 'p21__1-11':
      hideElementbyId('p21__1-4')
    break;
    case 'p21__1-12':
      hideElementbyId('p21__1-7')
    break;
    case 'p21__1-14':
      hideElementbyId('p21__1-10')
      hideElementbyId('p21__1-11')
    break;
    case 'p21__1-17':
      hideElementbyId('p21__1-16')
    break;
    case 'p22__1-8':
      hideElementbyId('p22__1-6')
      hideElementbyId('p22__1-4')
    break;
    case 'p22__1-10':
      hideElementbyId('p22__1-5')
    break;
    case 'p22__1-11':
      hideElementbyId('p22__1-10')
      hideElementbyId('p22__1-1')
    break;
    case 'p22__1-12':
      hideElementbyId('p22__1-1')
      hideElementbyId('p22__1-2')
      hideElementbyId('p22__1-3')
      hideElementbyId('p22__1-8')
      hideElementbyId('p22__1-9')
      hideElementbyId('p22__1-11')
      hideElementbyId('p22__1-11')
    break;
    case 'p22__1-15':
      hideElementbyId('p22__1-14')
    break;
    case 'p22__1-16':
      hideElementbyId('p22__1-15')
    break;
    case 'p22__1-19':
      hideElementbyId('p22__1-12')
      hideElementbyId('p22__1-13')
      hideElementbyId('p22__1-14')
      hideElementbyId('p22__1-15')
      hideElementbyId('p22__1-16')
      hideElementbyId('p22__1-17')
      hideElementbyId('p22__1-18')
    break;
    case 'p22__1-24':
      hideElementbyId('p22__1-21')
    break;
    case 'p22__1-26':
      hideElementbyId('p22__1-23')
    break;
    case 'p22__1-27':
      hideElementbyId('p22__1-26')
    break;
    case 'p23__1-4':
      hideElementbyId('p23__1-3')
    break;
    case 'p23__1-7':
      hideElementbyId('p23__1-6')
    break;
    case 'p24__1-5':
      hideElementbyId('p24__1-3')
    break;
    case 'p24__1-6':
      hideElementbyId('p24__1-1')
      hideElementbyId('p24__1-2')
      hideElementbyId('p24__1-5')
    break;
    case 'p24__1-8':
      hideElementbyId('p24__1-6')
    break;
    case 'p24__1-12':
      hideElementbyId('p24__1-11')
    break;
    case 'p24__1-15':
      hideElementbyId('p24__1-14')
    break;
    case 'p24__1-19':
      hideElementbyId('p24__1-18')
    break;
    case 'p24__1-20':
      hideElementbyId('p24__1-10')
    break;
    case 'p24__1-22':
      hideElementbyId('p24__1-15')
      hideElementbyId('p24__1-19')
    break;
    case 'p24__1-24':
      hideElementbyId('p24__1-23')
    break;
    case 'p25__1-6':
      hideElementbyId('p25__1-5')
    break;
    case 'p25__1-7':
      hideElementbyId('p25__1-3')
    break;
    case 'p25__1-8':
      hideElementbyId('p25__1-7')
      hideElementbyId('p25__1-2')
    break;
    case 'p25__1-9':
      hideElementbyId('p25__1-8')
    break;
    case 'p25__1-10':
      hideElementbyId('p25__1-6')
      hideElementbyId('p25__1-9')
    break;
    case 'p25__1-12':
      hideElementbyId('p25__1-11')
    break;
    case 'p25__1-15':
      hideElementbyId('p25__1-10')
      hideElementbyId('p25__1-10')
    break;
    case 'p25__1-16':
      hideElementbyId('p25__1-12')
    break;
    case 'p26__1-6':
      hideElementbyId('p26__1-5')
    break;
    case 'p26__1-11':
      hideElementbyId('p26__1-8')
    break;
    case 'p26__1-12':
      hideElementbyId('p26__1-10')
    break;
    case 'p26__1-13':
      hideElementbyId('p26__1-7')
    break;
    case 'p26__1-14':
      hideElementbyId('p26__1-11')
      hideElementbyId('p26__1-12')
    break;
    case 'p26__1-16':
      hideElementbyId('p26__1-2')
      hideElementbyId('p26__1-9')
      hideElementbyId('p26__1-13')
      hideElementbyId('p26__1-14')
    break;
    case 'p26__1-17':
      hideElementbyId('p26__1-3')
      hideElementbyId('p26__1-16')
    break;
    case 'p26__1-18':
      hideElementbyId('p26__1-3')
    break;
    case 'p26__1-21':
      hideElementbyId('p26__1-20')
    break;
    case 'p26__1-22':
      hideElementbyId('p26__1-21')
    break;
    case 'p26__1-23':
      hideElementbyId('p26__1-17')
      hideElementbyId('p26__1-18')
    break;
    case 'p26__1-25':
      hideElementbyId('p26__1-4')
    break;
    case 'p26__1-26':
      hideElementbyId('p26__1-19')
      hideElementbyId('p26__1-22')
      hideElementbyId('p26__1-23')
    break;
    case 'p26__1-27':
      hideElementbyId('p26__1-26')
    break;
    case 'p26__1-28':
      hideElementbyId('p26__1-27')
      hideElementbyId('p26__1-25')
      hideElementbyId('p26__1-1')
    break;
    case 'p27__1-5':
      hideElementbyId('p27__1-4')
    break;
    case 'p27__1-7':
      hideElementbyId('p27__1-3')
    break;
    case 'p27__1-10':
      hideElementbyId('p27__1-6')
    break;
    case 'p27__1-11':
      hideElementbyId('p27__1-5')
      hideElementbyId('p27__1-10')
      hideElementbyId('p27__1-2')
    break;
    case 'p27__1-14':
      hideElementbyId('p27__1-11')
      hideElementbyId('p27__1-12')
    break;
    case 'p27__1-16':
      hideElementbyId('p27__1-13')
      hideElementbyId('p27__1-15')
    break;
    case 'p27__1-17':
      hideElementbyId('p27__1-1')
      hideElementbyId('p27__1-16')
    break;
    case 'p28__1-3':
      hideElementbyId('p28__1-1')
    break;
    case 'p28__1-6':
      hideElementbyId('p28__1-4')
    break;
    case 'p28__1-7':
      hideElementbyId('p28__1-6')
    break;
    case 'p28__1-9':
      hideElementbyId('p28__1-7')
    break;
    case 'p29__1-5':
      hideElementbyId('p29__1-4')
    break;
    case 'p29__1-6':
      hideElementbyId('p29__1-5')
    break;
    case 'p29__1-8':
      hideElementbyId('p29__1-1')
    break;
    case 'p29__1-9':
      hideElementbyId('p29__1-7')
    break;
    case 'p29__1-10':
      hideElementbyId('p29__1-9')
    break;
    case 'p29__1-12':
      hideElementbyId('p29__1-10')
      hideElementbyId('p29__1-11')
      hideElementbyId('p29__1-6')
      hideElementbyId('p29__1-8')
      showElementbyId('p29__1-1')
    break;
    case 'p29__1-13':
      hideElementbyId('p29__1-12')
    break;
    case 'p29__1-14':
      hideElementbyId('p29__1-13')
    break;
    case 'p29__1-15':
      hideElementbyId('p29__1-1')
    break;
    case 'p29__1-17':
      hideElementbyId('p29__1-14')
      hideElementbyId('p29__1-16')
    break;
    case 'p29__1-18':
      hideElementbyId('p29__1-2')
    break;
    case 'p29__1-20':
      hideElementbyId('p29__1-17')
    break;
    case 'p29__1-21':
      hideElementbyId('p29__1-19')
    break;
    case 'p29__1-24':
      hideElementbyId('p29__1-21')
      hideElementbyId('p29__1-22')
      hideElementbyId('p29__1-23')
    break;
    case 'p29__1-26':
      hideElementbyId('p29__1-20')
      hideElementbyId('p29__1-24')
      hideElementbyId('p29__1-25')
      hideElementbyId('p29__1-18')
      showElementbyId('p29__1-27')
    break;
    case 'p31__1-3':
      hideElementbyId('p31__1-2')
    break;
    case 'p31__1-4':
      hideElementbyId('p31__1-3')
    break;
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
  }
} );

Reveal.addEventListener( 'fragmenthidden', function( event ) {
  switch(event.fragment.id) {
    case 'p02__4-4':
    showElementbyId('p02__4-1')
  break;
  case 'p04__2-3':
    showElementbyId('p04__1-1')
  break;
  case 'p04__2-4':
    showElementbyId('p04__2-2')
  break;
  case 'p04__2-6':
    showElementbyId('p04__2-5')
  break;
  case 'p04__2-9':
    showElementbyId('p04__2-6')
  break;
  case 'p04__2-10':
    showElementbyId('p04__2-3')
  break;
  case 'p01__1-6':
    showElementbyId('p01__1-5')
  break;
  case 'p03__1-7':
    showElementbyId('p03__1-5')
  break;
  case 'p03__1-8':
    showElementbyId('p03__1-2')
    showElementbyId('p03__1-3')
    showElementbyId('p03__1-4')
  break;
  case 'p06__2-7':
    showElementbyId('p06__2-5')
    showElementbyId('p06__2-6')
  break;
  case 'p06__2-8':
    showElementbyId('p06__2-7')
    showElementbyId('p06__2-3')
  break;
  case 'p06__2-10':
    showElementbyId('p06__2-9')
  break;
  case 'p06__2-12':
    showElementbyId('p06__2-2')
    showElementbyId('p06__2-10')
    showElementbyId('p06__2-11')
  break;
  case 'p06__2-15':
    showElementbyId('p06__2-14')
    showElementbyId('p06__2-13')
  break;
  case 'p05__1-3':
    showElementbyId('p05__1-2')
  break;
  case 'p05__1-8':
    showElementbyId('p05__1-7')
  break;
  case 'p07__1-5':
    showElementbyId('p07__1-4')
    showElementbyId('p07__1-3')
  break;
  case 'p07__1-6':
    showElementbyId('p07__1-5')
    showElementbyId('p07__1-1')
  break;
  case 'p07__1-9':
    showElementbyId('p07__1-8')
    showElementbyId('p07__1-7')
    showElementbyId('p07__1-6')
  break;
  case 'p07__1-10':
    showElementbyId('p07__1-9')
  break;
  case 'p07__1-13':
    showElementbyId('p07__1-12')
    showElementbyId('p07__1-2')
  break;
  case 'p07__1-15':
    showElementbyId('p07__1-14')
    showElementbyId('p07__1-13')
  break;
  case 'p08__1-4':
    showElementbyId('p08__1-3')
  break;
  case 'p08__1-5':
    showElementbyId('p08__1-4')
  break;
  case 'p08__1-11':
    showElementbyId('p08__1-9')
    showElementbyId('p08__1-8')
  break;
  case 'p09__1-5':
    showElementbyId('p09__1-3')
  break;
  case 'p09__1-6':
    showElementbyId('p09__1-5')
  break;
  case 'p10__1-2':
    showElementbyId('p10__1-1')
  break;
  case 'p10__1-4':
    showElementbyId('p10__1-3')
  break;
  case 'p10__1-7':
    showElementbyId('p10__1-2')
    showElementbyId('p10__1-4')
    showElementbyId('p10__1-5')
    showElementbyId('p10__1-6')
  break;
  case 'p11__1-4':
    showElementbyId('p11__1-3')
  break;
  case 'p11__1-7':
    showElementbyId('p11__1-1')
    showElementbyId('p11__1-4')
  break;
  case 'p11__1-8':
    showElementbyId('p11__1-6')
  break;
  case 'p11__1-9':
    showElementbyId('p11__1-2')
    showElementbyId('p11__1-8')
  break;
  case 'p11__1-11':
    showElementbyId('p11__1-7')
  break;
  case 'p12__1-4':
    showElementbyId('p12__1-1')
    showElementbyId('p12__1-2')
    showElementbyId('p12__1-3')
  break;
  case 'p12__1-6':
    showElementbyId('p12__1-4')
  break;
  case 'p12__1-8':
    showElementbyId('p12__1-7')
    showElementbyId('p12__1-6')
    showElementbyId('p12__1-5')
  break;
  case 'p12__1-10':
    showElementbyId('p12__1-9')
  break;
  case 'p13__1-4':
    showElementbyId('p13__1-3')
  break;
  case 'p13__1-7':
    showElementbyId('p13__1-2')
    showElementbyId('p13__1-4')
  break;
  case 'p13__1-9':
    showElementbyId('p13__1-1')
    showElementbyId('p13__1-2')
    showElementbyId('p13__1-4')
    showElementbyId('p13__1-5')
    showElementbyId('p13__1-6')
    showElementbyId('p13__1-7')
    showElementbyId('p13__1-8')
  break;
  case 'p13__1-12':
    showElementbyId('p13__1-11')
  break;
  case 'p13__1-13':
    showElementbyId('p13__1-10')
  break;
  case 'p13__1-14':
    showElementbyId('p13__1-13')
  break;
  case 'p13__1-18':
    showElementbyId('p13__1-17')
  break;
  case 'p13__1-19':
    showElementbyId('p13__1-18')
  break;
  case 'p14__1-2':
    showElementbyId('p14__1-1')
  break;
  case 'p15__1-3':
    showElementbyId('p15__1-2')
  break;
  case 'p15__1-5':
    showElementbyId('p15__1-4')
  break;
  case 'p15__1-8':
    showElementbyId('p15__1-7')
    showElementbyId('p15__1-6')
  break;
  case 'p16__1-6':
    showElementbyId('p16__1-5')
  break;
  case 'p16__1-2':
    showElementbyId('p16__1-1')
    showElementbyId('p16__1-6')
    showElementbyId('p16__1-4')
  break;
  case 'p16__1-8':
    showElementbyId('p16__1-7')
  break;
  case 'p16__1-12':
    showElementbyId('p16__1-8')
    showElementbyId('p16__1-9')
    showElementbyId('p16__1-10')
    showElementbyId('p16__1-11')
  break;
  case 'p16__1-15':
    showElementbyId('p16__1-14')
    showElementbyId('p16__1-13')
  break;
  case 'p16__1-17':
    showElementbyId('p16__1-15')
    showElementbyId('p16__1-16')
    showElementbyId('p16__1-12')
  break;
  case 'p16__1-19':
    showElementbyId('p16__1-18')
  break;
  case 'p16__1-21':
    showElementbyId('p16__1-17')
  break;
  case 'p18__1-3':
    showElementbyId('p18__1-1')
    showElementbyId('p18__1-2')
  break;
  case 'p18__1-8':
    showElementbyId('p18__1-4')
    showElementbyId('p18__1-5')
    showElementbyId('p18__1-6')
  break;
  case 'p18__1-9':
    showElementbyId('p18__1-1')
    showElementbyId('p18__1-3')
    showElementbyId('p18__1-7')
  break;
  case 'p19__1-5':
    showElementbyId('p19__1-4')
  break;
  case 'p19__1-6':
    showElementbyId('p19__1-5')
  break;
  case 'p19__1-8':
    showElementbyId('p19__1-2')
    showElementbyId('p19__1-3')
    showElementbyId('p19__1-6')
    showElementbyId('p19__1-5')
  break;
  case 'p19__1-11':
    showElementbyId('p19__1-8')
  break;
  case 'p19__1-12':
    showElementbyId('p19__1-1')
    showElementbyId('p19__1-11')
    showElementbyId('p19__1-9')
  break;
  case 'p19__1-16':
    showElementbyId('p19__1-15')
  break;
  case 'p19__1-17':
    showElementbyId('p19__1-16')
  break;
  case 'p19__1-21':
    showElementbyId('p19__1-12')
    showElementbyId('p19__1-13')
    showElementbyId('p19__1-14')
    showElementbyId('p19__1-15')
    showElementbyId('p19__1-16')
    showElementbyId('p19__1-17')
    showElementbyId('p19__1-19')
    showElementbyId('p19__1-20')
  break;
  case 'p19__1-26':
    showElementbyId('p19__1-25')
  break;
  case 'p19__1-27':
    showElementbyId('p19__1-26')
    showElementbyId('p19__1-25')
    showElementbyId('p19__1-24')
  break;
  case 'p19__1-30':
    showElementbyId('p19__1-27')
    showElementbyId('p19__1-28')
    showElementbyId('p19__1-29')
    showElementbyId('p19__1-23')
  break;
  case 'p19__1-33':
    showElementbyId('p19__1-32')
  break;
  case 'p19__1-34':
    showElementbyId('p19__1-30')
  break;
  case 'p19__1-35':
    showElementbyId('p19__1-33')
    showElementbyId('p19__1-34')
  break;
  case 'p19__1-38':
  showElementbyId('p19__1-36')
  showElementbyId('p19__1-37')
  showElementbyId('p19__1-35')
  break;
  case 'p19__1-39':
    showElementbyId('p19__1-38')
  break;
  case 'p19__1-40':
    showElementbyId('p19__1-39')
  break;
  case 'p19__1-41':
    showElementbyId('p19__1-40')
    showElementbyId('p19__1-39')
    showElementbyId('p19__1-31')
  break;
  case 'p19__1-43':
    showElementbyId('p19__1-42')
  break;
  case 'p19__1-46':
    showElementbyId('p19__1-43')
  break;
  case 'p19__1-47':
    showElementbyId('p19__1-45')
  break;
  case 'p21__1-5':
    showElementbyId('p21__1-3')
  break;
  case 'p21__1-6':
    showElementbyId('p21__1-5')
  break;
  case 'p21__1-7':
    showElementbyId('p21__1-6')
  break;
  case 'p21__1-9':
    showElementbyId('p21__1-1')
  break;
  case 'p21__1-10':
    showElementbyId('p21__1-1')
  break;
  case 'p21__1-11':
    showElementbyId('p21__1-4')
  break;
  case 'p21__1-12':
    showElementbyId('p21__1-7')
  break;
  case 'p21__1-14':
    showElementbyId('p21__1-10')
    showElementbyId('p21__1-11')
  break;
  case 'p21__1-17':
    showElementbyId('p21__1-16')
  break;
  case 'p22__1-8':
    showElementbyId('p22__1-6')
    showElementbyId('p22__1-4')
  break;
  case 'p22__1-10':
    showElementbyId('p22__1-5')
  break;
  case 'p22__1-11':
    showElementbyId('p22__1-10')
  break;
  case 'p22__1-12':
  showElementbyId('p22__1-11')
    showElementbyId('p22__1-1')
    showElementbyId('p22__1-2')
    showElementbyId('p22__1-3')
    showElementbyId('p22__1-8')
    showElementbyId('p22__1-9')
   
  break;
  case 'p22__1-15':
    showElementbyId('p22__1-14')
  break;
  case 'p22__1-16':
    showElementbyId('p22__1-15')
  break;
  case 'p22__1-19':
    showElementbyId('p22__1-12')
    showElementbyId('p22__1-13')
    showElementbyId('p22__1-14')
    showElementbyId('p22__1-15')
    showElementbyId('p22__1-16')
    showElementbyId('p22__1-17')
    showElementbyId('p22__1-18')
  break;
  case 'p22__1-24':
      showElementbyId('p22__1-21')
  break;
  case 'p22__1-26':
    showElementbyId('p22__1-23')
  break;
  case 'p22__1-27':
    showElementbyId('p22__1-26')
  break;
  case 'p23__1-4':
    showElementbyId('p23__1-3')
  break;
  case 'p23__1-7':
    showElementbyId('p23__1-6')
  break;
  case 'p24__1-5':
    showElementbyId('p24__1-3')
  break;
  case 'p24__1-6':
    showElementbyId('p24__1-1')
    showElementbyId('p24__1-2')
    showElementbyId('p24__1-5')
  break;
  case 'p24__1-8':
    showElementbyId('p24__1-6')
  break;
  case 'p24__1-12':
    showElementbyId('p24__1-11')
  break;
  case 'p24__1-15':
    showElementbyId('p24__1-14')
  break;
  case 'p24__1-19':
    showElementbyId('p24__1-18')
  break;
  case 'p24__1-20':
    showElementbyId('p24__1-10')
  break;
  case 'p24__1-22':
    showElementbyId('p24__1-15')
    showElementbyId('p24__1-19')
  break;
  case 'p24__1-24':
    showElementbyId('p24__1-23')
  break;
  case 'p25__1-6':
    showElementbyId('p25__1-5')
  break;
  case 'p25__1-7':
    showElementbyId('p25__1-3')
  break;
  case 'p25__1-8':
    showElementbyId('p25__1-7')
    showElementbyId('p25__1-2')
  break;
  case 'p25__1-9':
    showElementbyId('p25__1-8')
  break;
  case 'p25__1-10':
    showElementbyId('p25__1-6')
    showElementbyId('p25__1-9')
  break;
  case 'p25__1-12':
    showElementbyId('p25__1-11')
  break;
  case 'p25__1-15':
    showElementbyId('p25__1-10')
    showElementbyId('p25__1-10')
  break;
  case 'p25__1-16':
    showElementbyId('p25__1-12')
  break;
  case 'p26__1-6':
    showElementbyId('p26__1-5')
  break;
  case 'p26__1-11':
    showElementbyId('p26__1-8')
  break;
  case 'p26__1-12':
    showElementbyId('p26__1-10')
  break;
  case 'p26__1-13':
    showElementbyId('p26__1-7')
  break;
  case 'p26__1-14':
    showElementbyId('p26__1-11')
    showElementbyId('p26__1-12')
  break;
  case 'p26__1-16':
    showElementbyId('p26__1-2')
    showElementbyId('p26__1-9')
    showElementbyId('p26__1-13')
    showElementbyId('p26__1-14')
  break;
  case 'p26__1-17':
    showElementbyId('p26__1-3')
    showElementbyId('p26__1-16')
  break;
  case 'p26__1-18':
    showElementbyId('p26__1-3')
  break;
  case 'p26__1-21':
    showElementbyId('p26__1-20')
  break;
  case 'p26__1-22':
    showElementbyId('p26__1-21')
  break;
  case 'p26__1-23':
    showElementbyId('p26__1-17')
    showElementbyId('p26__1-18')
  break;
  case 'p26__1-25':
    showElementbyId('p26__1-4')
  break;
  case 'p26__1-26':
    showElementbyId('p26__1-19')
    showElementbyId('p26__1-22')
    showElementbyId('p26__1-23')
  break;
  case 'p26__1-27':
    showElementbyId('p26__1-26')
  break;
  case 'p26__1-28':
    showElementbyId('p26__1-27')
    showElementbyId('p26__1-25')
    showElementbyId('p26__1-1')
  break;
  case 'p27__1-5':
    showElementbyId('p27__1-4')
  break;
  case 'p27__1-7':
    showElementbyId('p27__1-3')
  break;
  case 'p27__1-10':
    showElementbyId('p27__1-6')
  break;
  case 'p27__1-11':
    showElementbyId('p27__1-5')
    showElementbyId('p27__1-10')
    showElementbyId('p27__1-2')
  break;
  case 'p27__1-14':
    showElementbyId('p27__1-11')
    showElementbyId('p27__1-12')
  break;
  case 'p27__1-16':
    showElementbyId('p27__1-13')
    showElementbyId('p27__1-15')
  break;
  case 'p27__1-17':
    showElementbyId('p27__1-1')
    showElementbyId('p27__1-16')
  break;
  case 'p28__1-3':
    showElementbyId('p28__1-1')
  break;
  case 'p28__1-6':
    showElementbyId('p28__1-4')
  break;
  case 'p28__1-7':
    showElementbyId('p28__1-6')
  break;
  case 'p28__1-9':
    showElementbyId('p28__1-7')
  break;
  case 'p29__1-5':
    showElementbyId('p29__1-4')
  break;
  case 'p29__1-6':
    showElementbyId('p29__1-5')
  break;
  case 'p29__1-8':
    showElementbyId('p29__1-1')
  break;
  case 'p29__1-9':
    showElementbyId('p29__1-7')
  break;
  case 'p29__1-10':
    showElementbyId('p29__1-9')
  break;
  case 'p29__1-12':
    showElementbyId('p29__1-10')
    showElementbyId('p29__1-11')
    showElementbyId('p29__1-6')
    showElementbyId('p29__1-8')
    hideElementbyId('p29__1-1')
  break;
  case 'p29__1-13':
    showElementbyId('p29__1-12')
  break;
  case 'p29__1-14':
    showElementbyId('p29__1-13')
  break;
  case 'p29__1-15':
    showElementbyId('p29__1-1')
  break;
  case 'p29__1-17':
    showElementbyId('p29__1-14')
    showElementbyId('p29__1-16')
  break;
  case 'p29__1-18':
    showElementbyId('p29__1-2')
  break;
  case 'p29__1-20':
    showElementbyId('p29__1-17')
  break;
  case 'p29__1-21':
    showElementbyId('p29__1-19')
  break;
  case 'p29__1-24':
    showElementbyId('p29__1-21')
    showElementbyId('p29__1-22')
    showElementbyId('p29__1-23')
  break;
  case 'p29__1-26':
    showElementbyId('p29__1-20')
    showElementbyId('p29__1-24')
    showElementbyId('p29__1-25')
    showElementbyId('p29__1-18')
    showElementbyId('p29__1-27')
  break;
  case 'p31__1-3':
    showElementbyId('p31__1-2')
  break;
  case 'p31__1-4':
    showElementbyId('p31__1-3')
  break;
  
  
  }
} );


function hideElementbyId(id) {
  document.getElementById(id).style.display = 'none';
}

function showElementbyId(id) {
  document.getElementById(id).style.display = 'block';
}


/*$("#menu").slick({

  // normal options...
  infinite: false,
  vertical: false,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});*/