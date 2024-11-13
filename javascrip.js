const getBook = function () {
  fetch('https://striveschool-api.herokuapp.com/books', {})
    .then((Response) => {
      if (Response.ok) {
        return Response.json()
      } else {
        throw new Error('il server non risponde')
      }
    })
    .then((books) => {
      const BookRead = document.getElementById('book')
      books.forEach((books) => {
        const newCol = document.createElement('div')
        newCol.classList.add('col', 'col-12', 'col-md-6', 'col-lg-3')
        newCol.innerHTML = ` 
            <div class="card struttura">
            <img src="${books.img}" class="card-img-top reform" alt="img 1" />
            <div class="card-body">
              <h5 class="card-title">${books.title}</h5>
              <p class="card-text move">
                ${books.price}
                euro
              </p>
              <a href="#" class="btn button btn-primary">Scarta</a>
            </div>
          </div> `
        BookRead.appendChild(newCol)
        const bottoni = newCol.querySelector('.button')
        bottoni.addEventListener('click', function (e) {
          e.preventDefault()
          const card = this.closest('.card')
          if (card) {
            card.classList.add('d-none')
          }
        })
      })
    })
    .catch((error) => console.log(error))
}
getBook()
