const countries=document.getElementById('countries')
function createContry(str){
    const country=document.createElement('button')
    country.textContent=str;
    country.className='button'
    country.onclick=function (){
        //document.location.href="templates/countryPage.html"
        $.get("http://localhost:8881/country",function (data){
            localStorage.setItem('country',str);
            const link=document.createElement('a')
            link.href="/country"
            link.click()
        })


    }
    countries.append(country);
}

createContry("ЕВРОПА");
createContry("АМЕРИКА");
createContry("АЗИЯ");


