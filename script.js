function loadData() {
    let input = document.getElementById('input').value;
    fetch(`https://restcountries.eu/rest/v2/name/${input}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('countryName').innerText ='Country :'+ data[0].name;
            document.getElementById('capital').innerText= 'Capital :'+ data[0].capital;
            
            const alpha3code = data[0].flag;
            document.getElementById('flag').src =  alpha3code;

            document.getElementById('officialName').innerText = "OfficialName :" + data[0].altSpellings[1];
            document.getElementById('area').innerText = "Area :" + data[0].area;
            document.getElementById('lang').innerText = "Language :" + data[0].languages[0].name;
            document.getElementById('population').innerText = "Population :" + data[0].population;
            document.getElementById('tk').innerText = "Currencies :" + data[0].currencies[0].name + "(" + data[0].currencies[0].symbol + ")";
            document.getElementById('timezone').innerText = "Timezone :" + data[0].timezones[0];
            document.getElementById('region').innerText = "Region :" + data[0].region;

        })
}