import PropTypes from "prop-types";

export default function BankIcon({ className, ...rest }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...rest}
    >
      <g clipPath="url(#clip0_157_41)">
        <path
          d="M11.9988 3.27161C10.795 3.27161 9.81592 4.25066 9.81592 5.45452C9.81592 6.65837 10.795 7.63738 11.9988 7.63738C13.2027 7.63738 14.1817 6.65832 14.1817 5.45452C14.1817 4.25072 13.2026 3.27161 11.9988 3.27161ZM11.9988 6.54648C11.3969 6.54648 10.9069 6.05644 10.9069 5.45452C10.9069 4.85259 11.3969 4.36255 11.9988 4.36255C12.6008 4.36255 13.0908 4.85259 13.0908 5.45452C13.0908 6.05644 12.6008 6.54648 11.9988 6.54648Z"
          fill="currentColor"
        />
        <path
          d="M23.4546 9.81818C23.7561 9.81818 24.0001 9.57569 24.0001 9.27424V7.09266C24.0001 6.90039 23.8989 6.72197 23.7332 6.62394L13.0632 0.287427C13.0584 0.284205 13.0536 0.281546 13.0488 0.278887C12.3856 -0.0886305 11.6378 -0.0997782 10.9362 0.286353L0.266881 6.62394C0.101199 6.72192 0 6.90039 0 7.09266V9.27424C0 9.57569 0.243972 9.81818 0.545472 9.81818H2.18184V19.6368C0.978495 19.6368 0 20.6152 0 21.8184V23.4546C0 23.7561 0.243972 24 0.545472 24H23.4546C23.7561 24 24.0001 23.7561 24.0001 23.4546V21.8184C24.0001 20.6152 23.0216 19.6368 21.8182 19.6368V9.81818H23.4546ZM22.9091 21.8182V22.9091H1.09089V21.8182C1.09089 21.2168 1.58042 20.7273 2.18179 20.7273H2.72726H21.2727H21.8182C22.4196 20.7273 22.9091 21.2168 22.9091 21.8182ZM3.27273 19.6364V9.81818H5.45457V19.6364H3.27273ZM6.54546 19.6364V9.81818H9.81819V19.6364H6.54546ZM10.9091 19.6364V9.81818H13.0909V19.6364H10.9091ZM14.1818 19.6364V9.81818H17.4545V19.6364H14.1818ZM18.5455 19.6364V9.81818H20.7273V19.6364H18.5455ZM1.09089 8.72728V7.40147L11.4775 1.231C11.8173 1.04404 12.1784 1.04455 12.514 1.22726L22.9091 7.40147V8.72728H1.09089Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_157_41">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

BankIcon.propTypes = {
  className: PropTypes.string,
};
