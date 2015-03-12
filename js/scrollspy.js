$( document ).ready(function() {
  $('body').scrollspy({ target: '#my-nav' });

  $('#moose').on('activate.bs.scrollspy', function() {
      $('#subnav1').addClass('show-subnav');
  });
});
