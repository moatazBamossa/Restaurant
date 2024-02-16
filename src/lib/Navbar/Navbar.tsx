import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const links = [
  {
    label: 'Home',
    value: 'home',
    to: '#'
  },
  {
    label: 'Menu',
    value: 'menu',
    to: '#'
  },
  {
    label: 'Services',
    value: 'services',
    to: '#'
  },
  {
    label: 'Offers',
    value: 'offers',
    to: '#'
  }
];

const Navbar = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="flex justify-between items-center pr-[154px] py-[47px]">
      <div className="flex gap-[4.7px] justify-center items-center">
        <div className=" flex items-center justify-center text-white rounded-[8px] h-[41px] w-[34px] bg-primary ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="25"
            viewBox="0 0 19 25"
            fill="none"
          >
            <path
              d="M15.85 0.078125C16.3713 0.078125 16.7567 0.100792 17.006 0.146126C17.278 0.168793 17.5727 0.270792 17.89 0.452124C18.23 0.633458 18.468 0.939458 18.604 1.37012C18.74 1.80079 18.808 2.37879 18.808 3.10412C18.808 3.82946 18.74 4.40746 18.604 4.83812C18.468 5.26879 18.23 5.57479 17.89 5.75612C17.55 5.91479 17.244 6.01679 16.972 6.06213C16.7227 6.08479 16.326 6.09612 15.782 6.09612H5.37799V9.53013H12.076C12.62 9.53013 13.0167 9.55279 13.266 9.59813C13.538 9.62079 13.844 9.72279 14.184 9.90413C14.7733 10.2441 15.068 11.1395 15.068 12.5901C15.068 14.1768 14.6373 15.1175 13.776 15.4121C13.4133 15.5255 12.8353 15.5821 12.042 15.5821H5.37799V22.0081C5.37799 22.5521 5.35532 22.9488 5.30999 23.1981C5.28732 23.4475 5.27247 23.7276 5 24.0001C4.90542 24.0947 3.76923 24.0001 3.35199 24.0001C1.76532 24.0001 0.835985 23.5695 0.563985 22.7081C0.427985 22.3455 0.359985 21.7675 0.359985 20.9741V4.07013C0.359985 2.91412 0.575319 2.13212 1.00599 1.72412C1.43665 1.29346 2.25265 1.07812 3.45399 1.07812L15.85 0.078125Z"
              fill="white"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="71"
          height="24"
          viewBox="0 0 71 24"
          fill="none"
        >
          <path
            d="M15.5 0.5C18.2627 0.5 14.448 1.78434 17.948 5.22012C19.9827 7.21746 21 9.70012 21 12.6681C21 15.6175 20.0293 18.1375 18.088 20.2281C16.1467 22.3001 13.7573 23.3361 10.92 23.3361C8.08268 23.3361 5.66535 22.3095 3.66801 20.2561C1.68935 18.2028 0.700012 15.7575 0.700012 12.9201C0.700012 11.3708 0.980012 9.92412 1.54001 8.58012C2.10001 7.21746 2.84668 6.07879 3.78001 5.16412C4.71335 4.24945 5.78668 3.53079 7.00001 3.00812C8.21335 2.48545 14.212 0.5 15.5 0.5ZM5.65601 12.7801C5.65601 14.4415 6.18801 15.7948 7.25201 16.8401C8.33468 17.8668 9.53868 18.3801 10.864 18.3801C12.1893 18.3801 13.384 17.8761 14.448 16.8681C15.512 15.8601 16.044 14.5068 16.044 12.8081C16.044 11.1095 15.5027 9.74679 14.42 8.72012C13.356 7.69346 12.1613 7.18012 10.836 7.18012C9.51068 7.18012 8.31601 7.70279 7.25201 8.74812C6.18801 9.77479 5.65601 11.1188 5.65601 12.7801Z"
            fill="black"
          />
          <path
            d="M33.0229 2.22412C35.7856 2.22412 38.1843 3.22279 40.2189 5.22012C42.2536 7.21746 43.271 9.70012 43.271 12.6681C43.271 15.6175 42.3003 18.1375 40.359 20.2281C38.4176 22.3001 36.0283 23.3361 33.1909 23.3361C30.3536 23.3361 27.9363 22.3095 25.9389 20.2561C23.9603 18.2028 22.9709 15.7575 22.9709 12.9201C22.9709 11.3708 23.2509 9.92412 23.8109 8.58012C24.3709 7.21746 25.1176 6.07879 26.0509 5.16412C26.9843 4.24945 28.0576 3.53079 29.2709 3.00812C30.4843 2.48545 31.7349 2.22412 33.0229 2.22412ZM27.9269 12.7801C27.9269 14.4415 28.459 15.7948 29.5229 16.8401C30.6056 17.8668 31.8096 18.3801 33.1349 18.3801C34.4603 18.3801 35.6549 17.8761 36.7189 16.8681C37.7829 15.8601 38.3149 14.5068 38.3149 12.8081C38.3149 11.1095 37.7736 9.74679 36.691 8.72012C35.627 7.69346 34.4323 7.18012 33.1069 7.18012C31.7816 7.18012 30.587 7.70279 29.5229 8.74812C28.459 9.77479 27.9269 11.1188 27.9269 12.7801Z"
            fill="black"
          />
          <path
            d="M48.1539 2.44812L53.3339 2.47612C56.0406 2.47612 58.4206 3.45612 60.4739 5.41612C62.5272 7.35745 63.5539 9.75612 63.5539 12.6121C63.5539 15.4495 62.5459 17.8855 60.5299 19.9201C58.5326 21.9548 56.1059 22.9721 53.2499 22.9721H48.1259C46.9872 22.9721 46.2779 22.7388 45.9979 22.2721C45.7739 21.8801 45.6619 21.2828 45.6619 20.4801V4.91212C45.6619 4.46412 45.6712 4.13745 45.6899 3.93212C45.7272 3.72679 45.8206 3.48412 45.9699 3.20412C46.2312 2.70012 46.9592 2.44812 48.1539 2.44812ZM53.3339 18.0161C54.6779 18.0161 55.8912 17.5215 56.9739 16.5321C58.0566 15.5241 58.5979 14.2641 58.5979 12.7521C58.5979 11.2401 58.0659 9.98012 57.0019 8.97212C55.9566 7.94545 54.7246 7.43212 53.3059 7.43212H50.6179V18.0161H53.3339Z"
            fill="black"
          />
          <path
            d="M65.9367 4.94012C65.9367 4.51079 65.9461 4.19345 65.9647 3.98812C66.0021 3.76412 66.0954 3.51212 66.2447 3.23212C66.5061 2.72812 67.2341 2.47612 68.4287 2.47612C69.7354 2.47612 70.5101 2.82145 70.7527 3.51212C70.8461 3.82945 70.8927 4.31479 70.8927 4.96812V20.5361C70.8927 20.9841 70.8741 21.3108 70.8367 21.5161C70.8181 21.7215 70.7341 21.9641 70.5847 22.2441C70.3234 22.7481 69.5954 23.0001 68.4007 23.0001C67.0941 23.0001 66.3287 22.6455 66.1047 21.9361C65.9927 21.6375 65.9367 21.1615 65.9367 20.5081V4.94012Z"
            fill="black"
          />
        </svg>
      </div>
      <div style={{ display: 'flex', gap: 60 }}>
        {links.map((link) => (
          <h3
            onClick={() => setActive(link.value)}
            className={
              link.value === active ? 'text-primary' : 'text-secondary'
            }
          >
            {link.label}
          </h3>
        ))}
      </div>
      <div className="flex justify-center items-center gap-[43px]">
        <FontAwesomeIcon style={{ width: 32, height: 32 }} icon={faSearch} />
        <div className="relative">
          <FontAwesomeIcon
            style={{ width: 32, height: 32 }}
            icon={faBagShopping}
          />
          <div
            className="flex justify-center items-center text-[14px]
           text-white w-[20px] h-[20px] bg-primary rounded-[8px] absolute top-[-6px] right-[-8px]"
          >
            8
          </div>
        </div>
        <Button className="w-[179px] h-[60px] rounded-[40px] gap-3.5 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1_278)">
              <path
                d="M12.9999 1.00013C12.9999 0.734916 13.1053 0.480562 13.2928 0.293025C13.4803 0.105489 13.7347 0.000132124 13.9999 0.000132124C16.6512 0.00304372 19.193 1.05755 21.0678 2.93228C22.9425 4.80701 23.997 7.34886 23.9999 10.0001C23.9999 10.2654 23.8945 10.5197 23.707 10.7072C23.5195 10.8948 23.2651 11.0001 22.9999 11.0001C22.7347 11.0001 22.4803 10.8948 22.2928 10.7072C22.1053 10.5197 21.9999 10.2654 21.9999 10.0001C21.9975 7.87913 21.1539 5.84568 19.6541 4.34591C18.1544 2.84613 16.1209 2.00251 13.9999 2.00013C13.7347 2.00013 13.4803 1.89478 13.2928 1.70724C13.1053 1.5197 12.9999 1.26535 12.9999 1.00013ZM13.9999 6.00013C15.0608 6.00013 16.0782 6.42156 16.8283 7.17171C17.5785 7.92185 17.9999 8.93927 17.9999 10.0001C17.9999 10.2654 18.1053 10.5197 18.2928 10.7072C18.4803 10.8948 18.7347 11.0001 18.9999 11.0001C19.2651 11.0001 19.5195 10.8948 19.707 10.7072C19.8945 10.5197 19.9999 10.2654 19.9999 10.0001C19.9983 8.40932 19.3657 6.88412 18.2408 5.75925C17.1159 4.63437 15.5907 4.00172 13.9999 4.00013C13.7347 4.00013 13.4803 4.10549 13.2928 4.29303C13.1053 4.48056 12.9999 4.73492 12.9999 5.00013C12.9999 5.26535 13.1053 5.5197 13.2928 5.70724C13.4803 5.89478 13.7347 6.00013 13.9999 6.00013ZM23.0929 16.7391C23.6724 17.3202 23.9978 18.1074 23.9978 18.9281C23.9978 19.7488 23.6724 20.536 23.0929 21.1171L22.1829 22.1661C13.9929 30.0071 -5.93707 10.0821 1.78292 1.86613L2.93292 0.866132C3.51469 0.302809 4.29485 -0.0088188 5.10462 -0.00133303C5.91439 0.00615273 6.68866 0.332151 7.25992 0.906132C7.29092 0.937132 9.14391 3.34413 9.14391 3.34413C9.69374 3.92176 9.99982 4.68906 9.99851 5.48654C9.99721 6.28401 9.68863 7.05031 9.13691 7.62613L7.97892 9.08213C8.61976 10.6392 9.56198 12.0544 10.7514 13.2462C11.9409 14.4381 13.3541 15.3831 14.9099 16.0271L16.3749 14.8621C16.9508 14.3108 17.717 14.0026 18.5142 14.0015C19.3114 14.0004 20.0785 14.3065 20.6559 14.8561C20.6559 14.8561 23.0619 16.7081 23.0929 16.7391ZM21.7169 18.1931C21.7169 18.1931 19.3239 16.3521 19.2929 16.3211C19.0869 16.1169 18.8085 16.0023 18.5184 16.0023C18.2283 16.0023 17.9499 16.1169 17.7439 16.3211C17.7169 16.3491 15.6999 17.9561 15.6999 17.9561C15.564 18.0643 15.4022 18.1352 15.2306 18.1619C15.0589 18.1885 14.8832 18.17 14.7209 18.1081C12.7054 17.3577 10.8746 16.1829 9.35275 14.6632C7.83085 13.1436 6.65332 11.3146 5.89992 9.30013C5.83312 9.13559 5.81134 8.95622 5.83682 8.78047C5.86231 8.60472 5.93413 8.43893 6.04492 8.30013C6.04492 8.30013 7.65192 6.28213 7.67892 6.25613C7.88318 6.05012 7.99779 5.77175 7.99779 5.48163C7.99779 5.19152 7.88318 4.91315 7.67892 4.70713C7.64792 4.67713 5.80692 2.28213 5.80692 2.28213C5.59782 2.09464 5.32492 1.99423 5.04417 2.00148C4.76341 2.00873 4.49606 2.1231 4.29692 2.32113L3.14692 3.32113C-2.49507 10.1051 14.7759 26.4181 20.7209 20.8001L21.6319 19.7501C21.8454 19.5524 21.9736 19.2794 21.9895 18.9888C22.0053 18.6983 21.9076 18.4129 21.7169 18.1931Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_278">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
