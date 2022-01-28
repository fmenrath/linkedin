<template>
   <div class="content-left">
      <div id="recommendations" class="container">
         <p class="container-header">Empfehlungen</p>
         <div id="recommendation-list">
            <div class="recommandtion-item" v-for="user in recommendedUsers" :key="user.id">
               <div class="recommendation-user">
                  <img class="img-profile" :src="user.picture">
                  <div class="recommendation-info">
                     <a href="" class="name">{{user.firstName}} {{user.lastName}}</a><br>
                     <span class="description">{{user.job}}</span>
                  </div>
               </div>
               <a href="" class="link-follow">Folgen</a>
            </div>
         </div>
         <a href="" class="link-view-all">Alle ansehen</a>
      </div>
   </div>
</template>

<script>
import axios from "axios";

export default{
   data() {
      return {
         recommendedUsers: [],
         jobs: ["Student", "Teacher", "Front-End Developer", "Person of Interest", "UX Designer", "UI Designer", "System Administrator", "Scrum Master", "Product Owner", "Technical Lead"],
      };
   },
   async created() {
      try {
         let config = {
            headers: {
               "app-id": "61ec6c1220f8d23e97f5e8fe"
            }
         }
         var random = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
         const res = await axios.get('https://dummyapi.io/data/v1/user?page='+random+'&limit=5', config);
         this.recommendedUsers = res.data.data;

         this.recommendedUsers.forEach(user => {
            var randomIndex = Math.floor(Math.random() * this.jobs.length);
            var randomJob = this.jobs[randomIndex];
            user["job"] = randomJob;
         });
      } catch (e) {
         console.error(e);
      }
   }
}
</script>
