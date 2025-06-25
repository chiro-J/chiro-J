const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);
console.log(stack.pop());

console.log(stack[stack.length - 1]);   // peek (마지막 요소)



const queue = [];
queue.push("A");
queue.push("B");
queue.push("C");

console.log(queue);
console.log(queue.shift());
console.log(queue);
console.log(queue[0]);

