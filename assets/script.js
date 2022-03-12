$(document).ready(function () {
    // When save button is clicked on
    $('.saveBtn').on('click', function () {
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // saves info in localStorage and allows to show
      localStorage.setItem(time, value);
  
      $('.notification').addClass('show');
      
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);
    });
  
    function schedueler() {
      // GET current hour
      var currentHour = moment().hours();
  
      // loops over the timeblock
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('hour')[1]);
  
        // Check the time to indidctae if hours is passed
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    schedueler();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(schedueler, 15000);
  
    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
    // display current day 
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });
