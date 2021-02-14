import React from "react";

export const Bands = (props) => {
  const bands = props.bands.map((band, index) => {
    return <li key={ index }>{ band.name }</li>
  })

  return (
    <div>
      { bands }
    </div>
  )
}