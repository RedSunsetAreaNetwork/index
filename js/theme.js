
// 每次打开网页时调整到预设的主题
var theme_value=getCookie("theme_key");
  if (username == "")
  {
    document.cookie="theme_value=auto";
  }

if (theme_value == "dark") {
    document.getElementById("bodyclass").classList.add("mdui-theme-layout-dark");
}
else if (theme_value == "auto") {
    document.getElementById("bodyclass").classList.add("mdui-theme-layout-auto");
}
else {

};
//主题切换对话框按钮与cookies同步
function radioBoxSwitch() {
    if (theme_value == "bright") {
        document.getElementById("themeBright").element.setAttribute("checked", "");
    }
    else if (theme_value == "dark") {
        document.getElementById("themeDark").element.setAttribute("checked", "");
    }
    else {
        document.getElementById("themeAuto").element.setAttribute("checked", "");  
    };
  };


// 在网页中切换主题

function submitTheme() {
    var theme_value = document.getElementById("themeForm").value
    Cookies.set(theme_key, theme_value, { expires: 180, path: '/' });
    if (theme_value == "dark") {
        document.getElementById("bodyclass").classList.add("mdui-theme-layout-dark");
    }
    else if (theme_value == "auto") {
        document.getElementById("bodyclass").classList.add("mdui-theme-layout-auto");
    }
    else {
        document.getElementById("bodyclass").classList.add("mdui-theme-layout-auto");
    };
}



