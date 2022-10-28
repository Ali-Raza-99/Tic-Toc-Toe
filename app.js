let gameover = false
let turn = 'X'
let boxes = document.getElementsByClassName('box')



const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerHTML = ` <h3> ${boxtext[e[0]].innerText} Won</h3>`
            document.querySelector('.win').getElementsByTagName('img')[0].style.height = "200px";
            gameover = true

         setTimeout(() => {
            let boxtexts = document.querySelectorAll('.boxtext')
            Array.from(boxtexts).forEach(element => {
                element.innerHTML = ''
            })
            document.getElementsByClassName("info")[0].innerHTML = `<span style="font-size: 1.75rem;font-weight: 500;" class="info">Turn for X</span>`
            document.querySelector('.win').getElementsByTagName('img')[0].style.height = "0px";
         }, 2000);
        }
    })
}


Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText == '') {
            boxtext.innerText = turn
            turn = changeTurn()
            checkWin()
            if (!gameover) {
                document.getElementsByClassName('info')[0].innerHTML = `<span style="font-size: 1.75rem;font-weight: 500;" class="info">Turn for ${turn}</span>`
            }
        }

    })
})


const changeTurn = () => {
    return turn === 'X' ? '0' : 'X'
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element => {
        element.innerHTML = ''
    })
    turn = 'X'
    document.querySelector('.win').getElementsByTagName('img')[0].style.height = "0px"
    document.getElementsByClassName("info")[0].innerHTML = `<span style="font-size: 1.75rem;font-weight: 500;" class="info">Turn for ${turn}</span>`
    gameover = false
})





