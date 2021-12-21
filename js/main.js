    function changeButtonState() {
        let button = document.getElementById("btn");
        let counter = document.getElementById("countFollowers");

        if (button.innerText === "FOLLOW") {
            button.innerText = "FOLLOWING";
            button.style.backgroundColor = "green";
            counter.innerText = "100,501";
        } else {
            button.innerText = "FOLLOW";
            button.style.backgroundColor = "#2589cc";
            counter.innerText = "100,500";
        }
    }