// JavaSFishipt Document

//main-filter
var btnContainer = document.getElementById("main-btn-filter");
var btns = btnContainer.getElementsByClassName("main-btn");

for (var ChkNum = 0; ChkNum < btns.length; ChkNum++) 
{
	btns[ChkNum].addEventListener("click", function(){var current = document.getElementsByClassName("main-active");current[0].className = current[0].className.replace(" main-active", "");this.className += " main-active";});
}

var StartingLetter = document.getElementsByClassName("StartingLetter"), Endangered = document.getElementsByClassName("Endangered"), Type = document.getElementsByClassName("Type");

function Selection(Select)
{
	if(Select == StartingLetter)
		{
			removeFilter();
			document.getElementById("btn-letter-filter").style.display="block";
		}
	else if(Select == Endangered)
		{
			removeFilter();
			document.getElementById("btn-endangered-filter").style.display="block";
		}
	else if(Select == Type)
		{
			removeFilter();
			document.getElementById("btn-type-filter").style.display="block";
		}
}

function removeFilter()
{
	document.getElementById("btn-letter-filter").style.display="none";
	document.getElementById("btn-endangered-filter").style.display="none";
	document.getElementById("btn-type-filter").style.display="none";
}

//Starting letter
var btnContainer1 = document.getElementById("btn-letter-filter");
var btns1 = btnContainer1.getElementsByClassName("btn1");

