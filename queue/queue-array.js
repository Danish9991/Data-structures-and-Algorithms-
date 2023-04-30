class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}

class QueueUsingLinkedList {
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    peek(){
        return this.front.value
    }

    enQueue(value){
       const newNode = new Node(value)
       if(this.length === 0){
        this.front = newNode;
        this.back = newNode;
       }else{
        const holdinPointer = this.back;
        this.back = newNode;
        this.back.next = holdinPointer;
       }
       this.length++;
       return this;
       
    }

    deQueue(){
        if(this.front === null){
            return null
        }

        const holdinPointer = this.front;
        this.front = this.front.next;
        this.length--;
        return this;
    }
}