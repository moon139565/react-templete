const Hero = () => {
    return <main className="hero container">
        <div className="hero-contant">
            <h1>YOUR FEET DESERVETHE BEST</h1>
            <p>The Nike Bag is a stylish and functional accessory designed to meet the needs of athletes and individuals on the go.</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shoping">
                <p>Also Available On</p>

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="hero-img">
            <img src="/images/bag.png" alt="hero-dm-img" />
        </div>
    </main>;
}

export default Hero;