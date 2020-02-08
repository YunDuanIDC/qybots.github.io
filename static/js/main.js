layui.use(['layer','element'], function () {
var $ = layui.jquery,
layer = layui.layer,
element = layui.element;

layer.load(1,{shade:0.1});
window.onload = function(){
    layer.closeAll('loading'); //关闭加载层(加载时显示background_color)
}

$('#bbs').click(function(){
    //window.location.href = 'http://qyue.cc';
    layer.open({
    type: 1,
    anim: 1,
    closeBtn: 0,
    area: ['350px', '200px'],
    title: '提示',
    content: '<div style="padding:20px;">社区维护中!</div>',
    btn: '我知道了'
    });
    
});
$('#doc').click(function(){
    layer.msg('暂无开发文档!', {icon: 7});
});
$('#log').click(function(){});
/* Download */
$('#download_Android').click(function(){
    layer.tab({
    area: ['350px', '130px'],
    tab: [{
        title: 'Android', 
        content: '<p style="text-align: center"><br /><a href="https://gitee.com/XTYUNS/QYBot/attach_files/331976/download" class="layui-btn layui-btn-primary">下载单Q版</a></p>'
    }, {
        title: 'Android Batch', 
        content: '<p style="text-align: center"><br /><a href="https://gitee.com/XTYUNS/QYBot/attach_files/331978/download" class="layui-btn layui-btn-radius layui-btn-primary">下载多Q版</a></p>'
    }]
    });
});
$('#download_PC').click(function(){
    layer.msg("即将下载PC框架...");
});
$('#download_SDK').click(function(){
    layer.msg("即将下载SDK文件...");
});
/* End Download */
$('#Agreement').click(function(){
    layer.msg("请参照《中华人民共和国宪法》",{anim: 6});
});

});