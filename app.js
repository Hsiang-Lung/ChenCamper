const mainImg = document.querySelector('.main-img');
const enlargedImgContainer = document.querySelector('.enlarged-img-container');
const enlargedImg = document.querySelector('.enlarged-img');
const thumbImgs = document.querySelectorAll('.thumb');

thumbImgs.forEach(img => {
  img.addEventListener('click', () => {
    // Set active class to clicked thumbnail
    thumbImgs.forEach(thumbImg => thumbImg.classList.remove('active'));
    img.classList.add('active');

    // Update main image and enlarged image
    mainImg.src = img.src;
    mainImg.alt = img.alt;
    enlargedImg.src = img.src;
    enlargedImg.alt = img.alt;
  });
});

mainImg.addEventListener('click', () => {
  enlargedImgContainer.style.display = 'block';
});

enlargedImgContainer.addEventListener('click', () => {
  enlargedImgContainer.style.display = 'none';
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  if (evt) {
    evt.currentTarget.className += " active";
  }
}