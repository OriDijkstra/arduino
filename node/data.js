
function connectNodes(node1, node2, color = 'black', width = 2, text = '') {
  var x1 = node1.offsetLeft + node1.offsetWidth / 2;
  var y1 = node1.offsetTop + node1.offsetHeight / 2;
  var x2 = node2.offsetLeft + node2.offsetWidth / 2;
  var y2 = node2.offsetTop + node2.offsetHeight / 2;

  var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', color);
  line.setAttribute('stroke-width', width);

  var svg = document.getElementById('lines');
  svg.appendChild(line);

  if (text) {
    var textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    var midX = (x1 + x2) / 2;
    var midY = (y1 + y2) / 2;
    textElement.setAttribute('x', midX);
    textElement.setAttribute('y', midY);
    textElement.setAttribute('fill', 'black');
    textElement.setAttribute('font-size', '18');
    textElement.textContent = text;
    svg.appendChild(textElement);
  }
}
connectNodes(document.getElementById('node1'), document.getElementById('node2'), 'black', 4, '1');
connectNodes(document.getElementById('node1'), document.getElementById('node7'), 'black', 4, '1');
connectNodes(document.getElementById('node1'), document.getElementById('node4'), 'black', 4, '1');

connectNodes(document.getElementById('node2'), document.getElementById('node3'), 'black', 4, '1');
connectNodes(document.getElementById('node2'), document.getElementById('node5'), 'black', 4, '1');
connectNodes(document.getElementById('node2'), document.getElementById('node4'), 'black', 4, '1');

connectNodes(document.getElementById('node3'), document.getElementById('node4'), 'black', 4, '1');
connectNodes(document.getElementById('node3'), document.getElementById('node8'), 'black', 4, '1');
connectNodes(document.getElementById('node3'), document.getElementById('node7'), 'black', 4, '1');

connectNodes(document.getElementById('node4'), document.getElementById('node5'), 'black', 4, '1');
connectNodes(document.getElementById('node4'), document.getElementById('node6'), 'black', 4, '1');

connectNodes(document.getElementById('node5'), document.getElementById('node6'), 'black', 4, '1');
connectNodes(document.getElementById('node5'), document.getElementById('node7'), 'black', 4, '1');
connectNodes(document.getElementById('node5'), document.getElementById('node9'), 'black', 4, '1');

connectNodes(document.getElementById('node6'), document.getElementById('node7'), 'black', 4, '1');
connectNodes(document.getElementById('node6'), document.getElementById('node8'), 'black', 4, '1');
connectNodes(document.getElementById('node6'), document.getElementById('node9'), 'black', 4, '1');

connectNodes(document.getElementById('node7'), document.getElementById('node8'), 'black', 4, '1');
connectNodes(document.getElementById('node7'), document.getElementById('node9'), 'black', 4, '1');
connectNodes(document.getElementById('node7'), document.getElementById('node10'), 'black', 4, '1');

connectNodes(document.getElementById('node8'), document.getElementById('node9'), 'black', 4, '1');

connectNodes(document.getElementById('node9'), document.getElementById('node10'), 'black', 4, '1');
