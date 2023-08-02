import React, { FC, ReactElement, useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDataAsync, getDataAsyncStr, storeDataAsync, storeDataAsyncStr } from '../../common/asyncStorage'
import { CmpltdData, ItemType, dataItemCmpltd, returnItem, returnSquare } from '../../common/helpers'

const EngineeringPart: FC = (): ReactElement<any, any> | null => {

    const [structureHTTP, setStructureHTTP] = useState<ItemType[]>([{ point: '- методы', isDone: false }, { point: '- коды', isDone: false },
    { point: '- заголовки', isDone: false }, { point: '- тело', isDone: false }])
    const [cmpldStructureHTTP, setCmpltdStructureHTTP] = useState<any>([])
    const [isDoneStructureHTTP, setIsDoneStructureHTTP] = useState(false)

    const [DNSData, setDNSData] = useState<ItemType[]>([{ point: '- proxy', isDone: false }])
    const [DNSCmpltdData, setDNSCmpltdData] = useState<any>([])
    const [isDoneDNSData, setIsDoneDNSData] = useState(false)

    const [storageData, setStorageData] = useState<ItemType[]>([{ point: '- local', isDone: false }, { point: '- session', isDone: false },
    { point: '- cookie', isDone: false }])
    const [storageCmpltdData, setStorageCmpltdData] = useState<any>([])
    const [isDoneStorage, setIsDoneStorage] = useState(false)

    const [isDoneElements, setIsDoneElements] = useState('')
    const [isDoneNetwork, setIsDoneNetwork] = useState('')

    //  Store Data Array
    useEffect(() => {
        storeDataAsync(structureHTTP, 'StructureHTTP', cmpldStructureHTTP, 'StructureHTTPCmpltd')
        storeDataAsync(DNSData, 'DNSData', DNSCmpltdData, 'DNSDataCmpltd')
        storeDataAsync(storageData, 'storageData', storageCmpltdData, 'storageDataCmpltd')
    }, [storeDataAsync, structureHTTP, DNSData, storageData])

    //  Get Data Array
    useEffect(() => {
        getDataAsync(setStructureHTTP, 'StructureHTTP', setCmpltdStructureHTTP, 'StructureHTTPCmpltd',
            setIsDoneStructureHTTP, 4)
        getDataAsync(setDNSData, 'DNSData', setDNSCmpltdData, 'DNSDataCmpltd',
            setIsDoneDNSData, 1)
        getDataAsync(setStorageData, 'storageData', setStorageCmpltdData, 'storageDataCmpltd',
            setIsDoneStorage, 3)
    }, [])

    //  Store Data String
    useEffect(() => {
        storeDataAsyncStr(isDoneElements, 'Element')
        storeDataAsyncStr(isDoneNetwork, 'Network')
    }, [storeDataAsyncStr, isDoneElements, isDoneNetwork])

    //  Get Data String
    useEffect(() => {
        getDataAsyncStr(isDoneElements, 'Element', setIsDoneElements)
        getDataAsyncStr(isDoneNetwork, 'Networks', setIsDoneNetwork)
    }, [])

    if (!isDoneNetwork) {
        return <ActivityIndicator style={styles.preloader} size='large' color='#0000ff' />
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperBrowser}>
                <Text style={styles.title}>Работа браузера</Text>
                <TouchableOpacity style={styles.inlineBox}
                    onPress={() => CmpltdData(structureHTTP, setStructureHTTP, setCmpltdStructureHTTP, isDoneStructureHTTP, setIsDoneStructureHTTP)}>
                    {returnSquare(isDoneStructureHTTP)}
                    <Text style={isDoneStructureHTTP ? styles.subItemCompleted : styles.subItem}>Разбор структуры HTTP:</Text>
                </TouchableOpacity>
                <View style={styles.wrapperItem}>
                    {structureHTTP.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, cmpldStructureHTTP,
                            setIsDoneStructureHTTP, structureHTTP, setStructureHTTP, 4)}>
                            <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <TouchableOpacity style={styles.inlineBox}
                    onPress={() => CmpltdData(DNSData, setDNSData, setDNSCmpltdData, isDoneDNSData, setIsDoneDNSData)}>
                    {returnSquare(isDoneDNSData)}
                    <Text style={isDoneDNSData ? styles.subItemCompleted : styles.subItem}>DNS:</Text>
                </TouchableOpacity>
                <View style={styles.wrapperItem}>
                    {DNSData.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, DNSCmpltdData,
                            setIsDoneDNSData, DNSData, setDNSData, 1)}>
                            <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.wrapperDevTools}>
                <Text style={styles.title}>DevTools</Text>

                {returnItem(isDoneElements, setIsDoneElements, 'Elements')}
                {returnItem(isDoneNetwork, setIsDoneNetwork, 'Network')}

                <TouchableOpacity style={styles.inlineBox}
                    onPress={() => CmpltdData(storageData, setStorageData, setStorageCmpltdData, isDoneStorage, setIsDoneStorage)}>
                    {returnSquare(isDoneStorage)}
                    <Text style={isDoneStorage ? styles.subItemCompleted : styles.subItem}>Storage:</Text>
                </TouchableOpacity>
                <View style={styles.wrapperItem}>
                    {storageData.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, storageCmpltdData,
                            setIsDoneStorage, storageData, setStorageData, 3)}>
                            <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 10
    },
    wrapperBrowser: {
        backgroundColor: '#BA55D3',
        padding: 10,
        paddingLeft: 20,
        marginTop: 10,
        paddingBottom: 20,
        borderRadius: 10,
    },
    wrapperDevTools: {
        backgroundColor: '#9370DB',
        marginTop: 20,
        padding: 10,
        paddingLeft: 20,
        paddingBottom: 20,
        borderRadius: 10
    },
    preloader: {
        flex: 1
    },
    title: {
        fontSize: 22,
        color: 'white',
        marginTop: 10,
        fontWeight: '700',
        letterSpacing: 0.7,
        textDecorationLine: 'underline'
    },
    wrapperItem: {
        marginLeft: 35,
    },
    element: {
        fontSize: 20,
        color: 'white',
        marginTop: 10,
        fontWeight: '200',
        letterSpacing: 0.5
    },
    elementCompleted: {
        fontSize: 20,
        color: '#C0C0C0',
        marginTop: 10,
        textDecorationLine: 'line-through',
        fontWeight: '300',
        letterSpacing: 0.5
    },
    subItem: {
        fontSize: 20,
        color: 'white',
        marginTop: 10,
        fontWeight: '400'
    },
    subItemCompleted: {
        fontSize: 20,
        color: '#C0C0C0',
        marginTop: 10,
        textDecorationLine: 'line-through',
        fontWeight: '400'
    },
    inlineBox: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default EngineeringPart