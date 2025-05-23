function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time").textContent = timeString;

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);
  document.getElementById("date").textContent = dateString;

  const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
  document.getElementById("day").textContent = dayString;
}

// Initial call
updateClock();
// Update every second
setInterval(updateClock, 1000);
