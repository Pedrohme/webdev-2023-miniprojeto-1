$(function () {
	addItemToListHandler();
	removeElementFromListHandler();
});

function addItemToListHandler() {
	$('#add-livro').on('click', function () {
		let list = $('#wish-list');

		let newItemName = $('#select-livros').find(':selected').text();
		let newItemNumber = list.children('li').length + 1;

		list.append(
			`<li><label>${newItemNumber}</label><p>${newItemName}</p><i title="Remover" class="fa-regular fa-trash-can fa-lg" lab></i></li>`
		);
	});
}

function removeElementFromListHandler() {
	let list = $('#wish-list');

	list.on('click', 'li', function () {
		$(this).remove();

		let children = list.children('li');
		children.each((idx, item) => {
			$(item)
				.find('label')
				.text(idx + 1);
		});
	});
}
