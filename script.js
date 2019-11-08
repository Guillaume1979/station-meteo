// 1 : Evenement sur click du menu "Dernière mesure"
document.getElementById("lastMesureMenu").addEventListener("click", function (event) {
    videLaPage();
    const displaySection = document.createElement("section");
    displaySection.id = "insertedSection";
    document.getElementById("addSection").appendChild(displaySection);

    //-------------Récupération des données de la DERNIERE MESURE sur le raspberry avec une API---------------//
    var lastMeasure;
    var date;
    var jour;
    var mois;
    var annee;

    const request = new XMLHttpRequest();


    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `http://192.168.1.197:8080/last-measure`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)
            lastMeasure = jsonResult;
            date = new Date(lastMeasure.measureDate);
            jour = date.getDate();
            mois = date.getMonth() + 1; // on ajoute 1 car l'échelle de cette fonction va de 0 à 11
            annee = date.getFullYear();
            //---- Création de l'élément div avec les données récupérées
            // important de placer ce code ici afin d'être sûr d'avoir les données avant de continuer
            const newDiv = document.createElement("div");
            var code = `<h1>Dernière mesure du ${jour}-${mois}-${annee}</h1>`;
            code += `<p>Température : ${lastMeasure.temperature}°C</p>`;
            code += `<p>Humidité : ${lastMeasure.humidity}% hum</p>`;
            code += `<p>Pression : ${lastMeasure.pressure} hPa</p>`;
            newDiv.innerHTML = code;
            document.getElementById("insertedSection").appendChild(newDiv);

        } else {
            console.log('Erreur ...')
        }
    }
    // Send request
    request.send();
})


// 2 : Evenement sur click du menu "Top mesures"
document.getElementById("topMesureMenu").addEventListener("click", function (event) {
    videLaPage();
    const displaySection = document.createElement("section");
    displaySection.id = "insertedSection";
    document.getElementById("addSection").appendChild(displaySection);

    //-------------Récupération du TOP TEMPERATURE sur le raspberry avec une API---------------//
    var topTemperature;
    var dateTopTemp;
    var jourTopTemp;
    var moisToptemp;
    var anneeToptemp;

    const newDiv = document.createElement("div");
    const newDiv2 = document.createElement("div");
    const newDiv3 = document.createElement("div");

    const requestTopTemperature = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    requestTopTemperature.open('GET', `http://192.168.1.197:8080/top-measure/temperature`, true);

    requestTopTemperature.onload = function () {
        if (requestTopTemperature.status >= 200 && requestTopTemperature.status < 400) {
            const jsonResult = JSON.parse(this.response)
            topTemperature = jsonResult;
            dateTopTemp = new Date(topTemperature.measureDate);
            jourTopTemp = dateTopTemp.getDate();
            moisToptemp = dateTopTemp.getMonth() + 1; // on ajoute 1 car l'échelle de cette fonction va de 0 à 11
            anneeToptemp = dateTopTemp.getFullYear();

            // const newDiv = document.createElement("div");
            var code = `<h1>Top température du ${jourTopTemp}-${moisToptemp}-${anneeToptemp}</h1>`;
            code += `<p>Température : ${topTemperature.temperature}°C</p>`;
            code += `<p>Humidité : ${topTemperature.humidity}% hum</p>`;
            code += `<p>Pression : ${topTemperature.pressure} hPa</p>`;
            newDiv.innerHTML = code;
            // document.getElementById("insertedSection").appendChild(newDiv);

        } else {
            console.log('Erreur ...')
        }

    }

    // Send request
    requestTopTemperature.send();

    //-------------Récupération du TOP HUMIDITE sur le raspberry avec une API---------------//
    var topHumidity;
    var dateTopHum;
    var jourTopHum;
    var moisTopHum;
    var anneeTopHum;


    const requestTopHumidity = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    requestTopHumidity.open('GET', `http://192.168.1.197:8080/top-measure/humidity`, true);

    requestTopHumidity.onload = function () {
        if (requestTopHumidity.status >= 200 && requestTopHumidity.status < 400) {
            const jsonResult = JSON.parse(this.response)
            topHumidity = jsonResult;
            dateTopHum = new Date(topHumidity.measureDate);
            jourTopHum = dateTopHum.getDate();
            moisTopHum = dateTopHum.getMonth() + 1; // on ajoute 1 car l'échelle de cette fonction va de 0 à 11
            anneeTopHum = dateTopHum.getFullYear();

            // const newDiv2 = document.createElement("div");
            var code = `<h1>Top Humidité du ${jourTopHum}-${moisTopHum}-${anneeTopHum}</h1>`;
            code += `<p>Température : ${topHumidity.temperature}°C</p>`;
            code += `<p>Humidité : ${topHumidity.humidity}% hum</p>`;
            code += `<p>Pression : ${topHumidity.pressure} hPa</p>`;
            newDiv2.innerHTML = code;
            // document.getElementById("insertedSection").appendChild(newDiv2);

        } else {
            console.log('Erreur ...')
        }

    }

    // Send request
    requestTopHumidity.send();

    //-------------Récupération du TOP PRESSION sur le raspberry avec une API---------------//
    var topPression;
    var dateTopPress;
    var jourTopPress;
    var moisTopPress;
    var anneeTopPress;


    const requestTopPression = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    requestTopPression.open('GET', `http://192.168.1.197:8080/top-measure/pressure`, true);

    requestTopPression.onload = function () {
        if (requestTopPression.status >= 200 && requestTopPression.status < 400) {
            const jsonResult = JSON.parse(this.response)
            topPression = jsonResult;
            dateTopPress = new Date(topPression.measureDate);
            jourTopPress = dateTopPress.getDate();
            moisTopPress = dateTopPress.getMonth() + 1; // on ajoute 1 car l'échelle de cette fonction va de 0 à 11
            anneeTopPress = dateTopPress.getFullYear();

            // const newDiv3 = document.createElement("div");
            var code = `<h1>Top pression du ${jourTopPress}-${moisTopPress}-${anneeTopPress}</h1>`;
            code += `<p>Température : ${topPression.temperature}°C</p>`;
            code += `<p>Humidité : ${topPression.humidity}% hum</p>`;
            code += `<p>Pression : ${topPression.pressure} hPa</p>`;
            newDiv3.innerHTML = code;
            // document.getElementById("insertedSection").appendChild(newDiv3);

        } else {
            console.log('Erreur ...')
        }

    }

    // Send request
    requestTopPression.send();


    document.getElementById("insertedSection").appendChild(newDiv);
    document.getElementById("insertedSection").appendChild(newDiv2);
    document.getElementById("insertedSection").appendChild(newDiv3);

})


