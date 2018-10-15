const GitHub = new github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  // Get user Text
    const userText = e.target.value;

    if(userText !== ''){
      GitHub.getUser(userText)
          .then((data) => {
              if(data.profile.message === 'Not Found'){
                // Show alert 
                
                ui.alertUser('User Not Found' , 'alert alert-danger');
              } else {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
              }
          })
    } else {
      // Clear Profile
      ui.clearProfile();
    }
} );