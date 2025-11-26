const secArrow = document.querySelector(".s"),
    minArrow = document.querySelector(".m"),
    hourArrow = document.querySelector(".h"),
    hourNum = document.querySelector(".hours"),
    minuteNum = document.querySelector(".minutes"),
    tabsItem = document.querySelectorAll(".tabsItem"),
    tabsContent = document.querySelectorAll(".tabsContentItem"),
    timerButton = document.querySelector(".stopwatch__btn"),
    stopwatchHour = document.querySelector('.stopwatch__hours'),
    stopwatchMinute = document.querySelector('.stopwatch__minutes'),
    stopwatcSecond = document.querySelector('.stopwatch__seconds');

secArrow.style = "transform: rotate(90deg);";

function clock() {
    let time = new Date(),
        second = time.getSeconds(),
        minute = time.getMinutes(),
        hour = time.getHours();
    millisecond = time.getMilliseconds();

    secArrow.style = `transform: rotate(${
        (millisecond / 1000 + second) * 6
    }deg)`;
    minArrow.style = `transform: rotate(${minute * 6}deg)`;
    hourArrow.style = `transform: rotate(${hour * 30}deg)`;
    minuteNum.innerHTML = minute > 9 ? minute : `0${minute}`;
    hourNum.innerHTML = hour > 9 ? hour : `0${hour}`;

    setTimeout(() => {
        clock();
    }, 10);
}

clock();

tabsItem.forEach((item, i) => {
    item.addEventListener("click", () => {
        tabsItem.forEach((item, j) => {
            tabsContent[j].classList.remove("active");
            item.classList.remove("active");
        });

        tabsContent[i].classList.add("active");
        item.classList.add("active");
    });
});

let second = 0
let minute = 0
let hour = 0

let timeOutId

function startTimer() {
    second++
    stopwatcSecond.innerHTML = second
    stopwatchMinute.innerHTML = minute
    stopwatchHour.innerHTML = hour
    if (stopwatcSecond.innerHTML == 59) {
        second = 0
        minute++
    }
    if (stopwatchMinute.innerHTML == 59) {
        minute = 0
        hour++
    }

    timeOutId = setTimeout(() => {
        startTimer()
    }, 1000);

}

function stopTimer() {
    clearTimeout(timeOutId)
}

function clearTimer() {
    second = 0
    minute = 0
    hour = 0
    stopwatcSecond.innerHTML = second
    stopwatchMinute.innerHTML = minute
    stopwatchHour.innerHTML = hour
}


timerButton.addEventListener("click", () => {
    if (timerButton.innerHTML == "start") {
        startTimer()
        timerButton.innerHTML = "stop";
    } else if ((timerButton.innerHTML == "stop")) {
        stopTimer()
        timerButton.innerHTML = "clear";
    } else if (timerButton.innerHTML == "clear") {
        clearTimer()
        timerButton.innerHTML = "start";
    }
});
