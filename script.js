document.addEventListener('DOMContentLoaded', () => {
    const utcTimeElement = document.getElementById('utcTime');
    const dayOfWeekElement = document.getElementById('dayOfWeek');
  
    function updateDateTime() {
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4];
      const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
  
      utcTimeElement.textContent = utcTime;
      dayOfWeekElement.textContent = dayOfWeek;
    }
  
    updateDateTime();
    setInterval(updateDateTime, 1000);
  });
  