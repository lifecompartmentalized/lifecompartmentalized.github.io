// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById('compselv'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 80,
        'width': 80,
        'background-fit': 'cover',
        'border-color': '#000000',
        'border-width': 3,
        'border-opacity': 0.5,
        'label': 'data(label)',
        "text-valign": "center",
        "text-halign": "center"

      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 6,
        'line-color': '#aaaaaa',
        'target-arrow-color': '#aaaaaa'
      })
    .selector('#a')
      .css({
        'background-color' : '#76ecd3'
      })
    .selector('#b')
      .css({
        'background-color' : '#989898'
      }),

  elements: {
    nodes: [
      { data: { id: 'a', label: '76ECD3' } },
      { data: { id: 'b', label: '989898' } }

    ],
    edges: [
      { data: { source: 'a', target: 'b' } }
    ]
  },

  layout: {
    //https://js.cytoscape.org/#layouts
    name: 'cose',
    //name: 'circle',
    directed: true,
    padding: 10
  }
}); // cy init

cy.on('tap', 'node', function(){
  try { // your browser may block popups
    window.open( this.data('label') );
  } catch(e){ // fall back on url change
    window.location.href = this.data('href');
  }
});    
