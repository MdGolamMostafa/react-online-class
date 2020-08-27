import ReactJS from './ReactJS';
import ReactNative from './ReactNative';
import Angular from './Angular';
const fakeData = [...ReactJS, ...ReactNative, ...Angular];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;