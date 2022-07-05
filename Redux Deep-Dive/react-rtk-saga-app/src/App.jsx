import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import catSlice, { getCatsFetch } from "./app/catSlice";

const App = () => {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  console.log(cats);

  const status = useSelector((state) => state.cats.isLoading);
  if (status) {
    return <h1>Loading..</h1>;
  } else {
    return (
      <div className="App">
        <h1>Cat Species Gallery</h1>
        <p>Images of Different Species of Cats</p>
        <hr />
        <div className="Gallery">
          {cats.map((cat) => (
            <div className="row" key={cat.id}>
              <div className="column column-left">
                <img
                  src={cat.image.url}
                  alt={cat.name}
                  width="200"
                  height="200"
                />
              </div>
              <div className="column column-right">
                <h2>{cat.name}</h2>
                <h5> Temperament: {cat.temperament}</h5>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default App;
