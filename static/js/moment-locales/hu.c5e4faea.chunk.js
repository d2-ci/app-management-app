/*! For license information please see hu.c5e4faea.chunk.js.LICENSE.txt */
(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[59],{246:function(e,s,r){!function(e){"use strict";var s="vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");function r(e,s,r,a){var n=e;switch(r){case"s":return a||s?"n\xe9h\xe1ny m\xe1sodperc":"n\xe9h\xe1ny m\xe1sodperce";case"ss":return n+(a||s)?" m\xe1sodperc":" m\xe1sodperce";case"m":return"egy"+(a||s?" perc":" perce");case"mm":return n+(a||s?" perc":" perce");case"h":return"egy"+(a||s?" \xf3ra":" \xf3r\xe1ja");case"hh":return n+(a||s?" \xf3ra":" \xf3r\xe1ja");case"d":return"egy"+(a||s?" nap":" napja");case"dd":return n+(a||s?" nap":" napja");case"M":return"egy"+(a||s?" h\xf3nap":" h\xf3napja");case"MM":return n+(a||s?" h\xf3nap":" h\xf3napja");case"y":return"egy"+(a||s?" \xe9v":" \xe9ve");case"yy":return n+(a||s?" \xe9v":" \xe9ve")}return""}function a(e){return(e?"":"[m\xfalt] ")+"["+s[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),monthsShort:"jan._feb._m\xe1rc._\xe1pr._m\xe1j._j\xfan._j\xfal._aug._szept._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),weekdaysShort:"vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,s,r){return e<12?!0===r?"de":"DE":!0===r?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return a.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return a.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s m\xfalva",past:"%s",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(r(37))}}]);
//# sourceMappingURL=hu.c5e4faea.chunk.js.map