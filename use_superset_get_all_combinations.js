const arr = [4,3,2,1]

const fillZeroToBinary = (value, bitLength) => {

  const binaryValue = value.toString(2)
  const difference = bitLength - binaryValue.length

  if(difference > 0) {
    var result = binaryValue.toString(2)

    for(let i=0; i<difference; i++) {
      result = "0" + result
    }

    return result
  }

  return binaryValue
}

const findSuperSet = (arr) => {

  const length = Math.pow(2, arr.length)
  const bitLength = arr.length
  var result = []

  for(let i=1; i < length; i++) {
    const binaryValueFilledZero = fillZeroToBinary(i, bitLength)
    const splitedArray = binaryValueFilledZero.split("")
    console.log('splited: ', splitedArray)
    var set = []
    splitedArray.forEach((item, index) => {
      if (item == "1") {
        set.push(arr[index])
      }
    })
    result.push(set.reverse())
  }

  return result
}

console.log('result (superset): ', findSuperSet(arr))