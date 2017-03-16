/**
 * Created by hexiaowen on 2017/3/10.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    WebView
} from 'react-native';

var Detail = React.createClass({
    //传递的数据
    getDefaultProps(){
        return{

        }
    },

    getInitialState() {
        return {
            Textdata:''

        };
    },

    render(){
        return(
            <WebView

                automaticallyAdjustContentInsets={false}
                style={styles.webView}
                source={{html: this.state.Textdata, baseUrl: ''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />


        );


    },
    componentDidMount(){
        //详情页api
        var url_api = 'http://c.3g.163.com/nc/article/' + this.props.rowData.docid + '/full.html';

        //发送请求
        fetch(url_api)
            .then((response) => response.json())
            .then((responseData) =>{
               //拿到html数据
                var allHtml = responseData[this.rowData.docid];
                //body 数据
                var bodyHtml = allHtml['body'];
                //获取图片数据
                if(allHtml['img'].length>0){
                    for (var i = 0 ; allHtml<allHtml['img'].length; i++){
                        var imgdata = allHtml['img'][i];
                        var imgSrc = imgdata['src'];
                        //拼接img标签
                        var  imgHtml = '<img src="' + imgSrc + '" width="100%">';
                        bodyHtml = bodyHtml.replace(imgdata['ref'],imgHtml)


                    }


                }
                this.setState({
                    Textdata:bodyHtml

                });


            })
        .catch((error)=>{
            alert('失败');
        })

    }



});
var styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        alignItems: 'center',
    },

});

module.exports = Detail;