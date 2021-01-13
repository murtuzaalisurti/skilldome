document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#drop-down-country").onchange = () => {
        // const country_currency_select = document.querySelector("#drop-down-country").value;
        // var url = new URL("https://api.exchangeratesapi.io/latest?base=USD");
        // var search_params = url.searchParams;
        // let Base = search_params.set('base', country_currency_select);
        // url.search = search_params.toString();
        // var new_url = url.toString();
        // console.log(new_url);
        fetch("https://api.exchangeratesapi.io/latest?base=USD")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                var selectelement = document.getElementById("drop-down-country");
                var selectedvalue = selectelement.options[selectelement.selectedIndex].value;
                const rate = data.rates[selectedvalue];
                console.log(rate);
                if (selectedvalue == "selection") {
                    document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                    document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                }
                else {
                    if (rate !== undefined) {
                        // var convertfrom = document.getElementById("plan-rate").value;
                        var convertedcurrent = 26 * rate;
                        document.querySelector("#plan-rate").innerHTML = `${convertedcurrent.toFixed(2)} ${selectedvalue}`;
                        var convertedprevious = 70 * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `${convertedprevious.toFixed(2)} ${selectedvalue}`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                    }
                }
            })
    };
});