import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft, faCircle } from "@fortawesome/free-solid-svg-icons"








const CarouselDots = ({goToItem,data,activeIndex}) => {
    return (

        <div className="flex justify-center pt-5 ">

            {data.map((item, index) => (
                <span key={index} onClick={() => goToItem(index)} className="px-2 cursor-pointer">
                    <FontAwesomeIcon icon={faCircle} size="sm" style={{ color: index=== activeIndex?"#c2c4c3" : "#303030" }} />
                </span>))}

        </div>
    )
}

export default CarouselDots