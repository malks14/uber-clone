import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import carList from "../data/carList";

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0);
    const [rides, setRides] = useState([]);


    useEffect(() => {
        rideDuration = 
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoibWFsa3MxNCIsImEiOiJja3Zsbzdnd24wMnY4MzJtb2dqbTNnYjA1In0.MHS4A-a7xTFgTbXfe_xYsA`).then(res => res.json())
        .then(data => {
            setRideDuration(data.routes[0].duration / 100)
        })
    }, [pickupCoordinates, dropoffCoordinates]);

    useEffect(() => {
       const fetchCars = async () => {
           const response = await fetch('https://uber-app-6ef68-default-rtdb.firebaseio.com/cars.json')
           const responseData = await response.json();
           const loadedCars = []

           for (const key in responseData) {
               loadedCars.push({
                   imgUrl: responseData[key].imgUrl,
                   service: responseData[key].service,
                   multiplier: responseData[key].multiplier
               })
           }
           setRides(loadedCars)
       }
    }, [])
    

    return ( <Wrapper>
        <Title>Choose a ride, or swipe up for more</Title>
        <CarList>
            {rides.map((car, index) => {
                return (
                    <Car key={index}>
                    <CarImage src={car.imgUrl} />
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time>5 min away</Time>
                    </CarDetails>
                    <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
             </Car>
                )
                
            })}
           
        </CarList>
    </Wrapper>
    )
}

export default RideSelector;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-4 items-center
`
const CarImage = tw.img`
h-14  mr-4
`
const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`