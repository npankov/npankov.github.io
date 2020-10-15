import React, { Component } from 'react'
import CV from 'react-cv'

export default class App extends Component {
  render () {
    return (
      <CV
        personalData={{
          name: 'Nikolai Pankov',
          title: 'Développeur web junior',
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
            content: 'Profil international, 30 ans. ' +
              '6 ans d\'expérience dans le domaine d\'informatique. ' +
              'De nature motivé, organisé et déterminé. Curieux, en recherche d\'approfondir ' +
              'mes connaissances dans le développement web. Vous pouvez consulter mes projets sur la page ' +
              'Github soit en cliquant sur les liens dans mes projets. ' +
              'Diplômé en 2014 d\'un Master Informatique : Programmation & Développement, ' +
              'avec la qualification professionnelle d’ingénieur programmeur à Minsk, Biélorussie ' +
              '(attestation de comparabilité par Enic-Naric équivalent BAC +5).',
            icon: 'usertie'
          },
          {
            type: 'experiences-list',
            title: 'Projets',
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
            title: 'Formations',
            icon: 'graduation',
            items: [
              {
                title: 'Développeur Front-end JavaScript',
                authority: 'Hexlet.io',
                authorityWebSite: 'https://hexlet.io',
                rightSide: '2019 - аujourd\'hui'
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
            type: 'tag-list',
            title: 'Compétences techniques',
            icon: 'rocket',
            items: ['Javascript', 'React', 'Redux', 'NodeJS', 'jQuery', 'HTML / CSS / Bootstrap / Material - UI', 'SQL', 'TDD', 'CI', 'Agile', 'VS Code / WebStorm', 'Illustrator', 'Mac / Linux / Windows']
          },
          {
            type: 'experiences-list',
            title: 'Experiences',
            icon: 'archive',
            items: [
              {
                title: 'D\'autopartage sur Getaround',
                company: 'Entrepreneur',
                description: 'Mise en location de ma flotte de véhicules sur le service Getaround',
                companyWebSite: 'https://fr.getaround.com/users/1301762',
                companyMeta: '',
                datesBetween: '07.2017 - аujourd\'hui',
              },
              {
                title: 'Ingénieur technicien',
                company: 'Voda2000',
                description: 'Configuration des panneaux de contrôle et vérification des premiers tests fonctionnels',
                companyWebSite: 'https://www.voda2000.by/',
                companyMeta: '',
                datesBetween: '04.2013 - 05.2017',
              },
              {
                title: 'Stagière QA',
                company: 'A1QA',
                description: 'Tests des applications Web',
                companyWebSite: 'https://www.a1qa.by/',
                companyMeta: '',
                datesBetween: '10.2016 - 12.2016',
                descriptionTags: ['Test fonctionnel', 'Test de compatibilité', 'Test de régression', 'Test utilisateur']
              },
              {
                title: 'Technicien informatique, Responsable du site logistique',
                company: 'Zooterra',
                description: 'Organisation de travail technique des magasins et du site logistique',
                companyWebSite: 'http://kikagroup.lt/en/',
                companyMeta: '',
                datesBetween: '2010 - 2012'
              }
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