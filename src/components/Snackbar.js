/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Snackbar } from 'react-native-paper';

// Constants
import { Colors } from '../constants/colors';
import { SCREEN_WIDTH as width } from '../constants/screen';

export const SnackBar = ({ error, setError }) => {
    return (
        <SafeAreaProvider style = { styles.snackbarBox } >
        <Snackbar
            visible={!!error}
            onDismiss={() => setError('')}
            duration={4000}
            action={{
                label: 'Close',
                onPress: () => setError(''),
                color: Colors.warning,
                labelStyle: { color: Colors.warning },
            }}
            style={[
                styles.snackbar,
                { backgroundColor: Colors.primary, borderColor: Colors.warning, borderWidth: 1.1 }, // Specify border color and width
            ]}
        >
            <Text style={{ color: Colors.warning }}>
                {error}
            </Text>
        </Snackbar>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    snackbarBox: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
        zIndex: 1000,
    },
    snackbar: {
        // color: Colors.warning,
        // alignItems: 'center',
        // height: width / 7.82,
        // width: width * 0.961,
    },
});
