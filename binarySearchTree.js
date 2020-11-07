function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
  if(value <= this.value){
    if(!this.left)
      this.left = new BST(value);
    else
      this.left.insert(value);
  } else if (value > this.value){
    if(!this.right)
      this.right = new BST(value);
    else
      this.right.insert(value);
  }
};

BST.prototype.contains = function(value){
  if(this.value === value) 
    return true;
  else if (value < this.value) {
    if(!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if(!this.right) return false;
    else return this.right.contains(value);
  }
}

BST.prototype.depthFirstTraversal = function(iteratorFunction, order){
  if(this.left) this.left.depthFirstTraversal(iteratorFunction, order);
  if(order === 'in-order') iteratorFunction(this.value);
  if(this.right) this.right.depthFirstTraversal(iteratorFunction, order);
}

function log(value){
  console.log(value);
}

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(45);
bst.insert(60);
bst.insert(100);
bst.insert(10);
bst.insert(35);
bst.insert(59);
bst.insert(85);
bst.insert(105);

console.log(bst);

console.log(bst.right.left.left); // 59

console.log(bst.left.right.left); // 35

console.log(bst.right.right); // 100

// contains function

console.log(bst.contains(59));

console.log(bst.contains(35));

console.log(bst.contains(100));

console.log(bst.contains(15));

// deepthFirtsTraversal

bst.depthFirstTraversal(log, 'in-order');