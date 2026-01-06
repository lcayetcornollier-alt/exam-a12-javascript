function compterMots(chaine) {
	let a = 0;
	for (let i = 0; i < chaine.length; i++) {
		if (chaine[i] == " ") {
			a++;
		}
	}
	return a + 1;
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4