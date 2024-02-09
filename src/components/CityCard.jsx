import { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'


class MeteoCard extends Component {


  state = {
    meteoObject: [],
  }

  componentDidMount() {

    this.fetchMeteoData()
  }

  fetchMeteoData = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.props.cityName+'&appid={69ca7ca347f4f6d5442d175465b92a61}')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('ERRORE NELLA FETCH')
        }
      })
      .then((data) => {
        console.log(data.Search[0])
        this.setState({
          meteoObject: data.Search[0],
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <>
        {this.state.meteoObject ? (
          <Card>
            <Card.Img variant="top" src="pngtree-meteorologyweather-and-climateicons-infographic-nature-illustration-vector-png-image_25055290.jpg" />
            <Card.Body>
              <Card.Title><h1>{this.state.meteoObject.name} - {this.state.meteoObject.country}</h1></Card.Title>
              <Card.Text>
                <div>Temperatura: {this.state.meteoObject.temp}</div>  
                <div>Temperatura Massima: {this.state.meteoObject.temp_max} - Temperatura Minima: {this.state.meteoObject.temp_min} </div>
                <div>Umidità: {this.state.meteoObject.humidity} - Pressione: {this.state.meteoObject.pressure} </div>
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </>
    )
  }
}

export default MeteoCard