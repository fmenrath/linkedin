<template>
  <header>
    <div id="nav">
      <div id="nav-left">
        <router-link to="/" class="nav-tab" active-class="active"><i class="fab fa-linkedin"></i></router-link>
        <router-link to="/network/" class="nav-tab" active-class="active">Mein Netzwerk</router-link>
        <router-link to="/network/" class="nav-tab" active-class="active">Jobs <span id="jobcount">2</span></router-link>
      </div>
      <div id="nav-center">
        <div id="search">
          <i class="fas fa-search" ></i>
          <input type="text" id="searchbar" placeholder="Suche">
        </div>
      </div>
      <div id="nav-right">
        <div class="dark-mode-toggle">  
          <input type="checkbox" :checked="(mode === 'dark') ? 'checked' : false" @change="$emit('toggle')" id="toggle" />
          <label for="toggle" id="toggle-label"></label>
        </div>
        <router-link to="/network/"><i class="far fa-bell fa-lg"></i></router-link>
        <router-link to="/network/"><i class="far fa-comment fa-lg"></i></router-link>
        <div id="img-user" @click="toggleDropdown">
          <div id="user-dropdown" style="display:none">
            <a href="#" class="dropdown-link">Profil</a>
            <a href="#" class="dropdown-link">Einstellungen</a>
            <a href="#" class="dropdown-link">Konto</a>
            <a href="#" class="dropdown-link">LinkedIn Premium</a>
            <hr style="filter: brightness(0.4); margin: 10px 16px 5px;">
            <a href="#" class="dropdown-link">Ausloggen</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleDropdown () {
      var x = document.getElementById("user-dropdown");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dark-mode-toggle {
   margin: 0 10px;
   padding: 0 5px;
}
#toggle-label {
   display: block;
   width: 45px;
   height: 26px;
   border-radius: 50px;
   background-color: var(--dark_darkblue);
   overflow: hidden;
   cursor: pointer;
   position: relative;
   margin: 0 3px;
}
#toggle-label:before, #toggle-label:after {
   display: block;
   position: absolute;
   content: "";
   width: 18px;
   height: 18px;
   border-radius: 50%;
   top: 4px;
   left: 6px;
   transition: .5s ease;
}
#toggle-label:before {
   background-color: #d1c7c0;
}
#toggle-label:after {
   background-color: var(--dark_darkblue);
   left: -8px;
   transform: scale(0.00001);
}
#toggle[type="checkbox"] {
   display: none;
}
#toggle[type="checkbox"]:checked + #toggle-label:before {
   background-color: #FFF;
   transform: translateX(14px);
}
#toggle[type="checkbox"]:checked + #toggle-label:after {
   transform: translateX(20px) scale(1);
}
</style>