//Vider la page -> utiliser quand on veut afficher une nouvelle page
function videLaPage() {
    document.getElementById("insertedSection").remove();
}


// 3 : Evenement sur click du menu "Tableau des mesures"

document.getElementById("tableauDesMesuresMenu").addEventListener("click", function (event) {
    videLaPage();
    const displaySection = document.createElement("section");
    displaySection.id = "insertedSection";
    document.getElementById("addSection").appendChild(displaySection);

    const tableau = document.createElement("table");
    tableau.id = "tableau";
    document.getElementById("insertedSection").appendChild(tableau);


    const requestTableauMesures = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    requestTableauMesures.open('GET', `http://192.168.1.197:8080/measure/date?startDate=2019-11-06&endDate=2019-11-08`, true);

    requestTableauMesures.onload = function () {
        if (requestTableauMesures.status >= 200 && requestTableauMesures.status < 400) {
            const jsonResult = JSON.parse(this.response)
            // tableauDeMesures = jsonResult;
            // dateTopPress = new Date(topTemperature.measureDate);
            // jourTopPress = dateTopPress.getDate();
            // moisTopPress = dateTopPress.getMonth() + 1; // on ajoute 1 car l'échelle de cette fonction va de 0 à 11
            // anneeTopPress = dateTopPress.getFullYear();
            // let temp = tableauDeMesures.temperature(;

            //console.log(tableauDeMesures[0].temperature);
            const newThead = document.createElement("thead");
            let enteteTableau = "<td>Date</td>";
            enteteTableau += "<td>Température</td>";
            enteteTableau += "<td>Humidité</td>";
            enteteTableau += "<td>Pression</td>";
            newThead.innerHTML = enteteTableau;
            document.getElementById("tableau").appendChild(newThead);

            const newTBody = document.createElement("tbody");
            newTBody.id = "tbody";
            document.getElementById("tableau").appendChild(newTBody);

            for (let index of jsonResult) {
                const newTr = document.createElement("tr");
                
                //Formatage de la date pour utilisation dans le tableau
                let date = new Date(index.measureDate);
                let jour = date.getDate();
                let mois = date.getMonth()+1;
                let annee = date.getFullYear();
                let heure = date.getHours();
                let minutes = date.getMinutes();

                //Distribution des données dans les cases du tableau
                var code = `<td>Le ${jour}-${mois}-${annee} à ${heure}h${minutes}</td>`;
                code += `<td>${index.temperature}°C</td>`;
                code += `<td>${index.humidity}hum</td>`;
                code += `<td> ${index.pressure} hPa</td>`;
                newTr.innerHTML = code;

                document.getElementById("tbody").appendChild(newTr);
            }

        } else {
            console.log('Erreur ...')
        }
    }

    // Send request
    requestTableauMesures.send();








})