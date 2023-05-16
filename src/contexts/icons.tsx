import { IconContext } from 'react-icons';

<IconContext.Provider
  value={{
    attr: (
      <clipPath>
        <svg>
          <defs>
            <radialGradient id="rg-instagram" r="150%" cx="30%" cy="107%">
              <stop
                offset="0%"
                style={{ stopColor: 'rgb(253,244,151)' }}
              ></stop>
              <stop
                offset="5%"
                style={{ stopColor: 'rgb(253,244,151)' }}
              ></stop>
              <stop offset="45%" style={{ stopColor: 'rgb(253,89,73)' }}></stop>
              <stop
                offset="60%"
                style={{ stopColor: 'rgb(214,36,159)' }}
              ></stop>
              <stop offset="90%" style={{ stopColor: 'rgb(40,90,235)' }}></stop>
            </radialGradient>
          </defs>
        </svg>
      </clipPath>
    )
  }}
></IconContext.Provider>;
