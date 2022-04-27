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
const cookieName="new-tab-blocker";
document.addEventListener('DOMContentLoaded', function()
{
	const closeNewTabsSwitch=document.getElementById("closeNewTabsSwitch");
	if(readCookie(cookieName)=="true")
		closeNewTabsSwitch.checked=true;
	closeNewTabsSwitch.onchange=e=>
	{
		if(closeNewTabsSwitch.checked)
			document.cookie=cookieName+"=true";
		else
			document.cookie=cookieName+"=false";
	};
});