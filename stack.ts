//Clase para cada nodo de la pila
class StackNode<T>{
    value:T
    prev:StackNode<T> | null

    constructor(value:T){
        this.value=value
        this.prev=null
    }
}


class Stack<T>{
    head:StackNode<T> | null
    lenght:number

    constructor(){
        this.head=null
        this.lenght=0
    }

    //Metodo para agregar un elemento a la pila
    push(node: StackNode<T>):void{

        //En caso de que la pila este vacia
        if(!this.head){
            this.head=node
            this.lenght+=1
        }
        else{
            node.prev=this.head
            this.head=node
            this.lenght+=1
        }
    }

    pop():T | null{
        //En caso de que la pila este vacia
        if(!this.head){
            return null
        }else{
            const temp:StackNode<T>=this.head
            const value_temp:T=temp.value
            this.head=temp.prev
            temp.prev=null
            this.lenght-=1
            return value_temp
        }
        
    }
}

const pila= new Stack<number>()
console.log(pila)

const valor1= new StackNode<number>(25)
pila.push(valor1)
console.log(pila)

const valor2= new StackNode<number>(30)
pila.push(valor2)
console.log(pila)

pila.pop()
console.log(pila)

pila.pop()
console.log(pila)

