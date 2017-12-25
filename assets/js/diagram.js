/*-------------------------------------------------*/
/* =  Diagram */
/*-------------------------------------------------*/

!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var f in C)if(C.hasOwnProperty(f)){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?w.className.baseVal=n:w.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?l(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=a(x?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var s,i,f,l,u="modernizr",p=a("div"),c=d();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=o?o[r]:u+(r+1),p.appendChild(f);return s=a("style"),s.type="text/css",s.id="s"+u,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),i=t(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=l,w.offsetHeight):p.parentNode.removeChild(p),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,s){function l(){p&&(delete z.style,delete z.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan"];!z.style;)p=!0,z.modElem=a(y.shift()),z.style=z.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=z.style[v],i(v,"-")&&(v=f(v)),z.style[v]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{z.style[v]=o}catch(g){}if(z.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=[],_={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var w=n.documentElement,x="svg"===w.nodeName.toLowerCase(),S="Moz O ms Webkit",b=_._config.usePrefixes?S.split(" "):[];_._cssomPrefixes=b;var E=_._config.usePrefixes?S.toLowerCase().split(" "):[];_._domPrefixes=E;var P={elem:a("modernizr")};Modernizr._q.push(function(){delete P.elem});var z={style:P.elem.style};Modernizr._q.unshift(function(){delete z.style}),_.testAllProps=h,_.testAllProps=y,Modernizr.addTest("csstransitions",y("transition","all",!0));var N=function(n){var r,o=prefixes.length,s=e.CSSRule;if("undefined"==typeof s)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+n;for(var i=0;o>i;i++){var a=prefixes[i],f=a.toUpperCase()+"_"+r;if(f in s)return"@-"+a.toLowerCase()+"-"+n}return!1};_.atRule=N;_.prefixed=function(e,n,t){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=f(e)),n?h(e,n,t):h(e,"pfx"))};o(),s(g),delete _.addTest,delete _.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){var n=t(s,e)?c:a;n(s,e)}var t,a,c;"classList"in document.documentElement?(t=function(s,e){return s.classList.contains(e)},a=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(t=function(s,n){return e(n).test(s.className)},a=function(s,e){t(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var o={hasClass:t,addClass:a,removeClass:c,toggleClass:n,has:t,add:a,remove:c,toggle:n};"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o:s.classie=o}(window);

(function(window) {

	'use strict';

	// helper functions
	// from https://davidwalsh.name/vendor-prefix
	var prefix = (function () {
		var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];

		return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		};
	})();

	// vars & stuff

    var support = {transitions : Modernizr.csstransitions},
		transEndEventNames = {'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend'},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		onEndTransition = function(el, callback, propTest) {
			var onEndCallbackFn = function( ev ) {
				if( support.transitions ) {
					if( ev.target != this || propTest && ev.propertyName !== propTest && ev.propertyName !== prefix.css + propTest ) return;
					this.removeEventListener( transEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(this); }
			};
			if( support.transitions ) {
				el.addEventListener( transEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		},
		// the diag element
		diag = document.querySelector('.diag'),
		// diag´s levels wrapper
		diagLevelsEl = diag.querySelector('.levels'),
		// diag´s levels
		diagLevels = [].slice.call(diagLevelsEl.querySelectorAll('.level')),
		// total levels
		diagLevelsTotal = diagLevels.length,
		// selected level position
		selectedLevel,
		// navigation element wrapper
		DiagNav = document.querySelector('.DiagNav'),
		// show all diag´s levels ctrl
		allLevelsCtrl = DiagNav.querySelector('.DiagNav__button--all-levels'),
		// levels navigation up/down ctrls
		levelUpCtrl = DiagNav.querySelector('.DiagNav__button--up'),
		levelDownCtrl = DiagNav.querySelector('.DiagNav__button--down'),
		// pins
		pins = [].slice.call(diagLevelsEl.querySelectorAll('.pin')),
		// content element
		contentEl = document.querySelector('.contentdiag'),

		// check if a content item is opened
		isOpenContentArea,
		// check if currently animating/navigating
		isNavigating,
		// check if all levels are shown or if one level is shown (expanded)
		isExpanded,

		spaceref;

	function init() {
		// init/bind events
		initEvents();
	}
	//Initialize/Bind events fn
	function initEvents() {
		// click on a diag´s level
		diagLevels.forEach(function(level, pos) {
			level.addEventListener('click', function() {
				// shows this level
				showLevel(pos+1);
			});
		});

		// click on the show diag´s levels ctrl
		allLevelsCtrl.addEventListener('click', function() {
			// shows all levels
			showAllLevels();
		});

		// navigating through the levels
		levelUpCtrl.addEventListener('click', function() { navigate('Down'); });
		levelDownCtrl.addEventListener('click', function() { navigate('Up'); });



		// hovering a pin / clicking a pin
		pins.forEach(function(pin) {
			var contentItem = contentEl.querySelector('.content__item[data-space="' + pin.getAttribute('data-space') + '"]');

			pin.addEventListener('mouseenter', function(ev) {
				ev.preventDefault();
				// open content for this pin
				openContent(pin.getAttribute('data-space'));
			});

			pin.addEventListener('mouseleave', function() {
				closeContentArea();
			});
		});

		// clicking on a listed space: open level - shows space
		spaces.forEach(function(space) {
			var spaceItem = space.parentNode,
				level = spaceItem.getAttribute('data-level'),
				spacerefval = spaceItem.getAttribute('data-space');


		});


	}

	//Opens a level. The current level moves to the center while the other ones move away.
	function showLevel(level) {
		if( isExpanded ) {
			return false;
		}

		// update selected level val
		selectedLevel = level;
		// control navigation controls state
		setNavigationState();
		classie.add(diagLevelsEl, 'levels--selected-' + selectedLevel);
		// the level element
		var levelEl = diagLevels[selectedLevel - 1];
		classie.add(levelEl, 'level--current');
		onEndTransition(levelEl, function() {
			classie.add(diagLevelsEl, 'levels--open');
			// show level pins
			showPins();
			isExpanded = true;
		}, 'transform');

		// show diag nav ctrls
		showDiagNav();
	}
	//Shows all diag´s levels
	function showAllLevels() {
		if( isNavigating || !isExpanded ) {
			return false;
		}
		isExpanded = false;
		classie.remove(diagLevels[selectedLevel - 1], 'level--current');
		classie.remove(diagLevelsEl, 'levels--selected-' + selectedLevel);
		classie.remove(diagLevelsEl, 'levels--open');
		// hide level pins
		removePins();
		// hide diag nav ctrls
		hideDiagNav();
		closeContentArea();
	}
	// Shows the level´s pins
	function showPins(levelEl) {
		var levelEl = levelEl || diagLevels[selectedLevel - 1];
		classie.add(levelEl.querySelector('.level__pins'), 'level__pins--active');
	}
	// Removes the level´s pins
	function removePins(levelEl) {
		var levelEl = levelEl || diagLevels[selectedLevel - 1];
		classie.remove(levelEl.querySelector('.level__pins'), 'level__pins--active');
	}
	 //Show the navigation ctrls
	function showDiagNav() {
		classie.remove(DiagNav, 'DiagNav--hidden');
	}
	//Hide the navigation ctrls
	function hideDiagNav() {
		classie.add(DiagNav, 'DiagNav--hidden');
	}
	//Navigate through the diag´s levels
	function navigate(direction) {
		isNavigating = true;

		var prevSelectedLevel = selectedLevel;

		// current level
		var currentLevel = diagLevels[prevSelectedLevel-1];

		if( direction === 'Up' && prevSelectedLevel > 1 ) {
			--selectedLevel;
		}
		else if( direction === 'Down' && prevSelectedLevel < diagLevelsTotal ) {
			++selectedLevel;
		}
		else {
			isNavigating = false;
			return false;
		}

		// control navigation controls state (enabled/disabled)
		setNavigationState();
		// transition direction class
		classie.add(currentLevel, 'level--moveOut' + direction);
		// next level element
		var nextLevel = diagLevels[selectedLevel-1]
		// ..becomes the current one
		classie.add(nextLevel, 'level--current');

		// when the transition ends..
		onEndTransition(currentLevel, function() {
			classie.remove(currentLevel, 'level--moveOut' + direction);
			// solves rendering bug for the SVG opacity-fill property
			setTimeout(function() {classie.remove(currentLevel, 'level--current');}, 60);

			classie.remove(diagLevelsEl, 'levels--selected-' + prevSelectedLevel);
			classie.add(diagLevelsEl, 'levels--selected-' + selectedLevel);

			// show the current level´s pins
			showPins();

			isNavigating = false;
		});


		// hide the previous level´s pins
		removePins(currentLevel);
	}

	//Control navigation ctrls state. Add disable class to the respective ctrl when the current level is either the first or the last.
	function setNavigationState() {
		if( selectedLevel == 1 ) {
			classie.add(levelDownCtrl, 'boxbutton--disabled');
		}
		else {
			classie.remove(levelDownCtrl, 'boxbutton--disabled');
		}

		if( selectedLevel == diagLevelsTotal ) {
			classie.add(levelUpCtrl, 'boxbutton--disabled');
		}
		else {
			classie.remove(levelUpCtrl, 'boxbutton--disabled');
		}
	}

	/**
	 * Opens/Reveals a content item.
	 */
	function openContent(spacerefval) {
		// if one already shown:
		if( isOpenContentArea ) {
			hideSpace();
			spaceref = spacerefval;
			showSpace();
		}
		else {
			spaceref = spacerefval;
			openContentArea();
		}

		// remove class selected (if any) from current space
		var activeSpaceArea = diagLevels[selectedLevel - 1].querySelector('svg > .map__space--selected');
		if( activeSpaceArea ) {
			classie.remove(activeSpaceArea, 'map__space--selected');
		}
		// svg area gets selected
		classie.add(diagLevels[selectedLevel - 1].querySelector('svg > .map__space[data-space="' + spaceref + '"]'), 'map__space--selected');
	}

	//Opens the content area.
	function openContentArea() {
		isOpenContentArea = true;
		// shows space
		showSpace(true);
		// resize diag area
		classie.add(diag, 'diag--content-open');

	}

	/**
	 * Shows a space.
	 */
	function showSpace(sliding) {
		// the content item
		var contentItem = contentEl.querySelector('.content__item[data-space="' + spaceref + '"]');
		// show content
		classie.add(contentItem, 'content__item--current');
		if( sliding ) {
			onEndTransition(contentItem, function() {
				classie.add(contentEl, 'content--open');
			});
		}
		// map pin gets selected
		classie.add(diagLevelsEl.querySelector('.pin[data-space="' + spaceref + '"]'), 'pin--active');
	}

	/**
	 * Closes the content area.
	 */
	function closeContentArea() {
		classie.remove(contentEl, 'content--open');
		// close current space
		hideSpace();
		// resize diag area
		classie.remove(diag, 'diag--content-open');
		// enable diag nav ctrls
		if( isExpanded ) {
			setNavigationState();
		}
		isOpenContentArea = false;
	}

	/**
	 * Hides a space.
	 */
	function hideSpace() {
		// the content item
		var contentItem = contentEl.querySelector('.content__item[data-space="' + spaceref + '"]');
		// hide content
		classie.remove(contentItem, 'content__item--hover');
		classie.remove(contentItem, 'content__item--current');
		// map pin gets unselected
		classie.remove(diagLevelsEl.querySelector('.pin[data-space="' + spaceref + '"]'), 'pin--active');
		// remove class active (if any) from current list item

		// remove class selected (if any) from current space
		var activeSpaceArea = diagLevels[selectedLevel - 1].querySelector('svg > .map__space--selected');
		if( activeSpaceArea ) {
			classie.remove(activeSpaceArea, 'map__space--selected');
		}
	}


	init();

})(window);
