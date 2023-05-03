// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById('singlet'),

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
        'background-color' : '#cabfff'
      })
    .selector('#c')
      .css({
        'background-color' : '#8fafff'
      })
    .selector('#d')
      .css({
        'background-color' : '#90c0ff'
      })
    .selector('#e')
      .css({
        'background-color' : '#aabbff'
      })
    .selector('#f')
      .css({
        'background-color' : '#bf9cff'
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
      { data: { source: 'a', target: 'd' } },
      { data: { source: 'a', target: 'e' } },
      { data: { source: 'a', target: 'f' } },
      { data: { source: 'b', target: 'c' } },
      { data: { source: 'b', target: 'd' } },
      { data: { source: 'b', target: 'e' } },
      { data: { source: 'b', target: 'f' } },
      { data: { source: 'c', target: 'd' } },
      { data: { source: 'c', target: 'e' } },
      { data: { source: 'c', target: 'f' } },
      { data: { source: 'd', target: 'e' } },
      { data: { source: 'd', target: 'f' } },
      { data: { source: 'e', target: 'f' } }
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

