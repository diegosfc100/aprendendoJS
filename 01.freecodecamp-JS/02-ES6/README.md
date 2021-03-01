## Introdução aos Desafios ES6

ECMAScript é uma versão padronizada de JavaScript com o objetivo de unificar as especificações e recursos da linguagem. Como todos os principais navegadores e tempos de execução de JavaScript seguem esta especificação, o termo ECMAScript é intercambiável com o termo JavaScript.

A maioria dos desafios no freeCodeCamp usa a especificação ECMAScript5(ES5) da linguagem, finalizada em 2009. Mas o JavaScript é uma linguagem de programação em evolução. À medida que recursos são adicionados e revisões são feitas, novas versões da linguagem são lançadas para uso pelos desenvolvedores.

A versão padronizada mais recente é chamada ECMAScript6(ES6), lançada em 2015. Esta nova versão da linguagem adiciona alguns recursos poderosos que serão abordados nesta seção de desafios, incluindo:

    
> Arrow function;<br>Classes;<br>Modules;<br>Promises;<br>Generators;<br>let and const.

Nota: Nem todos os navegadores oferecem suporte a recursos ES6. Se você usa ES6 em seus próprios projetos, pode ser necessário usar um programa (transpiler) para converter seu código ES6 em ES5 até que os navegadores suportem ES6.

<hr>

Padrões usados para resolver os desafios:

Explore Differences Between the var and let Keywords: <b>variable let</b>

Compare Scopes of the var and let Keywords: <b>variable let</b>

Declare a Read-Only Variable with the const Keyword: <b>variable const</b>

Mutate an Array Declared with const: <b>variable const</b>

Prevent Object Mutation: <b>Object.freeze</b>

Use Arrow Functions to Write Concise Anonymous Functions: <b>const myFunc= () => "value"</b>

Write Arrow Functions with Parameters: <b>const myFunc= () => "value";</b>

Write Higher Order Arrow Functions: <b>map(), filter()</b>

Set Default Parameters for Your Functions: <b>function greeting(name = "Anonymous") {}</b>

Use the Rest Operator with Function Parameters: <b>reduce(); (...args)</b>

Use the Spread Operator to Evaluate Arrays In-Place: <b>(function() { arr2 = [...arr1] })();</b>

Use Destructuring Assignment to Assign Variables from Objects: <b>const {length:len} = str</b>

Use Destructuring Assignment to Assign Variables from Nested Objects: <b>const { start : { x: startX, y: startY }} = a</b>

Use Destructuring Assignment to Assign Variables from Arrays: <b>const temp = a; a = b; b = temp;</b>

Use Destructuring Assignment with the Rest Operator to Reassign Array Elements: <b>const [a, b, ...arr] = list;</b>

Use Destructuring Assignment to Pass an Object as a Function's Parameters: <b>const profileUpdate = (profileData) => {const { name, age, nationality, location } = profileData; // do something with these variables}</b>

Create Strings using Template Literals: <b>${variable}; map()</b>

Write Concise Object Literal Declarations Using Simple Fields: <b>const getMousePosition = (x, y) => ({ x, y });</b>

Write Concise Declarative Functions with ES6: <b>const person = {name: "Taylor", sayHello() { return `Hello! My name is ${this.name}.`;}};</b>

Use class Syntax to Define a Constructor Function: <b>class Vegetable {constructor (name) {this.name = name;}}</b>

Use getters and setters to Control Access to an Object: <b>class, constructor</b>

Understand the Differences Between import and require: <b>import { countItems } from "math_array_functions"</b>

Use export to Reuse a Code Block: <b>export</b>

Use * to Import Everything from a File: <b>import * as</b>

Create an Export Fallback with export default: <b>export default</b>

Import a Default Export: <b>export default</b>