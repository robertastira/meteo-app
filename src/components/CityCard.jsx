import { Component } from 'react'
import Card from 'react-bootstrap/Card'


class CityCard extends Component {


  state = {
    meteoObject: [],
  }

  componentDidMount() {

    this.fetchMeteoData()
  }

  fetchMeteoData = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.props.cityName+',IT&appid=69ca7ca347f4f6d5442d175465b92a61&units=metric')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('ERRORE NELLA FETCH')
        }
      })
      .then((data) => {
        console.log(data)
        this.setState({
          meteoObject: data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidUpdate(prevProps){

    if (prevProps.cityName !== this.props.cityName) {
      this.fetchMeteoData()
    }
  }

  render() {
    return (
          <Card>
            <Card.Img variant="top" src="pngtree-meteorologyweather-and-climateicons-infographic-nature-illustration-vector-png-image_25055290.jpg" />
            <Card.Body>
              <Card.Title><h1>{this.state.meteoObject.name} - {this.state.meteoObject.sys && this.state.meteoObject.sys.country}</h1></Card.Title>
              <Card.Text>
                <div>Temperatura: {this.state.meteoObject.main && this.state.meteoObject.main.temp}</div>  
                <div>Temperatura Massima: {this.state.meteoObject.main && this.state.meteoObject.main.temp_max} </div> 
                <div>Temperatura Minima: {this.state.meteoObject.main && this.state.meteoObject.main.temp_min} </div>
                <div>Umidità: {this.state.meteoObject.main && this.state.meteoObject.main.humidity} - Pressione: {this.state.meteoObject.main && this.state.meteoObject.main.pressure} </div>
              </Card.Text>
            </Card.Body>
          </Card>
    )
  }
}

export default CityCard