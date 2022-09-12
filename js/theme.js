//工具
/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/document.cookie
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path], domain)
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

var docCookies = {
    getItem: function (sKey) {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
      var sExpires = "";
      if (vEnd) {
        switch (vEnd.constructor) {
          case Number:
            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
            break;
          case String:
            sExpires = "; expires=" + vEnd;
            break;
          case Date:
            sExpires = "; expires=" + vEnd.toUTCString();
            break;
        }
      }
      document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
      return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
      if (!sKey || !this.hasItem(sKey)) { return false; }
      document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
      return true;
    },
    hasItem: function (sKey) {
      return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: /* optional method: you can safely remove it! */ function () {
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
      for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
      return aKeys;
    }
  };


// 每次打开网页时调整到预设的主题
// function getCookie(name) {
//     var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
//     if (arr != null) return unescape(arr[2]);
//     return null;
//   }

if (docCookies.hasItem("theme_key") == false) {
    document.cookie = "theme_key=auto";
    var theme_value = "auto";
};
var theme_value = docCookies.getItem("theme_key");
if (theme_value == "dark") {
    document.getElementById("bodyclass").setAttribute("class", "mdui-appbar-with-toolbar mdui-theme-primary-pink mdui-theme-accent-pink mdui-theme-layout-dark");
}
else if (theme_value == "auto") {
    document.getElementById("bodyclass").setAttribute("class", "mdui-appbar-with-toolbar mdui-theme-primary-pink mdui-theme-accent-pink mdui-theme-layout-auto");
}
else {
    document.getElementById("bodyclass").setAttribute("class", "mdui-appbar-with-toolbar mdui-theme-primary-pink mdui-theme-accent-pink");
};
//主题切换对话框按钮与cookies同步
function radioBoxSwitch() {
    if (theme_value == "bright") {
        document.getElementById("themeBright").setAttribute("checked", "");
    }
    else if (theme_value == "dark") {
        document.getElementById("themeDark").setAttribute("checked", "");
    }
    else {
        document.getElementById("themeAuto").setAttribute("checked", "");
    };
};


// 在网页中切换主题

function submitTheme() {
    // 获取选中的radio值
    var radios = document.getElementsByName('themeInput');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			// 弹出选中值
			var theme_value = (radios[i].value);
			// 选中后退出循环
			break;
		}
	}
    
    docCookies.setItem("theme_key", theme_value)

    if (theme_value == "dark") {
        document.getElementById("bodyclass").setAttribute("class", "mdui-appbar-with-toolbar mdui-theme-primary-pink mdui-theme-accent-pink mdui-theme-layout-dark");
    }
    else if (theme_value == "auto") {
        document.getElementById("bodyclass").setAttribute("class", "mdui-appbar-with-toolbar mdui-theme-primary-pink mdui-theme-accent-pink mdui-theme-layout-auto");
    }
    else {
        document.getElementById("bodyclass").setAttribute("class", "mdui-appbar-with-toolbar mdui-theme-primary-pink mdui-theme-accent-pink");
    };
}



