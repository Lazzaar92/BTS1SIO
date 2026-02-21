// tirage-au-sort.js - Version minimaliste

let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

function tirage() {
    // Récupération des éléments
    const elementAffichage = document.getElementById('affichage');
    const elementAleatoire = document.getElementById('aleatoire');
    
    // Tirage au sort
    const indexTire = Math.floor(Math.random() * mangas.length);
    const mangaTire = mangas[indexTire];
    
    // Affichage
    elementAffichage.textContent = `Le manga tiré au sort est : ${mangaTire}`;
    elementAleatoire.textContent = `Tirage effectué parmi ${mangas.length} mangas`;
}