import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Accordion = () => {
    const productsData = [{
        name: 'product1',
        description: 'This is product1',
        id: 1
    },
    {
        name: 'product2',
        description: 'This is product2',
        id: 2
    },
    {
        name: 'product3',
        description: 'This is product3',
        id: 3
    },
    ];

    const [productCardID, setProductID] = useState(null);
    const [multipleSelect, setMultipleSelect] = useState([]);

    const openCards = (productID) => {
        setProductID(productID);
        setMultipleSelect( multipleSelect.includes(productID) ? multipleSelect.filter(item => item !== productID) : [...multipleSelect, productID])
    }

    // console.log(multipleSelect);
    

    const renderProducts = ({ item }) => {
        const productName = item?.name;
        const prodctDesc = item?.description;
        const productID = item?.id;

        const isExpanded = multipleSelect.includes(productID);
        return (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
                <View>
                    <Text style={styles.itemName}>{productName}</Text>
                    {
                        isExpanded && <Text style={styles.descName}>{prodctDesc}</Text>
                    }
                </View>
                <Pressable onPress={() => openCards(productID)} style={{height: 40, width: 40, backgroundColor:"red",alignItems: 'center', justifyContent: "center"}}>
                    <Text style={styles.openCard}>+</Text>
                </Pressable>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={productsData}
                keyExtractor={item => item.id.toString()}
                renderItem={renderProducts}
                contentContainerStyle={{ gap: 20 }}
            />
        </View>
    );
};

export default Accordion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20
    },
    openCard: {
        fontSize: 24,
        backgroundColor: 'red'
    }
});
