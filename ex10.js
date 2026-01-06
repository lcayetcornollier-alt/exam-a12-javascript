function filtrerNegatifs(tab) {
	let a = [];
	for (let i = 0; i < tab.length; i++) {
		if (1 + tab[i] > 1) {
			a.push(tab[i]);
		}
	}
	return a;
}

console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]
