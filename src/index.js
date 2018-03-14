/*// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = () => {};
const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

//return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;*/

// DO WHATEVER YOU WANT HERE


const createEnumerableProperty =  (property) => {
    Object.defineProperty(Object, property, {
        enumerable: true
    });
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName,  {
        enumerable: false,
        get: function(){
            return Object.propertyName;
        },
        set: function (propertyValue) {
            Object.propertyName = propertyValue;
        }
    });
    return propertyName;
};


const createProtoMagicObject = () => {return Function};

const incrementor = () => {
    ++incrementor.counter;
    return incrementor;
};
Function.__proto__.valueOf = function (){
    return this.counter;
};
incrementor.counter = 0;

const asyncIncrementor = () => {
    ++asyncIncrementor.counter;
    return asyncIncrementor;
};
asyncIncrementor.counter = 0;


const createIncrementer = () => {
    function* creator(){
        var index = 0;
        while (index < 10)
            yield ++index;
    }
    return creator();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(param);
        },1000);
        });
    return promise;
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => null;
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;