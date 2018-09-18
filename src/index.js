/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    let numTriangles = 0;
    let arrLove = [].concat(preferences);

    arrLove.forEach((el, i, arr) => {
        let loveTriangle = arr[arr[el - 1] - 1];
        if (loveTriangle === i + 1) {
            numTriangles++;
        } 
    });

    return ~~(numTriangles / 3);
};
