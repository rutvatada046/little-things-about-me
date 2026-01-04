function checkQuiz() {
    let score = 0;
    const cards = document.querySelectorAll(".question-card");

    cards.forEach(card => {
        const correct = card.dataset.answer;
        const selected = card.querySelector("input:checked");
        const feedback = card.querySelector(".feedback");

        if (selected) {
            if (selected.value === correct) {
                score++;
                feedback.innerHTML = "✔ Correct";
                feedback.style.color = "#2e7d32";
            } else {
                feedback.innerHTML =
                    `✘ Wrong — correct answer is <span>${correct}</span>`;
                feedback.style.color = "#c62828";
            }
        } else {
            feedback.innerHTML =
                `⚠ Not answered — correct answer is <span>${correct}</span>`;
            feedback.style.color = "#c62828";
        }
    });

    let message = "";
    if (score === 4) {
        message = "💜 Perfect! You know me really well.";
    } else if (score >= 2) {
        message = "✨ Nice! You know me quite well.";
    } else {
        message = "🌸 That’s okay — now you know more about me.";
    }

    document.getElementById("finalScore").innerHTML =
        `Your Score: ${score}/4 <br>${message}`;
}
