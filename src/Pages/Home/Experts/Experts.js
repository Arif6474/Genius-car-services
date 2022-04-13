import React from 'react';
import Expert from '../Expert/Expert'

const Experts = () => {
    const natures = [
        {
          "id": "62549600f9c68dee0050e54e",
          "picture": "https://i.ibb.co/L0MJDhk/md-kabir-hossen-ufm-Weh-JVii0-unsplash-ccexpress.jpg",
          "name": "Mathis Pickett"
        },
        {
          "id": "62549600ae125d9c49263503",
          "picture": "https://i.ibb.co/pz22TKH/guillaume-briard-l-SXp-V8b-De-MA-unsplash-ccexpress.jpg",
          "name": "Amelia Wong"
        },
        {
          "id": "62549600ccf166ba7737b48f",
          "picture": "https://i.ibb.co/swrkwKH/luca-baggio-e-KU3-JGNCCMg-unsplash-ccexpress.jpg",
          "name": "April Levy"
        },
        {
          "id": "625496002585ae27d2de209a",
          "picture": "https://i.ibb.co/K5ySt4J/thomas-griesbeck-BS-Uxe8w-U5-Y-unsplash-ccexpress.jpg",
          "name": "Dominique Christensen"
        },
        {
          "id": "6254960011ec4cd0c3460e3a",
          "picture": "https://i.ibb.co/dJJQ01r/chris-holgersson-zshy-Cr6-HGw0-unsplash-ccexpress.jpg",
          "name": "Latasha Buchanan"
        },
        {
          "id": "6254960011ecfcd0c3460e3a1",
          "picture": "https://i.ibb.co/4scdspb/cadu-de-castro-alves-h-ECLlj-C7-Wm8-unsplash-ccexpress.jpg",
          "name": "Latasha Buchanan"
        },
        {
          "id": "6254960011ec4cd0c3460e3a23",
          "picture": "https://i.ibb.co/XxWZDT3/mohsen-taheri-h-P1-T2-EM1d-Uw-unsplash-ccexpress.jpg",
          "name": "Latasha Buchanan"
        },
        {
          "id": "6254960011ec4cd0c3460e3a64",
          "picture": "https://i.ibb.co/2ZJ0C1p/irish83-q-Bu-Yqr-LXUDI-unsplash-ccexpress.jpg",
          "name": "Latasha Buchanan"
        },
        {
          "id": "625496009dee51f83a6a36176",
          "picture": "https://i.ibb.co/L0MJDhk/md-kabir-hossen-ufm-Weh-JVii0-unsplash-ccexpress.jpg",
          "name": "Holmes Dodson"
        }
      ]
    return (
        <div id="experts" className="container mt-4">
            <h2 className="text-success text-center">Natural Beauty </h2>
            <div className="row ">
                {
                  natures.map(nature => <Expert key={nature.id} nature={nature}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;