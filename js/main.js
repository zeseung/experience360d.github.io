$(document).ready(function() {

  $('a.blog-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#blog") return;
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '700px', 'width': '30%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').removeClass('hidden');
  }

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.navigation-wrapper').removeClass('visible animated bounceInDown');
        $('.navigation-wrapper').hide();
        $('.btn-mobile-menu__icon').removeClass('social');
      });
      $('.navigation-wrapper').addClass('animated bounceOutUp');
    } else {
      $('.navigation-wrapper').removeClass('animated bounceOutUp');
      $('.navigation-wrapper').show();
      $('.navigation-wrapper').addClass('visible animated bounceInDown');
      $('.btn-mobile-menu__icon').addClass('social');
    }
  });

  $('.navigation-wrapper .blog-button').click(function() {
    $('.navigation-wrapper').addClass('animated bounceOutUp');
    $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $('.navigation-wrapper').removeClass('visible animated bounceInDown bounceOutUp');
      $('.navigation-wrapper').hide();
      $('.btn-mobile-menu__icon').removeClass('social');
    });
  });

});

// Reading Time
$(document).ready(function() {
  $('article').each(function() {
    var $this = $(this);
    var $words = $this.find('.post-content').text().split(/\s+/).length;
    var wpm = 200;
    var readingTime = Math.ceil($words / wpm);
    $this.find('.post-reading-time').text(readingTime);
  });
});

// Smooth scrolling
$(document).ready(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Share buttons
$(document).ready(function() {
  $('.share a').on('click', function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    var width = 550;
    var height = 420;
    var left = (screen.width / 2) - (width / 2);
    var top = (screen.height / 2) - (height / 2);
    
    window.open(url, 'share', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
  });
});

// Image lazy loading
$(document).ready(function() {
  $('img').each(function() {
    var $img = $(this);
    var src = $img.attr('src');
    
    if (src) {
      $img.on('load', function() {
        $img.addClass('loaded');
      });
      
      if ($img[0].complete) {
        $img.addClass('loaded');
      }
    }
  });
});

// Search functionality
$(document).ready(function() {
  var searchInput = $('#search-input');
  var searchResults = $('#search-results');
  var searchData = [];

  // Load search data
  $.getJSON('/search.json', function(data) {
    searchData = data;
  });

  // Search function
  function performSearch(query) {
    var results = [];
    if (query.length > 2) {
      results = searchData.filter(function(item) {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
               item.content.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
               item.tags.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    }
    return results;
  }

  // Display search results
  function displayResults(results) {
    if (results.length > 0) {
      var html = '<ul>';
      results.forEach(function(item) {
        html += '<li><a href="' + item.url + '">' + item.title + '</a></li>';
      });
      html += '</ul>';
      searchResults.html(html).show();
    } else {
      searchResults.hide();
    }
  }

  // Search input event
  if (searchInput.length) {
    searchInput.on('input', function() {
      var query = $(this).val();
      var results = performSearch(query);
      displayResults(results);
    });

    // Hide results when clicking outside
    $(document).on('click', function(e) {
      if (!$(e.target).closest('#search-container').length) {
        searchResults.hide();
      }
    });
  }
});
