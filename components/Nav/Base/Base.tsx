import React, { FC, ReactElement, useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getDataAsync, getDataAsyncStr, storeDataAsync, storeDataAsyncStr } from '../../common/asyncStorage'
import { CmpltdData, ItemType, dataItemCmpltd, returnItem, returnSquare } from '../../common/helpers'

const Base: FC = (): ReactElement<any, any> | null => {

    const [HTMLIsOpen, setHTMLIsOpen] = useState(false)

    const [basicsHTML, setBasicsHTML] = useState<ItemType[]>([{ point: '- tags', isDone: false },
    { point: '- structure', isDone: false }, { point: '- attributes', isDone: false }])
    const [basicsHTMLCmpltd, setBasicsHTMLCmpltd] = useState<any>([])
    const [isDoneBasicsHTML, setIsDoneBasicsHTML] = useState(false)

    const [formsHTML, setFormsHTML] = useState<ItemType[]>([{ point: '- button', isDone: false },
    { point: '- textarea', isDone: false }, { point: '- input', isDone: false },
    { point: '- label', isDone: false }, { point: '- select', isDone: false },
    { point: '- form', isDone: false }])
    const [formsHTMLCmpltd, setFormsHTMLCmpltd] = useState<any>([])
    const [isDoneFormsHTML, setIsDoneFormsHTML] = useState(false)

    const [inlineTags, setInlineTags] = useState<ItemType[]>([{ point: '- a', isDone: false },
    { point: '- img', isDone: false }, { point: '- br', isDone: false },
    { point: '- video', isDone: false }, { point: '- audio', isDone: false },
    { point: '- iframe', isDone: false }, { point: '- canvas', isDone: false },
    { point: '- progress', isDone: false }])
    const [inlineTagsCmpltd, setInlineTagsCmpltd] = useState<any>([])
    const [isDoneInlineTags, setIsDoneInlineTags] = useState(false)

    const [tableHTML, setTableHTML] = useState<ItemType[]>([{ point: '- tfoot', isDone: false },
    { point: '- thead', isDone: false }, { point: '- tr', isDone: false },
    { point: '- tbody', isDone: false }, { point: '- td', isDone: false },
    { point: '- th', isDone: false }])
    const [tableHTMLCmpltd, setTableHTMLCmpltd] = useState<any>([])
    const [isDoneTableHTML, setIsDoneTableHTML] = useState(false)

    const [blockTags, setBlockTags] = useState<ItemType[]>([{ point: '- div', isDone: false },
    { point: '- h1-h6', isDone: false }, { point: '- p', isDone: false },
    { point: '- hr', isDone: false }])
    const [blockTagsCmpltd, setBlockTagsCmpltd] = useState<any>([])
    const [isDoneBlockTags, setIsDoneBlockTags] = useState(false)

    const [topLevelTags, setTopLevelTags] = useState<ItemType[]>([{ point: '- html', isDone: false },
    { point: '- head', isDone: false }, { point: '- body', isDone: false },
    { point: '- meta', isDone: false }, { point: '- title', isDone: false }])
    const [topLevelTagsCmpltd, setTopLevelTagsCmpltd] = useState<any>([])
    const [isDoneTopLevelTags, setIsDoneTopLevelTags] = useState(false)

    const [listsHTML, setListsHTML] = useState<ItemType[]>([{ point: '- ul', isDone: false },
    { point: '- ol', isDone: false }, { point: '- li', isDone: false }])
    const [listsHTMLCmpltd, setListsHTMLCmpltd] = useState<any>([])
    const [isDoneListsHTML, setIsDoneListsHTML] = useState(false)

    const [eventsHTML, setEventsHTML] = useState<ItemType[]>([{ point: '- onchange', isDone: false },
    { point: '- onblur', isDone: false }, { point: '- onclick', isDone: false }])
    const [eventsHTMLCmpltd, setEventsHTMLCmpltd] = useState<any>([])
    const [isDoneEventsHTML, setIsDoneEventsHTML] = useState(false)

    const [CSSIsOpen, setCSSIsOpen] = useState(false)

    const [positionCSS, setPositionCSS] = useState<ItemType[]>([{ point: '- display', isDone: false },
    { point: '- height', isDone: false }, { point: '- margin', isDone: false },
    { point: '- padding', isDone: false }, { point: '- position', isDone: false },
    { point: '- float', isDone: false }, { point: '- dlex/grid', isDone: false }])
    const [positionCSSCmpltd, setPositionCSSCmpltd] = useState<any>([])
    const [isDonePositionCSS, setIsDonePositionCSS] = useState(false)

    const [elementStyle, setElementStyle] = useState<ItemType[]>([{ point: '- opacity', isDone: false },
    { point: '- visability', isDone: false }, { point: '- background', isDone: false },
    { point: '- border', isDone: false }])
    const [elementStyleCmpltd, setElementStyleCmpltd] = useState<any>([])
    const [isDoneElementStyle, setIsDoneElementStyle] = useState(false)

    const [textStyle, setTextStyle] = useState<ItemType[]>([{ point: '- font-family', isDone: false },
    { point: '- text-decotation', isDone: false }, { point: '- font-style', isDone: false },
    { point: '- text-overflow', isDone: false }, { point: '- word-break', isDone: false },
    { point: '- color', isDone: false }])
    const [textStyleCmpltd, setTextStyleCmpltd] = useState<any>([])
    const [isDoneTextStyle, setIsDoneTextStyle] = useState(false)

    const [JSIsOpen, setJSIsOpen] = useState(false)

    const [isDoneDataTypes, setIsDoneDataTypes] = useState('')
    const [isDoneVar, setIsDoneVar] = useState('')
    const [isDoneFunc, setIsDoneFunc] = useState('')
    const [isDoneObj, setIsDoneObj] = useState('')
    const [isDoneArr, setIsDoneArr] = useState('')
    const [isDoneVatScopes, setIsDoneVatScopes] = useState('')
    const [isDoneHoisting, setIsDoneHoisting] = useState('')
    const [isDoneES6, setIsDoneES6] = useState('')
    const [isDoneArrMethods, setIsDoneArrMethods] = useState('')
    const [isDoneDataStructures, setIsDoneDataStructures] = useState('')
    const [isDoneMapSet, setIsDoneMapSet] = useState('')
    const [isDoneWeakMap, setIsDoneWeakMap] = useState('')
    const [isDoneDOM, setIsDoneDOM] = useState('')
    const [isDonePromises, setIsDonePromises] = useState('')
    const [isDoneAsyncAwait, setIsDoneAsyncAwait] = useState('')
    const [isDoneAPI, setIsDoneAPI] = useState('')
    const [isDoneSetTimeout, setIsDoneSetTimeout] = useState('')
    const [isDoneEventLoop, setIsDoneEventLoop] = useState('')

    useEffect(() => {
        storeDataAsync(basicsHTML, 'basicsHTML', basicsHTMLCmpltd, 'BasicsHTMLCmpltd')
        storeDataAsync(formsHTML, 'FormsHTML', formsHTMLCmpltd, 'FormsHTMLCmpltd')
        storeDataAsync(inlineTags, 'InlineTags', inlineTagsCmpltd, 'InlineTagsCmpltd')
        storeDataAsync(tableHTML, 'TableHTML', tableHTMLCmpltd, 'TableHTMLCmpltd')
        storeDataAsync(blockTags, 'BlockTags', blockTagsCmpltd, 'BlockTagsCmpltd')
        storeDataAsync(topLevelTags, 'TopLevelTags', topLevelTagsCmpltd, 'TopLevelTagsCmpltd')
        storeDataAsync(listsHTML, 'ListsHTML', listsHTMLCmpltd, 'ListsHTMLCmpltd')
        storeDataAsync(eventsHTML, 'EventsHTML', eventsHTMLCmpltd, 'EventsHTMLCmpltd')
        storeDataAsync(positionCSS, 'PositionCSS', positionCSSCmpltd, 'PositionCSSCmpltd')
        storeDataAsync(elementStyle, 'ElementStyle', elementStyleCmpltd, 'ElementStyleCmpltd')
        storeDataAsync(textStyle, 'TextStyle', textStyleCmpltd, 'TextStyleCmpltd')

    }, [storeDataAsync, basicsHTML, formsHTML, inlineTags, tableHTML, blockTags,
        topLevelTags, listsHTML, eventsHTML, positionCSS, elementStyle, textStyle])

    useEffect(() => {
        getDataAsync(setBasicsHTML, 'basicsHTML', setBasicsHTMLCmpltd, 'BasicsHTMLCmpltd',
            setIsDoneBasicsHTML, 3)
        getDataAsync(setFormsHTML, 'FormsHTML', setFormsHTMLCmpltd, 'FormsHTMLCmpltd',
            setIsDoneFormsHTML, 6)
        getDataAsync(setInlineTags, 'InlineTags', setInlineTagsCmpltd, 'InlineTagsCmpltd',
            setIsDoneInlineTags, 8)
        getDataAsync(setTableHTML, 'TableHTML', setTableHTMLCmpltd, 'TableHTMLCmpltd',
            setIsDoneTableHTML, 6)
        getDataAsync(setBlockTags, 'BlockTags', setBlockTagsCmpltd, 'BlockTagsCmpltd',
            setIsDoneBlockTags, 4)
        getDataAsync(setTopLevelTags, 'TopLevelTags', setTopLevelTagsCmpltd, 'TopLevelTagsCmpltd',
            setIsDoneTopLevelTags, 5)
        getDataAsync(setListsHTML, 'ListsHTML', setListsHTMLCmpltd, 'ListsHTMLCmpltd',
            setIsDoneListsHTML, 3)
        getDataAsync(setEventsHTML, 'EventsHTML', setEventsHTMLCmpltd, 'EventsHTMLCmpltd',
            setIsDoneEventsHTML, 3)
        getDataAsync(setPositionCSS, 'PositionCSS', setPositionCSSCmpltd, 'PositionCSSCmpltd',
            setIsDonePositionCSS, 7)
        getDataAsync(setElementStyle, 'ElementStyle', setElementStyleCmpltd, 'ElementStyleCmpltd',
            setIsDoneElementStyle, 4)
        getDataAsync(setTextStyle, 'TextStyle', setTextStyleCmpltd, 'TextStyleCmpltd',
            setIsDoneTextStyle, 6)
    }, [])

    useEffect(() => {
        storeDataAsyncStr(isDoneDataTypes, 'DataTypes')
        storeDataAsyncStr(isDoneVar, 'DoneVar')
        storeDataAsyncStr(isDoneFunc, 'DoneFunc')
        storeDataAsyncStr(isDoneObj, 'DoneObj')
        storeDataAsyncStr(isDoneArr, 'DoneArr')
        storeDataAsyncStr(isDoneVatScopes, 'DoneVatScopes')
        storeDataAsyncStr(isDoneHoisting, 'DoneHoisting')
        storeDataAsyncStr(isDoneES6, 'DoneES6')


    }, [storeDataAsyncStr, isDoneDataTypes, isDoneVar, isDoneFunc,
        isDoneObj, isDoneArr, isDoneVatScopes, isDoneHoisting, isDoneES6])

    useEffect(() => {
        storeDataAsyncStr(isDoneArrMethods, 'DoneArrMethods')
        storeDataAsyncStr(isDoneDataStructures, 'DoneDataStructures')
        storeDataAsyncStr(isDoneMapSet, 'DoneMapSet')
        storeDataAsyncStr(isDoneWeakMap, 'DoneWeakMap')
        storeDataAsyncStr(isDoneDOM, 'DoneDOM')
        storeDataAsyncStr(isDonePromises, 'DonePromises')
        storeDataAsyncStr(isDoneAsyncAwait, 'DoneAsyncAwait')
        storeDataAsyncStr(isDoneAPI, 'DoneAPI')
        storeDataAsyncStr(isDoneSetTimeout, 'DoneSetTimeout')
        storeDataAsyncStr(isDoneEventLoop, 'DoneEventLoop')

    }, [storeDataAsyncStr, isDoneArrMethods, isDoneDataStructures, isDoneMapSet, isDoneWeakMap,
        isDoneDOM, isDonePromises, isDoneAsyncAwait, isDoneAPI, isDoneSetTimeout,
        isDoneEventLoop])

    useEffect(() => {
        getDataAsyncStr(isDoneDataTypes, 'DataTypes', setIsDoneDataTypes)
        getDataAsyncStr(isDoneVar, 'DoneVar', setIsDoneVar)
        getDataAsyncStr(isDoneFunc, 'DoneFunc', setIsDoneFunc)
        getDataAsyncStr(isDoneObj, 'DoneObj', setIsDoneObj)
        getDataAsyncStr(isDoneArr, 'DoneArr', setIsDoneArr)
        getDataAsyncStr(isDoneVatScopes, 'DoneVatScopes', setIsDoneVatScopes)
        getDataAsyncStr(isDoneHoisting, 'DoneHoisting', setIsDoneHoisting)
        getDataAsyncStr(isDoneES6, 'DoneES6', setIsDoneES6)
        getDataAsyncStr(isDoneArrMethods, 'DoneArrMethods', setIsDoneArrMethods)
        getDataAsyncStr(isDoneDataStructures, 'DoneDataStructures', setIsDoneDataStructures)
        getDataAsyncStr(isDoneMapSet, 'DoneMapSet', setIsDoneMapSet)
        getDataAsyncStr(isDoneWeakMap, 'DoneWeakMap', setIsDoneWeakMap)
        getDataAsyncStr(isDoneDOM, 'DoneDOM', setIsDoneDOM)
        getDataAsyncStr(isDonePromises, 'DonePromises', setIsDonePromises)
        getDataAsyncStr(isDoneAsyncAwait, 'DoneAsyncAwait', setIsDoneAsyncAwait)
        getDataAsyncStr(isDoneAPI, 'DoneAPI', setIsDoneAPI)
        getDataAsyncStr(isDoneSetTimeout, 'DoneSetTimeout', setIsDoneSetTimeout)
        getDataAsyncStr(isDoneEventLoop, 'DoneEventLoop', setIsDoneEventLoop)

    }, [])

    if (!isDoneDataTypes) {
        return <ActivityIndicator style={styles.preloader} size='large' color='#0000ff' />
    }

    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.HTMLWrapper}>
                <TouchableOpacity style={styles.wrapperTitle} onPress={() => setHTMLIsOpen(!HTMLIsOpen)}>
                    <Text style={styles.title}>HTML</Text>
                    {HTMLIsOpen ? <Text style={styles.arrow}>▼</Text> :
                        <Text style={styles.arrow}>▲</Text>}
                </TouchableOpacity>
                {HTMLIsOpen && <View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(basicsHTML, setBasicsHTML, setBasicsHTMLCmpltd, isDoneBasicsHTML, setIsDoneBasicsHTML)}>
                            {returnSquare(isDoneBasicsHTML)}
                            <Text style={isDoneBasicsHTML ? styles.subItemCompleted : styles.subItem}>Базовый HTML:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {basicsHTML.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, basicsHTMLCmpltd,
                                    setIsDoneBasicsHTML, basicsHTML, setBasicsHTML, 3)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(formsHTML, setFormsHTML, setFormsHTMLCmpltd, isDoneFormsHTML, setIsDoneFormsHTML)}>
                            {returnSquare(isDoneFormsHTML)}
                            <Text style={isDoneFormsHTML ? styles.subItemCompleted : styles.subItem}>Формы:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {formsHTML.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, formsHTMLCmpltd,
                                    setIsDoneFormsHTML, formsHTML, setFormsHTML, 6)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(inlineTags, setInlineTags, setInlineTagsCmpltd, isDoneInlineTags, setIsDoneInlineTags)}>
                            {returnSquare(isDoneInlineTags)}
                            <Text style={isDoneInlineTags ? styles.subItemCompleted : styles.subItem}>Линейные теги:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {inlineTags.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, inlineTagsCmpltd,
                                    setIsDoneInlineTags, inlineTags, setInlineTags, 8)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(tableHTML, setTableHTML, setTableHTMLCmpltd, isDoneTableHTML, setIsDoneTableHTML)}>
                            {returnSquare(isDoneTableHTML)}
                            <Text style={isDoneTableHTML ? styles.subItemCompleted : styles.subItem}>Table:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {tableHTML.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, tableHTMLCmpltd,
                                    setIsDoneTableHTML, tableHTML, setTableHTML, 6)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(blockTags, setBlockTags, setBlockTagsCmpltd, isDoneBlockTags, setIsDoneBlockTags)}>
                            {returnSquare(isDoneBlockTags)}
                            <Text style={isDoneBlockTags ? styles.subItemCompleted : styles.subItem}>Блочные теги:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {blockTags.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, blockTagsCmpltd,
                                    setIsDoneBlockTags, blockTags, setBlockTags, 4)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(topLevelTags, setTopLevelTags, setTopLevelTagsCmpltd, isDoneTopLevelTags, setIsDoneTopLevelTags)}>
                            {returnSquare(isDoneTopLevelTags)}
                            <Text style={isDoneTopLevelTags ? styles.subItemCompleted : styles.subItem}>Высокоуравневые теги:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {topLevelTags.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, topLevelTagsCmpltd,
                                    setIsDoneTopLevelTags, topLevelTags, setTopLevelTags, 5)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(listsHTML, setListsHTML, setListsHTMLCmpltd, isDoneListsHTML, setIsDoneListsHTML)}>
                            {returnSquare(isDoneListsHTML)}
                            <Text style={isDoneListsHTML ? styles.subItemCompleted : styles.subItem}>Списки:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {listsHTML.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, listsHTMLCmpltd,
                                    setIsDoneListsHTML, listsHTML, setListsHTML, 3)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(eventsHTML, setEventsHTML, setEventsHTMLCmpltd, isDoneEventsHTML, setIsDoneEventsHTML)}>
                            {returnSquare(isDoneEventsHTML)}
                            <Text style={isDoneEventsHTML ? styles.subItemCompleted : styles.subItem}>Обработчик событий:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {eventsHTML.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, eventsHTMLCmpltd,
                                    setIsDoneEventsHTML, eventsHTML, setEventsHTML, 3)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>}
            </View>
            <View style={styles.CSSWrapper}>
                <TouchableOpacity style={styles.wrapperTitle} onPress={() => setCSSIsOpen(!CSSIsOpen)}>
                    <Text style={styles.title}>CSS</Text>
                    {CSSIsOpen ? <Text style={styles.arrow}>▼</Text> :
                        <Text style={styles.arrow}>▲</Text>}
                </TouchableOpacity>
                {CSSIsOpen && <View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(positionCSS, setPositionCSS, setPositionCSSCmpltd, isDonePositionCSS, setIsDonePositionCSS)}>
                            {returnSquare(isDonePositionCSS)}
                            <Text style={isDonePositionCSS ? styles.subItemCompleted : styles.subItem}>Позиционирование:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {positionCSS.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, positionCSSCmpltd,
                                    setIsDonePositionCSS, positionCSS, setPositionCSS, 7)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(elementStyle, setElementStyle, setElementStyleCmpltd, isDoneElementStyle, setIsDoneElementStyle)}>
                            {returnSquare(isDoneElementStyle)}
                            <Text style={isDoneElementStyle ? styles.subItemCompleted : styles.subItem}>Стилизация элементов:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {elementStyle.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, elementStyleCmpltd,
                                    setIsDoneElementStyle, elementStyle, setElementStyle, 4)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.inlineBox}
                            onPress={() => CmpltdData(textStyle, setTextStyle, setTextStyleCmpltd, isDoneTextStyle, setIsDoneTextStyle)}>
                            {returnSquare(isDoneTextStyle)}
                            <Text style={isDoneTextStyle ? styles.subItemCompleted : styles.subItem}>Стилизация текста:</Text>
                        </TouchableOpacity>
                        <View style={styles.wrapperItem}>
                            {textStyle.map((item, index) => (
                                <TouchableOpacity key={index} onPress={() => dataItemCmpltd(item, textStyleCmpltd,
                                    setIsDoneTextStyle, textStyle, setTextStyle, 6)}>
                                    <Text style={item.isDone ? styles.elementCompleted : styles.element}>{item.point}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>}
            </View>
            <View style={styles.JSWrapper}>
                <TouchableOpacity style={styles.wrapperTitle} onPress={() => setJSIsOpen(!JSIsOpen)}>
                    <Text style={styles.title}>JavaScript</Text>
                    {JSIsOpen ? <Text style={styles.arrow}>▼</Text> :
                        <Text style={styles.arrow}>▲</Text>}
                </TouchableOpacity>
                {JSIsOpen && <View>
                    {returnItem(isDoneDataTypes, setIsDoneDataTypes, 'Типы данных')}
                    {returnItem(isDoneVar, setIsDoneVar, 'Переменные')}
                    {returnItem(isDoneFunc, setIsDoneFunc, 'Функции')}
                    {returnItem(isDoneObj, setIsDoneObj, 'Обьекты')}
                    {returnItem(isDoneArr, setIsDoneArr, 'Массивы')}
                    {returnItem(isDoneVatScopes, setIsDoneVatScopes, 'Области переменных')}
                    {returnItem(isDoneHoisting, setIsDoneHoisting, 'Хостинг')}
                    {returnItem(isDoneES6, setIsDoneES6, 'ES6-ES2022')}
                    {returnItem(isDoneArrMethods, setIsDoneArrMethods, 'Методы массивов')}
                    {returnItem(isDoneDataStructures, setIsDoneDataStructures, 'Структуры данных')}
                    {returnItem(isDoneMapSet, setIsDoneMapSet, 'Map/Set ')}
                    {returnItem(isDoneWeakMap, setIsDoneWeakMap, 'WeakMap/SetMap')}
                    {returnItem(isDoneDOM, setIsDoneDOM, 'Работа с DOM')}
                    {returnItem(isDonePromises, setIsDonePromises, 'Промисы')}
                    {returnItem(isDoneAsyncAwait, setIsDoneAsyncAwait, 'Async/Await ')}
                    {returnItem(isDoneAPI, setIsDoneAPI, 'Работа с API')}
                    {returnItem(isDoneSetTimeout, setIsDoneSetTimeout, 'SetTimeout/SetInterval ')}
                    {returnItem(isDoneEventLoop, setIsDoneEventLoop, 'Event loop')}
                </View>}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 10
    },
    HTMLWrapper: {
        backgroundColor: '#F16529',
        padding: 10,
        paddingLeft: 20,
        marginTop: 10,
        paddingBottom: 20,
        borderRadius: 10
    },
    CSSWrapper: {
        backgroundColor: '#3799D6',
        padding: 10,
        paddingLeft: 20,
        marginTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
    },
    JSWrapper: {
        backgroundColor: '#B8860B',
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
    inlineBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})

export default Base