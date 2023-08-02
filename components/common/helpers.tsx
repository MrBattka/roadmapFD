import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export type ItemType = {
    point: string
    isDone: boolean
}

//  Custom Checkbox
export const returnSquare = (isDoneData: any) => {
    if (typeof isDoneData === 'boolean') {
        return <View style={isDoneData ? styles.squareCmpltd : styles.square}></View>
    } else if (typeof isDoneData === 'string') {
        return <View style={isDoneData === '2' ? styles.squareCmpltd : styles.square}></View>
    }
    
}

//  Logic checking completed tasks
export const CmpltdData = (data: any, setData: any, setCmpltdData: any, isDoneData: any, setIsDoneData: any) => {
    setIsDoneData(!isDoneData)
    if (isDoneData) {
        setData([...data.map((task: ItemType) =>
            ({ ...task, isDone: false }))
        ])
        setCmpltdData([])
    } else {
        setData([...data.map((task: ItemType) =>
            ({ ...task, isDone: true }))
        ])
        setCmpltdData([data])
    }
}

const toggle = (data: any, action: any, setData: any) => {
    setData([...data.map((task: ItemType) =>
        (task !== action ? task : { ...task, isDone: !task.isDone }))
    ])
}

export const dataItemCmpltd = (item: ItemType, cmpltdData: any, setIsDoneData: any,
    data: any, setData: any, length: number) => {
    if (item.isDone === false) {
        cmpltdData.push(item)
    } else if (item.isDone === true) {
        cmpltdData.pop()
    }
    if (cmpltdData.length === length) {
        setIsDoneData(true)
    } else {
        setIsDoneData(false)
    }
    toggle(data, item, setData)
}

export const returnItem = (isDone: string, setIsDone: React.Dispatch<React.SetStateAction<string>>, str: string) => {
    const test = () => {
        if (isDone === '1') {
            setIsDone('2')
        } else if (isDone === '2') {
            setIsDone('1')
        }
    }
    return (
        <View>
            <TouchableOpacity style={styles.inlineBox}
                onPress={() => test()}>
                {returnSquare(isDone)}
                <Text style={isDone === '2' ? styles.subItemCompleted : styles.subItem}>{str}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})