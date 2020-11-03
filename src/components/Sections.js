import React from "react";
import Categorie from "./Categorie";
import Movies from "./Movies";


const Section = (props) => {
  return (
  <div className="section">
    {props.data.map((item) => {
      return (
        <>
        <Categorie data={item.category}/>
        <Movies data={item.images}/>
        </>
      )
    })
  }
  </div>
  )
  }
export default Section;