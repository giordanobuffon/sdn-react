import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Button from "react-bootstrap/es/Button";
import Card from "./Card/Card";
import FormControl from "react-bootstrap/es/FormControl";




class App extends Component {
    render() {
        return (
            <div className="App">


                <div className="cardCadastro">
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                                <Card
                                    title="Cadastro de usuário"
                                    content={
                                        <form onSubmit={(event) => {
                                            event.preventDefault();
                                        }}>
                                            <Row>
                                                <FormGroup controlId="formHorizontalPrefixoEmail" className="col-md-6">
                                                    <ControlLabel>Prefixo do e-mail</ControlLabel>
                                                    <FormControl
                                                        type="text"
                                                        // value={this.state.usuario.email}
                                                        placeholder="Ex: pmachado"
                                                        // onChange={(e) => this.setValor("email", e.target.value)}
                                                        required
                                                    />
                                                </FormGroup>
                                                <FormGroup controlId="formHorizontalSufixo" className="col-md-6"
                                                           id="sufixoRestinga">
                                                    <FormControl.Static>@restinga.ifrs.edu.br</FormControl.Static>
                                                </FormGroup>
                                            </Row>

                                            <Button
                                                className="btnSaveif"
                                                fill
                                                type="submit"
                                            >
                                                Cadastrar
                                            </Button>
                                            <div className="clearfix"/>
                                        </form>
                                    }
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>


                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<h1 className="App-title">Welcome to React</h1>*/}
                {/*</header>*/}
                {/*<p className="App-intro">*/}
                {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
            </div>
        );
    }
}

export default App;
