import React, { Component } from "react";
import '/home/jess/HappinessApp/happy-appy/src/index.css'
import sunflowerpicture from '/home/jess/HappinessApp/happy-appy/src/images/homepage1.jpg'

class HomePage extends Component {
    render() {
        return (
            <div class>
                <div class="body-container">
                <section class="section">
                    <h1 class="title">United Nations Happiness Survey</h1>
                    <p>The World Happiness Report is a landmark survey of the state of global happiness that ranks 156 countries by how happy their citizens perceive themselves to be. The World Happiness Report 2020 for the first time ranks cities around the world by their subjective well-being and digs more deeply into how the social, urban and natural environments combine to affect our happiness.
                    </p>
                </section>
                <section>
                    <figure class="image is-fullwidth">
                    <img src={sunflowerpicture} class="title-image" alt="Happy girls with sunflowers"/>
                    </figure>
                </section>
                </div>
            </div>
        );
    }
}

export default HomePage;