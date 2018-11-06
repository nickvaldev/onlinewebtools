 // Append ta similar Apps
 var appInfo = getAppInfo();
 var infos = getSimilarAppsInfos(apps , appInfo);
 appendSimilarApps(infos);
 
 //  Append tin katigoria tou App sto modal
 var currentAppInfo = getCurrentAppInfos(apps , appInfo);     
 document.getElementById('categoryText').innerHTML = currentAppInfo[0].category;
 
 appendNavMenu('appendNavMenu');
 appendSubMenu();