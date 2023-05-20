const markName = document.getElementById('markName')
const mark = document.createElement('img')
mark.src = localStorage.getItem('mark')
markName.append(mark)

$.get("http://localhost:8881/listAuto?mark=" + localStorage.getItem('mark'), function (data) {

    const models = document.getElementById('content-item')

    for (let item in Object.keys(data)) {
        const temp = document.createElement('div')
        temp.className="chose-item"
        const model = document.createElement('div')
        model.className = 'content-item-image'
        const imag = document.createElement('a')
        const image = document.createElement('img')
        image.src = data[item].image
        image.alt = "Упс, подключитесь, пожалуйста, к интернету"
        imag.append(image)
        const name = document.createElement('div')
        name.className = "content-item-title"
        name.textContent = "Модель: " + data[item].model
        model.append(imag)
        const generation = document.createElement('div')
        generation.textContent = "Поколение: " + data[item].generation
        generation.className = 'content-item-generation'
        const description = document.createElement('div')
        description.textContent = 'Описание: ' + data[item].description
        description.className = 'content-item-description'
        name.append(generation, description)
        temp.append(model,name)
        temp.onclick=function (){
            $.get("http://localhost:8881/model",function (){
                localStorage.setItem('model',data[item].model)
                const link=document.createElement('a')
                link.href="/model"
                link.click()
            })
        }
        models.append(temp)
    }
})







