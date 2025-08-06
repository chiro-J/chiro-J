const DB = []

function saveDB(user) {
    const oldDBSize = DB.length;
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve, reject) => {       // 콜백 대신 Promise 객체 반환
        if (DB.length > oldDBSize) {
            resolve(user);
        }   else {
            reject(new Error("save DB Error!"));    // 실패 시 에러 발생
        }
    })
}


function sendEmail(user) {
    console.log(`email to ${user.email}`)
    return new Promise((resolve) => {           // Promise 객체를 반환, 실패 처리 없음
        resolve(user);
    })
}


function getResult(user) {
    return new Promise((resolve, reject) => {           // Promise 객체 반환
        resolve(`success register ${user.name}`)        // 성공 시 성공 메시지와 유저명 반환
    })
}


function registerByPromise(user) {
    const result = saveDB(user).then(sendEmail).then(getResult);
    console.log(result)
    return result;
}


const myUser = { email: "andy@test.com", password: "1234", name:"andy" }
const result = registerByPromise(myUser);

// 결괏값이 Promise이므로 then() 메서드에 함수를 넣어서 결괏값을 볼 수 있음
result.then(console.log);
