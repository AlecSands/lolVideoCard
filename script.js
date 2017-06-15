console.log("javascript loaded");
var header = document.querySelector('header');
var section = document.querySelector('section');

//var requestURL2 = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?champListData=spells&dataById=true&api_key=RGAPI-1f6ceaad-7c6d-4b9d-8624-c25b883afa41';
var requestURL2 = 'https://alecsands.github.io/lolVideoCard/champions.json';
var request2 = new XMLHttpRequest();
var champList;

request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();
request2.onload = function() {
  var allChamps = request2.response;
  populateHeader(allChamps);
  //var championID = allChamps['champions'][0]['id'];
  console.log('success2');
  console.log(allChamps);
  console.log(allChamps[0]);
  console.log(allChamps['type']);
  console.log(allChamps['data'][1]);
  console.log(allChamps['data'][1]['key']);
  console.log(allChamps['data'][498]['spells'][0]['name']);
  console.log(allChamps['data'][498]['spells'][0]['description']);
  champList = allChamps;
  return champList;
};

var championNumber = getRandomArbitrary(0, 136);
//var championID = allChamps['champions'][0][championNumber]['id'];

//var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
//var requestURL = 'https://alecsands.github.io/lolFlashcard/data.json';
//var requestURL = 'https://alecsands.github.io/lolFlashcard/datalol.json';
//var requestURL = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?champListData=spells&dataById=true&api_key=RGAPI-1f6ceaad-7c6d-4b9d-8624-c25b883afa41';
//var request = new XMLHttpRequest();
//var championSelector = "'" + getRandomArbitrary(0, 136) + "'";
var spellSelector = getRandomArbitrary(0, 4);
var championSelector = championNumber.toString();
//var spellSelector = 0;

//request.open('GET', requestURL);
//request.responseType = 'json';
//request.send();
//request.onload = function() {
//  var superHeroes = request.response;
//  populateHeader(superHeroes);
//  console.log('success1');
//};

function clearHeader() {
  var spellNamePrev = document.querySelector('h1');
  var championNamePrev = document.querySelector('h4');
  var spellDescriptionPrev = document.querySelector('p');
  var videoPrev = document.querySelector('video');
  console.log(spellNamePrev);
  spellNamePrev.remove();
  championNamePrev.remove();
  spellDescriptionPrev.remove();
  videoPrev.remove();
}

/*
document.getElementById('videos').addEventListener('change',function(e){
    var canvasElements=document.getElementById('thumbnails').getElementsByTagName('canvas');
    for (var i = canvasElements.length - 1; i >= 0; i--) {
        canvasElements[i].parentNode.removeChild(canvasElements[i]);
        console.log('removed canvas');
    }
},true);
*/

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  //myH1.textContent = jsonObj['data'][championSelector]['spells'][spellSelector]['key'];
  var obj_keys = Object.keys(jsonObj['data']);
  var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
  myH1.textContent = jsonObj['data'][ran_key]['spells'][spellSelector]['name'];
  header.appendChild(myH1);
  console.log(jsonObj['data'][ran_key]['id']);
  var ranId = jsonObj['data'][ran_key]['id'];
  function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
  };
  ranId = FormatNumberLength(ranId, 4);
  console.log(ranId);
  function converter(spellNumber) {
    if (spellNumber == 0) {
      var s = 'Q';
      return s;
    } else if (spellNumber == 1) {
      var s = 'W';
      return s;
    } else if (spellNumber == 2) {
      var s = 'E';
      return s;
    } else if (spellNumber == 3) {
      var s = 'R';
      return s;
    } else {
      console.log(error);
    }
  }
  var spellKey = converter(spellSelector);
  var myVideo = document.createElement('video');
  myVideo.src = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/' + ranId + '/ability_' + ranId + '_' + spellKey + '1.webm';
  //myVideo.src = 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_R1.webm';
  myVideo.controls = true;
  //myVideo.autoPlay = true;
  //myVideo.type = 'video/webm';
  header.appendChild(myVideo);
  var displaySpellDescription = document.getElementById('showSpellDescription');
  displaySpellDescription.onclick = function() {
    var myPara = document.createElement('p');
    var myH4 = document.createElement('h4');
    myH4.textContent = jsonObj['data'][ran_key]['key'];
    header.appendChild(myH4);
    myPara.textContent = jsonObj['data'][ran_key]['spells'][spellSelector]['description'];
    header.appendChild(myPara);
  };

  //https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0240/ability_0240_R1.webm

  //var myPara = document.createElement('p');
  ////myPara.textContent = jsonObj['data'][championSelector]['spells'][spellSelector]['description'];
  //myPara.textContent = jsonObj['data'][ran_key]['spells'][spellSelector]['description'];
  //header.appendChild(myPara);
}

//console.log(champList['data'][3]['spells'][0]['description']);
console.log(champList);

var nextSpellDisplay = document.getElementById('nextSpell');

nextSpellDisplay.onclick = function() {
  var allChamps = request2.response;
  clearHeader();
  populateHeader(allChamps);
};

/*
function pickRandomQuestion(){
        var obj_keys = Object.keys(jsonObj['data']);
        var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
}

function pickRandomQuestion(){
        var obj_keys = Object.keys(window.questionnaire);
        var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
        window.selectedquestion = window.questionnaire[ran_key];
        console.log(window.selectedquestion);
        console.log(window.questionnaire);
}
*/

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(championSelector);
console.log(spellSelector);
