class github {
  constructor() {
    this.client_id = '02d8726a8b55b34a5f00';
    this.client_secret = 'a288712a4d05df9db340d838ac58a54678bbf9c3';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponce = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponce = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponce.json();
    const repos = await repoResponce.json();

    return {
      profile : profileData,
      repos
    }
  }
}