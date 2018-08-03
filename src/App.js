import React from "react";
import SliderGallery from "./lib";
const imagesItems =[{'id':'0','imageUrl':'https://picsum.photos/200/200/?image611'},
				   {'id':'1','imageUrl':'https://picsum.photos/200/200/?image612'},
				   {'id':'2','imageUrl':'https://picsum.photos/200/200/?image613'},
				   {'id':'3','imageUrl':'https://picsum.photos/200/200/?image614'},
				   {'id':'4','imageUrl':'https://picsum.photos/200/200/?image615'},
				   {'id':'5','imageUrl':'https://picsum.photos/200/200/?image616'},
				   {'id':'6','imageUrl':'https://picsum.photos/200/200/?image617'},
				   {'id':'7','imageUrl':'https://picsum.photos/200/200/?image618'},
				   {'id':'8','imageUrl':'https://picsum.photos/200/200/?image619'},
				   {'id':'9','imageUrl':'https://picsum.photos/200/200/?image710'},
				   {'id':'10','imageUrl':'https://picsum.photos/200/200/?image711'},
				   {'id':'11','imageUrl':'https://picsum.photos/200/200/?image712'},
				   {'id':'12','imageUrl':'https://picsum.photos/200/200/?image713'},
				];
const App = () => (
  <div>
    <SliderGallery slidingDirection="left" itemSource={imagesItems}></SliderGallery>
  </div>
);

export default App;