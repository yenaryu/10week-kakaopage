/* @@@@@@@@@ mainItems @@@@@@@@@@ */
fetch('./assets/data/data.json') 
.then((response) => response.json()) 
.then((json) => {
    mainItems = json.mainItems 

    let html = '';
    mainItems.forEach(el => { 
        html += `<li class="swiper-slide">
        <a href="" class="main-img">
        <img src="${el.img}" alt="">
        </a>
        </li>`
    }); 

    $('.sc-main .swiper-wrapper').html(html);

    var mainSwiper = new Swiper(".sc-main .swiper", {
        loop:true,
         pagination: {
            el: ".sc-main .fraction",
            type : "fraction", 
          },
        
          navigation: {
            nextEl: ".sc-main .next",
            prevEl: ".sc-main .prev",
          },
        
          autoplay: {
            delay: 4000, 
            disableOnInteraction: false,
          }
      });
})

/* @@@@@@@@@ moveItems @@@@@@@@@@ */
fetch('./assets/data/data.json') 
.then((response) => response.json()) 
.then((json) => {
    moveItems = json.moveItems 

    let html = '';
    moveItems.forEach(el => { 
        html += `<li class="swiper-slide">
        <a href="" class="move-img">
        <img src="${el.img}" alt="">
        </a>
        </li>`
    }); 

    $('.sc-move .swiper-wrapper').html(html);

    var moveSwiper = new Swiper(".sc-move .swiper", {
        loop:true,
        navigation: {
          nextEl: ".sc-move .next",
          prevEl: ".sc-move .prev",
        },
      });
})

/* @@@@@@@@@ eventItems @@@@@@@@@@ */
fetch('./assets/data/data.json') 
.then((response) => response.json()) 
.then((json) => {
    eventItems = json.eventItems 

    let html = '';
    eventItems.forEach(el => { 
        html += `<li class="swiper-slide">
        <a href="" class="event-img">
        <img src="${el.img}" alt="">
        </a>
        </li>`
    }); 

    $('.event-area .swiper-wrapper').html(html);

    var eventSwiper = new Swiper(".sc-groupflex.event .swiper", {
        loop:true,
         //숫자
         pagination: {
            el: ".sc-groupflex.event .fraction",
            type : "fraction", 
          },
        
          //이전/다음버튼
          navigation: {
            nextEl: ".sc-groupflex.event .next",
            prevEl: ".sc-groupflex.event .prev",
          },
      });
})


// /* @@@@@@@@@@@@@@@ true/null icon @@@@@@@@@@@ */
//time
// fetch('./assets/data/data.json') 
// .then((response) => response.json()) 
// .then((json) => {
//     timeEl = `<span class="time"><span class="blind">무료 시간</span></span>`

//     let html = '';
//     json.forEach(el => { 
//         isTime = (el.time) ? timeEl : null;

//         html += `
//         <div class="sort-img">${isTime}</div>
//         `;
//     });
//     $('.sc-groupflex .sort-list').html(html);
// })


