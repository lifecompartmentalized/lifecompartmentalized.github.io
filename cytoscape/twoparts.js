// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById('twoparts'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 80,
        'width': 80,
        'background-fit': 'cover',
        'border-color': '#000',
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
        'background-color' : '#aaaaff'
      })
    .selector('#b')
      .css({
        'background-color' : '#cabfff'
      }),

  elements: {
    nodes: [
      { data: { id: 'a', label: 'work self' } },
      { data: { id: 'b', label: 'home self' } }
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

