function solution(common) {
    let diff = common[1] - common[0];
    let ratio = common[1] / common[0];

    if (common[2] - common[1] === diff) {
        // 등차수열
        return common[common.length - 1] + diff;
    } else {
        // 등비수열
        return common[common.length - 1] * ratio;
    }
}

// 등차인 경우에는 인덱스 하나 끼리의 차이가 같음. 
// 예) [45-44] 인덱스의 차이는 [28-27] 인덱스의 차이와 같음 

// 등비인 경우에는 모든 인덱스가 0번 인덱스로 나누어 떨어짐

