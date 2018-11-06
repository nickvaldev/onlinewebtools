// FUNCTIONS

function navMenuHref() {
  let df = document.createDocumentFragment();
  let p = document.createElement('p');
  p.textContent = 'Δεν υπάρχουν άλλες εφαρμογές σε αυτή τη κατηγορία';
  df.appendChild(p);
  document.getElementById('menua0').appendChild(df);  
}

function getAppInfo() {
  var appInfo = window.location.pathname;
appInfo = appInfo.substring(0, appInfo.indexOf('.'));
appInfo = appInfo.substr(appInfo.lastIndexOf("/")+1);
appInfo = appInfo.split('_');
return appInfo;
}

function ObjectLength( object ) {
  var length = 0;
  for( var key in object ) {
      if( object.hasOwnProperty(key) ) {
          ++length;
      }
  }
  return length;
};

function getCurrentAppInfos(apps , appInfo) {
  var infos = [];
  
  for (let i = 0; i < ObjectLength(apps); i++) {
    if ( apps[i].appNum == appInfo[0] )  {
      infos.push(apps[i]);   
    }
  
  }
  return infos;
}


function getSimilarAppsInfos(apps , appInfo) {
  var infos = [];
 
  for (let i = 0; i < ObjectLength(apps); i++) {
    if ( (apps[i].categoryClass == appInfo[1]) && ( apps[i].appNum != appInfo[0]) )  {
      infos.push(apps[i]);
    }
  
  }
  if (infos.length == 0) {
    return false;
  }
  return infos;
}

function appendSimilarApps(infos) {
  if (infos) {
    for (let i = 0; i < infos.length; i++) {
      let df = document.createDocumentFragment();
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.className = 'list-group-item';
        a.textContent = infos[i].info;
        a.href = infos[i].href;
        df.appendChild(li);
        li.appendChild(a);
        document.getElementById('similarAppsLIst').appendChild(df);
    }
  } else {
    let df = document.createDocumentFragment();
     let p = document.createElement('p');
     p.textContent = 'Δεν υπάρχουν άλλες εφαρμογές σε αυτή τη κατηγορία';
     df.appendChild(p);
     document.getElementById('similarAppsLIst').appendChild(df);
  } 
}

function appendCategoriesNav(id) {
  if (categories) {
    for (let i = 0; i < categories.length; i++) {
      let df = document.createDocumentFragment();
        let li = document.createElement('li');
        let sup = document.createElement('sup');
        li.setAttribute("data-filter", '.'+categories[i].class);
        sup.className = 'count';
        li.textContent = categories[i].name;
        df.appendChild(li);
        li.appendChild(sup);
        document.getElementById(id).appendChild(df);
    }
  } else {
    let df = document.createDocumentFragment();
     let p = document.createElement('p');
     p.textContent = 'Δεν έχουν οριστεί κατηγορίες';
     df.appendChild(p);
     document.getElementById(id).appendChild(df);
  } 
}

function appendNavMenu(id) {
  if (categories) {
    let dfo = document.createDocumentFragment();
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    nav.className = 'nav';
    ul.className = 'menu';
    ul.id = 'navMenu';
    dfo.appendChild(nav);
    nav.appendChild(ul);
    document.getElementById(id).appendChild(dfo);
    for (let i = 0; i < ObjectLength(categories); i++) {
        let dfi = document.createDocumentFragment();     
        let li = document.createElement('li');
        let a = document.createElement('a');
        let ulSub = document.createElement('ul');
        ulSub.className = 'submenu';
        ulSub.id = 'subMenu' + i;
        a.href = '#';  
        a.textContent = categories[i].name;    
        dfi.appendChild(li);
        li.appendChild(a);
        li.appendChild(ulSub);
        document.getElementById('navMenu').appendChild(dfi);
    }
  } else {
    let df = document.createDocumentFragment();
     let p = document.createElement('p');
     p.textContent = 'Δεν έχουν οριστεί κατηγορίες';
     df.appendChild(p);
     document.getElementById(id).appendChild(df);
  } 
}

function appendSubMenu(){
  let k;
  for (let i = 0; i < ObjectLength(categories); i++) {
    k = 0;
    for (let j = 0; j < ObjectLength(apps); j++) {
      if (apps[j].categoryClass == categories[i].class ) {
        k++;
        let dfis = document.createDocumentFragment();  
        let liSub = document.createElement('li');
        let a = document.createElement('a');         
        a.href = apps[j].href;
        a.textContent = apps[j].info;
        dfis.appendChild(liSub);
        liSub.appendChild(a);
        document.getElementById('subMenu'+i).appendChild(dfis);
      }      
    }  
    if (k == 0) {
      let dfis = document.createDocumentFragment();
      let liSub = document.createElement('li');
      liSub.style.listStyle = 'none';
      liSub.textContent = 'Δεν υπάρχουν εφαρμογές σε αυτή τη κατηγορία';
      dfis.appendChild(liSub);
      document.getElementById('subMenu'+i).appendChild(dfis);
    }     
  }
}

function appendApps() {
  for (var i = 0; i < ObjectLength(apps); i++) {
    var appNum = apps[i].appNum;
    var info = apps[i].info;
    var category = apps[i].category;
    var categoryClass = apps[i].categoryClass;
    var photoUrl = apps[i].photoUrl;
    var href = apps[i].href;
    var lightContent = apps[i].lightContent;

    var tmpl = document.getElementById('appCards').content.cloneNode(true);
    tmpl.getElementById('tmpl_category').className = 'entry ' + categoryClass;
    if (lightContent) {
    tmpl.getElementById('tmplLight').className = "overlay--caption bottom light--content";
    }
    tmpl.getElementById('tmpl_a').href = href;
    tmpl.getElementById('tmpl_bgphoto').style.backgroundImage = "url('" + photoUrl + "')";
    tmpl.getElementById('tmpl_categoryText').innerHTML = category;
    tmpl.getElementById('tmpl_info').innerHTML = info;
    document.getElementById('tmpl_append').appendChild(tmpl);
    }
}