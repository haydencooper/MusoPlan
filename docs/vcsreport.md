# VCS Report

# VCS Investigated (Git)

# Benefits
  Faster releases
  Simultaneous development
  Strong community support
  Built-in integration
  Offline working

# How GitHub fits the organisational requirements
  GitHub is the number one distributed version control system in the world and familiar to almost every expert and organisation. They are committed to developing the best supporting ecosystems, making it the perfect version control system for this project.

  GitHub provides the ability to create new branches within a repository, giving developers a seamless workflow.

  GitHub allows developers to easily add commit messages that follow industry standards (within present tense and imperative mood) and to the requirements of the organisation. Commit scope will also be kept within single changes and as GitHub gives each developer their own user profile, all commits will be authenticated to include their name and email.

  GitHub automatically creates README.md files when initalising a repository.

# Git Installation
  Git installation is a simple process.
  
  If you are a Mac OSX user, Git comes preinstalled with XTools. If you do not have XTools preinstalled on your Mac, it can be found on the Apple Store. You can also download an official installer directly from the Git website.
  
  If you are a Windows user, you can download an official installer directly from the Git website.

  These installers will wholly take care of the installation process. To confirm the installation process is completed successfully, you can run the git --version command through your chosen terminal. If the Git version is printed, the Git installation was successful and ready to go.

  Personally, I did not run into any installation errors. If you are experiencing an error/failure there is a wealth of solved issues on websites like StackOverflow and Reddit to help troubleshoot problems.

# Configuration
  You can configure your committer/author Name & Email globally by using the --global command. This will change all of your future commits to use the given information.

  $ git config --global user.name "John Doe"
  $ git config --global user.email "john@doe.org"

  If you simply remove the --global flag, you will change the name and email for the current repository.

  $ git config user.name "John Doe"
  $ git config user.email "john@doe.org"

# Disruptions
  While the Git team provides you with a relatively risk-free way to install and use their VCS, sometimes, software can fail due to an unexpected error. If this is the case, reinstallation is more often than not a straight forward fix. Git does not change anything on an Operating System level, so it will rarely, if ever, solely be the cause of a disruption.