function changeNormal(type) {
    var position = [20, 100, 170, 200, 340, 400, 580]
    console.log(type)
    switch (type) {
        case "0":
            position = [20, 100, 170, 200, 340, 400, 580]
            break;
        case "1":
            position = [300, 317, 332, 339, 369, 382, 400]
            break;
        case "2":
            position = [130, 147, 256, 273, 357, 393, 441]
            break;
        default:
            break;
    }

    for (let i = 0; i < 7; i++) {
        d3.select("#circle" + i).transition()
            .duration(1000)
            .ease(d3.easeLinear)
            .attr("cx", position[i]);

           
    }

}
function changeKmeans(type) {
  
    console.log("here");
    console.log(type)
    switch (type) {
        case "0":
            for (let i = 1; i < 22; i++) {
                d3.select("#circ" + i).transition()
                    .duration(1000)
                    .style("fill", "black");
            }

            break;
        case "1":
            console.log("1")
            for (let i = 1; i <21; i++) {
                d3.select("#circ" + i).transition()
                    .duration(1000)
                    .style("fill", "blue");
            }
         
                d3.select("#circ21").transition()
                    .duration(1000)
                    .style("fill", "red");
            

            break;
        case "2":
            for (let i = 1; i < 10; i++) {
                d3.select("#circ" + i).transition()
                    .duration(1000)
                    .style("fill", "blue");
            }
            for (let i = 10; i < 21; i++) {
                d3.select("#circ" + i).transition()
                    .duration(1000)
                    .style("fill", "red");
            }
            d3.select("#circ21").transition()
                .duration(1000)
                .style("fill", "lightgray");

            break
        default:
            break;
    }


}

function changeSampling(type) {
   
    for (let i = 1; i < 42; i++) {
        d3.select("#cir" + i).style("fill", "black");
    }
    switch (type) {
        case "0":
            let random = [];
            while (random.length < 8) {
                let number = Math.floor(Math.random() * (40 - 1 + 1) + 1)
                if (random.includes(number) == false) {
                    random.push(number);
                }
            }
            for (let i = 0; i < random.length; i++) {
                d3.select("#cir"+random[i]).transition()
                    .duration(500)
                    .style("fill", "red");
            }
            break;
        case "1":
            let random1 = []
            let random2 = []
            let random3 = []
            let random4 = []
            while (random1.length < 2) {
                let number = Math.floor(Math.random() * (10 - 1 + 1) + 1)
                if (random1.includes(number) == false) {
                    random1.push(number);
                }
            }
            while (random2.length < 2) {
                let number = Math.floor(Math.random() * (20 - 11 + 1) + 11)
                if (random2.includes(number) == false) {
                    random2.push(number);
                }
            }
            while (random3.length < 2) {
                let number = Math.floor(Math.random() * (30 - 21 + 1) + 21)
                if (random3.includes(number) == false) {
                    random3.push(number);
                }
            }
            while (random4.length < 2) {
                let number = Math.floor(Math.random() * (40 - 31 + 1) + 31)
                if (random4.includes(number) == false) {
                    random4.push(number);
                }
            }
            for (let i = 0; i < random1.length; i++) {
                d3.select("#cir" + random1[i]).transition()
                    .duration(500)
                    .style("fill", "blue");
            }
            for (let i = 0; i < random2.length; i++) {
                d3.select("#cir" + random2[i]).transition()
                    .duration(500)
                    .style("fill", "green");
            }
            for (let i = 0; i < random3.length; i++) {
                d3.select("#cir" + random3[i]).transition()
                    .duration(500)
                    .style("fill", "yellow");
            }
            for (let i = 0; i < random4.length; i++) {
                d3.select("#cir" + random4[i]).transition()
                    .duration(500)
                    .style("fill", "red");
            }
            break;
        case "2":
            let number = Math.floor(Math.random() * (4 - 1 + 1) + 1)
            let min = 10 * (number - 1) + 1;
            let max = min + 9;
            console.log(min,max)
            let random5 = [];
            while (random5.length < 8) {
                let number = Math.floor(Math.random() * (max - min + 1) + min)
                if (random5.includes(number) == false) {
                    random5.push(number);
                }
            }
            for (let i = 0; i < random5.length; i++) {
                d3.select("#cir" + random5[i]).transition()
                    .duration(500)
                    .style("fill", "red");
            }
            for (let i = 1; i < 42; i++) {
                if (i < min || i > max) {
                    d3.select("#cir" + i).transition()
                        .duration(500)
                        .style("fill", "gray");
                }
            }
            break;
        default:
            break;
    }
}

function kMed(bool1) {
    document.getElementById("kMed1").disabled = true;
    document.getElementById("kMed2").disabled = true;
    document.getElementById("sol1").innerHTML = "k-Medians is robust to outliers. Contrary to the k-Means algorithm, the centroids of the k-Medians algorithm are the median values and not the mean."
    if (bool1 == true) {
        document.getElementById("sol1").style.color = "green";
    }
    else {
        document.getElementById("sol1").style.color = "red";
    }
}

function lReg(bool1) {
    document.getElementById("regr1").disabled = true;
    document.getElementById("regr2").disabled = true;
    document.getElementById("sol2").innerHTML = "Linear regression is sensitive to outliers. The easiest way to think about that is if we try to model the data with a constant function. This constant function will take the data's mean value, which outliers can heavily distort."
    if (bool1 == true) {
        document.getElementById("sol2").style.color = "green";
    }
    else {
        document.getElementById("sol2").style.color = "red";
    }
}

