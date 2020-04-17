export default (context) => {
    return new Promise(function(resolve) {
        resolve({
            validation: require('@/lang/ru/validation.json'),
            nav: require('@/lang/ru/nav.json')
        })
    })
}
