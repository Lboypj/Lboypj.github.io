document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchBar = document.getElementById('searchBar');
    const animeLinks = document.querySelectorAll('.anime-link');
  
    const menuIcon = document.getElementById('menuIcon');
    const userActions = document.getElementById('userActions');
  
    menuIcon.addEventListener('click', function() {
      if (userActions.style.display === 'none' || userActions.style.display === '') {
        userActions.style.display = 'block';
      } else {
        userActions.style.display = 'none';
      }
    });

    searchIcon.addEventListener('click', function() {
      if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
      } else {
        searchBar.style.display = 'none';
      }
    });
  
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    const animeList = [
    // new release 
      { name: "Attack on Titan", link: "AOT.html" },
      { name: "Black butler", link: "Black butler.html" },
      { name: "blue lock", link: "blue lock.html" },
      { name: "dakaichi", link: "dakaichi.html" },
      { name: "Demon slayer", link: "Demon slayer.html" },
      { name: "High rise invasion", link: "High rise invasion.html" },
      { name: "hotarubi no mori", link: "hotarubi no mori.html" },
      { name: "jijutsu kaisen", link: "jijutsu kaisen.html" },
      { name: "naruto", link: "naruto.html" },
      { name: "spirited away", link: "spirited away.html" },
      { name: "tokyo ghoul", link: "tokyo ghoul.html" },
      { name: "Your Name", link: "Your Name.html" },

      //new episode
      { name: "Dangan", link: "Dangan.html" },
      { name: "blackClover", link: "blackClover.html" },
      { name: "hunter x hunter", link: "HXH.html" },
      { name: "re zero", link: "re zero.html" },
      { name: "Assassination Class", link: "Assassination Class.html" },
      { name: "Class of Elite", link: "Class of Elite.html" },
      { name: "Bouquet", link: "Bouquet.html" },
      { name: "One Punch Man", link: "One Punch Man.html" },
      
      { name: "Haikyu", link: "Haikyu.html" },
      { name: "jijutsu kaisen", link: "jijutsu kaisen.html" },
      { name: "My Hero", link: "My Hero.html" },

      //slideshow
      { name: "cyberpunk", link: "cyberpunk.html" },
      { name: "Death Note", link: "Deathnote.html" },
      { name: "foodWars", link: "foodWars.html" },
      { name: "demonlord", link: "demonlord.html" },
      { name: "kakeguri", link: "kakeguri.html" },
    ];
  
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredAnime = animeList.filter(anime => anime.name.toLowerCase().includes(searchTerm));
  
      displaySearchResults(filteredAnime);
    }
  
    function displaySearchResults(results) {
      searchResults.innerHTML = '';
  
      if (results.length === 0) {
        searchResults.textContent = 'No results found';
      } else {
        results.forEach(result => {
          const animeElement = document.createElement('a');
          animeElement.textContent = result.name;
          animeElement.href = result.link;
          animeElement.classList.add('searched-anime-link');
          searchResults.appendChild(animeElement);
        });
      }
    }
  
    searchButton.addEventListener('click', performSearch);
  
    animeLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const animeName = this.textContent;
        const foundAnime = animeList.find(anime => anime.name === animeName);
        if (foundAnime) {
          window.location.href = foundAnime.link; 
        }
      });
    });
  });
  