import React, { Component } from 'react'
import { NavBar, Grid ,SearchBar,Carousel,WingBlank, WhiteSpace} from 'antd-mobile';

// const PlaceHolder = ({ className = '', ...restProps }) => (
//     <div className={`${className} placeholder`} {...restProps}>Block</div>
// );
  
export default class AppShop extends Component {
    // componentDidMount() {
    // this.autoFocusInst.focus();
    // }
    onChange= (value) => {
    this.setState({ value });
    };
    clear = () => {
    this.setState({ value: '' });
    };
    // handleClick = () => {
    // this.manualFocusInst.focus();
    // }
    state={
        data1:[
            {icon:'./images/shop1.jpg',tit:"桌"},
            {icon:'./images/shop2.jpg',tit:"床"},
            {icon:'./images/shop3.jpg',tit:"椅"},
            {icon:'./images/shop4.jpg',tit:"几"},
            {icon:'./images/shop5.jpg',tit:"柜"},
            {icon:'./images/shop6.jpg',tit:"书架"},
            {icon:'./images/shop7.jpg',tit:"沙发"},
            {icon:'./images/shop8.jpg',tit:"家居饰品"},
            {icon:'./images/shop9.jpg',tit:"户外家具"},
            {icon:'./images/shop10.jpg',tit:"全部分类"},
        ]
    };
    
    render() {
        return (
            <div>
                <NavBar id="shoptop"
                    // style={{position:'absolute',top:0}}
                    rightContent={[
                        <icon className="iconfont icon-gouwuche">
                        </icon>
                    ]}
                >
                    <span>商城</span>
                    {/* <div id="car">
                        <div className="iconfont icon-gouwuche">
                        </div>
                    </div> */}
                </NavBar>
                {/* <WingBlank>
                    <i className="iconfont icon-fenlei" style={{fontSize:25,height:40,paddingTop:1,float:'left'}}></i>
                    <div id="sSearch" style={{margin:0}}>
                        <SearchBar
                        style={{margin:0,padding:0,background:'none',border:'1px solid #eee',borderRadius:'5%'}}
                        value={this.state.value}
                        placeholder="输入关键字搜索"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onBlur={() => console.log('onBlur')}
                        />
                    </div>
                </WingBlank> */}
                <div style={{ height: '200px', backgroundColor: '#fff',position:'relative'}}>
                    <div style={{position:"absolute",top:0,width:'100%',height:"100px",zIndex:1}}>
                        <WingBlank>
                            <i className="iconfont icon-fenlei" style={{fontSize:25,color:'white',height:40,paddingTop:1,float:'left'}}></i>
                            <div id="sSearch" style={{margin:0}}>
                                <SearchBar
                                style={{margin:0,padding:0,background:'none'}}
                                value={this.state.value}
                                placeholder="输入关键字搜索"
                                onSubmit={value => console.log(value, 'onSubmit')}
                                onClear={value => console.log(value, 'onClear')}
                                onBlur={() => console.log('onBlur')}
                                />
                            </div>
                        </WingBlank>
                    </div>
                    
                        <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {[1,2,3,4].map(val => (
                            <a
                            key={val}
                            href="[图片]http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: 200}}
                            >
                            <img
                                src={`./images/s${val}.png`}
                                alt=""
                                style={{ width: '100%', height:200,verticalAlign: 'top' }}
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
                {/* 以上是轮播图 */}
                {/* 下面是十个分类 */}
                <div id="grid2">
                    <Grid data={this.state.data1}
                        columnNum={5}
                        renderItem={dataItem => (
                            <div id="shopimg">
                                <img src={dataItem.icon} style={{ width: '40px', height: '40x',padding:0 }} alt="" />
                                {/* <div style={{ color: 'red', fontSize: '14px', marginTop: '12px' }}>
                                </div> */}
                                <span>{dataItem.tit}</span>
                            </div>
                        )}
                    />
                </div>
                <div id="bottom">
                    <div id="bottom1">
                        <img src="./images/shop11.jpg"></img>
                        <span>To Art Stdio 欧式风格精细...</span>
                        <span style={{fontSize:15,color:'#000000'}}>¥39.95</span>
                    </div>
                    <div id="bottom2">
                        <img src="./images/shop12.jpg"></img>
                        <span>顺顺工艺欧式风格塑料黑框...</span>
                        <span style={{fontSize:15,color:'#000000'}}>¥83.99</span>
                    </div>
                </div>
                <div id="bottom">
                    <div id="bottom1">
                        <img src="./images/shop11.jpg"></img>
                        <span>To Art Stdio 欧式风格精细...</span>
                        <span style={{fontSize:15,color:'#000000'}}>¥39.95</span>
                    </div>
                    <div id="bottom2">
                        <img src="./images/shop12.jpg"></img>
                        <span>顺顺工艺欧式风格塑料黑框...</span>
                        <span style={{fontSize:15,color:'#000000'}}>¥83.99</span>
                    </div>
                </div>
            </div>
        )
    }
}
