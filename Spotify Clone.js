let cards= document.querySelectorAll('.card1');
let album = document.querySelector('.music-player .album .album-l');
let albumImg = document.querySelector('.music-player .album img');
let musicPlayer = document.querySelector('.music-player');

let played = false;
musicPlayer.classList.add('player-display-none-js');


for (card of cards) {
    card.addEventListener("mouseenter", function() {
        let greenPlay = document.createElement('div');
        greenPlay.classList.add('green-play');
        greenPlay.setAttribute('type','button');
        let greenIcon=document.createElement('i');
        greenIcon.setAttribute("class","fa-solid fa-play");
        greenPlay.append(greenIcon);
        this.children[0].insertAdjacentElement("afterend",greenPlay);
        // console.log('yes1');
    });
    card.addEventListener("mouseleave", function() {
        this.children[1].remove();
        // console.log('yes2');
    });
    card.addEventListener("click", function() {
        // console.dir(this);
        let l1 = this.children[0].attributes[0].nodeValue;
        let l2 = this.children[2].innerText;
        let l3 = this.children[3].innerText;
        // console.dir(this.children);
        albumImg.attributes[0].nodeValue = l1;
        album.children[0].innerText = l2 ;
        album.children[1].innerText = l3 ;
        played =true;
        musicPlayer.classList.add('player-display-flex-js');
    });
}

