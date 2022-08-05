function wait(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}

(async function(){
  const users = ['brianchandotcom', 'abraham', 'frsyuki', 'bdougie', 'RamiKrispin']; //source https://commits.top/united_states.html

  for(const [position, user] of users.entries()){
    const userDetails = await (await fetch(`https://api.github.com/users/${user}`)).json();
    console.log(`User at position ${position + 1}: ${userDetails.name} - ${userDetails.login}`);
    await wait(1000);
  }
})();
