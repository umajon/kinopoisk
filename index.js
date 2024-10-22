<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Главная |Кинопоиск: поиск фильмов и сериалов</title>
    <!-- Подключение шрифта -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <!-- Подключение стилей библиотеки Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <!-- Подключение js библиотеки Bootstrap -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>

    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="/assets/images/logo-light.svg"
            alt="Logo"
            width="200"
            class="d-inline-block align-text-top"
          />
        </a>

        <a
          href="/pages/favs.html"
          type="button"
          class="btn btn-outline-secondary"
        >
          Избранные
        </a>
      </div>
    </nav>
    <main>
      <div class="container">
        <div class="d-flex align-items-center gap-2 mt-4">
          <input
            class="form-control form-control"
            type="text"
            id="movie-search-input"
            placeholder="Введите название фильма или сериала"
          />
          <button type="button" class="btn btn-outline-primary" id="movie-search-button">Найти</button>
        </div>

        <section>
          <h2 class="my-3">Результаты поиска</h2>
          <div class="search-results d-flex justify-content-between flex-wrap">
         <!-- сюда рендерится карточка фильма -->
          </div>
        </section>
        <!-- это начало кода спиннера  -->
        <div class="d-flex justify-content-center">
          <div class="spinner-border d-none" id="loading-spinner" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div> <!-- это конец кода спиннера  -->

<!-- это начало кода тостер-уведомления -->
<!-- Flexbox container for aligning the toasts -->
<div aria-live="polite" aria-atomic="true" class="toast-container position-fixed top-0 start-50 translate-middle-x p-3" style="z-index: 1055;">
  <!-- Toast для успешного поиска -->
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="success-toast">
    <div class="toast-header">
      <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="green"></rect></svg>
      <strong class="me-auto">Успешный успех</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Мы нашли ваш фильм.
    </div>
  </div>

  <!-- Toast для неудачного поиска -->
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="error-toast">
    <div class="toast-header">
      <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="red"></rect></svg>
      <strong class="me-auto">Ошибка</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Мы не смогли найти ваш фильм.
    </div>
  </div>
</div>
<!-- это конец  кода тостер-уведомления -->

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>`
          </div>
        </div>
      </div>
    </main>
    <script src="/index.js" type="module"></script>
  </body>
</html>
