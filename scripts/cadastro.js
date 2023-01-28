$(() => {
	// Campo de telefone: formata a string automaticamente
	$('#tel').on('input', function (e) {
		e.preventDefault();

		const numbers = this.value.replace(/\D/g, '');

		let newVal = '';

		for (let i = 0; i < numbers.length; i++) {
			switch (i) {
				case 0:
					newVal = '(' + numbers[i];
					break;
				case 2:
					newVal += ') ' + numbers[i];
					break;
				case 7:
					newVal += '-' + numbers[i];
					break;
				default:
					newVal += numbers[i];
					break;
			}
		}

		this.value = newVal;
	});
});
