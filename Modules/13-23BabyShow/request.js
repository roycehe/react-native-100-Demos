'use strict'
import Mock from 'mockjs';
import config from './config.js';
import queryString from 'query-string';
import _ from 'lodash'

let request = {};

request.get = (url, params) =>{
    if (params) {
        url += '?' + queryString.stringify(params);
    }
    console.log(url);
    return fetch(url)
            .then((Response) => Response.json())
            .then((response) => Mock.mock(response))
            .catch((error => {
                console.log(error);

            }))
           

}




request.post = (url, body) => {
    let map = _.extends(config.map,{
        body:JSON.stringify(body)

    })
    return fetch(url,map)
            .then((response) => response.json())
            .then((response) => Mock.mock(response))
            .catch((error) =>{
                alert(error);

            })


}
module.exports = request