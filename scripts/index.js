$(() => {
	const itemsWithSubitems = $('.has-submenu');

	itemsWithSubitems.on('click', toggleItem);

	$(document).on('click', closeSubmenu);
});

function toggleItem() {
	if (this.classList.contains('submenu-active')) {
		this.classList.remove('submenu-active');
	} else {
		this.classList.add('submenu-active');
	}
}

/**
 *
 * @param {JQuery.Event} e
 */
function closeSubmenu(e) {
	const activeSubmenu = $('.menu .submenu-active');
	if (!activeSubmenu.has(e.target).length) {
		activeSubmenu.removeClass('submenu-active');
	}
}
