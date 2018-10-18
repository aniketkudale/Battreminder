function reminder(info) {
    let level = info.level * 100;
    chrome.browserAction.setBadgeBackgroundColor({color: "#112339"});
    chrome.browserAction.setBadgeText({text: '' + level + '%'});
    if (info.level == 0.99 && info.charging == true) {
        var audio = new Audio('oneUp.mp3');
        audio.play();
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'logo.png',
            title: 'Your battery is almost full!',
            message: 'Its time to disconnect the charger & save some electricity!',
            requireInteraction: true,
            priority: 0
        });
    }
    if (info.level > 0.99 && info.charging == true) {
        var audio = new Audio('oneUp.mp3');
        audio.play();
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'logo.png',
            title: 'Your battery is full!',
            message: 'Its time to disconnect the charger & save some electricity!',
            requireInteraction: true,
            priority: 0
        });
    }
}

navigator.getBattery().then((info) => {
   reminder(info);   
   info.onlevelchange = () => { reminder(info); };
});