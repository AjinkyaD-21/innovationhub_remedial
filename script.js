setInterval(()=>{
    d= new Date;
    htime= d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    mstime=d.getMilliseconds();
    console.log(mstime);
    hrotate=30*htime+mtime/2;
    mrotate=6*mtime;
    srotate=(6*stime)+(0.006*mstime);
   

    hour.style.transform= `rotate(${hrotate}deg)`;
    min.style.transform= `rotate(${mrotate}deg)`;
    second.style.transform= `rotate(${(srotate)}deg)`;

},1000);