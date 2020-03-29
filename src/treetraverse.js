/**
 * 非递归先序遍历
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
