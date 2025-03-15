import CategoryComp from "./CategoryComp";

const MainFilterComponent=(probs)=>{
    return(
        <div className={`dropdown ${probs.drag}`} onClick={probs.dragFunction}>
                {<CategoryComp filterType= {"Category"} data={probs.data} getCheckBoxValue={probs.getCheckBoxValue}/>}
        </div>
    )
}

export default MainFilterComponent;