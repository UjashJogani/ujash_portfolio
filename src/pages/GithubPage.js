import React from 'react';
import './../styles/GitHubPage.css';

const GitHubPage = () => {
  return (
    <div className="github-container">
      <div className="github-content">
        <h1>🐙 GitHub Insights</h1>

        <p>
          I actively contribute to open-source and personal projects on GitHub. I use it to version control production apps,
          collaborate with teams, and explore new tech stacks.
        </p>

        <a
          href="https://github.com/UjashJogani"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Visit My GitHub Profile
        </a>

        <div className="github-stats">
          <img
            src="https://github-readme-stats.vercel.app/api?username=UjashJogani&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=UjashJogani&layout=compact&theme=tokyonight&hide_border=true"
            alt="Top Languages"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=UjashJogani&theme=tokyonight&hide_border=true"
            alt="GitHub Streak"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubPage;
