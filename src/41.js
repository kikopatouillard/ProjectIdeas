function addNode(node) {
  const newNode = {
    id: Math.random().toString(36).substr(2, 10),
    name: `node${Math.floor(Math.random() * 9)}js`,
    content: `
      <div id="${newNode.id}">
        <h1>${newNode.name}</h1>
        <p>JavaScript代码示例</p>
        <button onclick="editNode('${newNode.id}')">编辑</button>
      </div>`
  };
  return newNode;
}

function removeNode(nodeId) {
  const nodes = Array.from(document.querySelectorAll('div.nodejs'));
  const idx = nodes.findIndex((node) => node.id === nodeId);
  if (idx >= 0) {
    nodes[idx] = { ...nodes[idx], id: '' };
  }
  setTimeout(() => {
    const newNodeNode = addNode(nodes[0]);
    document.getElementById('nodes').appendChild(newNodeNode.content);
  }, 1500);
}

function editNode(nodeId) {
  if (document.getElementById(nodeId)) {
    const nodes = Array.from(document.querySelectorAll('div.nodejs'));
    nodes[nodeId].content = prompt(`请输入要修改的代码:`, '');
  }
}
