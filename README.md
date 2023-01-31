# **1. 라이브러리 vs 프레임워크**

**라이브러리(React.js 등)** 는 내가 직접 그 라이브러리를 불러와서 사용해야한다.

그러나 **프레임워크(Next.js 등)** 는 내가 정해진 위치에 코드만 적으면 된다.(라이브러리와 다르게 규칙이 존재한다.)<br><br>

때문에 라이브러리는 프레임워크에 비해 자유도가 떨어진다.<br><br>

한 예로 Next.js 같은 프레임워크의 경우, React.js 라이브러리에 있는 **ReactDOM.render()** 같은 세부적인 것들이 숨겨져있다.

또한 Next.js는 page폴더에 컴포넌트 파일이름 라우터 경로가 된다는 규칙을 따른다.

```ts
// about.js 파일
export default function QWERTY() {
    return 'about us';
}
```
위코드에 컴포넌트 이름이 어떻든 파일이름이 about이라면 /about 라우터 경로에 컴포넌트를 보여준다.

# **2. React.js와 Next.js의 차이점**
Next.js는 React.js와 다르게 멋진 404 Not Found 페이지를 가지고 있다. (React.js는 스스로 만들어줘야함.)<br><br>

그리고 Next.js의 컴포넌트 파일은 React.js와 다르게 `import React from 'react'`를 쓸 필요가 없다는데

사실 React.js도 React 버전 17부터는 생략이 가능하다고 한다.<br><br>

또한 Next.js는 렌더링된 파일을 먼저 프론트엔드에 보낸다는 차이가 있다.

React.js 같은 경우, 화면을 띄울 때 렌더링이 필요한 JS코드를 프론트에 보내고, 프론트에서 JS코드를 해석하여 화면을 보여주는 방식이다.

Next.js는 먼저 JS코드를 백엔드에서 해석하여 html파일을 프론트엔드에 보내고 그 다음에 React.js를 프론트엔드에 보내는 방식이다.<br>
(그렇기에 useState 같은 React.js 기능들도 프론트엔드에서 무리없이 사용할 수 있다.)

# **3. CSS 모듈**
CSS 모듈은 .module.css 확장자를 사용한다.

CSS 스타일을 쓰기위해선 className이나 id를 쓸 수 있는데,<br>.module.css는 JSX 태그에 className이나 id 속성을 문자열 형식처럼 적지 않고 모듈처럼 쓸 수 있게 만든 것이 CSS 모듈이다.
```css
/* NavBar.module.css */
.nav {
    display: flex;
    justify-content: space-between;
    background-color: tomato;
}
```
```tsx
// NavBar.tsx
import styles from './NavBar.module.css';
export default function NavBar() {
    return <nav className={styles.nav}>
    </nav>
}
```
위에 컴포넌트 코드처럼 `className={styles.nav}` 처럼 쓸 수 있다.

CSS 모듈을 썼을 때 장점은 같은 클래스 이름의 CSS 속성이 다른 CSS 모듈 파일에 존재해도 서로 겹치지 않는다.

불편한 점은 여러개의 클래스 이름을 적용할 땐 문자열 형태로 써주어야 한다는 점이다.

# **4. Styled JSX**

Styled JSX는 따로 컴포넌트 태그 안에
```html
<style jsx>{``}</style>
```
형식으로 css 스타일을 정의하는 방식이다.

이 방식도 마찬가지로 해당 스타일은 컴포넌트 안에서만 영향을 끼치고 다른 컴포넌트 스타일엔 관여하지 않는다.

(그런데 NavBar.tsx에 Link태그에 클래스 이름과 a 태그로써 Styled JSX방식으로 css 속성을 주려고 하니 적용이 안되네요.<br><br> Link태그에 legacyBehavior을 달아, 이전 버전 Link태그로 낮추고, a 태그를 Link태그 안에 추가로 작성해주니 작동이 잘 되었습니다.)
## **Styled JSX 글로벌 스타일**

Styled JSX에 글로벌 속성을 적용하려면 style 태그 안에 global을 작성해주면 된다.
```html
// index.tsx
<style jsx global>{``}</style>
```
이때 이 styled jsx를 가진 컴포넌트가 현재 페이지에서 렌더링 되고 있는지가 중요하다.
만약 "/" 경로에서 렌더링되는 "index.tsx" 파일에 글로벌 Styled JSX는 "/about" 경로에선 "index.tsx"가 렌더링되지 못하기에 글로벌 스타일이 적용되지 않는다.

대안으로는 _app.tsx 파일에 Styled JSX를 사용하는 것이다. _app.tsx는 Next.js가 제일 먼저 확인하는 컴포넌트이다.<br>
여기서는 모든 경로에서 공통적으로 쓰이는 컴포넌트나 스타일을 적용할 수 있다.

추가로 _app.tsx에 글로벌 스타일을 적용하기 위한 css 파일인 global.css를 Next.js가 styles폴더에 미리 만들어주는데 이때는 Styled JSX보단 이 파일 쓰는게 낫다.

# **5. 패턴**

Next.js에서 사람들이 가장 많이 사용하는 패턴은 Layout 컴포넌트를 따로 만들고 거기에 글로벌하게 쓸 컴포넌트를 쓰는 것이다.<br>
이렇게 쓰는 이유는, _app.tsx에선 컴포넌트보단 그 외에 다양한 것(스크립트 분석 등등...)을 집중할 수 있게 하기 위해 이런 패턴을 쓴다.

\+ 만약 웹페이지 title같은 html에서 head태그 내에서 할 수 있는 것들을 하고 싶다면 "next/head" 에 Head 컴포넌트를 사용하면 된다.