import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";


const Work = () => {

    const workInfodata = [
        {
            image: PickMeals,
            title:"Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem?",
        },
        {
            image: ChooseMeals,
            title:"Choose Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        },
        {
            image: DeliveryMeals,
            title:"Delivery Meals",
            text: "Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit",
        },
    ]

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium, sequi reprehenderit error vero molestias?.
            </p>
        </div>
        <div className='work-section-bottom'>
            {
                workInfodata.map((data) => (
                    <div className='work-section-info' >
                        <div className='info-boxes-img-container' >
                            <img src = {data.image} alt='' />
                        </div>
                        <h2>{data.title}</h2> 
                        <h2>{data.text}</h2> 
                    </div>))
            }
        </div>
    </div>
  )
}

export default Work