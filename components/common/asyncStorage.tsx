import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch, SetStateAction } from "react";

//  Store Data Array
export const storeData = async (data: any, dataName: string) => {
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem(dataName, jsonValue)
    } catch (e) {
        console.log('Error soring data', e);
    }
}

//  Store Data String
export const storeDataStr = async (data: any, dataName: string) => {
    try {
        await AsyncStorage.setItem(dataName, data)
    } catch (e) {
        console.log('Error soring data', e);
    }
}

//  Store Data Completed Array
export const storeDataCmpltd = async (data: any, dataName: string) => {
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem(dataName, jsonValue)
    } catch (e) {
        console.log('Error soring data', e);
    }
}

//  Get Data Array
export const getData = async (setData: any, dataName: string) => {
    try {
        const data = await AsyncStorage.getItem(dataName)
        const arrValue = data?.slice(1, -1)
        const result = JSON.parse('[' + arrValue + ']')

        if (data !== null) {
            setData(result)
        }
    } catch (err) {
        console.log('Error getting data', err);
    }
}

//Get Data String
export const getDataStr = async (dataName: string, setIsDone: any) => {
    try {
        const data = await AsyncStorage.getItem(dataName)

        if (data !== null) {
            setIsDone(data)
        }
        if (data === null) {
            setIsDone('1')
        }

    } catch (err) {
        console.log('Error getting data', err);
    }
}

//  Get Data Completed Array
export const getDataCmpltd = async (setData: any, dataName: string,
    isDone: Dispatch<SetStateAction<boolean>>, length: number) => {
    try {
        const data = await AsyncStorage.getItem(dataName)
        const arrValue = data?.slice(1, -1)
        const result = JSON.parse('[' + arrValue + ']')

        if (result[0]?.length === length) {
            isDone(true)
        }
        if (result !== null) {
            setData(result)
        }
    } catch (err) {
        console.log('Error getting data', err);
    }
}

//  Saves array data with a delay of 1 second
const returnData = (data: any, dataName: string) => {
    if (data !== null) {
        const timeFunc = setTimeout(() => {
            storeData(data, dataName)
        }, 1);
        return () => clearTimeout(timeFunc);
    }
}

//  Saves string data with a delay of 1 second
const returnDataStr = (data: any, dataName: string) => {
    if (data !== null) {
        const timeFunc = setTimeout(() => {
            storeDataStr(data, dataName)
        }, 1);
        return () => clearTimeout(timeFunc);
    }
}

//  Сalling saving array data from useEffect
export const storeDataAsync = (data: any, dataName: string,
    dataCmpltd: any, dataCmpltdName: string) => {
    returnData(data, dataName)
    returnData(dataCmpltd, dataCmpltdName)
}

//  Сalling getting array data from useEffect
export const getDataAsync = (data: any, dataName: string,
    dataCmpltd: any, dataCmpltdName: string, setIsDone: React.Dispatch<React.SetStateAction<boolean>>,
    length: number) => {
    getData(data, dataName)
    getDataCmpltd(dataCmpltd, dataCmpltdName, setIsDone, length)
}

//  Сalling saving string data from useEffect
export const storeDataAsyncStr = (data: any, dataName: string) => {
    returnDataStr(data, dataName)
}

//  Сalling getting string data from useEffect
export const getDataAsyncStr = (data: any, dataName: string, setIsDone: React.Dispatch<React.SetStateAction<string>>) => {
    getDataStr(dataName, setIsDone)
}