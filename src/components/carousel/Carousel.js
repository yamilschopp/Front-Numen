
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const items = [{
    id: 1,
    image: "/images/carrousel/car_img1.png",
    description: "descripcion"

}, {
    id: 2,
    image: "/images/carrousel/car_img2.png",
    description: "descripcion 2"
}, {
    id: 3,
    image: "/images/carrousel/car_img3.png",
    description: "descripcion 3"
}, {
    id: 4,
    image: "/images/carrousel/car_img4.png",
    description: "descripcion 4"
}, {
    id: 5,
    image: "/images/carrousel/car_img5.png",
    description: "descripcion 5"
}]

const CarouseL = () => {




    return (
        <section className="pt-20 pb-20 w-full  ">

            <Carousel className="w-[60%] min-w-[400px] m-auto " infiniteLoop showThumbs={false} autoPlay interval={5000} transitionTime={500} showStatus={false}>
                {items.map(ele =>
                    <div key={ele.id} className=" relative h-[450px] rounded-2xl shadow-lg">
                        <img className=" h-[100%] w-[100%] object-fit " src={ele.image}></img>
                        <div className="w-full h-[15%] bg-black/10 flex justify-start hover:bg-black/40 bottom-0  absolute">
                            <a className="text-white pl-9 text-xl" href={ele.text}>{ele.text}</a>
                        </div>

                    </div>)}

            </Carousel>

        </section>
    )
}

export default CarouseL