# **1.0 라이브러리 vs 프레임워크**

**라이브러리(React.js 등)** 는 내가 직접 그 라이브러리를 불러와서 사용해야한다.<br>
그러나 **프레임워크(Next.js 등)** 는 내가 정해진 위치에 코드만 적으면 된다.(라이브러리와 다르게 규칙이 존재한다.)<br><br>
때문에 라이브러리는 프레임워크에 비해 자유도가 떨어진다.<br><br>
한 예로 Next.js 같은 프레임워크의 경우, React.js 라이브러리에 있는 **ReactDOM.render()** 같은 세부적인 것들이 숨겨져있다.<br>
또한 Next.js는 page폴더에 컴포넌트 파일이름 라우터 경로가 된다는 규칙을 따른다.<br>
```js
// about.js 파일
export default function QWERTY() {
    return 'about us';
}
```
위코드에 컴포넌트 이름이 어떻든 파일이름이 about이라면 /about 라우터 경로에 컴포넌트를 보여준다.