for (var ChkNum = 0; ChkNum < btns1.length; ChkNum++) 
{
	btns1[ChkNum].addEventListener("click", function(){var current = document.getElementsByClassName("active1");current[0].className = current[0].className.replace(" active1", "");this.className += " active1";});
}
		
		var a = document.getElementsByClassName("a"),
			b = document.getElementsByClassName("b"),
			c = document.getElementsByClassName("c"),
			d = document.getElementsByClassName("d"),
			e = document.getElementsByClassName("e"),
			f = document.getElementsByClassName("f"),
			g = document.getElementsByClassName("g"),
			h = document.getElementsByClassName("h"),
			i = document.getElementsByClassName("i"),
			j = document.getElementsByClassName("j"),
			k = document.getElementsByClassName("k"),			
			l = document.getElementsByClassName("l"),
			m = document.getElementsByClassName("m"),
			n = document.getElementsByClassName("n"),
			o = document.getElementsByClassName("o"),
			p = document.getElementsByClassName("p"),
			q = document.getElementsByClassName("q"),
			r = document.getElementsByClassName("r"),
			s = document.getElementsByClassName("s"),			
			t = document.getElementsByClassName("t"),			
			u = document.getElementsByClassName("u"),
			v = document.getElementsByClassName("v"),
			w = document.getElementsByClassName("w"),
			x = document.getElementsByClassName("x"),
			y = document.getElementsByClassName("y"),
			z = document.getElementsByClassName("z");

		function letterSelection(letter)
		{
			if(letter=='a') {removeAll();for (var ChkNum = 0; ChkNum < a.length; ChkNum++) {a[ChkNum].style.display = 'block';}}
			else if(letter=='b') {removeAll();for (var ChkNum = 0; ChkNum < b.length; ChkNum++) {b[ChkNum].style.display = 'block';}}
			else if(letter=='c') {removeAll();for (var ChkNum = 0; ChkNum < c.length; ChkNum++) {c[ChkNum].style.display = 'block';}}
			else if(letter=='d') {removeAll();for (var ChkNum = 0; ChkNum < d.length; ChkNum++) {d[ChkNum].style.display = 'block';}}
			else if(letter=='e') {removeAll();for (var ChkNum = 0; ChkNum < e.length; ChkNum++) {e[ChkNum].style.display = 'block';}}
			else if(letter=='f') {removeAll();for (var ChkNum = 0; ChkNum < f.length; ChkNum++) {f[ChkNum].style.display = 'block';}}
			else if(letter=='g') {removeAll();for (var ChkNum = 0; ChkNum < g.length; ChkNum++) {g[ChkNum].style.display = 'block';}}
			else if(letter=='h') {removeAll();for (var ChkNum = 0; ChkNum < h.length; ChkNum++) {h[ChkNum].style.display = 'block';}}
			else if(letter=='i') {removeAll();for (var ChkNum = 0; ChkNum < i.length; ChkNum++) {i[ChkNum].style.display = 'block';}}
			else if(letter=='j') {removeAll();for (var ChkNum = 0; ChkNum < j.length; ChkNum++) {j[ChkNum].style.display = 'block';}}
			else if(letter=='k') {removeAll();for (var ChkNum = 0; ChkNum < k.length; ChkNum++) {k[ChkNum].style.display = 'block';}}
			else if(letter=='l') {removeAll();for (var ChkNum = 0; ChkNum < l.length; ChkNum++) {l[ChkNum].style.display = 'block';}}
			else if(letter=='m') {removeAll();for (var ChkNum = 0; ChkNum < m.length; ChkNum++) {m[ChkNum].style.display = 'block';}}
			else if(letter=='n') {removeAll();for (var ChkNum = 0; ChkNum < n.length; ChkNum++) {n[ChkNum].style.display = 'block';}}
			else if(letter=='o') {removeAll();for (var ChkNum = 0; ChkNum < o.length; ChkNum++) {o[ChkNum].style.display = 'block';}}
			else if(letter=='p') {removeAll();for (var ChkNum = 0; ChkNum < p.length; ChkNum++) {p[ChkNum].style.display = 'block';}}
			else if(letter=='q') {removeAll();for (var ChkNum = 0; ChkNum < q.length; ChkNum++) {q[ChkNum].style.display = 'block';}}
			else if(letter=='r') {removeAll();for (var ChkNum = 0; ChkNum < r.length; ChkNum++) {r[ChkNum].style.display = 'block';}}
			else if(letter=='s') {removeAll();for (var ChkNum = 0; ChkNum < s.length; ChkNum++) {s[ChkNum].style.display = 'block';}}
			else if(letter=='t') {removeAll();for (var ChkNum = 0; ChkNum < t.length; ChkNum++) {t[ChkNum].style.display = 'block';}}
			else if(letter=='u') {removeAll();for (var ChkNum = 0; ChkNum < u.length; ChkNum++) {u[ChkNum].style.display = 'block';}}
			else if(letter=='v') {removeAll();for (var ChkNum = 0; ChkNum < v.length; ChkNum++) {v[ChkNum].style.display = 'block';}}
			else if(letter=='w') {removeAll();for (var ChkNum = 0; ChkNum < w.length; ChkNum++) {w[ChkNum].style.display = 'block';}}
			else if(letter=='x') {removeAll();for (var ChkNum = 0; ChkNum < x.length; ChkNum++) {x[ChkNum].style.display = 'block';}}
			else if(letter=='y') {removeAll();for (var ChkNum = 0; ChkNum < y.length; ChkNum++) {y[ChkNum].style.display = 'block';}}
			else if(letter=='z') {removeAll();for (var ChkNum = 0; ChkNum < z.length; ChkNum++) {z[ChkNum].style.display = 'block';}}
			else if(letter=='all') showAll();
		}

		function removeAll()
		{
			for (var ChkNum = 0; ChkNum < a.length; ChkNum++){a[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < b.length; ChkNum++){b[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < c.length; ChkNum++){c[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < d.length; ChkNum++){d[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < e.length; ChkNum++){e[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < f.length; ChkNum++){f[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < g.length; ChkNum++){g[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < h.length; ChkNum++){h[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < i.length; ChkNum++){i[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < j.length; ChkNum++){j[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < k.length; ChkNum++){k[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < l.length; ChkNum++){l[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < m.length; ChkNum++){m[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < n.length; ChkNum++){n[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < o.length; ChkNum++){o[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < p.length; ChkNum++){p[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < q.length; ChkNum++){q[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < r.length; ChkNum++){r[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < s.length; ChkNum++){s[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < t.length; ChkNum++){t[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < u.length; ChkNum++){u[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < v.length; ChkNum++){v[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < w.length; ChkNum++){w[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < x.length; ChkNum++){x[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < y.length; ChkNum++){y[ChkNum].style.display = 'none';}
			for (var ChkNum = 0; ChkNum < z.length; ChkNum++){z[ChkNum].style.display = 'none';}
		}
		function showAll()
		{
			for (var ChkNum = 0; ChkNum < a.length; ChkNum++){a[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < b.length; ChkNum++){b[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < c.length; ChkNum++){c[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < d.length; ChkNum++){d[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < e.length; ChkNum++){e[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < f.length; ChkNum++){f[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < g.length; ChkNum++){g[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < h.length; ChkNum++){h[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < i.length; ChkNum++){i[ChkNum].style.display = 'block';}

			for (var ChkNum = 0; ChkNum < j.length; ChkNum++){j[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < k.length; ChkNum++){k[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < l.length; ChkNum++){l[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < m.length; ChkNum++){m[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < n.length; ChkNum++){n[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < o.length; ChkNum++){o[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < p.length; ChkNum++){p[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < q.length; ChkNum++){q[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < r.length; ChkNum++){r[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < s.length; ChkNum++){s[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < t.length; ChkNum++){t[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < u.length; ChkNum++){u[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < v.length; ChkNum++){v[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < w.length; ChkNum++){w[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < x.length; ChkNum++){x[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < y.length; ChkNum++){y[ChkNum].style.display = 'block';}
			for (var ChkNum = 0; ChkNum < z.length; ChkNum++){z[ChkNum].style.display = 'block';}
		}

//endangered
var btnContainer2 = document.getElementById("btn-endangered-filter");
var btns2 = btnContainer2.getElementsByClassName("btn2");

for (var ChkNum = 0; ChkNum < btns2.length; ChkNum++) 
{
	btns2[ChkNum].addEventListener("click", function(){var current = document.getElementsByClassName("active2");current[0].className = current[0].className.replace(" active2", "");this.className += " active2";});
}

var EX = document.getElementsByClassName("EX"),
	EW = document.getElementsByClassName("EW"),
	CR = document.getElementsByClassName("CR"),
	EN = document.getElementsByClassName("EN"),
	VU = document.getElementsByClassName("VU"),
	NT = document.getElementsByClassName("NT"),
	CD = document.getElementsByClassName("CD"),
	LC = document.getElementsByClassName("LC"),
	DD = document.getElementsByClassName("DD"),
	NE = document.getElementsByClassName("NE");

function endangeredSelection(endangered)
{
	if(endangered=='EX') {removeAllendangered();for (var ChkNum = 0; ChkNum < EX.length; ChkNum++) {EX[ChkNum].style.display = 'block';}}
	else if(endangered=='EW') {removeAllendangered();for (var ChkNum = 0; ChkNum < EW.length; ChkNum++) {EW[ChkNum].style.display = 'block';}}
	else if(endangered=='CR') {removeAllendangered();for (var ChkNum = 0; ChkNum < CR.length; ChkNum++) {CR[ChkNum].style.display = 'block';}}
	else if(endangered=='EN') {removeAllendangered();for (var ChkNum = 0; ChkNum < EN.length; ChkNum++) {EN[ChkNum].style.display = 'block';}}
	else if(endangered=='VU') {removeAllendangered();for (var ChkNum = 0; ChkNum < VU.length; ChkNum++) {VU[ChkNum].style.display = 'block';}}
	else if(endangered=='NT') {removeAllendangered();for (var ChkNum = 0; ChkNum < NT.length; ChkNum++) {NT[ChkNum].style.display = 'block';}}
	else if(endangered=='CD') {removeAllendangered();for (var ChkNum = 0; ChkNum < CD.length; ChkNum++) {CD[ChkNum].style.display = 'block';}}
	else if(endangered=='LC') {removeAllendangered();for (var ChkNum = 0; ChkNum < LC.length; ChkNum++) {LC[ChkNum].style.display = 'block';}}
	else if(endangered=='DD') {removeAllendangered();for (var ChkNum = 0; ChkNum < DD.length; ChkNum++) {DD[ChkNum].style.display = 'block';}}
	else if(endangered=='NE') {removeAllendangered();for (var ChkNum = 0; ChkNum < NE.length; ChkNum++) {NE[ChkNum].style.display = 'block';}}
	else if(endangered=='all') addAllendangered();
}

function removeAllendangered()
{
	for (var ChkNum = 0; ChkNum < EX.length; ChkNum++){EX[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < EW.length; ChkNum++){EW[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < CR.length; ChkNum++){CR[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < EN.length; ChkNum++){EN[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < VU.length; ChkNum++){VU[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < NT.length; ChkNum++){NT[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < CD.length; ChkNum++){CD[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < LC.length; ChkNum++){LC[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < DD.length; ChkNum++){DD[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < NE.length; ChkNum++){NE[ChkNum].style.display = 'none';}
}

function addAllendangered()
{
	for (var ChkNum = 0; ChkNum < EX.length; ChkNum++){EX[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < EW.length; ChkNum++){EW[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < CR.length; ChkNum++){CR[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < EN.length; ChkNum++){EN[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < VU.length; ChkNum++){VU[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < NT.length; ChkNum++){NT[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < CD.length; ChkNum++){CD[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < LC.length; ChkNum++){LC[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < DD.length; ChkNum++){DD[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < NE.length; ChkNum++){NE[ChkNum].style.display = 'block';}
}
//types
var btnContainer3 = document.getElementById("btn-type-filter");
var btns3 = btnContainer3.getElementsByClassName("btn3");

for (var ChkNum = 0; ChkNum < btns3.length; ChkNum++) 
{
	btns3[ChkNum].addEventListener("click", function(){var current = document.getElementsByClassName("active3");current[0].className = current[0].className.replace(" active3", "");this.className += " active3";});
}

var Mammals = document.getElementsByClassName("Mammals"),
	Reptiles = document.getElementsByClassName("Reptiles"),
	Fish = document.getElementsByClassName("Fish"),
	Birds = document.getElementsByClassName("Birds"),
	Amphibians = document.getElementsByClassName("Amphibians"),
	Invertebrates = document.getElementsByClassName("Invertebrates"),
	Insects = document.getElementsByClassName("Insects");

function TypeSelection(Type)
{
	if(Type=='Mammals') {removeAllType();for (var ChkNum = 0; ChkNum < Mammals.length; ChkNum++) {Mammals[ChkNum].style.display = 'block';}}
	else if(Type=='Reptiles') {removeAllType();for (var ChkNum = 0; ChkNum < Reptiles.length; ChkNum++) {Reptiles[ChkNum].style.display = 'block';}}
	else if(Type=='Fish') {removeAllType();for (var ChkNum = 0; ChkNum < Fish.length; ChkNum++) {Fish[ChkNum].style.display = 'block';}}
	else if(Type=='Birds') {removeAllType();for (var ChkNum = 0; ChkNum < Birds.length; ChkNum++) {Birds[ChkNum].style.display = 'block';}}
	else if(Type=='Amphibians') {removeAllType();for (var ChkNum = 0; ChkNum < Amphibians.length; ChkNum++) {Amphibians[ChkNum].style.display = 'block';}}
	else if(Type=='Invertebrates') {removeAllType();for (var ChkNum = 0; ChkNum < Invertebrates.length; ChkNum++) {Invertebrates[ChkNum].style.display = 'block';}}
	else if(Type=='Insects') {removeAllType();for (var ChkNum = 0; ChkNum < Insects.length; ChkNum++) {Insects[ChkNum].style.display = 'block';}}
	else if(Type=='all') addAllType();
}

function removeAllType()
{
	for (var ChkNum = 0; ChkNum < Mammals.length; ChkNum++){Mammals[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < Reptiles.length; ChkNum++){Reptiles[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < Fish.length; ChkNum++){Fish[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < Birds.length; ChkNum++){Birds[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < Amphibians.length; ChkNum++){Amphibians[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < Invertebrates.length; ChkNum++){Invertebrates[ChkNum].style.display = 'none';}
	for (var ChkNum = 0; ChkNum < Insects.length; ChkNum++){Insects[ChkNum].style.display = 'none';}
}

function addAllType()
{
	for (var ChkNum = 0; ChkNum < Mammals.length; ChkNum++){Mammals[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < Reptiles.length; ChkNum++){Reptiles[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < Fish.length; ChkNum++){Fish[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < Birds.length; ChkNum++){Birds[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < Amphibians.length; ChkNum++){Amphibians[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < Invertebrates.length; ChkNum++){Invertebrates[ChkNum].style.display = 'block';}
	for (var ChkNum = 0; ChkNum < Insects.length; ChkNum++){Insects[ChkNum].style.display = 'block';}
}