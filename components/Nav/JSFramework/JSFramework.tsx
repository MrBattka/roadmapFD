import React, { FC, ReactElement, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDataAsync, storeDataAsync } from '../../common/asyncStorage'
import { CmpltdData, ItemType, dataItemCmpltd, returnSquare } from '../../common/helpers'

const JSFramework: FC = (): ReactElement<any, any> | null => {

    const [Vue, setVue] = useState<ItemType[]>([{ point: '- Директивы', isDone: false },
    { point: '- Глобальная регистрация', isDone: false }, { point: '- Props', isDone: false },
    { point: '- Slots', isDone: false }, { point: '- Provide/Inject', isDone: false },
    { point: '- V-once/V-memo', isDone: false }, { point: '- Life cycle', isDone: false },
    { point: '- Watch/Computed', isDone: false }, { point: '- Caching', isDone: false },
    { point: '- VueX', isDone: false }, { point: '- Composition API', isDone: false }])
    const [VueCmpltd, setVueCmpltd] = useState<any>([])
    const [isDoneVue, setIsDoneVue] = useState(false)

    const [VueIsOpen, setVueIsOpen] = useState(false)

    const [React, setReact] = useState<ItemType[]>([{ point: '- Context', isDone: false },
    { point: '- React router', isDone: false }, { point: '- Redux Toolkit', isDone: false },
    { point: '- Rx Toolkit extra reducers', isDone: false }, { point: '- Thunks', isDone: false },
    { point: '- MobX/Effector/Zustand', isDone: false }, { point: '- Custom Hooks', isDone: false },
    { point: '- React Query', isDone: false }, { point: '- RTX Query', isDone: false },
    { point: '- SWR', isDone: false }, { point: '- React optimisation', isDone: false },
    { point: '- Hook Form/Formik', isDone: false }, { point: '- Styled components', isDone: false },
    { point: '- CSS modules', isDone: false }, { point: '- Unit testing', isDone: false },
    { point: '- GraphQL/Apolo Client', isDone: false }, { point: '- HOC', isDone: false }])
    const [ReactCmpltd, setReactCmpltd] = useState<any>([])
    const [isDoneReact, setIsDoneReact] = useState(false)

    const [ReactIsOpen, setReactIsOpen] = useState(false)

    const [Angular, setAngular] = useState<ItemType[]>([{ point: '- RxJS', isDone: false },
    { point: '- Потоки данных в Angular', isDone: false }, { point: '- Life cycle', isDone: false },
    { point: '- Маршрутизация', isDone: false }, { point: '- Функциональные модули', isDone: false },
    { point: '- Проецирование контента', isDone: false }])
    const [AngularCmpltd, setAngularCmpltd] = useState<any>([])
    const [isDoneAngular, setIsDoneAngular] = useState(false)

    const [AngularIsOpen, setAngularIsOpen] = useState(false)

    //  Store Data Array
    useEffect(() => {
        storeDataAsync(Vue, 'Vue', VueCmpltd, 'VueCmpltd')
        storeDataAsync(React, 'React', ReactCmpltd, 'ReactCmpltd')
        storeDataAsync(Angular, 'Angular', AngularCmpltd, 'AngularCmpltd')
    }, [storeDataAsync, Vue, React, Angular])

    //  Get Data Array
    useEffect(() => {
        getDataAsync(setVue, 'Vue', setVueCmpltd, 'VueCmpltd',
            setIsDoneVue, 17)
        getDataAsync(setReact, 'React', setReactCmpltd, 'ReactCmpltd',
            setIsDoneReact, 11)
        getDataAsync(setAngular, 'Angular', setAngularCmpltd, 'AngularCmpltd',
            setIsDoneAngular, 6)
    }, [])

    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.VueWrapper}>
                <TouchableOpacity style={styles.wrapperTitle} onPress={() => setVueIsOpen(!VueIsOpen)}>
                    <Text style={styles.title}>Vue</Text>
                    {VueIsOpen ? <Text style={styles.arrow}>▼</Text> :
                        <Text style={styles.arrow}>▲</Text>}
                </TouchableOpacity>
                {VueIsOpen && <View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(Vue, setVue, setVueCmpltd, isDoneVue, setIsDoneVue)}>
                            {returnSquare(isDoneVue)}
                            <Text style={isDoneVue ? styles.subItemCompleted : styles.subItem}>Vue:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {Vue.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, VueCmpltd,
                                    setIsDoneVue, Vue, setVue, 11)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>}
            </View>
            <View style={styles.ReactWrapper}>
                <TouchableOpacity style={styles.wrapperTitle} onPress={() => setReactIsOpen(!ReactIsOpen)}>
                    <Text style={styles.title}>React</Text>
                    {ReactIsOpen ? <Text style={styles.arrow}>▼</Text> :
                        <Text style={styles.arrow}>▲</Text>}
                </TouchableOpacity>
                {ReactIsOpen && <View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(React, setReact, setReactCmpltd, isDoneReact, setIsDoneReact)}>
                            {returnSquare(isDoneReact)}
                            <Text style={isDoneVue ? styles.subItemCompleted : styles.subItem}>React:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {React.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, ReactCmpltd,
                                    setIsDoneReact, React, setReact, 17)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>}
            </View>
            <View style={styles.AngularWrapper}>
                <TouchableOpacity style={styles.wrapperTitle} onPress={() => setAngularIsOpen(!AngularIsOpen)}>
                    <Text style={styles.title}>Angular</Text>
                    {AngularIsOpen ? <Text style={styles.arrow}>▼</Text> :
                        <Text style={styles.arrow}>▲</Text>}
                </TouchableOpacity>
                {AngularIsOpen && <View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(Angular, setAngular, setAngularCmpltd, isDoneAngular, setIsDoneAngular)}>
                            {returnSquare(isDoneAngular)}
                            <Text style={isDoneAngular ? styles.subItemCompleted : styles.subItem}>Angular:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {Angular.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, AngularCmpltd,
                                    setIsDoneAngular, Angular, setAngular, 6)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>}
            </View>
        </ScrollView>)
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 10
    },
    VueWrapper: {
        backgroundColor: '#42B884',
        padding: 10,
        paddingLeft: 20,
        marginTop: 10,
        paddingBottom: 20,
        borderRadius: 10,
    },
    ReactWrapper: {
        backgroundColor: '#24aed1',
        padding: 10,
        paddingLeft: 20,
        marginTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
    },
    AngularWrapper: {
        backgroundColor: '#D30303',
        padding: 10,
        paddingLeft: 20,
        marginTop: 20,
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
    arrow: {
        fontSize: 23,
        color: 'white'
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
    square: {
        marginTop: 10,
        marginRight: 10,
        width: 18,
        height: 18,
        backgroundColor: 'white',
        borderRadius: 4
    },
    squareCmpltd: {
        marginTop: 10,
        marginRight: 10,
        width: 18,
        height: 18,
        backgroundColor: '#2E8B57',
        borderRadius: 4
    },
    inlineBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})

export default JSFramework