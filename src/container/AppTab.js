import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppLinggan from './AppLinggan';
import AppShop from './AppShop';
import AppMy from './AppMy';


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="green"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:22}} className='iconfont icon-home'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-home'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-linggan'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-linggan'></i>
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            <AppLinggan/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-shangcheng'></i>
            }
            selectedIcon={
                <i style={{fontSize:22}} className='iconfont icon-shangcheng'></i>
            }
            title="商城"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <AppShop/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22}} className='iconfont icon-wode'></i>
          }
          selectedIcon={
              <i style={{fontSize:22}} className='iconfont icon-wode'></i>
          }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <AppMy/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}