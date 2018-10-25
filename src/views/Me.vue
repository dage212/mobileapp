<template>
<mu-container>
<mu-paper :z-depth="1" class="demo-list-wrap">
    <mu-row justify-content="center" class="avatar_row">
        <mu-avatar :size="60">
          <img src="@/assets/uicon.jpg">
        </mu-avatar>
    </mu-row>
</mu-paper>

<mu-paper :z-depth="1" class="demo-list-wrap">
  <mu-list>
    <mu-list-item button :ripple="false" to="/login">
      <mu-list-item-action>
        <mu-icon value="inbox"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title >登录</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button :ripple="false" to="/register">
      <mu-list-item-action>
        <mu-icon value="grade"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title >注册</mu-list-item-title>
    </mu-list-item>
    <mu-divider></mu-divider>
    <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="send"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title @click="exit">退出</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button :ripple="false">
      <mu-list-item-action>
        <mu-icon value="drafts"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>设置快捷方式</mu-list-item-title>
    </mu-list-item>
  </mu-list>
</mu-paper>
</mu-container>
</template>
<script>

export default{
  data () {
    return {
      size: 60
    }
  },
  method:{
  	login(){
  		this.router.push('/login')
  	},
  	register(){
  		this.router.push('/register')
  	},
  	exit(){

  	}
  }
}
</script>
<style lang="stylus" type="text/stylus">
.avatar_row
    padding-top 20px
    padding-bottom 20px
.demo-list-wrap
    width 100%
    max-width 360px
</style>
