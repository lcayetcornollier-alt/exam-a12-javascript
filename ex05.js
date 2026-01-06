function compterVoyelles(chaine) {
	let a = 0;
	let b = chaine.length;
	let voyelles = ["a", "e", "i", "o", "u", "y"];
	for (let t = 0; t <= b; t++) {
		for (let i = 0; i <= 5; i++) {
			if (voyelles[i] == chaine[t]) {
				a++;
			}
		}
	}
    return a
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
