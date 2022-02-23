let fastR = document.querySelector('#fast-r');
let previous = document.querySelector('#previous');
let play = document.querySelector('#play');
let fastF = document.querySelector('#fast-f');
let next = document.querySelector('#next');
let stopBtn = document.querySelector('#stopBtn');
let replay = document.querySelector('#replay');
let video = document.querySelector('#video1');
let container = document.querySelector('.container');
let controller = document.querySelector('.controller');
let title = document.querySelector('#title');
let homeBtn = document.querySelector('#homeBtn');
let fullScreen = document.querySelector('#fullScreen');
let index = 0;

const videos = [
  {
    anime: 'Kimetsu no Yaiba',
    src: 'assets/videos/Kimetsu.mp4',
    title: 'Gurenge',
    author: 'LiSA',
    background: 'linear-gradient(145deg, #6F3A4E, #43B086, #05173D)',
  },
  {
    anime: 'Fruits Basket',
    src: 'assets/videos/Furuba.mp4',
    title: 'Home',
    author: 'Toki Asano',
    background: 'linear-gradient(145deg, #6A8899, #8D9484, #224D0C)',
  },
  {
    anime: 'Jujutsu Kaisen',
    src: 'assets/videos/Jujutsu.mp4',
    title: 'Kaikai Kitan',
    author: 'Eve',
    background: 'linear-gradient(145deg, #798183, #80695B, #051218)',
  },
  {
    anime: 'Rascal Does Not Dream of Bunny Girl Senpai',
    src: 'assets/videos/Bunny Girl.mp4',
    title: 'Kiminosei',
    author: 'The Peggies',
    background: 'linear-gradient(145deg, #B6F0FE,#A1A5A4, #767B7E)',
  },
  {
    anime: 'Naruto',
    src: 'assets/videos/Naruto.mp4',
    title: 'Blue Bird',
    author: 'Ikimono-gakari',
    background: 'linear-gradient(145deg, #024DB0, #EDE84D)',
  },
  {
    anime: 'Shingeki no Kyojin',
    src: 'assets/videos/Shingeki.mp4',
    title: 'Guren no Yumiya',
    author: 'Linked Horizon',
    background: 'linear-gradient(145deg, #E7E6D4, #EFD4A7, #F4955D)',
  },
];
