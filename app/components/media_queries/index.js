// Breakpoints
/*
0 - 600px : Phone
600 - 900px : Tablet portrait
900 - 1200px : Tablet landscape
[1200 - 1800] : Desktop - [normal styles]
1800 - + : Big desktop
*/

// 600px
const respondPhone = content => `
    @media only screen and (max-width: 37.5em) {
        ${content} 
    }
`;

// 900px
const respondTabPort = content => `
    @media only screen and (max-width: 56.25em) {
        ${content}
    }
`;

// 1200px
const respondTabLand = content => `
    @media only screen and (max-width: 75.0em) {
        ${content}
    }
`;

// 1800px
const respondBigDesktop = content => `
    @media only screen and (min-width: 112.5em) {
        ${content}
    }
`;

const respond = (breakpoint, content) => {
  if (breakpoint === 'phone') {
    return respondPhone(content);
  }
  if (breakpoint === 'tab-port') {
    return respondTabPort(content);
  }
  if (breakpoint === 'tab-land') {
    return respondTabLand(content);
  }
  if (breakpoint === 'big-desktop') {
    return respondBigDesktop(content);
  }
  return null;
};

export { respond };
