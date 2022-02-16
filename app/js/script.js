let fastR = document.querySelector('#fast-r');
let previous = document.querySelector('#previous');
let play = document.querySelector('#play');
let fastF = document.querySelector('#fast-f');
let next = document.querySelector('#next');
let stopBtn = document.querySelector('#stopBtn');
let replay = document.querySelector('#replay');
let video = document.querySelector('#video1');
let container = document.querySelector('.container');
let controle = document.querySelector('.controle');
let title = document.querySelector('#title');

fastR.addEventListener('click', () => {
  video.currentTime -= 10;
});

previous.addEventListener('click', () => {
  for (i = 0; i < videos.length; i--) {
    video.src = videos[i].src;
  }
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
});

fastF.addEventListener('click', () => {
  video.currentTime += 10;
});

next.addEventListener('click', () => {
  video.play();
});

replay.addEventListener('click', () => {
  video.currentTime = 0;
  video.play();
});

stopBtn.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  play.innerHTML = '<i class="material-icons"> play_circle </i>';
});

container.addEventListener('mouseenter', () => {
  controle.style.display = 'block';
  showInfo();
});

container.addEventListener('mouseleave', () => {
  controle.style.display = 'none';
  title.innerHTML = '';
});

function showInfo() {
  title.innerHTML = video.anime + '<br>' + video.title + ' - ' + video.author;
}

let videos = [
  {
    anime: 'Kimetsu no Yaiba',
    src: './videos/Demon Slayer.mp4',
    title: 'Gurenge',
    author: 'LiSA',
  },
  {
    anime: 'Fruits Basket',
    src: './videos/Furuba.mp4',
    title: 'Home',
    author: 'Toki Asano',
  },
  {
    anime: 'Jujutsu Kaisen',
    src: './videos/Jujutsu.mp4',
    title: 'Kaikai Kitan',
    author: 'Eve',
  },
  {
    anime: 'Bunny Girl',
    src: './videos/Bunny Girl.mp4',
    title: 'Kiminosei',
    author: 'The Peggies',
  },
  {
    anime: 'Naruto',
    src: './videos/Naruto.mp4',
    title: 'Haruka Kanata',
    author: 'Asian Kung-Fu Generation',
  },
  {
    anime: 'Shingeki no Kyojin',
    src: './videos/Shingeki.mp4',
    title: 'Shinzou wo Sasageyo',
    author: 'Linked Horizon',
  },
];
