function moyenne(tab) {
    let a = 0
	for (let i = 0; i<tab.length; i++ ){
      a += tab[i] 
    }
    return a / tab.length
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6