function toggleFilter(items) {
	grid_items.forEach(function(item) {
		const image = item.querySelector('img');
		const rect = image.getBoundingClientRect();
		const window_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		if(rect.top > -20 && (this.scrollY + rect.bottom) < (this.scrollY + window_height + 20) ) {
			image.style.filter = 'grayscale(0%) opacity(1)';
		} else {
			image.style.filter = 'grayscale(100%) opacity(0.75)';
		}
	});
}

/*function toggleFilter_() {
	const window_bottom = this.scrollY + window.screen.availHeight;
	grid_items.forEach(function(item) {
		const image = item.querySelector('img');
		const percentage = percentageVisible(image);
		image.style.filter = 'grayscale('+ (100 - percentage) +'%)';
	});
}

function percentageVisible(e) {
	const e_top = e.offsetTop;
	const v_height = document.documentElement.clientHeight;
	const scroll = window.scrollY + 100;
	const e_height = e.clientHeight + 100;
	const before = scroll - e_top;
	const after = (e_top + e_height) - (scroll + v_height);
	if ((scroll > e_top + e_height) || (e_top > scroll + v_height)) {
		return 0;
	} else {
		var result = 100;

		if(before > 0) {
			result -= before / e_height * 100;
		}

		if(after > 0) {
			result -= after / e_height * 100;
		}
		return result;
	}
}*/
