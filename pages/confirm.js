import { Fragment, useEffect, useState } from "react";
import {useRouter} from 'next/router'
import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";


const Confirm = () => {
    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

    const router = useRouter();
    const {pickup, dropoff} = router.query;

    const getPickUpCoordinates = (pickup) => {
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoibWFsa3MxNCIsImEiOiJja3Zsbzdnd24wMnY4MzJtb2dqbTNnYjA1In0.MHS4A-a7xTFgTbXfe_xYsA',
                limit: 1
            }))
        .then(response => response.json())
        .then(data => {
            
            setPickupCoordinates(data.features[0].center)
        })
    };

    const getDropOffCoordinates = (dropoff) => {
       
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoibWFsa3MxNCIsImEiOiJja3Zsbzdnd24wMnY4MzJtb2dqbTNnYjA1In0.MHS4A-a7xTFgTbXfe_xYsA',
                limit: 1
            }))
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
    };

  

    useEffect(() => {
        getPickUpCoordinates(pickup);
        getDropOffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Fragment>
            
            <Wrapper>
                <ButtonContainer>
                    <Link href='/search'>
                        <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
                    </Link>
                    </ButtonContainer>
                    <Map 
                    
                        pickupCoordinates={pickupCoordinates}
                        dropoffCoordinates={dropoffCoordinates}
                    />
                
                <RideContainer>
                    <RideSelector 
                    
                        pickupCoordinates={pickupCoordinates}
                        dropoffCoordinates={dropoffCoordinates}
                    />
                    <ConfirmButtonContainer>
                        <ConfirmButton>
                            Confirm UberX
                        </ConfirmButton>
                    </ConfirmButtonContainer>
                </RideContainer>
            </Wrapper>
        </Fragment>
    )
};

export default Confirm;


const ButtonContainer = tw.div `
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img `
h-full object-contain
`

const ConfirmButtonContainer = tw.div `
border-t-2
`

const Wrapper = tw.div `
flex h-screen flex-col
`
const RideContainer = tw.div `
flex-1 flex flex-col h-1/2
`
const ConfirmButton = tw.div `
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`
