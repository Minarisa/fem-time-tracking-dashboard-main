const WORK_CARD = document.getElementById("work");
const WORK_CURRENT_TTLE = WORK_CARD.getElementsByClassName("current-stat__title")[0];
const WORK_CURRENT_TIME = WORK_CARD.getElementsByClassName("current-stat__time")[0];

const PLAY_CARD = document.getElementById("play");
const PLAY_CURRENT_TTLE = PLAY_CARD.getElementsByClassName("current-stat__title")[0];
const PLAY_CURRENT_TIME = PLAY_CARD.getElementsByClassName("current-stat__time")[0];

const STUDY_CARD = document.getElementById("study");
const STUDY_CURRENT_TTLE = STUDY_CARD.getElementsByClassName("current-stat__title")[0];
const STUDY_CURRENT_TIME = STUDY_CARD.getElementsByClassName("current-stat__time")[0];

const EXERCISE_CARD = document.getElementById("exercise");
const EXERCISE_CURRENT_TTLE = EXERCISE_CARD.getElementsByClassName("current-stat__title")[0];
const EXERCISE_CURRENT_TIME = EXERCISE_CARD.getElementsByClassName("current-stat__time")[0];

const SOCIAL_CARD = document.getElementById("social");
const SOCIAL_CURRENT_TTLE = SOCIAL_CARD.getElementsByClassName("current-stat__title")[0];
const SOCIAL_CURRENT_TIME = SOCIAL_CARD.getElementsByClassName("current-stat__time")[0];

const SELF_CARE_CARD = document.getElementById("self-care");
const SELF_CARE_CURRENT_TTLE = SELF_CARE_CARD.getElementsByClassName("current-stat__title")[0];
const SELF_CARE_CURRENT_TIME = SELF_CARE_CARD.getElementsByClassName("current-stat__time")[0];








let requestUrl = "./data.json";
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = () => {
    const DASHBOARD_STATS = request.response;
    console.log(DASHBOARD_STATS); /*test*/
}