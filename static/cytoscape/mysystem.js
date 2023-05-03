// photos from flickr with creative commons license

var cy = cytoscape({
  container: document.getElementById('mysystem'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 'data(mySize)',
        'width': 'data(mySize)',
        'background-fit': 'cover',
        'border-color': '#000000',
        'border-width': 3,
        'border-opacity': 0.5,
        'label': 'data(label)',
        "text-valign": "center",
        "text-halign": "center",
        "text-wrap": "wrap"

      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 'data(myWidth)',
        'line-color': '#aaaaaa',
        'target-arrow-color': '#aaaaaa'
      })
    .selector('#w')
      .css({
        'background-color' : '#aaaaff',
        'shape': 'square'
      })
    .selector('#w1')
      .css({
        'background-color' : '#aaaaff'
      })
    .selector('#w2')
      .css({
        'background-color' : '#aaaaff'
      })
    .selector('#w3')
      .css({
        'background-color' : '#aaaaff'
      })
    .selector('#h')
      .css({
        'background-color' : '#aaffaa'
      })
    .selector('#s')
      .css({
        'background-color' : '#aaffff',
        'shape': 'square'
      })
    .selector('#s1')
      .css({
        'background-color' : '#aaffff'
      })
    .selector('#s2')
      .css({
        'background-color' : '#aaffff'
      })
    .selector('#s3')
      .css({
        'background-color' : '#aaffff'
      })
    .selector('#t')
      .css({
        'background-color' : '#ffaaff',
        'shape': 'square'
      })
    .selector('#t1')
      .css({
        'background-color' : '#ffaaff'
      })
    .selector('#t2')
      .css({
        'background-color' : '#ffaaff'
      })
    .selector('#t3')
      .css({
        'background-color' : '#ffaaff'
      })
    .selector('#a')
      .css({
        'background-color' : '#ffaaaa'
      })
    .selector('#f')
      .css({
        'background-color' : '#ffffaa'
      })

,

  elements: {
    nodes: [
      { data: { id: 'w',  mySize: 80, label: 'work \n selves' } },
      { data: { id: 'w1', mySize: 60, label: 'worker \n 1' } },
      { data: { id: 'w2', mySize: 60, label: 'worker \n 2' } },
      { data: { id: 'w3', mySize: 60, label: 'worker \n 3' } },
      { data: { id: 'h',  mySize: 80, label: 'home self' } },
      { data: { id: 's',  mySize: 80, label: 'social \n selves' } },
      { data: { id: 's1',  mySize: 60, label: 'social \n 1' } },
      { data: { id: 's2',  mySize: 60, label: 'social \n 2' } },
      { data: { id: 's3',  mySize: 60, label: 'social \n 3' } },
      { data: { id: 't',  mySize: 80, label: 'trauma\n holding \n selves' } },
      { data: { id: 't1',  mySize: 60, label: 'trauma\n holder \n 1' } },
      { data: { id: 't2',  mySize: 60, label: 'trauma\n holder \n 2' } },
      { data: { id: 't3',  mySize: 60, label: 'trauma\n holder \n 3' } },
      { data: { id: 'a',  mySize: 80, label: 'angry self' } },
      { data: { id: 'f',  mySize: 80, label: 'anxious \n self' } }

    ],
    edges: [
      { data: { source: 'w', target: 'h', myWidth: 5 } },
      { data: { source: 'w', target: 'w1', myWidth: 8 } },
      { data: { source: 'w', target: 'w2', myWidth: 8 } },
      { data: { source: 'w', target: 'w3', myWidth: 8 } },
      { data: { source: 'w', target: 's', myWidth: 5 } },
      { data: { source: 'w', target: 'f', myWidth: 3 } },
      { data: { source: 's', target: 'f', myWidth: 3 } },
      { data: { source: 's', target: 's1', myWidth: 8 } },
      { data: { source: 's', target: 's2', myWidth: 8 } },
      { data: { source: 's', target: 's3', myWidth: 8 } },
      { data: { source: 'h', target: 's', myWidth: 8 } },
      { data: { source: 't', target: 'h', myWidth: 2 } },
      { data: { source: 't', target: 't1', myWidth: 1 } },
      { data: { source: 't', target: 't2', myWidth: 1 } },
      { data: { source: 't', target: 't3', myWidth: 1 } }
    ]
  },

  layout: {
    //https://js.cytoscape.org/#layouts
    name: 'cose',
    //name: 'circle',
    directed: false,
    padding: 10
  }
}); // cy init

