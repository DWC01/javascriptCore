var Node = function(value, left, right) {
  this.left = left;
  this.right = right;
  this.value = value;
  this.show = function() {
    return this.value;
  }

}

var BinarSearchTree = function() {
  this.root = null;

  this.insert = function(value) {
    var parent,
        current = this.root,
        node = new Node(value, null, null);

    // If root is emtpy, set root
    if (this.root === null) { 
      this.root = node;
    
    } else {

      while(true) {
        parent = current;

        // If inserted value is less than current value, iterate one node left
        if (value < current.value) {
          current = current.left;

          // If reach empty node, set it to current value 
          if (current === null) {
            parent.left = node;
            break;
          }

        // If inserted value is greater than current value, iterate one node right
        } else {
          current = current.right;

          // If reach empty node, set it to current value
          if (current === null) {
            parent.right = node;
            break;
          }

        }
      } // End While
    
    } // End If
  }

  this.find = function(value) {
    var current = this.root;

    while (current.value !== value) {

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return null;
      }

    }

    return current.value;
  }

  this.getMin = function() {
    var current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.value;
  }

  this.getMax = function() {
    var current = this.root;

    while (current.right !== null) {
      current = current.right;
    }

    return current.value;
  }

  this.breadthFirstSearch = function() {
    var queue = [];
    queue.push(this.root);

    while (queue.length) {
      var node = queue.shift();
      console.log(node.value);

      if (node.left) {queue.push(node.left);}
      if (node.right) {queue.push(node.right);}
    }
  }
}

// Visits nodes in ascending order
// Go all the way down to min value - inOrder(node.left)
// When can't go left any longer, console log self, and try to go right
// If can go right, repeat proccess
// Otherwise continue running last function call stack, which will console log itself, and try to go right
var inOrder = function(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.show() + ' ');
    inOrder(node.right);
  }
}

// Visits root node, then tree in left node, follwed by tree in right node
// Display myself, then traverse all the way left, and all the way right
var preOrder = function(node) {
  if (node !== null) {
    console.log(node.show() + ' ');
    preOrder(node.left);
    preOrder(node.right);

  }
}

// Visits left subtree up to root, then right subtree up to root
// Traverse all the way left, and right before displaying myself
var postOrder = function(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + ' ');
  }
}

var bst = new BinarSearchTree();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

// console.log(bst.root);

// console.log('Inorder traversal: ');
// inOrder(bst.root);

// console.log('Preorder traversal: ');
// preOrder(bst.root);

// console.log('Postorder traversal: ');
// postOrder(bst.root);

// console.log('Get Min Value: ')
// console.log(bst.getMin());

// console.log('Get Max Value: ')
// console.log(bst.getMax());

// console.log('Find Value: ')
// console.log(bst.find(99));

// console.log('Get total: ')
// console.log(bst.getTotal());


// Algorithm Problems

// 1.) Count all nodes in a binary tree
var countNodes = function(node) {
  if (node === null) {return 0;}

  if(node.left === null && node.right === null) {
    return 1;
  } else {
    return 1 + countNodes(node.left) + countNodes(node.right);
  }
}
// console.log(countNodes(bst.root));

// 2.) Breadth First Search - console.log(bst.breadthFirstSearch());

// 3.) Height
var height = function(node){
  if (node === null) {return 0;}

  var leftHeight = height(node.left);
  var rightHeight = height(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}
console.log(height(bst.root));

