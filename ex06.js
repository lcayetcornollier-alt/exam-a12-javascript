function doublons(tab) {
    let b = []
	for ( let i = 0; i < tab.length; i++){
        b.push(tab[i] * 2)
    }return b 
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]