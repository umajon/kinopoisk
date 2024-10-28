
// Получаем избранные фильмы из localStorage
const favMoviesList = JSON.parse(localStorage.getItem('favMovies')) || [];

// Получаем контейнер для избранных фильмов
const favMoviesContainer = document.body.querySelector('.fav-movies-container');

// Функция для отрисовки всех фильмов из избранного
function renderFavMovies() {
    favMoviesContainer.innerHTML = ''; // Очищаем контейнер перед рендерингом

    favMoviesList.forEach((favMovie, index) => {
        const cardElementTemplate = `
        <div class="card" style="width: 20rem" data-card-id="${index}">
            <img
            src="${favMovie.Poster}"
            class="card-img-top"
            alt="${favMovie.Title} movie poster"
            />
            <div class="card-body">
                <h5 class="card-title">${favMovie.Title}</h5>
                <p class="card-text">${favMovie.Plot}</p>
                <div class="d-flex align-items-stretch">
                    <a
                    href="#"
                    class="btn btn-primary d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    >
                    Подробнее
                    </a>
                    <a
                        href="#"
                        class="btn btn-danger remove-button"
                        data-index="${index}"
                        >
                        Удалить из избранного
                    </a>
                </div>
            </div>
        </div>`;

        favMoviesContainer.insertAdjacentHTML('beforeend', cardElementTemplate);
    });

    // Добавляем обработчик для каждой кнопки удаления
    const removeButtons = favMoviesContainer.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const movieIdToDelete = parseInt(button.getAttribute('data-index'), 10);

            // Удаляем фильм из массива и localStorage
            favMoviesList.splice(movieIdToDelete, 1);
            localStorage.setItem('favMovies', JSON.stringify(favMoviesList));

            // Перерисовываем избранные фильмы
            renderFavMovies();
        });
    });
}

// Вызываем функцию для первичной отрисовки избранных фильмов
renderFavMovies();

