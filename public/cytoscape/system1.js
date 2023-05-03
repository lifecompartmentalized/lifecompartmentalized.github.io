// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById('system1'),

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
        'background-color' : '#aaaaff'
      })
    .selector('#b')
      .css({
        'background-color' : '#aaffaa'
      })
    .selector('#c')
      .css({
        'background-color' : '#ffffaa'
      })
    .selector('#d')
      .css({
        'background-color' : '#ffaaff'
      })
    .selector('#e')
      .css({
        'background-color' : '#aaffff'
      })
    .selector('#f')
      .css({
        'background-color' : '#ffaaaa'
      }),

  elements: {
    nodes: [
      { data: { id: 'a', label: 'work self' } },
      { data: { id: 'b', label: 'home self' } },
      { data: { id: 'c', label: 'social self' } },
      { data: { id: 'd', label: '... self' } },
      { data: { id: 'e', label: '... self' } },
      { data: { id: 'f', label: '... self' } }

    ],
    edges: [
      { data: { source: 'a', target: 'b' } },
      { data: { source: 'a', target: 'c' } },
      { data: { source: 'b', target: 'c' } },
      { data: { source: 'b', target: 'f' } },
      { data: { source: 'c', target: 'd' } },
    ]
  },

  layout: {
    //https://js.cytoscape.org/#layouts
    //name: 'cose',
    name: 'circle',
    directed: true,
    padding: 10
  }
}); // cy init

