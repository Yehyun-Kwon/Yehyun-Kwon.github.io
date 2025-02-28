document.addEventListener("DOMContentLoaded", function () { 
    const works = document.querySelectorAll(".work");
    const navBar = document.querySelector(".navi-bar");
    const workMenu = document.querySelector("#work-menu a");
    const cvMenu = document.querySelector("#cv-menu a");
    const contactMenu = document.querySelector("#contact-menu a");
    const workContainer = document.querySelector(".work-container");
    const projectContainer = document.querySelector(".project-container");
    const cvContainer = document.querySelector(".cv-container");
    const contactContainer = document.querySelector(".contact-container");
    const projects = document.querySelectorAll(".project");
    const logoImg = document.querySelector(".logo");
    document.body.classList.add("loaded"); // 페이지가 로드되면 페이드인
    
    // 화면 트랜지션 애니메이션
    function Transition(url) {
      const overlay = document.createElement("div");
      overlay.classList.add("transition");

      document.body.appendChild(overlay); // 화면에 추가

      // 0.1초 뒤 배경을 아래로 슬라이드
      setTimeout(() => {
          overlay.style.top = "0";
      }, 100);

      // 애니메이션이 끝난 후 페이지 이동 (1초 후)
      setTimeout(() => {
          window.location.href = url;
      }, 1100);
    }

    function adjustworkHeight() {
        works.forEach(work => {
            work.style.height = (work.offsetWidth * 0.75) + "px";
        });
    }

    // 카드 뒤집기 이벤트
    works.forEach((work) => {
        work.addEventListener("mouseenter", () => {
            work.classList.add("flipped");
        });

        work.addEventListener("mouseleave", () => {
            work.classList.remove("flipped");
        });
        // 카드마다 click 이벤트 추가
        work.addEventListener("click", () => {
            const workId = work.id;
            const num = workId.charAt(workId.length - 1);
            const targetPage = "project.html?n="+num;
            // window.location.href = targetPage;
            Transition(targetPage);
        });
    });

    // 네비바 스크롤 이벤트
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 50) {
            navBar.classList.add("shrink");
        } else {
            navBar.classList.remove("shrink");
        }
    });

    // 페이지 로드시 카드 높이 조정
    window.addEventListener("resize", adjustworkHeight);
    window.addEventListener("load", adjustworkHeight);

    // 메뉴 클릭 이벤트
    workMenu.addEventListener("click", () => {
        const targetPage = "index.html";
        // window.location.href = targetPage;
        Transition(targetPage);
    });

    cvMenu.addEventListener("click", () => {
        const targetPage = "cv.html";
        // window.location.href = targetPage;
        Transition(targetPage);
    });

    contactMenu.addEventListener("click", () => {
        const targetPage = "contact.html";
        // window.location.href = targetPage;
        Transition(targetPage);
    });
    logoImg.addEventListener("click", () => {
      const targetPage = "index.html";
      // window.location.href = targetPage;
      Transition(targetPage);
    })
});

document.addEventListener("DOMContentLoaded", function () {
  // 현재 URL 경로 가져오기
  const path = window.location.pathname;

  // 각 메뉴 아이템과 해당 페이지 경로 매칭
  const menuItems = {
    "/index.html": "work-menu",
    "/cv.html": "cv-menu",
    "/contact.html": "contact-menu",
  };

  // 현재 페이지에 해당하는 메뉴 항목 찾기
  const activeMenuId = menuItems[path];

  // 해당 메뉴 항목에 'active' 클래스 추가
  if (activeMenuId) {
    document.getElementById(activeMenuId).classList.add("active");
  }
});
