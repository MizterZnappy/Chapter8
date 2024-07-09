window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   document.getElementById("convertButton").addEventListener("click", function () {
      const cInput = document.getElementById("cInput").value;
      const fInput = document.getElementById("fInput").value;

      if (cInput !== "") {
         const celsius = parseFloat(cInput);
         const fahrenheit = convertCtoF(celsius);
         document.getElementById("fInput").value = fahrenheit;
      } else if (fInput !== "") {
         const fahrenheit = parseFloat(fInput);
         const celsius = convertFtoC(fahrenheit);
         document.getElementById("cInput").value = celsius;
      }
   });

   document.getElementById("cInput").addEventListener("input", function () {
      document.getElementById("fInput").value = "";
   });

   document.getElementById("fInput").addEventListener("input", function () {
      document.getElementById("cInput").value = "";
   });
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
}