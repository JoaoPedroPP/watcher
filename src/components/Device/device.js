import React, { useState } from 'react'
import styles from './device.module.css';
import { invoke } from '@tauri-apps/api/tauri';


function Device(props) {
    const [Value, setValue] = useState('10')
    const drill_down = async () => {
        try {
            const resp = await invoke(props.api, { event: "test" })
            setValue(resp);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className={styles.display_info}>
                <h4>{props.name}</h4>
                <i className='fa fa-angle-down' onClick={drill_down}></i>
            </div>
            <div className={styles.data}>
                <p>Temperature:</p>
                <p>{Value}</p>
            </div>
        </div>
    );
}

export default Device;