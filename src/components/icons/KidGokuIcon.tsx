// app/components/HomeIcon.tsx

const KidGokuIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  height = 40,
  width = 180,
  fill= "var(--secondary-color)",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width={width}
    height={height}
    viewBox="0 0 300.000000 218.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g
      transform="translate(0.000000,218.000000) scale(0.100000,-0.100000)"
      fill={fill}
      stroke="none"
    >
      <path d="M1289 2175 c-3 -2 -2 -37 2 -77 11 -105 10 -148 -2 -148 -5 0 -41 25 -79 55 l-68 56 -134 15 c-73 8 -152 21 -176 28 -50 16 -63 5 -34 -27 11 -12 36 -49 56 -83 19 -33 42 -67 50 -74 22 -18 12 -27 -37 -35 -62 -10 -77 -15 -76 -28 0 -7 31 -39 70 -72 38 -32 69 -63 69 -68 0 -5 15 -25 34 -45 19 -21 44 -48 55 -62 11 -14 20 -20 21 -14 0 5 -16 28 -36 50 -20 21 -44 57 -54 79 -10 22 -32 55 -50 73 -31 32 -34 62 -8 62 7 1 27 12 43 25 23 19 26 25 13 25 -10 0 -18 5 -18 10 0 6 -11 28 -25 50 -15 24 -22 46 -18 56 4 12 3 15 -5 10 -7 -4 -12 -1 -12 9 0 13 6 15 28 11 42 -8 182 -26 190 -24 12 3 96 -41 122 -65 31 -28 76 -57 88 -57 11 0 30 46 31 73 2 110 2 107 21 94 11 -6 17 -13 15 -15 -2 -2 17 -24 41 -49 32 -32 43 -50 39 -64 -4 -11 -2 -19 5 -19 8 0 11 -11 8 -30 -2 -16 -2 -31 2 -32 3 -2 13 -22 22 -45 14 -36 14 -43 2 -43 -8 0 -14 -4 -14 -10 0 -5 10 -10 23 -10 12 -1 33 -7 47 -15 14 -8 39 -14 55 -15 27 0 144 -49 120 -50 -5 0 5 -9 24 -21 41 -25 55 -38 64 -63 4 -10 10 -16 13 -13 9 9 75 -55 87 -83 5 -14 13 -45 17 -70 l7 -45 1 45 c1 25 -7 62 -18 85 -17 37 -17 40 -2 47 26 10 245 -1 252 -13 4 -5 14 -7 23 -3 10 3 17 1 17 -5 0 -6 -4 -11 -10 -11 -5 0 -9 -5 -7 -12 1 -7 -2 -12 -8 -13 -9 0 -78 -65 -69 -65 2 0 -5 -16 -16 -35 l-20 -35 36 -15 c20 -8 47 -15 60 -15 12 0 25 -4 28 -9 4 -5 24 -12 46 -16 22 -4 40 -10 40 -14 0 -3 -18 -22 -41 -41 -23 -19 -48 -41 -55 -48 -8 -8 -21 -11 -29 -8 -9 3 -12 0 -9 -8 4 -9 -7 -16 -32 -21 -21 -3 -49 -15 -62 -26 -31 -24 -38 -24 -71 4 -21 17 -26 28 -20 42 4 11 7 34 7 50 0 27 -1 26 -9 -9 -9 -39 -35 -69 -55 -62 -5 2 -19 -9 -30 -25 -10 -16 -22 -29 -25 -29 -13 0 -19 34 -8 40 8 6 8 9 0 14 -6 4 -9 12 -6 17 4 5 1 9 -5 9 -6 0 -9 4 -5 10 8 13 -39 90 -56 90 -3 0 -17 -10 -31 -23 -31 -28 -55 -91 -50 -135 3 -30 6 -33 25 -27 24 8 105 11 111 4 2 -2 7 -15 11 -28 5 -17 4 -21 -5 -16 -6 4 -33 7 -60 7 -52 -1 -113 -26 -144 -61 -11 -12 -26 -21 -35 -21 -11 0 -8 7 12 25 34 33 35 41 0 18 l-26 -17 6 49 c6 58 -18 216 -36 227 -7 4 -8 8 -4 8 9 0 -23 59 -33 61 -34 5 -50 4 -50 -4 0 -6 -3 -8 -6 -4 -6 5 -28 -10 -66 -45 -10 -10 -18 -15 -18 -12 0 14 -113 -126 -128 -158 -13 -31 -21 -37 -37 -32 -32 10 -45 25 -45 50 0 12 -4 26 -10 29 -5 3 -10 15 -10 26 0 12 -7 19 -18 19 -46 0 -92 -66 -96 -137 -3 -62 -12 -68 -57 -32 -28 22 -39 26 -39 15 0 -23 -18 -29 -41 -12 -12 8 -28 12 -36 9 -8 -3 -18 -2 -22 3 -3 5 -26 18 -51 29 -48 21 -132 76 -126 82 2 2 32 14 67 26 95 34 130 57 123 82 -7 22 -35 57 -75 92 -15 12 -74 69 -133 126 l-107 103 81 34 c100 41 153 51 205 40 80 -18 114 -19 109 -6 -7 17 -112 46 -168 46 -54 0 -283 -92 -278 -112 1 -7 31 -38 65 -68 34 -30 103 -94 152 -142 50 -48 99 -94 110 -102 11 -8 18 -16 15 -19 -3 -2 -62 -23 -132 -47 -71 -24 -128 -49 -128 -55 1 -5 31 -25 68 -43 37 -18 96 -48 132 -67 36 -19 79 -35 95 -35 17 0 37 -5 45 -10 12 -9 8 -17 -28 -50 -59 -53 -54 -71 23 -88 33 -7 74 -18 90 -24 17 -6 45 -12 62 -13 23 -1 47 -15 78 -44 26 -24 62 -49 81 -57 33 -14 38 -34 8 -34 -8 0 -14 -5 -14 -11 0 -6 -15 -29 -34 -50 -41 -44 -56 -88 -63 -185 -5 -64 -3 -74 16 -93 23 -23 70 -28 90 -9 11 11 12 6 8 -27 -4 -22 -11 -79 -16 -126 -6 -47 -18 -102 -26 -124 -10 -21 -14 -49 -10 -63 6 -24 8 -24 66 -19 75 7 92 21 115 99 11 34 28 68 41 77 12 10 25 31 29 47 10 43 33 64 70 64 30 0 34 -4 43 -36 6 -20 26 -51 46 -69 23 -22 35 -42 35 -59 0 -39 24 -80 56 -94 45 -21 115 -27 125 -11 13 21 11 52 -5 85 -8 16 -18 67 -21 113 -7 86 -16 124 -34 136 -24 14 -9 22 32 18 35 -4 46 -1 65 20 28 30 31 86 9 158 -22 70 -100 179 -137 191 -11 3 -6 9 16 21 31 16 85 71 114 116 14 21 18 22 38 10 18 -11 25 -11 40 -1 9 7 42 24 72 38 30 14 64 30 75 35 17 8 61 63 73 92 2 4 -25 7 -59 7 -60 0 -62 1 -42 15 12 9 55 29 95 46 40 17 89 46 108 64 19 17 56 46 83 64 26 18 47 36 47 41 0 4 -26 16 -57 25 -112 31 -193 59 -191 65 2 4 43 42 92 86 l90 79 -65 12 c-104 19 -292 28 -329 14 -29 -10 -35 -9 -46 8 -28 39 -111 111 -157 136 -27 15 -72 29 -103 32 -53 6 -57 8 -71 41 -8 19 -23 71 -34 115 -18 72 -27 88 -82 152 -80 92 -105 113 -118 100z m227 -840 c-3 -8 2 -34 10 -57 10 -28 16 -84 17 -163 l2 -119 -30 -10 c-16 -5 -36 -10 -44 -12 -19 -6 5 -34 30 -34 10 0 21 -10 24 -21 7 -21 11 -22 103 -16 125 9 142 19 142 92 0 59 1 60 59 49 27 -6 30 -9 25 -33 -22 -92 -81 -169 -180 -234 -62 -42 -186 -61 -293 -47 -106 14 -177 47 -247 115 -47 46 -53 56 -64 119 -17 92 -16 133 4 194 20 58 32 65 47 25 8 -22 12 -25 20 -13 8 11 8 8 3 -10 -4 -14 -20 -40 -36 -58 -32 -37 -29 -52 8 -52 21 0 24 -3 18 -25 -3 -14 -3 -46 1 -70 8 -60 36 -78 114 -78 88 1 121 11 132 40 6 16 15 23 23 20 22 -9 41 19 26 37 -6 8 -17 13 -23 10 -7 -2 -34 14 -62 37 -27 22 -62 47 -77 55 -18 9 -26 19 -21 27 53 87 168 208 211 221 12 4 22 12 22 17 0 5 9 9 21 9 15 0 19 -5 15 -15z m284 -129 c11 -33 18 -61 16 -63 -2 -3 -14 2 -25 9 -18 11 -26 10 -51 -4 -37 -21 -40 -7 -10 49 11 21 20 45 20 54 0 20 11 32 22 21 4 -4 17 -34 28 -66z m165 -70 c21 -32 12 -106 -21 -163 -25 -44 -61 -64 -74 -43 -8 13 -7 24 5 91 4 21 3 45 -4 57 -9 18 -6 25 26 51 45 37 48 38 68 7z m-753 -45 c20 -17 25 -36 6 -24 -15 9 -20 10 -53 12 -26 1 -35 26 -12 34 15 5 36 -2 59 -22z m23 -67 c17 -11 24 -23 20 -34 -7 -22 31 -70 55 -70 11 0 23 8 29 18 8 14 12 15 23 4 24 -24 -18 -42 -96 -42 -81 0 -91 4 -105 43 -12 31 -15 100 -5 110 7 7 45 -7 79 -29z m823 23 c24 9 11 -5 -23 -26 -37 -21 -39 -20 -29 16 5 17 10 20 23 14 9 -5 22 -6 29 -4z m-1059 -39 c97 -89 79 -174 -19 -92 -30 26 -56 94 -46 120 8 21 14 18 65 -28z m755 -5 c-4 -27 -10 -52 -15 -57 -10 -11 -89 -25 -151 -25 -35 -1 -48 3 -48 13 0 22 17 28 40 14 31 -20 74 8 78 50 3 26 9 33 35 41 64 18 67 16 61 -36z m-419 -14 c4 -6 4 -13 1 -16 -7 -7 -46 26 -46 39 0 10 36 -8 45 -23z m364 -248 c23 -14 -5 -44 -33 -35 -18 6 -19 5 -8 -8 14 -17 19 -104 7 -116 -7 -7 -215 -23 -295 -22 -85 1 -97 7 -98 48 -1 20 5 47 14 60 16 25 13 39 -5 27 -6 -3 -11 -13 -11 -21 0 -21 -17 -17 -34 8 -24 34 -3 52 54 43 25 -3 55 -8 68 -9 13 -2 41 -20 62 -41 l39 -38 45 41 c25 23 56 42 68 43 13 0 39 6 58 13 44 17 52 18 69 7z m-221 -41 c15 0 15 -1 0 -17 -14 -13 -20 -14 -32 -3 -21 16 -20 34 0 26 9 -3 23 -6 32 -6z m242 -34 c-26 -27 -37 -13 -15 20 13 21 19 24 26 13 5 -9 2 -21 -11 -33z m90 -66 c0 -11 -75 -33 -98 -28 -30 6 -26 39 10 69 l33 28 28 -30 c15 -16 27 -34 27 -39z m-560 -19 c0 -22 -3 -23 -37 -17 -21 3 -46 6 -55 6 -22 0 -23 12 -2 55 l16 34 38 -27 c27 -18 39 -35 40 -51z m460 -47 c15 -23 19 -39 13 -45 -13 -13 -31 10 -39 49 -8 42 -1 40 26 -4z m-455 -24 c-9 -17 -20 -28 -25 -25 -10 6 1 35 23 64 18 22 20 -5 2 -39z m405 32 c0 -15 -41 -32 -76 -32 -13 0 -24 -5 -24 -11 0 -7 21 -8 64 -4 75 8 78 5 81 -71 1 -29 6 -59 12 -66 6 -7 13 -30 15 -52 3 -37 2 -38 -34 -42 -20 -1 -51 -10 -68 -19 -42 -22 -57 -14 -80 40 -19 44 -21 45 -63 45 -49 0 -81 -25 -93 -73 -9 -37 -25 -42 -64 -22 -18 9 -49 15 -73 14 -33 -2 -41 1 -38 12 13 47 21 92 28 153 7 65 10 70 33 71 14 1 56 5 94 10 l69 8 -7 -24 c-5 -13 -14 -44 -20 -68 -7 -25 -18 -47 -24 -49 -16 -5 -15 19 4 74 8 25 13 48 10 51 -9 9 -36 -56 -42 -100 -6 -40 -4 -45 16 -50 36 -9 50 2 50 42 0 38 27 102 46 108 8 3 15 -16 19 -49 10 -79 14 -88 39 -88 31 0 46 20 40 51 -16 75 -28 108 -40 113 -22 8 -16 34 9 38 55 8 117 3 117 -10z m148 -2 c3 -20 -52 -20 -70 -1 -11 12 -10 13 4 8 10 -3 20 -2 24 4 9 14 38 7 42 -11z m-589 -7 c9 -7 -16 -24 -41 -28 -29 -6 -48 22 -26 36 11 7 56 2 67 -8z m285 8 c12 -19 -7 -41 -35 -41 -22 0 -29 5 -29 19 0 24 52 42 64 22z m-84 -15 c-9 -8 -46 -16 -87 -20 -70 -5 -72 -5 -60 14 10 17 23 20 87 20 64 0 72 -2 60 -14z m126 -81 c15 -57 9 -85 -14 -71 -13 8 -27 110 -17 126 10 16 15 9 31 -55z m284 26 c0 -38 -23 -61 -60 -61 -40 0 -57 32 -35 66 12 19 24 24 55 24 38 0 40 -2 40 -29z m-602 -18 c2 -14 -7 -32 -22 -48 -22 -22 -29 -24 -48 -14 -29 15 -38 28 -38 56 0 26 13 32 65 30 33 -2 41 -6 43 -24z m489 -270 c-7 -9 -4 -13 9 -14 11 0 1 -7 -20 -15 -21 -8 -45 -19 -53 -25 -7 -7 -15 -10 -18 -8 -6 7 8 23 38 42 24 15 27 23 22 47 -10 44 6 59 20 19 7 -22 8 -39 2 -46z m-42 57 c-3 -5 0 -18 7 -29 15 -24 11 -29 -27 -33 -37 -4 -45 22 -16 51 21 21 47 29 36 11z m-395 -29 c0 -30 -13 -47 -28 -37 -5 3 -7 19 -4 36 6 39 32 40 32 1z m60 -24 c0 -21 -27 -34 -41 -20 -6 6 -7 22 -4 36 6 23 9 24 26 14 10 -6 19 -20 19 -30z m-39 -43 c39 -20 30 -30 -12 -15 -18 6 -43 11 -55 11 -13 0 -24 5 -24 10 0 15 57 12 91 -6z m467 -39 c12 -25 18 -45 13 -45 -13 0 -51 55 -51 74 0 28 14 17 38 -29z m-49 13 c11 -30 10 -30 -29 -17 -31 11 -32 13 -15 26 26 18 34 17 44 -9z m-479 3 c0 -6 -4 -13 -10 -16 -15 -9 -12 -25 6 -25 8 0 13 4 10 9 -3 4 0 15 7 24 11 15 14 15 37 -3 l25 -20 -23 0 c-12 0 -34 -7 -47 -16 -20 -13 -25 -14 -25 -3 0 8 -9 4 -21 -11 l-20 -25 7 25 c13 47 54 93 54 61z m471 -47 c30 -9 49 -19 42 -21 -16 -6 -91 15 -98 27 -8 13 -8 13 56 -6z m-401 -4 c0 -11 -29 -24 -75 -36 -44 -11 -26 11 23 27 26 10 48 17 50 18 1 1 2 -4 2 -9z" />
      <path d="M1505 860 c-3 -5 -26 -10 -51 -10 -24 0 -44 -4 -44 -10 0 -14 94 -12 108 2 7 7 12 16 12 20 0 11 -18 10 -25 -2z" />
      <path d="M1561 674 c-26 -33 -26 -46 -3 -67 53 -48 108 11 66 71 -20 29 -38 28 -63 -4z m24 -26 c-4 -44 -3 -44 -16 -31 -13 13 -4 63 10 63 5 0 7 -15 6 -32z m38 0 c6 -22 -7 -48 -25 -48 -5 0 -5 6 0 16 5 9 7 25 5 35 -3 11 -1 19 5 19 5 0 12 -10 15 -22z" />
      <path d="M1185 1866 c22 -19 42 -33 43 -31 6 5 -62 64 -73 65 -5 0 8 -16 30 -34z" />
      <path d="M1280 1794 c0 -5 17 -20 37 -34 63 -42 63 -42 57 -25 -3 8 -10 15 -16 15 -5 0 -25 12 -44 26 -19 15 -34 22 -34 18z" />
      <path d="M1376 1772 c-3 -5 15 -8 39 -8 25 1 45 4 45 9 0 10 -78 9 -84 -1z" />
      <path d="M1074 1528 c1 -30 2 -31 26 -20 13 6 12 10 -6 28 l-21 20 1 -28z" />
      <path d="M1011 1460 c-19 -16 -33 -32 -30 -34 2 -3 22 11 44 30 22 19 35 34 30 34 -6 -1 -25 -14 -44 -30z" />
      <path d="M1213 1445 c-7 -8 -13 -19 -13 -25 0 -5 -4 -10 -9 -10 -12 0 -61 -113 -61 -141 1 -14 12 6 25 45 14 39 33 79 43 90 33 39 44 56 36 56 -5 -1 -15 -7 -21 -15z" />
      <path d="M946 1379 c-19 -37 -49 -149 -43 -155 2 -3 10 17 17 43 7 26 21 68 32 92 23 51 18 67 -6 20z" />
    </g>
  </svg>
);

export default KidGokuIcon;