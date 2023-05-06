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
        "text-halign": "center",
        'background-color': 'data(label)'

      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 1,
        'line-color': '#aaaaaa',
        'target-arrow-color': '#aaaaaa'
      })
    .selector('#g')
      .css({
        'color': "#ffffff"
      }),

  elements: {
    nodes: [
      { data: { id: 'a', label: '#76ECD3' } },
      { data: { id: 'b', label: '#989898', href: "989898" } },
      { data: { id: 'c', label: '#9686F7' } },
      { data: { id: 'd', label: '#8155E1', href: "8155e1"} },
      { data: { id: 'e', label: '#68C094' } },
      { data: { id: 'f', label: '#FF61CF', href: "ff61cf" } },
      { data: { id: 'g', label: '#000000', href: "000000" } }

    ],
    edges: [
      { data: { source: 'a', target: 'b', myWidth: 5 } },
      { data: { source: 'a', target: 'c', myWidth: 5 } },
      { data: { source: 'b', target: 'c', myWidth: 15 } },
      { data: { source: 'a', target: 'd', myWidth: 5 } },
      { data: { source: 'b', target: 'd', myWidth: 5 } },
      { data: { source: 'c', target: 'd', myWidth: 5 } },
      { data: { source: 'a', target: 'e', myWidth: 5 } },
      { data: { source: 'b', target: 'e', myWidth: 5 } },
      { data: { source: 'c', target: 'e', myWidth: 5 } },
      { data: { source: 'd', target: 'e', myWidth: 5 } },
      { data: { source: 'a', target: 'f', myWidth: 5 } },
      { data: { source: 'b', target: 'f', myWidth: 5 } },
      { data: { source: 'c', target: 'f', myWidth: 5 } },
      { data: { source: 'd', target: 'f', myWidth: 5 } },
      { data: { source: 'e', target: 'f', myWidth: 5 } },
      //{ data: { source: 'a', target: 'g', myWidth: 5 } },
      //{ data: { source: 'b', target: 'g', myWidth: 5 } },
      //{ data: { source: 'c', target: 'g', myWidth: 5 } },
      //{ data: { source: 'd', target: 'g', myWidth: 5 } },
      //{ data: { source: 'e', target: 'g', myWidth: 5 } },
      //{ data: { source: 'f', target: 'g', myWidth: 5 } }
    ]
  },

  layout: {
    //https://js.cytoscape.org/#layouts
    name: 'cose',
    //name: 'random',
    //name: 'circle',
    directed: false,
    padding: 10
  }
}); // cy init

cy.on('tap', 'node', function(){
  try { // your browser may block popups
    window.open( this.data('href') );
  } catch(e){ // fall back on url change
    window.location.href = this.data('href');
  }
});    
