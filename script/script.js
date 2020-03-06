// Navigation menu open and close 
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const store = document.getElementById("store-btn");

navClose.addEventListener("click", closeNav);
home.addEventListener("click", closeNav);
about.addEventListener("click", closeNav);
store.addEventListener("click", closeNav);

navOpen.addEventListener("click", () => {
	navOpen.style.display = "none";
	navClose.style.display = "inline-block";
	navList.classList.add("navigation__list--open");
});

function closeNav() {
	navClose.style.display = "none";
	navOpen.style.display = "inline-block";
	navList.classList.remove("navigation__list--open");
}


(function() {
	const buttons = document.querySelectorAll(".store__btn");
	const items = document.querySelectorAll(".item");
	const searchBox = document.getElementById("searchbar");
	
	buttons.forEach(function(button) {
		button.addEventListener("click", function(e) {
			const filter = e.target.dataset.filter;
		
			items.forEach(function(item) {
				if (filter === "all") {
					item.style.display = "block";
				} else {
					if (item.classList.contains(filter)) {
						item.style.display = "block";
					} else {
						item.style.display = "none";
					}
				}
			})
		})
	})
})();

(function() {
	const searchBar = document.getElementById("searchbar");
	const storeItems = document.querySelectorAll(".item");
	
	searchBar.addEventListener("keyup", function(e) {
		const term = e.target.value.toLowerCase();
		storeItems.forEach(function(item) {
			const cat = item.dataset.item;
			if (cat.indexOf(term) != -1) {
				item.style.display = "block";
			} else {
				item.style.display = "none";
			}
		})
	})
})();
