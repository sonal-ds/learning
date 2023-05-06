import * as React from "react";
// import Mapicon from "../../images/pin.svg"; 
import {
    mapPin,
    phone,
    addressicon,
    watch,
    cluster
  } from "../../assets/svgs/SocialIcons";

const Address = (props: any) => {  
    const { address } = props; 
    
  return (
    <>
     <span className="icon"><img src={addressicon} /></span> 
     <div className="address-content onhighLight">   <p className="onhighLight">{address.line1}</p>
            {address.line2 && (<p className="onhighLight">{address.line2}</p>)}
            <p className="onhighLight">{address.city}, {address.region} {address.postalCode}</p>
            <p className="onhighLight">{address.countryCode}</p> </div>       
      
    </>
  );
};

export default Address;
