const sentence = ["I love you", "I am going to the school", "I like programing", "I do not like tea"];
const mySentence = document.querySelector(".texts");
let textArea = document.getElementById("write");
const Myminute = document.querySelector(".minute");
const Mysecond = document.querySelector(".second");
mySentence.innerHTML = sentence[0];
let minute = 0;
let second = 0;
let theTime;
let started = false;

function TypeSpeed() {
    document.addEventListener('keydown', () => {
        if (started == false) {
            started = true

            function number(a) {
                return a < 10 ? "0" + a : a;
            }
            theTime = setInterval(() => {
                second++;
                if (second >= 60) {
                    second = 0;
                    minute++;
                }
                Myminute.innerHTML = number(minute);
                Mysecond.innerHTML = number(second);

            }, 1000);
        }
        if (textArea.value.trim() === mySentence.innerHTML) {
            let currentIndex = sentence.indexOf(mySentence.innerHTML);
            if (currentIndex < sentence.length - 1) {
                textArea.value = "";
                mySentence.innerHTML = sentence[currentIndex + 1];
            } else {
                clearInterval(theTime);
                mySentence.innerHTML="It is finished!";
            }
        }
    });
}
TypeSpeed();