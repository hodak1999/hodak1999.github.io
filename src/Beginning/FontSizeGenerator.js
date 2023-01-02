import {useWindowDimensions} from '../Providers/WindowSizeProvider';

export function FontSizeGenerator() {
    const {width} = useWindowDimensions();
    if (width < 570) {
        return '50px';
    } else {
        return '100px';
    }
}