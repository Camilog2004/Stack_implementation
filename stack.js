//Clase para cada nodo de la pila
class StackNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
        this.lenght = 0;
    }
    //Metodo para agregar un elemento a la pila
    push(node) {
        //En caso de que la pila este vacia
        if (!this.head) {
            this.head = node;
            this.lenght += 1;
        }
        else {
            node.prev = this.head;
            this.head = node;
            this.lenght += 1;
        }
    }
    pop() {
        //En caso de que la pila este vacia
        if (!this.head) {
            return null;
        }
        else {
            const temp = this.head;
            const value_temp = temp.value;
            this.head = temp.prev;
            temp.prev = null;
            this.lenght -= 1;
            return value_temp;
        }
    }
}
const pila = new Stack();
console.log(pila);
const valor1 = new StackNode(25);
pila.push(valor1);
console.log(pila);
const valor2 = new StackNode(30);
pila.push(valor2);
console.log(pila);
pila.pop();
console.log(pila);
pila.pop();
console.log(pila);
