<template>
  <div class="home">
  	<mu-container>
  		<router-view/>	
	</mu-container>
	<mu-container style="width:100%;" class="home_bottom_menu">
	  <mu-bottom-nav :value.sync="shift" shift color="red" @change="navChange">
	    <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video" to="/home/index">
	    </mu-bottom-nav-item>
	    <mu-bottom-nav-item value="music" title="Music" icon="music_note" to="/home/music">
      </mu-bottom-nav-item>
	    <mu-bottom-nav-item value="upload" title="Upload" icon="books" to="/home/upload"></mu-bottom-nav-item >
	    <mu-bottom-nav-item value="pictures" title="我的" icon="photo" to="/home/me"></mu-bottom-nav-item>
	  </mu-bottom-nav>
	</mu-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
  	return {
  		shift: 'movies',
  		playerOptions: {
          // videojs options
          width:400,
          muted: true,
          fluid:true,
          language: 'en',
          aspectRatio:'16:9',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          controlBar: {
	          timeDivider: true,
	          durationDisplay: true,
	          remainingTimeDisplay: false,
	          fullscreenToggle: true  //全屏按钮
          },
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "/static/images/author.jpg",
        }
  	}
  },
  computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      navChange(val){
      	console.log(val)
      }, 	
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      onPlayerTimeupdate(){},
      onPlayerPlaying(){},
      onPlayerCanplay(){},
      onPlayerCanplaythrough(){},
	  onPlayerLoadeddata(){},

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
}
</script>
<style lang="stylus" type="text/stylus" scoped>
.home
  position relative
.home_bottom_menu
  position fixed
  left 0px
  right 0px
  bottom 0px
</style>
