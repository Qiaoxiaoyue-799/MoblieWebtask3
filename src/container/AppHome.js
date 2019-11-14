import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Badge,Carousel} from 'antd-mobile';
import { Grid } from 'antd-mobile';
export default class AppHome extends Component {
    state={
        data1:[
            {icon:'./images/1.jpg',tit:'热门品牌'},
            {icon:'./images/2.jpg',tit:'私人搭配师'},
            {icon:'./images/3.jpg',tit:'选购指南'},
        ]
    }
    render() {
        // const data = Array.from(new Array(3)).map((_val, i) => ({
        //         icon: './images/1.jpg',
        //     })
        // );
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#74e7e6',color:"rgb(255, 255, 255)"}}
                
                >住吧家居</NavBar>
                <div style={{ height: '200px', backgroundColor: '#fff' }}>
                    <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {[1,2,3].map(val => (
                        <a
                        key={val}
                        href="[图片]http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: 200}}
                        >
                        <img
                            src={`./images/c${val}.jpg`}
                            alt=""
                            style={{ width: '100%',  height:200,verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </div>
                <div id="grid">
                    {/* <Grid  data={this.state.data1} columnNum={3}> */}
                    {/* <Grid  data={data} columnNum={3}>
                        <img style={{width:'200px', height: '200px'}} src={data.icon}></img>
                    </Grid> */}
                    <Grid data={this.state.data1}
                        columnNum={3}
                        renderItem={dataItem => (
                            <div id="homeimg">
                                <img src={dataItem.icon} style={{ width: '95px', height: '95px' }} alt="" />
                                {/* <div style={{ color: 'red', fontSize: '14px', marginTop: '12px' }}>
                                </div> */}
                            </div>
                        )}
                    />
                </div>
                <div id="homehot">
                    <span>热门推荐</span>
                    <img src={`./images/4.jpg`} style={{ width: '100%', height: '180px', marginBottom:'10px'}} alt="" />
                    <img src={`./images/4.jpg`} style={{ width: '100%', height: '180px', marginBottom:'10px' }} alt="" />
                    <img src={`./images/4.jpg`} style={{ width: '100%', height: '180px' }} alt="" />
                </div>
            </div>
        )
    }
}
