import { useEffect, useState } from "react";

function Filters(probs) {
    const [drag, setDrag] = useState("fill-down");
    const [data, setData] = useState([])

    function dragFunction() {
        setDrag((prevDrag) => (prevDrag === "fill-down" ? "fill-up" : "fill-down"));
    }

    useEffect(() => {
        const uniqueValues = [...new Set((probs.data).map(value => (value.category)))]
        setData([...data, uniqueValues])
    }, [probs])

    console.log(data)

    return (
        <div className="filterbar">
            <div className={`dropdown ${drag}`} onClick={dragFunction}>
                <div>
                <h1 className="categoryBtn poppins-bold">Category</h1>
                <img
                    className="downArrow absolute"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASxJREFUSEvt070uBkEUxvHfS6GWCGqNhEZNfETpAlyBAhWlzh1Q0XMVEvEVcQciGgmhIBK9RNhJZpM3knd3x74+ErvV7Mw5z3/OM+e0/NLX+iWuBvxjzjdWN1Z/mwN/vrmmcY73Egt6MBljC0OrVDyPA+xhqQAetPaxiAUcFpHLwL0Z7B7DUWQXqx0Ew9lyPLvLLjqCt07wMnDIm8AR+gvgO1iJ5y8IT3NZp+I8dxwnGIgb21iP6y2sxfVzFjdXBg2xVSrO4WM4xmDc2EQfNuL/U4ReVZnBFHDQG8Uphj6JP2aXmsV1FWhqxblmaJqLNvhD1gMzuKkK/So45AX4WQRN4TYFWgecw1/juKVyk5orWbwb49RVaF2ra10mdZxqwdqTG3DXrCwT+n9WfwASoyUfKwuzAgAAAABJRU5ErkJggg=="
                    alt="Down Arrow"
                />
                <img
                    className="upArrow absolute"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASJJREFUSEvt0z8uBUEcB/DP4wQSCYnCn0ah0QniTyFxBAfQ4DX0Kheg4gDuoBSEcAGFRggKicQJhDfJFPJid3bXe15ht9rdmfl9Zr6/3YYeXY0euWr4z5Kvo66jzktgLA4+VImp6sc1iqsIzuOxLF4FnsAFRiL2gkXcl8HLwpM4x1Ab8oq5MngZOKCXGIzoHvqwG58DvoS7IicvCk/h7Bt6gJ0I7GM73r+15i3jNoUXgadbPTzFQCx2hK22wofYjO/esZDCU3A/njEciwagmXGasKGNOPaEcXxknTwFh3UrOMEx1nMiDLXCnDWsxpQypxeBw+JZ3OAz0bvwsc204OtO9DhVo9J40RNXKp63qIY7HulvfqeubKbucVdi/ano/4v6CzcaIx8YDq8YAAAAAElFTkSuQmCC"
                    alt="Up Arrow"
                />
                </div>
                <div className="cat-con px-5 py-3">
                    <div className="flex">
                        <input className="categoryCheckBox" id="checkid" type="checkbox" value="test" />
                        <label className="categoryText poppins-medium">Men's clothing</label>
                    </div>

                    <div className="flex">
                        <input className="categoryCheckBox" id="checkid" type="checkbox" value="test" />
                        <label className="categoryText poppins-medium">Jewelery</label>
                    </div>

                    <div className="flex">
                        <input className="categoryCheckBox" id="checkid" type="checkbox" value="test" />
                        <label className="categoryText poppins-medium">Electronics</label>
                    </div>

                    <div className="flex">
                        <input className="categoryCheckBox" id="checkid" type="checkbox" value="test" />
                        <label className="categoryText poppins-medium">Women's clothing</label>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filters;
