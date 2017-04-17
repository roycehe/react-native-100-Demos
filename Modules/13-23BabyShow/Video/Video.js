import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Platform,
    Image,
    RefreshControl,
    ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Mock from 'mockjs';
import config from '../config.js';
import request from '../request.js';

import Dimensions from 'Dimensions';

let {width,height} = Dimensions.get('window');

let cacheData={
    nextPage:2,
    total:0,
    items:[],

};

export default class Upload extends Component {
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({
                rowHasChanged:(r1,r2) => r1 !== r2
            });
        this.state = {
            dataSource:ds.cloneWithRows([
                   
                ]),
                isLoadingTail:false,
                isRefreshing:false,

        }

    };


    render() {
        
        return ( 
          <View style = { styles.container } >
              <View style={styles.header}>
                  <Text style={styles.headerText}>
                    视频列表
                  </Text>

                </View>
            <ListView 
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            automaticallyAdjustContentInsets={false}
            enableEmptySections={true}
            onEndReached={this._fetchMoreData}
            renderFooter={this._renderFooter}
            onEndReachedThreshold={20}
            refreshControl= { <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                        />}

            />
        
            </View>
        );
    };
    _renderRow=(rowData)=>{
        return(
            <View style={styles.cell}>
                {/*标题*/}
                <Text>{rowData.title}</Text>
                {/*预览图*/}
                <Image style={styles.cellImage} source = {{uri:rowData.thumb}} > 
                    <Icon 
                    name='ios-play'
                    size={30}
                    style={styles.cellPlay}
                    />
                </Image>
                {/*操作*/}
                <View style={styles.cellBottom}>
                    <View style={styles.handleBox}>
                        <Icon 
                        name='ios-heart-outline'
                                size={28}
                                style={styles.cellBottonIcon}
                        />
                        <Text>点赞</Text>
                    </View>
                    <View style={styles.handleBox}>
                        <Icon 
                        name='ios-chatbubbles'
                                size={28}
                                style={styles.cellBottonIcon}
                        />
                        <Text>评论</Text>
                    </View>

                </View>
            </View>

        );


    }
     //底部
    _renderFooter=()=>{
        if(!this._hasMore ){
            return (<View style={styles.loadingMore}>
                <Text style={styles.loadingText}>没有更多数据啦...</Text>
            </View>);
        }
        console.log(cacheData.total);
        if(!this.state.isLoadingTail){
            return <View style={styles.loadingMore}/>
        }
        
        return (

            <ActivityIndicator
            style={styles.loadingMore}
            />

        );
    };

    //刷新方法
    _onRefresh=()=>{
        this.setState({
            isRefreshing:true,

        })
        cacheData.items=[];
        this._getNetData(1);
        


    }


    //预加载本地
    componentWillMount () {
          this._useLocalData();
        
    };
    //请求网络数据
    componentDidMount () {
        this._getNetData(1);
    }
    _getNetData(page){
        //是否上拉加载
        if (page > 1) {
            this.setState({
                isLoadingTail:true,
            });
            cacheData.nextPage += 1;
        } else {
            
        }


        request.get(config.api.base+config.api.list, {
            accessToken:'owen',
            page:page,

        })
        .then((data) => {
             if(data){
                //延迟一秒加载
                let duration = 500;
                if(this.state.isRefreshing){
                    duration = 1500

                }
                this.setTimeout(()=> {
                     let itemsResult = cacheData.items.slice();
                     itemsResult = itemsResult.concat(data.data);
                 cacheData.items = itemsResult;
                 cacheData.total = data.total;
                 console.log(cacheData.total, cacheData.items.length);
                     this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(
                            cacheData.items
                        ),
                        isLoadingTail:false,
                         isRefreshing:false,
                    });
                    
                }, duration);

                    
             }
        }).catch(
            (err) => {
                console.log('err' + err);
            }
        )
       
    };
    //上拉加载更多数据
     _fetchMoreData=()=>{

        if(!this._hasMore || this.state.isLoadingTail){
            return
        }

        //去服务器请求加载更多的数据了

        let page=  cacheData.nextPage;

        this._getNetData(page)

    };
    _hasMore(){
        return cacheData.items.length !== cacheData.total;

    };


    //本地数据
    _useLocalData(){
        
        this.setState({
            
            dataSource:this.state.dataSource.cloneWithRows(
                  [{
                        "_id":"450000201111076177","thumb":"http://dummyimage.com/1280x720/a99343)","title":"@cparagraph(1, 3)","video":"http://v.youku.com/v_show/id_XMTczMDM0NzQ2OA==.html?f=26378220&spm=a2hww.20023042.m_223465.5~5~5~5!2~5~5~A.BZYRBN&from=y1.3-idx-beta-1519-23042.223465.4-1"
                    }
                    ,
                    {
                        "_id":"410000201207096642","thumb":"http://dummyimage.com/1280x720/afebb9)","title":"@cparagraph(1, 3)","video":"http://v.youku.com/v_show/id_XMTczMDM0NzQ2OA==.html?f=26378220&spm=a2hww.20023042.m_223465.5~5~5~5!2~5~5~A.BZYRBN&from=y1.3-idx-beta-1519-23042.223465.4-1"
                    }
                    ,
                    {
                        "_id":"210000201211100360","thumb":"http://dummyimage.com/1280x720/4564d3)","title":"@cparagraph(1, 3)","video":"http://v.youku.com/v_show/id_XMTczMDM0NzQ2OA==.html?f=26378220&spm=a2hww.20023042.m_223465.5~5~5~5!2~5~5~A.BZYRBN&from=y1.3-idx-beta-1519-23042.223465.4-1"
                    }]
                
            )
        
          });


    }
    //网络请求数据

   

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // marginTop:20,

    },
     header:{
        
        paddingTop:25,
        paddingBottom:12,
        backgroundColor:'#ee735c',

    },
    headerText:{
        fontSize:16,
        fontWeight:'600',
        textAlign:'center',
        color:'#fff',
    },
    cell:{
        width:width,



    },
    cellImage:{
        width:width,
        height:width*0.56,
        resizeMode:'cover'
    },
     cellPlay:{
        position:'absolute',
        bottom:14,
        right:14,
        width:46,
        height:46,
        paddingTop:9,
        paddingLeft:18,
        backgroundColor:'transparent',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:23,
        color:'#ed7b66'
    },
    cellBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#eee'

    },
    handleBox:{
       width: width/2 - 0.5,
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center'
      
    },

    loadingMore:{

        marginVertical:20
    },


    loadingText:{
        fontSize:18,
        color:'red',
        textAlign:'center'
    },


});
module.exports = Upload;