// document.addEventListener("DOMContentLoaded",()=>{
//     const btnHearts = document.querySelectorAll(".btn-heart")
//     if(btnHearts){
//         // btnHearts 변수에 무언가가 정상적으로 저장되었다면 다음과 같은 동작을 등록한다.
//         btnHearts.forEach(btn=>{
//             document.addEventListener("click",(e)=>{
//                 const btn = e.target.closest(`.btn-heart`)
//                 if(btn){
//                     e.preventDefault()
//                     // 클릭할 때 기본 기능을 차단한다.(a태그를 클릭하면 기본 기능으로 스크롤이 위로 이동됨)
//                     e.stopPropagation()
//                     let imgtag = btn.children[0]
//                     console.log(imgtag)
//                     let originSrc = imgtag.getAttribute("src")
//                     if(originSrc=='./img/list-heart.svg'){
//                         // 현재 블랙 하트 상태라면
//                         imgtag.setAttribute("src","./img/list-heart-click.svg")
//                     }else{
//                         // 포인트컬러 하트 상태라면
//                         imgtag.setAttribute("src","./img/list-heart.svg")
//                     }
//                 }
//             })
//         })
//     }

    
// })

// 이벤트 전파(버블링, 캡쳐링)가 되지 않도록 해줘야 함
// 하트 버튼을 클릭한다는 것은 곧 부모태그인 a태그를 클릭한다는 것과 같음 -> 이걸 이벤트 전파라고 함

// 리스트가 js로 실행이 되고 나서야 하트가 생성되고 그 이후에 이벤트가 실해되는거라서 이벤트 위임을 해줘야 하트 기능이 실행됨



document.addEventListener("DOMContentLoaded",()=>{

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-heart');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            let imgtag = btn.children[0];
            let originSrc = imgtag.getAttribute("src");
            if(originSrc=='./img/list-heart.svg'){
                // 현재 빈 하트 상태라면
                imgtag.setAttribute("src",'./img/list-heart-click.svg');
            }else{
                // 채워진 하트 상태라면
                imgtag.setAttribute("src",'./img/list-heart.svg');
            }
        }
    });

})