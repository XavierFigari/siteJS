# Méthodologie du projet

## Définition des user stories
- une user story par fonctionnalité de base
- une issue dans GitHub par user story
- création d'un Kanban dans GitHub où seront listées les issues
- mettre en place des milestones

## Usage de Git

### Branches principales
- créer une branche **main** et une branch **dev**
- dans Github, définir la branche par défaut à **dev**
- travailler uniquement sur la branche **dev**

A chaque *Milestone* on fera une *Pull request* depuis **dev** vers **main**

### Création de branches
- utiliser Github pour créer des branches à partir des issues
- quand une "issue" est résolue (user story implémentée et fonctionnelle), on fera :
    - un commit
    - un '*pull request*' sur la branche **dev**
- une code review permettra de faire un merge dans la branche **dev** et de clore l'issue
- on effacera la branche une fois le merge effectué dans la branche **dev**

## Structure des dossiers :

- doc/ : toute la documentation
- html/ : les fichiers html
- css/  : les fichiers de style .css
- js/ : le javascript .js
