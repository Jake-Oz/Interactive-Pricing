var slider = document.getElementById("myRange");
var outputVolumes = document.getElementById("volume");
var cash = document.getElementById("cash");
var selector = document.getElementById("switch");

var pricing = {"10k": 8, "50k": 12, "100k": 16, "500k": 24, "1M": 36};

var discount = false;



slider.addEventListener('input', function(){sliderChange(this.value)});
selector.addEventListener('input', function(){
    discount = !discount;
    sliderChange(slider.value);
});

function sliderChange(val) {
        var discountFactor = 1;  //25% discount
        if(discount){
            discountFactor = 0.75;
        }
        slider.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%) ' + val + '%, hsl(223, 50%, 87%) ' + val + '%)';
        if(val < 20){
            outputVolumes.innerText = "10K pageviews";
            cash.innerText = "$" + pricing["10k"] * discountFactor + ".00";
        } else if (val <40 && val >= 20){
            outputVolumes.innerText = "50K pageviews";
            cash.innerText = "$" + pricing["50k"] * discountFactor + ".00";
        } else if (val <60 && val >= 40){
            outputVolumes.innerText = "100K pageviews";
            cash.innerText = "$" + pricing["100k"] * discountFactor + ".00";;
        }else if (val <80 && val >= 60){
            outputVolumes.innerText = "500K pageviews";
            cash.innerText = "$" + pricing["500k"] * discountFactor + ".00";
        }else if (val <=1000 && val >= 80){
            outputVolumes.innerText = "1M pageviews";
            cash.innerText = "$" + pricing["1M"] * discountFactor + ".00";
        }
    }