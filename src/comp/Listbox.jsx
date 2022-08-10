import React, { Component } from 'react';
import './css/listbox.css';
import List from './List';
class Listbox extends Component {
  
  state = {  } 
  handelList(value){
    let listLet;
    if(this.props.list.length==0){
      listLet = <div className='lbsNoTodos bor pt5 pb2'>There are no todos</div>;
    }
    else if(value=='typea'){
      listLet = this.props.list.map(l => (!l.completed)?<List 
          key={l.id} 
          list={l} 
          handelListTask={this.props.handelListTask} 
          handelDelete={this.props.handelDelete}
        />:'');
    }
    else if(value=='typeb'){listLet = this.props.list.map(l => (l.completed)?<List 
        key={l.id} 
        list={l} 
        handelListTask={this.props.handelListTask} 
        handelDelete={this.props.handelDelete}
      />:'');}
    return listLet;
  }
  render() { 
    return (
      <div className='listbox_shell bor'>
        <div className="lbsFloor1 bor flex fdc pr5">
          {this.handelList(this.props.listtype)}
        </div>
        <div className="lbsFloor2 pt10 pr5">
          <button className="newTodoBtn cup w100" onClick={()=>this.props.handelFloorList('form')}>Add</button>
        </div>
      </div>
    );
  }
}
export default Listbox;