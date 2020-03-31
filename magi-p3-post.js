const tsDep = `"scripts": {
    "generate-typings": "gen-typescript-declarations --outDir ."
  },
  "devDependencies": {
    "@polymer/gen-typescript-declarations": "^1.6.2",`;

const rootExport = `import './theme/lumo/vaadin-combo-box.js';
export * from './src/vaadin-combo-box.js';
`;

module.exports = {
  files: [
    'package.json',
    'src/vaadin-combo-box.js',
    'src/vaadin-combo-box-light.js',
    'vaadin-combo-box.js'
  ],
  from: [
    '"devDependencies": {',
    '@mixes Vaadin.ElementMixin',
    '@mixes Vaadin.ControlStateMixin',
    '@mixes Vaadin.ComboBoxDataProviderMixin',
    '@mixes Vaadin.ComboBoxMixin',
    '@mixes Vaadin.ThemableMixin',
    '@mixes Vaadin.ThemePropertyMixin',
    '@memberof Vaadin',
    `import './theme/lumo/vaadin-combo-box.js';`
  ],
  to: [
    tsDep,
    '@mixes ElementMixin',
    '@mixes ControlStateMixin',
    '@mixes ComboBoxDataProviderMixin',
    '@mixes ComboBoxMixin',
    '@mixes ThemableMixin',
    '@mixes ThemePropertyMixin',
    '@extends PolymerElement',
    rootExport
  ]
};
