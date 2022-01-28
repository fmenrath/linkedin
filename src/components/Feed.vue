<template>
   <div id="homecontent">
      <div id="user-post" class="container">
         <img src="https://www.cvpics.de/wp-content/uploads/2017/12/L0A4750-Recovered2-min-600x600.jpg" alt="" id="img-user-post">
         <input type="text" placeholder="Was möchten Sie Ihrem Netzwerk mitteilen?" id="input-post">
         <a href="" class="attachment"><i class="fas fa-photo-video"></i></a>
      </div>
   </div>
   <div id="feed-filter">
      <router-link to="/">Alle News</router-link>
      <router-link to="/">Personen</router-link>
      <router-link to="/">Gruppen</router-link>
      <router-link to="/">Events</router-link>
      <router-link to="/">Gefolgte Tags</router-link>
      <router-link to="/">Globale News</router-link>
   </div>
   <div id="feed">
      <div class="feed-entry" v-for="entry in feed" :key="entry.id">
         <div class="feed-entry-content">
            <div class="feed-entry-creator">
               <router-link :to="`/user/${entry.owner.id}`" class="feed-entry-creator-link">
               <img class="img-profile" :src="entry.owner.picture">
                  <div class="recommendation-info">
                     <a href="/" class="name">{{entry.owner.firstName}} {{entry.owner.lastName}}</a><br>
                     <span class="description">M. Sc. Elektrotechnik</span>
                  </div>
               </router-link>
               <a href="" class="more">...</a>
            </div>
            <p class="feed-entry-text">{{entry.text}}</p>
            <div class="feed-entry-tags" v-for="tag in entry.tags" :key="tag">
               <a href="">#{{tag}}</a>
            </div>
            <img class="feed-entry-image" :src="entry.image">
            <div class="feed-entry-actions">
               <a href=""><i class="far fa-thumbs-up"></i>&nbsp;&nbsp;Gefällt mir</a>
               <a href=""><i class="far fa-comment-dots"></i>&nbsp;&nbsp;Kommentar</a>
               <a href=""><i class="fas fa-share"></i>&nbsp;&nbsp;Teilen</a>
               <a href=""><i class="far fa-paper-plane"></i>&nbsp;&nbsp;Senden</a>
            </div>
         </div>
         <div class="feed-entry-info" :data-id="entry.id">
            <span>{{dateConversion(entry.publishDate)}}</span>
            <span>
               <span href="" class="info-link" v-if="entry.comments.length==0" :data-id="entry.id" @click="openComments(entry.id)">0 Kommentare</span>
               <span href="" class="info-link" v-else-if="entry.comments.length==1" :data-id="entry.id" @click="openComments(entry.id)">1 Kommentar</span>
               <span href="" class="info-link" v-else :data-id="entry.id" @click="openComments(entry.id)">{{entry.comments.length}} Kommentare</span>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
               <a href="" class="info-link">{{entry.likes}}&nbsp; <i class="fas fa-thumbs-up like-count"></i></a>
            </span>
         </div>
         <div class="comments" :data-id="entry.id" style="display:none">
            <div v-for="comment in entry.comments" :key="comment.id" class="comment">
               <img class="comment-profile-picture" :src="comment.owner.picture">
               <div class="comment-block">
                  <div class="comment-info">
                     <a class="comment-name">{{comment.owner.firstName}} {{comment.owner.lastName}}</a>
                     <span class="comment-timestamp">{{dateConversion(comment.publishDate)}}</span>
                  </div>
                  <p class="comment-text">{{comment.message}}</p>
               </div>
            </div>
            <div class="send-comment">
               <img src="https://www.cvpics.de/wp-content/uploads/2017/12/L0A4750-Recovered2-min-600x600.jpg" alt="" id="img-user-post">
               <div class="write-comment">
                  <input type="text" class="write-comment-input" placeholder="Schreiben Sie einen Kommentar">
                  <i class="far fa-paper-plane comment-send"></i>
               </div>
            </div>
            
         </div>
      </div>
   </div>
</template>


<script>
import axios from "axios";

export default{
   data() {
      return {
         feed: [],
         comments: []
      };
   },
   async created() {
      let config = {
         headers: {
            "app-id": "61ec6c1220f8d23e97f5e8fe"
         }
      }
      // Posts für Feed laden
      try {
         const res = await axios.get('https://dummyapi.io/data/v1/post?limit=6', config);
         this.feed = res.data.data;
      } catch (e) {
         console.error(e);
      }
      
      //Kombinieren
      try{
         for(var i=0; i<this.feed.length;i++){
            var entry = this.feed[i].id;
            var res = await axios.get('https://dummyapi.io/data/v1/post/'+entry+'/comment', config);
            this.feed[i].comments = res.data.data;
         }
         // console.log(this.feed);
      } catch (e) {
         console.error(e);
      }
   },
   methods: {
      //Kommentarsektion anzeigen
      openComments(id){
         var feed_entry_info = document.querySelectorAll("[data-id='"+id+"']")[0];
         feed_entry_info.style.borderRadius = "0px";
         feed_entry_info.style.borderBottom = "0px";
         var commentsection = document.querySelectorAll("[data-id='"+id+"']")[2];
         commentsection.style.display = "block";
      },
      //Zeit zurückgeben
      dateConversion(date){
         return new Date(date).toUTCString().slice(5,16);
      }
   }
}
</script>
