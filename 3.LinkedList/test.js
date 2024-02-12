class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head =null;
  }

  //addToFirst
  addToFirst(data){
    const newNode = new Node(data)

    newNode.next = this.head;
    this.head = newNode;
  }


  //addToLast
  addToLast(data){
    const newNode = new Node(data);
    if(!this.head){
      return
    }

    let current = this.head;
    while(current.next){
      current=current.next;
    }
    current.next = newNode;
  }


  //size
  size(){
    let count = 0;
    let current = this.head;
    while(current){
      count++;
      current = current.next;
    }
    return count;
  }


  //addAt
  addAt(index, data){
    if(index < 0 && index > this.size()){
      console.error("Invalid index");
      return
    }
    const newNode = new Node(data)

    if(index === 0){
    newNode.next = this.head;
    this.head = newNode;
    return
    }

    let current = this.head;
    for(let i=0; i<index-1; i++){
      current= current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }


  //removeFirst
  removeFirst(){
    if(!this.head){
      return
    }
    this.head = this.head.next;
  }


  //removeLast
  removeLast(){
    if(!this.head){
      return
    }
    let current = this.head;
    while(current.next.next){
      current = current.next;
    }
   
    current.next = null;

  }



  //removeAt
  removeAt(index, data){
    if(index < 0 && index > this.size()){
      console.error("Invalid index");
      return
    }

    if(index=== 0){
      this.head = this.head.next;
    }
    const newNode = new Node(data)
    let current = this.head;
    for(let i=0; i<index-1; i++){
      current= current.next;
    }

    if(current.next){
      current.next = current.next.next;
    }

  }



  //print
  print(){
    let current = this.head;

    while(current){
      console.log(current.data);
      current =current.next;
    }
  }

}

const linkedlist = new LinkedList();

linkedlist.addToFirst(10)
linkedlist.addToFirst(11)
linkedlist.addToFirst(12)
linkedlist.addToFirst(13)
linkedlist.addToLast(1)
linkedlist.addAt(0,2)
linkedlist.removeAt(0)
linkedlist.addAt(1,2)
linkedlist.removeAt(1)
linkedlist.removeLast()

console.log("size ", linkedlist.size())

linkedlist.print();