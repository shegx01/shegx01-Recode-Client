module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'public/**/*.html'
  ],
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem'
      },
      fontSize: {
        xxs: '10px'
      }
    },
    fontFamily: {
      display: ['Liberation Sans', 'sans-serif'],
      body: ['Liberation Sans', 'sans-serif']
    },
    colors: {
      success: '#2B9936',
      success1: '#63D36E',
      warning: '#A59129',
      warning1: '#D4C15E',
      danger: '#ED3F3F',
      danger1: '#F18D8D',
      link: '#A4BDFF',
      fg: '#B4B6BB',
      fg1: '#D7DCE7',
      grey: '#272D3B',
      grey1: '#2F3547',
      grey2: '#3D465C',
      grey3: '#515D7B',
      grey4: '#7A8FB8',
      white: '#fff'
    }
  },
  variants: {},
  plugins: []
}
