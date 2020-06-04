<template>
    <div>
        <div id="footer" class="footer">
            <ul class="footer_info">
                <li class="download">
                    <h3>下载网易云音乐客户端</h3>
                    <ul class="download_list">
                        <li class="dl_item">
                            <i class="icon_pc"></i>
                            <p><router-link to="">PC版</router-link></p>
                        </li>
                        <li class="dl_item">
                            <i class="icon_mac"></i>
                            <p><router-link to="">Mac版</router-link></p>
                        </li>
                        <li class="dl_item">
                            <i class="icon_andr"></i>
                            <p><router-link to="">Android版</router-link></p>
                        </li>
                        <li class="dl_item">
                            <i class="icon_iph"></i>
                            <p><router-link to="">iPhone版</router-link></p>
                        </li>
                    </ul>
                </li>
                <li class="products">
                    <h3>特色产品</h3>
                    <ul class="products_list">
                        <li class='prod_item'>
                            <i class="icon_k"></i>
                            <p><router-link to="">天天k歌</router-link></p>
                        </li>
                        <li class='prod_item'>
                            <i class="icon_sp"></i>
                            <p><router-link to="">SUPER SOUND</router-link></p>
                        </li>
                        <li class='prod_item'>
                            <i class="icon_qPlay"></i>
                            <p><router-link to="">Qplay</router-link></p>
                        </li>
                        <li class='prod_item'>
                            <p><router-link to="">车载互联</router-link></p>
                        </li>
                        <li class='prod_item'>
                            <p><router-link to="">网易演唱会</router-link></p>
                        </li>
                    </ul>
                </li>
                <li class="links">
                    <h3>合作链接</h3>
                    <ul class='links_list'>
                        <li class="lk_item">
                            <router-link to="">CJ E&M</router-link>
                            </li>
                        <li class="lk_item">
                            <router-link to="">网易视频</router-link>
                        </li>
                        <li class="lk_item">
                            <router-link to="">手机空间</router-link>
                        </li>
                        <li class="lk_item">
                            <router-link to="">阴阳师</router-link>
                        </li>
                        <li class="lk_item">
                            <router-link to="">网页社交广告</router-link>
                        </li>
                        <li class="lk_item">
                             <router-link to="">电脑管家</router-link>
                        </li>
                        <li class="lk_item">
                            <router-link to="">网易浏览器</router-link>
                        </li>
                        <li class="lk_item">
                            <router-link to="">炉石传说</router-link>
                        </li>
                        <li class="lk_item">
                             <router-link to="">网易云</router-link>
                        </li>
                        <li class="lk_item">
                            <router-link to="">初音速</router-link>
                        </li>
                        <li class="lk_item">
                            <router-link to="">风暴英雄</router-link>
                        </li>
                        <li class="lk_item">
                             <router-link to="">守望先锋</router-link>
                        </li>
                    </ul>
                </li>
                <li class="platform">
                    <h3>开放平台</h3>
                    <ul class="plats_list">
                         <li class='plat_item'>
                            <p>
                                <router-link to="">独立音乐人</router-link>
                            </p>
                        </li>
                        <li class='plat_item'>
                            <p>
                                <router-link to="">音乐专栏</router-link>
                            </p>
                        </li>
                        <li class='plat_item'>
                            <p>
                                <router-link to="">上传视频</router-link>
                            </p>
                        </li>
                        <li class='plat_item'>
                            <p>
                                <router-link to="">上传音频</router-link>
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        <div class="copyright">
            <p>
                <router-link to="" title="关于网易">关于网易</router-link> |
                <router-link to="" title="About Netease">About Netease</router-link> |
                <router-link to="" title="服务条款">服务条款</router-link> |
                <router-link to="" title="用户服务协议">用户服务协议</router-link> |
                <router-link to="" title="隐私政策">隐私政策</router-link> |
                <router-link to="" title="权利声明">权利声明</router-link> |
                <router-link to="" title="广告服务 ">广告服务</router-link> |
                <router-link to="" title="网易招聘 ">网易招聘</router-link> |
                <router-link to="" title="客服中心 ">客服中心</router-link> |
                <router-link to="" title="网站导航 ">网站导航</router-link>
            </p>
            <p>
                Copyright © 1997 -${new Date().getFullYear()} Netease.
                <router-link to="" title="All Rights Reserved.">All Rights Reserved.</router-link>
            </p>
            <p>
                网易公司
                <router-link to="" title="版权所有">版权所有</router-link>
                <router-link to="" title="网易网络文化经营许可证">网易网络文化经营许可证</router-link>
            </p>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.footer, .footer a{
    color:#767676;
    font-size: 0.95em;
}
.footer h3{
    font-weight: normal;
    font-size: 0.95em;
    text-align: left;
}
.footer{
    background:#333;
    width:100%;
    margin:0 auto;
    border-bottom: 1px solid #333;
    padding:0 30px;
}

.footer a:hover{
    color:#f46262;
}
.footer .footer_info{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.footer .download,
.footer .products,
.footer .links{
    margin-top: 50px;
    width: 30%;
    height: 200px;
}
.footer .download{
    margin-right: 100px;
}
.footer .download_list,
.footer .products_list,
.footer .links_list{
    display:flex;
    flex-wrap: wrap;
    text-align: center;
   
}
.footer .download_list .dl_item,
.footer .products_list .prod_item{
    margin-right: 29px;
    cursor: pointer;
}
.footer .download_list .dl_item>p,
.footer .products_list .prod_item>p{
    margin-top:15px;
}
.footer .links_list .lk_item{
    width: 30%;
    text-align: left;
}
.footer .platform{
    width: 100%;
}
.footer .plats_list{
    display: flex;
}
.footer .plat_item>p{
    margin-right: 30px;
}
.footer .copyright{
    margin: 40px 0 20px;
    text-align: center;
}
.footer .copyright>*{
    margin:10px auto;

}
.icon_pc, 
.icon_mac, 
.icon_andr, 
.icon_iph,
.icon_k,
.icon_sp,
.icon_qPlay{
    display: block;
    width:48px;
    height: 48px;
    background:url(../../static/images/icons/footer.png) no-repeat;
    margin:0 auto;
} 
.icon_pc{
    background-position:-2px 0;
    width: 40px;
}
.icon_mac{
    background-position:-92px 0;
} 
.icon_andr{
    background-position:-190px 0;
    width: 38px;
} 
.icon_iph{
    background-position:-279px 0;
    width: 34px;
}
.icon_k{
    background-position:-370px 0;
    width: 40px;
}
.icon_sp{
    background-position:-463px 0;
    width: 35px;
}
.icon_qPlay{
    background-position:-561px 0;
    width: 42px;
}

.icon_pc:hover{
    background-position:-2px -49px;
}
.icon_mac:hover{
    background-position:-92px -49px;
}
.icon_andr:hover{
    background-position:-190px -49px;
}
.icon_iph:hover{
    background-position:-279px -47px;
}
.icon_k:hover{
    background-position:-370px -49px;
}
.icon_sp:hover{
    background-position:-462px -47px;
}
.icon_qPlay:hover{
    background-position:-561px -49px;
}
</style>