# blogproject

리액트를 사용한 블로그

사용한 모듈들
---------------------
[React](https://reactjs.org/) <br />
[Redux](https://redux.js.org/) <br />
[Axios](https://www.npmjs.com/package/axios) <br />
[Jquery](https://www.npmjs.com/package/jquery) <br />
[CKeditor](https://ckeditor.com/ckeditor-5)

사용한 asset
-----------------
https://www.creative-tim.com/product/material-kit-pro

서버 사이드 구축
---------------------



실행 방법
--------------------
```
npm install //노드 모듈 다운
```

```
npm start //실행
```

폴더 해석
---------------------
[public](https://github.com/wonbeanie/blogproject/tree/master/public) - 실질적으로 보여지는 파일

[src](https://github.com/wonbeanie/blogproject/tree/master/src) - 내부 리액트 소스

기본 구조
-----------------------
4개의 큰 컴포넌트로 구성되어 있다.

1. NavBar - 상단 네이티브바는 이 js파일를 로드한다
2. TopBackground - 뒤의 백그라운드의 이미지는 이 js파일이 사용된다
3. MainContainer - 모든 페이지의 이동은 이 js파일의 변경으로 이동이된다
4. Footer - 푸터는 이 js파일을 로드한다

react에는 일부 로직과 보여지는것 뿐이다 <br />

Redux에는 모든 on,off or axios요청 or state가 모두 내장되어있다 <br />

하나의 컴포넌트안에는 index.js가 있지않고 Viewer가 있다 <br />
없는것은 다른 큰 뷰어가 있다는 것이다 (예시) NavBar

[NavBar](https://github.com/wonbeanie/blogproject/blob/master/src/component/NavBar.js)
-----------------------
불러오는 컴포넌트
* [MenuLink](https://github.com/wonbeanie/blogproject/tree/master/src/component/NavBarMenu/MenuLink.js)
* [DropDown](https://github.com/wonbeanie/blogproject/tree/master/src/component/NavBarMenu/DropDown.js)
  * [DropDownitem](https://github.com/wonbeanie/blogproject/tree/master/src/component/NavBarMenu/DropDownitem.js)
  
## props
1. navbardata - nav에 필요한 모든 데이터, 데이터의 형태는 서버 사이드 구축에 표시되어있다.
2. title - 로고의 url
3. url - 로고 클릭시 이동할 url

## 로직

해상도가 달라도 네이티브바가 변하는건 mainconainer에 닿을때
```
    handleScroll() {
        if($('#maincontainer').offset()){
            let windowY = window.pageYOffset + $('.navbar').outerHeight(true); //navbar에대한 길이
            let maincontainerY = $('#maincontainer').offset().top;             //maincontainer에대한 길이
            //스크롤의 Y축에 따라 변환
            if(windowY >= maincontainerY){                                     //비교
                //애니메이션 발동
                $(".navbar").removeClass('navbar-transparent');
            }else if(windowY < maincontainerY){
                //애니메이션 기본
                $(".navbar").addClass('navbar-transparent');
            }
        }
    }
```

모바일 환경일시 메뉴바 클릭 이벤트
```
    mobileButton(){
        $(".html").toggleClass('nav-open-absolute nav-open');
    }
```


모바일 환경일때 보이는 html코드
```
    <div className="navbar-header" onClick={this.mobileButton}>
        ...
    </div>
```

모바일 환경 이상의 해상도 일때의 html코드
```
    <div className="collapse navbar-collapse">
        ...
    </div>
```


[TopBackground](https://github.com/wonbeanie/blogproject/blob/master/src/component/TopBackground.js)
-----------------------
불러오는 컴포넌트
  
## props
1. navbardata - nav에 필요한 모든 데이터, 데이터의 형태는 서버 사이드 구축에 표시되어있다.
2. title - 로고의 url
3. url - 로고 클릭시 이동할 url

## 로직


[MainContainer](https://github.com/wonbeanie/blogproject/blob/master/src/component/MainContainer.js)
------------------------

[Footer](https://github.com/wonbeanie/blogproject/blob/master/src/component/Footer.js)
-----------------------


public 
---------------------
* assets/css/bootstrap.min.edit.css


src
---------------------
* component
* Redux
* App.js
* store.js


store.js
---------------------
리덕스 비동기를 사용 또는 로그를 확인하기위한 <br />
미들웨어 설정

```
if (process.env.NODE_ENV === `development`) { //개발자 모드일때 로그 숨김
    const logger = createLogger();  //로그생성

    middlewares = applyMiddleware(logger, ReduxThunk, customizedPromiseMiddleware); //미들웨어 삽입
}
```
