const color = 'yellow';
if(color === 'green') {
    console.log('You are green friend');
}else if(color === 'blue') {
    console.log('You are blue friend');
}else if(color === 'red') {
    console.log('You are red friend');
}else if(color === 'white') {
    console.log('You are white friend');
}else if(color === 'yellow') {
    console.log('You are yellow freind');
}else {
    console.log('You are sada sada kala kala friend');
}

// switch 
switch(color) {
    case 'green':
        console.log('You are my green friend');
        break;
    case 'blue':
        console.log('You are my blue friend');
        break;
    case 'red':
        console.log("You are my red friend");
        break;
    case 'yellow':
        console.log('You are my yellow friend');
        break;
    default:
        console.log('Nothing found');
}