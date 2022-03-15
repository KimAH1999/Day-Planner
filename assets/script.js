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
  
    function hourUpdater() {
      // GET current hour
      var currentHour = moment().hours();
  
      // loops over the time-block that is in jquery.min in html fior each save row
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
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load any saved data from localStorage
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));
  
    // display current day 
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });
