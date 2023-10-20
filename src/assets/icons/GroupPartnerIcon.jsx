import PropTypes from "prop-types";

export default function GroupPartnerIcon({ className, ...rest }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.9114 27.7114H68.6411C69.6778 27.7114 70.4227 26.7346 70.1478 25.7349C68.6925 20.4403 63.8445 16.5505 58.0877 16.5505C54.1274 16.5505 50.597 18.3914 48.3056 21.2643C50.7255 22.8047 52.6931 25.0288 53.9114 27.7114ZM42.4995 76.1571L43.5841 76.7752C44.5702 77.3405 45.7034 76.8408 46.1588 76.0136C46.6683 75.0871 46.32 73.9227 45.4016 73.408C44.9547 73.1574 44.5049 72.8766 44.0531 72.621C43.9017 73.8302 43.075 75.081 42.4995 76.1571ZM59.5266 37.3197L67.796 58.6505C67.9453 59.036 68.402 59.235 68.7869 59.0858L72.8931 57.4939C73.2788 57.3444 73.4777 56.888 73.3285 56.503L65.0589 35.1721C64.9095 34.7868 64.4533 34.5878 64.0685 34.7366L59.9617 36.3286C59.5764 36.4783 59.3774 36.9349 59.5266 37.3197ZM64.436 38.2446C64.436 39.0004 63.8233 39.613 63.0675 39.613C62.3117 39.613 61.6991 39.0004 61.6991 38.2446C61.6991 37.4888 62.3117 36.8761 63.0675 36.8761C63.8233 36.8761 64.436 37.4888 64.436 38.2446ZM48.8314 50.6194C45.9655 48.986 42.9886 50.191 39.8889 51.4458C36.6211 52.7688 33.1844 54.1591 30.2167 51.1163C32.8422 49.5088 35.3725 47.6285 37.5405 45.4377C38.371 44.5983 39.2758 43.8057 40.2516 43.1389C44.4353 40.2689 47.5167 41.5285 50.1469 42.6035C51.6456 43.2161 55.3377 44.5744 56.75 43.1557L58.7099 42.1066L64.2464 56.388L60.9052 57.7821C60.576 57.4066 60.1864 57.0914 59.7527 56.8441L48.8314 50.6194ZM28.0567 49.4963C27.2116 49.9899 26.9919 51.1277 27.5927 51.8996C31.8599 57.3902 36.4642 55.5263 40.8264 53.7603C43.3563 52.7363 45.7856 51.7527 47.601 52.7874L58.5222 59.0122C59.4247 59.5268 59.8138 60.7085 59.2816 61.6278C58.7794 62.5244 57.6078 62.89 56.7041 62.3728C54.197 60.9688 51.691 59.5633 49.1972 58.1357C48.5986 57.7932 47.8355 58.0008 47.4931 58.5996C47.1506 59.1982 47.3583 59.9611 47.957 60.3036C50.4569 61.7347 52.9703 63.143 55.4835 64.5505C56.3994 65.0661 56.7555 66.2216 56.2449 67.1497C55.7545 68.0413 54.5567 68.4261 53.6603 67.9064L43.768 62.3402C43.1666 62.0032 42.4058 62.2174 42.0688 62.8188C41.7317 63.4202 41.946 64.181 42.5472 64.518C45.2388 66.0325 47.9241 67.5719 50.6155 69.0811C51.05 69.4124 51.3978 69.7652 51.5352 70.2378C51.8295 71.2521 51.2459 72.2999 50.2349 72.5943C49.7681 72.7302 49.2508 72.6897 48.7953 72.4393L43.0566 69.1925C41.9138 67.8086 40.042 67.2363 38.3152 67.7483C37.588 65.4043 35.1088 64.0702 32.7463 64.77C32.0808 62.6258 29.9433 61.3061 27.732 61.6683C27.5128 60.2764 26.66 59.0621 25.4117 58.3958C23.731 57.4988 21.6624 57.766 20.2602 59.0419C19.9849 57.7028 19.5544 56.433 18.0088 55.833C17.2767 55.5489 16.531 55.1935 15.8086 54.873L21.977 40.9166L24.4283 42.0475C26.6678 43.2896 28.7264 42.8077 30.9633 42.2836C32.8695 41.8371 34.9372 41.3532 37.2602 42.2949C36.7449 42.7338 36.2474 43.2003 35.7727 43.6802C33.4969 45.98 30.8449 47.8691 28.0567 49.4963ZM12.1378 57.0021L21.358 36.1411C21.5281 35.7563 21.3569 35.3044 20.9711 35.1339L16.943 33.3536C16.558 33.1835 16.1064 33.3547 15.9358 33.7407L6.68736 54.6655C6.51736 55.0502 6.68845 55.5021 7.07408 55.6725L11.0414 57.4261C11.5755 57.6275 11.8894 57.4891 12.1378 57.0021ZM17.7172 38.2682C16.9622 38.2332 16.3786 37.5928 16.4136 36.8378C16.4486 36.0828 17.0891 35.4993 17.8439 35.5343C18.5989 35.5693 19.1825 36.2097 19.1475 36.9646C19.1125 37.7194 18.472 38.3032 17.7172 38.2682ZM21.5235 61.4139L19.5183 65.163C18.9992 66.1336 19.3683 67.3602 20.3394 67.8796C21.0231 68.2452 21.8841 68.1699 22.5022 67.7063L25.1436 63.1347C25.5364 62.1922 25.1419 61.0744 24.2399 60.593C23.2692 60.0749 22.0428 60.4425 21.5235 61.4139ZM27.2261 64.5157C26.1258 66.42 25.0033 68.2978 23.967 70.2349C23.448 71.2055 23.8169 72.4321 24.7881 72.9514C25.7647 73.4736 26.9747 73.1007 27.5038 72.1322L30.4186 66.4841C30.5789 65.6313 30.1699 64.7444 29.4006 64.3338C28.7055 63.9628 27.8506 64.0385 27.2261 64.5157ZM32.626 67.645L29.8274 73.0646C29.7811 73.8469 30.1833 74.5872 30.8772 74.9583C31.731 75.4149 32.8127 75.181 33.4061 74.418L35.9878 69.456C36.1466 68.6053 35.7364 67.7216 34.9695 67.3124C34.2075 66.9057 33.2461 67.0468 32.626 67.645ZM38.1988 70.6199L35.676 75.4686C35.6049 76.2658 36.0119 77.0446 36.7206 77.4236C37.6913 77.9427 38.9178 77.5738 39.4374 76.6025L41.36 73.0075C41.8738 72.0468 41.5066 70.808 40.5388 70.291C39.778 69.8846 38.8192 70.0244 38.1988 70.6199ZM40.247 7.20645C43.7394 7.20645 46.5706 10.0375 46.5706 13.53C46.5706 17.0224 43.7395 19.8535 40.247 19.8535C36.7547 19.8535 33.9236 17.0222 33.9236 13.53C33.9235 10.0377 36.7547 7.20645 40.247 7.20645ZM29.6935 32.5771C28.6566 32.5771 27.9119 31.6003 28.1867 30.6005C29.642 25.3058 34.49 21.416 40.247 21.416C46.0039 21.416 50.8519 25.3057 52.3072 30.6003C52.582 31.6 51.8372 32.5771 50.8005 32.5771H29.6935ZM22.4064 2.34082C25.8988 2.34082 28.73 5.17207 28.73 8.66441C28.73 12.1568 25.8989 14.988 22.4064 14.988C18.9139 14.988 16.083 12.1569 16.083 8.66441C16.0828 5.17207 18.9139 2.34082 22.4064 2.34082ZM11.8528 27.7114H26.5825C27.801 25.0288 29.7686 22.8047 32.1885 21.2641C29.897 18.3913 26.3669 16.5503 22.4064 16.5503C16.6495 16.5503 11.8014 20.4402 10.3461 25.7349C10.0714 26.7346 10.816 27.7114 11.8528 27.7114ZM58.0877 2.34082C61.58 2.34082 64.4111 5.17207 64.4111 8.66441C64.4111 12.1568 61.58 14.988 58.0877 14.988C54.5953 14.988 51.7641 12.1569 51.7641 8.66441C51.7642 5.17207 54.5953 2.34082 58.0877 2.34082Z"
        fill="currentColor"
      />
    </svg>
  );
}

GroupPartnerIcon.propTypes = {
  className: PropTypes.string,
};
