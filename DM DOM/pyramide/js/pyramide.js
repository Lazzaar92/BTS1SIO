function construirePyramide() {
    // Récupération de l'input
    const input = document.getElementById('ligne-pyramide').value;
    const n = parseInt(input);
    const display = document.getElementById('pyramide');
    
    if (isNaN(n)) {
        alert("Veuillez entrer un nombre");
        return;
    }

    let resultat = "";
    // On crée une base de référence pour utiliser slice()
    // On utilise des étoiles et des espaces
    for (let i = 1; i <= n; i++) {
        let ligneComplete = " ".repeat(n - i) + "*".repeat(2 * i - 1);
        
        // Utilisation de slice pour "extraire" la ligne (début à fin)
        let ligneExtraite = ligneComplete.slice(0, ligneComplete.length);
        
        resultat += ligneExtraite + "\n";
    }

    // Affichage dans la console et dans le HTML
    console.log(resultat);
    display.innerText = resultat; 
    // Note : Utilisez style="white-space: pre; font-family: monospace;" 
    // sur votre balise <p> pour garder la forme de pyramide.
}