import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/Slice/PaginateSlice';

const PaginateList = () => {
    const dispatch = useDispatch();
    const getProductsList = useSelector(state => state.productsList.products);

    const [dataLimit,setDataLimit] = useState(10); 
       
    const getProducts = () => {
        const data = {
            page: dataLimit
        }
        dispatch(fetchProducts(data));
    }

    useEffect(() => {
        getProducts();
    }, [dataLimit]);

    const getPage = () => {
        setDataLimit(prev => prev + 10)
    };

    const renderProducts = ({ item }) => {
        const TITLE = item?.title;
        const DESCRIPTION = item?.description;
        return (
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <View>
                    <Text>{item?.id + '.'}</Text>
                </View>
                <View>

                    <Text style={styles.productTitle}>{TITLE}</Text>
                    <Text style={styles.products}>{DESCRIPTION}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={getProductsList}
                renderItem={renderProducts}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ gap: 20, marginTop: 10, paddingHorizontal: 20 }}
                onEndReached={getPage}
            />
        </View>
    )
}

export default PaginateList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    products: {
        fontSize: 16,
        color: "gray"
    },
    productTitle: {
        fontSize: 18,
        color: "black"
    }
})