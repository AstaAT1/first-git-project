let nombres = [34, 12, 5, 9, 42, 1];
console.log("Avant le tri : " + nombres.join(", "));

// Boucle externe : nombre de passages
for (let i = 0; i < nombres.length - 1; i++) {
    // Boucle interne : comparaison des éléments
    for (let j = 0; j < nombres.length - 1 - i; j++) {
        // Si l'élément de gauche est plus grand que celui de droite
        if (nombres[j] > nombres[j + 1]) {
            // On échange (Swap)
            let temp = nombres[j];
            nombres[j] = nombres[j + 1];
            nombres[j + 1] = temp;
        }
    }
}

console.log("Après le tri : " + nombres.join(", "));

