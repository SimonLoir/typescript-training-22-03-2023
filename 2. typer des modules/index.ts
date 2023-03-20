// Le module is-even n'est pas écrit en TypeScript, il n'y a donc pas de fichier .ts. On doit donc créer un fichier .d.ts qui contient les types du module.
import isEven from 'is-even';

// On peut alors utiliser la fonction isEven comme si elle était écrite en TypeScript.
console.log(isEven(2));
