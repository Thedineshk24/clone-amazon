import React from "react";

// css
import "./Home.css";
import Product from "./Product";

const Home = () => {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ValentinesDaySH2021V2/d18e570a-976d-487d-ae19-8cc89b266d7f._UR3000,600_SX1500_FMwebp_.jpg"
					alt="amazon-prime-video"
				/>

				<div className="home__row">
					<Product
						id="1215145"
						title="The lean start-up"
						image="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL._SX325_BO1,204,203,200_.jpg"
						price={400}
						rating={5}
					/>
					<Product
						id="11111"
						title="Atomic Habits"
						image="https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"
						price={600}
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="5454545"
						title="FLANCCI Blue Light Blocking Glasses Computer Gamer Eyeglasses Gaming Non Prescription Square Frame Nerd [Anti Eyestrain] High Tech Anti Bluelight Glasses, Light Weight, Unisex (Men/Women)(Black)"
						image="https://images-na.ssl-images-amazon.com/images/I/51OEXZWqcfL._AC_SL1000_.jpg"
						price={800}
						rating={4}
					/>
					<Product
						id="544546"
						title="Blue Light Glasses, 3pack Blue Light Blocking Glasses. Reduce Eye Fatigue. Dryness and Vision Loss and (Black + Transparent + Leopard)"
						image="https://cdn.shopify.com/s/files/1/0015/2879/1092/products/SM4502-3_1024x.jpg?v=1597650949"
						price={2000}
						rating={5}
					/>
					<Product
						id="555555555555"
						title="Black Gold Full Rim Rectangle Vincent Chase SLEEK STEEL VC E12395-C1 Eyeglasses"
						image="https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/1325x636/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12395-c1-eyeglasses_g_3194.jpg"
						price={855}
						rating={3}
					/>
				</div>
				<div className="home__row">
					<Product
						id="19000"
						title="All-New Toshiba 43LF621U21 43-inch Smart 4K UHD with Dolby Vision - Fire TV Edition, Released 2020"
						image="https://images-na.ssl-images-amazon.com/images/I/61XJCCT1mIL._AC_SL1000_.jpg"
						price={19000}
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
