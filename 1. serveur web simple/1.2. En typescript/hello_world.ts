// On peut exporter des fonctions qui seront accessibles par d'autres modules.
export function say_hello() {
    console.log('Hello World!');
    // On peut appeler des fonctions qui ne sont pas exportées.
    this_function_can_only_be_used_here();
}

// Cette fonction n'est pas exportée, elle ne sera donc pas accessible par d'autres modules.
function this_function_can_only_be_used_here() {
    console.log('Hello from test !');
}
