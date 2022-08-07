type Theme = {
  backgroundColor: string;
  backgroundImage: string;
  borderRadius: number;
  button: {
    textColor: string,
    backgroundColor: string
  };
  card: {
    textColor: string,
    headingColor: string,
    background: string,
    border: string,
    padding: string
  },
  text: {
    headingColor: string,
    subColor: string,
    gradientColor: string
  },
  input: {
    background: string,
    color: string,
    border: string
  },
  table: {
    headerColor: string,
    cellColor: string
  },
  color: {
    green: string,
    red: string,
    error: string,
  }
}

export const theme: Theme = {
  backgroundColor: `hsla(240,14%,4%,1)`,
  backgroundImage: `radial-gradient(circle at 58% 20%, hsla(283,100%,50%,0.2) 0px, transparent 34%),
  radial-gradient(circle at 10% 71%, hsla(277,100%,30%,0.27) 0px, transparent 25%),
  radial-gradient(circle at 90% 20%, hsla(327,73%,49%,0.2) 0px, transparent 23%)`,
  borderRadius: 5,
  color: {
    green: "#31D0AA",
    red: "#ED4B9E",
    error: "rgb(223 38 82)"
  },
  button: {
    textColor: '#fff',
    backgroundColor: 'linear-gradient(86.46deg, #7143ff 0.52%, #4416db 70.5%)'
  },
  card: {
    background: `rgba(197, 192, 192, 0.1)`,
    border: `1px solid rgba(255, 255, 255, 0.1)`,
    textColor: '#fff',
    headingColor: "#A6A0BB",
    padding: '6px'
  },
  text: {
    headingColor: '#fff',
    subColor: "#A6A0BB",
    gradientColor: "linear-gradient(86.46deg, #C0ACFF 0.52%, #C57CF1 99.31%)"
  },
  input: {
    background: '#171618',
    color: "#fff",
    border: "1px solid rgba(255, 255, 255, 0.05)"
  },
  table: {
    headerColor: '#A6A0BB',
    cellColor: "#fff"
  }
};

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends Theme { }
}

export default theme;
