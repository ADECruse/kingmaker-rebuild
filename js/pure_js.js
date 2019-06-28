document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      // document ready
      window.onscroll = function() {userScroll()};

      function userScroll() {
          var elements = document.querySelectorAll('.fadein');
          Array.prototype.forEach.call(elements, function(el, i){
  
              let bottom_of_element = this.offsetHeight().top + this.outerHeight();
              let bottom_of_window = window.scrollTop() + window.height();
  
              if( bottom_of_window > bottom_of_element ){
                  document.getElementsByClassName('.fadein').classList.add(".fadeinonload");
              }
              });
      
      //   if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      //     document.getElementById("myImg").className = "slideUp";
      //   }
      }
    }
  };