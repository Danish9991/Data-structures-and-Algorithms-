class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
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
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const holdingNode = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = holdingNode;
        holdingNode.prev = newNode;
        this.length++;
        return this;
    }

    remove(index){
        if(index === 0){
          return this.head = this.head.next;
        }
        const leader = this.traverseToIndex(index-1);
        const unWanterNode = leader.next;
        let follower = unWanterNode.next;
        leader.next = follower;
        //if the node is not last node i.e follower will be null only if we given the last index
        if(follower!== null) follower.prev = leader;
        this.length--;
        return this;

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
}
