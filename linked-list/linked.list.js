/**
 * class Node create a linked list instance and sets the value property and next pointer to null
 */

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;  
    }

    append(value){
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const printList = [];
        let currentNode = this.head;
        while(currentNode){
            printList.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return printList;
    }

    insert(index, value){ 
        if(index >= this.length){
            return this.append(value);
        }
        if(index === 0){
            return this.prepend(value)
        }
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index-1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index){
       let counter = 0;
       let currentNode = this.head;
       while(counter < index){
         currentNode = currentNode.next;
         counter++;
       }
       return currentNode;
    }

    remove(index){
        if(index === 0){
            this.head = this.head.next;
            this.length--;
            return this;
        }
       const leader = this.traverseToIndex(index-1);
       const unWantedNode = leader.next;
       leader.next = unWantedNode.next;
       this.length--;
       return this;
    }
}


const myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.prepend(5);
myLinkedList.insert(6, 17);
myLinkedList.remove(0)
console.log(myLinkedList);
console.log(myLinkedList.printList());


