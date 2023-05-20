const countryName = document.getElementById('country')
const name = document.createElement('name')
name.textContent = (localStorage.getItem('country'));
name.className = 'div'
name.onclick = function () {
    document.location.href = "templates/countryPage.html"
}
countryName.append(name)
const marks=document.getElementById('marksCountry')
const country=(localStorage.getItem('country'));


function createMarks(str){
    const mark=document.createElement('img')
    mark.src=str
    mark.className='mark'
    mark.onclick=function (){
        $.get("http://localhost:8881/country",function (){
            localStorage.setItem('mark',str)
            const link=document.createElement('a')
            link.href="/mark"
            link.click()
        })
    }
    marks.append(mark)
}
switch (country) {
    case "ЕВРОПА": {

        createMarks("../marks/Rus/LadaRus.png")
        createMarks("../marks/Eur/BmwEur.png")
        createMarks("../marks/Eur/MercedesEur.png")
        createMarks("../marks/Eur/AudiEur.png")
        createMarks("../marks/Eur/SkodaEur.png")
        createMarks("../marks/Eur/PeugheotEur.png")
        createMarks("../marks/Eur/CitroenEur.png")
        createMarks("../marks/Eur/RenoEur.png")

        break;

    }
    case "АМЕРИКА": {
        createMarks("../marks/Usa/FordUsa.png")
        createMarks("../marks/Usa/ChevroletUsa.png")
        createMarks("../marks/Usa/CadillacUsa.png")
        createMarks("../marks/Usa/LincolnUsa.png")
        createMarks("../marks/Usa/TeslaUsa.png")
       break;
    }
    case "АЗИЯ": {
        createMarks("../marks/Sk/HyundaiSk.png")
        createMarks("../marks/Sk/KiaSk.png")
        createMarks("../marks/Jp/ToyotaJp.png")
        createMarks("../marks/Jp/HondaJp.png")
        createMarks("../marks/Jp/MazdaJp.png")
        createMarks("../marks/Other/GellyOther.png")

        break;
    }

    default:{
        break;
    }
}



