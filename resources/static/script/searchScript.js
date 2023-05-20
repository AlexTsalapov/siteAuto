const searchName = document.getElementById('searchName')
const search = document.createElement('div')
search.textContent ='Поиск по слову: '+ localStorage.getItem('search')
searchName.append(search)

$.get("http://localhost:8881/search?search=" + localStorage.getItem('search'), function (data) {

    const models = document.getElementById('content-item')
    for (let item in Object.keys(data)) {
        const temp = document.createElement('div')
        temp.style="display: flex;"
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







