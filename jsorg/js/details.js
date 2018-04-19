const Details = (function() {
	
	let detailPage;
	
	const clickHandler = e => {
		e.preventDefault();
		e.stopPropagation();
		let t = e.target;
			if(t.classList.contains("item")) {
				get(t);
			}
	};
	
	const get = t => {
		let url = t.getAttribute("rel");
		url = url[url.length-1];
		url = `${url}.html`;
		
		return fetch(`./details/${url}`).then(res=>res.text()).then(text=>detailPage.innerHTML = text);
	};
	
	const init = () => {
		const items = select("[rel='js-items']");
		detailPage = select("[rel='js-details']");
		click(items, clickHandler);
	};
	
	return {init};
	
}());
