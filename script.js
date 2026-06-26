function updateClock() {
  const now = new Date();

  // Convert to IST (UTC +5:30)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istTime = new Date(utc + (5.5 * 3600000));

  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const seconds = istTime.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
