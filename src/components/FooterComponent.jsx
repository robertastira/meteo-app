import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function FooterSection() {
    return (
  <Container fluid className='bg-light pd-2 pt-3'>
     <Row>
        <Col></Col>
        <Col xs={12}>
        <img
              src="instagram-logo-6.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
              alt="Instagram Logo"
            />
         <img
              src="1509135366facebook-symbol-png-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
              alt="Facebok Logo"
            />
        <img
              src="14514.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
              alt="Twitter Logo"
            />
              <img
              src="Italy-Flag-PNG-Image.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Twitter Logo"
            />
        </Col>
   
        <Col></Col>
      </Row>
        <Row className='mt-4'>
          <Col></Col>
          <Col xs={12} className='d-flex'>
          <Col><div className='fw-bold'>Lavora con noi</div>
          <div>Risorse Umane</div>
          <div>Privacy</div>
          <div>Contatti</div></Col>
          <Col><div className='fw-bold'>Investitori</div>
          <div>Fondi Nazionali</div>
          <div>Ufficio Legale</div></Col>
          <Col><div className='fw-bold'>Aiuto</div>
          <div>Preferenze Cookie</div></Col>
          <Col><div className='fw-bold'>Siti Collegati</div>
          <div>Sistema Meteo Nazionale</div>
          <div>Ufficio Relazioni Pubbliche</div></Col>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6}>
          </Col>
          <Col></Col>
        </Row>

        <Row>
        <Col></Col>
        <Col xs={6}>
        &copy;2024 EpiMeteo, Roberta Stira Inc.
        </Col>
   
        <Col></Col>
        </Row>
      </Container>
    );
  
  }
  
  export default FooterSection;