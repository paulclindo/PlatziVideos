import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Header />
      <Search />
      {mylist.length > 0 ? (
        <Categories title="Mi lista">
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem isList key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      ) : (
        <p
          style={{
            margin: "0 30px 60px",
            color: "white",
            textTransform: "uppercase",
            fontSize: "18px",
          }}
        >
          You dont have any favorite for now! :(
        </p>
      )}

      {trends && (
        <Categories title="Tendencias">
          <Carousel>
            {trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
