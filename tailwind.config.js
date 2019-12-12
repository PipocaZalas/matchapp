/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem'
    },
    colors: {
      white: '#ffffff',
      blue: {
        '050': '#e6f6ff',
        '100': '#bae3ff',
        '200': '#7cc4fa',
        '300': '#47a3f3',
        '400': '#2186eb',
        '500': '#0967d2',
        '600': '#0552b5',
        '700': '#03449e',
        '800': '#01337d',
        '900': '#002159'
      },
      cyan: {
        '050': '#e1fcf8',
        '100': '#c1fef6',
        '200': '#92fdf2',
        '300': '#62f4eb',
        '400': '#3ae7e1',
        '500': '#1cd4d4',
        '600': '#0fb5ba',
        '700': '#099aa4',
        '800': '#07818f',
        '900': '#05606e'
      },
      gray: {
        '050': '#f5f7fa',
        '070': '#eef1f6',
        '100': '#e4e7eb',
        '200': '#cbd2d9',
        '300': '#9aa5b1',
        '400': '#7b8794',
        '500': '#616e7c',
        '600': '#52606d',
        '700': '#3e4c59',
        '800': '#323f4b',
        '900': '#1f2933'
      }
    }
  },
  variants: {},
  plugins: []
}
