import '../styled/section2.css'

import React from 'react'
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
export default function Section2 () {
    return (
        <div className='section2' >
 <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
        </div>
    )
}
