import React from "react";

import "./Home.css";
import Product from "../../components/product/Product";
import Header from "../../components/header/Header";

function HomePage() {
    return (
        <>
            <Header />
            <div className="home">
                <div className="home__container">
                    <img className="home__image" src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" alt="Amazon Banner" />
                    <div className="home__row">
                        <Product id={1} title="I will become a pro developer" price={59} image="https://m.media-amazon.com/images/I/518-qEJJcPL.jpg" rating={5} />
                        <Product id={2} title="I will become a pro developer" price={59} image="https://m.media-amazon.com/images/I/71Idpz-Up2L.jpg" rating={1} />
                        <Product id={3} title="I will become a pro developer" price={59} image="https://m.media-amazon.com/images/I/71Idpz-Up2L.jpg" rating={3} />
                    </div>
                    <div className="home__row"></div>
                    <div className="home__row"></div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
