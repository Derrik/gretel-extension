chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    // console.log("tab update complete");
    // console.log(tabId);
    // console.log(changeInfo);
    // console.log(tab);
  }
})

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    //var url = tabs[0].url;
    //console.log(url);
});
