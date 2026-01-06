function estNegatif(nombre) {
   
	if ( 1 + nombre < 1){
        return true
    }
    return false
}

console.log(estNegatif(-3)); // Résultat attendu : true
console.log(estNegatif(5)); // Résultat attendu : false