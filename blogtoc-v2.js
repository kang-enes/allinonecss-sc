﻿// ----------------------------------------
// TABLE OF CONTENT SORT BY DATE
// ----------------------------------------
// Design : Abu Farhan
// URL    : www.abu-farhan.com
// Date   : 01-02-2010
// Re-edit: Kang eNeS
// URL    : ruangsc.blogspot.com
// ----------------------------------------

//<![CDATA[
var postTitle=new Array();
var postUrl=new Array();
var postMp3=new Array();
var postDate=new Array();
var postYear=new Array();
var postMonth=new Array();
var postYearMonth=new Array();
var postYearMonth2=new Array();
var postTanggal=new Array();
var postLabels=new Array();
var postBaru=new Array();
var sortBy="titleasc";
var tocLoaded=false;
var numChars=250;
var postFilter="";
var numberfeed=0;
var month2=["January","February","March","April","May","June","July","August","September","October","November","December"];
function loadtoc(a){function b(){if("entry" in a.feed){
var d=a.feed.entry.length;numberfeed=d;ii=0;for(var h=0;h<d;h++){
var m=a.feed.entry[h];
var e=m.title.$t;
var l=m.published.$t.substring(0,10);
var p=m.published.$t.substring(5,7);
var g=m.published.$t.substring(8,10);
var n=month2[parseInt(p,10)-1]+" "+m.published.$t.substring(0,4);
var c="/"+m.published.$t.substring(0,4)+"_"+p+"_01_archive.html";
var j;for(var f=0;f<m.link.length;f++){if(m.link[f].rel=="alternate"){j=m.link[f].href;break}}
var o="";for(var f=0;f<m.link.length;f++){if(m.link[f].rel=="enclosure"){o=m.link[f].href;break}}
postTitle.push(e);postDate.push(l);postUrl.push(j);postYearMonth.push(n);postYearMonth2.push(c);postTanggal.push(g)}}}b();displayToc2();
document.write('<br/><div style="float:right; font-family:Arial; font-size:85%; margin-top:10px;">Widget by <a href="http://www.abu-farhan.com/" target="_blank" rel="nofollow" title="Sumber asli">Abu Farhan</a> | Edit by <a href="http://ruangsc.blogspot.com/2010/01/membuat-daftar-isi-blog-pada-halaman.html" target="_blank" title="Cara membuat Table of Content Widget">SC Community</a></div><br/>')}
function displayToc2(){var a=0;var b=0;while(b<postTitle.length){temp1=postYearMonth[b];
document.write("<br/>");
document.write('<b><a href="'+postYearMonth2[b]+'">'+temp1+"</a></b><ul>");firsti=a;do{
document.write("<li>");
document.write("["+postTanggal[a]+'] <a href="'+postUrl[a]+'">'+postTitle[a]+"</a>");
document.write("</li>");a=a+1}while(postYearMonth[a]==temp1);b=a;
document.write("</ul>");if(b>postTitle.length){break}}};
//]]>