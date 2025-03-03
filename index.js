//Тянем данные с сервиса: 
const API_KEY = "565e1e39"

async function fetchData(title) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t="${title}"`)
    const data = await response.json()
    return data
}
const searchInputElement = document.querySelector('#movie-search-input')
const searchButtonElement = document.querySelector('#movie-search-button')
const spinnerElement = document.querySelector('#loading-spinner')

// Добавляем обработчик события для нажатия клавиши Enter в поле ввода
searchInputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // Если нажата клавиша Enter, вызываем событие клика на кнопку
        searchButtonElement.click();
    }
});


// Получаем элементы для тостеров
const successToastElement = document.querySelector('#success-toast')
const errorToastElement = document.querySelector('#error-toast')

let movieTitleValue = ''

searchButtonElement.addEventListener('click', async () => {
    // Показать спиннер, удаляя класс 'd-none'
    spinnerElement.classList.remove('d-none')

    movieTitleValue = searchInputElement.value
    try {
        const movie = await fetchData(movieTitleValue)

        if (movie && movie.Title) {
            const cardElementTemplate = `
               <div class="card" style="width: 18rem">
                    <img
                    src="${movie.Poster}"
                    class="card-img-top"
                    alt="${movie.Title} movie poster"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text">${movie.Plot}</p>
                        <a
                            href="#"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-movie-title="${movie.Title}"
                            data-movie-director="${movie.Director}"
                            data-movie-year="${movie.Year}"
                            data-movie-plot="${movie.Plot}"
                            data-movie-imdbrating="${movie.imdbRating}"
                            data-movie-boxoffice="${movie.BoxOffice}"
                            data-movie-actors="${movie.Actors}"
                            data-movie-awards="${movie.Awards}"
                            data-movie-poster="${movie.Poster}"
                            >
                            Подробнее
                        </a>
                         
                        <a
                            href="#"
                            class="btn btn-primary"
                            id="add-fav-btn"
                                                        >
                            Добавить в избранное
                        </a>
                    </div>
                </div>`;

            const searchResultsContainer = document.querySelector('.search-results')
            searchResultsContainer.insertAdjacentHTML('beforeend', cardElementTemplate)
           
            const addFavButton = document.getElementById('add-fav-btn')
            addFavButton.addEventListener('click', () => {
        
                if(localStorage.getItem('favMovies') === null) {
                    const favMoviesList = []
                    favMoviesList.push(movie)
                    localStorage.setItem('favMovies', JSON.stringify(favMoviesList))
                    return
                }
        
                const favMoviesList = JSON.parse(localStorage.getItem('favMovies'))
                favMoviesList.push(movie)
                localStorage.setItem('favMovies', JSON.stringify(favMoviesList))
            })
        
            // Показать тостер об успешном поиске
            const toast = new bootstrap.Toast(successToastElement)
            toast.show()

        } else {
            // Если фильм не найден, показать ошибочный тостер
            const toast = new bootstrap.Toast(errorToastElement)
            toast.show()
        }
    } catch (error) {
        console.error('Error fetching movie data:', error)

        // Показать тостер об ошибке при поиске
        const toast = new bootstrap.Toast(errorToastElement)
        toast.show()
    } finally {
        // Скрыть спиннер после завершения поиска
        spinnerElement.classList.add('d-none')
    }

})
    


    // Функция для очистки содержимого элемента с классом 'search-results'
    function clearSearchResults() {
        // Находим элемент с классом 'search-results'
        const searchResults = document.querySelector('.search-results');

        // Очищаем его содержимое с помощью textContent
        searchResults.textContent = '';
    }

    // Находим кнопку с id 'movie-search-button'
    const searchButton = document.getElementById('movie-search-button');

    // Добавляем обработчик события для клика по кнопке
    searchButton.addEventListener('click', clearSearchResults);

// Обновляем содержимое модального окна через безопасные методы DOM
const exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const movieTitle = button.getAttribute('data-movie-title');
    const moviePlot = button.getAttribute('data-movie-plot');
    const movieDirector = button.getAttribute('data-movie-director');
    const movieActors = button.getAttribute('data-movie-actors');
    const movieYear = button.getAttribute('data-movie-year');
    const movieAwards = button.getAttribute('data-movie-awards');
    const movieBoxOffice = button.getAttribute('data-movie-boxoffice');
    const movieimdbRating = button.getAttribute('data-movie-imdbrating');
    const moviePoster = button.getAttribute('data-movie-poster'); // Получаем URL постера фильма

    // Выбираем элементы модального окна
    const modalTitle = document.getElementById('exampleModalLabel');
    const modalBody = exampleModal.querySelector('.modal-body');

    // Очищаем содержимое модального окна перед добавлением нового
    while (modalBody.firstChild) {
        modalBody.removeChild(modalBody.firstChild);
    }

    // Устанавливаем заголовок модального окна
    modalTitle.textContent = `Movie: ${movieTitle}`;

    // Создаем элементы для тела модального окна
    const posterImage = document.createElement('img');
    posterImage.src = moviePoster;
    posterImage.alt = `${movieTitle} movie poster`;
    posterImage.classList.add('img-fluid', 'mb-3'); // Добавляем классы для стилей

    const plotParagraph = document.createElement('p');
    plotParagraph.innerHTML = `<strong>Plot:</strong> ${moviePlot}`;

    const directorParagraph = document.createElement('p');
    directorParagraph.innerHTML = `<strong>Director:</strong> ${movieDirector}`;

    const yearParagraph = document.createElement('p');
    yearParagraph.innerHTML = `<strong>Year:</strong> ${movieYear}`;
    
    const Actors = document.createElement('p');
    Actors.innerHTML = `<strong>Actors:</strong> ${movieActors}`;
    
    const Awards = document.createElement('p');
    Awards.innerHTML = `<strong>Awards:</strong> ${movieAwards}`;
    
    const imdbRating = document.createElement('p');
    imdbRating.innerHTML = `<strong>imdbRating:</strong> ${movieimdbRating}`;
    
    const BoxOffice = document.createElement('p');
    BoxOffice.innerHTML = `<strong>BoxOffice:</strong> ${movieBoxOffice}`;

    // Вставляем постер и текстовые данные в модальное окно
    modalBody.appendChild(posterImage);
    modalBody.appendChild(directorParagraph);
    modalBody.appendChild(yearParagraph);
    modalBody.appendChild(Actors);
    modalBody.appendChild(plotParagraph);
    modalBody.appendChild(imdbRating);
    modalBody.appendChild(BoxOffice);
    modalBody.appendChild(Awards);
});
