function currentTime() {
    let date = new Date(),
    hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds()

    hh = (hh < 10) ? `0${hh}` : hh;
    mm = (mm < 10) ? `0${mm}` : mm;
    ss = (ss < 10) ? `0${ss}` : ss;

    let time = `${hh} : ${mm} : ${ss}`
    let watch = document.querySelector("#watch")
    watch.innerHTML = time

}
setInterval(currentTime, 1000)