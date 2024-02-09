import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


const CitySelect = (props) => {

  return (
<Container>
  <Row>
    <Col></Col>
    <Form.Select
      aria-label="cityname"
      className=''
      value={props.cityName}
      onChange={(e) => props.changeCityName(e.target.value)}>
      <option>Milan</option>
      <option>Palermo</option>
      <option>Parma</option>
      <option>Altamura</option>
      <option>Rome</option>
    </Form.Select>
    <Col></Col>
    </Row>
    </Container>
  )
}

export default CitySelect

