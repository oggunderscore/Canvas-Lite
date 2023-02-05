/* This is my (Logan Blakeborough's) file for learning/messing around with JavaScript.
   It radiates unprofessionalism, but that's ok, because I'll delete it from the project
   or repurpose it at some point...  right? */


function addNumbers(aNumber, anotherOne) {
    return aNumber + anotherOne;
}

let person = {
    fullName: {
        firstName: "Jayce",
        lastName: "Buck"
    },
    age: 27,
    pronoun: "He",
    profession: "Stone Sculpter"

}

class Charger {
    constructor(length, voltage) {
        this.length = length;
        this.voltage = voltage;
    }
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //These are some functional methods
    add(element) {
        var node = new Node(element); //Create a new node

        var current; //This bad boy will allow us to not lose track of the list while we add a new node

        //If the list is empty we can just make the new node the head
        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            //Mosey on over to the end of the list
            while(current.next) {
                current = current.next;
            }

            //Now add the new node to the end of the list
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, index) {
        //Throw a silly funny little error if the index sucks
        if(index < 0 || index > this.size) {
            console.log("Please enter a valid index")
        } else {
            var node = new Node(element);

            var curr, prev;
            curr = this.head;

            //Add the element to the front of the list
            //(side note: I'm not sure if == or === is better here)
            if(index === 0) { 
                node.next = this.head;
                this.head = node;
            } else {
                var i = 0;

                //iterate to the insert position
                while(i < index) {
                    i++;
                    prev = curr;
                    curr = curr.next;
                }

                //Stick that new element right on in there!
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index) {
        //Throw a silly funny little error if the index sucks
        if(index < 0 || index > this.size) {
            console.log("Please enter a valid index")
        } else {
            var curr, prev;
            curr = this.head;

            //Delete from the front of the list
            if(index === 0) {
                this.head = curr.next;
            } else {
                var i = 0;

                //iterate to the remove position
                while(i < index) {
                    i++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }

            this.size--;
            //I would think we should also deallocate the memory from the 
            //deleted variable, but maybe that happens automatically idk
            return curr.element;
        }
    }
    removeElement(element) {
        var curr = this.head;
        var prev = null;

        while(curr != null) {
            //If we find the element, then what? (Rhetorical)
            if(curr.element === element) {
                //So this is pop from the front, but wouldn't if(curr = this.head)
                //also work + be a little less confusing?
                if(prev == null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.element;
            }
            prev = curr;
            curr = curr.next;
        }
        return -1; //Return a silly little error code if the element wasn't found
    }
    //And these are some helper methods:
    indexOf(element) {
        var i = 0;
        var current = this.head;
        
        while(current != null) {
            if(current.element === element) {
                return i;
            }
            i++;
            current = current.next;
        }
        return -1; //Return a silly little error code if the element wasn't found
    }
    isEmpty() {
        return this.size === 0;
    }
    listSize() {
        return this.size;  //The example uses console.log, but I think this is more versatile
    }
    printList() {
        var current = this.head;
        var str = "";
        while(current) {
            str += curr.element + "\n"; //Again the example uses a space but I think a newline is more readable
            current = current.next;
        }
        console.log(str);
    }
}

let funny = 'hehe';
console.log(funny);

let number1 = 1;
let number2 = 2;
let sum = number1 + number2;

alert(sum);

if(sum === number1 + number2) {
    alert("Wow!  The computer works!")
} else {
    alert("I don't think this computer is working right...")
}

console.log("Meet " + person.fullName.firstName + ".\n");
console.log(person.pronoun + "\'s a " + person.age + " year old " + person.profession + "!\n");