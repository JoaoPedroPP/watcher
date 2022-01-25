import React from 'react'
import logo from './logo.svg'
import tauriCircles from './tauri.svg'
import tauriWord from './wordmark.svg'
import './App.css'

import Title from './components/Title/title';
import Device from './components/Device/device';

const devices = [{ name: "Battery", api: "get_battery_temperature" }];

function App() {
  return (
    <div className="App">
      <Title />
      {devices.map((device) => <Device name={device.name} api={device.api} />)}
    </div>
  )
}

export default App
