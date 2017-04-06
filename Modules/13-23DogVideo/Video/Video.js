import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Platform,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Mock from 'mockjs';
import config from '../config.js';
import request from '../request.js';

import Dimensions from 'Dimensions';

let {width,height} = Dimensions.get('window');
export default class Upload extends Component {
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({
                rowHasChanged:(r1,r2) => r1 !== r2
            });
        this.state = {
            dataSource:ds.cloneWithRows([
                   
                ])

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
            />

            </View>
        );
    };
    _renderRow(rowData){
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
    //预加载本地
    componentWillMount () {
          this._useLocalData();
        
    };
    componentDidMount () {
        this._getNetData();
    }
    _getNetData(){

        request.get(config.api.base+config.api.list, {
            accessToken:'owen'

        })
        .then((data) => {
             if(data){
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(
                            data.data
                        ),
                    });
                }
        }).catch(
            (err) => {
                console.log('err' + err);
            }
        )
       
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
        bottom:20,
        right:20,

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
      
    }


});
module.exports = Upload;