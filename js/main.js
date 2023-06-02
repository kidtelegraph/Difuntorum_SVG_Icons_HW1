console.log("JS file connected");

const b_marley = document.querySelector("#b_marley");

function logId() {
    console.log(this.id);
}

b_marley.addEventListener("click", logId);