<template>
   <div id="home">
      <Recommendations />
      <!-- <TopTags /> -->
      <div class="content-center">
         <HomeContent />
      </div>
      <div class="content-right">
         <Ads />
      </div>
   </div>
</template>

<script>
import Recommendations from '../components/Recommendations.vue'
// import TopTags from '../components/TopTags.vue'
import HomeContent from '../components/Feed.vue'
import Ads from '../components/Ads.vue'

export default {
   components: {
      Recommendations,
      // TopTags,
      HomeContent,
      Ads
   }
}
</script>
