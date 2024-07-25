document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#element', {
      strings: ['want  to be a web developer', 'want to be a software Engineer'],
      typeSpeed: 50,
  });

document.getElementById('githubButton').addEventListener('click', function() {
  window.location.href = 'https://github.com/nithin849';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var resumeButton = document.getElementById('resumeButton');
  resumeButton.addEventListener('click', function() {
      // Create a link element
      var link = document.createElement('a');
      link.href = 'Nani.pdf'; 
      link.download = 'Nithin.pdf';  //name of file to be downloaded
      document.body.appendChild(link); // Append the link to the body
      link.click(); // Trigger the download
      document.body.removeChild(link); // Remove the link from the body
  });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

