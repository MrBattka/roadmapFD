import React, { FC, ReactElement, useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDataAsync, getDataAsyncStr, storeDataAsync, storeDataAsyncStr } from '../../common/asyncStorage'
import { CmpltdData, ItemType, dataItemCmpltd, returnItem, returnSquare } from '../../common/helpers'

const CSSAdvanced: FC = (): ReactElement<any, any> | null => {

    const [isDoneSCSS, setIsDoneSCSS] = useState('')
    const [isDoneMixins, setIsDoneMixins] = useState('')
    const [isDoneAnimation, setIsDoneAnimation] = useState('')

    const [CSSFrameworks, setCSSFrameworks] = useState<ItemType[]>([{ point: '- Tailwind', isDone: false },
    { point: '- Bootstrap', isDone: false }, { point: '- Material Design (MUI)', isDone: false },
    { point: '- AntD', isDone: false }])
    const [CSSFrameworksCmpltd, setCSSFrameworksCmpltd] = useState<any>([])
    const [isDoneCSSFrameworks, setIsDoneCSSFrameworks] = useState(false)

    //  Store Data Array
    useEffect(() => {
        storeDataAsync(CSSFrameworks, 'CSSFrameworks', CSSFrameworksCmpltd, 'CSSFrameworksCmpltd')
    }, [storeDataAsync, CSSFrameworks])

    //  Get Data Array
    useEffect(() => {
        getDataAsync(setCSSFrameworks, 'CSSFrameworks', setCSSFrameworksCmpltd, 'CSSFrameworksCmpltd',
            setIsDoneCSSFrameworks, 4)
    }, [])

    //  Store Data String
    useEffect(() => {
        storeDataAsyncStr(isDoneSCSS, 'DoneSCSS')
        storeDataAsyncStr(isDoneMixins, 'DoneMixins')
        storeDataAsyncStr(isDoneAnimation, 'DoneAnimation')
    }, [storeDataAsyncStr, isDoneSCSS, isDoneMixins, isDoneAnimation])

    //  Get Data String
    useEffect(() => {
        getDataAsyncStr(isDoneSCSS, 'DoneSCSS', setIsDoneSCSS)
        getDataAsyncStr(isDoneMixins, 'DoneMixins', setIsDoneMixins)
        getDataAsyncStr(isDoneAnimation, 'DoneAnimation', setIsDoneAnimation)
    }, [])

    if (!isDoneAnimation) {
        return <ActivityIndicator style={styles.preloader} size='large' color='#0000ff' />
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.CSSAdvancedWrapper}>
                <Text style={styles.title}>CSS расширенный</Text>

                {returnItem(isDoneSCSS, setIsDoneSCSS, 'SCSS/LESS')}
                {returnItem(isDoneMixins, setIsDoneMixins, 'Mixins')}
                {returnItem(isDoneAnimation, setIsDoneAnimation, 'Animations')}

                <View>
                    <TouchableOpacity style={styles.inlineBox}
                        onPress={() => CmpltdData(CSSFrameworks, setCSSFrameworks, setCSSFrameworksCmpltd, isDoneCSSFrameworks, setIsDoneCSSFrameworks)}>
                        {returnSquare(isDoneCSSFrameworks)}
                        <Text style={isDoneCSSFrameworks ? styles.subItemCompleted : styles.subItem}>Стилизация текста:</Text>
                    </TouchableOpacity>
                    <View style={styles.wrapperItem}>
                        {CSSFrameworks.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, CSSFrameworksCmpltd,
                                setIsDoneCSSFrameworks, CSSFrameworks, setCSSFrameworks, 4)}>
                                <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 10
    },
    CSSAdvancedWrapper: {
        backgroundColor: '#A52A2A',
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
    },
})

export default CSSAdvanced