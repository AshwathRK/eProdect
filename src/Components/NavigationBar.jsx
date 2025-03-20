import Buttons from "./Elements/Buttons";
import Images from "./Elements/Images";


function NavigationBar(props) {

    var pageButtons = {
        "ClassName": "addToCardButton flex items-center poppins-bold btn btn-primary",
        "insideText": "Card"
    }

    

    const cardImages = {
        "className": "addTocardimg px-1",
        "src": "src/assets/card.svg",
        "alt": "addToCard"
    }

    return (
        <>
            <nav className="navBar flex justify-between items-center">
                <img src="src\assets\eProd logo.png" alt="eProd" className="eProdLogo" />
                <Buttons onClick={props.onClick} className={pageButtons.ClassName} insideText={<><Images src={cardImages.src} alt={cardImages.alt} className={cardImages.className}
                />{pageButtons.insideText}</>} />
                <div className="selectedProCount bg-red-600"><p className="text-white poppins-bold text-xs">{props.selectedProdectCount}</p></div>
            </nav>
        </>
    )
}

export default NavigationBar;

