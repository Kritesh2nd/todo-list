import React, { Component } from 'react';
import './css/settings.css';
class Settings extends Component {
  state = {  }
  dataOnOff = (data) =>{
    if(!data){return 'Off';}
    else{return 'On';}
  }
  render() { 
    return (
      <div className='settings_shell bor'>
        <div className="ssFloor1 ssFloor0 bor flex jcc">
          <div className="ssBtnSaveData cup" onClick={()=>this.props.handelDataSave()}>
            Save Data&nbsp;&nbsp;{this.dataOnOff(this.props.savedata)}
          </div>
        </div>
        <div className="ssFloor2 ssFloor0 bor flex jcc">
          <div className="ssBtnClearData bor cup" onClick={()=>this.props.handelClearLocalStorgae()}>Clear Local Storage</div>
        </div>
      </div>
    );
  }
}
export default Settings;