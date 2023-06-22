const music = new Audio('audio/1.mp3');
// music.play();

const song = [ 
    {
        Id: 1,
        songName:` I Forget Where We Were <br> 
        <div class="subtitle">Ben Howard</div>`,
        poster:"img/1.jpg",
    },
    {
        Id: 2,
        songName:` Almost Blue <br> 
        <div class="subtitle">Chet Baker</div>`,
        poster:"img/2.jpg",
    },
    {
        Id: 3,
        songName:`The Head And The Heart <br> 
        <div class="subtitle">Chris de Burgh</div>`,
        poster:"img/3.jpg",
    },
    {
        Id: 4,
        songName:`Broken Butterfly <br> 
        <div class="subtitle">Danielle East</div>`,
        poster:"img/4.jpg",
    },
    {
        Id: 5,
        songName:`Daughter <br> 
        <div class="subtitle">Youth</div>`,
        poster:"img/5.jpg",
    },
    {
        Id: 6,
        songName:`Lemon Tree <br> 
        <div class="subtitle">Lorena Kirchoffer</div>`,
        poster:"img/6.jpg",
    },
    {
        Id: 7,
        songName:`Killing Me Softly <br> 
        <div class="subtitle">Frank Sinatra</div>`,
        poster:"img/7.jpg",
    },
    {
        Id: 8,
        songName:`Careless Whisper <br> 
        <div class="subtitle">George Michael </div>`,
        poster:"img/8.jpg",
    },
    {
        Id: 9,
        songName:`Differnet Kind Of Love <br> 
        <div class="subtitle">Ghostly Kisses</div>`,
        poster:"img/9.jpg",
    },
    {
        Id: 10,
        songName:`Empty Note <br> 
        <div class="subtitle">Ghostly Kisses</div>`,
        poster:"img/10.jpg",
    },
    {
        Id: 11,
        songName:`The City Holds My Heart <br> 
        <div class="subtitle">Ghostly Kisses</div>`,
        poster:"img/11.jpg",
    },
    {
        Id: 12,
        songName:`These Memories <br> 
        <div class="subtitle">Hollow Coves</div>`,
        poster:"img/12.jpg",
    },
    {
        Id: 13,
        songName:`Honey,It's Alright <br> 
        <div class="subtitle">Gregory Alan Isakov</div>`,
        poster:"img/13.jpg",
    },
    {
        Id: 14,
        songName:`How I Love You <br> 
        <div class="subtitle">Engelbert Humperdinc</div>`,
        poster:"img/14.jpg",
    },
    {
        Id: 15,
        songName:`Miss Me <br> 
        <div class="subtitle">Joe Purdy</div>`,
        poster:"img/15.jpg",
    },
    {
        Id: 16,
        songName:`Wonderful Life<br> 
        <div class="subtitle">Katie melua</div>`,
        poster:"img/16.jpg",
    },
    {
        Id: 17,
        songName:`The Night We Met <br> 
        <div class="subtitle">Lord Huron</div>`,
        poster:"img/17.jpg",
    },
    {
        Id: 18,
        songName:`love story <br> 
        <div class="subtitle">engelbert humperdinck</div>`,
        poster:"img/18.jpg",
    },
    {
        Id: 19,
        songName:`My Baby You<br> 
        <div class="subtitle">Marc Anthony</div>`,
        poster:"img/19.jpg",
    },
    {
        Id: 20,
        songName:`Hair and Skin<br> 
        <div class="subtitle">Mazzy Star</div>`,
        poster:"img/20.jpg",
    },
    {
        Id: 21,
        songName:`Nothing Else Matters <br> 
        <div class="subtitle">Metallica</div>`,
        poster:"img/21.jpg",
    },
    {
        Id: 22,
        songName:`Cold Little Heart<br> 
        <div class="subtitle">Michael Kiwanuka</div>`,
        poster:"img/22.jpg",
    },
    {
        Id: 23,
        songName:`Know Your Name <br> 
        <div class="subtitle">The Backseat Lovers </div>`,
        poster:"img/23.jpg",
    },
    {
        Id: 24,
        songName:`Where Are We Now<br> 
        <div class="subtitle">Mild Orange</div>`,
        poster:"img/24.jpg",
    },
    {
        Id: 25,
        songName:`I Hope You Die<br> 
        <div class="subtitle">Molly Nilsson</div>`,
        poster:"img/25.jpg",
    },
    {
        Id: 26,
        songName:`Private Presley<br> 
        <div class="subtitle">Peach Pit</div>`,
        poster:"img/26.jpg",
    },
    {
        Id: 27,
        songName:`Follow Your Heart<br> 
        <div class="subtitle">Scorpions</div>`,
        poster:"img/27.jpg",
    },
    {
        Id: 28,
        songName:`Still Loving You <br> 
        <div class="subtitle">Scorpions</div>`,
        poster:"img/28.jpg",
    },
    {
        Id: 29,
        songName:`When You Came Into My Life <br> 
        <div class="subtitle">Scorpions</div>`,
        poster:"img/29.jpg",
    },
    {
        Id: 30,
        songName:`Slightly Hung Over<br> 
        <div class="subtitle">Blues Delight</div>`,
        poster:"img/30.jpg",
    },
    {
        Id: 31,
        songName:`kisses <br> 
        <div class="subtitle">Slowdive</div>`,
        poster:"img/31.jpg",
    },
    {
        Id: 32,
        songName:`Sleep <br> 
        <div class="subtitle">Slowdive</div>`,
        poster:"img/32.jpg",
    },
    {
        Id: 33,
        songName:`She's Gone <br> 
        <div class="subtitle">Steelheart</div>`,
        poster:"img/33.jpg",
    },
    {
        Id: 34,
        songName:`Sunsetz <br> 
        <div class="subtitle">Cigarettes After Sex</div>`,
        poster:"img/34.jpg",
    },
    {
        Id: 35,
        songName:`Touch  <br> 
        <div class="subtitle">Cigarettes After Sex</div>`,
        poster:"img/35.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})



//add event to the arrow scrollbar in song list

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft=+1130;
})
pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft=-1130;
})

//add event to the arrow scrollbar in artists list
let pop_artists_left=document.getElementById('pop_artists_left');
let pop_artists_right=document.getElementById('pop_artists_right');
let Artists_bx=document.getElementsByClassName('Artists_bx')[0];

pop_artists_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft =+1130;
});
pop_artists_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft=-1130;
});


const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}


let index = 0;
let poster_master_player=document.getElementById('poster_master_player');
let title =document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) =>{
    e.addEventListener('click',(el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_player.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        let songTitles = song.filter((els) =>{
            return els.Id == index;
        });
        songTitles.forEach(elss =>{
            let {songName}=elss;
            title.innerHTML=songName;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',() =>{

    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);


    if (sec1<10){
        sec1 = `0${sec1}`;

    }
    currentEnd.innerHTML = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2<10){
        sec2 = `0${sec2}`;

    }

    currentStart.innerHTML = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value =progressBar;
    // console.log(seek.value);

    let seekbar = seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

});

seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100 ;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume = vol_a / 100 ;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_player.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    let songTitles = song.filter((els) =>{
        return els.Id == index;
    });
    songTitles.forEach(elss =>{
        let {songName}=elss;
        title.innerHTML=songName;
    })
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_player.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    let songTitles = song.filter((els) =>{
        return els.Id == index;
    });
    songTitles.forEach(elss =>{
        let {songName}=elss;
        title.innerHTML=songName;
    })
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    
})