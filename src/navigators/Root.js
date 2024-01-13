import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

export function goBack() {
    if (navigationRef.isReady()) {
        navigationRef.goBack();
    }
}

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export function replace(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.replace(name, params);
    }
}

export function navigatePush(name, params) {
    console.log(navigationRef.isReady());
    if (navigationRef.isReady()) {
        navigationRef.current?.dispatch(StackActions.push(name, params));
    }
}

export function navigateDispatch(screen) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.reset(screen));
    }
}
