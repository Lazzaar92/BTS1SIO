function palindrome() {
    // Récupération du mot saisi
    const motSaisi = document.getElementById('id-mot-saisi').value;
    
    const motMinuscules = motSaisi.toLowerCase();
    
    // Inversion du mot
    const motInverse = motMinuscules.split('').reverse().join('');
    
    const elementResultat = document.getElementById('resultat');
    
    if (motMinuscules === motInverse) {
        elementResultat.textContent = `"${motSaisi}" est un palindrome !`;
        elementResultat.style.color = 'green';
    } else {
        elementResultat.textContent = `"${motSaisi}" n'est pas un palindrome.`;
        elementResultat.style.color = 'red';
    }
    
    if (motSaisi === '') {
        elementResultat.textContent = 'Veuillez saisir un mot.';
        elementResultat.style.color = 'orange';
    }
}