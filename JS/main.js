function scrollToTop() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
  }

// function scrollToProjects() {
//     const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
//     if (currentScroll > 0) {
//       window.requestAnimationFrame(scrollToTop);
//       window.scrollTo(0, currentScroll - (currentScroll / 10));
//     }
//   }

const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
  );

let scrollDivisor = scrollHeight / 4;
console.log('Each section is equal to ' + scrollDivisor);

function scrollToProjects() {
  if (window.pageYOffset > 0) {
    
  }
}


console.log('Full document height, with scrolled out part: ' + scrollHeight);
  