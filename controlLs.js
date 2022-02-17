let add = document.getElementById("add");
let input = document.querySelector(".input");
let sp = document.querySelector(".span");
let show = document.getElementById("show");
let deleto = document.getElementById("delete");


var Arr = [];

// Add text To Local Storage
add.onclick = function () {
    if (input.value == "") {
        document.querySelector(".span").innerHTML = `input is empty`;
    } else {
        document.querySelector(".span").innerHTML = `Local Storage Item ${input.value} Added`;
        Arr.push(input.value);
        localStorage.setItem("item", JSON.stringify(Arr));
        input.value = "";
    }
}





// show local storage items 
show.onclick = function () {

    if (Arr == "") { } else {
        document.querySelector(".span").innerHTML = "";
        Arr.forEach((element) => {
            var p = document.createElement("p");
            var txt = document.createTextNode(element);
            p.className = "p"
            p.appendChild(txt);
            document.querySelector(".span").appendChild(p);
        });
    }
}



//delete element from local storage
deleto.onclick = function () {
    if (input.value == "") {
    } else {
        var b = input.value;
        const result = Arr.filter(value => !value.includes(b));
        var mom = localStorage.setItem("item", JSON.stringify(result));
    }
    Arr = JSON.parse(localStorage.getItem("item"));
}



//check if there is an element in local storage
check.onclick = function () {
    if (input.value == "") {
        document.querySelector(".span").innerHTML = `input is empty`;
    } else {

        if (Arr.includes(input.value)) {
            document.querySelector(".span").innerHTML = `Found Local Storage Item Called ${input.value}`;
        } else {
            document.querySelector(".span").innerHTML = ` Not Found in Local Storage  `;
        }
    }
}



