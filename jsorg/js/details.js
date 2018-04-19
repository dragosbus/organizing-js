const Details = (function() {
	
	const items = select("[rel='js-items']");
	const detailPage = select("[rel='js-details']");
	
	const get = t => {
		let url = t.getAttribute("rel");
		url = url[url.length-1];
		url = `${url}.html`;
		
		return fetch(`./details/${url}`).then(res=>res.text()).then(text=>detailPage.innerHTML = text);
	};
	
	const init = () => {
		click(items, e=>{
			e.preventDefault();
			e.stopPropagation();
			let t = e.target;
			if(t.classList.contains("item")) {
				get(t);
			}
		});
	};
	
	return {init};
	
}());

document.addEventListener("DOMContentLoaded", Details.init);
