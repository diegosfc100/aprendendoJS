document.addEventListener('DOMContentLoaded', () => {
	const searchIcon = document.getElementById('icon-search');
	const searchBar = document.getElementById('search-bar');

	searchIcon.onclick = () => {
		if (searchBar.classList.contains('search-bar-slide-in')) {
			searchBar.classList.remove('search-bar-slide-in');
			searchIcon.classList.remove('search-icon-gray');
			searchBar.classList.toggle('search-bar-slide-out');
			searchIcon.classList.toggle('search-icon-white');
		} else {
			searchBar.classList.remove('search-bar-slide-out');
			searchIcon.classList.remove('search-icon-white');
			searchBar.classList.toggle('search-bar-slide-in');	
            searchIcon.classList.toggle('search-icon-gray');
		}
	};

	const menuIcon = document.getElementById('icon-menu');
	const nPage = document.getElementById('n-page');
	const sPage = document.getElementById('s-page');

	menuIcon.onclick = () => {
		sPage.classList.toggle('shift');
		nPage.classList.toggle('shift');
	};
});
