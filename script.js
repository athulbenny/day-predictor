var dv,mv,yv,nlpy=0,yvdef,def;
week=['sunday','monday','tuesday','wednsday','thursday','friday','saturday'];
var date=document.getElementById('date');
var month=document.getElementById('month');
var year=document.getElementById('year');
var nn=document.getElementById('nn');
var submit=document.getElementById('submit');
submit.onclick=check;

function check(){
dv=date.value;
mv=month.value;
yv=year.value;
yvint=parseInt(yv);
mvint=parseInt(mv);
dvint=parseInt(dv);

if(dv>32|| mv>12){
    nn.innerHTML='error!!!'
    window.location.url('./index.html')
}else{
    // nn.innerHTML='';
    remains();
}}

function remains(){

    fi=yv.charAt(0);//fi = first index

    if(fi==1||fi==3||fi==5||fi==7||fi==9||yv==2000||yv==4000||yv==6000||yv==8000){
        //range 1001 to 2000,3001 to 4000,5001 to 6000,7001 to 8000
        //nlpy=7;//non leap yr years
        if(fi==1){
        def=4;//default value
        yvdef=1001;
        if(yvint>=1101){nlpy++;}
        if(yvint>=1301){nlpy++;}
        if(yvint>=1401){nlpy++;}
        if(yvint>=1501){nlpy++;}
        if(yvint>=1701){nlpy++;}
        if(yvint>=1801){nlpy++;}
        if(yvint>=1901){nlpy++;}
    }
}
    else{
        if(fi==2){
            def=1;//default value
            yvdef=2001;
            if(yvint>=2101){nlpy++;}
            if(yvint>=2201){nlpy++;}
            if(yvint>=2301){nlpy++;}
            if(yvint>=2501){nlpy++;}
            if(yvint>=2601){nlpy++;}
            if(yvint>=2701){nlpy++;}
            if(yvint>=2901){nlpy++;}
        }
    }
    if(mvint==01|| mvint==10) mvadd=0;
    else if(mvint==02 || mvint==03 || mvint==11) mvadd=3;
    else if(mvint==04|| mvint==07) mvadd=6;
    else if(mvint==05) mvadd=1;
    else if(mvint==06) mvadd=4;   
    else if(mvint==09||mvint==12) mvadd=5;
    else if(mvint==08) mvadd=2;
    yvadd=yvint-yvdef;
    if(yvint%4==0 && mvint>=3){     
        lpr=parseInt((yvadd/4)-nlpy+1);console.log("hi"+lpr)}
    else{
        lpr=parseInt((yvadd/4)-nlpy);console.log("ert"+lpr)}//leap yrs
    dvadd=dvint-1;
    sum=(dvadd+mvadd+yvadd+lpr)
    reminder=sum%7;
    if(reminder==6) reminder=-1;
    if(reminder==5&&fi!=2) reminder=-2;
    console.log(reminder)
   ;nlpy=0;
    setInterval(function(){
        if(nn.innerHTML=="")  nn.innerHTML=week[def+reminder]
        else nn.innerHTML=""
    },1000)
}
// var visib=true;
// //if(nn.innerHTML.value!=null){
// setInterval(function(){
// console.log(nn.innerHTML.value);
//         if(nn.innerHTML.value.hidden==true){
//             nn.innerHTML.value.hidden=false;
//         }else nn.innerHTML.value.hidden=true;
    
// },500)
// //}
