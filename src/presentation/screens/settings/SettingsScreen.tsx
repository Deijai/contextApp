import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../../config'
import { useCounterStore } from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
    const count = useCounterStore((state) => state.count);
    const increase = useCounterStore((state) => state.increase);

    const navogation = useNavigation();

    useEffect(() => {
        navogation.setOptions({
            headerTitle: `Counter ${count}`
        })
    }, [count]);


    return (
        <View style={styles.container}>
            <Text>Counter {count}</Text>

            
            <Pressable
                style={styles.primaryButton}
                onPress={() => increase(+1)}
            >
                <Text>Adicionar</Text>
            </Pressable>

            <Pressable
                style={styles.primaryButton}
                onPress={() => increase(-1)}
            >
                <Text>Remover</Text>
            </Pressable>
        </View>
      )
}
