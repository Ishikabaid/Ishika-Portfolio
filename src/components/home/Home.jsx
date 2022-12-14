import Social from "./Social";
import "./home.css";
import Data from "./Data";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social />

                    <div className="home-img"></div>

                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home;