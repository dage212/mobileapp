<template>
<div>
     <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;" class="card">
		  <mu-card-header title="Myron Avatar" sub-title="sub title">
		    <mu-avatar slot="avatar">
		      <img src="@/assets/sun.a646a52d.jpg">
		    </mu-avatar>
		  </mu-card-header>
     		<aplayer :audio="audio" :lrcType="3" />
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
	import Vue from 'vue'
	import APlayer from '@moefe/vue-aplayer';
	Vue.use(APlayer, {
	  defaultCover: 'https://github.com/u3u.png',
	  productionTip: true,
	});
	export default {
		data (){
			return {
		      audio: {
		        name: 'ヒビカセ',
		        artist: 'れをる',
		        url: 'http://pdacsgxq7.bkt.clouddn.com/mp3/hibikase.mp3',
		        cover: 'http://p1.music.126.net/cZPx3peGTuWEI_GaZB5CDg==/8892850045794893.jpg?param=300y300', // prettier-ignore
		        lrc: 'http://pdacsgxq7.bkt.clouddn.com/lrc/hibikase.lrc',
		      }
    		}
		}
	}
</script>
