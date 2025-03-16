import { useEffect, useState } from "react";
import MainFilterComponent from "./FilterComponents/MainFilterComponent";

function Filters(probs) {
    const [drag, setDrag] = useState("fill-down");
    const [data, setData] = useState([])
    const [responceCategory, setResponceCategory] = useState([])

    function dragFunction() {
        setDrag((prevDrag) => (prevDrag === "fill-down" ? "fill-up" : "fill-down"));
    }

    useEffect(() => {
        const uniqueValues = [...new Set((probs.data).map(value => (value.category)))]
        setData(uniqueValues)
    }, [probs])

    const getCheckBoxValue = (categoryList, list) => {
        setResponceCategory(prevState => {
            const exists = prevState.find(item => item.Id === categoryList);
    
            if (exists) {
                // If ID exists, toggle isChecked
                return prevState.map(item =>
                    item.Id === categoryList ? { ...item, isChecked: !item.isChecked } : item
                );
            } else {
                // If ID doesn't exist, add a new entry
                return [...prevState, { Id: categoryList, value: list, isChecked: true }];
            }
        });}

    probs.filterFunction(responceCategory)

    return (
        <div className="filterbar">
            <MainFilterComponent drag={drag} data={data} dragFunction={dragFunction} getCheckBoxValue={getCheckBoxValue}/>
        </div>
    );
}

export default Filters;
