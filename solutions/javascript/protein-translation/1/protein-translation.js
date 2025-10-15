//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function checker(protein){
	if (protein == 'AUG') {
		return 'Methionine'; 
	}
	else if (protein == 'UUU' || protein == 'UUC') {
		return 'Phenylalanine'; 
	}
	else if (protein == 'UUA' || protein == 'UUG') {
		return 'Leucine'; 
	}
	else if (protein == 'UCU' || protein == 'UCC' || protein == 'UCA' || protein == 'UCG'){
		return 'Serine'; 
	}
	else if (protein == 'UAU' || protein == 'UAC'){
		return 'Tyrosine'; 
	}
	else if (protein == 'UGU' || protein == 'UGC') {
		return 'Cysteine'; 
	}
	else if (protein == 'UGG'){
		return 'Tryptophan'; 
	}
	else if (protein == 'UAA' || protein == 'UAG' || protein == 'UGA') {
		return 'STOP'; 
	}
	else {
		throw 'Invalid codon'; 
	}
}

export const translate = (RNA) => {
	if (RNA == undefined){
		var result = [];
	}
	else {
		var result = [];
		var protein; 
		var proteins = RNA.match(/.{1,3}/g); 
		for (protein of proteins) {
			var res = checker(protein); 
			if (res != 'STOP' && res != 'ERROR'){
				result.push(res); 	
			}
			else {
				break; 
			}
		}
	}
	return result; 
}
