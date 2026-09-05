let nombres = [8, 3, 5, 1, 9, 2];
console.log("Avant le tri : " + nombres.join(", "));

// On commence au 2ème élément (index 1)
for (let i = 1; i < nombres.length; i++) {
    let cle = nombres[i]; // L'élément à insérer
    let j = i - 1;

    // On recule et on décale les éléments plus grands que la clé
    while (j >= 0 && nombres[j] > cle) {
        nombres[j + 1] = nombres[j];
        j--; // On passe au précédent
    }
    
    // On insère la clé à sa position correcte
    nombres[j + 1] = cle;
}

console.log("Après le tri : " + nombres.join(", "));