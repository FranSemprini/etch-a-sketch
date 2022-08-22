const containerToRender = document.querySelector(`#main__render`)
const clearBtn = document.querySelector(`#option__clear`)
clearBtn.addEventListener(`click`, () => {
    clear()
})

const listenSize = () => {
    size = document.querySelector(`#size`)
    actualSize = size.value
    createBoard(size.value)
    size.addEventListener(`change`, () => {
        if (size.value <= 100) {
            clear()
            actualSize = size.value
            createBoard(size.value)
        } else {
            alert(`Size must be less than 100`)
            size.value = actualSize
        }
    })
}

const paint = () => {
    const squareSelected = document.querySelectorAll(`.square`)
    squareSelected.forEach(element => {
        element.addEventListener(`mousemove`, (e) => {
            element.style.backgroundColor = `black`
        })
    });
}

const createSquare = (n) => {
    const div = document.createElement(`div`)
    div.classList.add (`square` , `${n}`)
    return div
}

const createBoard = (size) => {
    containerToRender.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    containerToRender.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < (size * size) ; i++) {
        containerToRender.append(createSquare(i))
    }
    paint()
}

const clear = () => {
    const squareSelected = document.querySelectorAll(`.square`)
    squareSelected.forEach(element => { 
        element.style.backgroundColor = `red`
    })
}

listenSize()
