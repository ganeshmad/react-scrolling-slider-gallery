## Scrolling Slider Gallery
	A library of React components to create fancy and scrollable slider
	images gallery in react that will make look and fill better images gallery.
	Scrolling Slider Gallery can be sliding or scrolling images from left to right or vise-versa dorection.

## Installation 
	Run the following command:
    `npm install scrolling-slider-gallery`

## Gallery Properties

###itemSource 
 - The itemSource properties is most important of this component which is used to pass the array of  images as source of component that will display and sliding the images from source array. 
 - This properties or itemSource must be assign with valid source.
 - Tthe following line of code shows how to use itemSource.
 
 `<SliderGallery itemSource={imagesItems}></SliderGallery>`

###slideInterval 
 - The slideInterval is another properties of this component which provides the time interval of 
 sliding images or scrolling images.
 - The slideInterval maintain speed of images sliding in image gallery. 
 - The default value is 10 as well this properties is not compulsory or required to be set.
 - for slideInterval use
 `<SliderGallery slideInterval={20}></SliderGallery>`
 
###slidingDirection 
 - SlidingDirection property provides left and right sliding direction of image gallery.
 - The deafult value is right.
 - SlidingDirection is also not compulsory property as well you can change scrolling or sliding     
    direction of  gallery.
- for right direction use the follwoing line of code
	`<SliderGallery slidingDiretion="right" ></SliderGallery>`
- for left direction  use the follwoing line of code
	`<SliderGallery slidingDirection="left" ></SliderGallery>`
 
## Step to use

	1.import SliderGallery from 'scrolling-slider-gallery'.

	2.const images =[{'id':'0','imageUrl':'https://YOUR-URL/200/200/?img1'},
				   {'id':'1','imageUrl':'https://YOUR-URL/200/200/?img2'},
				   {'id':'2','imageUrl':'https://YOUR-URL/200/200/?img3'}]; 

    3. <SliderGallery slidingDirection="left" slideInterval={80} itemSource={imagesItems}>           
	     </SliderGallery>
		 
##  Keywords
scrolling image gallery,Slider gallery, image gallery, slideshow ,slide show  images slide show, 
scrolling Slider gallery, gallery