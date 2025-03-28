document.addEventListener("DOMContentLoaded", function () {
    const movies = document.querySelectorAll(".movie");
    const categoryLinks = document.querySelectorAll("nav ul li a");

    categoryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const category = this.dataset.category;
            filterMovies(category);
        });
    });

    function filterMovies(category) {
        movies.forEach(movie => {
            if (category === "all" || movie.dataset.category === category) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }
        });
    }
});
