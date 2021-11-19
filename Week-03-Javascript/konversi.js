var score = prompt("Please input your score (scale from 0 to 100) : ");

if (score >= 80 && score <= 100) {
    alert("Excellent, your score is A");
} else if (score >= 60 && score < 80) {
    alert("Good, your score is B");
} else if (score >= 40 && score < 60) {
    alert("Better study harder next time, your score is C");
} else if (score >= 20 && score < 40) {
    alert("Are you .... ?? ah nevermind, your score is D");
} else if (score >= 0 && score < 20) {
    alert("@#$@#%$@&#@$.... ah sorry, your score is E");
} else {
    alert("Please try again, and input only from 0 to 100");
}
