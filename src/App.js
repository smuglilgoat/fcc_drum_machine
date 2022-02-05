import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pad: ' '
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleClick(e) {
    let key = document.getElementById(e.target.id).firstChild
    this.setState({ pad: e.target.id })
    key.currentTime = 0;
    let playPromise = key.play();
    if (playPromise !== undefined) {
      playPromise.then(function () {

      }).catch(function (error) {
        console.log('failed')
      });
    }
  }

  handleKeyPress(e) {
    let key = document.getElementById(e.key.toUpperCase())
    if(key !== undefined) {
      this.setState({ pad: key.parentElement.id })
      key.currentTime = 0;
      let playPromise = key.play();
      if (playPromise !== undefined) {
        playPromise.then(function () {

        }).catch(function (error) {
          console.log('failed')
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card bg='dark' id="drum-machine">
            <Card.Header id="display">{this.state.pad}</Card.Header>
            <Card.Body>
              <Container>
                <Row>
                  <Col>
                    <Button className='marg drum-pad' id='Heater 1' variant="secondary" onClick={this.handleClick}>
                      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" className='clip' />
                      Q
                    </Button>
                    <Button className='marg drum-pad' id='Heater 2' variant="secondary" onClick={this.handleClick}>
                      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" className='clip' />
                      W
                    </Button>
                    <Button className='marg drum-pad' id='Heater 3' variant="secondary" onClick={this.handleClick}>
                      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" className='clip' />
                      E
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button className='marg drum-pad' id='Heater 4' variant="secondary" onClick={this.handleClick}>
                      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" className='clip' />
                      A
                    </Button>
                    <Button className='marg drum-pad' id='Heater 6' variant="secondary" onClick={this.handleClick}>
                      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" className='clip' />
                      S
                    </Button>
                    <Button className='marg drum-pad' id='Dsc Oh' variant="secondary" onClick={this.handleClick}>
                      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" className='clip' />
                      D
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button className='marg drum-pad' id='Kick n Hat' variant="secondary" onClick={this.handleClick}>
                      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" className='clip' />
                      Z
                    </Button>
                    <Button className='marg drum-pad' id='Kick' variant="secondary" onClick={this.handleClick}>
                      <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" className='clip' />
                      X
                    </Button>
                    <Button className='marg drum-pad' id='Cev' variant="secondary" onClick={this.handleClick}>
                      <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" className='clip' />
                      C
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>

        </header>
      </div>
    );
  }
}

export default App;
