<script>
window.onload=function()
{
var oa1=document.getElementById('a1');
var oa2=document.getElementById('a2');
var ob2=document.getElementById('b2');
var obutton=document.getElementById('abutton');
var oresults=document.getElementById('results');
function sum()
{
var t=0;
if(oa1.checked) t+=5;
if(oa2.checked&&ob2.checked) t+=5;
oresults.innerHTML="您的最终成绩为"+t+"分";
}
obutton.onclick=sum;
}
</script>
<p>第一道题</p>
<input type="checkbox" name="a1" id="a1" />a
<input type="checkbox" name="b1" id="b1" />b
<input type="checkbox" name="c1" id="c1" />c
<input type="checkbox" name="d1" id="d1" />d
<p>第二道题</p>
<input type="checkbox" name="a2" id="a2" />a
<input type="checkbox" name="b2" id="b2" />b
<input type="checkbox" name="c2" id="c2" />c
<input type="checkbox" name="d2" id="d2" />d
<br />
<input type="button"id="abutton" value="提交答案
">
<p id="results"></p>
