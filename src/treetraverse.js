/**
 * 非递归先序遍历
 * 
 * node { left, value, right }
 */
export function preorderTraverse(node) {
  const nodes = [];
  const visitNodes = [];
  while (node || nodes.length > 0) {
    if (node) {
      visitNodes.push(node);
      nodes.push(node);
      node = node.left;
    } else {
      node = nodes.pop();
      node = node.right;
    }
  }
  return visitNodes;
}

/**
 * 非递归中序遍历
 * 
 * node { left, value, right }
 */
export function inorderTraverse(node) {
  const nodes = [];
  const visitNodes = [];
  while (node || nodes.length > 0) {
    if (node) {
      nodes.push(node);
      node = node.left;
    } else {
      node = nodes.pop();
      visitNodes.push(node);
      node = node.right;
    }
  }
  return visitNodes;
}

/**
 * 非递归后序遍历
 * 
 * node { left, value, right }
 */
export function postorderTraverse(node) {
  const nodes = [];
  const visitNodes = [];
  while (node || nodes.length > 0) {
    if (node) {
      visitNodes.push(node);
      nodes.push(node);
      node = node.right;
    } else {
      node = node.pop();
      node = node.left;
    }
  }
  return visitNodes.reverse();
}

/**
 * 深度优先遍历
 * 
 * node { children, value }
 */
export function dfs(node) {
  const stack = [];
  const visitNodes = [];
  stack.push(node);
  while (stack.length > 0) {
    const n = stack.pop();
    visitNodes.push(n.value);
    const c = n.children;
    for (let i = c.length - 1; i >= 0; i--) {
      stack.push(c[i]);
    }
  }

  return visitNodes;
}

/**
 * 广度优先遍历
 * 
 * node { children, value }
 */
export function bfs(node) {
  const stack = [];
  const visitNodes = [];
  stack.push(node);
  while (stack.length > 0) {
    const n = stack.shift();
    visitNodes.push(n.value);
    const c = n.children;
    [].push.apply(stack, c);
  }
  return visitNodes;
}