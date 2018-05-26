/**
 * Created by evanzhou on 2018/4/16.
 */
const Mock = require('mockjs');
import mockData from './models/mock';

Mock.mock(/\/api\/v1\.0\/smscode/, 'get', mockData.smscode);
Mock.mock(/\/api\/v1\.0\/auth/, 'post', mockData.auth);
Mock.mock(/\/api\/v1\.0\/auth\/essential_info/, 'post', mockData.essential_info);
Mock.mock(/\/api\/v1\.0\/auth\/telecom\/login/, 'post', mockData.telecom);
Mock.mock(/\/api\/v1\.0\/auth\/status/, 'get', mockData.status);