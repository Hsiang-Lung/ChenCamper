const mainImg = document.querySelector('.main-img');
const enlargedImgContainer = document.querySelector('.enlarged-img-container');
const enlargedImg = document.querySelector('.enlarged-img');
const thumbImgs = document.querySelectorAll('.thumb');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let activeIndex = 0;

function updateImage(index) {
    // Update the index
    activeIndex = index;

    // Get the new image
    const newImg = thumbImgs[index];

    // Update the main and enlarged images
    mainImg.src = newImg.src;
    mainImg.alt = newImg.alt;
    enlargedImg.src = newImg.src;
    enlargedImg.alt = newImg.alt;

    // Update the active thumbnail
    thumbImgs.forEach((thumbImg, thumbIndex) => {
        thumbImg.classList.remove('active');
        if (thumbIndex === index) {
            thumbImg.classList.add('active');
        }
    });
}

thumbImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        updateImage(index);
    });
});

prevButton.addEventListener('click', () => {
  const newIndex = activeIndex === 0 ? thumbImgs.length - 1 : activeIndex - 1;
  updateImage(newIndex);
});

nextButton.addEventListener('click', () => {
  const newIndex = activeIndex === thumbImgs.length - 1 ? 0 : activeIndex + 1;
  updateImage(newIndex);
});

mainImg.addEventListener('click', () => {
  enlargedImgContainer.style.display = 'block';
});

enlargedImgContainer.addEventListener('click', (event) => {
  if (event.target === enlargedImgContainer) {
      enlargedImgContainer.style.display = 'none';
  }
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