import React, { Component }  from 'react';
import { Input } from 'semantic-ui-react'
import Presentation from "./display";
import { Container, Header } from "semantic-ui-react";
import DropdownExampleMultipleSearchSelection from "./dropdownselect"


const preload = [
    {
      "name": "Ojo",
      "zone": "Lagos State",
      "region": "South West"
    },
    {
      "name": "Ayhiazu Mbaise",
      "zone": "Imo State",
      "region": "South East"
    },
    {
      "name": "Akoko-Edo",
      "zone": "Edov State",
      "region": "South South"
    },
    {
      "name": "Anka",
      "zone": "Zamfara State",
      "region": "North West"
    },
    {
      "name": "Akwanga",
      "zone": "Nasarawa State",
      "region": "North Central"
    }
  ]



class MyInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        filter: this.props.keyDefaults
      };
      this.myRef = React.createRef();
      this.handleChange = this.handleChange.bind(this);
      this.filterChange = this.filterChange.bind(this);
    }
    
   handleChange(event) {
    this.setState({value: event.target.value});
   }
    
  filterChange(event,data) {
    this.setState({filter: data.value.length > 0  ? data.value: this.props.keyDefaults});
  }
  
  
  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
   console.log(this.props)
   return (
      <div>
        <div className="ui input">
          {this.props.inputRender( this.handleChange, this.myRef)}
          {this.props.dropdownRender(this.filterChange, this.makeOptions)}
         </div>
         {this.props.presentationRender( this.state.value, this.state.filter)}
        
      </div>
    );
  }
 
}



const App = () => { 
    
function makeString(item, fields) {
    console.log(fields)
    return fields.map( aKey => item[keys[aKey]]).join("")
}
  
function filterItems(arr, find, fn, on) {
  if (find === "") return arr
  return arr.filter(function(el) {
      //el is an object, on are the fields from the object (el) to be used to 
      //used to create a string which is then searched for find string
      return fn(el, on).toUpperCase().indexOf(find.toUpperCase()) >= 0
  })
}

const headers = ["Name", "Zone", "Region"]
const keys =    ["name", "zone", "region"]
const keyDefaults = [0,1,2]
const makeOptions = () => {
     return headers.map( (aKey,index) => { return {key: index, text: aKey, value: index} })
  }
 
  
 return (
 <Container style={{ margin: 20 }}>
  <Header as="h3">Filter Data</Header>
  <div>
    <MyInput
         keyDefaults={keyDefaults}
         presentationRender={(searchFor,columnFilter) =>     <Presentation
               data={filterItems(preload, 
                                searchFor, 
                                makeString, 
                                columnFilter)}
               headers={headers}
          />}
         inputRender={(changeHandler, ref) =>  <Input 
                onChange={changeHandler} 
                placeholder='Search...' 
                ref={ref}
               
          /> }  
          dropdownRender={(onChange) =>  <DropdownExampleMultipleSearchSelection
             onChange={onChange}
             options={makeOptions()}
             placeholder='Filter On'
          />}
         
      />
  </div>
  </Container>
)
}

export default App;
