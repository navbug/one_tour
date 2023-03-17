import React, {useEffect, useState} from "react";

import Tour from "./Tour";

const List = (props) => {
  const [tourInformation, setTourInformation] = useState([]);
  console.log(props);
  const place = props.placeName;

  let location_id = null;

  const fetchToursHandler = (place) => {
    
    //Get location_id
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '17e3915985msh143926a193cfd82p123dadjsn811b18ecb2a5',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    
    fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${place}`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data.data[0].result_object.location_id);
  
        location_id = data.data[0].result_object.location_id;
        console.log(location_id);
  
      //Get attractions data using location_id
        const options2 = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '17e3915985msh143926a193cfd82p123dadjsn811b18ecb2a5',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        };
        
        fetch(`https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${location_id}`, options2)
          .then(response => response.json())
          .then(data => {
            console.log(data.data);
  
            let tourInfo = [];
            data.data.map((tour) => {
              return tourInfo.push({
                name: tour.name,
                address: tour.address,
                photo: tour.photo,
                phone: tour.phone,
                email: tour.email,
                ranking: tour.ranking,
                website: tour.website,
                web_url: tour.web_url,
              })
            });
            console.log(tourInfo);
            setTourInformation(tourInfo);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchToursHandler(place);
  }, [fetchToursHandler, place]);


  return (
    <ul>
      {tourInformation.map(tour => {
        return <Tour 
          key={Math.random()}
          name= {tour.name}
          address= {tour.address}
          photo= {tour.photo}
          phone= {tour.phone}
          email= {tour.email}
          ranking= {tour.ranking}
          website= {tour.website}
          web_url= {tour.web_url}
          />
      })}
    </ul>
  )
}

export default List;