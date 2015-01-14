import {map, reduce, flatten} from 'lodash'

function cartesianProductOf(...args) {
    return reduce([...args], (a, b) => {
        return flatten(map(a, (x) => {
            return map(b, (y) => x.concat([y]))
        }), true)
    }, [ [] ])
}

export default cartesianProductOf
