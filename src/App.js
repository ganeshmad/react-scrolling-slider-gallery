import React from "react";
import SliderGallery from "./lib";
const imagesItems =
[{'id':'1','imageUrl':require('./images/image_1.jpeg')},
{'id':'2','imageUrl':require('./images/image_2.jpeg')},
{'id':'4','imageUrl':require('./images/image_4.jpeg')},
{'id':'5','imageUrl':require('./images/image_5.jpeg')},
{'id':'6','imageUrl':require('./images/image_6.jpeg')},
{'id':'7','imageUrl':require('./images/image_7.jpeg')},
{'id':'8','imageUrl':require('./images/image_8.jpeg')},
{'id':'9','imageUrl':require('./images/image_9.jpeg')},
{'id':'10','imageUrl':require('./images/image_10.jpeg')},
{'id':'11','imageUrl':require('./images/image_11.jpeg')},
{'id':'12','imageUrl':require('./images/image_12.jpeg')},
{'id':'13','imageUrl':require('./images/image_13.jpeg')},
{'id':'14','imageUrl':require('./images/image_14.jpeg')},
{'id':'15','imageUrl':require('./images/image_15.jpeg')}];


const App = () => (
  <div>
    <SliderGallery slidingDirection="right" itemSource={imagesItems}></SliderGallery>
  </div>
);

export default App;