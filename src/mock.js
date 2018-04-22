/**
 * Created by evanzhou on 2018/4/16.
 */
const Mock = require('mockjs');
import mockData from './models/mock';

Mock.mock(/\/getData/, 'get', mockData.getData);