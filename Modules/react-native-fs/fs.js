/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * @flow
 */
// https://github.com/johanneslumpe/react-native-fs

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import RNFS from 'react-native-fs';

export default class FS extends Component {

    render() {
        return ( 
          <View style = { styles.container } >
            {/*{this._getMainBundleFile()}*/}
            <TouchableHighlight>
                <Text style={{marginTop:64,marginLeft:100}} onPress={() => this._createFile()} >写入</Text>
            </TouchableHighlight>
            <Text style={{marginTop:64,marginLeft:100}} onPress={() => this._deleteFile()} >删除</Text>
            </View>
        );
    };
    //获取主目录下文件
    _getMainBundleFile(){
        // get a list of files and directories in the main bundle
RNFS.readDir(RNFS.MainBundlePath) 
  .then((result) => {
    console.log('GOT RESULT', result);

    // stat the first file
    return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  })
  .then((statResult) => {
    if (statResult[0].isFile()) {
      // if we have a file, read it
      return RNFS.readFile(statResult[1], 'utf8');
    }

    return 'no file';
  })
  .then((contents) => {
    // log the file contents
    console.log(contents);
  })
  .catch((err) => {
    console.log(err.message, err.code);
  });


    }

    //创建一个文件
    _createFile(name){
        // RNFS
        //创建文件路径
        let path = RNFS.DocumentDirectoryPath + '/test.text';

        //写入
        // 路径,内容,编码
        RNFS.writeFile(path,'写入中','utf8')
        .then((success) => {
            console.log(path);

        }).catch((error) => {

        console.log(error);

        });
    };
    //删除文件
    _deleteFile(){
        var path = RNFS.DocumentDirectoryPath + '/test.text';

        return RNFS.unlink(path)
        .then(() => {
            console.log('FILE DELETED');
        })
        // `unlink` will throw an error, if the item to unlink does not exist
        .catch((err) => {
            console.log(err.message);
        });


    };

  

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // marginTop:20,

    },

});

module.exports = FS;