function gpr(bool1) {
    document.getElementById("gpr1").disabled = true;
    document.getElementById("gpr2").disabled = true;
    document.getElementById("sol3").innerHTML = "We can not give a unique answer here. If we take, for example, a Gaussian Kernel with a small length scale, the outliers will probably not influence our model too much. If we take a constant kernel, we get the same answer as for the Linear Regression."
    if (bool1 == true) {
        document.getElementById("sol3").style.color = "green";
    }
    else {
        document.getElementById("sol3").style.color = "red";
    }
}

function pca(bool1) {
    document.getElementById("pca1").disabled = true;
    document.getElementById("pca2").disabled = true;
    document.getElementById("sol4").innerHTML = "PCA uses variance and mean to calculate the principal components. Outliers influence those."
    if (bool1 == true) {
        document.getElementById("sol4").style.color = "green";
    }
    else {
        document.getElementById("sol4").style.color = "red";
    }
}

function dc(bool1) {
    document.getElementById("dc1").disabled = true;
    document.getElementById("dc2").disabled = true;
    document.getElementById("sol5").innerHTML = "Decision Trees count the frequency of the data points. The frequency is not sensitive to outliers."
    if (bool1 == true) {
        document.getElementById("sol5").style.color = "green";
    }
    else {
        document.getElementById("sol5").style.color = "red";
    }
}

function quizNorm(bool1) {
    document.getElementById("quizNorm1").disabled = true;
    document.getElementById("quizNorm2").disabled = true;
    document.getElementById("sol6").innerHTML = "Normalization is sensitive to outliers. Imagine that we have one huge value - the rest of the data will then be compressed close to zero on a tiny scale."
    if (bool1 == true) {
        document.getElementById("sol6").style.color = "green";
    }
    else {
        document.getElementById("sol6").style.color = "red";
    }
}

function quizStand(bool1) {
    document.getElementById("quizStand1").disabled = true;
    document.getElementById("quizStand2").disabled = true;
    document.getElementById("sol7").innerHTML = "Standardization changes the mean of the data to zero and produces a unit standard deviation. We can not choose a predefined scale for our data points."
    if (bool1 == true) {
        document.getElementById("sol7").style.color = "green";
    }
    else {
        document.getElementById("sol7").style.color = "red";
    }
}


function quizOutl(bool1) {
    document.getElementById("quizOutl1").disabled = true;
    document.getElementById("quizOutl2").disabled = true;
    document.getElementById("sol8").innerHTML = "Not all machine learning algorithms are sensitive to outliers. For example, k-medoids is robust to outliers. "
    if (bool1 == true) {
        document.getElementById("sol8").style.color = "green";
    }
    else {
        document.getElementById("sol8").style.color = "red";
    }
}

function quizMean(bool1) {
    document.getElementById("quizMean1").disabled = true;
    document.getElementById("quizMean2").disabled = true;
    document.getElementById("sol9").innerHTML = "Using the mean is not the most probable approach. For example, we can use regression to get a better prediction."
    if (bool1 == true) {
        document.getElementById("sol9").style.color = "green";
    }
    else {
        document.getElementById("sol9").style.color = "red";
    }
}

function quizSampling(bool1) {
    document.getElementById("quizSampling1").disabled = true;
    document.getElementById("quizSampling2").disabled = true;
    document.getElementById("sol10").innerHTML = "Cluster random sampling should only be applied if we have nearly no variance between the clusters, but within one cluster."
    if (bool1 == true) {
        document.getElementById("sol10").style.color = "green";
    }
    else {
        document.getElementById("sol10").style.color = "red";
    }
}
function quizAugmen(bool1) {
    document.getElementById("quizAugmen1").disabled = true;
    document.getElementById("quizAugmen2").disabled = true;
    document.getElementById("sol11").innerHTML = "Data Augmentation is often used in computer vision and describes the task of generating new input data."
    if (bool1 == true) {
        document.getElementById("sol11").style.color = "green";
    }
    else {
        document.getElementById("sol11").style.color = "red";
    }
}

var radios = document.getElementsByName("normal");

// https://stackoverflow.com/questions/1682964/in-javascript-how-can-i-get-all-radio-buttons-in-the-page-with-a-given-name
var prev = 0;
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function () {
        (prev) ? console.log(prev.value) : null;
        if (this !== prev) {
            prev = this;
            changeNormal(prev.value)
        }
    });
}

var radios2 = document.getElementsByName("kmeans");
console.log(radios2.length)
var prev2 = 0;
for (let i = 0; i < radios2.length; i++) {
    radios2[i].addEventListener('change', function () {
        (prev2) ? console.log(prev2.value) : null;
        if (this !== prev2) {
            prev2 = this;
            changeKmeans(prev2.value)
        }
    });
}


var radios3 = document.getElementsByName("sampling");
console.log(radios3.length)

var prev3 = 0;
for (let i = 0; i < radios3.length; i++) {
    console.log("test")
    radios3[i].addEventListener('change', function () {
        (prev3) ? console.log(prev3.value) : null;
        if (this !== prev3) {
            prev3 = this;
            radios3[0].disabled = true;
            radios3[1].disabled = true;
            radios3[2].disabled = true;
            setTimeout(function () {
                changeSampling(prev3.value)
                radios3[0].disabled = false;
                radios3[1].disabled = false;
                radios3[2].disabled = false;
            }, 600);
           
        }
    });
}