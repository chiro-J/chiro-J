function printStair (n) {
    for (let i = 0; i < n; i++) {
        console.log('*'.padStart(i + 1))
    }
}

printStair(4);


function printDiamond(n) {
    for (let i = 1; i <= n; i++) {
        const stars = '*'.repeat(2 * i - 1);
        console.log(stars.padStart(n + i - 1));
    }

    for (let i = n - 1; i >= 1; i--) {
        const stars = '*'.repeat(2 * i - 1);
        console.log(stars.padStart(n + i - 1));
    }
}

printDiamond(6); 
