const readCookie=name=>
{
	if(document.cookie.includes(name+"="))
	{
		var tmp=document.cookie.substring(document.cookie.indexOf(name+"=")+1+name.length);
		if(tmp.includes(";"))
			return tmp.substring(0,tmp.indexOf(";"));
		return tmp;
	}
	return null;
};
chrome.tabs.onCreated.addListener(newTab=>
{
	if(readCookie("new-tab-blocker")=="true")
	{
		chrome.tabs.get(newTab.id,tab=>
		{
			if(!tab.pendingUrl.startsWith("chrome://startpageshared"))
				chrome.tabs.remove(newTab.id);
		});
	}
});