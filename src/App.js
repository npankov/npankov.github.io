import React, { Component } from 'react'
import CV from 'react-cv'

export default class App extends Component {
  render () {
    return (
      <CV
        personalData={{
          name: 'Nikolai Pankov',
          title: 'Développeur front-end',
          image: 'https://avatars0.githubusercontent.com/u/15931359?s=460&u=8190b0ceaa3068792db92bfac39ec22a54675972&v=4',
          contacts: [
            { type: 'email', value: 'pankov@outlook.fr' },
            { type: 'phone', value: '+33 7 68 21 21 33' },
            { type: 'location', value: 'Lyon' },
            { type: 'linkedin', value: 'linkedin.com/in/pankof/' },
            { type: 'github', value: 'github.com/npankov' }
          ]
        }}
        sections= {[
          {
            type: 'text',
            title: 'Profil',
            content: 'Développeur front-end, profil international. ' +
              'De nature motivé, organisé et déterminé. Curieux, ' +
              'j\'approfondie quotidiennement mes connaissances en développement web. ' +
              'Vous pouvez consulter mes projets sur la page' +
              'Github soit en cliquant sur les liens dans mes projets. ' +
              'Diplômé en 2014 d\'un Master Informatique : Programmation & Développement, ' +
              'avec la qualification professionnelle d’ingénieur programmeur à Minsk, Biélorussie ' +
              '(attestation de comparabilité par Enic-Naric équivalent BAC +5). J’ai renforcé mes acquis en développement web en 2021 - 2022 chez Human Booster, Lyon, France.',
            icon: 'usertie'
          },
          {
            type: 'tag-list',
            title: 'Compétences techniques',
            icon: 'rocket',
            items: ['Javascript', 'TypeScript', 'React', 'Redux', 'NodeJS', 'HTML / CSS / Bootstrap', 'SQL', 'TDD', 'Unit tests', 'CI', 'Agile']
          },
          {
            type: 'experiences-list',
            title: 'Experiences',
            icon: 'archive',
            items: [
              {
                title: 'Développeur front-end',
                company: 'LumApps',
                description:
                    'Migration les pages de l’application LumApps d’AngularJS vers React. ' +
                    'Développement de nouvelle features “Journeys”, pour l’onboarding. ' +
                    'Création des tests unitaires, stories. ' +
                    'Review de PR.',
                companyWebSite: 'https://www.lumapps.com/',
                companyMeta: '',
                datesBetween: '2022',
                descriptionTags: ['TS', 'React', 'Redux', 'Jest', 'RTL', 'ESlint', 'Figma', 'Storybook' ],
              },
              {
                title: 'D\'autopartage sur Getaround',
                company: 'Entrepreneur',
                description: 'Mise en location de ma flotte de véhicules sur le service Getaround',
                companyWebSite: 'https://fr.getaround.com/users/1301762',
                companyMeta: '',
                datesBetween: '2017 - 2021',
              },
              {
                title: 'Technicien informatique',
                company: 'Voda2000',
                description: 'Configuration des panneaux de contrôle et vérification\n' +
                             'Premiers tests fonctionnels',
                companyWebSite: 'https://www.voda2000.by/',
                companyMeta: '',
                datesBetween: '2013 - 2017',
              },
            ]
          },
          {
            type: 'common-list',
            title: 'Formations',
            icon: 'graduation',
            items: [
              {
                title: 'Développeur web et web - mobile',
                authority: 'Human Booster',
                authorityWebSite: 'https://humanbooster.com/',
                rightSide: '2021 - 2022'
              },
              {
                title: 'Développeur Front-end JavaScript',
                authority: 'Hexlet.io',
                authorityWebSite: 'https://hexlet.io',
                rightSide: '2019 - 2020'
              },
              {
                title: 'Centre international d’études françaises',
                authority: 'Université Lyon 2',
                authorityWebSite: 'https://cief.univ-lyon2.fr/',
                rightSide: '2018 - 2019'
              },
              {
                title: 'Master Technologies d’information. Spécialisation : Ingénieur Programmeur',
                authority: 'BSUIR',
                authorityWebSite: 'https://www.4icu.org/reviews/242.htm',
                rightSide: '2010 - 2014'
              }
            ]
          },
          {
            type: 'experiences-list',
            title: 'Projets personnels',
            icon: 'tasks',
            items: [
              {
                title: 'Statistique de Covid-19',
                company: 'Voir le projet',
                description: 'Projet front-end pour consulter les cas de covid dans le monde',
                companyWebSite: 'https://npankov.github.io/covid19-statistic-project/',
                companyMeta: '',
                descriptionTags: ['ES6', 'React, Hooks', 'Material-UI', 'Chart.js', 'API', 'axios', 'ESLint'],
              },
              {
                title: 'GenDiff utilite',
                company: 'Voir le projet sur github',
                description: 'Cli-utilite pour comparer les fichiers .json, .yml, .ini avec l\'option de génération de l’arbre de différences et construction du rapport en format text / pretty / json',
                companyWebSite: 'https://github.com/npankov/frontend-project-lvl2',
                companyMeta: '',
                descriptionTags: ['ES6', 'CI', 'NodeJS', 'Babel', 'TDD', 'AST', 'ESLint'],
              },
              {
                title: 'Console Games',
                company: 'Voir le projet sur github',
                description: 'Cinq jeux de console de logique',
                companyWebSite: 'https://github.com/npankov/frontend-project-lvl1',
                companyMeta: '',
                descriptionTags: ['ES6', 'CI', 'NodeJS', 'Babel', 'ESLint'],
              },
            ]
          },
          {
            type: 'common-list',
            title: 'Langues',
            icon: 'language',
            items: [
              {
                authority: 'Français',
                authorityMeta: 'Intermédiaire supérieur'
              },
              {
                authority: 'Anglais',
                authorityMeta: 'Intermédiaire'
              },
              {
                authority: 'Russe',
                authorityMeta: 'Bilingue (Natif)'
              }
            ]
          },
          {
            type: 'tag-list',
            title: 'Loisirs',
            icon: 'cubes',
            items: ['Snowboard', 'MTB', 'CS', 'PUBG']
          }
        ]}
        branding={false}
      />
    )
  }
}