import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Badge,Carousel} from 'antd-mobile';


export default class AppMy extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#74e7e6',color:"#000"}}
                
                >我的</NavBar>
            </div>
        )
    }
}
