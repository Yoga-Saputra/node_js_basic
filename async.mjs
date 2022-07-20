function samplePromise(){
    return Promise.resolve("Yoga");
}

const name = await samplePromise();
console.info(name);
