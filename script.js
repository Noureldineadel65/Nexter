(function() {
	const likes = document.querySelectorAll(".home__like");
	function handleLike() {
		const that = this;
		this.style.animation = "like .6s";
		that.parentNode.children[0].style.animation = "wish .6s";
		if (this.classList.contains("liked")) {
			this.classList.remove("liked");
			that.parentNode.children[0].textContent = "Removed from Wishlist";
		} else {
			this.classList.add("liked");
			that.parentNode.children[0].textContent = "Added to Wishlist";
		}
		setTimeout(function() {
			that.style.animation = "none";
			that.parentNode.children[0].style.animation = "none";
		}, 600);
	}
	likes.forEach(item => item.addEventListener("click", handleLike));
})();
