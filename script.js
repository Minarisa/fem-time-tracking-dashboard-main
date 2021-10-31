const DAILY = document.getElementById("daily");
const WEEKLY = document.getElementById("weekly");
const MONTHLY = document.getElementById("monthly");

const PREVIOUS_STATS = document.querySelectorAll(".card p:last-child");
const CURRENT_STATS = document.querySelectorAll(".card p:nth-of-type(1)");

let HTML_changer = (stats) => {
    let hour_format;
    let num;

    DAILY.classList.remove("active");
    WEEKLY.classList.remove("active");
    MONTHLY.classList.remove("active");

    if (stats == DAILY) {
        DAILY.className = "active";

        for(i = 0; i < CURRENT_STATS.length; i++) {
            num = DASHBOARD_STATS[i].timeframes.daily.current;
            if (num == 1) {
                hour_format = "hr";
            } else {
                hour_format = "hrs";
            }
            CURRENT_STATS[i].innerHTML = `${num}${hour_format}`;
        }

        for(i = 0; i < PREVIOUS_STATS.length; i++) {
            num = DASHBOARD_STATS[i].timeframes.daily.previous;
            if (num == 1) {
                hour_format = "hr";
            } else {
                hour_format = "hrs";
            }
            PREVIOUS_STATS[i].innerHTML = `Previous day - ${num}${hour_format}`;
        }

    } else if (stats == WEEKLY) {
        WEEKLY.className = "active";

        for(i = 0; i < CURRENT_STATS.length; i++) {
            num = DASHBOARD_STATS[i].timeframes.weekly.current;
            if (num == 1) {
                hour_format = "hr";
            } else {
                hour_format = "hrs";
            }
            CURRENT_STATS[i].innerHTML = `${num}${hour_format}`;
        }

        for (i = 0; i < PREVIOUS_STATS.length; i++) {
            num = DASHBOARD_STATS[i].timeframes.weekly.previous;
            if (num == 1) {
                hour_format = "hr";
            } else {
                hour_format = "hrs";
            }
            PREVIOUS_STATS[i].innerHTML = `Last week - ${num}${hour_format}`;
        }

    } else if (stats == MONTHLY) {
        MONTHLY.classList = "active";

        for(i = 0; i < CURRENT_STATS.length; i++) {
            num = DASHBOARD_STATS[i].timeframes.monthly.current;
            if (num == 1) {
                hour_format = "hr";
            } else {
                hour_format = "hrs";
            }
            CURRENT_STATS[i].innerHTML = `${num}${hour_format}`;
        }

        for (i = 0; i < PREVIOUS_STATS.length; i++) {
            num = DASHBOARD_STATS[i].timeframes.monthly.previous;
            if (num == 1) {
                hour_format = "hr";
            } else {
                hour_format = "hrs";
            }
            PREVIOUS_STATS[i].innerHTML = `Last month - ${num}${hour_format}`;
        }

    } else {
        alert("ERROR OCCURRED, please reload the site.")
    }
}

let button_handler = (param) => {
    let stats;
    if (param == "daily") {
        stats = DAILY;
    } else if (param == "weekly") {
        stats = WEEKLY;
    } else if (param == "monthly") {
        stats = MONTHLY;
    } else {
        alert("ERROR OCCURRED, please reload the site.");
        return;
    }
    HTML_changer(stats);
}


DAILY.addEventListener("click", () => {button_handler("daily")});
WEEKLY.addEventListener("click", () => {button_handler("weekly")});
MONTHLY.addEventListener("click", () => {button_handler("monthly")});


let DASHBOARD_STATS;
let requestUrl = "./data.json";
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = () => {
    DASHBOARD_STATS = request.response;
}