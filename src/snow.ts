/**
 * This function will return an SVG element with snowflakes
 * which mimic the same css animation as the snowflakes in the codepen
 * Credit: https://codepen.io/alphardex/pen/dyPorwJ
 */

export function getSnowSvg() {
  const totalSnowflakes = 400;
  const svgNS = "http://www.w3.org/2000/svg";
  const svgContainer = document.createElementNS(svgNS, 'svg');
  const vw = 300;
  const vh = 800;
  svgContainer.setAttribute('width', vw.toString());
  svgContainer.setAttribute('height', vh.toString());
  svgContainer.setAttribute('viewBox', `0 0 ${vw} ${vh}`);

  // @ts-ignore for convenience, use js
  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < totalSnowflakes; i++) {
    const snowflake = document.createElementNS(svgNS, 'circle');
    const randomX = randomRange(0, vw);
    const randomOffset = randomRange(-10, 10) * vw;
    const randomXEnd = randomX + randomOffset;
    const randomXEndYoyo = randomX + (randomOffset / 2);
    const randomYoyoTime = randomRange(0.3, 0.8);
    const randomYoyoY = randomYoyoTime * vh;
    const randomScale = randomRange(0.1, 1);
    const fallDuration = randomRange(10, 30);
    const fallDelay = randomRange(-30, 0);

    snowflake.setAttribute('cx', randomX.toString());
    snowflake.setAttribute('cy', '-10');
    snowflake.setAttribute('r', (10 * randomScale).toString());
    snowflake.setAttribute('fill', 'white');
    snowflake.setAttribute('opacity', randomRange(0.1, 1));

    const animateTransform = document.createElementNS(svgNS, 'animateTransform');
    animateTransform.setAttribute('attributeName', 'transform');
    animateTransform.setAttribute('type', 'translate');
    animateTransform.setAttribute('from', `${randomXEnd} ${randomYoyoY}`);
    animateTransform.setAttribute('to', `${randomXEndYoyo} ${vh}`);
    animateTransform.setAttribute('dur', `${fallDuration}s`);
    animateTransform.setAttribute('begin', `${fallDelay}s`);
    animateTransform.setAttribute('repeatCount', 'indefinite');

    snowflake.appendChild(animateTransform);
    svgContainer.appendChild(snowflake);
  }

  return svgContainer;
}

export const getSnowSvgDataUrl = () => {
  const svg = getSnowSvg();
  const svgString = new XMLSerializer().serializeToString(svg);
  return `data:image/svg+xml,${encodeURIComponent(svgString)}`;
}