import React, { Component } from 'react'
import { NavBar, Icon ,Tabs,Grid} from 'antd-mobile';
import { AutoComplete } from 'antd';
const tabs = [
    { title: '推荐', },
    { title: '冬季', },
    { title: '宜家', },
    { title: '小清新', },
    { title: '小户型', },
    { title: '个性色彩', },
  ];
export default class AppLinggan extends Component {
    state={
        data1:[
            {icon:'./images/linggan1.jpg'},
            {icon:'./images/linggan2.jpg'},
            {icon:'./images/linggan3.jpg'},
            {icon:'./images/linggan4.jpg'},
            {icon:'./images/linggan1.jpg'},
            {icon:'./images/linggan2.jpg'},
        ]
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#74e7e6',color:"rgb(255, 255, 255)"}}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                ]}
                >灵感
                </NavBar>
                <div id="linggan">
                    <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        tabBarUnderlineStyle={{border:"none"}}
                        tabBarActiveTextColor="#3fcccb"
                        >
                        <div style={{ height: '530px', backgroundColor: '#fff' }}>
                            <div>
                                {/* <Grid  data={this.state.data1} columnNum={3}> */}
                                {/* <Grid  data={data} columnNum={3}>
                                    <img style={{width:'200px', height: '200px'}} src={data.icon}></img>
                                </Grid> */}
                                <Grid data={this.state.data1}
                                    columnNum={2}
                                    renderItem={dataItem => (
                                        <div id="imgout">
                                            <img src={dataItem.icon} style={{ width: '160px', height: '170px' }} alt="" />
                                            {/* <div style={{ color: 'red', fontSize: '14px', marginTop: '12px' }}>
                                            </div> */}
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div style={{ height: '530px', backgroundColor: '#fff' }}>
                            <div>
                                {/* <Grid  data={this.state.data1} columnNum={3}> */}
                                {/* <Grid  data={data} columnNum={3}>
                                    <img style={{width:'200px', height: '200px'}} src={data.icon}></img>
                                </Grid> */}
                                <Grid data={this.state.data1}
                                    columnNum={2}
                                    renderItem={dataItem => (
                                        <div id="imgout">
                                            <img src={dataItem.icon} style={{ width: '150px', height: '160px' }} alt="" />
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div style={{ height: '530px', backgroundColor: '#fff' }}>
                            <div>
                                {/* <Grid  data={this.state.data1} columnNum={3}> */}
                                {/* <Grid  data={data} columnNum={3}>
                                    <img style={{width:'200px', height: '200px'}} src={data.icon}></img>
                                </Grid> */}
                                <Grid data={this.state.data1}
                                    columnNum={2}
                                    renderItem={dataItem => (
                                        <div id="imgout">
                                            <img src={dataItem.icon} style={{ width: '150px', height: '160px' }} alt="" />
                                            {/* <div style={{ color: 'red', fontSize: '14px', marginTop: '12px' }}>
                                            </div> */}
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div style={{ height: '530px', backgroundColor: '#fff' }}>
                            <div>
                                {/* <Grid  data={this.state.data1} columnNum={3}> */}
                                {/* <Grid  data={data} columnNum={3}>
                                    <img style={{width:'200px', height: '200px'}} src={data.icon}></img>
                                </Grid> */}
                                <Grid data={this.state.data1}
                                    columnNum={2}
                                    renderItem={dataItem => (
                                        <div id="imgout">
                                            <img src={dataItem.icon} style={{ width: '150px', height: '160px' }} alt="" />
                                            {/* <div style={{ color: 'red', fontSize: '14px', marginTop: '12px' }}>
                                            </div> */}
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div style={{ height: '530px', backgroundColor: '#fff' }}>
                            <div>
                                {/* <Grid  data={this.state.data1} columnNum={3}> */}
                                {/* <Grid  data={data} columnNum={3}>
                                    <img style={{width:'200px', height: '200px'}} src={data.icon}></img>
                                </Grid> */}
                                <Grid data={this.state.data1}
                                    columnNum={2}
                                    renderItem={dataItem => (
                                        <div id="imgout">
                                            <img src={dataItem.icon} style={{ width: '150px', height: '160px' }} alt="" />
                                            {/* <div style={{ color: 'red', fontSize: '14px', marginTop: '12px' }}>
                                            </div> */}
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div style={{ height: '530px', backgroundColor: '#fff' }}>
                            <div>
                                {/* <Grid  data={this.state.data1} columnNum={3}> */}
                                {/* <Grid  data={data} columnNum={3}>
                                    <img style={{width:'200px', height: '200px'}} src={data.icon}></img>
                                </Grid> */}
                                <Grid data={this.state.data1}
                                    columnNum={2}
                                    renderItem={dataItem => (
                                        <div id="imgout">
                                            <img src={dataItem.icon} style={{ width: '150px', height: '160px' }} alt="" />
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}
