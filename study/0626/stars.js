for (let i = n; i >= 1; i--) {
    const stars = "*".repeat(2 * i - 1);
    console.log(stars.padStart(n + i - 1));
}