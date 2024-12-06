const API_URL = 'http://localhost:3002';

export const themeService = {
  async getTheme() {
    const response = await fetch(`${API_URL}/theme`);
    const data = await response.json();
    this.applyTheme(data.theme);
    return data.theme;
  },

  async setTheme(theme) {
    const response = await fetch(`${API_URL}/theme`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme }),
    });
    const data = await response.json();
    if (data.status === 'success') {
      this.applyTheme(data.theme);
    } else {
      console.error(data.message);
    }
    return data;
  },

  async toggleTheme() {
    const response = await fetch(`${API_URL}/theme/toggle`, {
      method: 'POST',
    });
    const data = await response.json();
    if (data.status === 'success') {
      this.applyTheme(data.theme);
    } else {
      console.error(data.message);
    }
    return data;
  },

  applyTheme(theme) {
    if (theme === 'light') {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    } else if (theme === 'dark') {
      document.body.style.backgroundColor = '#1E202A';
      document.body.style.color = '#F5E8C8';
    }
  },
};
