for(let age = 1; age <= 100; age += 5){
    let price;
    if (age <= 5) price = "$0 (free)";
    else if( age <= 12) price = "$10 (child)";
    else if( age <= 64) price = "$20 (adult)";
    else price = "$12 senior";
    console.log(" Age " + age + ": Ticket Price " + price);
}