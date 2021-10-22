function updateClock() {
  var now = new Date(), // current date
      months = ['January,', 'February,', 'March,','April','May,','June,','July,','August,','September,','October,','November,','December,']; // you get the idea
      time = now.getHours() + ':' + now.getMinutes(),
      date = [now.getDate(), 
              months[now.getMonth()],
              now.getFullYear()].join(' ');
  // [date,time] is layout
  document.getElementById('time').innerHTML = [date, time].join(' - ');
  setTimeout(updateClock, 1000);
}
updateClock(); 

