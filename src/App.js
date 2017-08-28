import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.state = { count: 0 } 
  }
  //score changer! WOOP WOOP!
  updateCount() {
    this.setState({ count: this.state.count + 10 });
    console.log("adding ten points to score");
  }
 



   //resets everything back to original positions
  resetCount() {
    this.setState({ count: 0 });

    

  document.getElementById('stopButton').onclick = function(){
  var resetContentClass = document.getElementById('ContentScrolling').className
  var resetContentId = document.getElementById('ContentScrolling')
  var startbutton = document.getElementById('startButton')

  resetContentId.classList.remove(resetContentClass);  
  resetContentId.classList.add('Content');
  
  startbutton.innerHTML = 'Start';


}


  }

  
  
  //starts the game
startGame(){
  var changeText = document.getElementById('startButton')
  var newText = 'Resume'
  var secondText = 'Pause'



//when starts you pause game
  if(changeText.innerHTML === secondText){
    changeText.innerHTML = newText
    console.log("pausing game")
  var startButton = document.getElementById("startButton")
  if(startButton === secondText){
    var currentClass = document.getElementById("content").className
    console.log(currentClass)
    changeText.classList.remove(currentClass)
    


  }
}else{
    changeText.innerHTML = secondText
    console.log("resume")





    var elements = document.getElementById('ContentScrolling')
    document.getElementsByClassName('startbutton').onclick = function() {
      if(this.innerHTML === 'resume') 
      { 
        this.innerHTML = 'Pause';
        elements.classList.add('pausetransition');
      } else {
        this.innerHTML = 'resume';
        var computedStyle = window.getComputedStyle(elements),
            transitionTime = computedStyle.getPropertyValue('transition');
        elements.style.transitionTime = transitionTime;
        elements.classList.remove('pausetransition');    
      }  
    }



   
}




//starts the drop in speed 
var e = document.getElementById("startButton");
if ("resume" === e.innerHTML) {
    e.innerHTML = "Pause", console.log("pausing game");
    document.getElementById("startButton").id
} else e.innerHTML = "resume", console.log("resume");
var t = document.getElementsByClassName("Content");
document.getElementById("rangeSlider").value;
for (var n in t) t.hasOwnProperty(n) && (1 ? t[n].className = "ContentScrollingspeed1" : 2 ? t[n].className = "ContentScrollingspeed2" : 3 ? t[n].className = "ContentScrollingspeed3" : 4 && (t[n].className = "ContentScrollingspeed4"), console.log(t))



 



}


createCircles(){
  
var Circles = document.createElement("BUTTON");
Circles.id = 'circle'



}





//render power
  render() {
    return (
      <div className="App">
        {/* Header Section  */}
        <div className="App-header">
          <nav id="HeaderNav" className="HeaderNav">
            <label className="scoreKeeper" id="scoreKeeper" >Score: {this.state.count}</label>
            <button id="startButton" className="startButton button" onClick={this.startGame}>Start</button>
            <button id="stopButton" className="button" onClick={this.resetCount.bind(this)}>Reset</button>

            <input className="rangeslider" id="rangeSlider" type="range" min="1" max="4" value={this.state.value} onChange={this.handleChange} step="1"/>
         
          </nav>

          
        </div>
         {/* Body Section  */}
        <div className="Content" id="ContentScrolling" >
          {this.state.createCircles}

        
          <button className="circle-1" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-2" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-3" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-4" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-5" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-6" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-7" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-8" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-9" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-10" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-11" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-12" id="circle" onClick={this.updateCount.bind(this)}></button>
          <button className="circle-13" id="circle" onClick={this.updateCount.bind(this)}></button> 
        </div>
       {/* Footer Section  */}
       {/*  <div className="footer">
          <h1> Time left:</h1>
        </div> */}
      </div>


    );
  }
}


export default App;

