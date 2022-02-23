window.addEventListener('load', () => {
  video.src = videos[index].src;
  video.load();
});

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

video.addEventListener('timeupdate', (e) => {
  let currentTime = e.target.currentTime;
  let duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progress.style.width = `${progressWidth}%`;
  progress.style.backgroundColor = videos[index].progressColor;

  video.addEventListener('loadeddata', () => {
    let durationSpan = document.querySelector('#duration');
    let durationMin = Math.floor(video.duration / 60);
    let durationSec = Math.floor(video.duration % 60);

    if (durationSec < 10) {
      durationSec = `0${durationSec}`;
    }
    durationSpan.innerText = `${durationMin}:${durationSec}`;
  });

  let currentSpan = document.querySelector('#current');
  let currentMin = Math.floor(video.currentTime / 60);
  let currentSec = Math.floor(video.currentTime % 60);

  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  currentSpan.innerText = `${currentMin}:${currentSec}`;
});

progressBar.addEventListener('click', (e) => {
  let val = progressBar.clientWidth;
  let progressClicked = e.offsetX;
  video.currentTime = (progressClicked / val) * video.duration;
});
