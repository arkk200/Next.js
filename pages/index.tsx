import { useState } from "react";

export default function Home() {
    // 초깃값 0으로 렌더링된 파일이 전송됨
    const [counter, setCounter] = useState(0);

    return <div>
        {counter}
        <div>
            <button onClick={() => setCounter(prev => prev+1)}>+</button>
        </div>
    </div>
}