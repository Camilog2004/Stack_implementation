//Clase para cada nodo de la pila
var StackNode = /** @class */ (function () {
    function StackNode(value) {
        this.value = value;
        this.prev = null;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = null;
        this.lenght = 0;
    }
    //Metodo para agregar un elemento a la pila
    Stack.prototype.push = function (node) {
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
    };
    Stack.prototype.pop = function () {
        //En caso de que la pila este vacia
        if (!this.head) {
            return null;
        }
        else {
            var temp = this.head;
            var value_temp = temp.value;
            this.head = temp.prev;
            temp.prev = null;
            this.lenght -= 1;
            return value_temp;
        }
    };
    return Stack;
}());
var pila = new Stack();
console.log(pila);
var valor1 = new StackNode(25);
pila.push(valor1);
console.log(pila);
var valor2 = new StackNode(30);
pila.push(valor2);
console.log(pila);
pila.pop();
console.log(pila);
pila.pop();
console.log(pila);
