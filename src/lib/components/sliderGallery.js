import React from 'react';
import "./SliderGallery.css";
var timer=0;

class SliderGallery extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {imagesItems:[],timeInterval:15,direction:'right',sourceLen: 0};
  }

  setSateProperties(){

    if(this.isValid(this.props.itemSource)){
      this.setState({sourceLen:this.props.itemSource.length});
    }

    if(this.isValid(this.props.slidingDirection)){
      this.setState({direction:this.props.slidingDirection});
    }

    if(this.isValid(this.props.slideInterval) && this.props.slideInterval>10){
      this.setState({timeInterval:this.props.slideInterval});
    }
  }

  isValid(property){
    if(property!==undefined && property!=null){
      return true;
    }
    return false;
  }

  slider(bool){
    if(this.state.sourceLen!==1){
      if(bool){
        var cloneItems =[...this.state.imagesItems];
        var lastItemLeftBound=cloneItems[cloneItems.length-1].positionProperty;
        timer = setInterval(()=>{
          for (let index = 0; index < cloneItems.length; index++) {
              var eachImageElement = document.querySelector('#image_container_'+index.toString());
              var directionAttribute =cloneItems[index].direction;
              var position=eachImageElement.style[directionAttribute];
              var isPisxelExist = position.includes("px");
              if(isPisxelExist){
                  position= position.split('px');
                  position=parseInt(position[0],10);
              }

              if(position > -201){
                  position=position-1;
                  eachImageElement.style[directionAttribute]=position+'px';
                  eachImageElement.style.display='block';
              }
              else{
                eachImageElement.style.display='none';
                eachImageElement.style[directionAttribute]=lastItemLeftBound+'px';
              }
          }
        },this.state.timeInterval);
      }else{
        clearInterval(timer);
      }
    }
  }

  bindingGallery(){
    if(this.state.sourceLen > 0){
      var temp=[];
      var sliderDirection=this.state.direction;
      var positionValue=0;
      var gallerywrapper= document.querySelector("#gallerywrapper");
      var container= document.querySelector("#container");
      const containerWidth=200;

      switch(this.state.sourceLen){
          case 1:gallerywrapper.style.width= (1* containerWidth)+25+"px";;
                 container.style.width= (1* containerWidth)+"px";break;
          case 2:gallerywrapper.style.width= (1* containerWidth)+5+"px";;
                 container.style.width= (1* containerWidth)+5+"px";break;
          case 3:gallerywrapper.style.width=(2*containerWidth)+"px";
                 container.style.width= (2* containerWidth)+"px";break;
          case 4:gallerywrapper.style.width=(3*containerWidth)+"px";
                 container.style.width= (3* containerWidth)+"px";break;
          case 5:gallerywrapper.style.width=(4*containerWidth)+"px";
                 container.style.width= (4* containerWidth)+"px";break;
          case 6:gallerywrapper.style.width=(5*containerWidth)+"px";
                 container.style.width= (5* containerWidth)+"px";break;
          case 7:gallerywrapper.style.width=(6*containerWidth)+"px";
                 container.style.width= (6* containerWidth)+"px";break;
          default :gallerywrapper.style.width="auto";
                   container.style.width="auto";
      }

      for (let i = 0; i < this.props.itemSource.length; i++) {
        var element = {'direction':sliderDirection,'imagePath':this.props.itemSource[i].imageUrl,'positionProperty':positionValue,'mouseout':this.mouseOut.bind(this),'mouseover':this.mouseOver.bind(this)};
        temp.push(element);
        positionValue=positionValue + 201;
      }
      
      this.setState({imagesItems:temp,isOpen: false});
      setTimeout(()=>{ this.slider(true);},50);
    }
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setSateProperties();
      this.bindingGallery();
    },100);
  }

  mouseOut() {
    this.slider(true);
  }
  
  mouseOver() {
    this.slider(false);
  }

  componentWillUnmount(){
    this.slider(false);
  }

  render() {
    return (
      <div id="gallerywrapper" className="gallery-wrapper">
       <div id="container" className="gallery-container">
           <div className="left-paper"></div>
              {
              this.state.imagesItems.map(function(item,key){ 
              var pimgid='image_container_'+key;
              const directionStyles = item.direction==='left' ? {direction:{left:item.positionProperty}} : {direction:{right:item.positionProperty}};
              
              return <div className="image-paper" id={pimgid} key={key} style={directionStyles.direction} >
                    <div onMouseOut={()=>item.mouseout()} onMouseOver={()=>item.mouseover()}>
                      <img className="gallery-img" src={item.imagePath} alt='loading'/>
                      </div>
                  </div>
              })
              }
            <div className="right-paper"></div>
          </div>
      </div>

    );
  }
}
export default SliderGallery