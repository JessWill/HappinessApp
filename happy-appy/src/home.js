import React, { Component } from "react";
import '/home/jess/HappinessApp/happy-appy/src/index.css'
import sunflowerpicture from '/home/jess/HappinessApp/happy-appy/src/images/homepage1.jpg'

class HomePage extends Component {
    render() {
        return (
            <div>
                <section class="hero is-warning">
                    <div class="hero-body">
                        <p class="title">
                            The Happiness App
                    </p>
                        <p class="subtitle">
                            View and Analyse Data from the United Nations World Happiness Report
                    </p>
                    </div>
                </section>
                <section class="section">
                    <h1 class="title">United Nation Happiness Survey</h1>
                    <p>The World Happiness Report is a landmark survey of the state of global happiness that ranks 156 countries by how happy their citizens perceive themselves to be. The World Happiness Report 2020 for the first time ranks cities around the world by their subjective well-being and digs more deeply into how the social, urban and natural environments combine to affect our happiness.
                    </p>
                </section>
                <section>
                    <figure class="image is-2463x1642">
                    <img src={sunflowerpicture} alt="Happy girls with sunflowers"/>
                    </figure>
                </section>
            </div>
        );
    }
}

export default HomePage;