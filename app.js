document.addEventListener('DOMContentLoaded', function () {
    // 각 링크에 대한 참조
    const operationFaqLink = document.querySelector('#OperationFaq2');
    const activityFaqLink = document.querySelector('#operationFaq');
    const miscLink = document.querySelector('#miscLink');

    // 각 컨텐츠 섹션에 참조
    const originalContent = document.querySelector('#originalContent');
    const secondContent = document.querySelector('#secondContent');
    const thirdContent = document.querySelector('#thirdContent');


    function hideAllContent() {
        originalContent.style.display = 'none';
        secondContent.style.display = 'none';
        thirdContent.style.display = 'none';
    }
    

    // '운영진 지원 관련 질문' 
    operationFaqLink.addEventListener('click', function (e) {
        e.preventDefault(); 
        hideAllContent(); 
        originalContent.style.display = 'block'; 
    });

    // '운영진 활동 관련질문'
    activityFaqLink.addEventListener('click', function (e) {
        e.preventDefault(); 
        hideAllContent(); 
        secondContent.style.display = 'block'; 
    });

    // '기타' 
    miscLink.addEventListener('click', function (e) {
        e.preventDefault(); 
        hideAllContent();
        thirdContent.style.display = 'block'; 
    });

    // 기본상태
    hideAllContent(); 
    originalContent.style.display = 'block'; 
});