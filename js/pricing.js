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
                const procurrentrate = 25.99;
                const propreviousrate = 69.99;
                const premiumcurrentrate = 58.99;
                const premiumpreviousrate = 119.99;
                if (selectedvalue == "selection") {
                    document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                    document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                    document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                    document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                }
                else if (selectedvalue == "AUD") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#36;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#36;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#36;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#36;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "BGN") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#1083;&#1074;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#1083;&#1074;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#1083;&#1074;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#1083;&#1074;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "CAD") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#36;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#36;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#36;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#36;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "BRL") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#82;&#36;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#82;&#36;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#82;&#36;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#82;&#36;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "CNY") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#165;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#165;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#165;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#165;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "CHF") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#67;&#72;&#70;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#67;&#72;&#70;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#67;&#72;&#70;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#67;&#72;&#70;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "DKK") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#107;&#114;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#107;&#114;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#107;&#114;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#107;&#114;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "CZK") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#75;&#269;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#75;&#269;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#75;&#269;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#75;&#269;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "GBP") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#163;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#163;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#163;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#163;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "EUR") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#8364;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#8364;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#8364;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#8364;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "HRK") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#107;&#110;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#107;&#110;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#107;&#110;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#107;&#110;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "HKD") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#36;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#36;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#36;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#36;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "IDR") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#82;&#112;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#82;&#112;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#82;&#112;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#82;&#112;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "HUF") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#70;&#116;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#70;&#116;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#70;&#116;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#70;&#116;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "INR") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#8377;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#8377;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#8377;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#8377;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "ILS") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#8362;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#8362;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#8362;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#8362;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "JPY") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#165;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#165;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#165;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#165;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "ISK") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#107;&#114;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#107;&#114;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#107;&#114;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#107;&#114;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "MXN") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#36;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#36;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#36;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#36;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "KRW") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#8361;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#8361;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#8361;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#8361;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "NOK") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#107;&#114;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#107;&#114;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#107;&#114;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#107;&#114;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "MYR") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#82;&#77;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#82;&#77;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#82;&#77;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#82;&#77;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "PHP") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#8369;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#8369;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#8369;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#8369;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "NZD") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#36;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#36;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#36;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#36;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "RON") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#108;&#101;&#105;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#108;&#101;&#105;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#108;&#101;&#105;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#108;&#101;&#105;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "PLN") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#122;&#322;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#122;&#322;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#122;&#322;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#122;&#322;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "SEK") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#107;&#114;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#107;&#114;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#107;&#114;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#107;&#114;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "RUB") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#8381;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#8381;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#8381;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#8381;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "THB") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#3647;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#3647;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#3647;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#3647;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "SGD") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#36;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#36;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#36;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#36;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "USD") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#36;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#36;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#36;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#36;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "TRY") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#8378;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#8378;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#8378;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#8378;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else if (selectedvalue == "ZAR") {
                    if (rate !== undefined) {
                        var convertedcurrent = procurrentrate * rate;
                        document.querySelector("#plan-rate").innerHTML = `&#82;${convertedcurrent.toFixed(2)}/mo`;
                        var convertedprevious = propreviousrate * rate;
                        document.querySelector("#plan-rate-previous").innerHTML = `&#82;${convertedprevious.toFixed(2)}/mo`;
                        var convertedpreviouspremium = premiumpreviousrate * rate;
                        document.querySelector("#premium-plan-rate-previous").innerHTML = `&#82;${convertedpreviouspremium.toFixed(2)}/mo`;
                        var convertedcurrentpremium = premiumcurrentrate * rate;
                        document.querySelector("#premium-plan-rate").innerHTML = `&#82;${convertedcurrentpremium.toFixed(2)}/mo`;
                    }
                    else {
                        document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                        document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                    }
                }
                else {
                    document.querySelector("#plan-rate").innerHTML = "Invalid Currency";
                    document.querySelector("#plan-rate-previous").innerHTML = "Invalid Currency";
                    document.querySelector("#premium-plan-rate").innerHTML = "Invalid Currency";
                    document.querySelector("#premium-plan-rate-previous").innerHTML = "Invalid Currency";
                }
            })
    };
});