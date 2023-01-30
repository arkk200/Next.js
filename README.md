# **1.0 라이브러리 vs 프레임워크**

**라이브러리(React.js 등)** 는 내가 직접 그 라이브러리를 불러와서 사용해야한다.

그러나 **프레임워크(Next.js 등)** 는 내가 정해진 위치에 코드만 적으면 된다.(라이브러리와 다르게 규칙이 존재한다.)<br><br>

때문에 라이브러리는 프레임워크에 비해 자유도가 떨어진다.<br><br>

한 예로 Next.js 같은 프레임워크의 경우, React.js 라이브러리에 있는 **ReactDOM.render()** 같은 세부적인 것들이 숨겨져있다.

또한 Next.js는 page폴더에 컴포넌트 파일이름 라우터 경로가 된다는 규칙을 따른다.

```js
// about.js 파일
export default function QWERTY() {
    return 'about us';
}
```
위코드에 컴포넌트 이름이 어떻든 파일이름이 about이라면 /about 라우터 경로에 컴포넌트를 보여준다.

### **\+ React.js와 Next.js의 차이점**
___
Next.js는 React.js와 다르게 멋진 404 Not Found 페이지를 가지고 있다. (React.js는 스스로 만들어줘야함.)<br><br>

그리고 Next.js의 컴포넌트 파일은 React.js와 다르게 `import React from 'react'`를 쓸 필요가 없다는데

사실 React.js도 React 버전 17부터는 생략이 가능하다고 한다.<br><br>

또한 Next.js는 렌더링된 파일을 먼저 프론트엔드에 보낸다는 차이가 있다.

React.js 같은 경우, 화면을 띄울 때 렌더링이 필요한 JS코드를 프론트에 보내고, 프론트에서 JS코드를 해석하여 화면을 보여주는 방식이다.

Next.js는 먼저 JS코드를 백엔드에서 해석하여 html파일을 프론트엔드에 보내고 그 다음에 React.js를 프론트엔드에 보내는 방식이다.<br>
(그렇기에 useState 같은 React.js 기능들도 프론트엔드에서 무리없이 사용할 수 있다.)