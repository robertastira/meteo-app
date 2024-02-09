import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import CitySelect from './components/CitySelect';
import CityCard from './components/CityCard';
import { Container, Row, Col } from 'react-bootstrap';
import { Component }  from 'react';



class App extends Component() {

  state = {
    cityName: 'Milano',
  }

  changeCityName = (newCity) => {
    this.setState({
      cityName: newCity,
    })
  }
  
  render() {
  return (
    <div className="App">
<header>
  <NavbarComponent/>
</header>
<main>
<Container className="my-5">
            <Row className="justify-content-center">
              <Col xs={12} md={6}>
                <CitySelect
                  cityName={this.state.cityName}
                  changeCityName={this.changeCityName}
                />
              </Col>
            </Row>
            <Row className="justify-content-center mt-5">
              <Col xs={12} md={6}>
                <CityCard cityName={this.state.cityName} />
              </Col>
            </Row>
          </Container>
</main>
<FooterComponent/>
    </div>
  
  );
}
}

export default App;
