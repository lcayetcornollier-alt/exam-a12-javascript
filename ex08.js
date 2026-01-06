function sommePairs(tab) {
	let a = 0;
	for (let i = 0; i < tab.length; i++) {
		if (tab[i] % 2 == 0) {
			a += tab[i];
		}
	}
	return a;
}

console.log(sommePairs([1, 2, 3, 4])); // Résultat attendu : 6
