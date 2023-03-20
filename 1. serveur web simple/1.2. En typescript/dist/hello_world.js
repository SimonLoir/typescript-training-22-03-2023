"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.say_hello = void 0;
// On peut exporter des fonctions qui seront accessibles par d'autres modules.
function say_hello() {
    console.log('Hello World!');
    this_function_can_only_be_used_here();
}
exports.say_hello = say_hello;
// Cette fonction n'est pas exportée, elle ne sera donc pas accessible par d'autres modules.
function this_function_can_only_be_used_here() {
    console.log('Hello from test !');
}
