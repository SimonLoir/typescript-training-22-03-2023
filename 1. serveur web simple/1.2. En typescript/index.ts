// Il faut installer les types d'express pour que TypeScript comprenne les types de la librairie.
// npm install --save-dev @types/express
import express from 'express';
// On peut importer des fonctions qui ont été exportées par d'autres modules.
import { say_hello } from './hello_world';
// Lorsque l'on utilise export default, on peut importer sans utiliser les accolades.
import Demo from './Demo';

const app = express();
const port = 3000;

// Il n'y a pas besoin de spécifier le type de req et res, TypeScript le fera pour nous grâce aux types d'express (@types/express).
app.get('/', (req, res) => {
    say_hello();
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    Demo.say_hello();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
