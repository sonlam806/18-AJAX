const axios = require('axios');

async function getNumberOfFollowers() {

    let res = await axios.get('https://randomuser.me/api/');

    let nOfFollowers = res.data;
    //   let location = res.data.location;

    console.log(`# of followers: ${nOfFollowers}`)
    //   console.log(`Location: ${location}`)
}

getNumberOfFollowers();