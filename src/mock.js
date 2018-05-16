/**
 * Created by evanzhou on 2018/4/16.
 */
const Mock = require('mockjs');
import mockData from './models/mock';

Mock.mock(/\/api\/v1\.0\/smscode/, 'get', mockData.smscode);