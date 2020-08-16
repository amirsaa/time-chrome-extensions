var elem = document.createElement('div');
elem.className = 'persin-timebox';
document.body.appendChild(elem);

var style = document.createElement('style');
style.innerHTML = `
  a {
  color: red !important;
  }
  `;
document.head.appendChild(style);


var a = new Date().toLocaleString('fa-IR');

elem.innerText = a;
elem.style = 'position: fixed; color: #fff; font-size: 36px; left: 10px; top: 10px; padding: 10px; background: rgba(0, 0, 0, 0.5); border - radius: 5px;'

setInterval(() => {
     var a = new Date().toLocaleString('fa-IR');
    elem.innerText = a;
}, 1000);



if (false) {
    // زمانی که افزونه نصب شد
    chrome.runtime.onInstalled.addListener(function () {
        console.log('test')
    });


    // دسترسی به تمام تب ها
    chrome.tabs.getAllInWindow(null, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            chrome.tabs.sendRequest(tabs[i].id, { action: "xxx" });

        }
        console.log(tabs.length) // تعداد تب های فعال
    });

    // وقتی یک تب باز شد
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

        var nowTime = document.createElement('div')
        nowTime.classList = "gb_f gb_g"
        nowTime.innerText = new Date().toLocaleString('fa-IR');

        var topbar = document.querySelector('.gb_be.gb_g.gb_Ag.gb_rg');

        setInterval(() => {
            if (topbar) {
                topbar.appendChild(nowTime)
            }
        }, 1000)

        // وقتی فرایند بازشدن تب کامل شد
        if (tab.status == "complete") {
            var ttt = document.querySelector('.gb_be.gb_g.gb_Ag.gb_rg');

            console.log(tab)
        }
    });

}