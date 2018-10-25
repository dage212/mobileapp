<template>
<div class="box">
    <baidu-map :center="center" :zoom="zoom" class="map"></baidu-map>
</div>
</template>
<script>
// import {BaiduMap} from 'vue-baidu-map/components/map/Map.vue'
export default{
  data () {
    return {
        center: {lng: '112.558696', lat: '37.877674'},
        zoom: 13
    }
  },
  // components: {
  //   BaiduMap
  // },
  method: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    uploadVideo (e) {
      var file = e.target.files[0];
      var formdata = new FormData();
      formdata.append('fileStream', file);
      console.log('正在上传视频...')
      // this.doUpload(formdata);
    },
    doUpload (formdata) {
    axios.post('/teacher/doUpload', formdata).then(res => {
        if (res.data.success) {
            console.log('上传成功');
        } else {
            console.log('上传失败');
        }
    }).catch(err => {
        console.log(err);
    })
        }
    }
	}
</script>
<style lang="stylus" type="text/stylus">
    .box
        width 100%
        height 100%
        position relative
    .map            
        position absolute
        bottom 50px
        top 0px
        left 0px
        right 0px
</style>
