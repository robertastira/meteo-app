import { Component } from 'react'
import Form from 'react-bootstrap/Form'



const CitySelect = (props) => {

  return (

    <Form.Select
      aria-label="city chooser select"
      className=''
      value={props.cityName}
      onChange={(e) => props.changeCityName(e.target.value)}
    >
      <option>Milano</option>
      <option>Palermo</option>
      <option>Parma</option>
      <option>Altamura</option>
      <option>Roma</option>
    </Form.Select>
  )
}

export default CitySelect

