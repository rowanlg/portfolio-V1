const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '650px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileSmin: `(min-width: ${size.mobileS})`,
  mobileSmax: `(max-width: ${size.mobileS})`,
  mobileMmin: `(min-width: ${size.mobileM})`,
  mobileMmax: `(max-width: ${size.mobileM})`,
  mobileLmin: `(min-width: ${size.mobileL})`,
  mobileXLmin: `(min-width: ${size.mobileXL})`,
  tabletmin: `(min-width: ${size.tablet})`,
  tabletmax: `(max-width: ${size.tablet})`,
  laptopmin: `(min-width: ${size.laptop})`,
  laptopmax: `(max-width: ${size.laptop})`,
  laptopLmin: `(min-width: ${size.laptopL})`,
  laptopLmax: `(max-width: ${size.laptopL})`,
  desktopmin: `(min-width: ${size.desktop})`,
  desktopmax: `(max-width: ${size.desktop})`,
};