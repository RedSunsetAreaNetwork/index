/*判断是否处于深色模式*/
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //Do some thing
    //测试用 console.log('点击了元素');
    //js添加指定id的class
    document.getElementById("setdarkmodeclass").classList.add("mdui-theme-layout-dark");
    document.getElementById("left-drawer").classList.add("mdui-theme-layout-dark");
    //js删除指定id的class
    document.getElementById("setdarkmodeclass2").classList.remove("mdui-color-grey-100");
    document.getElementById("setdarkmodeclass2").classList.add("mdui-color-grey-900");
    document.getElementById("left-drawer").classList.remove("mdui-color-white");
    document.getElementById("setdarkmodesetting").classList.remove("setdarkmodesetting");
    // document.getElementById("indexPic").style.background = "url('./pic/indexpic3d')";

}
