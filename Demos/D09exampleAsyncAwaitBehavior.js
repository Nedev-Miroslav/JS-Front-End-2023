function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('2');
        }, 1000);
    });
}

async function asyncCall() {
    console.log('1');
    let result = await resolveAfter2Seconds();
    console.log(result);
    console.log('3');
}

asyncCall()