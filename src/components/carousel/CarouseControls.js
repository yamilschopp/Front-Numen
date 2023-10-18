
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"




const CarouselControls = ({next,prev}) => {


    return (
        <>
            <div aria-label="Previus" onClick={prev}
                className=" flex items-center pl-3 pr-3 rounded-l-lg bg-transparent hover:bg-gradient-to-r hover:from-black/25 hover:to-transparent transition-bg duration-300 h-full text-xl cursor-pointer">

                <FontAwesomeIcon className="cursor-pointer p-1" icon={faChevronLeft} size="xl" style={{color: "#d7d6d6",}} />

            </div>

            <div aria-label="Next" onClick={next}
                className="flex items-center pr-3 pl-3 rounded-r-lg bg-transparent hover:bg-gradient-to-l hover:from-black/25 hover:to-transparent duration-300 h-full text-xl cursor-pointer">

                <FontAwesomeIcon className="cursor-pointer p-1" icon={faChevronRight} size="xl" style={{color: "#d7d6d6",}} />

            </div>

        </>

    )
}

export default CarouselControls