// Récupérer le contenu du paragraphe "citation"
let citation = document.getElementById("citation").textContent;

// Supprimer la ponctuation (points, virgules, apostrophes, etc.)
citation = citation.replace(/[.,’']/g, "");

// Transformer la phrase en tableau de mots
let mots = citation.split(" ");

// Variable pour stocker le mot le plus long
let motPlusLong = "";

// Parcourir le tableau pour trouver le mot le plus long
for (let i = 0; i < mots.length; i++) {
    if (mots[i].length > motPlusLong.length) {
        motPlusLong = mots[i];
    }
}

// Afficher le mot le plus long dans le paragraphe "motPlusLong"
document.getElementById("motPlusLong").textContent =
    "Le mot le plus long est : " + motPlusLong;