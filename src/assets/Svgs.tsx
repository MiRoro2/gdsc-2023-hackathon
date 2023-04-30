export function StarSvg() {
  return (
    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 0L10.1228 6.87719L17 8.5L10.1228 10.1228L8.5 17L6.87719 10.1228L0 8.5L6.87719 6.87719L8.5 0Z"
        fill="#2F2F2F"
      />
    </svg>
  );
}

export function ThreadRing() {
  return (
    <svg
      width="40"
      viewBox="0 0 33 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_18_200" fill="white">
        <path d="M21.2281 0.964513C18.7536 -0.0671832 16.1398 -0.274677 13.5972 0.358731C11.0546 0.992139 8.65419 2.44876 6.58916 4.61135C4.52413 6.77394 2.85216 9.58211 1.70781 12.8098C0.563467 16.0376 -0.0212917 19.5947 0.000600317 23.1949C0.0224924 26.7952 0.650424 30.338 1.83386 33.5382C3.01729 36.7384 4.72317 39.5067 6.8142 41.6202C8.90523 43.7337 11.323 45.1334 13.8729 45.7066C16.4229 46.2798 19.0337 46.0106 21.4954 44.9206L21.0187 42.8287C18.7919 43.8147 16.4302 44.0582 14.1236 43.5397C11.8171 43.0211 9.63002 41.755 7.73854 39.8432C5.84706 37.9314 4.30398 35.4273 3.23349 32.5325C2.16299 29.6377 1.59499 26.433 1.57518 23.1763C1.55538 19.9197 2.08433 16.702 3.11947 13.7823C4.15461 10.8626 5.66702 8.32244 7.53498 6.36623C9.40294 4.41002 11.5743 3.09241 13.8742 2.51945C16.1742 1.94649 18.5385 2.13418 20.7769 3.06742L21.2281 0.964513Z" />
      </mask>
      <path
        d="M21.2281 0.964513C18.7536 -0.0671832 16.1398 -0.274677 13.5972 0.358731C11.0546 0.992139 8.65419 2.44876 6.58916 4.61135C4.52413 6.77394 2.85216 9.58211 1.70781 12.8098C0.563467 16.0376 -0.0212917 19.5947 0.000600317 23.1949C0.0224924 26.7952 0.650424 30.338 1.83386 33.5382C3.01729 36.7384 4.72317 39.5067 6.8142 41.6202C8.90523 43.7337 11.323 45.1334 13.8729 45.7066C16.4229 46.2798 19.0337 46.0106 21.4954 44.9206L21.0187 42.8287C18.7919 43.8147 16.4302 44.0582 14.1236 43.5397C11.8171 43.0211 9.63002 41.755 7.73854 39.8432C5.84706 37.9314 4.30398 35.4273 3.23349 32.5325C2.16299 29.6377 1.59499 26.433 1.57518 23.1763C1.55538 19.9197 2.08433 16.702 3.11947 13.7823C4.15461 10.8626 5.66702 8.32244 7.53498 6.36623C9.40294 4.41002 11.5743 3.09241 13.8742 2.51945C16.1742 1.94649 18.5385 2.13418 20.7769 3.06742L21.2281 0.964513Z"
        fill="#777777"
        stroke="#717171"
        strokeWidth="2"
        mask="url(#path-1-inside-1_18_200)"
      />
      <mask id="path-2-inside-2_18_200" fill="white">
        <path d="M32.8393 26.2018C33.1342 23.2778 33.0224 20.302 32.5101 17.4369L30.9822 17.9678C31.4457 20.5595 31.5468 23.2513 31.28 25.8963L32.8393 26.2018Z" />
      </mask>
      <path
        d="M32.8393 26.2018C33.1342 23.2778 33.0224 20.302 32.5101 17.4369L30.9822 17.9678C31.4457 20.5595 31.5468 23.2513 31.28 25.8963L32.8393 26.2018Z"
        fill="#777777"
        stroke="#717171"
        strokeWidth="2"
        mask="url(#path-2-inside-2_18_200)"
      />
    </svg>
  );
}

export function ScissorsSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z" />
    </svg>
  );
}

interface FilledProps {
  filled: boolean;
}

export function HomeSvg({ filled }: FilledProps) {
  return filled ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2F2F2F">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2F2F2F">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </svg>
  );
}

export function FeedSvg({ filled }: FilledProps) {
  return filled ? (
    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 0L10.1228 6.87719L17 8.5L10.1228 10.1228L8.5 17L6.87719 10.1228L0 8.5L6.87719 6.87719L8.5 0Z"
        fill="#2F2F2F"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 3L17.3865 13.1135L27.5 15.5L17.3865 17.8865L15 28L12.6135 17.8865L2.5 15.5L12.6135 13.1135L15 3Z"
        stroke="#2F2F2F"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ProfileSvg({ filled }: FilledProps) {
  return filled ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      fill="#2F2F2F"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      fill="#2F2F2F"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5zm10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z" />
          <path d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
        </g>
      </g>
    </svg>
  );
}
