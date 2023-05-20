
function toCountry(str){
        $.get("http://localhost:8881/country",function (data){
            localStorage.setItem('country',str)
            const link=document.createElement('a')
            link.href="/country"
            link.click()
        })
}
function toHome(){
    $.get("http://localhost:8881/home",function (data){
        const link=document.createElement('a')
        link.href="/home"
        link.click()
    })
}

const input=document.getElementById("search")
input.addEventListener("keyup",function (event){
    if(event.keyCode===13){
        const link=document.createElement('a')
        localStorage.setItem('search',document.getElementById("search").value)
        link.href="/toSearch"
        link.click()
    }
})