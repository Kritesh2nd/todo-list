import React, { Component } from 'react';
import './header.css';
import Navbar from './comp/Navbar';
import Listbox from './comp/Listbox';
import Form from './comp/Form';
import Settings from './comp/Settings';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
class Header extends Component {
  state = {
    emptylist:{id:0,title:'do nothing',date:'0/0/000',color:'fff',completed:false},
    list:[],
    fakelist:[
      {id:0,title:'Make bed',date:'8/1/2022',color:'ff4444',completed:false},
      {id:1,title:'Do Meditation',date:'8/1/2022',color:'00C851',completed:false},
      {id:2,title:'Do PushUps',date:'8/1/2022',color:'ffbb33',completed:false},
      {id:3,title:'Study React',date:'8/1/2022',color:'33b5e5',completed:false},
      {id:4,title:'Practice in hakerrank',date:'8/1/2022',color:'2BBBAD',completed:false}
    ],
    newtodo:{id:0,title:'',date:'8/1/2022',color:'fff',completed:false},
    date:'8/1/2022',
    page:'subheader',
    create:{open:false},
    listtype:'typea',
    savedata:false,
    bgcolor:[
      {id:1,col:'ff4444',bor:'bor2-999',select:false},
      {id:2,col:'ffbb33',bor:'bor2-999',select:false},
      {id:3,col:'00C851',bor:'bor2-999',select:false},
      {id:4,col:'33b5e5',bor:'bor2-999',select:false},
      {id:5,col:'2BBBAD',bor:'bor2-999',select:false},
      {id:6,col:'4285F4',bor:'bor2-999',select:false},
      {id:7,col:'aa66cc',bor:'bor2-999',select:false},
      {id:8,col:'FF8800',bor:'bor2-999',select:false},
      {id:9,col:'007E33',bor:'bor2-999',select:false},
      {id:10,col:'0099CC',bor:'bor2-999',select:false}
    ],
    rendercount:0,
    // floor:'list'
    // floor:'form'
    floor:'settings'
  }
  c=(c)=>{
    console.log(c);
  }
  handelListtype = listtype =>{this.setState({listtype});}
  handelListTask = l =>{
    let newList = [...this.state.list];
    let index = newList.indexOf(l);
    newList[index].completed = newList[index].completed?false:true;
    this.setState({list:newList});
  }
  handelTodoBg = bg =>{
    let newBg = {...this.state.newtodo};
    let newBgColor = [...this.state.bgcolor];
    const index = newBgColor.indexOf(bg);
    newBgColor.map(bg => bg.bor='bor2-999')
    newBgColor[index].select = newBgColor[index].select?false:true;
    newBgColor[index].bor = newBgColor[index].select?'bor2-777':'bor2-999';
    newBg.color = newBgColor[index].select?newBgColor[index].col:'fff';
    this.setState({bgcolor:newBgColor,newtodo:newBg});
  }
  handelTodoTitle = e =>{
    let newTodo = {...this.state.newtodo};
    let listClone = [...this.state.list];
    let index = this.state.list.length;
    // console.log(listClone.length,e)
    let newId = listClone.length===0?0:listClone[index-1].id+1;
    newTodo.title = e.target.value;
    newTodo.id = newId;
    this.setState({newtodo:newTodo})
  }
  handelNewTodo = add =>{
    let newList = [...this.state.list];
    if(this.state.newtodo.title!=''){
      newList.push(this.state.newtodo);
      this.setState({list:newList,floor:'list'});
    }
    if(this.state.savedata){
      console.log('savedata true',this.state.savedata);
    }
  }
  handelDelete = (l) =>{
    const newList = this.state.list.filter(li => (li != l))
    this.setState({list:newList});
  }
  handelFloorList = floor =>{this.setState({floor})}
  handelSettingsBtn = () =>{
    if(this.state.floor === 'settings'){return <FaTimes className='cup'/>;}
    else{return <AiOutlineSetting className='cup'/>}  
  }
  handelSettingsEffect = () =>{
    let floorValue;
    if(this.state.floor == 'settings'){floorValue = 'list';}
    else{floorValue = 'settings';}
    this.setState({floor:floorValue});
  }
  handelDataSave = () =>{
    if(this.state.savedata){
      this.setState({savedata:false})
      
    }
    else{
      this.setState({savedata:true})
    }
  }
  fakeDataSave = () =>{
    let getLocalStorageData = localStorage.getItem("todos");
    // console.log(getLocalStorageData);
    let listArray = [...this.state.fakelist];
    localStorage.setItem("todos", JSON.stringify(listArray));
    getLocalStorageData = localStorage.getItem("todos");
    // console.log(getLocalStorageData);
  }
  print = () =>{
    // let getLocalStorageData = localStorage.getItem("todos");
    let getLocalStorageData = JSON.parse(localStorage.getItem("todos"));
    console.log("savedata",this.state.savedata);
    console.log('----------------------------------------------------------------');
    console.log("getLocalStorageData",getLocalStorageData);
    console.log("getLocalStorageData",getLocalStorageData[0]);
    console.log('----------------------------------------------------------------');
    console.log("this.state.list",this.state.list);
    console.log("hello",this.state.list[0],'end')
    console.log('================================================================');
  }
  // testOne = () =>{
  //   let getLocalStorageData = localStorage.getItem("todos");
  //   console.log(getLocalStorageData);
  //   let listArray;
  //   if(getLocalStorageData == null){listArray = [];}
  //   else{listArray = JSON.parse(getLocalStorageData);}
  //   listArray=[];
  //   listArray = [...this.state.list];
  //   localStorage.setItem("todos", JSON.stringify(listArray));
  //   getLocalStorageData = localStorage.getItem("todos");
  //   console.log(getLocalStorageData);
  // }
  handelClearLocalStorgae = () =>{
    localStorage.clear();
  }
  handelFloorListHere = () =>{
    const {floor} = this.state;
    let floorDiv;
    if(floor == 'list'){
      floorDiv = <div className="hsFloor2 hsFloor0 bor flex fdc fg1">
        <div className="hsF2Room1 bor">
          <Navbar 
            handelListtype={this.handelListtype} 
            listacount={this.state.list.filter(l => !l.completed).length}
            listbcount={this.state.list.filter(l => l.completed).length}
          />
        </div>
        <div className="hsF2Room2 flex fdc bor">
          <Listbox 
            list={this.state.list} 
            listtype={this.state.listtype} 
            bgcolor={this.state.bgcolor}
            handelListTask={this.handelListTask}
            handelDelete={this.handelDelete}
            handelFloorList={this.handelFloorList}
          />
        </div>
      </div>;
    }
    else if(floor == 'form'){
      floorDiv = <div className="hsFloor3 hsFloor0 bor">
          <Form 
            bgcolor={this.state.bgcolor} 
            handelTodoBg={this.handelTodoBg}
            handelTodoTitle={this.handelTodoTitle}
            handelNewTodo={this.handelNewTodo}
            handelFloorList={this.handelFloorList}
          />
        </div>
    }
    else if(floor == 'settings'){
      floorDiv = <div className="hsFloor4 hsFloor0 bor">
          <Settings
            savedata={this.state.savedata}
            handelDataSave={this.handelDataSave}
            handelClearLocalStorgae={this.handelClearLocalStorgae}
            fakeDataSave={this.fakeDataSave}
            console={this.print}
          />
        </div>
    }
    return floorDiv;
  }
  
