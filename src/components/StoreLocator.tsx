// src/components/StoreLocator.tsx

import * as React from "react";
import {
  MapboxMap,
  FilterSearch,
  OnSelectParams,
  VerticalResults,
  StandardCard,
} from "@yext/search-ui-react";
import {
  Matcher,
  SelectableStaticFilter,
  useSearchActions,
} from "@yext/search-headless-react";
// Mapbox CSS bundle
import "mapbox-gl/dist/mapbox-gl.css";
import {  limit, map_api, search_api } from "../constant";
import LocationCard from "./LocationCard"; 
import MapPin from "./MapPin";   
import { GoogleMaps } from "./GoogleMaps";

const StoreLocator = (): JSX.Element => {//, 
  const searchActions = useSearchActions();
  const [centerLatitude, setCenterLatitude] = React.useState(28.679079);
  const [centerLongitude, setCenterLongitude] = React.useState(77.069710);
const [ver, setVer] = React.useState("atms");
  React.useEffect(() => {
     searchActions.setVertical(ver);
     searchActions.setVerticalLimit(limit);
     searchActions.executeVerticalQuery();
    }, []);
  const handleFilterSelect = (params: OnSelectParams) => {
    const locationFilter: SelectableStaticFilter = {
      selected: true,
      filter: {
        kind: "fieldValue",
        fieldId: params.newFilter.fieldId,
        value: params.newFilter.value,
        matcher: Matcher.Equals,
      },
    };
    searchActions.setStaticFilters([locationFilter]);
    searchActions.executeVerticalQuery();
  };
    
  function getCoordinates(address: String) {
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + '&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18')
      .then(response => response.json())
      .then(data => {
        data.results.map((res: any) => {
          const userlatitude = res.geometry.location.lat;
          const userlongitude = res.geometry.location.lng;
          let params = {
            latitude: userlatitude,
            longitude: userlongitude
          };
          
          setCenterLatitude(userlatitude);
          setCenterLongitude(userlongitude);
          searchActions.setUserLocation(params);
          searchActions.setQuery(address);
          searchActions.executeVerticalQuery();

        })
      })
  }
 
  const atm = ()=>{
    const v1 = searchActions.setVertical("atms")
    return (
      searchActions.setVertical("atms")

      )
    //  setVertical(atm1)
    
  }
  const branch = ()=>{
    
    return searchActions.setVertical("locations");
    
  }
console.log(ver)
  return (
    <>
      <div className="flex h-[calc(100vh-242px)] border">
        <div className="flex w-1/3 flex-col">
          <button onClick={atm}>atm</button>
          <button onClick={branch}>branch</button>
          <FilterSearch
            onSelect={handleFilterSelect}
            placeholder="Find Locations Near You"
            searchFields={[
              {
                entityType: "location",
                fieldApiName: "builtin.location",
              },
            ]}
          />
          <VerticalResults
            customCssClasses={{ verticalResultsContainer: "overflow-y-auto" }}
            CardComponent={LocationCard}
          />
        </div>
        <div className="w-2/3">
        <GoogleMaps
              apiKey='AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18'
              centerLatitude={centerLatitude}
              centerLongitude={centerLongitude}  
              defaultZoom={6}
              showEmptyMap={true}
            />
        </div>
      </div>
    </>
  );
};

export default StoreLocator;