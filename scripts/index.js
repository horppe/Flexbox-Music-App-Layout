// Require in ThemeChange Handler
document.writeln(`<script src=./scripts/themeIndex.js></script>`);

function addListItems(){
  const listElement = document.querySelector("section.content div.music-list ul");
  for (var i = 5; i < 50; i++) {
    listElement.innerHTML += `<li>
        <span >${i}. Dummy Music Item</span>
        <span> Dummy Artist Feat. XCode </span>
        <span >03:50</span>
        <p><span class="catty-cloud">CATTY CLOUD SYNC</span></p>
    </li>`;
  }
}

function addPlayingListener(){
  const listItems = document.querySelectorAll("div.music-list ul li");
  const nowPlaying = document.querySelectorAll("div.details div.now-playing p");
  const musicInfoSection = document.querySelectorAll("div.music-info p");
  for (const item of listItems) {
    item.addEventListener('click', function(event){
      nowPlaying[0].innerText = musicInfoSection[0].innerText = this.children[0].innerText;
      nowPlaying[1].innerText = musicInfoSection[1].innerText = this.children[1].innerText;
    })
  }
}

window.addEventListener('load', addPlayingListener);

addListItems();
