
import React, {Component} from 'react';
import data from '../data';

class Body extends Component{

   constructor(){
      super();

      this.state = {

         index: 0

      }

   }
     

   handleChangePrevious = () => {
     // -------> This Solution loops it around to last object in array<-----------
      if(this.state.index !== 0){
         this.setState({index: this.state.index -1})
      } else {
         this.setState({index: data.length-1})
         //alert('Last profile in list.')
      }
            // -------> This Solution stops it at first object in array<-----------
      // if(this.state.index !== 0){
      //    this.setState({index: this.state.index -1})
      // }
      
   }

   handleChangeNext = () => {
      // -------> This Solution loops it around to first object in array<-----------
      if(this.state.index !== data.length-1){
         this.setState({index: this.state.index +1 })
         } else {
            this.setState({index: 0})
            alert('Congradulations! you finished.')
         }
      
            // -------> This Solution stops it at last object in array<-----------
      // if(this.state.index !== data.length-1){
      // this.setState({index: this.state.index +1 })
      // }
   }



   render() {
      console.log(data)  // information coming in 
      return (
         <div className = 'bodyBlock'>
            <div className = 'objCard'>

            <div className = 'nameBlock'>
               <h2> {data[this.state.index].name.first} {data[this.state.index].name.last}</h2>
               <h2> {this.state.index+1}/{data.length} </h2>          
            </div>


            <div>
               <div className = 'infoBlock'>
                  <p><b>From:</b> {data[this.state.index].city}, {data[this.state.index].country}</p>
                  <p><b>Job Title:</b> {data[this.state.index].title}</p>
                  <p> <b>Employer:</b> {data[this.state.index].employer}</p>
                  
      
               </div>

               <div className = 'movieBlock'> <b>Favorite Movies:</b>
                  <li className = 'movieItems'>{data[this.state.index].favoriteMovies[0]}</li>
                  <li className = 'movieItems'>{data[this.state.index].favoriteMovies[1]}</li>
                  <li className = 'movieItems'>{data[this.state.index].favoriteMovies[2]}</li>
               </div>  
            </div> 

         </div>
   
            
            <div className = 'changeButtons'> 
               <button onClick = {this.handleChangePrevious}> Previous </button>
               <button onClick = {this.handleChangeNext}> Next </button>
            </div>


            
         
         </div>
      )
   }      
   




   
}

 export default Body





