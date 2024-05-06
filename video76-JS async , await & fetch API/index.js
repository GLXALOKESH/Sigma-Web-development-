async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = response.json();
    return data;
}

async function main(){
    console.log("loading data...")
    console.log("data loaded.....");
    console.log("data processing...");
    let data = await getData();
    console.log("showing results...");
    console.log(data)
    
    
}

main()