  componentDidMount(){
    let newcount = 1;
    this.setState({rendercount:1});
    this.checkLocalStorage();
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
    this.checkSaveData();
  }
  shouldComponentUpdate() {
    if(this.state.rendercount==0){
      console.log('Greeting - shouldComponentUpdate lifecycle - true');
      return true;
    }
    else{
      console.log('Greeting - shouldComponentUpdate lifecycle - false');
      return false;
    }
    
  }
  checkLocalStorage=()=>{
    const {savedata} = this.state;
    let getLocalStorageData = localStorage.getItem("todos");
    if(getLocalStorageData==null){
      this.setState({savedata:false});
    }
    else{
      this.setState({savedata:true});
    }
  }
  checkSaveData=()=>{
    const {savedata} = this.state;
    
    if(savedata==true){
      this.c('trueee');
      this.savedataTrue();
    }
    else{
      this.c('falsee');
    }
    console.log("save data after",savedata);
  }
  savedataTrue=()=>{
    // let getLocalStorageData = localStorage.getItem("todos");
    let getLocalStorageData = JSON.parse(localStorage.getItem("todos"));
    this.c('hi',getLocalStorageData[0]);
    const can = ['apple','ball','cat'];
    this.setState({list:getLocalStorageData});
    
  }
  render() { 
    return (
      <div className='header_shell flex fdc bor'>
        <div className="hsFloor1 hsFloor0 bor flex">
          <div className="hsF1Lft bor flex">
            <div className="hsF1Title bor">Todo List</div>&nbsp;&nbsp;
            <div className="hsF1TodoCount flex jcc aic bor">
              <span className='hsF1TodoCountSpan'>
                {this.state.list.length}
              </span>
            </div>
          </div>
          <div className="hsF1Rit bor flex jcfe">
            <div className="hsF1Date bor flex aic">8/5/2022</div>&nbsp;&nbsp;
            <div className="hsF1SettingBox bor flex jcc aic" onClick={()=>this.handelSettingsEffect()}>
              {this.handelSettingsBtn()}
            </div>
          </div>
        </div>
        {this.handelFloorListHere()}
      </div>
    );
  }
}
export default Header;