<template>
    <div id="nav" class="nav">
        <ul>
            <li><router-link to="/index" class="navActive">推荐</router-link></li>
            <li><router-link to="/index/playlist">歌单</router-link></li>
            <li><router-link to="#">排行榜</router-link></li>
            <li><router-link to="#">主播电台</router-link></li>
            <li><router-link to="#">歌手</router-link></li>
            <li><router-link to="#">新碟上架</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav{
	    background-color: #C20C0C;
	    text-align:center;
	    font-size: 0.9em;
	    width:100%;
	    height:34px;
	    margin:0 auto;
    }
    .nav ul{
        display:flex;
        font-size: 0.8em;
        justify-content: center;
        margin-left: -140px;
    }
    .nav>ul li{
	    margin-right: 2%;
        line-height: 34px;
    }
    .nav>ul li a{
	    padding: 3px 15px;
        border-radius: 13px;
	    color:#fff;
    }
    .nav>ul li a:hover, .navActive{
        background-color: #9B0909;
    }
</style>