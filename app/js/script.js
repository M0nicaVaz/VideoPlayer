window.addEventListener('load', () => {
  video.src = videos[index].src;
  video.load();
});

function showInfo() {
  controller.classList.toggle('hide');
  infoContainer.classList.toggle('hide');
  title.innerHTML = `${videos[index].anime} <br> ${videos[index].title} - ${videos[index].author} `;
}

function hideInfo() {
  controller.classList.add('hide');
  infoContainer.classList.add('hide');
  title.innerHTML = '';
}
function changeBG() {
  document.body.style.background = videos[index].background;
}

function nextVideo() {
  index++;
  if (index >= videos.length) {
    index = 0;
  }
  video.src = videos[index].src;
  play.innerHTML = "<i class='material-icons pause'>pause_circle_filled</i>";
  video.play();
  showInfo();
  changeBG();
  setTimeout(() => {
    hideInfo();
  }, 10000);
}

homeBtn.addEventListener('click', () => {
  container.classList.remove('display-none');
  document.querySelector('#homeScreen').classList.add('display-none');
  changeBG();
});

video.addEventListener('ended', () => {
  nextVideo();
  setTimeout(() => {
    hideInfo();
  }, 10000);
});

controller.addEventListener('dblclick', () => {
  video.requestFullscreen();
});

next.addEventListener('click', nextVideo);

fastR.addEventListener('click', () => {
  video.currentTime -= 10;
});

previous.addEventListener('click', () => {
  if (index == 0) {
    index = 6;
  }
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
  showInfo();
});

container.addEventListener('mouseleave', () => {
  hideInfo();
});

fullScreen.addEventListener('click', () => {
  video.requestFullscreen();
});

video.addEventListener('timeupdate', (e) => {
  let currentTime = e.target.currentTime;
  let duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progress.style.width = `${progressWidth}%`;
  progress.style.backgroundColor = videos[index].progressColor;

  let currentSpan = document.querySelector('#current');
  let currentMin = Math.floor(video.currentTime / 60);
  let currentSec = Math.floor(video.currentTime % 60);

  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  currentSpan.innerText = `${currentMin}:${currentSec}`;
});

video.addEventListener('loadeddata', () => {
  let durationSpan = document.querySelector('#duration');
  let durationMin = Math.floor(video.duration / 60);
  let durationSec = Math.floor(video.duration % 60);

  if (durationSec < 10) {
    durationSec = `0${durationSec}`;
    durationSec.padStart(4, '0');
  }
  durationSpan.innerText = `${durationMin}:${durationSec}`;
});

progressBar.addEventListener('click', (e) => {
  let val = progressBar.clientWidth;
  let progressClicked = e.offsetX;
  video.currentTime = (progressClicked / val) * video.duration;
});
