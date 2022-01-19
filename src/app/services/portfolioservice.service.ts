import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioserviceService {

  constructor() { }

  AllVideos = [
    {
      title: "22simba - PER I ROIZ",
      description: "Questo video è incredibile",
      src: "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/22simba - PER I ROIZ.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/22simba - PER I ROIZ.webm"
  },
  {
    title: "22Simba - V",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/22Simba.jpg",
      videosrc:"https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/22simba - V.mp4"
  },
  {
    title: "22simba - Proteggimi",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/Blu parte 2.jpeg",
      videosrc:"https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/22simba - Proteggimi def.mp4"
  },
  {
    title: "Manfro feat. Pyt - BLOCCO",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/Blocco.jpg",
      videosrc:"https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/BLOCCO feat. Pyt.mp4"
  },
  {
    title: "Manfro - Est99",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/Est99.jpg",
      videosrc:"https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/Manfro - est99.mp4"
  },
  {
    title: "PYT - STELLA BLU",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/PYT - STELLA BLU.jpg",
      videosrc:"https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/PYT - STELLA BLU (prod. Garelli, YaluDream) [Official Video].webm"
  },
  {
    title: "Tyler Strikes - TRYHARD FreeStyle",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/Tyler.jpg",
      videosrc:"https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/Tyler Strikes - TRYHARD Freestyle.mp4"
  },
  {
    title: "Shorty Shok - 2359",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/Shorty.jpg",
      videosrc:"https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/SHORTY SHOK - 2359 (Prod. Kid Riff).mp4"
  },
  {
    title: "Funny - MOON WALK",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/sfondo nero def.jpg",
      videosrc:"https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/Funny Contenuto corretto.mp4"
  }
  ]

  vsrc?: string;
  videoimg?: string;
  title?: string;

  GetSrc(card: any){
    this.vsrc = card.videosrc;
    this.videoimg = card.src;
    this.title= card.title;
    console.log("src video: ",this.vsrc, "img: ", this.videoimg);
  }

}
