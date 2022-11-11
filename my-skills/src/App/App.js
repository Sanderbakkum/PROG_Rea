import "./App.css";
import Intro from "../Intro/Intro";
import Outro from "../Outro/Outro";
import QuestionsRouter from "../QuestionsRouter/QuestionsRouter";
import {Switch, Route } from "react-router-dom";
import React from "react";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            questionsAndAnswers: [],
        }
    }
    onLast = (questionAndAwnsers) => {
        this.setState({questionsAndAnswers: questionAndAwnsers});
    }
    render(){
        return(
            <Switch>
                <Route path="/vragen/:number">
                    <QuestionsRouter onLast={this.onLast}></QuestionsRouter>
                </Route>
                <Route path="/outro">
                    <Outro questionsAndAnswers={this.state.questionsAndAnswers}></Outro>
                </Route>
                <Route path="/" component={Intro}></Route>
            </Switch>
        )
    }

}

export default App;