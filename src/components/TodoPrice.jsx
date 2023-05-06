import { getProduct } from "../services/prices"
import { useState, useEffect } from "react";

// tällä funktiolla haetaan hinta tehtävälle

export function TodoPrice() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProduct().then((data) => {
          setProduct(data);
        });
      }, []);

    if(product) {
        return <p>Hinta nyt: <b>{product.price}</b> €</p>
    }

    return <p>Ladataan...</p>
}