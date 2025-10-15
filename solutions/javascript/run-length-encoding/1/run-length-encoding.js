export const encode = (word) => {
	var ch;
	var counter = 0; 
	var encoded = "";  
	for (let ind = 0; ind < word.length; ind++){
		if (ind === 0){
			ch = word[ind]; 
			counter++; 
		}
	 	else if (ch === word[ind]){
			counter++; 
		}
		else if (ch !== word[ind]){
			if (counter > 1) 
				encoded += counter; 
			encoded += ch; 
			ch = word[ind]; 
			counter = 1; 
		}
		if (ind === (word.length - 1)){
			if (counter > 1)
				encoded += counter; 
			encoded += word[ind]; 
		}
	}
	return encoded; 
};

export const decode = (encoded) => {
	var repeated = ''; 
	var decoded = ''; 
	for (let ind = 0; ind < encoded.length; ind++) {
		if (encoded[ind] >= '0' && encoded[ind] <= '9')
			repeated += encoded[ind]; 
		else {
			if (repeated != '') {
				for(let i=0; i < Number(repeated); i++) 
					decoded += encoded[ind]; 
				repeated = ''; 
			 }
			else
				decoded += encoded[ind]; 
			
		}
	}
	return (decoded);
};
