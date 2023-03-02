
numb = prompt ("Donne moi un chiffre, espèce de Valentin :")
var totalNumberofRows = Number(`${numb}`)
console.log(numb)

function generatePyramid() {
  var output = '';
  var out = '';
  for (var i = 1; i <= totalNumberofRows; i++) {
      for (var j = 1; j <= i; j++) {
        output += '#' + '  ';
      }

      console.log(output + out);
      output = '';
  }
}

generatePyramid();

