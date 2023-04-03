const clock = document.querySelector(".clock");
function loadClock() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let session = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour -= 12;
    session = "PM";
  }

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;
  const time = `${hour}:${minute}:${second} ${session}`;
  console.log(time);
  clock.textContent = time;

  setTimeout(loadClock, 1000);
}
loadClock();
