//expected inputs:
//   diffculties: tuplet (checkboxes)
//                quintuplet
//                duplet
//                quadruplet
//   density: (amount of 8th note): scale 1-5
//   patterns: basics 111 222 112 221only
//             advanced 121 212 122 211 added
//             random
//   length : scale 1-5

//   example input: tuplet 
//                  density 5
//                  patterns random
// import { selectedDifficultiesValue, selectedPatternValue, densityValue, lengthValue } from './Input.jsx';
import Input from './Input.jsx';
import { revertValue } from './RevertValue.js';
export function generateMap(data) {

    if (data === undefined) {
    // Handle the case when data is undefined or any required property is missing
    return null;
  }

  var patterns = data.selectedPattern;
  var density = revertValue(data.density);
  var lineCapacity = 0; 
  var mapLength = data.length;

  if(data.selectedPattern === "basics"){
  const dupletBasicPatterns = [110,220,110,220,110,220];
  const tupletBasicPatterns = [1110, 2220,1120,1110, 2220,1120];
  const quadrupletBasicPatterns = [11110, 22220,11110, 22220,11110, 22220];
  const quintupletBasicPatterns = [111110, 222220,111110, 222220,111110, 222220];

  var map = '';
  var chosenDifficulties = [];

  if (data.selectedDifficulties.includes('duplet')) {
    chosenDifficulties.push('duplet');
  }
  if (data.selectedDifficulties.includes('tuplet')) {
    chosenDifficulties.push('tuplet');
  }
  if (data.selectedDifficulties.includes('quintuplet')) {
    chosenDifficulties.push('quintuplet');
  }
  if (data.selectedDifficulties.includes('quadruplet')) {
    chosenDifficulties.push('quadruplet');
  }


  while (mapLength > 0) {
    var randomPattern = '';
    var selectedPattern = Math.random() < density ? 'two' : 'others';

    if (selectedPattern === 'two') {
      randomPattern = Math.random() < 0.5 ? '10' : '20';
      lineCapacity += randomPattern.indexOf(0) + 1;
    }
    if (selectedPattern === 'others') {
      var possiblePatterns = [];

      if (chosenDifficulties.includes('duplet')) {
        Array.prototype.push.apply(possiblePatterns, dupletBasicPatterns);
      }
      
      if (chosenDifficulties.includes('tuplet')) {
        Array.prototype.push.apply(possiblePatterns, tupletBasicPatterns);
      }
      if (chosenDifficulties.includes('quadruplet')) {
        Array.prototype.push.apply(possiblePatterns, quadrupletBasicPatterns);
      }
      if (chosenDifficulties.includes('quintuplet')) {
        Array.prototype.push.apply(possiblePatterns, quintupletBasicPatterns);
      }

      // Select a random pattern from possiblePatterns
      randomPattern = possiblePatterns[Math.floor(Math.random() * possiblePatterns.length)];
      randomPattern = randomPattern.toString();
      lineCapacity += randomPattern.indexOf(0)+1;


    }
    map += randomPattern;



      if (lineCapacity > 16) {
        var mapArray = map.split('');
        mapArray.splice(mapArray.length - (lineCapacity - 16), 0, ',\n');

        map = mapArray.join('');

        lineCapacity = lineCapacity - 16;

        mapLength -= 1;
      }

      if (lineCapacity === 16) {
        map += ',\n';
        lineCapacity = 0;
        mapLength -= 1;
      }

      if (mapLength === 0) {
        for (let i = 0; i <(16 - lineCapacity ); i++){
        map += '0';
      }
      map += ',';
        break;
      }
    }
 return map;

  }






if(data.selectedPattern === "advanced"){
  const dupletAdvancedPatterns = [110,220,110,220,110,220];
  const tupletAdvancedPatterns = [1110, 2220,1120,2210,1210,2120];
  const quadrupletAdvancedPatterns = [11110, 22220,11120,22210,12210,21120];
  const quintupletAdvancedPatterns = [111110, 222220,111120,222210,121120,212210];

  var map = ''
  var chosenDifficulties = [];

  if (data.selectedDifficulties.includes('duplet')) {
    chosenDifficulties.push('duplet');
  }

  if (data.selectedDifficulties.includes('tuplet')) {
    chosenDifficulties.push('tuplet');
  }
  if (data.selectedDifficulties.includes('quintuplet')) {
    chosenDifficulties.push('quintuplet');
  }
  if (data.selectedDifficulties.includes('quadruplet')) {
    chosenDifficulties.push('quadruplet');
  }


  while (mapLength > 0) {
    var randomPattern = '';
    var selectedPattern = Math.random() < density ? 'two' : 'others';

    if (selectedPattern === 'two') {
      randomPattern = Math.random() < 0.5 ? '10' : '20';
      lineCapacity += randomPattern.indexOf(0) + 1;
    }
    if (selectedPattern === 'others') {
      var possiblePatterns = [];

      if (chosenDifficulties.includes('duplet')) {
        Array.prototype.push.apply(possiblePatterns, dupletAdvancedPatterns);
      }

      if (chosenDifficulties.includes('tuplet')) {
        Array.prototype.push.apply(possiblePatterns, tupletAdvancedPatterns);
      }
      if (chosenDifficulties.includes('quadruplet')) {
        Array.prototype.push.apply(possiblePatterns, quadrupletAdvancedPatterns);
      }
      if (chosenDifficulties.includes('quintuplet')) {
        Array.prototype.push.apply(possiblePatterns, quintupletAdvancedPatterns);
      }

      // Select a random pattern from possiblePatterns
      randomPattern = possiblePatterns[Math.floor(Math.random() * possiblePatterns.length)];
      randomPattern = randomPattern.toString();
      lineCapacity += randomPattern.indexOf(0)+1;


    }
    map += randomPattern;



      if (lineCapacity > 16) {
        var mapArray = map.split('');
        mapArray.splice(mapArray.length - (lineCapacity - 16), 0, ',\n');

        map = mapArray.join('');

        lineCapacity = lineCapacity - 16;

        mapLength -= 1;
      }

      if (lineCapacity === 16) {
        map += ',\n';
        lineCapacity = 0;
        mapLength -= 1;
      }

      if (mapLength === 0) {
        for (let i = 0; i <(16 - lineCapacity ); i++){
        map += '0';
      }
      map += ',';
        break;
      }
    }
 return map;

  }

if(data.selectedPattern === "random"){
  const dupletRandomPatterns = [110,220,120,210,110,220,120,210,110,220,120,210,110,220,120,210,110,220,120,210,110,220,120,210,110,220,120,210,110,220,120,210];
  const tupletRandomPatterns = [1110, 2220,1120,2210,1210,2120,1220,2110,1110, 2220,1120,2210,1210,2120,1220,2110,1110, 2220,1120,2210,1210,2120,1220,2110,1110, 2220,1120,2210,1210,2120,1220,2110];
  const quadrupletRandomPatterns = [11110,11120,11210,11220,12110,12120,12210,12220,21110,21120,21210,21220,22110,22120,22210,22220,11110,11120,11210,11220,12110,12120,12210,12220,21110,21120,21210,21220,22110,22120,22210,22220];
  const quintupletRandomPatterns = [111110,111120,111210,111220,112110,112120,112210,112220,121110,121120,121210,121220,122110,122120,122210,122220,211110,211120,211210,211220,212110,212120,212210,212220,221110,221120,221210,221220,222110,222120,222210,222220,];

  var map = ''
  var chosenDifficulties = [];

  if (data.selectedDifficulties.includes('duplet')) {
    chosenDifficulties.push('duplet');
  }

  if (data.selectedDifficulties.includes('tuplet')) {
    chosenDifficulties.push('tuplet');
  }
  if (data.selectedDifficulties.includes('quintuplet')) {
    chosenDifficulties.push('quintuplet');
  }
  if (data.selectedDifficulties.includes('quadruplet')) {
    chosenDifficulties.push('quadruplet');
  }


  while (mapLength > 0) {
    var randomPattern = '';
    var selectedPattern = Math.random() < density ? 'two' : 'others';

    if (selectedPattern === 'two') {
      randomPattern = Math.random() < 0.5 ? '10' : '20';
      lineCapacity += randomPattern.indexOf(0) + 1;
    }
    if (selectedPattern === 'others') {
      var possiblePatterns = [];

      if (chosenDifficulties.includes('duplet')) {
        Array.prototype.push.apply(possiblePatterns, dupletRandomPatterns);
      }

      if (chosenDifficulties.includes('tuplet')) {
        Array.prototype.push.apply(possiblePatterns, tupletRandomPatterns);
      }
      if (chosenDifficulties.includes('quadruplet')) {
        Array.prototype.push.apply(possiblePatterns, quadrupletRandomPatterns);
      }
      if (chosenDifficulties.includes('quintuplet')) {
        Array.prototype.push.apply(possiblePatterns, quintupletRandomPatterns);
      }

      // Select a random pattern from possiblePatterns
      randomPattern = possiblePatterns[Math.floor(Math.random() * possiblePatterns.length)];
      randomPattern = randomPattern.toString();
      lineCapacity += randomPattern.indexOf(0)+1;


    }
    map += randomPattern;



      if (lineCapacity > 16) {
        var mapArray = map.split('');
        mapArray.splice(mapArray.length - (lineCapacity - 16), 0, ',\n');

        map = mapArray.join('');

        lineCapacity = lineCapacity - 16;

        mapLength -= 1;
      }

      if (lineCapacity === 16) {
        map += ',\n';
        lineCapacity = 0;
        mapLength -= 1;
      }

      if (mapLength === 0) {
        for (let i = 0; i <(16 - lineCapacity ); i++){
        map += '0';
      }
      map += ',';
        break;
      }
    }
 return map;

  }








     
}



export default generateMap();
