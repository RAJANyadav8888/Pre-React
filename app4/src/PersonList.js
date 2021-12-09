import React, { Component } from "react";
import { connect} from "react-redux"

class PersonList extends Component{

    
    render(){
        console.log(this.props.personList);
        return(
            <>
            <h1>Person</h1>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Options</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.personList.map((person,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{person.name}</td>
                                <td>{person.age}</td>
                                <td><button
                                 className="btn btn-danger"
                                 onClick={()=>{
                                    this.props.deletePersonByIndex(index);
                                 }}
                                 >Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
  personList:state.personList,
    };
};
const mapDispatchToProps=(dispatch)=>{
    return{
  deletePersonByIndex: (index)=>
      dispatch({type :"PERSON_DELETE", payload:index}),
  
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(PersonList);