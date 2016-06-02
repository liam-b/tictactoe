var tree = {
  a: {
    d: {
      k: 1,
      l: 2
    },
    e: {
      m: 3,
      n: 4
    },
    v: 12
  },
  b: {
    f: {
      o: 5
    },
    w: 13
  },
  c: {
    g: {
      p: 6,
      q: 7,
      r: 8
    },
    h: {
      s: 9
    },
    i: {
      t: 10,
      u: 11
    },
    x: 14
  },
  y: 15
};

//
// f(node) {
//   for element in node.elements {
//     if element is a leaf, print element
//     else f(node)
//   }
// }

function printNode (node) {
  for (var property in node) {
    if (node.hasOwnProperty(property)) {
      if (typeof property == int) {
        console.log(property);
      }
      else {
        printNode(property);
      }
    }
  }
}