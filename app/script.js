console.log("JS Up and running");

var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

slider.addEventListener('input', function(){sliderChange(this.value)});

function sliderChange(val) {
        slider.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%) ' + val + '%, hsl(223, 50%, 87%) ' + val + '%)';
}