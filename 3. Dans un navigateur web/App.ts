// On attend que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', () => {
    // On récupère le h1 de la page => soit null, soit un élément HTML
    const title = document.querySelector('h1');
    // Si title n'est pas null, on change son contenu
    if (title)
        // Typescript sait que title est un élément HTML et non null
        title.textContent = 'Hello World';
});
