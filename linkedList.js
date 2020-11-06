function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
  var newNode = new Node(value,this.head,null);
  if(this.head)
    this.head.prev = newNode;
  else
    this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value,null,this.tail);
  if(this.tail)
    this.tail.next = newNode;
  else
    this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function(){
  if(!this.head) return null;
  var value = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev=null;
  else this.tail = null;
  return value;
}

LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null;
  var value = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next=null;
  else this.head = null;
  return value;
}

LinkedList.prototype.search = function (searchValue) {
  var currentNode = this.head;
  while(currentNode){
    if(currentNode.value === searchValue)
      return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
}

// Exercise, create a new function indexOf, the objective of this function is
// to return the index of a value enter as parameter.  Example:
// if we have a linkedlist of 3 - 5 - 3 - 8 the function has to return position 0 and 2
// for a value of 3.

LinkedList.prototype.indexOf = function(valueToSearch){
  var currentNode = this.head;
  var currentIndex = 0;
  var indexes = [];
  
  while(currentNode){
    if(currentNode.value === valueToSearch){
      indexes.push(currentIndex) ;
    }
    currentIndex++;
    currentNode = currentNode.next;
  }

  return indexes;
}


var ll = new LinkedList();

ll.addToTail(1);
ll.addToTail(5);
ll.addToTail(3);
ll.addToTail(5);
ll.addToTail(8);
ll.addToTail(7);
ll.addToTail(5);

console.log(ll.indexOf(5));
