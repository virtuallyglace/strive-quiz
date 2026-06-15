class Result {
    constructor(key, id, amount) {
        this.key = key;
        this.id = id;
        this.amount = 1;
    }
    check_strength() {
        if (this.id.includes("strong_")) {
            this.amount = 2;
            this.id = this.id.replace("strong_", "");
        }
    }
}
function get_results() {
    reset_characters();
    var questions = document.querySelectorAll('input[type="radio"]:checked');
    for (i = 0; i < questions.length; i++) {
        result = new Result(questions[i].name, questions[i].id);
        result.check_strength();
        check_characters(result);
    }
    var winner = check_winner();

    var img = document.getElementById("winner_img");
    img.src = winner[0].image;
    var text = document.getElementById("winner_name");
    text.textContent = winner[0].name + " (" + winner[0].score + ")";

    var othersContainer = document.getElementById("others");
    othersContainer.innerHTML = "";

    var others = winner.slice(1, 10);
    others.forEach(function(person) {
        var card = document.createElement("div");
        card.className = "other-card";

        var img = document.createElement("img");
        img.src = person.image;
        img.alt = person.name;

        var name = document.createElement("p");
        name.textContent = person.name + " (" + person.score + ")";

        card.appendChild(img);
        card.appendChild(name);
        othersContainer.appendChild(card);
    });

    console.log(winner);
    openModal();
};
function openModal() {
    document.getElementById('modal').style.display='block';
}
function closeModal() {
    document.getElementById('modal').style.display='none';
}
