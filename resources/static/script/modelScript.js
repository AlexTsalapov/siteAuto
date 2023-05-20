const models = document.getElementById('content-item')
let reviewT = document.createElement('div')
    $.get("http://localhost:8881/findModel?model=" + localStorage.getItem('model'), function (data) {
        const temp = document.createElement('div')
        const model = document.createElement('div')
        model.className = 'content-item-image'
        const imag = document.createElement('a')
        const image = document.createElement('img')
        image.src = data.image
        image.alt = "Упс, подключитесь, пожалуйста, к интернету"
        imag.append(image)
        const name = document.createElement('div')
        name.className = "content-item-title"
        name.style = 'cursor: default;'
        name.textContent = "Модель: " + data.model
        model.append(imag)
        const generation = document.createElement('div')
        generation.textContent = "Поколение: " + data.generation
        generation.className = 'content-item-generation'
        const description = document.createElement('div')
        description.textContent = 'Описание: ' + data.description
        description.className = 'content-item-description'
        name.append(generation, description)
        temp.append(model, name)


        const reviews = document.createElement('div')
        reviews.className = "review-item-title"
        const rev = document.createElement('div')
        rev.className = 'review-title'
        const addButton = document.createElement('button')
        addButton.textContent = "Оставить отзыв"
        addButton.className = "addReview"
        const re = document.createElement('b')
        re.textContent = "Отзывы"
        rev.append(re, addButton)
        reviews.append(rev)
        addButton.onclick = function () {
            rev.removeChild(addButton)
            rev.style = 'color: white;margin-left: 1vw;'
            temp.append(rev)
            reviewT = addReview(temp, rev, addButton)
            temp.append(reviewT)
        }


        for (let item in Object.keys(data.reviews)) {
            const line = document.createElement('div');
            line.className = "line";

            const review = document.createElement('div')
            review.className = 'reviewShow'

            const usrName = document.createElement('div')
            usrName.style = 'margin-top:1%;font-size: 2.5vw;'
            const username = document.createElement('div')

            username.textContent = data.reviews[item].username

            usrName.append(username)
            const nameGrade = document.createElement('div')
            nameGrade.style = 'margin-top:1%;'
            const nameG = document.createElement('b')
            nameGrade.append(nameG)
            const area = document.createElement('div')
            area.className = "rating-area"
            const grade = document.createElement('div')
            grade.className = "rating-result"
            //grade.textContent = data.reviews[item].grade
            const count = data.reviews[item].grade
            for (let i = 0; i < count; i++) {
                const star = document.createElement('span')
                star.className = "active"
                grade.append(star)
            }
            const starWithout = 5 - count
            for (let i = 0; i < starWithout; i++) {
                const star1 = document.createElement('span')
                grade.append(star1)
            }
            area.append(grade)
            nameGrade.append(area)
            const dignity = document.createElement('div')
            const dignityName = document.createElement('div')
            const dign = document.createElement('b')
            dign.textContent = "Достоинства: "
            dignityName.append(dign)
            dignityName.style = 'margin-top:1%;'
            dignity.textContent = data.reviews[item].dignity
            dignityName.append(dignity)
            const fl = document.createElement('div')
            fl.style = 'margin-top:1%;'
            const flawsName = document.createElement('b')
            flawsName.textContent = "Недостатки: "
            const flaws = document.createElement('div')
            flaws.textContent = data.reviews[item].flaws
            fl.append(flawsName, flaws)
            const nameTextReview = document.createElement('div')
            const nameT = document.createElement('b')
            nameT.textContent = 'Комментарий:'
            nameTextReview.append(nameT)
            nameTextReview.style = 'margin-top:1%;'
            const textReview = document.createElement('div')
            textReview.textContent = data.reviews[item].review
            nameTextReview.append(textReview)
            review.append(usrName, nameGrade, dignityName, fl, nameTextReview)
            reviews.append(review, line)
        }
        models.append(temp, reviews)


    })


function clear() {

    location.reload()

}

function addReview(temp,rev,addButton) {

    const username = document.createElement('p')
    username.textContent = "Ваше имя *: "
    const inp_username = document.createElement('input')
    inp_username.className = 'inputLit'
    let inp_drade = document.createElement('form')
    inp_drade.className = 'star-rating'
    let drade_count = 0
    for (let i = 5; i >= 1; i--) {
        let starInp = document.createElement('input')
        starInp.className = 'radio-input'
        starInp.type = 'radio'
        starInp.id = 'star' + i
        starInp.name = 'star-input'
        starInp.value = i
        starInp.onclick = function () {
            drade_count = i
            console.log(drade_count)
        }
        inp_drade.append(starInp)
        let starLab = document.createElement('label')
        starLab.className = 'radio-label'
        starLab.htmlFor = 'star' + i
        inp_drade.append(starLab)


    }

    const dignity = document.createElement('p')
    dignity.textContent = "Достоинства *: "
    let inp_dignity = document.createElement('textarea')
    inp_dignity.className = 'inputBig'
    const flaws = document.createElement('p')
    flaws.textContent = 'Недостатки *: '
    let inp_flaws = document.createElement('textarea')
    inp_flaws.className = 'inputBig'
    const textReview = document.createElement('p')
    textReview.textContent = "Комментарий *: "
    const overv = document.createElement('p')
    overv.textContent = '* - поле обязательное для заполнения'
    let inp_textReview = document.createElement('textarea')
    inp_textReview.className = 'inputBig'
    const send_button = document.createElement('button')
    send_button.textContent = 'Отправить'
    send_button.className = 'modal_btn'
    const close_button = document.createElement('span')
    close_button.textContent = '✖'
    close_button.className = 'close--one'
    close_button.onclick = function () {
        // console.log(inp_drade)
        //clear()
        temp.removeChild(reviewT)
        rev.append(addButton)
        temp.append(rev)
    }
    send_button.onclick = function () {
        let flag=true
        if(inp_username.value.length==0){
            inp_username.style = 'border-color: red'
            flag=false
        }
        if (inp_dignity.value.length == 0) {
            inp_dignity.style = 'border-color: red'
            flag=false

        }  if (inp_flaws.value.length == 0) {
            flag=false
            inp_flaws.style = 'border-color: red'
        }  if (inp_textReview.value.length == 0) {
            flag=false
            inp_textReview.style = 'border-color: red'
        } if(flag) {
            $.ajax({
                type: 'POST',
                url: "http://localhost:8881/review/add?model=" + localStorage.getItem('model'),
                data: JSON.stringify({
                    username: inp_username.value,
                    grade: drade_count,
                    dignity: inp_dignity.value,
                    flaws: inp_flaws.value,
                    review: inp_textReview.value
                }),
                contentType: 'application/json',
                dataType: 'json',

            })
            demo()
        }


    }
    async function demo(){
        await sleep(1000)
        clear()
    }
    function sleep(ms){
        return new Promise(resolve=>setTimeout(resolve,ms));
    }
    const textAdd = document.createElement('div')
    textAdd.textContent = 'Добавление отзыва об автомобиле'
    textAdd.style = 'font-size: 2vw;'
    const head = document.createElement('div')
    head.append(textAdd, close_button)
    head.style = 'display: flex'
    const reviewT = document.createElement('div');
    reviewT.className = 'reviewT'
    reviewT.append(head, username, inp_username, inp_drade, dignity, inp_dignity, flaws, inp_flaws, textReview, inp_textReview, overv, send_button)
    console.log(5)
    return reviewT

}


