import plugin from 'tailwindcss/plugin';

export default plugin(({ addVariant }) => {
  addVariant('hocus', ['&:hover', '&:focus-visible']);
  addVariant('group-hocus', [':merge(.group):hover &', ':merge(.group):has(*:focus-visible) &']);
});
