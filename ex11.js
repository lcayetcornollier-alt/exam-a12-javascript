function premiereLettreMajuscule(chaine) {
	let b = chaine[0];
	let i = b.toUpperCase();
	chaine = chaine.replace(b, i);
	for (let t = 0; t < chaine.length; t++) {
		if (chaine[t] == " ") {
            t++
			b = chaine[t];
			i = b.toUpperCase();
			chaine = chaine.replace(b, i);
		}
	}
	return chaine;
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"
