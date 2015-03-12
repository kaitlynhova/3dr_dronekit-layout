$( document ).ready(function() {
  $('body').scrollspy({ target: '#my-nav' });

  $('#subnav1').on('activate.bs.scrollspy', function() {
      $('#subnav1').removeClass('hide-subnav');
  });


});
