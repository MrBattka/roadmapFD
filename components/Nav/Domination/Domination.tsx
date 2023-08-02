import React, { FC, ReactElement, useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { getDataAsyncStr, storeDataAsyncStr } from '../../common/asyncStorage'
import { returnItem } from '../../common/helpers'

const Domination: FC = (): ReactElement<any, any> | null => {

    const [isDoneTypescript, setIsDoneTypescript] = useState('')
    const [isDoneVite, setIsDoneVite] = useState('')
    const [isDoneSSR, setIsDoneSSR] = useState('')
    const [isDoneEslint, setIsDoneEslint] = useState('')
    const [isDoneGit, setIsDoneGit] = useState('')
    const [isDoneWebpack, setIsDoneWebpack] = useState('')
    const [isDoneCICD, setIsDoneCICD] = useState('')
    const [isDoneDocker, setIsDoneDocker] = useState('')
    const [isDoneWeb3, setIsDoneWeb3] = useState('')
    const [isDoneThreeJS, setIsDoneThreeJS] = useState('')
    const [isDoneWebAR, setIsDoneWebAR] = useState('')
    const [isDoneRN, setIsDoneRN] = useState('')
    const [isDoneTests, setIsDoneTests] = useState('')
    const [isDoneUnix, setIsDoneUnix] = useState('')

    //  Store Data String
    useEffect(() => {
        storeDataAsyncStr(isDoneTypescript, 'DoneTypescript')
        storeDataAsyncStr(isDoneVite, 'DoneVite')
        storeDataAsyncStr(isDoneSSR, 'DoneSSR')
        storeDataAsyncStr(isDoneEslint, 'DoneEslint')
        storeDataAsyncStr(isDoneGit, 'DoneGit')
        storeDataAsyncStr(isDoneWebpack, 'DoneWebpack')
        storeDataAsyncStr(isDoneCICD, 'DoneCICD')
        storeDataAsyncStr(isDoneDocker, 'DoneDocker')
        storeDataAsyncStr(isDoneWeb3, 'DoneWeb3')
        storeDataAsyncStr(isDoneThreeJS, 'DoneThreeJS')
        storeDataAsyncStr(isDoneWebAR, 'DoneWebAR')
        storeDataAsyncStr(isDoneRN, 'DoneRN')
        storeDataAsyncStr(isDoneTests, 'DoneTests')
        storeDataAsyncStr(isDoneUnix, 'DoneUnix')

    }, [storeDataAsyncStr, isDoneTypescript, isDoneVite, isDoneSSR,
        isDoneEslint, isDoneGit, isDoneWebpack, isDoneCICD, isDoneDocker,
        isDoneWeb3, isDoneThreeJS, isDoneWebAR, isDoneRN, isDoneTests,
        isDoneUnix])

    //  Get Data String
    useEffect(() => {
        getDataAsyncStr(isDoneTypescript, 'DoneTypescript', setIsDoneTypescript)
        getDataAsyncStr(isDoneVite, 'DoneVite', setIsDoneVite)
        getDataAsyncStr(isDoneSSR, 'DoneSSR', setIsDoneSSR)
        getDataAsyncStr(isDoneEslint, 'DoneEslint', setIsDoneEslint)
        getDataAsyncStr(isDoneGit, 'DoneGit', setIsDoneGit)
        getDataAsyncStr(isDoneWebpack, 'DoneWebpack', setIsDoneWebpack)
        getDataAsyncStr(isDoneCICD, 'DoneCICD', setIsDoneCICD)
        getDataAsyncStr(isDoneDocker, 'DoneDocker', setIsDoneDocker)
        getDataAsyncStr(isDoneWeb3, 'DoneWeb3', setIsDoneWeb3)
        getDataAsyncStr(isDoneThreeJS, 'DoneThreeJS', setIsDoneThreeJS)
        getDataAsyncStr(isDoneWebAR, 'DoneWebAR', setIsDoneWebAR)
        getDataAsyncStr(isDoneRN, 'DoneRN', setIsDoneRN)
        getDataAsyncStr(isDoneTests, 'DoneTests', setIsDoneTests)
        getDataAsyncStr(isDoneUnix, 'DoneUnix', setIsDoneUnix)
    }, [])

    if (!isDoneUnix) {
        return <ActivityIndicator style={styles.preloader} size='large' color='#0000ff' />
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.dominationWrapper}>
                <Text style={styles.title}>Расширенные знания</Text>
                {returnItem(isDoneTypescript, setIsDoneTypescript, 'Typescript')}
                {returnItem(isDoneVite, setIsDoneVite, 'Vite ')}
                {returnItem(isDoneSSR, setIsDoneSSR, 'SSR Remix/NextJS')}
                {returnItem(isDoneEslint, setIsDoneEslint, 'Eslint/Prettier ')}
                {returnItem(isDoneGit, setIsDoneGit, 'Git комманды')}
                {returnItem(isDoneWebpack, setIsDoneWebpack, 'Webpack')}
                {returnItem(isDoneCICD, setIsDoneCICD, 'CI/CD (Github/Gitlab)')}
                {returnItem(isDoneDocker, setIsDoneDocker, 'Docker')}
                {returnItem(isDoneWeb3, setIsDoneWeb3, 'Web3')}
                {returnItem(isDoneThreeJS, setIsDoneThreeJS, 'ThreeJS/D3.js ')}
                {returnItem(isDoneWebAR, setIsDoneWebAR, 'WebAR')}
                {returnItem(isDoneRN, setIsDoneRN, 'React Native')}
                {returnItem(isDoneTests, setIsDoneTests, 'Tests (jest, enzyme, RTL)')}
                {returnItem(isDoneUnix, setIsDoneUnix, 'Unix Shell')}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 10
    },
    dominationWrapper: {
        backgroundColor: '#FF8C00',
        padding: 10,
        paddingLeft: 20,
        marginTop: 10,
        paddingBottom: 20,
        borderRadius: 10,
    },
    preloader: {
        flex: 1
    },
    wrapperTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        color: 'white',
        marginTop: 10,
        fontWeight: '700',
        letterSpacing: 0.7,
        textDecorationLine: 'underline'
    },
})

export default Domination