/* @@@@@@@@@@ Items @@@@@@@@@@@ */
fetch('./assets/data/data.json')
.then((response) => response.json())
.then((json) => {
    items = json.items

    var freeweb = items.filter(function (parm) {return parm.cate == "freeweb" }); 
    var freenov = items.filter(function (parm) {return parm.cate == "freenov" });
    var popweb = items.filter(function (parm) {return parm.cate == "popweb" }); 
    var popnov = items.filter(function (parm) {return parm.cate == "popnov" }); 
    var rank = items.filter(function (parm) {return parm.cate == "rank" }); 
    var webmon = items.filter(function (parm) {return parm.cate == "webmon" }); 
    var webtue = items.filter(function (parm) {return parm.cate == "webtue" }); 
    var webwed = items.filter(function (parm) {return parm.cate == "webwed" }); 
    var webthr = items.filter(function (parm) {return parm.cate == "webthr" }); 
    var webfri = items.filter(function (parm) {return parm.cate == "webfri" }); 
    var websat = items.filter(function (parm) {return parm.cate == "websat" }); 
    var websun = items.filter(function (parm) {return parm.cate == "websun" }); 
    var webend = items.filter(function (parm) {return parm.cate == "webend" }); 
    var novmon = items.filter(function (parm) {return parm.cate == "novmon" }); 
    var novtue = items.filter(function (parm) {return parm.cate == "novtue" }); 
    var novwed = items.filter(function (parm) {return parm.cate == "novwed" }); 
    var novthr = items.filter(function (parm) {return parm.cate == "novthr" }); 
    var novfri = items.filter(function (parm) {return parm.cate == "novfri" }); 
    var novsat = items.filter(function (parm) {return parm.cate == "novsat" }); 
    var novsun = items.filter(function (parm) {return parm.cate == "novsun" }); 
    var novend = items.filter(function (parm) {return parm.cate == "novend" }); 
    var milweb = items.filter(function (parm) {return parm.cate == "milweb" }); 
    var milnov = items.filter(function (parm) {return parm.cate == "milnov" }); 
    var best = items.filter(function (parm) {return parm.cate == "best" }); 

    var upEl = `<span class="up"><span class="blind">UP</span></span>`;
    var timeEl = `<span class="time"><span class="blind">무료 시간</span></span> `;
    var newEl = `<span class="new"><span class="blind">new</span></span>`;
    var ageEl = `<span class="age"><span class="blind">age</span></span>`;
    

    //무료웹툰
    freewebhtml='';
    freeweb.forEach(el => {

        isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        freewebhtml += `<li class="sort-item">
                            <a href="" class="sort-area">
                                <div class="sort-img">
                                    <img src="${el.img}" alt="${el.title}">
                                    ${timeEl}
                                </div>
                                <div class="sort-txt"> 
                                    <strong class="title">
                                        <div class="tag">
                                            ${isUp}
                                            ${isNew}
                                            ${isAge}
                                        </div>
                                        ${el.title}
                                    </strong>
                                    <p class="desc">${el.desc}</p>
                                    <p class="info"> 
                                        <span class="viewer"><span class="blind">조회수</span></span>
                                        ${el.view}만명<i class="bar"></i>${el.writer}
                                    </p>
                                </div>
                            </a>
                        </li>`;
     });

    
    //무료소설
    freenovhtml='';
    freenov.forEach(el => {

        isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        freenovhtml += `<li class="sort-item">
                            <a href="" class="sort-area">
                                <div class="sort-img">
                                    <img src="${el.img}" alt="${el.title}">
                                    ${timeEl}
                                </div>
                                <div class="sort-txt"> 
                                    <strong class="title">
                                        <div class="tag">
                                            ${isUp} 
                                            ${isNew}
                                            ${isAge}
                                        </div>
                                        ${el.title}
                                    </strong>
                                    <p class="desc">${el.desc}</p>
                                    <p class="info"> 
                                        <span class="viewer"><span class="blind">조회수</span></span>
                                        ${el.view}만명<i class="bar"></i>${el.writer}
                                    </p>
                                </div>
                            </a>
                        </li>
                        `;
     });


    //인기웹툰
    popwebhtml='';
    popweb.forEach(el => {

        isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        popwebhtml += `<li class="sort-item">
                            <a href="" class="sort-area">
                                <div class="sort-img">
                                    <img src="${el.img}" alt="${el.title}">
                                    <span class="wticon"><span class="blind">웹툰</span></span> 
                                </div>
                                <div class="sort-txt"> 
                                    <strong class="title">
                                        <div class="tag">
                                            ${isUp} 
                                            ${isNew}
                                            ${isAge}
                                        </div>
                                        ${el.title}
                                    </strong>
                                    <p class="desc">${el.desc}</p>
                                    <p class="info"> 
                                        <span class="viewer"><span class="blind">조회수</span></span>
                                        ${el.view}만명<i class="bar"></i>${el.writer}
                                    </p>
                                </div>
                            </a>
                        </li>
                        `;
     });

    //인기소설
    popnovhtml='';
    popnov.forEach(el => {

        isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        popnovhtml += `<li class="sort-item">
                            <a href="" class="sort-area">
                                <div class="sort-img">
                                    <img src="${el.img}" alt="${el.title}">
                                    <span class="wnicon"><span class="blind">웹소설</span></span> 
                                </div>
                                <div class="sort-txt"> 
                                    <strong class="title">
                                        <div class="tag">
                                            ${isUp} 
                                            ${isNew}
                                            ${isAge}
                                        </div>
                                        ${el.title}
                                    </strong>
                                    <p class="desc">${el.desc}</p>
                                    <p class="info"> 
                                        <span class="viewer"><span class="blind">조회수</span></span>
                                        ${el.view}만명<i class="bar"></i>${el.writer}
                                    </p>
                                </div>
                            </a>
                        </li>
                        `;
     });

     
    //랭킹
    rankhtml='';
    rank.forEach(el => {
        
        isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        rankhtml += `<li class="sort-item rank">
                            <a href="" class="sort-area rank">
                                <em class="ranknum">${el.rank}</em>
                                <div class="sort-img rank">
                                    <img src="${el.img}" alt="${el.title}">
                                    ${timeEl}
                                </div>
                                <div class="sort-txt">
                                    <strong class="title">
                                        <div class="tag">
                                            ${isUp} 
                                            ${isNew}
                                            ${isAge}
                                        </div>
                                        ${el.title}
                                    </strong>
                                    <p class="info">
                                        <span class="viewer"><span class="blind">조회수</span></span>
                                        ${el.view}만명<i class="bar"></i>${el.company}<i class="bar"></i>${el.genre}<i class="bar"></i>${el.writer}
                                    </p>
                                    <p class="day">${el.day} 연재</p>
                                </div>
                                <div class="rankchange-num">
                                    <span class="rankup"><span class="blind">순위상승</span></span>
                                    <p class="rankup-num">1</p>
                                </div>
                            </a>
                        </li>
                        `;
     });

    //월웹툰
    webmonhtml='';
    webmon.forEach(el => {

        isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        webmonhtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //화웹툰
    webtuehtml='';
    webtue.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        webtuehtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //수웹툰
    webwedhtml='';
    webwed.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        webwedhtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //목웹툰
    webthrhtml='';
    webthr.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        webthrhtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //금웹툰
    webfrihtml='';
    webfri.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        webfrihtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //토웹툰
    websathtml='';
    websat.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        websathtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //일웹툰
    websunhtml='';
    websun.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        websunhtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //완결웹툰
    webendhtml='';
    webend.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        webendhtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //월소설
    novmonhtml='';
    novmon.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        novmonhtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //화소설
    novtuehtml='';
    novtue.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        novtuehtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //수소설
    novwedhtml='';
    novwed.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        novwedhtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //목소설
    novthrhtml='';
    novthr.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        novthrhtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //금소설
    novfrihtml='';
    novfri.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        novfrihtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //토소설
    novsathtml='';
    novsat.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        novsathtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //일소설
    novsunhtml='';
    novsun.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        novsunhtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

    //완결소설
    novendhtml='';
    novend.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

        novendhtml += `<li class="book-item">
                                    <a href="" class="book-area">
                                        <div class="book-img">
                                            <img src="${el.img}" alt="${el.title}">
                                            <span class="deco">
                                           <span class="decostar"><span class="blind">별점</span></span>
                                                <span class="rank">${el.rank}</span> 
                                                <span class="decoclock"><span class="blind">시간</span></span> 
                                            </span>
                                        </div>
                                        <div class="book-txt">
                                            <strong class="title"> ${el.title}</strong>
                                            <p class="info">
                                                <span class="viewer"><span class="blind">조회수</span></span>
                                                ${el.view}만명
                                            </p>
                                        </div>
                                    </a>
                                </li>`;
     });

     //밀리언웹툰
     milwebhtml='';
     milweb.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

         milwebhtml += `<li class="sort-item">
                             <a href="" class="sort-area">
                                 <div class="sort-img">
                                     <img src="${el.img}" alt="${el.title}">
                                     ${timeEl} 
                                     <span class="milion"><span class="blind">밀리언페이지</span></span>
                                 </div>
                                 <div class="sort-txt">
                                    <strong class="title">${el.title}</strong>
                                    <p class="desc">${el.desc}</p>
                                    <p class="info">
                                        <span class="viewer"><span class="blind">조회수</span></span>
                                        ${el.view}만명<i class="bar"></i>${el.writer}
                                    </p>
                                </div>
                             </a>
                         </li>`;
      });

     //밀리언소설
     milnovhtml='';
     milnov.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

         milnovhtml += `<li class="sort-item">
                             <a href="" class="sort-area">
                                 <div class="sort-img">
                                     <img src="${el.img}" alt="${el.title}">
                                     ${timeEl} 
                                     <span class="milion"><span class="blind">밀리언페이지</span></span>
                                 </div>
                                 <div class="sort-txt">
                                    <strong class="title">${el.title}</strong>
                                    <p class="desc">${el.desc}</p>
                                    <p class="info">
                                        <span class="viewer"><span class="blind">조회수</span></span>
                                        ${el.view}만명<i class="bar"></i>${el.writer}
                                    </p>
                                </div>
                             </a>
                         </li>`;
      });

     //베스트웹툰
     besthtml='';
     best.forEach(el => {

         isUp = (el.up) ? upEl : '';
        isTime = (el.time) ? timeEl : '';
        isNew = (el.new) ? newEl : '';
        isAge = (el.age) ? ageEl : '';

         besthtml += `<li class="sort-item">
                             <a href="" class="sort-area">
                                 <div class="sort-img">
                                     <img src="${el.img}" alt="${el.title}">
                                     ${timeEl} 
                                 </div>
                                 <div class="sort-txt">
                                    <strong class="title">${el.title}</strong>
                                    <p class="desc">${el.desc}</p>
                                    <p class="info">
                                        <span class="viewer"><span class="blind">조회수</span></span>
                                        ${el.view}만명<i class="bar"></i>${el.writer}
                                    </p>
                                </div>
                             </a>
                         </li>`;
      });




  $('.sc-groupflex.freeweb .sort-list').html(freewebhtml);
  $('.sc-groupflex.freenov .sort-list').html(freenovhtml);
  $('.sc-groupflex.popweb .sort-list').html(popwebhtml);
  $('.sc-groupflex.popnov .sort-list').html(popnovhtml);
  $('.sc-groupflex.rank .sort-list').html(rankhtml);
  $('.group-wrap.mon .book-list').html(webmonhtml);
  $('.group-wrap.tue .book-list').html(webtuehtml);
  $('.group-wrap.wed .book-list').html(webwedhtml);
  $('.group-wrap.thr .book-list').html(webthrhtml);
  $('.group-wrap.fri .book-list').html(webfrihtml);
  $('.group-wrap.sat .book-list').html(websathtml);
  $('.group-wrap.sun .book-list').html(websunhtml);
  $('.group-wrap.end .book-list').html(webendhtml);
  $('.group-wrap.nmon .book-list').html(novmonhtml);
  $('.group-wrap.ntue .book-list').html(novtuehtml);
  $('.group-wrap.nwed .book-list').html(novwedhtml);
  $('.group-wrap.nthr .book-list').html(novthrhtml);
  $('.group-wrap.nfri .book-list').html(novfrihtml);
  $('.group-wrap.nsat .book-list').html(novsathtml);
  $('.group-wrap.nsun .book-list').html(novsunhtml);
  $('.group-wrap.nend .book-list').html(novendhtml);
  $('.sc-groupflex.milweb .sort-list').html(milwebhtml);
  $('.sc-groupflex.milnov .sort-list').html(milnovhtml);
  $('.sc-groupflex.best .sort-list').html(besthtml);

})


















