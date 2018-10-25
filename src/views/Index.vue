<template>
	<div>
		<mu-card style="width: 100%; max-width: 375px; margin: 0 auto;" class="card">
		  <mu-card-header title="Myron Avatar" sub-title="sub title">
			<mu-avatar slot="avatar">
			  <img src="@/assets/sun.a646a52d.jpg">
			</mu-avatar>
		  </mu-card-header>
		  <mu-card-media title="Image Title" sub-title="Image Sub Title">
			<video-player  class="video-player-box"
						 ref="videoPlayer"
						 :options="playerOptions"
						 :playsinline="true"
						 customEventName="customstatechangedeventname"
				
						 @play="onPlayerPlay($event)"
						 @pause="onPlayerPause($event)"
						 @ended="onPlayerEnded($event)"
						 @waiting="onPlayerWaiting($event)"
						 @playing="onPlayerPlaying($event)"
						 @loadeddata="onPlayerLoadeddata($event)"
						 @timeupdate="onPlayerTimeupdate($event)"
						 @canplay="onPlayerCanplay($event)"
						 @canplaythrough="onPlayerCanplaythrough($event)"

						 @statechanged="playerStateChanged($event)"
						 @ready="playerReadied">
			</video-player>
		  </mu-card-media>
		  <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
		  <mu-card-text>
			散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
			调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
			似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
			找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
		  </mu-card-text>
		  <mu-card-actions>
			<mu-button flat>Action 1</mu-button>
			<mu-button flat>Action 2</mu-button>
		  </mu-card-actions>
		</mu-card>
		<mu-card style="width: 100%; max-width: 375px; margin: 0 auto;" class="card">
		  <mu-card-header title="Myron Avatar" sub-title="sub title">
			<mu-avatar slot="avatar">
			  <img src="@/assets/sun.a646a52d.jpg">
			</mu-avatar>
		  </mu-card-header>
		  <mu-card-media title="Image Title" sub-title="Image Sub Title">
			<video-player  class="video-player-box"
						 ref="videoPlayer"
						 :options="playerOptions"
						 :playsinline="true"
						 customEventName="customstatechangedeventname"
				
						 @play="onPlayerPlay($event)"
						 @pause="onPlayerPause($event)"
						 <!-- @ended="onPlayerEnded($event)" -->
						 @waiting="onPlayerWaiting($event)"
						 @playing="onPlayerPlaying($event)"
						 @loadeddata="onPlayerLoadeddata($event)"
						 @timeupdate="onPlayerTimeupdate($event)"
						 @canplay="onPlayerCanplay($event)"
						 @canplaythrough="onPlayerCanplaythrough($event)"

						 @statechanged="playerStateChanged($event)"
						 @ready="playerReadied">
			</video-player>
		  </mu-card-media>
		  <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
		  <mu-card-text>
			散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
			调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
			似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
			找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
		  </mu-card-text>
		  <mu-card-actions>
			<mu-button flat>Action 1</mu-button>
			<mu-button flat>Action 2</mu-button>
		  </mu-card-actions>
		</mu-card>
	</div>
	

</template>
<script>
	export default{
		data(){
			return {
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
		methods: {
		
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
	.video-player-box
		>>>.vjs-big-play-button
			left 50%
			margin-left -43px
			top 50%
			margin-top -20px
	.card
		margin-bottom 20px!important		
</style>