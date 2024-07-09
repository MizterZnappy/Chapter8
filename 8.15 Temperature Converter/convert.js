window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   document.getElementById("convertButton").addEventListener("click", function() {
      const cInput = document.getElementById("cInput").value;
      const fInput = document.getElementById("fInput").value;
      const errorMessage = document.getElementById("errorMessage");

      if (cInput !== "") {
         const celsius = parseFloat(cInput);
         if (isNaN(celsius)) {
            errorMessage.textContent = `${cInput} is not a number`;
         } else {
            const fahrenheit = convertCtoF(celsius);
            document.getElementById("fInput").value = fahrenheit;
            errorMessage.textContent = "";
            updateImage(fahrenheit);
         }
      } else if (fInput !== "") {
         const fahrenheit = parseFloat(fInput);
         if (isNaN(fahrenheit)) {
            errorMessage.textContent = `${fInput} is not a number`;
         } else {
            const celsius = convertFtoC(fahrenheit);
            document.getElementById("cInput").value = celsius;
            errorMessage.textContent = "";
            updateImage(fahrenheit);
         }
      }
   });

   document.getElementById("cInput").addEventListener("input", function() {
      document.getElementById("fInput").value = "";
   });

   document.getElementById("fInput").addEventListener("input", function() {
      document.getElementById("cInput").value = "";
   });
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
}

function updateImage(fahrenheit) {
   const weatherImage = document.getElementById("weatherImage");
   if (fahrenheit < 32) {
      weatherImage.src = "images/cold.png";
   } else if (fahrenheit >= 32 && fahrenheit <= 50) {
      weatherImage.src = "images/cool.png";
   } else if (fahrenheit > 50) {
      weatherImage.src = "images/warm.png";
   }
}