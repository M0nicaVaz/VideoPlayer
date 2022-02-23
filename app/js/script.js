video.src = videos[index].src;

function showInfo() {
  title.innerHTML = `${videos[index].anime} <br> ${videos[index].title} - ${videos[index].author} `;
}

function changeBG() {
  document.body.style.background = videos[index].background;
  document.body.style.backgroundAttachment = 'fixed';
}

function nextVideo() {
  index++;
  if (index >= videos.length) {
    index = 0;
  }
  video.src = videos[index].src;
  video.play();
  showInfo();
  changeBG();
}

homeBtn.addEventListener('click', () => {
  container.classList.remove('display-none');
  document.querySelector('#homeScreen').classList.add('display-none');
  changeBG();
});

video.addEventListener('ended', nextVideo);

next.addEventListener('click', nextVideo);

fastR.addEventListener('click', () => {
  video.currentTime -= 10;
});

previous.addEventListener('click', () => {
  index--;
  video.src = videos[index].src;
  video.play();
  showInfo();
  changeBG();
});

play.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    play.innerHTML = "<i class='material-icons pause'>pause_circle_filled</i>";
  } else {
    video.pause();
    play.innerHTML =
      "<i id='play' class='material-icons pause'>play_circle</i>";
  }
  changeBG();
});

fastF.addEventListener('click', () => {
  video.currentTime += 10;
});

stopBtn.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  play.innerHTML = '<i class="material-icons"> play_circle </i>';
});

container.addEventListener('mouseenter', () => {
  controller.style.opacity = '1';
  showInfo();
});

container.addEventListener('mouseleave', () => {
  controller.style.opacity = '0';
  title.innerHTML = '';
});

fullScreen.addEventListener('click', () => {
  video.requestFullscreen();
});
